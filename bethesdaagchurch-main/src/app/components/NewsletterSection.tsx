'use client';
import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      className="py-16 bg-church-ivory relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      <div className="absolute inset-0 wave-texture opacity-30 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2
          id="newsletter-heading"
          className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-3"
        >
          Stay <span className="text-gradient-gold">Connected</span>
        </h2>
        <p className="text-church-bronze text-sm mb-8">
          Receive weekly devotions, event updates, and church news — straight to your inbox.
        </p>

        {submitted ? (
          <div className="glass-card-ivory rounded-2xl p-6 border border-church-gold/30 shadow-md">
            <p className="text-church-green font-display text-xl font-semibold mb-2">Thank you!</p>
            <p className="text-church-bronze text-sm">
              You&apos;re now connected with the Bethesda family. God bless you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 rounded-xl bg-white border border-church-gold/30 text-church-green placeholder-church-bronze/50 focus:outline-none focus:border-church-green focus:ring-2 focus:ring-church-green/10 transition-all text-sm"
            />
            <button
              type="submit"
              className="btn-gold px-6 py-3 rounded-xl font-semibold text-sm text-white whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        )}

        <p className="text-church-bronze/40 text-xs mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
