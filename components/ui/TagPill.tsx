export default function TagPill({ label }: { label: string }) {
  return <span className="text-[11px] px-2 py-0.5 bg-slate-800 text-slate-200 rounded-full border border-slate-700">{label}</span>;
}