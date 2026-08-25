'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DEVOTIONALS } from '@/lib/mock-data';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

export default function DevotionalsPage() {
  const [index, setIndex] = useState(0);

  const current = DEVOTIONALS[index];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[{ label: 'Resources', href: '/resources' }, { label: 'Daily Devotionals' }]}
          />
        </div>

        {/* Calm Reading Container */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">
                {current.date} • DAILY DEVOTIONAL
              </span>
              <h1 className="font-display font-bold text-display-md text-foreground">
                {current.title}
              </h1>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-2xl">
              <p className="font-display italic text-lg sm:text-xl text-foreground leading-relaxed">
                &ldquo;{current.scripture}&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-body text-foreground leading-relaxed">
              <h3 className="font-display font-bold text-heading-md text-gold">Reflection</h3>
              <p>{current.reflection}</p>
            </div>

            <div className="bg-muted p-6 rounded-2xl space-y-2 border border-border">
              <h3 className="font-display font-bold text-heading-md text-foreground">
                Today&apos;s Prayer
              </h3>
              <p className="text-body-sm italic text-muted-foreground">{current.prayer}</p>
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center justify-between border-t border-border pt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
                disabled={index === 0}
              >
                ← Previous Devotional
              </Button>
              <span className="text-xs font-bold text-muted-foreground">
                {index + 1} of {DEVOTIONALS.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIndex((prev) => Math.min(DEVOTIONALS.length - 1, prev + 1))}
                disabled={index === DEVOTIONALS.length - 1}
              >
                Next Devotional →
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SearchOverlay />
      <ToastContainer />
      <Modal />
      <AIChat />
    </>
  );
}
