import { personalInfo, systemInfo, asciiLogo } from '@/lib/data'

export default function NeofetchOutput() {
  const infoLines = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Title', value: personalInfo.title },
    { label: '', value: '' },
    { label: 'OS', value: systemInfo.os },
    { label: 'Kernel', value: systemInfo.kernel },
    { label: 'Shell', value: systemInfo.shell },
    { label: 'Uptime', value: systemInfo.uptime },
    { label: 'Packages', value: systemInfo.packages },
    { label: 'Memory', value: systemInfo.memory },
    { label: '', value: '' },
    { label: 'GitHub', value: `@${personalInfo.github}` },
    { label: 'Contact', value: personalInfo.email },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-4 text-terminal-text">
      {/* ASCII Art */}
      <pre className="text-terminal-accent ascii-art text-xs shrink-0">
        {asciiLogo}
      </pre>

      {/* System Info */}
      <div className="grid gap-0">
        <div className="text-terminal-accent font-bold mb-2">
          {personalInfo.name.toLowerCase().replace(' ', '@')}portfolio
        </div>
        <div className="text-terminal-muted mb-2">{'─'.repeat(30)}</div>

        {infoLines.map((line, i) => (
          <div key={i} className="flex">
            {line.label ? (
              <>
                <span className="text-terminal-accent w-20">{line.label}</span>
                <span className="text-terminal-text">{line.value}</span>
              </>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        ))}

        {/* Color palette */}
        <div className="flex gap-1 mt-4">
          {['bg-terminal-red', 'bg-terminal-yellow', 'bg-terminal-green', 'bg-terminal-accent', 'bg-terminal-purple', 'bg-terminal-muted'].map((color, i) => (
            <div key={i} className={`w-4 h-4 ${color} rounded-sm`} />
          ))}
        </div>
      </div>
    </div>
  )
}
