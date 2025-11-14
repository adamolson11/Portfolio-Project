'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <span className="text-sky-400 text-xs">Context</span>
      <h2 className="text-2xl font-bold mt-1 mb-4 text-white">From chaos to craft.</h2>
      <p className="text-slate-300 max-w-3xl">
        I’m a 40-something rebuilding my life through code, writing, and systems thinking. I decided to treat
        life like a long-term project: take the Google IT certs, learn modern stacks, and stitch story + tech into
        something useful.
      </p>
      <p className="text-slate-300 max-w-3xl mt-3">
        Hudson Blue, Echo House, and Future Farm are the universes I’m building — both as fiction and as a real-world
        ecosystem of tools, practices, and small ventures.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-white font-semibold mb-2">What I’m learning now</h3>
          <ul className="flex flex-wrap gap-2">
            {['Next.js', 'Linux', 'Networking', 'TypeScript', 'Framer Motion'].map((t) => (
              <li key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">What I’m building toward</h3>
          <ul className="flex flex-wrap gap-2">
            {['Remote tech role', 'Hudson Blue projects', 'Published fiction', 'Local ventures'].map((t) => (
              <li key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}