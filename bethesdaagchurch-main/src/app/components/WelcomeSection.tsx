'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/mock-data';

export default function WelcomeSection() {
  return (
    <section className="section bg-cream dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-card aspect-[4/3] border border-sand"
          >
            <AppImage
              src={IMAGES.church}
              alt="Bethesda AG Church Building and Community"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-gold" />
              <span className="text-overline font-semibold uppercase tracking-[0.2em] text-gold">WELCOME HOME</span>
            </div>

            <h2 className="font-display font-bold text-display-sm sm:text-display-md text-charcoal dark:text-ivory leading-tight">
              Come as you are.<br />
              Find your people.<br />
              Grow in faith.
            </h2>

            <p className="text-body text-muted-text dark:text-ivory/80 leading-relaxed">
              Bethesda AG Church is a Spirit-filled community located in Rajajinagar, Bengaluru. For over four decades, our vision has been simple: to love God with all our heart, love people genuinely, and see lives transformed by the Gospel of Jesus Christ.
            </p>

            <p className="text-body text-muted-text dark:text-ivory/80 leading-relaxed">
              Whether you are searching for answers, looking for a church family, or seeking to grow deeper in your relationship with God — you belong here.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="gold">OUR STORY</Button>
              </Link>
              <Link href="/about#beliefs">
                <Button variant="outline">WHAT WE BELIEVE</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
