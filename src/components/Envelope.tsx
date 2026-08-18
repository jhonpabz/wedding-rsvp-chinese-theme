import { motion } from 'framer-motion';
import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

/**
 * Interactive Chinese Red Envelope (Hongbao) landing experience.
 * Gold foil borders, double happiness symbol, subtle float + pulse.
 * Click triggers 3D flip / unseal animation then reveals the story scroll.
 */
export function Envelope({ onOpen }: EnvelopeProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-imperial-red via-[#A00D24] to-[#8B0000] overflow-hidden">
      {/* Decorative floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/55"
            style={{
              left: `${8 + (i * 7) % 84}%`,
              top: `${12 + (i * 11) % 76}%`,
            }}
            animate={{
              y: [0, -22, 0],
              opacity: [0.25, 0.85, 0.25],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 3.2 + (i % 3) * 0.4,
              repeat: Infinity,
              delay: i * 0.28,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Envelope container */}
      <motion.div
        className="relative w-[min(90vw,380px)] aspect-[3/4]"
        style={{ perspective: 1200 }}
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          type="button"
          aria-label="Pindutin upang buksan ang paanyaya"
          onClick={handleOpen}
          disabled={isAnimating}
          className="relative w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 rounded-lg"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={!isAnimating ? { scale: 1.025 } : {}}
          whileTap={!isAnimating ? { scale: 0.98 } : {}}
        >
          {/* Front of envelope */}
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            style={{
              background:
                'linear-gradient(145deg, #C8102E 0%, #A00D24 50%, #8B0000 100%)',
              border: '3px solid #FFD700',
              boxShadow:
                '0 0 0 1px rgba(255,215,0,0.45), 0 25px 50px -12px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,215,0,0.25)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            animate={isAnimating ? { rotateY: 180 } : { rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Top flap */}
            <div
              className="absolute top-0 left-0 right-0 h-[28%] origin-top"
              style={{
                background: 'linear-gradient(180deg, #E0153A 0%, #C8102E 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                borderBottom: '2px solid rgba(255,215,0,0.55)',
              }}
            />

            {/* Gold corner ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/75 rounded-tl-sm" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/75 rounded-tr-sm" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/75 rounded-bl-sm" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/75 rounded-br-sm" />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
              <motion.div
                className="text-gold font-display text-7xl sm:text-8xl leading-none select-none"
                style={{ textShadow: '0 2px 14px rgba(0,0,0,0.4)' }}
                animate={{
                  scale: [1, 1.07, 1],
                  opacity: [0.88, 1, 0.88],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
              >
                囍
              </motion.div>

              <p className="mt-4 text-gold/90 font-display tracking-[0.28em] text-xs sm:text-sm uppercase">
                Wedding Invitation
              </p>

              <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <motion.div
                className="mt-8 px-6 py-3 rounded-full border border-gold/65 bg-black/15 backdrop-blur-sm"
                animate={
                  !isAnimating
                    ? {
                        boxShadow: [
                          '0 0 0 0 rgba(255,215,0,0.35)',
                          '0 0 0 14px rgba(255,215,0,0)',
                          '0 0 0 0 rgba(255,215,0,0.35)',
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2.1, repeat: Infinity }}
              >
                <span className="text-gold font-medium text-sm tracking-wide">
                  Pindutin upang Buksan
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.button>
      </motion.div>

      <p className="absolute bottom-6 text-gold/40 text-xs tracking-widest uppercase">
        Chinese New Year · 2026
      </p>
    </div>
  );
}
