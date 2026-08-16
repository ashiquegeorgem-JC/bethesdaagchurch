'use client';
import React, { useState } from 'react';
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
import { useApp } from '@/context/AppContext';
import { CHURCH_INFO, IMAGES } from '@/lib/mock-data';

export default function ContactPage() {
  const { addToast } = useApp();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for reaching out. Our church office will respond to you shortly.',
      });
    }, 600);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.church}
              alt="Contact background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">GET IN TOUCH</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Contact Bethesda AG Church
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you! Reach out with questions, prayer requests, or feedback.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-card border border-border p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="font-display font-bold text-heading-lg text-foreground">Church Information</h3>

                <div className="space-y-4 text-body-sm text-foreground">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <strong className="block font-semibold">Address</strong>
                      <p className="text-muted-foreground">{CHURCH_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <strong className="block font-semibold">Phone</strong>
                      <a href={`tel:${CHURCH_INFO.phone}`} className="text-gold font-semibold hover:underline">
                        {CHURCH_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.229-1.157z" />
                    </svg>
                    <div>
                      <strong className="block font-semibold">WhatsApp Chat</strong>
                      <a href={`https://wa.me/${CHURCH_INFO.whatsapp}?text=${encodeURIComponent("Hello Bethesda AG Church! I would like to get in touch.")}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
                        +91 97433 16337 (Chat Now)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <strong className="block font-semibold">Email</strong>
                      <a href={`mailto:${CHURCH_INFO.email}`} className="text-gold font-semibold hover:underline">
                        {CHURCH_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">⏰</span>
                    <div>
                      <strong className="block font-semibold">Office Hours</strong>
                      <p className="text-muted-foreground">{CHURCH_INFO.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-navy border border-gold/30 rounded-3xl p-6 text-center text-ivory space-y-3 shadow-xl">
                <svg className="w-10 h-10 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <h4 className="font-display font-bold text-heading-md">Church Location Map</h4>
                <p className="text-xs text-ivory/70">Rajajinagar, 4th Block, Bengaluru</p>
                <a href={CHURCH_INFO.mapUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="gold" size="sm" className="mt-2">
                    OPEN IN GOOGLE MAPS →
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-card border border-border p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
                <h3 className="font-display font-bold text-heading-lg text-foreground">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Full Name</label>
                      <input required type="text" placeholder="Your full name" className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Email Address</label>
                      <input required type="email" placeholder="your.email@example.com" className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Phone Number</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Message</label>
                    <textarea required rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>

                  <Button type="submit" variant="gold" size="lg" isLoading={loading} className="w-full py-4 text-base mt-2">
                    SEND MESSAGE
                  </Button>
                </form>
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