import type { Project } from '../../lib/types';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4 border">
      <div className="mb-3">
        {project.image ? <img src={project.image} alt={project.title} className="rounded-md" /> : null}
      </div>
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-slate-600 mt-2">{project.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          {project.tags.slice(0, 3).map((t) => <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
        </div>
        <Link href={`/projects/${project.slug}`}><a className="text-sm text-slate-900">Read →</a></Link>
      </div>
    </article>
  );
}