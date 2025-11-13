export type Project = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  tags: string[];
  repo?: string;
  live?: string;
};

export type SocialLink = {
  name: string;
  href: string;
};