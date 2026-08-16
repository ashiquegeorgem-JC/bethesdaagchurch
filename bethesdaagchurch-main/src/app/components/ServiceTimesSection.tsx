'use client';
import React, { useEffect, useRef } from 'react';

const sundayServices = [
  { languages: 'Kannada / Tamil', time: '7:30 AM – 9:30 AM', note: 'Main Hall', color: 'from-church-green/90 to-church-green/70' },
  { languages: 'Malayalam / Kannada', time: '9:30 AM – 11:30 AM', note: 'Main Hall', color: 'from-church-green/80 to-church-green/60' },
  { languages: 'English / Telugu', time: '11:30 AM – 1:30 PM', note: 'Main Hall', color: 'from-church-green/90 to-church-green/70' },
  { languages: 'Kannada / Hindi', time: '6:30 PM – 8:30 PM', note: 'Main Hall', color: 'from-church-green/80 to-church-green/60' },
];

const zoomServices = [
  { name: 'Daily Morning Devotion', time: '7:00 AM – 8:00 AM', days: 'Daily' },
  { name: 'Daily Intercessory Prayer', time: '11:30 AM – 12:30 PM', days: 'Daily' },
  { name: 'Bible Study', time: '7:30 PM – 8:30 PM', days: 'Tue – Thu' },
];

const weeklyServices = [
  { name: 'Life Group', time: '7:30 PM – 8:30 PM', day: 'Monday' },
  { name: "Women\'s Fellowship", time: '10:30 AM – 12:30 PM', day: 'Wednesday' },
  { name: 'Cottage Prayer', time: '7:30 PM – 8:30 PM', day: 'Friday' },
  { name: 'Youth Meeting', time: '6:00 PM – 7:20 PM', day: 'Saturday' },
  { name: 'Workers Meeting', time: '7:30 PM – 8:30 PM', day: 'Saturday' },
];

export default function ServiceTimesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-church-sand relative overflow-hidden"
      aria-labelledby="service-times-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Join Us</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="service-times-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            A Service for Every <span className="text-gradient-gold">Language</span>
          </h2>
          <p className="text-church-bronze mt-4 max-w-xl mx-auto text-sm sm:text-base">
            We celebrate God's presence in multiple languages every Sunday — because every heart deserves to worship in its mother tongue.
          </p>
        </div>

        {/* Sunday Worship Services */}
        <div className="mb-12 animate-on-scroll">
          <h3 className="font-display text-2xl font-semibold text-church-green mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-church-gold" />
            Sunday Worship Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sundayServices?.map((service, i) => (
              <div
                key={service?.languages}
                className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/25 card-hover-lift group shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`bg-gradient-to-r ${service?.color} h-2`} />
                <div className="p-5">
                  <div className="w-10 h-10 rounded-full bg-church-green flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-church-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-church-green mb-1 leading-snug">{service?.languages}</h3>
                  <p className="text-church-gold font-semibold text-sm mb-1">{service?.time}</p>
                  <p className="text-church-bronze/70 text-xs">{service?.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Zoom Services */}
        <div className="mb-12 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h3 className="font-display text-2xl font-semibold text-church-green mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-church-gold" />
            Online Zoom Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {zoomServices?.map((service, i) => (
              <div
                key={service?.name}
                className="glass-card-ivory rounded-2xl p-5 border border-church-gold/25 card-hover-lift shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-church-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-church-green" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-church-bronze/60 uppercase tracking-wide mb-0.5">{service?.days}</p>
                    <h4 className="font-display text-sm font-semibold text-church-green mb-1">{service?.name}</h4>
                    <p className="text-church-gold text-xs font-semibold">{service?.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/919743316337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-church-green hover:text-church-gold text-sm font-semibold transition-colors duration-200"
            >
              Join Us Online →
            </a>
          </div>
        </div>

        {/* Additional Weekly Services */}
        <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
          <h3 className="font-display text-2xl font-semibold text-church-green mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-church-gold" />
            Additional Weekly Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {weeklyServices?.map((service, i) => (
              <div
                key={`${service?.name}-${i}`}
                className="glass-card-ivory rounded-xl p-4 border border-church-gold/20 card-hover-lift shadow-sm text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="text-church-green font-bold text-xs uppercase tracking-wide mb-1">{service?.day}</p>
                <h4 className="font-display text-sm font-semibold text-church-green mb-1 leading-snug">{service?.name}</h4>
                <p className="text-church-gold text-xs font-semibold">{service?.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plan visit CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="/contact"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base"
          >
            Plan Your Visit This Sunday
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}