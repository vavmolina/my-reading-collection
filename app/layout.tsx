import type { Metadata } from 'next'
import { IBM_Plex_Serif, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-serif',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'My Reading List',
  description: 'Personal book collection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.variable} ${ibmPlexMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}