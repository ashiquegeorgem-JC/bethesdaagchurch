'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const ministries = [
  {
    name: "Children's Ministry",
    tagline: 'Raising the next generation for God',
    desc: "Our children's ministry creates a safe, joyful, and biblically rich environment for kids from birth through 12 years. Through creative storytelling, worship, and age-appropriate teaching, we help children discover who God is and how much He loves them.",
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a29ce817-1772666844552.png',
    imgAlt:
      'Children laughing together in bright colorful classroom setting with natural light, joyful expressions',
    color: 'bg-amber-50',
  },
  {
    name: 'Youth Ministry',
    tagline: 'Bold faith for a new generation',
    desc: "Our youth ministry empowers teenagers to live boldly for Christ. Through dynamic worship, relevant teaching, and authentic community, we help young people navigate life's challenges with biblical wisdom and Spirit-filled confidence.",
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_188d8a162-1772963857561.png',
    imgAlt:
      'Energetic group of teenagers in worship with hands raised, bright stage lighting, authentic expressions',
    color: 'bg-green-50',
  },
  {
    name: 'Family Ministry',
    tagline: 'Stronger families, stronger church',
    desc: "We believe the family is the primary unit of God's design. Our family ministry offers marriage enrichment, parenting support, and family discipleship resources — helping homes become places of grace, love, and spiritual growth.",
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    img: 'https://images.unsplash.com/photo-1733367460013-cbe583f088e7',
    imgAlt:
      'Multigenerational family seated together in church pew, warm natural light, genuine smiles',
    color: 'bg-amber-50',
  },
  {
    name: "Women's Ministry",
    tagline: 'A sisterhood of faith and grace',
    desc: "Our women's ministry is a vibrant sisterhood where women of all ages find encouragement, accountability, and deep spiritual growth. Through Bible studies, retreats, and community service, we help women walk confidently in their God-given identity.",
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_10f0c72e5-1785750139730.png',
    imgAlt:
      'Group of women in prayer circle with bowed heads and joined hands, warm indoor natural light',
    color: 'bg-rose-50',
  },
  {
    name: "Men's Ministry",
    tagline: 'Men of God, built for purpose',
    desc: "Our men's ministry builds men of character, faith, and integrity. Through discipleship groups, accountability partnerships, and service projects, we help men become the husbands, fathers, and leaders God has called them to be.",
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_12bfe4542-1765022062125.png',
    imgAlt:
      'Group of men in prayer together in church setting, heads bowed, hands joined in circle',
    color: 'bg-blue-50',
  },
  {
    name: 'Prayer Ministry',
    tagline: 'The engine of everything we do',
    desc: 'Prayer is the foundation of Bethesda AG Church. Our prayer ministry intercedes for our congregation, our city, our nation, and the world. Join us for weekly prayer meetings and become part of a community that moves heaven through prayer.',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_1afebe60e-1784191566341.png',
    imgAlt:
      'Hands raised in prayer in dimly lit sanctuary with atmospheric warm amber light from above',
    color: 'bg-purple-50',
  },
  {
    name: 'Community Outreach',
    tagline: 'Love in action, every single day',
    desc: 'Our outreach ministry serves the practical needs of our community — through food distribution, medical camps, educational support, and crisis care. We believe the church exists not just for itself, but for the city it serves.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    img: 'https://img.rocket.new/generatedImages/rocket_gen_img_154ad5526-1764668127120.png',
    imgAlt:
      'Church volunteers distributing food and supplies to community members in outdoor setting, bright daylight',
    color: 'bg-amber-50',
  },
  {
    name: 'Missions',
    tagline: 'Taking the Gospel to the ends of the earth',
    desc: "We are a mission-hearted church. Our missions ministry supports local evangelism, regional church planting, and global mission work. We believe every believer is called to be a part of God's Great Commission.",
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    img: 'https://images.unsplash.com/photo-1635141625032-3d7a7847a96d',
    imgAlt:
      'Mission team gathered for prayer before departure, hands joined in circle in outdoor setting, sunrise light',
    color: 'bg-green-50',
  },
];

export default function MinistriesGrid() {
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
      aria-labelledby="ministries-grid-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3 block">
            Eight Ministries
          </span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2
            id="ministries-grid-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-church-green"
          >
            Where Will You <span className="text-gradient-gold">Belong?</span>
          </h2>
        </div>

        <div className="space-y-8">
          {ministries?.map((ministry, i) => (
            <div
              key={i}
              className={`animate-on-scroll glass-card-ivory rounded-3xl overflow-hidden border border-church-gold/20 shadow-md card-hover-lift`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-2 relative aspect-video lg:aspect-auto overflow-hidden ${i % 2 !== 0 ? 'lg:col-start-4' : ''}`}
                >
                  <AppImage
                    src={ministry?.img}
                    alt={ministry?.imgAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-church-green/20" />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-3 p-7 sm:p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-church-green flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-church-gold"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={ministry?.icon} />
                      </svg>
                    </div>
                    <span className="text-church-gold text-xs font-semibold uppercase tracking-widest">
                      {ministry?.tagline}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-church-green mb-3">
                    {ministry?.name}
                  </h3>
                  <p className="text-church-bronze text-sm leading-relaxed mb-6">
                    {ministry?.desc}
                  </p>
                  <button className="btn-primary-church self-start px-6 py-3 rounded-xl font-semibold text-sm">
                    Join This Ministry →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
