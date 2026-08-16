'use client';
import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function LiveStreamSection() {
  const { isLive } = useApp();

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
                  LIVE NOW
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory leading-tight">
                  Sunday Celebration Service
                </h3>
                <p className="text-base sm:text-lg text-muted-text dark:text-ivory/80 leading-relaxed">
                  We are currently broadcasting live! Tune in now to participate in Spirit-filled worship and foundational biblical teaching.
                </p>
                <div className="pt-2">
                  <Link href="/watch/live">
                    <Button variant="gold" size="lg">
                      OPEN LIVE STREAMING ROOM
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal border border-sand flex items-center justify-center group shadow-xl">
                <svg className="w-16 h-16 text-ivory group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                <span className="absolute bottom-4 left-4 text-xs font-bold bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> LIVE STREAM • Sunday Service
                </span>
              </div>
            </div>
          ) : (
            /* Scheduled Broadcast State */
            <div className="text-center max-w-2xl mx-auto space-y-6 py-6">
              <span className="text-overline font-semibold text-gold uppercase tracking-[0.2em]">NEXT BROADCAST</span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal dark:text-ivory">Sunday Morning Worship</h3>
              <p className="text-base sm:text-lg text-muted-text dark:text-ivory/80 leading-relaxed">
                Join our live worship broadcast this <strong>Sunday at 9:00 AM IST</strong>.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/watch/live">
                  <Button variant="gold" size="lg">
                    GO TO LIVE STREAM ROOM
                  </Button>
                </Link>
                <a href="https://www.youtube.com/@Bethesda_AG" target="_blank" rel="noopener noreferrer">
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
