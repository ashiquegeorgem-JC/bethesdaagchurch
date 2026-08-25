'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function LiveWatchPage() {
  const { isLive, liveVideo } = useApp();

  const embedUrl =
    liveVideo?.embedUrl || 'https://www.youtube.com/embed/live_stream?channel=@Bethesda_AG';
  const liveTitle = liveVideo?.title || 'Bethesda AG Church Service';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy text-ivory pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Watch', href: '/watch' }, { label: 'Live' }]} />
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    LIVE NOW
                  </span>
                ) : (
                  <span className="text-overline font-semibold uppercase text-gold tracking-widest">
                    OFFICIAL YOUTUBE LIVE STREAM
                  </span>
                )}
              </div>
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-ivory">
                {liveTitle}
              </h1>
            </div>
            <a
              href={liveVideo?.url || 'https://www.youtube.com/@Bethesda_AG/live'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              WATCH ON YOUTUBE @BETHESDA_AG
            </a>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-navy-deep border border-gold/40 shadow-2xl">
            <iframe
              src={embedUrl}
              title="Bethesda AG Church YouTube Live Stream"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="mt-8 bg-navy-deep border border-gold/20 p-6 rounded-2xl space-y-4">
            <h3 className="font-display font-bold text-heading-md text-gold">
              Live Stream Chat &amp; Prayer
            </h3>
            <p className="text-body-sm text-ivory/70">
              Need prayer during the live stream? Our pastoral team is ready to stand with you.
            </p>
            <a href="/prayer" className="inline-block">
              <Button variant="gold" size="sm">
                REQUEST PRAYER ONLINE
              </Button>
            </a>
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
