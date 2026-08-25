'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Community' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.family}
              alt="Community background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              LIFE TOGETHER
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Church Community
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              We were not meant to walk through faith alone. Discover authentic community through
              Small Groups, testimonies, and fellowship.
            </p>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center space-y-4 hover:border-gold/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-heading-md text-foreground">
                Small Groups
              </h3>
              <p className="text-body-sm text-muted-foreground">
                Find a local group meeting near you for Bible study, prayer, and fellowship.
              </p>
              <Link href="/community/groups">
                <Button variant="gold" size="sm" className="w-full">
                  FIND A GROUP →
                </Button>
              </Link>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center space-y-4 hover:border-gold/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-heading-md text-foreground">
                Testimonies
              </h3>
              <p className="text-body-sm text-muted-foreground">
                Read encouraging stories of lives healed, restored, and transformed by God&apos;s
                grace.
              </p>
              <Link href="/community/testimonies">
                <Button variant="gold" size="sm" className="w-full">
                  READ TESTIMONIES →
                </Button>
              </Link>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm text-center space-y-4 hover:border-gold/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-heading-md text-foreground">
                Need Prayer?
              </h3>
              <p className="text-body-sm text-muted-foreground">
                Share your prayer requests with our dedicated intercessory prayer team.
              </p>
              <Link href="/prayer">
                <Button variant="gold" size="sm" className="w-full">
                  SUBMIT PRAYER REQUEST →
                </Button>
              </Link>
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
