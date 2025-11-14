import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'sys-pulse',
    title: 'SysPulse',
    subtitle: 'System monitoring dashboard',
    description:
      'A simple dashboard I built to practice Next.js and visualizing data. Shows CPU, memory, and network usage in real-time. Still learning how to optimize performance.',
    category: 'code',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: '',
    repo: 'https://github.com/adamolson11/syspulse',
    status: 'in-progress',
    highlight: true,
    year: '2025',
    image: '/images/projects/sys-pulse.svg',
  },
  {
    slug: 'dream-logger',
    title: 'Dream Logger',
    description:
      'A small app for tracking dreams and sleep patterns. I built this to explore React state management and local storage. It\'s pretty basic right now but functional.',
    category: 'world',
    tech: ['React', 'Tailwind', 'Local Storage'],
    repo: 'https://github.com/adamolson11/dream-logger',
    status: 'in-progress',
    year: '2025',
    image: '/images/projects/dream-logger.svg',
  },
];