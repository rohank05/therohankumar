import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rohan Kumar — Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const lid = '#3255A4'
const vinyl = '#F3F4F1'
const ink = '#1B1F3B'

function Sticker({
  children,
  bg,
  color = ink,
  rotate,
  top,
  left,
  radius = 999,
  size = 34,
  pad = '14px 28px',
}: {
  children: React.ReactNode
  bg: string
  color?: string
  rotate: number
  top: number
  left: number
  radius?: number
  size?: number
  pad?: string
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: bg,
        color,
        border: `8px solid ${vinyl}`,
        borderRadius: radius,
        padding: pad,
        fontSize: size,
        fontWeight: 800,
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 14px 24px -10px rgba(20,17,43,0.6)',
      }}
    >
      {children}
    </div>
  )
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background: lid,
        }}
      >
        <Sticker bg="#FFE800" rotate={-5} top={70} left={60} radius={36} size={150} pad="0px 40px 10px">
          ROHAN
        </Sticker>
        <Sticker bg="#FF48B0" rotate={3} top={270} left={170} radius={36} size={150} pad="0px 40px 10px">
          KUMAR
        </Sticker>
        <Sticker bg="#00A95C" rotate={6} top={70} left={840} size={30}>
          SDE 1 @ NovoStack
        </Sticker>
        <Sticker bg="#FF48B0" rotate={-4} top={500} left={90} size={30}>
          Node · Go · React · Next.js
        </Sticker>
        <Sticker bg={ink} color="#FFE800" rotate={-8} top={440} left={820} radius={24} size={30}>
          5,000+ npm dl / week
        </Sticker>
        <Sticker bg={vinyl} rotate={4} top={500} left={640} size={26}>
          therohankumar.com
        </Sticker>
      </div>
    ),
    { ...size }
  )
}
