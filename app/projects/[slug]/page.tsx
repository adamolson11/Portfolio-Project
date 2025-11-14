'use client';

import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import TagPill from '@/components/ui/TagPill';
import { motion } from 'framer-motion';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-6">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/#projects" className="text-sky-300 hover:text-sky-200 text-sm mb-6 inline-block">
          ← Back to projects
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-2">{project.title}</h1>
        {project.subtitle ? <p className="text-slate-400 text-lg mb-6">{project.subtitle}</p> : null}

        {project.image ? (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-800/50">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2 mb-6">
          {(project.tech ?? []).map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">{project.description}</p>

        <div className="flex gap-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-400 transition-colors"
            >
              View live demo →
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
            >
              View on GitHub →
            </a>
          ) : null}
        </div>
      </motion.article>
    </main>
  );
}
