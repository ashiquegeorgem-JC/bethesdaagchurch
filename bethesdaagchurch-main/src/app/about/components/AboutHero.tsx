import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end overflow-hidden"
      aria-label="About page hero"
    >
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1651585059285-7e0e320a9f36"
          alt="Congregation gathered in warmly lit church hall, families seated together in rows, soft natural light streaming through windows"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-church-green/90 via-church-green/50 to-transparent" />
        <div className="absolute inset-0 opacity-5 section-grain pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-church-gold/30 mb-6">
          <span className="text-church-gold text-xs font-semibold tracking-widest uppercase">
            Our Story
          </span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Who We Are &amp; <span className="text-gradient-gold">Why We Exist</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
          A church family where Christ&apos;s love is lived out, experienced, and shared — every
          single day.
        </p>
      </div>
    </section>
  );
}
