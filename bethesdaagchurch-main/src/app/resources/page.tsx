'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RESOURCES } from '@/lib/mock-data';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Resources' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.bible}
              alt="Resources background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              GROWTH &amp; STUDY
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Church Resources
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Equipping you for spiritual growth through daily devotionals, articles, study guides,
              and sermon archives.
            </p>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.map((r) => (
              <div
                key={r.title}
                className="bg-card border border-border p-8 rounded-3xl shadow-sm space-y-4 hover:border-gold/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-heading-md text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {r.description}
                  </p>
                </div>
                {r.href !== '#' ? (
                  <Link href={r.href}>
                    <Button variant="gold" size="sm" className="w-full">
                      EXPLORE {r.title.toUpperCase()} →
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    COMING SOON
                  </Button>
                )}
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
