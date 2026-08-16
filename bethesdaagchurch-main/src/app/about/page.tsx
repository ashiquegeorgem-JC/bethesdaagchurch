'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.church}
              alt="About background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">WHO WE ARE</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              About Bethesda AG Church
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Serving the city of Bengaluru through Spirit-filled worship, biblical discipleship, and passionate outreach.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-cream dark:bg-charcoal border-b border-sand/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold mb-2">OUR HEART & PURPOSE</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal dark:text-ivory">
                Our Mission & <span className="text-gold">Vision</span>
              </h2>
              <p className="text-muted-text dark:text-ivory/80 mt-4 max-w-xl mx-auto text-base">
                The foundational mandate guiding everything we do at Bethesda AG Church.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="bg-ivory dark:bg-charcoal/90 rounded-3xl p-8 sm:p-10 border border-sand shadow-card relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal dark:text-ivory">Our Mission</h3>
                  <p className="text-xs italic text-gold font-medium">Inspired by John 13:34 — &ldquo;A new command I give you: Love one another. As I have loved you, so you must love one another.&rdquo;</p>
                  <p className="text-base text-muted-text dark:text-ivory/80 leading-relaxed">
                    Our mission is to be a community defined by genuine, selfless love that reflects God&apos;s heart for humanity. We are dedicated to sharing the Gospel, serving with compassion, and bringing spiritual transformation to lives.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {['Loving Genuinely', 'Serving Selflessly', 'Reflecting Christ'].map((tag) => (
                    <span key={tag} className="px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold border border-gold/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="bg-ivory dark:bg-charcoal/90 rounded-3xl p-8 sm:p-10 border border-sand shadow-card relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center text-white dark:text-charcoal">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal dark:text-ivory">Our Vision</h3>
                  <p className="text-base text-muted-text dark:text-ivory/80 leading-relaxed">
                    To be a transformative community that raises up passionate disciples of Jesus. We aim to instill Kingdom values in every believer, empowering them to impact their homes, workplaces, and the city of Bengaluru for Christ.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {['Raising Disciples', 'Instilling Kingdom Values', 'Impacting Our World'].map((tag) => (
                    <span key={tag} className="px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold border border-gold/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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