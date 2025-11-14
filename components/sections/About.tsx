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
      <span className="text-sky-400 text-xs">About Me</span>
      <h2 className="text-2xl font-bold mt-1 mb-4 text-white">Still learning, always building.</h2>
      <p className="text-slate-300 max-w-3xl">
        I'm in my 40s, starting a new chapter through tech and creativity. I'm working through the Google IT Support certification, learning web development with Next.js and TypeScript, and exploring hardware and networking fundamentals.
      </p>
      <p className="text-slate-300 max-w-3xl mt-3">
        On the side, I write fiction set in worlds I call Hudson Blue, Echo House, and Future Farm. I'm interested in how systems work—whether that's computer networks, story structures, or small businesses. I'm looking for an entry-level IT or dev role where I can keep learning and contribute.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-white font-semibold mb-2">Currently learning</h3>
          <ul className="flex flex-wrap gap-2">
            {['Google IT Support', 'Next.js', 'TypeScript', 'Linux basics', 'Networking', 'Hardware troubleshooting'].map((t) => (
              <li key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">What I'm working toward</h3>
          <ul className="flex flex-wrap gap-2">
            {['Entry-level IT/dev role', 'Finish Google IT cert', 'Build useful tools', 'Publish fiction'].map((t) => (
              <li key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}