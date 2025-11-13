export default function SocialIcon({ name }: { name: string }) {
  // Lightweight placeholder icon component; you can extend to real SVGs per network
  return <span className="inline-block px-2 py-1 bg-slate-100 rounded text-sm">{name}</span>;
}