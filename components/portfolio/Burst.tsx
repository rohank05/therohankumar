// A die-cut starburst: vinyl outline drawn as a fat round-joined stroke under the fill
function burstPoints(spikes: number, outer: number, inner: number) {
  const pts: string[] = []
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / spikes - Math.PI / 2
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

const POINTS = burstPoints(14, 44, 36)

export default function Burst({ fill }: { fill: string }) {
  return (
    <svg className="burst-bg" viewBox="0 0 100 100" aria-hidden="true">
      <polygon points={POINTS} fill="var(--vinyl)" stroke="var(--vinyl)" strokeWidth="9" strokeLinejoin="round" />
      <polygon points={POINTS} fill={fill} />
    </svg>
  )
}
