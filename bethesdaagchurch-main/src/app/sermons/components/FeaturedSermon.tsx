'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function FeaturedSermon() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-church-ivory relative overflow-hidden" aria-labelledby="featured-sermon-heading">
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3 block">Latest Message</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="featured-sermon-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Watch This <span className="text-gradient-gold">Week's Sermon</span>
          </h2>
        </div>

        <div className="animate-on-scroll glass-card-ivory rounded-3xl overflow-hidden border border-church-gold/25 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 relative aspect-video overflow-hidden group">
              <AppImage
                src="https://images.unsplash.com/photo-1715610067656-629b6b8fd5a8"
                alt="Pastor preaching at pulpit with congregation in warm atmospheric light, hands raised in worship in background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw" />
              
              <div className="absolute inset-0 bg-church-green/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@BethesdaAGChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                  aria-label="Watch sermon on YouTube">
                  
                  <svg className="w-9 h-9 text-church-green ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-church-gold rounded-full text-xs font-bold text-church-green uppercase tracking-wide">
                Latest Message
              </div>
            </div>
            <div className="lg:col-span-2 p-8 flex flex-col justify-center">
              <p className="text-church-gold text-xs font-semibold uppercase tracking-widest mb-2">[Series Name — Confirm]</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-church-green mb-3 leading-snug">
                [Latest Sermon Title — Confirm with Church]
              </h3>
              <p className="text-church-bronze text-sm mb-2">[Pastor Name] · Sunday, [Date]</p>
              <p className="text-church-bronze/80 text-sm leading-relaxed mb-6">
                [Brief sermon description — to be confirmed with church office. This is where the heart of the message will be summarized for first-time viewers.]
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.youtube.com/@BethesdaAGChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-church px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                  
                  Watch on YouTube
                </a>
                <a
                  href="https://www.youtube.com/@BethesdaAGChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold px-5 py-3 rounded-lg text-sm font-semibold text-center">
                  
                  Full Archive
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}