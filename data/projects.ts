import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'sys-pulse',
    title: 'SysPulse',
    subtitle: 'Real-time system metrics dashboard',
    description:
      'A lightweight dashboard that visualizes CPU, memory, and network usage with smooth animations.',
    category: 'code',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://syspulse.example.com',
    repo: 'https://github.com/you/syspulse',
    status: 'live',
    highlight: true,
    year: '2025',
    image: '/images/projects/sys-pulse.png',
  },
  {
    slug: 'dream-logger',
    title: 'Dream Logger',
    description:
      'A minimalist app for logging dream entries and visualizing sleep patterns.',
    category: 'world',
    tech: ['React', 'Tailwind'],
    repo: 'https://github.com/you/dream-logger',
    status: 'in-progress',
    year: '2025',
    image: '/images/projects/dream-logger.png',
  },
];