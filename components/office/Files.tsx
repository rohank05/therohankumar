'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from '@/lib/data'
import { DEPTS, onInk, type DeptId } from '@/lib/office'
import { SITE } from '@/lib/site'
import { ArrowUpRight, Close, Download, Github, Linkedin, Lock, Mail } from './Icons'

function useLiveTime(tz = 'Asia/Kolkata') {
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

const RESUME = '/Rohan_Kumar_Resume.pdf'

export function ResumeLink({ className = '' }: { className?: string }) {
  return (
    <a className={`key-btn ${className}`} href={RESUME} download>
      <Download size={18} /> Resume
    </a>
  )
}

export function EmailLink({ className = '' }: { className?: string }) {
  return (
    <a className={`key-btn is-primary ${className}`} href={`mailto:${SITE.email}`}>
      <Mail size={18} /> Email me
    </a>
  )
}

/** A stapled riso sheet. Every file is in the DOM; only the open one shows. */
function Sheet({
  id,
  open,
  title,
  onClose,
  children,
}: {
  id: DeptId
  open: boolean
  title: ReactNode
  onClose: () => void
  children: ReactNode
}) {
  const d = DEPTS.find((x) => x.id === id)!
  return (
    <article
      className="file"
      id={`file-${id}`}
      aria-labelledby={`file-${id}-title`}
      hidden={!open}
      style={{ ['--dept' as string]: d.ink, ['--dept-on' as string]: onInk(d.ink) }}
    >
      <span className="staple" aria-hidden="true" />
      <header className="file-band">
        <span className="file-dept">{d.name}</span>
        <button type="button" className="file-close" onClick={onClose}>
          <Close size={18} />
          <span>Close file</span>
        </button>
      </header>
      <div className="file-body">
        <h2 id={`file-${id}-title`} className="file-title" tabIndex={-1}>
          {title}
        </h2>
        {children}
      </div>
    </article>
  )
}

export default function Files({ open, onClose }: { open: DeptId | null; onClose: () => void }) {
  const time = useLiveTime()
  const sheet = (id: DeptId) => ({ id, open: open === id, onClose })

  return (
    <div className={`files${open ? ' has-open' : ''}`}>
      <Sheet {...sheet('reception')} title={<>Hi, I&apos;m Rohan.</>}>
        <p className="lede">
          I&apos;m <strong>Rohan Kumar</strong>, a <strong>software engineer</strong> in Delhi with 3+ years building
          full-stack systems across CRM, fintech and IoT. I write <strong>backends in Node, NestJS and Go</strong>, ship{' '}
          <strong>frontends in React &amp; Next.js</strong>, and run the boring infra in between so the interesting
          parts stay interesting.
        </p>
        <dl className="facts">
          <div className="fact">
            <dt>NovoStack</dt>
            <dd className="data">SDE 1 · shipping since 2025</dd>
          </div>
          <div className="fact">
            <dt>5,000+</dt>
            <dd>npm downloads a week</dd>
          </div>
          <div className="fact">
            <dt className="data clock" suppressHydrationWarning>
              {time || '--:--:--'}
            </dt>
            <dd>Delhi, IST</dd>
          </div>
          <div className="fact">
            <dt lang="hi" className="deva">
              रोहन
            </dt>
            <dd>Rohan, in Hindi</dd>
          </div>
        </dl>
        <p className="stamp" aria-label="Status">
          Available for opportunities
        </p>
        <div className="file-actions">
          <EmailLink />
          <ResumeLink />
        </div>
      </Sheet>

      <Sheet {...sheet('product')} title={<>Things I&apos;ve built, shipped &amp; maintained.</>}>
        <p className="lede">Six desks on the floor: products in production, client builds, and open source.</p>
        <ol className="entries">
          {PROJECTS.map((p) => (
            <li key={p.id} className="entry">
              <div className="entry-head">
                <h3>{p.title}</h3>
                <span className="badge">{p.fact}</span>
              </div>
              <p className="entry-sub">{p.italic}</p>
              <p>{p.desc}</p>
              <ul className="chips" aria-label="Stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {p.href !== '#' ? (
                <a className="entry-link" href={p.href} target="_blank" rel="noreferrer">
                  Visit {p.title} <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="entry-link is-private">
                  <Lock size={15} /> Private build
                </span>
              )}
            </li>
          ))}
        </ol>
      </Sheet>

      <Sheet {...sheet('hr')} title={<>Where I&apos;ve been.</>}>
        <ol className="entries">
          {EXPERIENCE.map((e) => (
            <li key={e.company} className="entry">
              <div className="entry-head">
                <h3>{e.company}</h3>
                <span className="badge">{e.role}</span>
              </div>
              <p className="data entry-meta">
                {e.when} · {e.where}
              </p>
              <ul className="bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Sheet>

      <Sheet {...sheet('lab')} title={<>The stack I reach for.</>}>
        <div className="racks">
          {Object.entries(SKILLS).map(([group, items]) => (
            <section key={group} className="rack" aria-label={group}>
              <h3>{group}</h3>
              <ul className="chips">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Sheet>

      <Sheet {...sheet('training')} title={<>School &amp; certificates.</>}>
        <ol className="entries">
          {EDUCATION.map((e) => (
            <li key={e.title} className="entry">
              <p className="data entry-meta">{e.when}</p>
              <h3>{e.title}</h3>
              <p>{e.where}</p>
            </li>
          ))}
        </ol>
      </Sheet>

      <Sheet {...sheet('mail')} title={<>Have something interesting to build?</>}>
        <a className="mail-big" href={`mailto:${SITE.email}`}>
          <Mail size={28} />
          <span>{SITE.email}</span>
        </a>
        <div className="file-actions">
          <ResumeLink />
          <a className="key-btn" href="https://github.com/rohank05" target="_blank" rel="me noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a className="key-btn" href="https://www.linkedin.com/in/rohank05" target="_blank" rel="me noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <p className="foot" suppressHydrationWarning>
          © {new Date().getFullYear()} Rohan Kumar · Delhi, IN
        </p>
      </Sheet>
    </div>
  )
}
