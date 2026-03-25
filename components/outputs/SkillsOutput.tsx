import { skills } from '@/lib/data'

function ProgressBar({ level }: { level: number }) {
  const filled = Math.round(level / 5)
  const empty = 20 - filled

  return (
    <span className="font-mono">
      <span className="text-terminal-green">{'█'.repeat(filled)}</span>
      <span className="text-terminal-border">{'░'.repeat(empty)}</span>
    </span>
  )
}

export default function SkillsOutput() {
  return (
    <div className="text-terminal-text">
      <div className="text-terminal-accent mb-3">Technical Skills:</div>

      <div className="grid gap-2">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center gap-3">
            <span className="text-terminal-green w-40 shrink-0">{skill.name}</span>
            <ProgressBar level={skill.level} />
            <span className="text-terminal-muted text-sm">{skill.level}%</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-terminal-muted text-sm">
        Run <span className="text-terminal-accent">'projects'</span> to see these skills in action.
      </div>
    </div>
  )
}
