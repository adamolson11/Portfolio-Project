import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-white hover:text-sky-400 transition">Adam Olson</Link>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="text-slate-300 hover:text-sky-400 transition">About</a>
          <a href="#projects" className="text-slate-300 hover:text-sky-400 transition">Projects</a>
          <a href="#writing" className="text-slate-300 hover:text-sky-400 transition">Writing</a>
          <a href="#contact" className="text-slate-300 hover:text-sky-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}