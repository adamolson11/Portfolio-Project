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

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-slate-500">
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full border border-slate-800 text-slate-500 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/5 flex items-center justify-center transition-all duration-200"
                aria-label={link.name}
              >
                {Icon && <Icon className="w-4 h-4" />}
              </motion.a>
            );
          })}
        </div>
        <div>© {new Date().getFullYear()} New Ness · Hudson Blue</div>
        <div className="mt-2 text-xs">Still under construction. So am I.</div>
      </div>
    </footer>
  );
}