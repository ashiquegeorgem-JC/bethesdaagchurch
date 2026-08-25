'use client';
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    label: 'SEE',
    title: 'Visit Us',
    desc: 'Come and see what God is doing at Bethesda. Your first Sunday is simply about experiencing the warmth of our community.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    label: 'BELONG',
    title: 'Find Community',
    desc: 'Connect with a small group or ministry that fits your season of life. You were made for community — and community was made for you.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    label: 'GROW',
    title: 'Grow in Faith',
    desc: 'Deepen your walk with God through discipleship classes, Bible study, and daily devotions. Spiritual growth is a lifelong journey.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    label: 'SERVE',
    title: 'Serve Others',
    desc: "Discover your spiritual gifts and use them to serve your church and community. Every person has a role in God's story.",
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    label: 'SHARE',
    title: 'Share the Love',
    desc: 'Become a carrier of the Gospel — in your home, workplace, neighborhood, and beyond. This is the heart of everything we do.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function ConnectJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
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
      className="py-20 bg-church-sand relative overflow-hidden"
      aria-labelledby="connect-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">
            Your Journey
          </span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2
            id="connect-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-church-green"
          >
            Connect. Grow. <span className="text-gradient-gold">Serve. Share.</span>
          </h2>
          <p className="text-church-bronze mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Your faith journey has a path. We&apos;re here to walk it with you — from your very
            first visit to a life of fruitful service.
          </p>
        </div>

        {/* Step selector */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 animate-on-scroll flex-wrap">
          {steps?.map((step, i) => (
            <button
              key={step?.label}
              onClick={() => setActiveStep(i)}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeStep === i
                  ? 'bg-church-green text-white shadow-lg scale-105'
                  : 'bg-white border border-church-gold/30 text-church-bronze hover:bg-church-green/10 hover:text-church-green'
              }`}
            >
              {step?.label}
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <div className="animate-on-scroll">
          <div className="glass-card-ivory rounded-3xl p-8 sm:p-12 border border-church-gold/25 shadow-xl max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-church-green flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-church-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={steps?.[activeStep]?.icon} />
              </svg>
            </div>
            <p className="text-church-gold font-bold text-sm tracking-widest uppercase mb-2">
              {steps?.[activeStep]?.label}
            </p>
            <h3 className="font-display text-3xl font-bold text-church-green mb-4">
              {steps?.[activeStep]?.title}
            </h3>
            <p className="text-church-bronze leading-relaxed text-base">
              {steps?.[activeStep]?.desc}
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              {steps?.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${i === activeStep ? 'w-6 h-2 bg-church-green' : 'w-2 h-2 bg-church-bronze/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
