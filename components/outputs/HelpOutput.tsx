import { commands } from '@/lib/commands'

export default function HelpOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Available Commands:</div>
      <div className="grid gap-1">
        {commands.map(cmd => (
          <div key={cmd.name} className="flex">
            <span className="text-terminal-green w-24 shrink-0">{cmd.name}</span>
            <span className="text-terminal-muted mx-2">-</span>
            <span className="text-terminal-text">{cmd.description}</span>
            {cmd.aliases.length > 0 && (
              <span className="text-terminal-muted ml-2">
                (aliases: {cmd.aliases.join(', ')})
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-terminal-muted text-sm">
        Tip: Use <span className="text-terminal-accent">Tab</span> for auto-completion,
        <span className="text-terminal-accent"> ↑/↓</span> for command history
      </div>
    </div>
  )
}
