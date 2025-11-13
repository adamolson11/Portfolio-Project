import Link from 'next/link';
import BackgroundOrbs from '../ui/BackgroundOrbs';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
      <BackgroundOrbs />
      <div className="max-w-5xl mx-auto px-6 py-20 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi — I'm Your Name</h1>
        <p className="text-lg text-slate-700 max-w-2xl mb-6">
          I build delightful web experiences with React, Next.js and a passion for good design.
        </p>
        <div className="flex gap-3">
          <Link href="#projects"><a className="px-5 py-2 rounded-md bg-slate-900 text-white">View projects</a></Link>
          <a href="#contact" className="px-5 py-2 rounded-md border border-slate-200 text-slate-700">Contact</a>
        </div>
      </div>
    </section>
  );
}