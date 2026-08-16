'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';
import { VISIT_CARDS, SERVICE_TIMES, CHURCH_INFO } from '@/lib/mock-data';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function VisitPage() {
  const { addToast } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Visit Planned!',
      message: 'Thank you! Our hospitality team looks forward to welcoming you this Sunday.',
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Plan Your Visit' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.church}
              alt="Visit background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">WELCOME TO BETHESDA</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-6 leading-tight">
              Plan Your Visit
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              We know visiting a church for the first time can be intimidating. We want to make your first experience at Bethesda AG Church smooth, comfortable, and meaningful.
            </p>
          </div>
        </section>

        {/* Information Grid */}
        <section className="py-16 md:py-24 bg-ivory dark:bg-navy-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="What You Can Expect" description="Everything you need to plan your first visit with confidence." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VISIT_CARDS.map((card) => (
                <div key={card.title} className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center"><svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></div>
                  <h3 className="font-display font-bold text-heading-md text-foreground">{card.title}</h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Schedule Table */}
        <section className="py-16 md:py-24 bg-white dark:bg-navy-deep border-t border-sand/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Service Times & Languages" description="We offer multilingual worship services every week across 4 distinct Sunday gathering slots." />
            <div className="mt-8 bg-card border border-sand p-2 sm:p-6 rounded-3xl shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-navy text-ivory border-b border-gold/30 text-xs uppercase tracking-wider">
                      <th className="p-4 sm:p-5 rounded-l-xl">Day</th>
                      <th className="p-4 sm:p-5">Time</th>
                      <th className="p-4 sm:p-5">Service</th>
                      <th className="p-4 sm:p-5 rounded-r-xl">Language</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand/50 text-body-sm text-foreground">
                    {SERVICE_TIMES.map((svc, i) => (
                      <tr key={i} className="hover:bg-sand/20 transition-colors">
                        <td className="p-4 sm:p-5 font-semibold">{svc.day}</td>
                        <td className="p-4 sm:p-5 text-gold font-bold text-base">{svc.time}</td>
                        <td className="p-4 sm:p-5 font-medium">{svc.name}</td>
                        <td className="p-4 sm:p-5 text-muted-text font-medium">{svc.language}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
