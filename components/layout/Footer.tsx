export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} — Built by you. All rights reserved.
      </div>
    </footer>
  );
}