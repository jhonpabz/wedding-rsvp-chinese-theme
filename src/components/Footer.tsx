import { couple } from '../data/weddingData';

export function Footer() {
  return (
    <footer className="py-12 text-center paper-texture border-t border-gold/20">
      <p
        className="font-display text-3xl text-gold mb-3 select-none"
        aria-hidden="true"
      >
        囍
      </p>
      <p className="font-display text-sm tracking-[0.2em] text-imperial-red/80 uppercase mb-1">
        {couple.bride} & {couple.groom}
      </p>
      <p className="text-xs text-ink-muted tracking-wide">
        {couple.dateEnglish} · With love & gratitude
      </p>
    </footer>
  );
}
