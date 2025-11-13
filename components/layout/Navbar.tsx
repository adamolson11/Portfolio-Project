import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-lg">My Portfolio</a>
        </Link>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="text-slate-600 hover:text-slate-900">Projects</a>
          <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}