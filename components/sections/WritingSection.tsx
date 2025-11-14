"use client";

import { motion } from 'framer-motion';

export default function WritingSection() {
  const pieces = [
    {
      title: 'Unselfish Gene Theory',
      summary: 'A thought experiment about cooperative dynamics and emergent patterns across systems.',
      href: '#',
      status: 'Coming soon',
    },
    {
      title: 'Wolves in the Echo House',
      summary: 'A short piece from the Echo House universe exploring resilience and signal vs noise.',
      href: '#',
      status: 'Coming soon',
    },
    {
      title: 'Future Farm / Hudson Blue',
      summary: 'Notes on turning fiction worlds into usable tools and local ecosystems.',
      href: '#',
      status: 'Coming soon',
    },
  ];

  return (
    <section id="writing" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-2 text-white">Writing</h2>
      <p className="text-slate-400 mb-6">Ideas and stories that scaffold my systems thinking.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pieces.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.05 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-4"
          >
            <h3 className="font-semibold text-white">{p.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{p.summary}</p>
            <div className="mt-3 text-xs text-slate-400">{p.status}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
