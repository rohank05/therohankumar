'use client'

import { useScramble, useLiveTime } from './hooks'

export default function Hero() {
  const ref1 = useScramble<HTMLSpanElement>('Rohan', { delay: 200 })
  const ref2 = useScramble<HTMLSpanElement>('Kumar', { delay: 600 })
  const time = useLiveTime('Asia/Kolkata')

  return (
    <section className="hero shell" id="top">
      <div className="eyebrow reveal">
        <span className="num">01 —</span>
        <span className="status">
          <span className="dot" />
          {' '}Available for opportunities
        </span>
      </div>
      <h1>
        <span ref={ref1}>Rohan</span>
        <br />
        <span ref={ref2} className="italic">Kumar</span>
        <span className="accent">.</span>
      </h1>
      <p className="lede reveal">
        I&apos;m a <strong>software engineer</strong> with 3+ years building full-stack systems
        across CRM, fintech and IoT. I write <strong>backends in Node, NestJS and Go</strong>,
        ship <strong>frontends in React &amp; Next.js</strong>, and run the boring infra in between
        so the interesting parts stay interesting.
      </p>
      <div className="meta-grid reveal">
        <div className="cell">
          <div className="label">CURRENTLY</div>
          <div className="val">SDE 1 @ NovoStack</div>
        </div>
        <div className="cell">
          <div className="label">FOCUS</div>
          <div className="val">Full-stack · Node · Go · React</div>
        </div>
        <div className="cell">
          <div className="label">BASED IN</div>
          <div className="val" suppressHydrationWarning>Delhi, IN · {time} IST</div>
        </div>
        <div className="cell">
          <div className="label">SHIPPING SINCE</div>
          <div className="val">2023 · 5,000+ NPM dl/wk</div>
        </div>
      </div>
    </section>
  )
}
