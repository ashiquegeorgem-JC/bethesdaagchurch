'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'ivory' | 'outline' | 'success' | 'danger';
  size?: 'sm' | 'md';
}

export function Badge({ className, variant = 'gold', size = 'sm', children, ...props }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-gold/15 text-gold-dark dark:text-gold border border-gold/30',
    navy: 'bg-navy text-ivory dark:bg-navy-light',
    ivory: 'bg-ivory text-navy-deep border border-gold/20',
    outline: 'bg-transparent text-foreground border border-border',
    success: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30',
    danger: 'bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30',
  };

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider',
    md: 'text-xs px-3.5 py-1 rounded-full font-semibold uppercase tracking-wider',
  };

  return (
    <span className={cn('inline-flex items-center gap-1.5 transition-colors', variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </span>
  );
}
