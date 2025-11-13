export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(' ');
}