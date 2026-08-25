'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

export default function GivePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Give' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.hands}
              alt="Giving background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              KINGDOM GIVING
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Inspiring The World Through Generosity
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              &ldquo;Each of you should give what you have decided in your heart to give, not
              reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; — 2
              Corinthians 9:7
            </p>
          </div>
        </section>

        {/* Bank Details + QR Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="text-center mb-10">
            <span className="text-overline font-semibold uppercase tracking-[0.2em] text-gold">
              GIVE ONLINE
            </span>
            <h2 className="font-display font-bold text-display-sm text-foreground mt-2">
              Bank Transfer Details
            </h2>
            <p className="text-body text-muted-foreground mt-2 max-w-xl mx-auto">
              Use the bank details or scan the QR code below to make your offering directly and
              securely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left — Bank Account Details */}
            <div className="bg-card border border-border rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col justify-center space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6l9-4 9 4v2H3V6zm0 4h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10zm6 3h6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-heading-sm text-foreground">
                    Account Details
                  </p>
                  <p className="text-xs text-muted-foreground">Direct Bank Transfer</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    Account Name
                  </p>
                  <p className="font-display font-bold text-heading-md text-foreground">
                    BETHESDA A.G CHURCH
                  </p>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    Bank
                  </p>
                  <p className="font-semibold text-foreground text-sm leading-snug">
                    South Indian Bank
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Kammanahalli, Bengaluru, Karnataka, India
                  </p>
                </div>

                <div className="h-px bg-border" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                      Account Number
                    </p>
                    <p className="font-mono font-bold text-foreground text-sm tracking-widest bg-muted px-3 py-2 rounded-xl border border-border select-all">
                      101905300-000-0483
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                      IFSC Code
                    </p>
                    <p className="font-mono font-bold text-foreground text-sm tracking-widest bg-muted px-3 py-2 rounded-xl border border-border select-all">
                      SIBL0001019
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="pt-2 flex items-start gap-2 text-xs text-muted-foreground bg-gold/5 border border-gold/20 rounded-2xl px-4 py-3">
                <svg
                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z"
                  />
                </svg>
                <span>
                  Please use your name as the payment reference so we can acknowledge your gift. God
                  bless you!
                </span>
              </div>
            </div>

            {/* Right — QR Code */}
            <div className="bg-card border border-border rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col items-center justify-center space-y-6">
              <div className="text-center space-y-1">
                <p className="font-display font-bold text-heading-md text-foreground">
                  Scan &amp; Pay
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  Scan with any UPI app (GPay, PhonePe, Paytm, BHIM)
                </p>
              </div>

              {/* QR Image Container with quiet-zone margin */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-2 border-gold/40 shadow-xl bg-white p-6 flex items-center justify-center">
                <img
                  src="/assets/images/qr-code.png"
                  alt="Bethesda AG Church UPI QR Code"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* BHIM UPI Branding */}
              <div className="flex items-center gap-6 pt-1">
                <div className="text-center">
                  <div className="h-7 flex items-center justify-center">
                    <span
                      className="font-black text-base sm:text-lg tracking-tight"
                      style={{ color: '#00529a' }}
                    >
                      BHIM
                    </span>
                    <span className="text-[#f47920] font-black text-base sm:text-lg ml-0.5">▶</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                    Bharat Interface for Money
                  </p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="h-7 flex items-center justify-center">
                    <span
                      className="font-black text-base sm:text-lg tracking-tight"
                      style={{ color: '#00529a' }}
                    >
                      UPI
                    </span>
                    <span className="text-[#f47920] font-black text-base sm:text-lg ml-0.5">▶</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                    Unified Payments Interface
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-center">
                <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                  Open any UPI app, tap <strong className="text-foreground">Scan QR</strong>, and
                  point your phone at the code above to give instantly.
                </p>
                <a
                  href="/assets/images/qr-code.png"
                  target="_blank"
                  download="Bethesda_AG_Church_QR.png"
                  className="inline-flex items-center gap-1.5 text-xs text-gold font-bold hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download / View High-Res QR
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Give */}
        <section className="section bg-ivory dark:bg-navy-deep">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Why We Give"
              description="Your giving directly powers ministry, outreach, and transformation."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center space-y-2">
                <svg
                  className="w-8 h-8 text-gold mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Local Ministry
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  Supporting Sunday services, children &amp; youth programs, and church facilities.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center space-y-2">
                <svg
                  className="w-8 h-8 text-gold mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Global Missions
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  Partnering with missionaries and planting churches across India and abroad.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center space-y-2">
                <svg
                  className="w-8 h-8 text-gold mx-auto"
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
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Community Relief
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  Providing food, medical support, and emergency relief to families in need.
                </p>
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
