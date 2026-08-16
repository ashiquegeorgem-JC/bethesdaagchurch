'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  variant?: 'default' | 'cinematic' | 'glass' | 'outline';
}

export function Card({ className, hoverEffect = false, variant = 'default', children, ...props }: CardProps) {
  const variantClasses = {
    default: 'bg-card text-card-foreground border border-border shadow-sm',
    cinematic: 'bg-navy text-ivory border border-navy-light/40 shadow-xl',
    glass: 'bg-white/80 dark:bg-navy/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg',
    outline: 'bg-transparent border border-border text-foreground',
  };

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300',
        variantClasses[variant],
        hoverEffect && 'hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pb-3', className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-display font-bold text-heading-md text-foreground', className)} {...props}>{children}</h3>;
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-body-sm text-muted-foreground mt-1', className)} {...props}>{children}</p>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', className)} {...props}>{children}</div>;
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0 flex items-center justify-between', className)} {...props}>{children}</div>;
}
