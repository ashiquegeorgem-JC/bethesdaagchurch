import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MinistriesHero() {
  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden" aria-label="Ministries page hero">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1f208c521-1766147941039.png"
          alt="Diverse multigenerational church congregation gathered together outdoors in bright warm sunlight, joyful and embracing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-church-green/95 via-church-green/55 to-transparent" />
        <div className="absolute inset-0 opacity-5 section-grain pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-church-gold/30 mb-6">
          <span className="text-church-gold text-xs font-semibold tracking-widest uppercase">Get Involved</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Find Your Place to <span className="text-gradient-gold">Serve</span>
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
          Every person has a role in God's story. Discover the ministry where your gifts, passion, and calling align — and join us in serving together.
        </p>
      </div>
    </section>);

}