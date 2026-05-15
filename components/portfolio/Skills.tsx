import { SKILLS, MARQUEE_TERMS } from '@/lib/data'

export default function Skills() {
  const terms = [...MARQUEE_TERMS, ...MARQUEE_TERMS]

  return (
    <section className="section shell" id="about">
      <div className="section-head">
        <div className="label reveal">
          <span className="num">04</span>TOOLKIT
        </div>
        <h2 className="reveal">
          The stack I <em>reach for</em>.
        </h2>
      </div>

      <div className="skills-marquee reveal">
        <div className="track">
          {terms.map((t, i) => (
            <span key={i}>
              {t}
              <span className="dot" />
            </span>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="group reveal">
            <div className="label">{group.toUpperCase()}</div>
            <ul>
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 80 }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--fg-low)',
          marginBottom: 24,
          letterSpacing: '0.05em',
        }}>
          EDUCATION &amp; CERTIFICATIONS
        </div>
        <div className="edu-grid">
          <div className="edu-card reveal">
            <div className="when">2025 — PRESENT</div>
            <h3>Master of Computer Applications</h3>
            <p>Manipal University Jaipur · Remote</p>
          </div>
          <div className="edu-card reveal">
            <div className="when">2019 — 2024</div>
            <h3>Bachelor of Computer Applications</h3>
            <p>Indira Gandhi National Open University · Remote</p>
          </div>
          <div className="edu-card reveal">
            <div className="when">JAN 2023</div>
            <h3>Supervised Machine Learning</h3>
            <p>Coursera · Regression &amp; Classification</p>
          </div>
          <div className="edu-card reveal">
            <div className="when">2024</div>
            <h3>Tackling Challenges with Confidence</h3>
            <p>Spraxa Solutions Pvt. Ltd. — Internal Award</p>
          </div>
        </div>
      </div>
    </section>
  )
}
