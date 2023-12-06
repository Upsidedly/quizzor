import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = IBM_Plex_Sans({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Quizzor (By Matthew Williams 3-2)',
  description: 'An app to help with exam studying!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
