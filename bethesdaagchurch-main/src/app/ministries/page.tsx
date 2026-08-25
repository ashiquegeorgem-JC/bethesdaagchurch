'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IMAGES, MINISTRIES } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

export default function MinistriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Ministries' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.community}
              alt="Ministries background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              DISCOVER YOUR PLACE
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Our Ministries
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              At Bethesda AG Church, there is a community for everyone. Explore our ministries and
              find where you can belong, grow, and serve.
            </p>
          </div>
        </section>

        {/* Ministries Image Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MINISTRIES.map((m) => (
              <div
                key={m.id}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <AppImage
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-heading-md text-foreground group-hover:text-gold transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {m.shortDesc}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <Link href={`/ministries/${m.slug}`}>
                    <Button variant="gold" size="sm" className="w-full">
                      EXPLORE MINISTRY
                    </Button>
                  </Link>
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
