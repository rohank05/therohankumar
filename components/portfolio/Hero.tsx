'use client'

import type { CSSProperties } from 'react'
import { STICKER_PACK } from '@/lib/data'
import { useLid, useLiveTime } from './hooks'
import Burst from './Burst'
import { Download, Mail, Sparkle, Undo } from './Icons'

const d = (ms: number, r?: number) => ({ '--d': `${ms}ms`, ...(r !== undefined && { '--r': `${r}deg` }) }) as CSSProperties

export default function Hero() {
  const time = useLiveTime('Asia/Kolkata')
  const { boardRef, enabled, slapped, drag, onBoardClick, slapRandom, reset, touched } = useLid()

  return (
    <section className="lid" id="top" aria-labelledby="hero-name">
      <div
        className={`wrap board${enabled ? ' can-drag' : ''}`}
        ref={boardRef}
        onClick={onBoardClick}
      >
        <div className="intro" data-surface>
          <h1 id="hero-name" className="name">
            <span className="word skin-yellow w1" data-t="Rohan" {...drag('w1', d(80, -4))}>
              Rohan
            </span>{' '}
            <span className="word skin-pink w2" data-t="Kumar" {...drag('w2', d(200, 2.5))}>
              Kumar
            </span>
          </h1>

          <p className="stk skin-vinyl label" data-load {...drag('label', d(360, -1.2))}>
            I&apos;m <strong>Rohan Kumar</strong>, a <strong>software engineer</strong> in Delhi with 3+ years building full-stack
            systems across CRM, fintech and IoT. I write <strong>backends in Node, NestJS and Go</strong>,
            ship <strong>frontends in React &amp; Next.js</strong>, and run the boring infra in between
            so the interesting parts stay interesting.
          </p>

          <div className="cta" data-load style={d(460)}>
            <a className="stk btn skin-tomato" href="mailto:mail@therohankumar.com" style={{ '--r': '-2deg' } as CSSProperties}>
              <Mail /> Email me
            </a>
            <a
              className="stk btn skin-yellow"
              href="/Rohan_Kumar_Resume.pdf"
              download
              style={{ '--r': '1.5deg' } as CSSProperties}
            >
              <Download /> Resume
            </a>
          </div>
        </div>

        <div className="facts" data-surface>
          <div className="stk fact f-role skin-mint" data-load {...drag('role', { ...d(520, 5), '--x': '63%', '--y': '2%' } as CSSProperties)}>
            <span className="big">NovoStack</span>
            <span className="data">SDE 1 · shipping since 2025</span>
          </div>

          <div className="stk fact f-holo" data-load {...drag('holo', { ...d(600, -8), '--x': 'calc(100% - 150px + max(0px, (100vw - 1320px) / 2))', '--y': '8%' } as CSSProperties)}>
            <span className="big">5,000+</span>
            <span className="small">npm downloads a week</span>
          </div>

          <div className="stk fact f-deva skin-pink" data-load {...drag('deva', { ...d(680, 7), '--x': '60%', '--y': '31%' } as CSSProperties)}>
            <span lang="hi" aria-label="Rohan, in Hindi">रोहन</span>
          </div>

          <div className="stk fact f-clock skin-ink" data-load {...drag('clock', { ...d(760, -3), '--x': '67%', '--y': '43%' } as CSSProperties)}>
            <span className="hole" aria-hidden="true" />
            <span className="city">Delhi</span>
            <span className="time" suppressHydrationWarning>{time || '--:--:--'}</span>
            <span className="tz">IST</span>
          </div>

          <div className="stk fact f-ribbon skin-tomato" data-load {...drag('ribbon', { ...d(840, 6), '--x': 'calc(100% - 470px)', '--y': '67%' } as CSSProperties)}>
            Node <i /> Go <i /> React
          </div>

          <div className="fact f-burst" data-load {...drag('burst', { ...d(920, -10), '--x': 'calc(100% - 250px)', '--y': '47%' } as CSSProperties)}>
            <Burst fill="var(--yellow)" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {slapped.map((s) => {
          const p = STICKER_PACK[s.pack]
          const id = `slap:${s.key}`
          const dp = drag(id, {
            left: `${s.x}%`,
            top: `${s.y}%`,
            zIndex: s.z,
            '--r': `${s.r}deg`,
          } as CSSProperties)
          return (
            <div
              key={s.key}
              aria-hidden="true"
              className={`slapped shape-${p.shape} face-${p.face}${p.shape === 'burst' ? '' : ` stk skin-${p.skin}`}`}
              {...dp}
            >
              {p.shape === 'burst' && <Burst fill={`var(--${p.skin})`} />}
              <span>{p.text}</span>
            </div>
          )
        })}

        {enabled && (
          <div className="lid-hint" data-load style={d(1100)}>
            <span className="tape">Drag any sticker. Click the lid to slap on more.</span>
            <button type="button" className="stk mini skin-vinyl" onClick={slapRandom}>
              <Sparkle size={16} /> Slap one
            </button>
            {touched && (
              <button type="button" className="stk mini skin-ink" onClick={reset}>
                <Undo size={16} /> Clean lid
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
