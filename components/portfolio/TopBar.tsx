'use client'

import { useLiveTime } from './hooks'

export default function TopBar() {
  const time = useLiveTime('Asia/Kolkata')

  return (
    <div className="topbar">
      <div className="left">
        <span className="name">RK</span>
        <span style={{ color: 'var(--fg-low)' }}>/</span>
        <span>Software Engineer</span>
      </div>
      <div className="right">
        <a href="#work">Work</a>
        <a href="#experience" className="hide-sm">Experience</a>
        <a href="#about" className="hide-sm">About</a>
        <a href="#contact">Contact</a>
        <span className="status hide-sm">
          <span className="dot" />
          <span suppressHydrationWarning>DEL · {time}</span>
        </span>
      </div>
    </div>
  )
}
