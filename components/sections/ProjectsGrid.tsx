'use client';

import ProjectCard from './ProjectCard';
import type { Project } from '@/lib/types';
import { motion } from 'framer-motion';

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const sorted = [...projects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));
  const groups: Array<{ key: 'code' | 'world' | 'system'; title: string; blurb: string }> = [
    { key: 'code', title: 'Code & Tools', blurb: 'Utilities, dashboards, and small web apps.' },
    { key: 'world', title: 'Worlds & Stories', blurb: 'Fiction universes and narrative experiments.' },
    { key: 'system', title: 'Systems & Experiments', blurb: 'Concepts, frameworks, and thought-tools.' },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-1 text-white tracking-tight">Projects</h2>
      <p className="text-slate-400 mb-6">Things I'm building in code, story, and systems.</p>

      {groups.map((g) => {
        const list = sorted.filter((p) => (p.category ?? 'code') === g.key);
        if (!list.length) return null;
        return (
          <div key={g.key} className="mb-12">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> {g.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4">{g.blurb}</p>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: { opacity: 1 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {list.map((p, idx) => (
                <ProjectCard key={p.slug} project={p} index={idx} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}