import './globals.css';
import PageShell from '@/components/layout/PageShell';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Adam Olson | Learning Web Dev & IT',
  description: 'Personal portfolio for Adam Olson. Learning web development, IT support, and building small projects. Currently working through Google IT certification and exploring Next.js.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  keywords: ['Adam Olson', 'Web Developer', 'IT Support', 'Next.js', 'TypeScript', 'Portfolio', 'Entry Level Developer', 'Self-Taught'],
  authors: [{ name: 'Adam Olson' }],
  creator: 'Adam Olson',
  openGraph: {
    title: 'Adam Olson | Learning Web Dev & IT',
    description: 'Personal portfolio documenting my journey learning web development, IT, and building small projects.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Adam Olson Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Adam Olson - Web Dev & IT Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Olson | Learning Web Dev & IT',
    description: 'Personal portfolio documenting my journey learning web development, IT, and building small projects.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}