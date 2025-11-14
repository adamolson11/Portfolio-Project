export const siteMetadata = {
  title: 'My Portfolio | Software Developer',
  description: 'Personal portfolio showcasing modern web development projects built with Next.js, TypeScript, and Tailwind CSS.',
  author: 'Your Name',
  siteUrl: 'https://yoursite.com',
  keywords: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Portfolio'],
};

export function getMeta({ title, description }: { title?: string; description?: string }) {
  return {
    title: title ?? siteMetadata.title,
    description: description ?? siteMetadata.description,
  };
}