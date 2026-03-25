import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rohan Kumar - Software Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0d1117',
          padding: '40px 60px',
          fontFamily: 'monospace',
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#f85149' }} />
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#d29922' }} />
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#3fb950' }} />
          <span style={{ color: '#7d8590', marginLeft: '12px', fontSize: '18px' }}>
            rohan@portfolio: ~
          </span>
        </div>

        {/* Terminal Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          {/* ASCII Name */}
          <pre
            style={{
              color: '#58a6ff',
              fontSize: '28px',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
{`  ____       _                   _  __
 |  _ \\ ___ | |__   __ _ _ __   | |/ /   _ _ __ ___   __ _ _ __
 | |_) / _ \\| '_ \\ / _\` | '_ \\  | ' / | | | '_ \` _ \\ / _\` | '__|
 |  _ < (_) | | | | (_| | | | | | . \\ |_| | | | | | | (_| | |
 |_| \\_\\___/|_| |_|\\__,_|_| |_| |_|\\_\\__,_|_| |_| |_|\\__,_|_|`}
          </pre>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', color: '#e6edf3', fontSize: '32px' }}>
              <span style={{ color: '#3fb950' }}>$</span>
              <span style={{ marginLeft: '12px' }}>Software Developer</span>
            </div>
            <div style={{ display: 'flex', color: '#7d8590', fontSize: '24px' }}>
              <span style={{ color: '#3fb950' }}>$</span>
              <span style={{ marginLeft: '12px' }}>Go | React | Next.js | TypeScript | NestJS</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#7d8590', fontSize: '20px' }}>
          <span>therohankumar.com</span>
          <span>Type &apos;help&apos; to explore</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
