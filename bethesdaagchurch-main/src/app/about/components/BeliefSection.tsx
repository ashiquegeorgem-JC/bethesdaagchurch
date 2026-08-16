'use client';
import React, { useEffect, useRef } from 'react';

const beliefs = [
  { title: 'The Bible', desc: 'We believe the Bible is the inspired, infallible Word of God — the supreme authority for faith and life.' },
  { title: 'The Trinity', desc: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.' },
  { title: 'Salvation', desc: 'We believe salvation is received through repentance and faith in Jesus Christ alone — by grace, not works.' },
  { title: 'The Holy Spirit', desc: 'We believe in the baptism of the Holy Spirit, with the evidence of speaking in tongues, as a gift for every believer.' },
  { title: 'Divine Healing', desc: 'We believe in divine healing as provided in Christ\'s atonement and available to all who believe.' },
  { title: 'The Second Coming', desc: 'We believe in the personal, imminent return of Jesus Christ for His church.' },
];

export default function BeliefSection() {
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
    <section ref={sectionRef} className="py-20 bg-church-green relative overflow-hidden" aria-labelledby="beliefs-heading">
      <div className="absolute inset-0 cross-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest uppercase text-church-gold/70 mb-3 block">What We Believe</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="beliefs-heading" className="font-display text-4xl sm:text-5xl font-bold text-white">
            Our Statement <span className="text-gradient-gold">of Faith</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beliefs?.map((belief, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card rounded-2xl p-6 border border-church-gold/20 card-hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-8 h-8 mb-4">
                <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" aria-hidden="true">
                  <rect x="13" y="2" width="6" height="28" rx="2" fill="#C7A16A"/>
                  <rect x="2" y="10" width="28" height="6" rx="2" fill="#C7A16A"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">{belief?.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{belief?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}