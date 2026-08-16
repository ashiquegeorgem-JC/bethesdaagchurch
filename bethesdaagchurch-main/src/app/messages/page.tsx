'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

import AppImage from '@/components/ui/AppImage';
import { IMAGES } from '@/lib/mock-data';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

function VideoCard({ video, featured = false }: { video: YouTubeVideo; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-card border border-sand rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col ${featured ? 'lg:flex-row gap-0' : ''}`}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative ${featured ? 'lg:w-1/2' : ''} aspect-video group`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors flex items-center justify-center">
          <div className={`p-3 rounded-full bg-gold text-white transition-transform duration-200 ${hovered ? 'scale-110' : 'scale-100'} shadow-lg`}>
            <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {featured && (
          <Badge variant="gold" className="absolute top-4 left-4 font-bold">LATEST</Badge>
        )}
      </a>

      <div className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${featured ? 'lg:p-10' : ''}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-[#FF0000] shrink-0" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-xs text-muted-text font-semibold uppercase tracking-wider">
              Bethesda AG Church
            </span>
          </div>
          <h3 className={`font-display font-bold text-charcoal dark:text-ivory leading-tight ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {video.title}
          </h3>
          {video.publishedAt && (
            <p className="text-xs text-muted-text">{formatDate(video.publishedAt)}</p>
          )}
        </div>
        <div className="mt-6">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <Button variant={featured ? 'gold' : 'outline'} size="sm" className="w-full">
              Watch on YouTube →
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SkeletonCard({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`bg-card border border-sand rounded-3xl overflow-hidden animate-pulse flex flex-col ${featured ? 'lg:flex-row' : ''}`}>
      <div className={`${featured ? 'lg:w-1/2' : ''} aspect-video bg-sand/40`} />
      <div className="p-6 sm:p-8 flex-1 space-y-3">
        <div className="h-3 bg-sand/40 rounded w-32" />
        <div className="h-6 bg-sand/40 rounded w-full" />
        <div className="h-6 bg-sand/40 rounded w-3/4" />
        <div className="h-3 bg-sand/40 rounded w-24 mt-2" />
        <div className="h-9 bg-sand/40 rounded w-full mt-4" />
      </div>
    </div>
  );
}

export default function MessagesPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    fetch('/api/youtube')
      .then((r) => r.json())
      .then((data) => {
        setVideos(data.videos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Messages' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.worship1}
              alt="Sermons background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">MEDIA LIBRARY</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Sermons &amp; Messages
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed mb-6">
              All messages are streamed live and uploaded directly from our official YouTube channel — <span className="text-gold font-semibold">@Bethesda_AG</span>.
            </p>
            <a href="https://www.youtube.com/@Bethesda_AG" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="sm" className="shadow-lg">
                <svg className="w-4 h-4 fill-current mr-1.5 inline-block" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                SUBSCRIBE ON YOUTUBE
              </Button>
            </a>
          </div>
        </section>

        {/* Search & Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search messages by title..."
                  className="w-full pl-10 pr-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${viewMode === 'grid' ? 'bg-gold text-white border-gold' : 'bg-card text-foreground border-border hover:border-gold/40'}`}
                >
                  ▦ Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${viewMode === 'list' ? 'bg-gold text-white border-gold' : 'bg-card text-foreground border-border hover:border-gold/40'}`}
                >
                  ☰ List
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="space-y-8">
              <SkeletonCard featured />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <p className="text-muted-foreground mb-4">No messages found{search ? ` for "${search}"` : ''}.</p>
              {search && (
                <Button variant="ghost" onClick={() => setSearch('')} className="mt-2">
                  Clear Search
                </Button>
              )}
              <div className="mt-6">
                <a href="https://www.youtube.com/@Bethesda_AG/videos" target="_blank" rel="noopener noreferrer">
                  <Button variant="gold">Browse All on YouTube →</Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured / Latest */}
              {featured && <VideoCard video={featured} featured />}

              {/* Rest of videos */}
              {rest.length > 0 && (
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {rest.map((video) => (
                      <div key={video.id} className="bg-card border border-border p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-5 hover:border-gold/40 transition-colors">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full sm:w-48 aspect-video rounded-xl overflow-hidden shrink-0 group"
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </a>
                        <div className="flex-1 min-w-0 space-y-1">
                          <p className="text-xs text-gold font-semibold">Bethesda AG Church</p>
                          <h3 className="font-display font-bold text-lg text-foreground truncate">{video.title}</h3>
                          {video.publishedAt && (
                            <p className="text-xs text-muted-foreground">{formatDate(video.publishedAt)}</p>
                          )}
                        </div>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <Button variant="gold" size="sm">WATCH</Button>
                        </a>
                      </div>
                    ))}
                  </div>
                )
              )}

              {/* View all on YouTube */}
              <div className="text-center pt-8">
                <a href="https://www.youtube.com/@Bethesda_AG/videos" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <svg className="w-5 h-5 fill-[#FF0000] mr-2 inline-block" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    VIEW ALL MESSAGES ON YOUTUBE
                  </Button>
                </a>
              </div>
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
