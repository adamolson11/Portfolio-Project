export function getMeta({ title, description }: { title?: string; description?: string }) {
  return {
    title: title ?? 'My Portfolio',
    description: description ?? 'Personal portfolio site',
  };
}