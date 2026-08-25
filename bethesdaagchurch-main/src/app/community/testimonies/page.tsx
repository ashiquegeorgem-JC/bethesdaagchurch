'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IMAGES, TESTIMONIALS } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function TestimoniesPage() {
  const { openModal } = useApp();

  const handleReadMore = (test: (typeof TESTIMONIALS)[0]) => {
    openModal({
      title: `${test.name}'s Testimony`,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-border pb-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold/30">
              <AppImage src={test.image} alt={test.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground">{test.name}</h4>
              <Badge variant="gold" size="sm">
                {test.category}
              </Badge>
            </div>
          </div>
          <p className="text-body text-foreground italic leading-relaxed font-display text-lg">
            &ldquo;{test.testimony}&rdquo;
          </p>
          <span className="text-xs text-muted-foreground block pt-2">Shared on {test.date}</span>
        </div>
      ),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[{ label: 'Community', href: '/community' }, { label: 'Testimonies' }]}
          />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.community}
              alt="Testimonies background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              GOD AT WORK
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Stories of Transformation
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              &ldquo;They overcame him by the blood of the Lamb and by the word of their
              testimony.&rdquo; — Revelation 12:11
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-card border border-border p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div className="space-y-4">
                  <Badge variant="gold" size="sm">
                    {test.category}
                  </Badge>
                  <p className="text-body italic text-muted-foreground leading-relaxed line-clamp-4 font-display text-lg">
                    &ldquo;{test.testimony}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gold/30">
                      <AppImage src={test.image} alt={test.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm">
                        {test.name}
                      </h4>
                      <span className="text-[10px] text-muted-foreground">{test.date}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleReadMore(test)}
                    className="text-xs font-bold text-gold"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
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
