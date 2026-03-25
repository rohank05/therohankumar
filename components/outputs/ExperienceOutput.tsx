import { experience } from '@/lib/data'

export default function ExperienceOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Work Experience:</div>

      <div className="grid gap-6">
        {experience.map((job, index) => (
          <div key={job.company} className="border-l-2 border-terminal-green pl-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-terminal-green font-semibold">{job.company}</span>
              <span className="text-terminal-muted">|</span>
              <span className="text-terminal-accent">{job.type}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-terminal-muted">
              <span>{job.role}</span>
              <span>•</span>
              <span>{job.period}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-terminal-text">
                  <span className="text-terminal-accent shrink-0">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Run <span className="text-terminal-accent">'resume'</span> to download my full CV.
      </div>
    </div>
  )
}
