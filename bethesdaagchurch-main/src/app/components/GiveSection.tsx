'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function GiveSection() {
  return (
    <section className="py-24 md:py-32 bg-cream dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <SectionHeader
          eyebrow="GENEROSITY"
          title="Partnering in God's Work Through Giving"
          description="Your financial support enables Bethesda AG Church to reach our community, support global missions, equip the next generation, and minister to families in need."
        />
        <div className="pt-2 flex justify-center gap-4">
          <Link href="/give">
            <Button variant="gold" size="lg">
              GIVE ONLINE NOW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
