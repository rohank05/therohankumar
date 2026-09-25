export interface Project {
  id: string
  title: string
  italic: string
  desc: string
  stack: string[]
  href: string
  /** One true fact, printed on the corner badge sticker */
  fact: string
  skin: Skin
  face: Face
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
    fact: '4.8 Cr+ registrations',
    skin: 'lid',
    face: 'bagel',
    title: 'Auto Analytics Pro',
    italic: 'Vehicle registration analytics',
    desc: "B2B SaaS analytics platform powered by India's VAHAN registry — 4.8 Cr+ registrations across 35 states and 1,400+ RTOs. Choropleth maps, YoY trends, manufacturer market-share.",
    stack: ['Next.js', 'PostgreSQL', 'D3', 'Choropleth'],
    href: 'https://autoanalyticspro.com',
  },
  {
    id: 'hellotrade',
    fact: 'Experian credit bureau',
    skin: 'tomato',
    face: 'rubik',
    title: 'HelloTrade BRE',
    italic: 'Loan aggregator engine',
    desc: "Business Rule Engine for IndiaMart's loan aggregator — built FCS Long Auth Flow with Experian, masked-mobile OTP, AWS SQS FIFO async pipelines for application workflows.",
    stack: ['NestJS', 'Prisma', 'AWS SQS', 'Experian API'],
    href: '#',
  },
  {
    id: 'novohr',
    fact: 'Go + Next.js monorepo',
    skin: 'mint',
    face: 'bungee',
    title: 'NovoHR',
    italic: 'HRMS system',
    desc: 'Full-stack HRMS with employee management, RBAC, and attendance tracking. Next.js 14 frontend, Go/Fiber backend, PostgreSQL — designed as an API-first monorepo.',
    stack: ['Next.js 14', 'Go', 'Fiber', 'PostgreSQL'],
    href: 'https://novohr.therohankumar.com',
  },
  {
    id: 'retailsync',
    fact: 'P&L on every bill',
    skin: 'pink',
    face: 'shrikhand',
    title: 'RetailSync',
    italic: 'POS & inventory',
    desc: 'Inventory and point-of-sale billing for a retail garment shop. Barcode lookup, mobile-first billing, P&L per bill, partial payments, selling-price override tied to cost.',
    stack: ['React', 'Node.js', 'Barcode', 'Mobile-first'],
    href: 'https://sangini.therohankumar.com',
  },
  {
    id: 'jikan',
    fact: '5,000+ downloads / week',
    skin: 'ink',
    face: 'mono',
    title: 'jikan-api.js',
    italic: 'NPM package',
    desc: 'TypeScript wrapper for the Jikan API — type-safe interfaces, full endpoint coverage. 5,000+ weekly downloads, active community usage.',
    stack: ['TypeScript', 'NPM', 'Open Source'],
    href: 'https://www.npmjs.com/package/jikan-api.js',
  },
  {
    id: 'beat',
    fact: '200+ Discord servers',
    skin: 'vinyl',
    face: 'bagel',
    title: 'Beat Music',
    italic: 'Discord music bot',
    desc: 'Kotlin-based Discord music bot deployed to 200+ servers. Audio filters (echo, reverb), concurrent streaming architecture across multiple guilds.',
    stack: ['Kotlin', 'JDA', 'Lavaplayer'],
    href: '#',
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

export const EDUCATION = [
  { when: '2025 — Present', title: 'Master of Computer Applications', where: 'Manipal University Jaipur · Remote' },
  { when: '2019 — 2024', title: 'Bachelor of Computer Applications', where: 'Indira Gandhi National Open University · Remote' },
  { when: 'Jan 2023', title: 'Supervised Machine Learning', where: 'Coursera · Regression & Classification' },
  { when: '2024', title: 'Tackling Challenges with Confidence', where: 'Spraxa Solutions Pvt. Ltd. — Internal Award' },
]

export type Skin = 'lid' | 'tomato' | 'yellow' | 'mint' | 'pink' | 'ink' | 'vinyl'
export type Face = 'bagel' | 'rubik' | 'bungee' | 'shrikhand' | 'mono'
export type Shape = 'pill' | 'circle' | 'tag' | 'burst'

/** Loose stickers a visitor can slap onto the lid */
export const STICKER_PACK: { text: string; skin: Skin; face: Face; shape: Shape }[] = [
  { text: 'LGTM', skin: 'mint', face: 'bungee', shape: 'pill' },
  { text: '200 OK', skin: 'yellow', face: 'rubik', shape: 'circle' },
  { text: "it's always DNS", skin: 'pink', face: 'shrikhand', shape: 'pill' },
  { text: 'Go', skin: 'tomato', face: 'bagel', shape: 'circle' },
  { text: 'SELECT * FROM fun', skin: 'ink', face: 'mono', shape: 'tag' },
  { text: 'ship it', skin: 'yellow', face: 'shrikhand', shape: 'burst' },
  { text: 'NestJS', skin: 'tomato', face: 'bungee', shape: 'pill' },
  { text: 'Postgres', skin: 'vinyl', face: 'bagel', shape: 'pill' },
  { text: 'npm i', skin: 'ink', face: 'mono', shape: 'tag' },
  { text: 'Next.js', skin: 'vinyl', face: 'rubik', shape: 'pill' },
  { text: 'AWS SQS', skin: 'mint', face: 'rubik', shape: 'tag' },
  { text: 'git push', skin: 'pink', face: 'bungee', shape: 'circle' },
  { text: 'works on my machine', skin: 'yellow', face: 'shrikhand', shape: 'pill' },
  { text: 'Docker', skin: 'vinyl', face: 'bungee', shape: 'pill' },
  { text: 'hot reload', skin: 'tomato', face: 'shrikhand', shape: 'burst' },
]
