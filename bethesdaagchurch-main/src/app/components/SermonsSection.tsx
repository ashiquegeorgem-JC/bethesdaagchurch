'use client';
import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useApp } from '@/context/AppContext';

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

export default function SermonsSection() {
  const { videos: appVideos, videosLoading, isLive } = useApp();
  const videos = appVideos as YouTubeVideo[];
  const loading = videosLoading;

  const featured = videos[0];
  const recent = videos.slice(1, 3);

  return (
    <section className="py-24 md:py-32 bg-warm-ivory dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="THE WORD"
          title="Latest Messages"
          description="Watch and be transformed by God's Word — all messages taken directly from our official YouTube channel."
        />

        {loading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-sand rounded-3xl overflow-hidden shadow-card p-6 sm:p-10 mb-12 animate-pulse">
            <div className="lg:col-span-7 aspect-video rounded-2xl bg-sand/40" />
            <div className="lg:col-span-5 space-y-4">
              <div className="h-4 bg-sand/40 rounded w-40" />
              <div className="h-8 bg-sand/40 rounded w-full" />
              <div className="h-8 bg-sand/40 rounded w-3/4" />
              <div className="h-4 bg-sand/40 rounded w-full" />
              <div className="h-4 bg-sand/40 rounded w-2/3" />
            </div>
          </div>
        ) : featured ? (
          <>
            {/* Featured / Latest Video */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-sand rounded-3xl overflow-hidden shadow-card p-6 sm:p-10 mb-12">
              <div className="lg:col-span-7">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video rounded-2xl overflow-hidden group"
                >
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://i.ytimg.com/vi/${featured.id}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center group-hover:bg-charcoal/10 transition-colors">
                    <div className="p-4 rounded-full bg-gold text-white hover:scale-110 transition-transform shadow-card">
                      <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <Badge variant="gold" className="absolute top-4 left-4 font-bold">
                    LATEST MESSAGE
                  </Badge>
                </a>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs text-muted-text font-semibold uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-4 h-4 fill-[#FF0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Bethesda AG Church • @Bethesda_AG
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory leading-tight">
                  {featured.title}
                </h3>
                <p className="text-xs text-muted-text dark:text-ivory/60">
                  {featured.publishedAt ? formatDate(featured.publishedAt) : ''}
                </p>
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a href={featured.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="gold" size="sm">
                      WATCH ON YOUTUBE →
                    </Button>
                  </a>
                  <a
                    href="https://www.youtube.com/@Bethesda_AG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#FF0000]/10 border-[#FF0000]/40 text-[#FF0000] hover:bg-[#FF0000] hover:text-white"
                    >
                      <svg className="w-4 h-4 inline-block mr-1 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      ALL YOUTUBE SERMONS
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Recent Videos Grid */}
            {recent.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {recent.map((video) => (
                  <div
                    key={video.id}
                    className="bg-card border border-sand rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
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
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/5 transition-colors flex items-center justify-center">
                        <div className="p-2.5 rounded-full bg-gold/90 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="p-6 sm:p-8 space-y-2 flex-1">
                      <span className="text-xs text-muted-text font-semibold uppercase">
                        {video.publishedAt ? formatDate(video.publishedAt) : ''}
                      </span>
                      <h4 className="font-display font-bold text-xl text-charcoal dark:text-ivory line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gold font-semibold">Bethesda AG Church</p>
                    </div>
                    <div className="p-6 sm:p-8 pt-0">
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full">
                          Watch on YouTube →
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* No videos fallback */
          <div className="text-center py-16 bg-card border border-sand rounded-3xl">
            <p className="text-muted-text mb-4">
              Visit our YouTube channel for all messages and sermons.
            </p>
            <a
              href="https://www.youtube.com/@Bethesda_AG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold">OPEN YOUTUBE CHANNEL →</Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
