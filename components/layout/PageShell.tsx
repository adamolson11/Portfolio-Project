import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from 'react';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}