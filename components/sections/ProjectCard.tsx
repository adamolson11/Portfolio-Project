'use client';

import type { Project } from '@/lib/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TagPill from '@/components/ui/TagPill';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card glass-card-hover p-5"
    >
      <div className="mb-4">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="rounded-lg w-full object-cover aspect-[4/3]" />
        ) : null}
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg text-white">{project.title}</h3>
          {project.subtitle ? <p className="text-slate-400 text-sm mt-0.5">{project.subtitle}</p> : null}
        </div>
        {project.status ? (
          <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300 capitalize">
            {project.status.replace('-', ' ')}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-slate-300 mt-3">{project.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {(project.tech ?? []).slice(0, 5).map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
        <div className="text-sm whitespace-nowrap">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-sky-300 hover:text-sky-200">
              View project →
            </a>
          ) : project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-sky-300 hover:text-sky-200">
              View code →
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}