'use client';
import React, { use, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SERMONS, CHURCH_INFO } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function SingleSermonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { addToast } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);

  const sermon = SERMONS.find((s) => s.slug === resolvedParams.slug) || SERMONS[0];
  const related = SERMONS.filter((s) => s.id !== sermon.id).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast({
      type: 'success',
      title: 'Link Copied!',
      message: 'Sermon link copied to your clipboard.',
    });
  };

  const handleDownloadNotes = () => {
    addToast({
      type: 'info',
      title: 'Downloading Notes',
      message: `Downloading sermon notes for "${sermon.title}".`,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Messages', href: '/messages' }, { label: sermon.title }]} />
        </div>

        {/* Video Player Section with YouTube Integration */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-charcoal border border-sand shadow-card flex items-center justify-center group">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${sermon.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <AppImage src={sermon.image} alt={sermon.title} fill className="object-cover opacity-70" />
                <div className="absolute inset-0 bg-charcoal/30" />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 p-6 rounded-full bg-gold text-white dark:text-charcoal hover:scale-110 transition-transform shadow-card flex items-center justify-center"
                  aria-label="Play sermon video on YouTube"
                >
                  <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-ivory bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> YouTube HD Stream • {sermon.duration}
                </span>
              </>
            )}
          </div>
        </section>

        {/* Details & Info */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-card border border-sand p-8 sm:p-10 rounded-3xl shadow-card space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <Badge variant="gold">{sermon.series}</Badge>
                <h1 className="font-display font-bold text-display-sm sm:text-display-md text-charcoal dark:text-ivory">{sermon.title}</h1>
                <p className="text-body-sm text-gold font-semibold">{sermon.speaker} • {sermon.date} • {sermon.bibleRef}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5">
                <a href={CHURCH_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="gold" size="sm" className="bg-[#FF0000] hover:bg-[#cc0000] text-white border-none">
                    <svg className="w-4 h-4 inline-block mr-1.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Subscribe on YouTube
                  </Button>
                </a>
                <Button variant="outline" size="sm" onClick={handleDownloadNotes}>
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Download Notes
                </Button>
                <Button variant="ghost" size="sm" onClick={handleCopyLink}>
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> Copy Link
                </Button>
              </div>
            </div>

            <hr className="border-sand" />

            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal dark:text-ivory mb-2">Description</h3>
              <p className="text-body text-muted-text dark:text-ivory/80 leading-relaxed">{sermon.description}</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal dark:text-ivory mb-2">Sermon Notes</h3>
              <div className="bg-input p-5 rounded-2xl text-body-sm text-charcoal dark:text-ivory whitespace-pre-line border border-sand">
                {sermon.notes}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal dark:text-ivory mb-2">Transcript Preview</h3>
              <p className="text-body-sm text-muted-text dark:text-ivory/80 italic bg-cream p-5 rounded-2xl border border-sand font-display text-lg">
                &ldquo;{sermon.transcript}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Related Messages */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="font-display font-bold text-3xl text-charcoal dark:text-ivory mb-6">Related Messages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <div key={rel.id} className="bg-card border border-sand p-5 rounded-2xl flex items-center gap-4 hover:border-gold/40 transition-colors shadow-card">
                <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <AppImage src={rel.image} alt={rel.title} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gold font-bold uppercase">{rel.series}</span>
                  <h4 className="font-display font-bold text-base text-charcoal dark:text-ivory line-clamp-1">{rel.title}</h4>
                  <Link href={`/messages/${rel.slug}`} className="text-xs text-gold font-semibold hover:underline">
                    Watch Message &rarr;
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
