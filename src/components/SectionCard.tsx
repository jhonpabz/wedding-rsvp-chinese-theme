import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Slightly larger padding for form-style cards */
  large?: boolean;
}

/**
 * Reusable parchment-style card with ornate gold borders and corner filigree.
 * Used for Welcome, Timeline content, Entourage groups, Dress Code, Gift Guide, and RSVP.
 */
export function SectionCard({
  children,
  className = '',
  id,
  large = false,
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto max-w-2xl px-4 sm:px-6 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`
          relative overflow-hidden rounded-xl
          bg-[#FFFDF7]
          border-2 border-gold
          shadow-[0_0_0_1px_rgba(255,215,0,0.35),0_12px_40px_-8px_rgba(200,16,46,0.12),inset_0_0_40px_rgba(255,215,0,0.04)]
          ${large ? 'p-7 sm:p-10' : 'p-6 sm:p-8'}
        `}
      >
        {/* Corner filigree ornaments */}
        <CornerFiligree position="tl" />
        <CornerFiligree position="tr" />
        <CornerFiligree position="bl" />
        <CornerFiligree position="br" />

        {/* Subtle inner gold line */}
        <div className="pointer-events-none absolute inset-3 rounded-lg border border-gold/25" />

        <div className="relative z-10">{children}</div>
      </div>
    </motion.section>
  );
}

function CornerFiligree({
  position,
}: {
  position: 'tl' | 'tr' | 'bl' | 'br';
}) {
  const base =
    'pointer-events-none absolute w-10 h-10 sm:w-12 sm:h-12 text-gold/70';
  const map = {
    tl: 'top-2 left-2',
    tr: 'top-2 right-2 rotate-90',
    bl: 'bottom-2 left-2 -rotate-90',
    br: 'bottom-2 right-2 rotate-180',
  };

  return (
    <svg
      className={`${base} ${map[position]}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4 L4 18 M4 4 L18 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M8 8 Q14 8 14 14"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
      />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}
