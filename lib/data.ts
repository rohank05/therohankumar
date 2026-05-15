export interface Project {
  id: string
  title: string
  italic: string
  desc: string
  stack: string[]
  href: string
  preview: string | null
  tone: string
  kind?: 'npm'
  npm?: { name: string; downloads: string; version: string }
}

export interface ExperienceItem {
  when: string
  role: string
  company: string
  where: string
  bullets: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'autoanalyticspro',
    title: 'Auto Analytics Pro',
    italic: 'Vehicle registration analytics',
    desc: "B2B SaaS analytics platform powered by India's VAHAN registry — 4.8 Cr+ registrations across 35 states and 1,400+ RTOs. Choropleth maps, YoY trends, manufacturer market-share.",
    stack: ['Next.js', 'PostgreSQL', 'D3', 'Choropleth'],
    href: 'https://autoanalyticspro.com',
    preview: 'https://autoanalyticspro.com',
    tone: 'oklch(0.78 0.15 65)',
  },
  {
    id: 'hellotrade',
    title: 'HelloTrade BRE',
    italic: 'Loan aggregator engine',
    desc: "Business Rule Engine for IndiaMart's loan aggregator — built FCS Long Auth Flow with Experian, masked-mobile OTP, AWS SQS FIFO async pipelines for application workflows.",
    stack: ['NestJS', 'Prisma', 'AWS SQS', 'Experian API'],
    href: '#',
    preview: null,
    tone: 'oklch(0.65 0.18 25)',
  },
  {
    id: 'novohr',
    title: 'NovoHR',
    italic: 'HRMS system',
    desc: 'Full-stack HRMS with employee management, RBAC, and attendance tracking. Next.js 14 frontend, Go/Fiber backend, PostgreSQL — designed as an API-first monorepo.',
    stack: ['Next.js 14', 'Go', 'Fiber', 'PostgreSQL'],
    href: 'https://novohr.therohankumar.com',
    preview: 'https://novohr.therohankumar.com',
    tone: 'oklch(0.68 0.14 200)',
  },
  {
    id: 'retailsync',
    title: 'RetailSync',
    italic: 'POS & inventory',
    desc: 'Inventory and point-of-sale billing for a retail garment shop. Barcode lookup, mobile-first billing, P&L per bill, partial payments, selling-price override tied to cost.',
    stack: ['React', 'Node.js', 'Barcode', 'Mobile-first'],
    href: 'https://sangini.therohankumar.com',
    preview: 'https://sangini.therohankumar.com',
    tone: 'oklch(0.72 0.12 145)',
  },
  {
    id: 'jikan',
    title: 'jikan-api.js',
    italic: 'NPM package',
    desc: 'TypeScript wrapper for the Jikan API — type-safe interfaces, full endpoint coverage. 5,000+ weekly downloads, active community usage.',
    stack: ['TypeScript', 'NPM', 'Open Source'],
    href: 'https://www.npmjs.com/package/jikan-api.js',
    preview: 'https://www.npmjs.com/package/jikan-api.js',
    kind: 'npm',
    npm: { name: 'jikan-api.js', downloads: '5,000+ / week', version: 'TypeScript' },
    tone: 'oklch(0.7 0.15 320)',
  },
  {
    id: 'beat',
    title: 'Beat Music',
    italic: 'Discord music bot',
    desc: 'Kotlin-based Discord music bot deployed to 200+ servers. Audio filters (echo, reverb), concurrent streaming architecture across multiple guilds.',
    stack: ['Kotlin', 'JDA', 'Lavaplayer'],
    href: '#',
    preview: null,
    tone: 'oklch(0.7 0.15 280)',
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    when: '2025 — Present',
    role: 'SDE 1',
    company: 'NovoStack',
    where: 'Noida',
    bullets: [
      'Onboarded to Ruloans CRM, performed codebase cleanup and shipped Role-Based Access Control',
      'Built FCS Long Auth Flow on HelloTrade with Experian credit-bureau integration',
      'Optimized React app perf via code-splitting, lazy loading, image optimization',
      'Managed AWS SQS FIFO queues for async workflows; debugged IAM/EC2 issues for Go services',
      'Administered PostgreSQL — roles, ALTER TABLE migrations, default privileges, prod ↔ dev data sync',
      'Configured GitLab CI/CD via jump-server to internal infrastructure',
    ],
  },
  {
    when: '2023 — 2025',
    role: 'SDE 1',
    company: 'Spraxa Solutions',
    where: 'Noida, Sector 62',
    bullets: [
      'Built features for CoolR — IoT-based retail management platform',
      'Shipped Excel import for faster client onboarding and data migration',
      'Refined SQL queries and contributed to BackStorage replenishment algorithm',
      'Integrated Azure AD for SSO; helped set up Apache Flink → StarRocks pipeline',
      'Awarded "Tackling Challenges with Confidence" — 2024',
    ],
  },
]

export const SKILLS: Record<string, string[]> = {
  Backend: ['Node.js', 'NestJS', 'Go', '.NET / C#', 'REST', 'GraphQL'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind', 'Material-UI'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'],
  Cloud: ['AWS (SQS, EC2, RDS)', 'Azure', 'Docker', 'GitLab CI/CD', 'Nginx', 'n8n'],
}

export const MARQUEE_TERMS = [
  'Node.js', 'Go', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'AWS',
  'TypeScript', 'Prisma', 'Docker', 'Redis', 'GraphQL', 'n8n', 'Azure',
]
