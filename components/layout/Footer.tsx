export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-slate-500">
        <div>© {new Date().getFullYear()} New Ness · Hudson Blue</div>
        <div className="mt-2 text-xs">Still under construction. So am I.</div>
      </div>
    </footer>
  );
}