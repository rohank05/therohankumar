'use client'

import dynamic from 'next/dynamic'
import {
  Component,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { DEPTS, onInk, type DeptId } from '@/lib/office'
import Files, { EmailLink, ResumeLink } from './Files'
import type { Insets } from './Scene'

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <p className="office-note">Printing the floor…</p>,
})

class SceneBoundary extends Component<{ onFail: () => void; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    this.props.onFail()
  }
  render() {
    return this.state.failed ? (
      <p className="office-note">
        This browser can&apos;t draw the 3D office. Every department still opens from the directory.
      </p>
    ) : (
      this.props.children
    )
  }
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function OfficeApp() {
  const [active, setActive] = useState<DeptId>('reception')
  const [open, setOpen] = useState<DeptId | null>(null)
  const [walking, setWalking] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [tall, setTall] = useState(false)
  const [webgl, setWebgl] = useState<boolean | null>(null)

  const pending = useRef<DeptId | null>(null)
  const lastOpen = useRef<DeptId | null>(null)
  const insets = useRef<Insets>({ l: 0, r: 0, t: 0, b: 0 })
  const headRef = useRef<HTMLElement>(null)
  const dirRef = useRef<HTMLElement>(null)
  const filesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      setReduced(mq.matches)
      setTall(window.innerWidth < 860 || window.innerHeight > window.innerWidth * 1.15)
    }
    sync()
    setWebgl(hasWebGL())
    mq.addEventListener('change', sync)
    window.addEventListener('resize', sync)
    return () => {
      mq.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  // Tell the camera how much of the screen the UI covers, so the floor sits in what's left
  useLayoutEffect(() => {
    const measure = () => {
      const dir = dirRef.current?.getBoundingClientRect()
      const head = headRef.current?.getBoundingClientRect()
      // layout box, not the animated one: the sheet is mid-slap when this runs
      const sheet = filesRef.current?.querySelector<HTMLElement>('.file:not([hidden])')
      const file = sheet ? { top: sheet.offsetTop, left: sheet.offsetLeft } : null
      if (tall) {
        insets.current = {
          l: 0,
          r: 0,
          t: head ? head.bottom : 0,
          b: file ? window.innerHeight - file.top : dir ? window.innerHeight - dir.top : 0,
        }
      } else {
        insets.current = {
          l: dir ? dir.right : 0,
          r: file ? window.innerWidth - file.left + 24 : 0,
          // headroom for the far rooms' tags, which hang above the back wall
          t: 48,
          b: 0,
        }
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ;[headRef.current, dirRef.current, filesRef.current].forEach((el) => el && ro.observe(el))
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [tall, open])

  const sceneLive = webgl === true

  const select = useCallback(
    (id: DeptId) => {
      pending.current = id
      if (!sceneLive || reduced) {
        setActive(id)
        setWalking(false)
        setOpen(id)
        return
      }
      if (id === active && !walking) {
        setOpen(id)
        return
      }
      setOpen(null)
      setActive(id)
      setWalking(true)
    },
    [active, walking, sceneLive, reduced],
  )

  const onArrive = useCallback((id: DeptId) => {
    setWalking(false)
    if (pending.current === id) {
      pending.current = null
      setOpen(id)
    }
  }, [])

  const close = useCallback(() => setOpen(null), [])

  // Focus follows the file: into it on open, back to its directory key on close
  useEffect(() => {
    if (open) {
      lastOpen.current = open
      document.getElementById(`file-${open}-title`)?.focus({ preventScroll: true })
    } else if (lastOpen.current) {
      const key = document.querySelector<HTMLButtonElement>(`[data-key="${lastOpen.current}"]`)
      const lost = document.activeElement === document.body || filesRef.current?.contains(document.activeElement)
      if (key && lost) key.focus()
      lastOpen.current = null
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target as HTMLElement
      if (t.closest('input, textarea, [contenteditable]')) return
      if (e.key === 'Escape' && open) {
        e.preventDefault()
        close()
        return
      }
      const n = Number(e.key)
      if (n >= 1 && n <= DEPTS.length) select(DEPTS[n - 1].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, select])

  const idx = DEPTS.findIndex((d) => d.id === active)

  return (
    <div
      className={`office${walking ? ' is-walking' : ''}${open ? ' has-file' : ''}`}
      style={{ '--here': idx } as CSSProperties}
    >
      <a className="skip" href="#directory">
        Skip to the building directory
      </a>

      <div className="stage" aria-hidden="true">
        {sceneLive && (
          <SceneBoundary onFail={() => setWebgl(false)}>
            <Scene
              active={active}
              open={open}
              reduced={reduced}
              tall={tall}
              insets={insets}
              onArrive={onArrive}
              onPick={select}
            />
          </SceneBoundary>
        )}
        {webgl === false && (
          <p className="office-note">
            This browser can&apos;t draw the 3D office. Every department still opens from the directory.
          </p>
        )}
      </div>

      {/* one column on wide screens, so the name block and the directory stack instead of colliding */}
      <div className="rail">
        <header className="masthead" ref={headRef}>
          <h1 className="name">
            <span className="name-line" data-t="Rohan">
              Rohan
            </span>{' '}
            <span className="name-line" data-t="Kumar">
              Kumar
            </span>
          </h1>
          <p className="role">
            Software engineer in Delhi. <span className="data">Node · Go · React</span>
          </p>
          <div className="masthead-actions">
            <EmailLink />
            <ResumeLink />
          </div>
        </header>

        <nav className="directory" id="directory" aria-label="Building directory" ref={dirRef}>
          <p className="directory-hint">
            Pick a department and I&apos;ll walk you there.
            <span className="kbd-hint"> Keys 1–6 work too.</span>
          </p>
          <div className="keys-wrap">
            <span className="here-light" aria-hidden="true" />
            <ol className="keys">
              {DEPTS.map((d, i) => {
                const here = active === d.id
                return (
                  <li key={d.id}>
                    <button
                      type="button"
                      className={`key${here ? ' is-here' : ''}${open === d.id ? ' is-open' : ''}`}
                      data-key={d.id}
                      aria-controls={`file-${d.id}`}
                      aria-expanded={open === d.id}
                      aria-current={here && !walking ? 'location' : undefined}
                      style={{ '--dept-ink': d.ink, '--dept-on': onInk(d.ink) } as CSSProperties}
                      onClick={() => (open === d.id ? close() : select(d.id))}
                    >
                      <span className="key-n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="key-name">{d.name}</span>
                      <span className="key-holds">{d.holds}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
          <p className="walk-status" role="status">
            {walking ? `Walking to ${DEPTS[idx].name}…` : ''}
          </p>
        </nav>
      </div>

      <main className="desk" ref={filesRef}>
        <Files open={open} onClose={close} />
      </main>
    </div>
  )
}
