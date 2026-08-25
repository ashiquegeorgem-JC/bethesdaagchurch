'use client';
import React, { use, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { MINISTRIES } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function SingleMinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { addToast, openModal, closeModal } = useApp();

  const ministry = MINISTRIES.find((m) => m.slug === resolvedParams.slug) || MINISTRIES[0];

  const handleJoinClick = () => {
    openModal({
      title: `Join ${ministry.name}`,
      content: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
            addToast({
              type: 'success',
              title: 'Request Received!',
              message: `Thank you for your interest in joining ${ministry.name}. A ministry leader will connect with you soon!`,
            });
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Your Name</label>
            <input
              required
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Your Email</label>
            <input
              required
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">Phone Number</label>
            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <Button type="submit" variant="gold" className="w-full py-3">
            SUBMIT JOIN REQUEST
          </Button>
        </form>
      ),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[{ label: 'Ministries', href: '/ministries' }, { label: ministry.name }]}
          />
        </div>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <AppImage src={ministry.image} alt={ministry.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-navy/40" />
            <Badge variant="gold" className="absolute top-6 left-6 font-bold">
              {ministry.ageGroup || 'Ministry'}
            </Badge>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display font-bold text-display-md text-foreground">
                  {ministry.name}
                </h1>
                <p className="text-body-sm text-gold font-semibold mt-1 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>{' '}
                  {ministry.meetingTime}
                </p>
              </div>
              <Button variant="gold" size="lg" onClick={handleJoinClick}>
                JOIN THIS MINISTRY
              </Button>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-display font-bold text-heading-md text-foreground mb-2">
                Our Vision
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed italic bg-gold/10 p-4 rounded-2xl border border-gold/20 font-display text-lg">
                &ldquo;{ministry.vision}&rdquo;
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-heading-md text-foreground mb-2">
                About the Ministry
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {ministry.description}
              </p>
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
