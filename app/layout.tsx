import './globals.css';
import PageShell from '@/components/layout/PageShell';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hudson Blue | New Ness',
  description: 'Worlds, systems, and tools stitched from code, story, and long-term thinking.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  keywords: ['Hudson Blue', 'New Ness', 'Next.js', 'TypeScript', 'Systems Thinking', 'Fiction', 'Portfolio', 'Software Developer'],
  authors: [{ name: 'New Ness' }],
  creator: 'New Ness',
  openGraph: {
    title: 'Hudson Blue | New Ness',
    description: 'Worlds, systems, and tools stitched from code, story, and long-term thinking.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hudson Blue',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Hudson Blue - New Ness Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hudson Blue | New Ness',
    description: 'Worlds, systems, and tools stitched from code, story, and long-term thinking.',
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