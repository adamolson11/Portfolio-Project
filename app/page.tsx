import Hero from '@/components/sections/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import WritingSection from '@/components/sections/WritingSection';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="max-w-6xl mx-auto py-16 px-6">
        <ProjectsGrid projects={projects} />
      </section>
      <WritingSection />
      <About />
      <Contact />
    </main>
  );
}