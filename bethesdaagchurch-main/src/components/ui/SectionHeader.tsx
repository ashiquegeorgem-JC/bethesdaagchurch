'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-gold/60" />
          <span className="text-overline font-semibold tracking-[0.2em] uppercase text-gold">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-gold/60" />
        </div>
      )}
      <h2
        className={cn(
          'font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight',
          dark ? 'text-ivory' : 'text-charcoal dark:text-ivory'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-ivory/80' : 'text-muted-text dark:text-ivory/80'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
