import { SectionCard } from './SectionCard';
import { dressCode } from '../data/weddingData';

export function DressCode() {
  return (
    <div className="py-14 sm:py-20">
      <SectionCard>
        <header className="text-center mb-8">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            Attire
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            {dressCode.title}
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <p className="text-center text-ink-muted text-sm sm:text-[15px] leading-relaxed mb-6 max-w-md mx-auto">
          {dressCode.description}
        </p>

        <p className="text-center font-display text-sm text-imperial-red/90 tracking-wide mb-8">
          {dressCode.theme}
        </p>

        {/* Color swatches */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-8">
          {dressCode.colors.map((swatch) => (
            <div key={swatch.hex} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gold/70 shadow-md"
                style={{ backgroundColor: swatch.hex }}
                title={swatch.name}
                aria-label={swatch.name}
              />
              <span className="text-xs text-ink-muted tracking-wide">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg bg-imperial-red/5 border border-imperial-red/15 px-4 py-3 text-sm text-ink-muted leading-relaxed text-center"
          role="note"
        >
          {dressCode.avoidNote}
        </div>
      </SectionCard>
    </div>
  );
}
