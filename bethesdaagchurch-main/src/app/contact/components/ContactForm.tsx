'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-church-sand relative overflow-hidden" aria-labelledby="contact-form-heading">
      <div className="absolute inset-0 wave-texture opacity-40 pointer-events-none" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 id="contact-form-heading" className="font-display text-3xl sm:text-4xl font-bold text-church-green mb-3">
            Experience God's Love <span className="text-gradient-gold">With Us</span>
          </h2>
          <p className="text-church-bronze text-sm max-w-lg mx-auto">We're more than a church; we're a family. Whether you have a question, need prayer, or want to know more about our community, we're here for you.</p>
        </div>

        {submitted ? (
          <div className="glass-card-ivory rounded-3xl p-10 border border-church-gold/25 text-center">
            <div className="w-16 h-16 rounded-full bg-church-green flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-church-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-church-green mb-2">Message Sent!</h3>
            <p className="text-church-bronze text-sm">Thank you for reaching out. We'll be in touch with you very soon. God bless you!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card-ivory rounded-3xl p-8 border border-church-gold/25 shadow-xl space-y-5">
            <div>
              <label htmlFor="name" className="block text-church-bronze text-xs font-semibold uppercase tracking-wide mb-1.5">Full Name *</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-church-gold/25 bg-white/70 text-church-green placeholder-church-bronze/40 focus:outline-none focus:border-church-green focus:ring-1 focus:ring-church-green transition-all text-sm"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-church-bronze text-xs font-semibold uppercase tracking-wide mb-1.5">Email Address *</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-church-gold/25 bg-white/70 text-church-green placeholder-church-bronze/40 focus:outline-none focus:border-church-green focus:ring-1 focus:ring-church-green transition-all text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-church-bronze text-xs font-semibold uppercase tracking-wide mb-1.5">WhatsApp Number / Phone</label>
              <input
                id="whatsapp" name="whatsapp" type="tel"
                value={form.whatsapp} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-church-gold/25 bg-white/70 text-church-green placeholder-church-bronze/40 focus:outline-none focus:border-church-green focus:ring-1 focus:ring-church-green transition-all text-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-church-bronze text-xs font-semibold uppercase tracking-wide mb-1.5">I am interested in</label>
              <select
                id="interest" name="interest"
                value={form.interest} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-church-gold/25 bg-white/70 text-church-green focus:outline-none focus:border-church-green focus:ring-1 focus:ring-church-green transition-all text-sm"
              >
                <option value="">General Contact</option>
                <option>Plan My Visit</option>
                <option>Prayer Request</option>
                <option>Ministry Information</option>
                <option>Giving / Donations</option>
                <option>Volunteering</option>
                <option>Bible Study / Discipleship</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-church-bronze text-xs font-semibold uppercase tracking-wide mb-1.5">Message *</label>
              <textarea
                id="message" name="message" required rows={5}
                value={form.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-church-gold/25 bg-white/70 text-church-green placeholder-church-bronze/40 focus:outline-none focus:border-church-green focus:ring-1 focus:ring-church-green transition-all text-sm resize-none"
                placeholder="How can we help you today?"
              />
            </div>

            <button
              type="submit"
              className="btn-primary-church w-full py-4 rounded-xl font-bold text-base"
            >
              Send Message →
            </button>

            <p className="text-church-bronze/50 text-xs text-center">
              We typically respond within 24 hours. For urgent matters, please call +91 98450 09824.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}