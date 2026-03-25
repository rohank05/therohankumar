import { personalInfo } from '@/lib/data'
import TerminalLink from '../TerminalLink'

export default function AboutOutput() {
  return (
    <div className="text-terminal-text">
      <div className="mb-4">
        <span className="text-terminal-accent text-lg">{personalInfo.name}</span>
        <span className="text-terminal-muted ml-2">({personalInfo.title})</span>
      </div>

      <div className="mb-4 text-terminal-text leading-relaxed max-w-2xl">
        {personalInfo.bio}
      </div>

      <div className="grid gap-2">
        <div className="flex">
          <span className="text-terminal-muted w-20">Location</span>
          <span className="text-terminal-text">{personalInfo.location}</span>
        </div>
        <div className="flex">
          <span className="text-terminal-muted w-20">Email</span>
          <TerminalLink href={`mailto:${personalInfo.email}`} external={false}>
            {personalInfo.email}
          </TerminalLink>
        </div>
        <div className="flex">
          <span className="text-terminal-muted w-20">Website</span>
          <TerminalLink href={`https://${personalInfo.website}`}>
            {personalInfo.website}
          </TerminalLink>
        </div>
        <div className="flex">
          <span className="text-terminal-muted w-20">GitHub</span>
          <TerminalLink href={`https://github.com/${personalInfo.github}`}>
            @{personalInfo.github}
          </TerminalLink>
        </div>
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Run <span className="text-terminal-accent">&apos;skills&apos;</span> to see my tech stack,
        or <span className="text-terminal-accent">&apos;experience&apos;</span> to view my work history.
      </div>
    </div>
  )
}
