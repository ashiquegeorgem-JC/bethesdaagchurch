import React from 'react';
import Link from 'next/link';

export default function MinistriesCTA() {
  return (
    <section
      className="py-16 bg-church-green relative overflow-hidden"
      aria-label="Ministries call to action"
    >
      <div className="absolute inset-0 cross-pattern opacity-5 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Not Sure Where to <span className="text-gradient-gold">Start?</span>
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed text-sm sm:text-base">
          That&apos;s completely okay. Come for a Sunday service, meet our team, and we&apos;ll help
          you find your place. No pressure — just a warm welcome.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-base text-church-green"
          >
            Plan Your Visit →
          </Link>
          <a
            href="https://wa.me/919743316337"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-8 py-3.5 rounded-xl font-semibold text-base"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
