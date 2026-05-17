import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Rafsal Rahim — Systems & Infrastructure Engineer',
    template: '%s | Rafsal Rahim',
  },
  description:
    'I design and build modern web experiences, and engineer the systems that power them—from frontend interfaces to scalable backend and blockchain-integrated applications.',
  keywords: [
    'Systems Engineer',
    'Infrastructure',
    'Blockchain',
    'Go',
    'Kubernetes',
    'Terraform',
    'Cloud',
    'Freelancer',
    'Rafsal Rahim',
  ],
  authors: [{ name: 'Rafsal Rahim' }],
  creator: 'Rafsal Rahim',
  metadataBase: new URL('https://rafsalrahim.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rafsalrahim.dev',
    title: 'Rafsal Rahim — Systems & Infrastructure Engineer',
    description:
      'I design and build modern web experiences, and engineer the systems that power them—from frontend interfaces to scalable backend and blockchain-integrated applications.',
    siteName: 'Rafsal Rahim',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafsal Rahim — Systems & Infrastructure Engineer',
    description:
      'I design and build modern web experiences, and engineer the systems that power them.',
    creator: '@rafsalrahim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
