import '../app/globals.css';
import PageShell from '../components/layout/PageShell';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js + Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}