import './globals.css';
import PageShell from '@/components/layout/PageShell';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hudson Blue | New Ness',
  description: 'Worlds, systems, and tools stitched from code, story, and long-term thinking.',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Hudson Blue | New Ness',
    description: 'Worlds, systems, and tools stitched from code, story, and long-term thinking.',
    type: 'website',
  },
  keywords: ['Hudson Blue','Next.js','TypeScript','Systems Thinking','Fiction','Portfolio'],
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