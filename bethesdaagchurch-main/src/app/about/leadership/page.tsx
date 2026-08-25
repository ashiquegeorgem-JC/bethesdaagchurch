'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IMAGES, LEADERS } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function LeadershipPage() {
  const { openModal } = useApp();

  const handleLeaderClick = (leader: (typeof LEADERS)[0]) => {
    openModal({
      title: leader.name,
      content: (
        <div className="space-y-4">
          <div className="relative aspect-square w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gold shadow-lg">
            <AppImage src={leader.image} alt={leader.name} fill className="object-cover" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold text-gold uppercase">{leader.role}</span>
          </div>
          <p className="text-body-sm text-foreground leading-relaxed pt-2 border-t border-border">
            {leader.bio}
          </p>
        </div>
      ),
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Leadership' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.church}
              alt="Leadership background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              PASTORAL & LEADERSHIP
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Our Leadership Team
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Meet the dedicated pastors, directors, and elders serving Bethesda AG Church with
              humility, love, and devotion.
            </p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                onClick={() => handleLeaderClick(leader)}
                className="group bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:border-gold/40 transition-all duration-300 cursor-pointer flex flex-col items-center text-center space-y-4"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-gold/30 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <AppImage src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-heading-md text-foreground group-hover:text-gold transition-colors">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {leader.role}
                  </span>
                </div>
                <p className="text-body-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {leader.bio}
                </p>
                <Button variant="ghost" size="sm" className="text-xs font-bold text-gold">
                  View Profile →
                </Button>
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
