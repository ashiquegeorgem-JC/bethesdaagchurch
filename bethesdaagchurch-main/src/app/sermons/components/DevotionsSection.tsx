'use client';
import React, { useEffect, useRef } from 'react';

export default function DevotionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-church-green relative overflow-hidden"
      aria-labelledby="devotions-heading"
    >
      <div className="absolute inset-0 cross-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Devotions */}
          <div className="animate-on-scroll glass-card rounded-3xl p-8 border border-church-gold/20">
            <div className="w-12 h-12 rounded-full bg-church-gold/20 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-church-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <h2
              id="devotions-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-white mb-3"
            >
              Daily Devotions
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Start every morning in God&apos;s Word. Our daily devotional readings are crafted to
              encourage, challenge, and anchor you in scripture — available in multiple languages.
            </p>
            <div className="glass-card rounded-xl p-5 border border-church-gold/15 mb-6">
              <p className="text-church-gold text-xs font-semibold uppercase tracking-wide mb-2">
                Today&apos;s Verse
              </p>
              <p className="text-white font-display text-lg italic leading-relaxed mb-2">
                &ldquo;For I know the plans I have for you, declares the Lord, plans to prosper you
                and not to harm you, plans to give you hope and a future.&rdquo;
              </p>
              <p className="text-white/50 text-xs">— Jeremiah 29:11</p>
            </div>
            <button className="btn-gold px-6 py-3 rounded-xl font-semibold text-sm text-church-green">
              Read Today&apos;s Devotion →
            </button>
          </div>

          {/* Online Bible Study */}
          <div
            className="animate-on-scroll glass-card rounded-3xl p-8 border border-church-gold/20"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-church-gold/20 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-church-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Online Bible Study
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Join our weekly online Bible study sessions — interactive, in-depth, and available for
              all levels of biblical knowledge. Study with a community that loves God&apos;s Word.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Schedule', value: '[Day & Time — Confirm with church]' },
                { label: 'Platform', value: 'Zoom / YouTube Live' },
                { label: 'Language', value: 'English (multilingual sessions available)' },
              ]?.map((item) => (
                <div key={item?.label} className="flex gap-3 text-sm">
                  <span className="text-church-gold font-semibold w-24 flex-shrink-0">
                    {item?.label}:
                  </span>
                  <span className="text-white/70">{item?.value}</span>
                </div>
              ))}
            </div>
            <button className="btn-gold px-6 py-3 rounded-xl font-semibold text-sm text-church-green">
              Join Bible Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
