import type { CSSProperties } from 'react'
import { PROJECTS, type Skin } from '@/lib/data'
import { ArrowUpRight, Lock } from './Icons'

// The corner badge always contrasts with the sticker it sits on
const BADGE: Record<Skin, Skin> = {
  lid: 'yellow',
  tomato: 'vinyl',
  yellow: 'ink',
  mint: 'pink',
  pink: 'mint',
  ink: 'yellow',
  vinyl: 'tomato',
}
const TILT = [-1.4, 1.1, 1.6, -1.2, 0.8, -0.6]

export default function Work() {
  return (
    <section className="sheet" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <h2 id="work-title" className="sec-title">
          Things I&apos;ve{' '}
          <span className="stk tagword skin-lid" style={{ '--r': '-3deg' } as CSSProperties}>built</span>,
          shipped &amp; maintained.
        </h2>
        <p className="sec-lede">
          Six stickers off the sheet: products in production, client builds, and open source.
          Peel the live ones to visit.
        </p>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => {
            const live = p.href.startsWith('http')
            const style = { '--r': `${TILT[i]}deg`, '--d': `${(i % 3) * 90}ms` } as CSSProperties
            const body = (
              <>
                <span className={`stk badge skin-${BADGE[p.skin]}`}>{p.fact}</span>
                <h3 className={`proj-title face-${p.face}`}>{p.title}</h3>
                <p className="proj-sub">{p.italic}</p>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-foot">
                  <ul className="chips" aria-label="Stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  {live ? (
                    <span className="go" aria-hidden="true">
                      <ArrowUpRight size={24} />
                    </span>
                  ) : (
                    <span className="private">
                      <Lock size={15} /> Private build
                    </span>
                  )}
                </div>
              </>
            )
            const cls = `stk proj skin-${p.skin} span-${i}`
            return live ? (
              <a key={p.id} href={p.href} target="_blank" rel="noreferrer" className={`${cls} peel`} style={style} data-rv="slap">
                {body}
              </a>
            ) : (
              <article key={p.id} className={cls} style={style} data-rv="slap">
                {body}
              </article>
            )
          })}
          <div className="slot" aria-hidden="true">
            <span>peeled off, it&apos;s on the lid now</span>
          </div>
        </div>
      </div>
    </section>
  )
}
