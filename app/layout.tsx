import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://therohankumar.com'),
  title: {
    default: 'Rohan Kumar | Software Developer',
    template: '%s | Rohan Kumar',
  },
  description: 'Full-stack developer with 3+ years of experience. Specializing in Go, React, Next.js, and building scalable web applications. Interactive terminal portfolio.',
  keywords: [
    'Rohan Kumar',
    'Software Developer',
    'Full Stack Developer',
    'React Developer',
    'Go Developer',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Web Developer',
    'India',
  ],
  authors: [{ name: 'Rohan Kumar', url: 'https://therohankumar.com' }],
  creator: 'Rohan Kumar',
  publisher: 'Rohan Kumar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://therohankumar.com',
    siteName: 'Rohan Kumar',
    title: 'Rohan Kumar | Software Developer',
    description: 'Full-stack developer with 3+ years of experience. Specializing in Go, React, Next.js, and building scalable web applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Kumar | Software Developer',
    description: 'Full-stack developer with 3+ years of experience. Interactive terminal portfolio.',
    creator: '@therohankumar',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://therohankumar.com',
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
