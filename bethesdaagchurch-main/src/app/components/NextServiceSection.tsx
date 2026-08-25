'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const sundayServices = [
  { time: '7:30 AM', languages: 'Kannada / Tamil' },
  { time: '9:30 AM', languages: 'Malayalam / Kannada' },
  { time: '11:30 AM', languages: 'English / Telugu' },
  { time: '6:30 PM', languages: 'Kannada / Hindi' },
];

export default function NextServiceSection() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-charcoal border-y border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            WORSHIP WITH US EVERY WEEK
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory">
            Sunday Services
          </h2>
          <p className="text-muted-text dark:text-ivory/80 text-base sm:text-lg">
            Join our vibrant multilingual services at Bethesda AG Church, Rajajinagar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sundayServices.map((service, idx) => (
            <motion.div
              key={service.time}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ivory dark:bg-charcoal/90 border border-sand p-6 rounded-2xl shadow-card hover:border-gold transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold font-bold flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-bold font-display text-charcoal dark:text-ivory block">
                    {service.time}
                  </span>
                  <span className="text-sm font-semibold text-gold tracking-wide mt-1 block">
                    {service.languages}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-sand/40 mt-4 text-xs text-muted-text dark:text-ivory/70 flex items-center justify-between">
                <span>Main Sanctuary</span>
                <span className="text-gold font-semibold">Rajajinagar</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/visit">
            <Button variant="gold" size="lg">
              PLAN YOUR VISIT THIS SUNDAY
            </Button>
          </Link>
          <a
            href="https://maps.google.com/?q=Bethesda+AG+Church+Rajajinagar+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              GET DIRECTIONS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
