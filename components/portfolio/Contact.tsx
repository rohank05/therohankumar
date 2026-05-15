'use client'

import { useMagnetic } from './hooks'

export default function Contact() {
  const ref = useMagnetic<HTMLAnchorElement>(0.2)

  return (
    <section className="contact shell" id="contact">
      <div className="section-head">
        <div className="label reveal">
          <span className="num">05</span>CONTACT
        </div>
        <div />
      </div>
      <div className="big reveal">
        Have something <em>interesting</em>
        <br />
        to <span className="accent">build</span>?
      </div>
      <a className="email-link reveal" ref={ref} href="mailto:mail@therohankumar.com">
        mail@therohankumar.com <span className="arrow">↗</span>
      </a>

      <div className="foot">
        <div>© {new Date().getFullYear()} ROHAN KUMAR · DELHI, IN</div>
        <div className="links">
          <a href="https://github.com/rohank05" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com/in/rohank05" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://therohankumar.com" target="_blank" rel="noreferrer">WEB</a>
        </div>
        <div className="right">+91 9483400823</div>
      </div>
    </section>
  )
}
