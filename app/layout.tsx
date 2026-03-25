import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Rohan Kumar | Terminal Portfolio',
  description: 'Software Developer - Interactive terminal portfolio. Type "help" to get started.',
  keywords: ['developer', 'software engineer', 'portfolio', 'react', 'next.js', 'golang'],
  authors: [{ name: 'Rohan Kumar' }],
  openGraph: {
    title: 'Rohan Kumar | Terminal Portfolio',
    description: 'Software Developer - Interactive terminal portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-terminal-bg text-terminal-text font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
