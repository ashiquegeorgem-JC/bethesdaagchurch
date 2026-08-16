'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const PILLARS = [
  {
    title: 'WORSHIP',
    description: 'The presence of God.',
    detail: 'Spirit-led praise that draws us close to God\'s heart and restores our souls.',
    svg: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2c.58 0 1.124.11 1.6.305M21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2c.58 0 1.124.11 1.6.305M21 3v3L9 9" />
      </svg>
    ),
  },
  {
    title: 'THE WORD',
    description: 'Biblical teaching.',
    detail: 'Grounded, transformative Bible teaching that equips you for everyday life.',
    svg: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'COMMUNITY',
    description: 'Life together.',
    detail: 'Genuine relationships, small groups, and a warm family where you truly belong.',
    svg: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'PRAYER',
    description: 'Seeking God together.',
    detail: 'A house of prayer interceding for healing, breakthrough, and our city.',
    svg: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function WhatYoullFindSection() {
  return (
    <section className="py-24 md:py-32 bg-sage dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR FOUNDATION"
          title="What You'll Find at Bethesda"
          description="Four pillars that define our worship, ministry, and fellowship."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-sand p-8 rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center">
                  {item.svg}
                </div>
                <span className="text-overline font-semibold text-gold uppercase tracking-wider block">{item.title}</span>
                <h3 className="font-display font-bold text-heading-md text-charcoal dark:text-ivory leading-snug">{item.description}</h3>
                <p className="text-body-sm text-muted-text dark:text-ivory/80 leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
