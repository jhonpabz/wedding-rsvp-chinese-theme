import { motion } from 'framer-motion';
import { Clock, Church, PartyPopper } from 'lucide-react';
import { SectionCard } from './SectionCard';
import { timeline } from '../data/weddingData';
import type { TimelineItem } from '../types';

const iconMap = {
  assembly: Clock,
  ceremony: Church,
  reception: PartyPopper,
};

export function Timeline() {
  return (
    <div className="py-14 sm:py-20">
      <SectionCard>
        <header className="text-center mb-10">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            The Day
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            Schedule of Events
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <ol className="relative space-y-0">
          {/* Vertical gold line */}
          <div
            className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/80 via-gold/40 to-gold/20"
            aria-hidden="true"
          />

          {timeline.map((item, index) => (
            <TimelineRow key={item.id} item={item} index={index} />
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}

function TimelineRow({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const Icon = iconMap[item.icon];

  return (
    <motion.li
      className="relative flex gap-4 sm:gap-5 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Icon node */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-imperial-red text-gold flex items-center justify-center shadow-md shadow-imperial-red/30 border-2 border-gold/60">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </div>

      <div className="flex-1 pt-0.5">
        <p className="font-display text-gold text-sm tracking-wider mb-0.5">
          {item.time}
        </p>
        <h3 className="font-display text-lg sm:text-xl text-imperial-red mb-1.5">
          {item.title}
        </h3>
        <p className="text-ink-muted text-sm sm:text-[15px] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
