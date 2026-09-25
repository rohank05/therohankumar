import type { CSSProperties } from 'react'
import { EXPERIENCE } from '@/lib/data'
import Burst from './Burst'

const SKINS = ['tomato', 'lid'] as const
const TILT = [-1.8, 1.6]

export default function Experience() {
  return (
    <section className="jobs" id="experience" aria-labelledby="jobs-title">
      <div className="wrap">
        <h2 id="jobs-title" className="sec-title">
          Where I&apos;ve{' '}
          <span className="stk tagword skin-pink" style={{ '--r': '2.5deg' } as CSSProperties}>been</span>.
        </h2>

        <div className="tags">
          {EXPERIENCE.map((e, i) => (
            <article
              key={e.company}
              className={`nametag skin-${SKINS[i % 2]}`}
              style={{ '--r': `${TILT[i % 2]}deg`, '--d': `${i * 140}ms` } as CSSProperties}
              data-rv="drop"
            >
              <header className="band">
                <span className="hello">Hello</span>
                <span className="iwas">I shipped code at</span>
              </header>
              <div className="tag-body">
                <h3 className="company">{e.company}</h3>
                <p className="tag-data">
                  <span>{e.role}</span>
                  <span>{e.when}</span>
                  <span>{e.where}</span>
                </p>
                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="band-foot" />
              {e.company.startsWith('Spraxa') && (
                <div className="seal" aria-hidden="true">
                  <Burst fill="var(--yellow)" />
                  <span>
                    Award
                    <b>2024</b>
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
