export interface Command {
  name: string
  aliases: string[]
  description: string
  usage?: string
}

export const commands: Command[] = [
  {
    name: 'help',
    aliases: ['?', 'commands'],
    description: 'List all available commands',
    usage: 'help',
  },
  {
    name: 'about',
    aliases: ['whoami', 'me'],
    description: 'Display information about me',
    usage: 'about',
  },
  {
    name: 'skills',
    aliases: ['tech', 'stack'],
    description: 'Show my technical skills',
    usage: 'skills',
  },
  {
    name: 'projects',
    aliases: ['work', 'portfolio'],
    description: 'View my projects',
    usage: 'projects',
  },
  {
    name: 'experience',
    aliases: ['exp', 'jobs', 'career'],
    description: 'View my work experience',
    usage: 'experience',
  },
  {
    name: 'contact',
    aliases: ['email', 'reach'],
    description: 'Get my contact information',
    usage: 'contact',
  },
  {
    name: 'resume',
    aliases: ['cv'],
    description: 'Download my resume',
    usage: 'resume',
  },
  {
    name: 'neofetch',
    aliases: ['sysinfo', 'info'],
    description: 'Display system information',
    usage: 'neofetch',
  },
  {
    name: 'clear',
    aliases: ['cls'],
    description: 'Clear the terminal',
    usage: 'clear',
  },
  {
    name: 'history',
    aliases: [],
    description: 'Show command history',
    usage: 'history',
  },
]

export const easterEggs: Record<string, string> = {
  'sudo hire-me': 'Access granted! Sending interview request... Just kidding, but seriously - let\'s talk! Email: mail@therohankumar.com',
  'sudo rm -rf /': 'Nice try! This terminal is read-only. But I appreciate the humor.',
  'exit': 'You can check out any time you like, but you can never leave... Just kidding, thanks for visiting!',
  'vim': 'I use VSCode btw. But vim is cool too.',
  'ls': 'Try "projects" to see what I\'ve built.',
  'pwd': '/home/rohan/portfolio',
  'cd': 'Navigation is done via commands. Try "help" to see available options.',
  'cat': 'Meow! Try a specific command like "about" or "skills".',
  'echo': 'Echo... echo... echo... Try "help" for useful commands.',
  'ping': 'Pong! Connection to Rohan\'s portfolio is stable.',
  'date': new Date().toLocaleString(),
  'whoami': 'Redirecting to "about" command...',
  'man': 'Try "help" for a list of available commands.',
  'npm install developer': 'Installing developer... This might take 4 years of college and 3+ years of experience.',
  'git commit -m "hired rohan"': 'Please push this commit! Contact: mail@therohankumar.com',
}

export function findCommand(input: string): string | null {
  const normalizedInput = input.toLowerCase().trim()

  // Check easter eggs first
  if (easterEggs[normalizedInput]) {
    return normalizedInput
  }

  // Find matching command
  for (const cmd of commands) {
    if (cmd.name === normalizedInput || cmd.aliases.includes(normalizedInput)) {
      return cmd.name
    }
  }

  return null
}

export function getCommandSuggestions(partial: string): string[] {
  const normalizedPartial = partial.toLowerCase().trim()
  if (!normalizedPartial) return []

  const suggestions: string[] = []

  for (const cmd of commands) {
    if (cmd.name.startsWith(normalizedPartial)) {
      suggestions.push(cmd.name)
    }
    for (const alias of cmd.aliases) {
      if (alias.startsWith(normalizedPartial)) {
        suggestions.push(alias)
      }
    }
  }

  return Array.from(new Set(suggestions)).slice(0, 5)
}
