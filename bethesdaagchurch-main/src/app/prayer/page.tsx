'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import AppImage from '@/components/ui/AppImage';
import { CHURCH_INFO, IMAGES } from '@/lib/mock-data';

export default function PrayerPage() {
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestText, setRequestText] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = anonymous
      ? `Hello Bethesda Prayer Team, please pray for this request: "${requestText || 'I need prayer and guidance.'}"`
      : `Hello Bethesda Prayer Team, my name is ${name || 'a visitor'} and I request prayer for: "${requestText || 'I need prayer and guidance.'}"`;

    const url = `https://wa.me/${CHURCH_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Prayer Requests' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.prayer}
              alt="Prayer background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">NEED PRAYER?</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              You Don&apos;t Have to Walk Alone
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Whatever you are going through, our pastoral staff and intercessory prayer team are ready to stand with you in prayer.
            </p>
          </div>
        </section>

        {/* Form Container */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="bg-card border border-sand p-8 sm:p-10 rounded-3xl shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-3xl mx-auto">✓</div>
                <h2 className="font-display font-bold text-heading-xl text-charcoal dark:text-ivory">Your Prayer Request Has Been Received</h2>
                <p className="text-body text-muted-text dark:text-ivory/80 max-w-md mx-auto leading-relaxed">
                  Thank you for allowing us to pray with you. Our prayer team will cover your request in prayer. God bless you!
                </p>
                <Button variant="gold" onClick={() => setSubmitted(false)} className="mt-4">
                  SUBMIT ANOTHER REQUEST
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display font-bold text-2xl text-charcoal dark:text-ivory">Submit Your Request</h2>
                <p className="text-body-sm text-muted-text dark:text-ivory/80">All prayer requests are handled with complete confidentiality.</p>

                {!anonymous && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal dark:text-ivory mb-1">Your Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Thomas"
                        className="w-full px-4 py-3 bg-input border border-sand rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-semibold text-charcoal dark:text-ivory mb-1">Prayer Request Details</label>
                  <textarea
                    required
                    rows={5}
                    value={requestText}
                    onChange={(e) => setRequestText(e.target.value)}
                    placeholder="Please pray for healing, guidance, family..."
                    className="w-full px-4 py-3 bg-input border border-sand rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="anon"
                    checked={anonymous}
                    onChange={(e) => setAnonymous(e.target.checked)}
                    className="w-4 h-4 text-gold rounded border-sand focus:ring-gold"
                  />
                  <label htmlFor="anon" className="text-body-sm text-charcoal dark:text-ivory font-medium cursor-pointer">
                    Keep my request anonymous
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg uppercase tracking-wider"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.229-1.157z" />
                    </svg>
                    SEND PRAYER REQUEST VIA WHATSAPP
                  </button>
                </div>
              </form>
            )}
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
