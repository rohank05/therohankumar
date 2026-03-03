import React from 'react'
import './index.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import AuraPoints from './components/AuraPoints'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <CustomCursor />
      <AuraPoints />

      {/* Smooth CSS Infinite Scroll Bar */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>GO • REACT • NEXT.JS • NESTJS • POSTGRESQL • SQL • JAVA • C# • KOTLIN • TYPESCRIPT • NODE.JS • AWS • GEN Z CERTIFIED • LOW KEY GOATED • NO CAP CODE • Rohan Kumar • 100% Aura</span>
          <span>GO • REACT • NEXT.JS • NESTJS • POSTGRESQL • SQL • JAVA • C# • KOTLIN • TYPESCRIPT • NODE.JS • AWS • GEN Z CERTIFIED • LOW KEY GOATED • NO CAP CODE • Rohan Kumar • 100% Aura</span>
        </div>
      </div>

      <nav style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '1rem',
        width: 'fit-content'
      }}>
        <div className="nb-card" style={{ padding: '0.5rem 2rem', background: 'white' }}>
          <div style={{ display: 'flex', gap: '2rem', fontWeight: '900' }}>
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>HOME</a>
            <a href="#skills" style={{ color: 'black', textDecoration: 'none' }}>SKILLS</a>
            <a href="#projects" style={{ color: 'black', textDecoration: 'none' }}>WORK</a>
            <a href="#experience" style={{ color: 'black', textDecoration: 'none' }}>GRIND</a>
            <a href="#contact" style={{ color: 'black', textDecoration: 'none' }}>HYPE ME</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
