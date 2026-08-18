import { useState } from 'react';
import { motion } from 'framer-motion';
import type { BannerImage as BannerImageType } from '../types';

interface BannerImageProps {
  banner: BannerImageType;
  /** Optional overlay gradient intensity */
  darkOverlay?: boolean;
}

/**
 * Full-width prenup banner with graceful Unsplash fallback on local image error.
 */
export function BannerImage({ banner, darkOverlay = true }: BannerImageProps) {
  const [src, setSrc] = useState(banner.src);

  return (
    <motion.section
      className="relative w-full h-[48vh] min-h-[260px] max-h-[520px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={src}
        alt={banner.alt}
        onError={() => {
          if (src !== banner.fallbackSrc) {
            setSrc(banner.fallbackSrc);
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {darkOverlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35"
          aria-hidden="true"
        />
      )}

      {/* Thin gold accent lines top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </motion.section>
  );
}
