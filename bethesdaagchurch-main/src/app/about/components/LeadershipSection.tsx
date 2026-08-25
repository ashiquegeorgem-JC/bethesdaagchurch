'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const leaders = [
  {
    name: '[Senior Pastor Name]',
    role: 'Senior Pastor',
    desc: '[Brief bio — confirm with church office]',
    initials: 'SP',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_12ce5dcda-1785408776473.png',
    imgAlt:
      'Portrait of senior pastor in formal attire against neutral background, warm natural light',
  },
  {
    name: '[Associate Pastor Name]',
    role: 'Associate Pastor',
    desc: '[Brief bio — confirm with church office]',
    initials: 'AP',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cab38a1c-1763294638276.png',
    imgAlt: 'Portrait of associate pastor smiling warmly, professional setting, natural light',
  },
  {
    name: '[Worship Leader Name]',
    role: 'Worship Director',
    desc: '[Brief bio — confirm with church office]',
    initials: 'WD',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_19cde4c16-1763291996198.png',
    imgAlt: 'Portrait of worship director in casual professional attire, warm candid expression',
  },
  {
    name: '[Youth Pastor Name]',
    role: 'Youth Pastor',
    desc: '[Brief bio — confirm with church office]',
    initials: 'YP',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1030dbe57-1765152159521.png',
    imgAlt:
      'Portrait of youth pastor in relaxed setting, bright natural light, friendly expression',
  },
];

export default function LeadershipSection() {
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
      className="py-20 bg-church-sand relative overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3 block">
            Servant Leaders
          </span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2
            id="leadership-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-church-green"
          >
            Meet Our <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-church-bronze/60 text-xs italic mt-3">
            [Confirm all names, roles, and photos with church office]
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders?.map((leader, i) => (
            <div
              key={i}
              className="animate-on-scroll glass-card-ivory rounded-2xl overflow-hidden border border-church-gold/20 card-hover-lift group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <AppImage
                  src={leader?.img}
                  alt={leader?.imgAlt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-church-green/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-church-green">
                  {leader?.name}
                </h3>
                <p className="text-church-gold text-xs font-semibold uppercase tracking-wide mb-2">
                  {leader?.role}
                </p>
                <p className="text-church-bronze text-xs leading-relaxed">{leader?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
