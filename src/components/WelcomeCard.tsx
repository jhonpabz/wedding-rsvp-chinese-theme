import { SectionCard } from './SectionCard';
import { welcomeMessage } from '../data/weddingData';

export function WelcomeCard() {
  return (
    <div className="py-14 sm:py-20">
      <SectionCard>
        <header className="text-center mb-7">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            Welcome
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            {welcomeMessage.title}
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <div className="space-y-5 text-ink-muted text-sm sm:text-[15px] leading-relaxed text-center max-w-lg mx-auto">
          {welcomeMessage.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <blockquote className="mt-8 pt-6 border-t border-gold/25 text-center">
          <p className="font-display text-sm sm:text-base text-imperial-red/90 italic leading-relaxed whitespace-pre-line">
            {welcomeMessage.poem}
          </p>
        </blockquote>
      </SectionCard>
    </div>
  );
}
