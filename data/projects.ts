import type { Project } from '../lib/types';

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of project one.',
    slug: 'project-one',
    image: '/images/projects/project-1.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    repo: '',
    live: '',
  },
  {
    title: 'Project Two',
    description: 'A short description of project two.',
    slug: 'project-two',
    image: '/images/projects/project-2.png',
    tags: ['React', 'API'],
    repo: '',
    live: '',
  },
];