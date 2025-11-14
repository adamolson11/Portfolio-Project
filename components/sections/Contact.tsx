'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks';
import { GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from '@/components/icons/SocialIcons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Email: EmailIcon,
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="border-t border-slate-800"
    >
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3 text-white">Let's connect.</h2>
        <p className="mb-6 text-slate-300">If you're hiring for entry-level IT or dev roles, or just want to talk about projects, web dev, or systems thinking, feel free to reach out.</p>
        <div className="flex justify-center gap-3">
          <a href="mailto:adam@example.com" className="px-5 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-400 transition-colors">Send me an email</a>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-500/60 hover:bg-sky-500/5 flex items-center justify-center transition-all duration-200"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}