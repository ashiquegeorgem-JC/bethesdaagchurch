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

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

function formatDate(iso: string): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

import { useApp } from '@/context/AppContext';

export default function WatchPage() {
  const { isLive, videos: appVideos, videosLoading } = useApp();
  const videos = appVideos as YouTubeVideo[];
  const loading = videosLoading;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Watch' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.concert}
              alt="Watch background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            {isLive ? (
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                LIVE STREAM BROADCAST IS CURRENTLY ACTIVE
              </div>
            ) : (
              <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
                YOUTUBE CHANNEL
              </span>
            )}
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-2 mb-4 leading-tight">
              Watch Online
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed mb-6">
              Watch all our live services, Sunday messages, and special events on our official
              YouTube channel — <span className="text-gold font-semibold">@Bethesda_AG</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.youtube.com/@Bethesda_AG/live"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="lg">
                  <span
                    className={`w-2.5 h-2.5 rounded-full mr-2 inline-block ${isLive ? 'bg-red-600 animate-ping' : 'bg-gold-light'}`}
                  />
                  {isLive ? 'JOIN LIVE STREAM ON YOUTUBE' : 'OPEN YOUTUBE LIVE STREAM'}
                </Button>
              </a>
              <a
                href="https://www.youtube.com/@Bethesda_AG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <svg className="w-5 h-5 fill-white mr-2 inline-block" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  OPEN YOUTUBE CHANNEL
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* YouTube Videos Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-charcoal dark:text-ivory">
              Latest Messages
            </h2>
            <a
              href="https://www.youtube.com/@Bethesda_AG/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold hover:underline font-semibold"
            >
              View all on YouTube →
            </a>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-card border border-sand rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-video bg-sand/40" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-sand/40 rounded w-24" />
                    <div className="h-5 bg-sand/40 rounded w-full" />
                    <div className="h-5 bg-sand/40 rounded w-3/4" />
                    <div className="h-8 bg-sand/40 rounded w-full mt-3" />
                  </div>
                </div>
              ))}
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <p className="text-muted-foreground mb-4">
                Visit our YouTube channel for all messages.
              </p>
              <a
                href="https://www.youtube.com/@Bethesda_AG/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold">Browse on YouTube →</Button>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, idx) => (
                <div
                  key={video.id}
                  className="bg-card border border-sand rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video group"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
                      <div className="p-2.5 rounded-full bg-gold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {idx === 0 && (
                      <span className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        LATEST
                      </span>
                    )}
                  </a>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <p className="text-xs text-gold font-semibold mb-1">Bethesda AG Church</p>
                      <h3 className="font-display font-bold text-lg text-foreground leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                      {video.publishedAt && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(video.publishedAt)}
                        </p>
                      )}
                    </div>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        Watch on YouTube →
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
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
