import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react'
import { STICKER_PACK } from '@/lib/data'

/**
 * Below-the-fold elements marked [data-rv] start hidden and play their
 * entrance (slap / drop / unroll, chosen in CSS) when scrolled into view.
 * Anything already on screen at mount is left alone, so content never blinks.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.remove('pre')
          e.target.classList.add('in')
          io.unobserve(e.target)
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('pre')
        io.observe(el)
      }
    })
    return () => io.disconnect()
  }, [])
}

export function useLiveTime(tz = 'Asia/Kolkata') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: tz,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [tz])

  return time
}

/* ── The lid: drag, re-slap and add stickers; remembered per visitor ── */

type Offset = { x: number; y: number; z: number }
export type Slapped = { key: string; pack: number; x: number; y: number; r: number; z: number }

const STORE = 'rk-lid-v1'
const MAX_SLAPPED = 24

export function useLid() {
  const boardRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [offsets, setOffsets] = useState<Record<string, Offset>>({})
  const [slapped, setSlapped] = useState<Slapped[]>([])
  const z = useRef(20)
  const packCursor = useRef(0)
  const loaded = useRef(false)

  // Only fine pointers on wide screens get the toy; phones keep a normal scroll
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1000px)')
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)

    try {
      const raw = localStorage.getItem(STORE)
      if (raw) {
        const saved = JSON.parse(raw)
        setOffsets(saved.offsets ?? {})
        setSlapped(saved.slapped ?? [])
        z.current = saved.z ?? 20
        packCursor.current = saved.cursor ?? 0
      }
    } catch {
      /* storage blocked: the lid simply starts fresh */
    }
    loaded.current = true
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!loaded.current) return
    try {
      localStorage.setItem(
        STORE,
        JSON.stringify({ offsets, slapped, z: z.current, cursor: packCursor.current })
      )
    } catch {
      /* ignore */
    }
  }, [offsets, slapped])

  // Pointer dragging, delegated from the board to any [data-drag] sticker
  useEffect(() => {
    const board = boardRef.current
    if (!board || !enabled) return

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      const el = (e.target as Element).closest<HTMLElement>('[data-drag]')
      if (!el || !board.contains(el)) return
      e.preventDefault()
      const id = el.dataset.drag!
      const [ox, oy] = (el.style.translate || '0px 0px').split(' ').map((v) => parseFloat(v) || 0)
      const sx = e.clientX
      const sy = e.clientY
      const top = ++z.current
      el.style.zIndex = String(top)
      el.classList.add('grabbing')
      el.setPointerCapture(e.pointerId)

      const onMove = (ev: PointerEvent) => {
        el.style.translate = `${ox + ev.clientX - sx}px ${oy + ev.clientY - sy}px`
      }
      const onUp = (ev: PointerEvent) => {
        el.classList.remove('grabbing')
        el.classList.remove('landed')
        void el.offsetWidth
        el.classList.add('landed')
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
        el.removeEventListener('pointercancel', onUp)
        const x = ox + ev.clientX - sx
        const y = oy + ev.clientY - sy
        if (id.startsWith('slap:')) {
          const key = id.slice(5)
          setSlapped((list) => list.map((s) => (s.key === key ? { ...s, z: top } : s)))
        }
        setOffsets((o) => ({ ...o, [id]: { x, y, z: top } }))
      }
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', onUp)
    }

    board.addEventListener('pointerdown', onDown)
    return () => board.removeEventListener('pointerdown', onDown)
  }, [enabled])

  const slapAt = useCallback((xPct: number, yPct: number) => {
    const pack = packCursor.current % STICKER_PACK.length
    packCursor.current += 1
    const sticker: Slapped = {
      key: `${Date.now().toString(36)}${pack}`,
      pack,
      x: xPct,
      y: yPct,
      r: Math.round(Math.random() * 28 - 14),
      z: ++z.current,
    }
    setSlapped((list) => [...list, sticker].slice(-MAX_SLAPPED))
  }, [])

  const onBoardClick = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      if (!enabled) return
      const target = e.target as Element
      if (target !== e.currentTarget && !target.hasAttribute('data-surface')) return
      const r = e.currentTarget.getBoundingClientRect()
      slapAt(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100)
    },
    [enabled, slapAt]
  )

  const slapRandom = useCallback(() => {
    slapAt(56 + Math.random() * 38, 8 + Math.random() * 74)
  }, [slapAt])

  const reset = useCallback(() => {
    setOffsets({})
    setSlapped([])
    packCursor.current = 0
    boardRef.current?.querySelectorAll<HTMLElement>('[data-drag]').forEach((el) => {
      el.style.translate = ''
      el.style.zIndex = ''
    })
  }, [])

  /** Style + attribute props that make an element a draggable sticker */
  const drag = useCallback(
    (id: string, style?: CSSProperties) => {
      const o = enabled ? offsets[id] : undefined
      return {
        'data-drag': id,
        style: o ? { ...style, translate: `${o.x}px ${o.y}px`, zIndex: o.z } : style,
      }
    },
    [enabled, offsets]
  )

  const touched = slapped.length > 0 || Object.keys(offsets).length > 0

  return { boardRef, enabled, slapped, drag, onBoardClick, slapRandom, reset, touched }
}
