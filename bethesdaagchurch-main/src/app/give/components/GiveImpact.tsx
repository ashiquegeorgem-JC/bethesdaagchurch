'use client';
import React, { useEffect, useRef, useState } from 'react';

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
          const increment = target / (1800 / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(Math.floor(start));
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

const impacts = [
  { value: 500, suffix: '+', label: 'Lives Touched Weekly' },
  { value: 8, suffix: '', label: 'Active Ministries' },
  { value: 6, suffix: '', label: 'Languages of Worship' },
  { value: 100, suffix: '+', label: 'Families Supported' },
];

export default function GiveImpact() {
  return (
    <section className="py-16 bg-church-green relative overflow-hidden" aria-label="Giving impact">
      <div className="absolute inset-0 cross-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-church-gold/70 text-xs font-semibold tracking-widest uppercase mb-10">
          Your Giving Makes This Possible
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="text-center glass-card rounded-2xl p-6 border border-church-gold/20"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-church-gold mb-2">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </p>
              <p className="text-white/70 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
