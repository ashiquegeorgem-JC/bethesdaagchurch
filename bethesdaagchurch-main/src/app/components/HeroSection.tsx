'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/mock-data';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-ivory text-charcoal py-20">
      {/* Sunlit Worship Background Image with Light Peaceful Overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src={IMAGES.hero}
          alt="Bethesda AG Church Sunlit Worship"
          fill
          priority
          className="object-cover object-center opacity-30 animate-hero-zoom"
        />
        {/* Warm Peaceful Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/60 to-ivory/95 dark:from-charcoal/80 dark:via-charcoal/60 dark:to-charcoal/95" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-gold" />
          <span className="text-overline font-semibold tracking-[0.25em] uppercase text-gold">
            BETHESDA AG CHURCH
          </span>
          <span className="w-8 h-px bg-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-display-md sm:text-display-lg lg:text-display-xl leading-[1.08] tracking-tight mb-6 text-charcoal dark:text-ivory"
        >
          A place to belong.
          <br />
          A place to grow.
          <br />
          <span className="text-gradient-gold">A place to encounter God.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg sm:text-heading-md text-muted-text dark:text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          A community of faith in Bengaluru, growing together through worship, the Word, prayer, and
          fellowship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/visit">
            <Button variant="gold" size="lg" className="shadow-card">
              PLAN YOUR VISIT
            </Button>
          </Link>
          <a href="https://www.youtube.com/@Bethesda_AG" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <svg className="w-5 h-5 fill-[#FF0000] mr-1.5" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              WATCH ON YOUTUBE
            </Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-text font-medium">
            Scroll to explore
          </span>
          <div className="w-5 h-9 border border-gold/40 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
