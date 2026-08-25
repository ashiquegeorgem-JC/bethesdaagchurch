'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is my online giving secure?',
    a: 'Yes. All online transactions are processed through a secure, encrypted payment gateway. Your financial information is never stored on our servers.',
  },
  {
    q: 'Will I receive a receipt for my donation?',
    a: 'Yes. A receipt will be emailed to you for every online donation. For in-person giving, receipts can be requested from the church office. All donations are tax-deductible.',
  },
  {
    q: 'Can I set up a recurring donation?',
    a: 'Yes. You can set up weekly or monthly recurring donations through our online giving portal. [Confirm portal details with church office]',
  },
  {
    q: 'What is the money used for?',
    a: 'Your giving supports our worship services, ministry programs, community outreach, missions work, and the operational needs of the church. We are committed to full financial transparency.',
  },
  {
    q: 'How do I get bank transfer details?',
    a: 'Please contact the church office at contact@bethesdaag.org or call +91 98450 09824 for bank transfer details.',
  },
];

export default function GiveFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-20 bg-church-ivory relative overflow-hidden"
      aria-labelledby="give-faq-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            id="give-faq-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-3"
          >
            Giving <span className="text-gradient-gold">FAQs</span>
          </h2>
          <p className="text-church-bronze text-sm">
            Everything you need to know about giving at Bethesda AG Church.
          </p>
        </div>

        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className="glass-card-ivory rounded-xl border border-church-gold/20 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-church-green text-sm pr-4">{faq?.q}</span>
                <svg
                  className={`w-5 h-5 text-church-gold flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-5 pb-5 text-church-bronze text-sm leading-relaxed">{faq?.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
