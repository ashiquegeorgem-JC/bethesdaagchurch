'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost' | 'danger' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary:
        'bg-navy text-ivory hover:bg-navy-light dark:bg-gold dark:text-navy-deep dark:hover:bg-gold-warm shadow-sm',
      secondary: 'bg-gold text-navy-deep hover:bg-gold-warm shadow-sm',
      gold: 'bg-gold text-navy-deep hover:bg-gold-dark shadow-sm hover:shadow-glow-gold',
      outline: 'border-2 border-gold text-gold bg-transparent hover:bg-gold/10',
      'outline-light': 'border-2 border-ivory/30 text-ivory bg-transparent hover:bg-ivory/10',
      ghost: 'text-foreground hover:bg-muted',
      danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    };

    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 rounded-lg font-medium',
      md: 'text-sm px-5 py-2.5 rounded-xl font-semibold',
      lg: 'text-base px-7 py-3.5 rounded-xl font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
