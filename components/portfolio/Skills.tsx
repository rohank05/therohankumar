import type { CSSProperties } from 'react'
import Burst from './Burst'
import { EDUCATION, MARQUEE_TERMS, SKILLS, type Face, type Skin } from '@/lib/data'

const BELT_SKINS: Skin[] = ['lid', 'tomato', 'vinyl', 'pink', 'ink', 'yellow']
const BELT_FACES: Face[] = ['bagel', 'bungee', 'shrikhand', 'rubik', 'bagel', 'mono']
const TAPES: Skin[] = ['ink', 'lid', 'tomato', 'pink']
const EDU_SKINS: Skin[] = ['vinyl', 'pink', 'lid']

function Belt({ terms, reverse }: { terms: string[]; reverse?: boolean }) {
  const doubled = [...terms, ...terms]
  return (
    <div className={`belt${reverse ? ' reverse' : ''}`} aria-hidden="true">
      <div className="track">
        {doubled.map((t, i) => (
          <span
            key={i}
            className={`stk belt-item skin-${BELT_SKINS[i % BELT_SKINS.length]} face-${BELT_FACES[(i + (reverse ? 3 : 0)) % BELT_FACES.length]}`}
            style={{ '--r': `${i % 2 ? 3 : -3}deg` } as CSSProperties}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const half = Math.ceil(MARQUEE_TERMS.length / 2)

  return (
    <section className="kit" id="toolkit" aria-labelledby="kit-title">
      <div className="wrap">
        <h2 id="kit-title" className="sec-title">
          The stack I{' '}
          <span className="stk tagword skin-tomato" style={{ '--r': '-2deg' } as CSSProperties}>reach for</span>.
        </h2>
      </div>

      <div className="belts">
        <Belt terms={MARQUEE_TERMS.slice(0, half)} />
        <Belt terms={MARQUEE_TERMS.slice(half)} reverse />
      </div>

      <div className="wrap">
        <div className="groups">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <div key={group} className="group">
              <h3
                className={`dymo skin-${TAPES[i]}`}
                style={{ '--r': `${i % 2 ? 1.5 : -1.5}deg`, '--d': `${i * 120}ms` } as CSSProperties}
                data-rv="unroll"
              >
                {group}
              </h3>
              <ul className="tapes">
                {items.map((s, j) => (
                  <li
                    key={s}
                    className={`dymo small skin-${TAPES[i]}`}
                    style={{ '--r': `${[0.8, -1.2, 1.4, -0.6, 1, -1.5][j % 6]}deg` } as CSSProperties}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="sub-title">School &amp; certificates</h3>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => {
            const style = { '--r': `${[-1.6, 1.2, -2.5, 6][i]}deg`, '--d': `${i * 90}ms` } as CSSProperties
            if (i === 3)
              return (
                <div key={e.title} className="edu-award" style={style} data-rv="slap">
                  <Burst fill="var(--yellow)" />
                  <div>
                    <span className="when">{e.when}</span>
                    <h4>{e.title}</h4>
                    <p>{e.where}</p>
                  </div>
                </div>
              )
            return (
              <div key={e.title} className={`stk edu edu-${i} skin-${EDU_SKINS[i]}`} style={style} data-rv="slap">
                <span className="when">{e.when}</span>
                <h4>{e.title}</h4>
                <p>{e.where}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
