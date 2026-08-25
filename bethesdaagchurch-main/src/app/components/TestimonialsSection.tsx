'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/mock-data';

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STORIES OF TRANSFORMATION"
          title="Lives Changed by God's Grace"
          description="Hear from members of our congregation about how encountering Christ at Bethesda transformed their lives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.slice(0, 2).map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-sand p-8 sm:p-10 rounded-3xl shadow-card flex flex-col justify-between"
            >
              <p className="text-lg italic text-charcoal dark:text-ivory leading-relaxed mb-6 font-display">
                &ldquo;{test.testimony}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-sand pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold/40 shadow-sm">
                  <AppImage src={test.image} alt={test.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-charcoal dark:text-ivory text-base">
                    {test.name}
                  </h4>
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                    {test.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/community/testimonies">
            <Button variant="gold" size="lg">
              READ MORE TESTIMONIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
