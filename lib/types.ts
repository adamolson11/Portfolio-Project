export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category?: 'code' | 'world' | 'system';
  tech: string[];
  link?: string;
  repo?: string;
  status?: 'in-progress' | 'live' | 'archived';
  highlight?: boolean;
  year?: string;
  image?: string;
};

export type SocialLink = {
  name: string;
  href: string;
};