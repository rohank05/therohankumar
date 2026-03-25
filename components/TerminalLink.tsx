'use client'

import { useEffect, useState } from 'react'

interface TerminalLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
}

export default function TerminalLink({ href, children, external = true }: TerminalLinkProps) {
  const [ctrlHeld, setCtrlHeld] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        setCtrlHeld(true)
        document.body.classList.add('ctrl-held')
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        setCtrlHeld(false)
        document.body.classList.remove('ctrl-held')
      }
    }

    const handleBlur = () => {
      setCtrlHeld(false)
      document.body.classList.remove('ctrl-held')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
      document.body.classList.remove('ctrl-held')
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (!e.ctrlKey && !e.metaKey) {
      e.preventDefault()
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="terminal-link"
      title="Ctrl+Click to open"
    >
      {children}
    </a>
  )
}
