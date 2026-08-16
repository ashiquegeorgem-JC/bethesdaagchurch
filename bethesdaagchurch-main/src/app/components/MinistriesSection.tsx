'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { MINISTRIES } from '@/lib/mock-data';

export default function MinistriesSection() {
  return (
    <section className="py-24 md:py-32 bg-soft-sage dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR MINISTRIES"
          title="A Place for Everyone in the Family"
          description="Discover ministries designed to nurture faith, foster community, and empower service across all ages."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {MINISTRIES.slice(0, 6).map((ministry, idx) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card border border-sand rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <AppImage src={ministry.image} alt={ministry.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-display font-bold text-2xl text-charcoal dark:text-ivory group-hover:text-gold transition-colors">{ministry.name}</h3>
                <p className="text-sm text-muted-text dark:text-ivory/80 leading-relaxed line-clamp-2">{ministry.shortDesc}</p>
              </div>
              <div className="p-6 sm:p-8 pt-0">
                <Link href={`/ministries/${ministry.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More &rarr;
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/ministries">
            <Button variant="gold" size="lg">
              EXPLORE ALL MINISTRIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}