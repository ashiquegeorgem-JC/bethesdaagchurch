'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-ivory p-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-display font-bold text-9xl text-gold/30 block">404</span>

        <h1 className="font-display font-bold text-display-sm text-ivory">Page Not Found</h1>

        <p className="text-body text-ivory/70 leading-relaxed font-light">
          This page seems to have wandered off. Let&apos;s get you back home to Bethesda AG Church.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              BACK HOME
            </Button>
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') window.history.back();
            }}
          >
            <Button variant="outline-light" size="lg" className="w-full sm:w-auto">
              GO BACK
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
