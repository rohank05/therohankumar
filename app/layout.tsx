import type { Metadata, Viewport } from 'next'
import {
  Bagel_Fat_One,
  Bungee,
  Martian_Mono,
  Modak,
  Rubik_Mono_One,
  Schibsted_Grotesk,
  Shrikhand,
} from 'next/font/google'
import './globals.css'
import ClarityInit from '@/components/ClarityInit'
import { SITE } from '@/lib/site'

// A raided type case: every sticker picks its own face
const bagel = Bagel_Fat_One({ subsets: ['latin'], weight: '400', variable: '--font-bagel', display: 'swap' })
const shrikhand = Shrikhand({ subsets: ['latin'], weight: '400', variable: '--font-shrikhand', display: 'swap' })
const bungee = Bungee({ subsets: ['latin'], weight: '400', variable: '--font-bungee', display: 'swap', preload: false })
const rubik = Rubik_Mono_One({ subsets: ['latin'], weight: '400', variable: '--font-rubik', display: 'swap', preload: false })
const modak = Modak({ subsets: ['devanagari'], weight: '400', variable: '--font-modak', display: 'swap', preload: false })
const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})
const martian = Martian_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-mono', display: 'swap' })

const fontVars = [bagel, shrikhand, bungee, rubik, modak, schibsted, martian].map((f) => f.variable).join(' ')

export const viewport: Viewport = { themeColor: '#2B34E0' }

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
