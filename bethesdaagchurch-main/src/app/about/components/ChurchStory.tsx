'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const milestones = [
  {
    year: '[Year]',
    title: 'Church Founded',
    desc: "Bethesda AG Church began as a small gathering of believers in Bengaluru, united by a vision to serve the city with God's love.",
  },
  {
    year: '[Year]',
    title: 'First Building',
    desc: 'The congregation moved into its first dedicated worship space, marking a new chapter of growth and community.',
  },
  {
    year: '[Year]',
    title: 'Multilingual Worship',
    desc: 'Expanded services to include all six languages — Kannada, Tamil, Malayalam, English, Telugu, and Hindi.',
  },
  {
    year: '[Year]',
    title: 'Community Outreach',
    desc: 'Launched dedicated community outreach and missions programs, serving thousands across the city.',
  },
  {
    year: 'Today',
    title: 'Growing Together',
    desc: 'A vibrant, multigenerational congregation of 500+ members, eight ministries, and a heart for the city and the world.',
  },
];

export default function ChurchStory() {
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
      aria-labelledby="story-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="animate-on-scroll mb-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3 block">
                Our History
              </span>
              <div className="section-divider-gold w-16 mb-4" />
              <h2
                id="story-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-church-green leading-tight mb-4"
              >
                Rooted in <span className="text-gradient-gold">Faith</span>, Growing in Love
              </h2>
              <p className="text-church-bronze leading-relaxed mb-4">
                Bethesda AG Church was born out of a deep conviction that Bengaluru needed a church
                that would be a true spiritual home — not just a gathering place, but a family where
                every person could encounter God and be transformed by His love.
              </p>
              <p className="text-church-bronze/80 leading-relaxed text-sm">
                Over the years, God has been faithful. What began as a small gathering has grown
                into a vibrant, multilingual congregation that reflects the beautiful diversity of
                our city and the unity of Christ&apos;s body.
              </p>
              <p className="text-church-bronze/50 text-xs italic mt-3">
                [Confirm specific dates and details with church office]
              </p>
            </div>

            <div className="animate-on-scroll">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1cdf366ea-1777172326052.png"
                alt="Multigenerational church congregation gathered outdoors in bright sunlight, joyful expressions, families together"
                width={700}
                height={450}
                className="rounded-2xl object-cover w-full shadow-xl"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-display text-2xl font-bold text-church-green mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-church-gold via-church-green to-transparent" />

              <div className="space-y-8">
                {milestones?.map((m, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* Dot */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-church-green border-2 border-church-gold flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-church-gold" />
                    </div>
                    <div className="pb-2">
                      <span className="text-church-gold font-bold text-sm tracking-wide">
                        {m?.year}
                      </span>
                      <h4 className="font-display text-lg font-semibold text-church-green mb-1">
                        {m?.title}
                      </h4>
                      <p className="text-church-bronze text-sm leading-relaxed">{m?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
