import ProjectCard from '../ui/ProjectCard';
import type { Project } from '../../lib/types';

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-6">Selected projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}