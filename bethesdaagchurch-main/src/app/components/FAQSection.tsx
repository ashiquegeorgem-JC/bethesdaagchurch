'use client';
import React, { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'What are the timings for your Sunday services?',
    a: 'We have four Sunday services: Kannada/Tamil at 7:30–9:30 AM, Malayalam/Kannada at 9:30–11:30 AM, English/Telugu at 11:30 AM–1:30 PM, and Kannada/Hindi at 6:30–8:30 PM.',
  },
  {
    q: 'Do you have online Zoom services?',
    a: 'Yes! We offer Daily Morning Devotion (7:00–8:00 AM), Daily Intercessory Prayer (11:30 AM–12:30 PM), and Bible Study Tuesday to Thursday (7:30–8:30 PM) on Zoom.',
  },
  {
    q: 'Do I need to register to attend a service?',
    a: 'No registration is required. You are welcome to walk in to any of our Sunday services. We would love to meet you!',
  },
  {
    q: 'What languages are the services conducted in?',
    a: 'Our services are conducted in Kannada, Tamil, Malayalam, English, Telugu, and Hindi — ensuring everyone can worship in their heart language.',
  },
  {
    q: "Is there a children\'s church or nursery available?",
    a: "Yes! We have Children's School during Sunday services with engaging, age-appropriate lessons for kids to learn about God's love in a safe and fun setting.",
  },
  {
    q: 'How can I request prayer or counseling?',
    a: 'You can reach out to us via phone (+91 98450 09824), WhatsApp (+91 97433 16337), or email (contact@bethesdaag.org). Our pastoral team is here for you.',
  },
  {
    q: 'Are there any small groups or mentoring programs?',
    a: 'Yes! We have Life Groups on Mondays (7:30 PM), Cottage Prayer on Fridays (7:30 PM), and various discipleship and mentorship opportunities throughout the week.',
  },
  {
    q: 'How can I get involved in church ministries?',
    a: 'Visit our Ministries page or speak to any of our team members after a service. We have ministries for children, youth, women, men, prayer, community outreach, and missions.',
  },
  {
    q: 'How do I become a member of Bethesda AG Church?',
    a: 'We would love to have you as part of our family! Please reach out to us through the contact form or speak to a pastor after any service to learn about our membership process.',
  },
  {
    q: 'Is there a dress code for attending services?',
    a: 'There is no dress code. Come as you are — we welcome everyone. What matters most is your heart, not your attire.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
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
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-church-bronze mb-3">Got Questions?</span>
          <div className="section-divider-gold w-16 mx-auto mb-4" />
          <h2 id="faq-heading" className="font-display text-4xl sm:text-5xl font-bold text-church-green">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>

        <div className="space-y-3 animate-on-scroll">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className="glass-card-ivory rounded-2xl border border-church-gold/20 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-church-green/5 transition-colors duration-200"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-base font-semibold text-church-green pr-4">{faq?.q}</span>
                <div className={`w-6 h-6 rounded-full bg-church-green/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-3.5 h-3.5 text-church-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-church-bronze text-sm leading-relaxed">{faq?.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-church-bronze text-sm mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="btn-primary-church inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base"
          >
            Contact Us!
          </a>
        </div>
      </div>
    </section>
  );
}
