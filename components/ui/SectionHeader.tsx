export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl font-bold">{children}</h2>
    </header>
  );
}