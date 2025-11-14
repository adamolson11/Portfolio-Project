'use client';

import Link from 'next/link';
import BackgroundOrbs from '@/components/ui/BackgroundOrbs';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundOrbs />
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-sky-400 text-sm">Hi, I’m New Ness</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4 text-white">
            I build worlds, systems, and tools to turn chaos into maps.
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-6">
            Self-taught IT learner, fiction builder of Echo House and Future Farm, and the mind behind Hudson Blue. I’m stitching code, story, and systems into useful tools for real people.
          </p>
          <div className="flex gap-3">
            <Link href="#projects" className="px-5 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-400">View Projects</Link>
            <a href="#about" className="px-5 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800">Read My Story</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 blur-sm shadow-[0_0_80px_rgba(56,189,248,0.25)]" />
          <div className="mt-6 flex gap-2">
            <span className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300">Writer</span>
            <span className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300">IT Learner</span>
            <span className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300">Hudson Blue</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}