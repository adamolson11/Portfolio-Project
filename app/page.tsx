import Hero from '../components/sections/Hero';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <section className="max-w-5xl mx-auto py-16 px-6">
        <ProjectsGrid projects={projects} />
      </section>
      <About />
      <Contact />
    </main>
  );
}