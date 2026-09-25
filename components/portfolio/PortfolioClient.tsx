'use client'

import { useReveal } from './hooks'
import TopBar from './TopBar'
import Hero from './Hero'
import Work from './Work'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

export default function PortfolioClient() {
  useReveal()

  return (
    <>
      <a className="skip" href="#work">Skip to projects</a>
      <TopBar />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
