import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Familjen_Grotesk, Fragment_Mono, Hind } from 'next/font/google'
import './globals.css'
import ClarityInit from '@/components/ClarityInit'
import { SITE } from '@/lib/site'

// Riso type case: a fat gothic for the print, a grotesk for reading, a mono for data
const dela = Dela_Gothic_One({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' })
const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})
const fragment = Fragment_Mono({ subsets: ['latin'], weight: '400', variable: '--font-mono', display: 'swap' })
const hind = Hind({ subsets: ['devanagari'], weight: '700', variable: '--font-deva', display: 'swap', preload: false })

const fontVars = [dela, familjen, fragment, hind].map((f) => f.variable).join(' ')

export const viewport: Viewport = { themeColor: '#3255A4' }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s | Rohan Kumar',
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'Rohan Kumar',
    'Rohan Kumar software engineer',
    'Rohan Kumar developer',
    'Rohan Kumar Delhi',
    'Rohan Kumar NovoStack',
    'rohank05',
    'jikan-api.js',
    'Full Stack Developer Delhi',
    'Node.js',
    'Go',
    'NestJS',
    'React',
    'Next.js',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
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
    type: 'profile',
    firstName: 'Rohan',
    lastName: 'Kumar',
    username: SITE.handle,
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  // Set GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in your host's env to verify ownership
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: '/' },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={fontVars}
    >
      <body suppressHydrationWarning>
        <ClarityInit />
        {children}
      </body>
    </html>
  )
}
