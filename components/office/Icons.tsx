// One stroke family for every glyph in the office: 24px grid, 2.25 stroke, round caps
type P = { size?: number; className?: string }

function Svg({ size = 22, className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

export const ArrowUpRight = (p: P) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
)

export const Mail = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
)

export const Download = (p: P) => (
  <Svg {...p}>
    <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
  </Svg>
)

export const Github = (p: P) => (
  <Svg {...p}>
    <path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.4 5.6 2.7 5.6 2.7a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.2 9.1c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Svg>
)

export const Linkedin = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 10.5V16m0-8.5v.01M12 16v-5.5m0 2.2c0-1.4 1-2.2 2.2-2.2 1.3 0 1.8.9 1.8 2.2V16" />
  </Svg>
)

export const Lock = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
)

export const Close = (p: P) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
)
