'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { findCommand, getCommandSuggestions, easterEggs } from '@/lib/commands'
import { asciiLogo } from '@/lib/data'
import HelpOutput from './outputs/HelpOutput'
import AboutOutput from './outputs/AboutOutput'
import SkillsOutput from './outputs/SkillsOutput'
import ProjectsOutput from './outputs/ProjectsOutput'
import ExperienceOutput from './outputs/ExperienceOutput'
import ContactOutput from './outputs/ContactOutput'
import NeofetchOutput from './outputs/NeofetchOutput'

interface HistoryEntry {
  id: number
  command: string
  output: React.ReactNode
  isTyping?: boolean
}

const bootSequence = [
  { text: 'Establishing SSH connection to therohankumar.com...', delay: 0 },
  { text: 'Authenticating...', delay: 800 },
  { text: 'Connection established.', delay: 1400 },
  { text: '', delay: 1800 },
  { text: `Last login: ${new Date().toLocaleString()}`, delay: 2000 },
  { text: 'Welcome to Rohan\'s Portfolio Server', delay: 2400 },
]

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [bootLines, setBootLines] = useState<string[]>([])
  const [showLogo, setShowLogo] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const idCounter = useRef(0)

  // Boot sequence effect
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    // Schedule each boot line
    bootSequence.forEach((step) => {
      if (step.text) {
        const t = setTimeout(() => {
          setBootLines(prev => {
            if (prev.includes(step.text)) return prev
            return [...prev, step.text]
          })
        }, step.delay)
        timeouts.push(t)
      }
    })

    // Show logo after boot sequence
    const logoTimeout = setTimeout(() => {
      setShowLogo(true)
    }, 3000)
    timeouts.push(logoTimeout)

    // Show prompt and welcome message
    const promptTimeout = setTimeout(() => {
      setShowPrompt(true)
      setHistory([{
        id: idCounter.current++,
        command: '',
        output: (
          <div className="text-terminal-muted">
            Type <span className="text-terminal-accent">&apos;help&apos;</span> to see available commands.
          </div>
        ),
      }])
    }, 3800)
    timeouts.push(promptTimeout)

    return () => {
      timeouts.forEach(t => clearTimeout(t))
    }
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, bootLines])

  // Focus input on click
  useEffect(() => {
    const handleClick = () => {
      if (showPrompt) {
        inputRef.current?.focus()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [showPrompt])

  // Update suggestions
  useEffect(() => {
    if (input.length > 0) {
      setSuggestions(getCommandSuggestions(input))
    } else {
      setSuggestions([])
    }
  }, [input])

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) return

    // Add to command history
    setCommandHistory(prev => [...prev.filter(c => c !== trimmedCmd), trimmedCmd])
    setHistoryIndex(-1)

    const foundCommand = findCommand(trimmedCmd)
    let output: React.ReactNode

    // Check for easter eggs first
    if (easterEggs[trimmedCmd.toLowerCase()]) {
      // Handle special redirects
      if (trimmedCmd.toLowerCase() === 'whoami') {
        output = <AboutOutput />
      } else {
        output = (
          <div className="text-terminal-text">
            {easterEggs[trimmedCmd.toLowerCase()]}
          </div>
        )
      }
    } else if (foundCommand) {
      switch (foundCommand) {
        case 'help':
          output = <HelpOutput />
          break
        case 'about':
          output = <AboutOutput />
          break
        case 'skills':
          output = <SkillsOutput />
          break
        case 'projects':
          output = <ProjectsOutput />
          break
        case 'experience':
          output = <ExperienceOutput />
          break
        case 'contact':
          output = <ContactOutput />
          break
        case 'neofetch':
          output = <NeofetchOutput />
          break
        case 'resume':
          window.open('/Rohan_Kumar_Resume.pdf', '_blank')
          output = (
            <div className="text-terminal-green">
              Opening resume in new tab...
            </div>
          )
          break
        case 'clear':
          setHistory([])
          setInput('')
          return
        case 'history':
          output = (
            <div className="text-terminal-text">
              {commandHistory.length === 0 ? (
                <span className="text-terminal-muted">No commands in history.</span>
              ) : (
                commandHistory.map((c, i) => (
                  <div key={i} className="text-terminal-muted">
                    {i + 1}  {c}
                  </div>
                ))
              )}
            </div>
          )
          break
        case 'github':
          window.open('https://github.com/rohank05', '_blank')
          output = (
            <div className="text-terminal-green">
              Opening GitHub profile... (Fun fact: Google &quot;rohank05&quot; - I&apos;m the top result!)
            </div>
          )
          break
        default:
          output = (
            <div className="text-terminal-red">
              Command not found: {trimmedCmd}. Type 'help' for available commands.
            </div>
          )
      }
    } else {
      output = (
        <div className="text-terminal-red">
          Command not found: {trimmedCmd}. Type 'help' for available commands.
        </div>
      )
    }

    setHistory(prev => [...prev, {
      id: idCounter.current++,
      command: trimmedCmd,
      output,
    }])
    setInput('')
  }, [commandHistory])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
        setSuggestions([])
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  return (
    <div className="h-full flex flex-col bg-terminal-bg">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-terminal-surface border-b border-terminal-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-terminal-red" />
          <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <div className="w-3 h-3 rounded-full bg-terminal-green" />
        </div>
        <span className="text-terminal-muted text-sm ml-2">rohan@portfolio: ~</span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto terminal-scroll p-4 text-sm md:text-base"
      >
        {/* Boot Sequence */}
        {bootLines.map((line, i) => (
          <div key={i} className="text-terminal-green">{line}</div>
        ))}

        {/* ASCII Logo */}
        {showLogo && (
          <pre className="text-terminal-accent ascii-art text-xs md:text-sm my-4">
            {asciiLogo}
          </pre>
        )}

        {/* Command History */}
        {history.map(entry => (
          <div key={entry.id} className="mb-4">
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">rohan@portfolio</span>
                <span className="text-terminal-muted">:</span>
                <span className="text-terminal-accent">~</span>
                <span className="text-terminal-muted">$</span>
                <span className="text-terminal-text ml-1">{entry.command}</span>
              </div>
            )}
            <div className="mt-1 ml-0">{entry.output}</div>
          </div>
        ))}

        {/* Current Input Line */}
        {showPrompt && (
          <form
            onSubmit={(e) => { e.preventDefault(); executeCommand(input); }}
            autoComplete="off"
            className="flex items-center gap-2"
          >
            <span className="text-terminal-green">rohan@portfolio</span>
            <span className="text-terminal-muted">:</span>
            <span className="text-terminal-accent">~</span>
            <span className="text-terminal-muted">$</span>
            <div className="flex-1 relative ml-1">
              <input
                ref={inputRef}
                type="text"
                name={`terminal-${Date.now()}`}
                id="terminal-cmd"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-terminal-text caret-transparent"
                autoFocus
                spellCheck={false}
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                data-form-type="other"
                data-lpignore="true"
                data-1p-ignore="true"
                aria-autocomplete="none"
              />
              {/* Custom cursor */}
              <span
                className="absolute top-0 pointer-events-none"
                style={{ left: `${input.length}ch` }}
              >
                <span className="inline-block w-2 h-5 bg-terminal-text cursor-blink" />
              </span>
            </div>
          </form>
        )}

        {/* Tab completion suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2 text-terminal-muted text-sm">
            Suggestions: {suggestions.map((s, i) => (
              <span key={s}>
                <span className="text-terminal-accent">{s}</span>
                {i < suggestions.length - 1 && ', '}
              </span>
            ))}
            <span className="ml-2 text-terminal-muted">(Press Tab to complete)</span>
          </div>
        )}
      </div>

      {/* Mobile Input Helper */}
      <div className="md:hidden px-4 py-2 bg-terminal-surface border-t border-terminal-border">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {['help', 'about', 'skills', 'projects', 'contact'].map(cmd => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 text-sm bg-terminal-border rounded text-terminal-text whitespace-nowrap hover:bg-terminal-muted/20"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
