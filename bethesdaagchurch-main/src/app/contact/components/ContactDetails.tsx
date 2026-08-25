'use client';
import React, { useEffect, useRef } from 'react';

export default function ContactDetails() {
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
      className="py-20 bg-church-ivory relative overflow-hidden"
      aria-labelledby="contact-details-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className="animate-on-scroll rounded-3xl overflow-hidden shadow-xl border border-church-gold/20"
            style={{ height: '450px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.5499!3d12.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzQ4LjEiTiA3N8KwMzInNTkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bethesda AG Church Bengaluru location on Google Maps"
              className="w-full h-full"
            />
          </div>

          {/* Contact info */}
          <div className="animate-on-scroll space-y-5" style={{ transitionDelay: '200ms' }}>
            <h2
              id="contact-details-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-6"
            >
              Find Us &amp; <span className="text-gradient-gold">Reach Out</span>
            </h2>

            {[
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Address',
                content:
                  'No. 36-B, Near Cafe Coffee Day, 42nd Cross, 8th Main Cross Road, 4th Block, Rajajinagar, Bengaluru, Karnataka 560010',
                href: undefined,
              },
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                title: 'Phone',
                content: '+91 98450 09824',
                href: 'tel:+919845009824',
              },
              {
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                title: 'Email',
                content: 'contact@bethesdaag.org',
                href: 'mailto:contact@bethesdaag.org',
              },
              {
                icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
                title: 'Website',
                content: 'bethesdachurchag.org',
                href: 'https://bethesdachurchag.org',
              },
            ]?.map((item) => (
              <div
                key={item?.title}
                className="glass-card-ivory rounded-2xl p-5 border border-church-gold/20 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-church-green flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-church-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item?.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-church-green text-sm mb-1">{item?.title}</p>
                  {item?.href ? (
                    <a
                      href={item?.href}
                      className="text-church-bronze text-sm hover:text-church-green transition-colors"
                    >
                      {item?.content}
                    </a>
                  ) : (
                    <p className="text-church-bronze text-sm leading-relaxed">{item?.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+919845009824"
                className="btn-primary-church flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919743316337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
