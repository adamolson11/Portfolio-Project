import { socialLinks } from '../../data/socialLinks';

export default function Contact() {
  return (
    <section id="contact" className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="mb-6 text-slate-700">I'm open to freelance projects and full-time roles — say hello!</p>
        <div className="flex gap-3">
          <a href="mailto:you@example.com" className="px-4 py-2 bg-slate-900 text-white rounded-md">Email me</a>
        </div>
        <div className="mt-6 flex gap-3">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}