'use client';
import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export function AnnouncementBar() {
  const { showAnnouncement, dismissAnnouncement } = useApp();

  if (!showAnnouncement) return null;

  return (
    <div className="bg-cream dark:bg-charcoal text-charcoal dark:text-ivory py-2.5 px-4 relative border-b border-sand/60 text-xs font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>Youth Conference 2026 — Registration Now Open!</span>
          <Link
            href="/events/youth-conference-2026"
            className="text-gold-dark dark:text-gold underline underline-offset-4 hover:text-gold transition-colors font-semibold ml-1"
          >
            Register Today →
          </Link>
        </div>
        <button
          onClick={dismissAnnouncement}
          className="text-muted-text hover:text-charcoal dark:hover:text-ivory p-1 transition-colors shrink-0 hidden sm:block"
          aria-label="Dismiss announcement"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
