'use client'

import { useCursor, useReveal } from './hooks'
import TopBar from './TopBar'
import Hero from './Hero'
import Work from './Work'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

export default function PortfolioClient() {
  useCursor()
  useReveal()

  return (
    <>
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
