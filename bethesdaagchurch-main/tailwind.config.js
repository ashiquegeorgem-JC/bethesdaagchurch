/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        // Bethesda Light & Peaceful Color System
        ivory: {
          DEFAULT: '#FCFAF5',
          dark: '#F5F1E8',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E9DFC9',
        },
        sand: {
          DEFAULT: '#E9DFC9',
        },
        charcoal: {
          DEFAULT: '#263238',
          light: '#37474F',
        },
        'muted-text': '#667085',
        gold: {
          DEFAULT: '#C6A15B',
          soft: '#E1C98A',
          dark: '#A38141',
        },
        sky: {
          DEFAULT: '#EEF5F7',
        },
        sage: {
          DEFAULT: '#EEF3EC',
        },
        // Navy colors (used in Header, Hero, badges)
        navy: {
          DEFAULT: '#1C3A5E',
          deep: '#1C252B',
        },
        // Church-themed color aliases (legacy support)
        'church-green': '#2D5016',
        'church-bronze': '#7B5E2A',
        'church-gold': '#C6A15B',
        'church-sand': '#F5EDD8',
        'church-ivory': '#FCFAF5',
        // Semantic assignments
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'display-sm': ['2.125rem', { lineHeight: '1.25' }],
        'heading-xl': ['1.75rem', { lineHeight: '1.3' }],
        'heading-lg': ['1.375rem', { lineHeight: '1.35' }],
        'heading-md': ['1.125rem', { lineHeight: '1.4' }],
        'heading-sm': ['0.9375rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'overline': ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.2em' }],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(38,50,56,0.04), 0 1px 2px rgba(38,50,56,0.02)',
        'card-hover': '0 12px 32px rgba(38,50,56,0.08), 0 4px 12px rgba(38,50,56,0.04)',
        'elevated': '0 16px 48px rgba(38,50,56,0.1)',
        'glow-gold': '0 0 24px rgba(198,161,91,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'hero-zoom': 'heroZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};