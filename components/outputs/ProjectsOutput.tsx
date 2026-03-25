import { projects } from '@/lib/data'
import TerminalLink from '../TerminalLink'

export default function ProjectsOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Projects:</div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={project.name} className="border-l-2 border-terminal-border pl-4">
            <div className="flex items-center gap-2">
              <span className="text-terminal-muted">[{index + 1}]</span>
              <span className="text-terminal-green font-semibold">{project.name}</span>
            </div>
            <p className="text-terminal-text mt-1">{project.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-terminal-muted">Tech:</span>
              {project.tech.map(t => (
                <span key={t} className="text-terminal-accent text-sm">{t}</span>
              ))}
            </div>
            <div className="mt-1">
              <span className="text-terminal-muted">URL: </span>
              <TerminalLink href={project.url}>
                {project.url}
              </TerminalLink>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Run <span className="text-terminal-accent">&apos;experience&apos;</span> to see my work history.
      </div>
    </div>
  )
}
