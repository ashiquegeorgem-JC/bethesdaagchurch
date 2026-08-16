'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-ivory p-6 text-center">
      <div className="max-w-md space-y-6">
        <svg className="w-16 h-16 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <h1 className="font-display font-bold text-display-sm text-ivory">Something Went Wrong</h1>
        <p className="text-body text-ivory/70 leading-relaxed font-light">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button variant="gold" size="lg" onClick={() => reset()}>
            TRY AGAIN
          </Button>
          <Link href="/">
            <Button variant="outline-light" size="lg">
              RETURN HOME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
