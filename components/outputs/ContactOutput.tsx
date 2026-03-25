import { personalInfo } from '@/lib/data'
import TerminalLink from '../TerminalLink'

export default function ContactOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Contact Information:</div>

      <div className="grid gap-3">
        <div className="flex items-center gap-3">
          <span className="text-terminal-green">Email:</span>
          <TerminalLink href={`mailto:${personalInfo.email}`} external={false}>
            {personalInfo.email}
          </TerminalLink>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-terminal-green">Website:</span>
          <TerminalLink href={`https://${personalInfo.website}`}>
            {personalInfo.website}
          </TerminalLink>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-terminal-green">GitHub:</span>
          <TerminalLink href={`https://github.com/${personalInfo.github}`}>
            github.com/{personalInfo.github}
          </TerminalLink>
          <span className="text-terminal-muted text-sm">(Google &quot;rohank05&quot;)</span>
        </div>
      </div>

      <div className="mt-6 p-4 border border-terminal-border rounded bg-terminal-surface">
        <div className="text-terminal-accent mb-2">Quick Contact:</div>
        <pre className="text-terminal-text text-sm">
{`$ echo "Hello Rohan!" | mail -s "Let's Connect" ${personalInfo.email}`}
        </pre>
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Tip: Hold <span className="text-terminal-accent">Ctrl</span> and click links to open them.
      </div>
    </div>
  )
}
