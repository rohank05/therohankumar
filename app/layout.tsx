import type { Metadata } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://therohankumar.com'),
  title: {
    default: 'Rohan Kumar — Software Engineer',
    template: '%s | Rohan Kumar',
  },
  description:
    'Rohan Kumar — Software engineer building full-stack systems across CRM, fintech and IoT. Node, Go, NestJS, React, Next.js.',
  keywords: [
    'Rohan Kumar',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Go Developer',
    'Next.js',
    'TypeScript',
    'NestJS',
    'Portfolio',
    'India',
  ],
  authors: [{ name: 'Rohan Kumar', url: 'https://therohankumar.com' }],
  creator: 'Rohan Kumar',
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
    title: 'Rohan Kumar — Software Engineer',
    description:
      'Software engineer building full-stack systems across CRM, fintech and IoT.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Kumar — Software Engineer',
    description: 'Full-stack systems across CRM, fintech and IoT. Node, Go, NestJS, React.',
    creator: '@therohankumar',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://therohankumar.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
