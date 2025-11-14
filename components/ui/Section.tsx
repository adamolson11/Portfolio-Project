"use client";
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
  animate?: boolean;
}

export default function Section({ id, children, className = '', as = 'section', animate = true }: SectionProps) {
  const Comp: any = as;
  const inner = (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
  );
  return animate ? (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {inner}
    </motion.section>
  ) : (
    <Comp id={id}>{inner}</Comp>
  );
}
