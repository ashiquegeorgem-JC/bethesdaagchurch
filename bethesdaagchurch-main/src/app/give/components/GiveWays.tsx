'use client';
import React, { useEffect, useRef } from 'react';

const ways = [
  {
    title: 'Give Online',
    desc: 'Securely give online anytime, from anywhere. Quick, easy, and receipts provided.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    action: 'Give Now →',
    note: '[Online giving gateway — confirm with church office]',
    highlight: true,
  },
  {
    title: 'Give In Person',
    desc: 'Drop your offering during any Sunday service. Offering envelopes are available at the entrance.',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    action: 'Plan Your Visit →',
    note: 'Available at all Sunday services',
    highlight: false,
  },
  {
    title: 'Bank Transfer',
    desc: 'Transfer directly to the church account. Contact the church office for bank details.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    action: 'Get Bank Details →',
    note: '[Bank details — confirm with church office]',
    highlight: false,
  },
];

export default function GiveWays() {
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
    <section ref={sectionRef} className="py-20 bg-church-ivory relative overflow-hidden" aria-labelledby="give-ways-heading">
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3 block">Three Ways to Give</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="give-ways-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Choose How to <span className="text-gradient-gold">Partner With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ways?.map((way, i) => (
            <div
              key={i}
              className={`animate-on-scroll rounded-3xl p-8 border card-hover-lift relative overflow-hidden ${
                way?.highlight
                  ? 'bg-church-green border-church-gold/30 text-white' :'glass-card-ivory border-church-gold/20'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {way?.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-church-gold rounded-full text-xs font-bold text-church-green uppercase tracking-wide">
                  Recommended
                </div>
              )}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${way?.highlight ? 'bg-church-gold/20' : 'bg-church-sand'}`}>
                <svg className={`w-6 h-6 ${way?.highlight ? 'text-church-gold' : 'text-church-green'}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={way?.icon} />
                </svg>
              </div>
              <h3 className={`font-display text-2xl font-bold mb-3 ${way?.highlight ? 'text-white' : 'text-church-green'}`}>{way?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${way?.highlight ? 'text-white/70' : 'text-church-bronze'}`}>{way?.desc}</p>
              <p className={`text-xs italic mb-6 ${way?.highlight ? 'text-white/40' : 'text-church-bronze/50'}`}>{way?.note}</p>
              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                way?.highlight
                  ? 'btn-gold text-church-green' :'btn-primary-church text-white'
              }`}>
                {way?.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-on-scroll">
          <p className="text-church-bronze/70 text-sm">
            <svg className="w-4 h-4 inline-block mr-1 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> All online transactions are secure and encrypted. Tax-deductible receipts are provided for all donations.
          </p>
        </div>
      </div>
    </section>
  );
}