'use client';
import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function LiveStreamSection() {
  const { isLive, liveVideo } = useApp();

  const embedSrc =
    liveVideo?.embedUrl || 'https://www.youtube.com/embed/live_stream?channel=@Bethesda_AG';

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="LIVE WORSHIP"
          title="Experience Bethesda Live"
          description="Broadcast live from our sanctuary in Rajajinagar, Bengaluru. Join our global church family every Sunday."
        />

        <div className="bg-ivory dark:bg-charcoal border border-sand rounded-3xl p-8 sm:p-12 shadow-card">
          {isLive ? (
            /* Live Active State */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  LIVE NOW ON YOUTUBE
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory leading-tight">
                  {liveVideo?.title || 'Sunday Worship Celebration'}
                </h3>
                <p className="text-base sm:text-lg text-muted-text dark:text-ivory/80 leading-relaxed">
                  We are currently broadcasting live on YouTube! Tune in below or open the live
                  streaming room for live chat &amp; prayer requests.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link href="/watch/live">
                    <Button variant="gold" size="lg">
                      OPEN LIVE STREAM ROOM
                    </Button>
                  </Link>
                  <a
                    href={liveVideo?.url || 'https://www.youtube.com/@Bethesda_AG/live'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      WATCH ON YOUTUBE →
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal border border-sand shadow-xl">
                <iframe
                  src={embedSrc}
                  title={liveVideo?.title || 'Bethesda AG Live Stream'}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            /* Scheduled Broadcast State */
            <div className="text-center max-w-2xl mx-auto space-y-6 py-6">
              <span className="text-overline font-semibold text-gold uppercase tracking-[0.2em]">
                NEXT BROADCAST
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory">
                Sunday Morning Worship
              </h3>
              <p className="text-base sm:text-lg text-muted-text dark:text-ivory/80 leading-relaxed">
                Join our live worship broadcast this <strong>Sunday at 9:00 AM IST</strong>.
                Whenever a service goes live or a video is posted, it appears here automatically.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/watch/live">
                  <Button variant="gold" size="lg">
                    GO TO LIVE STREAM ROOM
                  </Button>
                </Link>
                <a
                  href="https://www.youtube.com/@Bethesda_AG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    YOUTUBE CHANNEL @BETHESDA_AG
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
