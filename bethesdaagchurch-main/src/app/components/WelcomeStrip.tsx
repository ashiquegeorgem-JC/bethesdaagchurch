'use client';
import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Families Served',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Years of Ministry',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  { value: 200, suffix: '+', label: 'Youth Empowered', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  {
    value: 100,
    suffix: '+',
    label: 'Volunteers',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WelcomeStrip() {
  return (
    <section
      className="relative py-16 bg-church-sand overflow-hidden"
      aria-label="Church statistics"
    >
      {/* Texture */}
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome line */}
        <p className="text-center text-church-bronze font-display text-lg sm:text-xl italic mb-10">
          &ldquo;Welcome home — you belong here.&rdquo;
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card-ivory rounded-2xl p-6 text-center relative overflow-hidden border border-church-gold/25 card-hover-lift shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-2xl" />

              <div className="w-10 h-10 rounded-full bg-church-green/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-church-green"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <p className="font-display text-4xl sm:text-5xl font-bold text-church-green mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-church-bronze text-xs sm:text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
