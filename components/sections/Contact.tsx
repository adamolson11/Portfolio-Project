'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-t border-slate-800"
    >
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3 text-white">Let’s build something honest.</h2>
        <p className="mb-6 text-slate-300">If you value curiosity, self-taught grit, and long-term thinking, let’s talk.</p>
        <div className="flex justify-center gap-3">
          <a href="mailto:you@example.com" className="px-5 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-400">Email me</a>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.slice(0, 2).map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-slate-700 text-slate-300 hover:text-sky-300 hover:border-sky-500/60 flex items-center justify-center"
              aria-label={s.name}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}