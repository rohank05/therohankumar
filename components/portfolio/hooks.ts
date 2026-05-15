import { useRef, useEffect, useState } from 'react'

export function useCursor() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'cursor-dot'
    ring.className = 'cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let x = 0, y = 0, rx = 0, ry = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    }

    const tick = () => {
      rx += (x - rx) * 0.15
      ry += (y - ry) * 0.15
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      const t = target.closest('a, button, [data-cursor="hover"]')
      const txt = target.closest('[data-cursor="text"]')
      ring.classList.toggle('hover', !!t && !txt)
      ring.classList.toggle('text', !!txt)
    }

    document.addEventListener('mouseover', onOver)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      dot.remove()
      ring.remove()
    }
  }, [])
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    els.forEach((el) => io.observe(el))

    const promote = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight + 100 && r.bottom > -100) {
          el.classList.add('in')
        }
      })
    }
    requestAnimationFrame(() => requestAnimationFrame(promote))

    const safety = setTimeout(() => {
      els.forEach((el) => el.classList.add('in'))
    }, 3000)

    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [])
}

export function useScramble<T extends HTMLElement = HTMLElement>(
  target: string,
  opts: { delay?: number; duration?: number } = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = target

    const chars = '!<>-_\\/[]{}—=+*^?#'
    const delay = opts.delay ?? 250
    const duration = opts.duration ?? 900
    let raf = 0
    let startedAt = 0

    const tick = (now: number) => {
      if (!startedAt) startedAt = now
      const elapsed = now - startedAt
      if (elapsed >= duration) {
        el.textContent = target
        return
      }
      const t = elapsed / duration
      const cursor = t * (target.length + 2)
      let out = ''
      for (let i = 0; i < target.length; i++) {
        const ch = target[i]
        if (ch === ' ' || cursor > i + 1) {
          out += ch
        } else {
          out += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      el.textContent = out
      raf = requestAnimationFrame(tick)
    }

    const start = setTimeout(() => { raf = requestAnimationFrame(tick) }, delay)
    const safety = setTimeout(() => {
      cancelAnimationFrame(raf)
      el.textContent = target
    }, delay + duration + 400)

    return () => {
      clearTimeout(start)
      clearTimeout(safety)
      cancelAnimationFrame(raf)
      el.textContent = target
    }
  }, [target, opts.delay, opts.duration])

  return ref
}

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }

    const onLeave = () => { el.style.transform = '' }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}

export function useLiveTime(tz = 'Asia/Kolkata') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: tz,
      }).format(new Date())
      setTime(t)
    }
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [tz])

  return time
}
