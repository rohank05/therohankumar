import { personalInfo } from '@/lib/data'

export default function ContactOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Contact Information:</div>

      <div className="grid gap-3">
        <div className="flex items-center gap-3">
          <span className="text-terminal-green">Email:</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="terminal-link"
          >
            {personalInfo.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-terminal-green">Website:</span>
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

      <div className="mt-6 p-4 border border-terminal-border rounded bg-terminal-surface">
        <div className="text-terminal-accent mb-2">Quick Contact:</div>
        <pre className="text-terminal-text text-sm">
{`$ echo "Hello Rohan!" | mail -s "Let's Connect" ${personalInfo.email}`}
        </pre>
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Tip: Try <span className="text-terminal-accent">'sudo hire-me'</span> for a surprise.
      </div>
    </div>
  )
}
