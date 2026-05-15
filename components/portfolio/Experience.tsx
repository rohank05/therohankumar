import { EXPERIENCE } from '@/lib/data'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <div className="section-head">
        <div className="label reveal">
          <span className="num">03</span>EXPERIENCE
        </div>
        <h2 className="reveal">
          Where I&apos;ve <em>been</em>.
        </h2>
      </div>
      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="exp-item reveal">
            <div className="when">{e.when}</div>
            <div>
              <div className="role">{e.role}</div>
              <div className="company">@ {e.company}</div>
              <ul>
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="where">{e.where}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
