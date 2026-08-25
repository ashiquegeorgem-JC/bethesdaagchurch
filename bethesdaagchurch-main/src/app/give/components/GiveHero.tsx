import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function GiveHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end overflow-hidden"
      aria-label="Give page hero"
    >
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1714746643293-f5c5f2b216ff"
          alt="Open hands offered upward in an act of giving, warm amber light from above, dark atmospheric background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-church-green/95 via-church-green/55 to-transparent" />
        <div className="absolute inset-0 opacity-5 section-grain pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-church-gold/30 mb-6">
          <span className="text-church-gold text-xs font-semibold tracking-widest uppercase">
            Generosity
          </span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Give to <span className="text-gradient-gold">God&apos;s Work</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
          Your generosity fuels worship, ministry, community care, and mission. Every gift is an act
          of partnership with God&apos;s kingdom.
        </p>
      </div>
    </section>
  );
}
