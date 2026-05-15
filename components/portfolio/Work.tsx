'use client'

import { useRef, useState, useEffect } from 'react'
import { PROJECTS, type Project } from '@/lib/data'

function PreviewCard({
  project,
  loaded,
  onLoad,
}: {
  project: Project
  loaded: boolean
  onLoad: () => void
}) {
  const host = project.preview
    ? new URL(project.preview).hostname.replace(/^www\./, '')
    : null

  if (project.kind === 'npm' && project.npm) {
    return (
      <>
        <div className="badge">NPM · LIVE</div>
        <div className="npm-card">
          <div className="top">
            <div className="npm-logo">npm</div>
            <div style={{ fontSize: 10, color: 'var(--fg-low)' }}>npmjs.com</div>
          </div>
          <div>
            <div className="pkg-name">{project.npm.name}</div>
            <div className="pkg-sub">TypeScript wrapper for the Jikan API</div>
            <div className="stats">
              <div className="stat">
                <div className="k">WEEKLY DL</div>
                <div className="v">{project.npm.downloads}</div>
              </div>
              <div className="stat">
                <div className="k">TYPE</div>
                <div className="v">{project.npm.version}</div>
              </div>
            </div>
          </div>
          <code>$ npm i {project.npm.name}</code>
        </div>
      </>
    )
  }

  if (project.preview) {
    return (
      <>
        <div className="badge">LIVE</div>
        <div className="iframe-wrap">
          <iframe
            src={project.preview}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            onLoad={onLoad}
          />
          <div className={`loading${loaded ? ' hidden' : ''}`}>LOADING PREVIEW…</div>
        </div>
        <div className="meta">
          <div className="title">{project.title}</div>
          <div className="host">{host} ↗</div>
        </div>
      </>
    )
  }

  return (
    <div
      className="fallback"
      style={{ background: `linear-gradient(135deg, ${project.tone} 0%, var(--bg-2) 100%)` }}
    >
      <div>PRIVATE · NO PREVIEW</div>
      <div>
        <div className="title">{project.title}</div>
        <div className="sub">{project.italic}</div>
      </div>
    </div>
  )
}

export default function Work() {
  const previewRef = useRef<HTMLDivElement>(null)
  const [hoverIdx, setHoverIdx] = useState(-1)
  const [loadedSet, setLoadedSet] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = previewRef.current
      if (!el) return
      const cardW = 420, cardH = 290, gap = 24
      let x = e.clientX + gap
      let y = e.clientY
      if (x + cardW > window.innerWidth - 16) x = e.clientX - cardW - gap
      const minY = cardH / 2 + 16
      const maxY = window.innerHeight - cardH / 2 - 16
      y = Math.max(minY, Math.min(maxY, y))
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.transform = el.classList.contains('visible')
        ? 'translate(0, -50%) scale(1)'
        : 'translate(0, -50%) scale(0.94)'
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const project = hoverIdx >= 0 ? PROJECTS[hoverIdx] : null

  return (
    <section className="section shell" id="work">
      <div className="section-head">
        <div className="label reveal">
          <span className="num">02</span>SELECTED WORK
        </div>
        <h2 className="reveal">
          Things I&apos;ve <em>built</em>,<br />shipped &amp; maintained.
        </h2>
      </div>

      <div className="work-list">
        {PROJECTS.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            target={p.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="work-row reveal"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(-1)}
          >
            <div className="num">0{i + 1}</div>
            <div className="title">
              {p.title} <em>— {p.italic}</em>
            </div>
            <div className="desc">{p.desc}</div>
            <div className="stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="arrow">↗</div>
          </a>
        ))}
      </div>

      <div ref={previewRef} className={`work-preview${project ? ' visible' : ''}`}>
        {project && (
          <PreviewCard
            project={project}
            loaded={!!loadedSet[project.id]}
            onLoad={() => setLoadedSet((s) => ({ ...s, [project.id]: true }))}
          />
        )}
      </div>
    </section>
  )
}
