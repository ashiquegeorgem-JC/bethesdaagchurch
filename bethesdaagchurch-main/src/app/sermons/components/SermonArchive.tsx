'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const filters = ['All', 'Kannada', 'Tamil', 'Malayalam', 'English', 'Telugu', 'Hindi'];

const sermons = [
{ title: '[Sermon Title 1]', speaker: '[Pastor Name]', date: '[Date]', language: 'English', series: '[Series]', thumb: "https://images.unsplash.com/photo-1593193583532-16cd0ff62768", thumbAlt: 'Open Bible on wooden surface in warm amber candlelight, dark atmospheric background' },
{ title: '[Sermon Title 2]', speaker: '[Pastor Name]', date: '[Date]', language: 'Kannada', series: '[Series]', thumb: "https://img.rocket.new/generatedImages/rocket_gen_img_16ac8b83e-1772491156090.png", thumbAlt: 'Congregation in prayer with bowed heads in warmly lit church interior' },
{ title: '[Sermon Title 3]', speaker: '[Guest Speaker]', date: '[Date]', language: 'Tamil', series: '[Series]', thumb: "https://images.unsplash.com/photo-1551407681-9b76b5a7bdb1", thumbAlt: 'Worshippers with raised hands in dimly lit sanctuary with warm stage lighting' },
{ title: '[Sermon Title 4]', speaker: '[Pastor Name]', date: '[Date]', language: 'Malayalam', series: '[Series]', thumb: "https://img.rocket.new/generatedImages/rocket_gen_img_1fcd0faac-1784405538334.png", thumbAlt: 'Pastor at pulpit in bright naturally lit sanctuary speaking to congregation' },
{ title: '[Sermon Title 5]', speaker: '[Pastor Name]', date: '[Date]', language: 'Telugu', series: '[Series]', thumb: "https://images.unsplash.com/photo-1555945932-0759fa511c63", thumbAlt: 'Church congregation gathered outdoors in bright sunlight for outdoor service' },
{ title: '[Sermon Title 6]', speaker: '[Guest Speaker]', date: '[Date]', language: 'Hindi', series: '[Series]', thumb: "https://images.unsplash.com/photo-1675099124977-5aab6e554dbd", thumbAlt: 'Hands raised in prayer and worship in atmospheric low light sanctuary setting' }];


export default function SermonArchive() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? sermons : sermons?.filter((s) => s?.language === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-church-sand relative overflow-hidden" aria-labelledby="archive-heading">
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 id="archive-heading" className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-6">
            Sermon <span className="text-gradient-gold">Archive</span>
          </h2>
          {/* Language filter */}
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter sermons by language">
            {filters?.map((f) =>
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === f ?
              'bg-church-green text-white shadow-md' :
              'bg-white/70 text-church-bronze hover:bg-church-green/10'}`
              }>
              
                {f}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered?.map((sermon, i) =>
          <div
            key={i}
            className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/20 card-hover-lift group"
            style={{ transitionDelay: `${i * 60}ms` }}>
            
              <div className="relative aspect-video overflow-hidden">
                <AppImage
                src={sermon?.thumb}
                alt={sermon?.thumbAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-church-green/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-5 h-5 text-church-green ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-church-gold/90 rounded-full text-xs font-bold text-church-green">
                  {sermon?.language}
                </div>
              </div>
              <div className="p-4">
                <p className="text-church-gold text-xs font-semibold uppercase tracking-wide mb-1">{sermon?.series}</p>
                <h3 className="font-display text-base font-semibold text-church-green mb-1 leading-snug">{sermon?.title}</h3>
                <p className="text-church-bronze text-xs">{sermon?.speaker} · {sermon?.date}</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://www.youtube.com/@BethesdaAGChurch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm">
            
            View Full Archive on YouTube →
          </a>
          <p className="text-church-bronze/50 text-xs italic mt-3">[All sermon content to be confirmed with church office]</p>
        </div>
      </div>
    </section>);

}