import React from 'react';
import Link from 'next/link';

export default function AboutValues() {
  return (
    <section
      className="py-16 bg-church-ivory relative overflow-hidden"
      aria-label="Connect with us"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-4">
          Ready to <span className="text-gradient-gold">Connect?</span>
        </h2>
        <p className="text-church-bronze mb-8 leading-relaxed">
          We would love to meet you. Plan your first visit, reach out with a question, or simply
          come and experience Bethesda for yourself this Sunday.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary-church px-8 py-3.5 rounded-xl font-semibold text-base"
          >
            Plan Your Visit →
          </Link>
          <Link
            href="/ministries"
            className="btn-outline-gold px-8 py-3.5 rounded-xl font-semibold text-base"
          >
            Explore Ministries
          </Link>
        </div>
      </div>
    </section>
  );
}
