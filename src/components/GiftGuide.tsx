import { Gift, Heart } from 'lucide-react';
import { SectionCard } from './SectionCard';
import { giftGuide } from '../data/weddingData';

export function GiftGuide() {
  return (
    <div className="py-14 sm:py-20">
      <SectionCard>
        <header className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-imperial-red/10 flex items-center justify-center text-imperial-red">
              <Gift size={22} strokeWidth={1.5} />
            </div>
          </div>
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            With Gratitude
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            {giftGuide.title}
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <div className="rounded-lg bg-gradient-to-br from-imperial-red/8 to-gold/10 border border-gold/30 px-5 py-5 mb-8">
          <div className="flex items-start gap-3">
            <Heart
              size={18}
              className="text-imperial-red flex-shrink-0 mt-0.5"
              fill="currentColor"
              fillOpacity={0.2}
            />
            <p className="text-sm sm:text-[15px] text-ink leading-relaxed">
              {giftGuide.angbaoNote}
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {giftGuide.reminders.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
