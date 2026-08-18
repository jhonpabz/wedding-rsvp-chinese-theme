import { motion } from 'framer-motion';
import { SectionCard } from './SectionCard';
import { entourage } from '../data/weddingData';

export function Entourage() {
  return (
    <div className="py-14 sm:py-20 space-y-10">
      <div className="text-center px-4">
        <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
          With Love
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
          The Entourage
        </h2>
        <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {entourage.map((group, groupIndex) => (
        <SectionCard key={group.id}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
          >
            <header className="text-center mb-6">
              <h3 className="font-display text-xl sm:text-2xl text-imperial-red">
                {group.title}
              </h3>
              {group.subtitle && (
                <p className="mt-1 text-sm text-gold/90 tracking-wide">
                  {group.subtitle}
                </p>
              )}
              <div className="mt-3 mx-auto h-px w-12 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </header>

            <ul className="space-y-2.5 text-center">
              {group.members.map((member) => (
                <li
                  key={member}
                  className="text-ink text-[15px] sm:text-base leading-relaxed"
                >
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>
        </SectionCard>
      ))}
    </div>
  );
}
