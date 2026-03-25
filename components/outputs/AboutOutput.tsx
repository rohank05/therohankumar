import { personalInfo } from '@/lib/data'

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
          <a
            href={`mailto:${personalInfo.email}`}
            className="terminal-link"
          >
            {personalInfo.email}
          </a>
        </div>
        <div className="flex">
          <span className="text-terminal-muted w-20">Website</span>
          <a
            href={`https://${personalInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link"
          >
            {personalInfo.website}
          </a>
        </div>
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Run <span className="text-terminal-accent">'skills'</span> to see my tech stack,
        or <span className="text-terminal-accent">'experience'</span> to view my work history.
      </div>
    </div>
  )
}
