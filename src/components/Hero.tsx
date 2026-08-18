import { motion } from 'framer-motion';
import { couple } from '../data/weddingData';

/**
 * Hero Banner — first section after envelope opens.
 * Monogram, couple names, date & tagline.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center paper-texture overflow-hidden py-20"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(200,16,46,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        {/* Monogram */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
          <motion.span
            className="text-gold font-display text-5xl sm:text-6xl leading-none select-none"
            style={{ textShadow: '0 2px 16px rgba(200,16,46,0.25)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            {couple.monogram}
          </motion.span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.p
          className="font-display text-xs sm:text-sm tracking-[0.35em] uppercase text-imperial-red/75 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Together with their families
        </motion.p>

        {/* Names */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-imperial-red leading-[1.15] mb-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          {couple.bride}
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl text-gold tracking-widest my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-imperial-red leading-[1.15] mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          {couple.groom}
        </motion.h1>

        <motion.div
          className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        <motion.p
          className="font-display text-base sm:text-lg text-ink tracking-wide mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {couple.dayOfWeek} · {couple.date}
        </motion.p>

        <motion.p
          className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {couple.tagline}
        </motion.p>
      </div>
    </section>
  );
}
