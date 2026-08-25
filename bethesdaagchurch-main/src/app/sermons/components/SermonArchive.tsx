'use client';
import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

const filters = ['All', 'Kannada', 'Tamil', 'Malayalam', 'English', 'Telugu', 'Hindi'];

export default function SermonArchive() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetch('/api/youtube')
      .then((r) => r.json())
      .then((data) => {
        setVideos(data.videos || []);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    sectionRef?.current
      ?.querySelectorAll('.animate-on-scroll')
      ?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const detectLanguage = (title: string): string => {
    const t = title.toLowerCase();
    if (t.includes('tamil')) return 'Tamil';
    if (t.includes('kannada')) return 'Kannada';
    if (t.includes('malayalam')) return 'Malayalam';
    if (t.includes('telugu')) return 'Telugu';
    if (t.includes('hindi')) return 'Hindi';
    return 'English';
  };

  const filtered = videos.filter((v) => {
    if (activeFilter === 'All') return true;
    return detectLanguage(v.title) === activeFilter;
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-church-sand relative overflow-hidden"
      aria-labelledby="archive-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 animate-on-scroll">
          <h2
            id="archive-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-6"
          >
            Sermon <span className="text-gradient-gold">Archive</span>
          </h2>
          {/* Language filter */}
          <div
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter sermons by language"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-church-green text-white shadow-md'
                    : 'bg-white/70 text-church-bronze hover:bg-church-green/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(filtered.length > 0 ? filtered : videos).map((sermon, i) => {
            const lang = detectLanguage(sermon.title);
            return (
              <a
                key={sermon.id}
                href={sermon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/20 card-hover-lift group block"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-church-green/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <svg
                        className="w-5 h-5 text-church-green ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-church-gold text-white rounded-full text-xs font-bold shadow">
                    {lang}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-church-gold text-xs font-semibold uppercase tracking-wide mb-1">
                    Bethesda AG Church
                  </p>
                  <h3 className="font-display text-base font-semibold text-church-green mb-1 leading-snug line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-church-bronze text-xs">Official YouTube Stream</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://www.youtube.com/@Bethesda_AG/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm"
          >
            View Full Archive on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}
