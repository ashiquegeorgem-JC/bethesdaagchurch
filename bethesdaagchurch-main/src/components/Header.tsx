'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useApp } from '@/context/AppContext';
import { ThemeToggle } from './ThemeToggle';
import { MobileDrawer } from './MobileDrawer';
import { AnnouncementBar } from './AnnouncementBar';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { setSearchOpen, mobileMenuOpen, setMobileMenuOpen, isLive } = useApp();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/90 dark:bg-charcoal/95 backdrop-blur-xl shadow-card border-b border-sand py-3'
            : 'bg-ivory/80 dark:bg-charcoal/80 backdrop-blur-md border-b border-sand/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0 py-1">
            <AppImage
              src="/bethesda-logo-transparent.png"
              alt="Bethesda AG Church Logo"
              width={52}
              height={52}
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center items-start text-left select-none leading-none gap-0.5">
              <span className="font-display font-bold text-xl sm:text-2xl text-charcoal dark:text-ivory tracking-[0.08em] leading-none text-left">
                BETHESDA
              </span>
              <span className="text-[10px] sm:text-[11px] text-gold font-bold tracking-[0.22em] uppercase leading-none text-left">
                AG CHURCH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors"
            >
              Home
            </Link>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/about"
                className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors flex items-center gap-1 py-2"
              >
                About
                <svg
                  className="w-3.5 h-3.5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-card border border-sand rounded-xl shadow-xl p-2 space-y-1 z-50 animate-fade-in">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about/leadership"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Leadership Team
                  </Link>
                </div>
              )}
            </div>

            {/* Ministries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('ministries')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/ministries"
                className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors flex items-center gap-1 py-2"
              >
                Ministries
                <svg
                  className="w-3.5 h-3.5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'ministries' && (
                <div className="absolute top-full left-0 w-64 bg-card border border-sand rounded-xl shadow-xl p-2 space-y-0.5 z-50 animate-fade-in max-h-[80vh] overflow-y-auto">
                  <Link
                    href="/ministries"
                    className="block px-3 py-2 text-xs font-semibold text-gold hover:bg-muted rounded-lg"
                  >
                    All Ministries
                  </Link>
                  <Link
                    href="/ministries/childrens"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Children&apos;s Ministry
                  </Link>
                  <Link
                    href="/ministries/youth"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Youth Ministry
                  </Link>
                  <Link
                    href="/ministries/worship"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Worship Ministry
                  </Link>
                  <Link
                    href="/ministries/pastoral"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Pastoral Ministry
                  </Link>
                  <Link
                    href="/ministries/evangelism"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Evangelism Ministry
                  </Link>
                  <Link
                    href="/ministries/translation"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Translation Ministry
                  </Link>
                  <Link
                    href="/ministries/greeters"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Greeters Ministry
                  </Link>
                  <Link
                    href="/ministries/hospitality"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Hospitality Ministry
                  </Link>
                  <Link
                    href="/ministries/facilities"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Facilities &amp; Maintenance
                  </Link>
                  <Link
                    href="/ministries/media"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Media Ministry
                  </Link>
                  <Link
                    href="/ministries/prayer-ministry"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg transition-colors"
                  >
                    Prayer Ministry
                  </Link>
                </div>
              )}
            </div>

            {/* Messages */}
            <Link
              href="/messages"
              className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors py-2"
            >
              Messages
            </Link>

            {/* Live Indicator if Active (Links directly to YouTube Live) */}
            {isLive && (
              <a
                href={liveVideo?.url || "https://www.youtube.com/@Bethesda_AG/live"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-md animate-pulse"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                LIVE NOW
              </a>
            )}

            <Link
              href="/events"
              className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors"
            >
              Events
            </Link>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/resources"
                className="text-body-sm font-medium text-charcoal/90 dark:text-ivory/90 hover:text-gold transition-colors flex items-center gap-1 py-2"
              >
                Resources
                <svg
                  className="w-3.5 h-3.5 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-52 bg-card border border-sand rounded-xl shadow-xl p-2 space-y-1 z-50 animate-fade-in">
                  <Link
                    href="/resources/devotionals"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg"
                  >
                    Daily Devotionals
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg"
                  >
                    Photo Gallery
                  </Link>
                  <Link
                    href="/community/groups"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg"
                  >
                    Small Group Finder
                  </Link>
                  <Link
                    href="/prayer"
                    className="block px-3 py-2 text-xs font-medium text-foreground hover:text-gold hover:bg-muted rounded-lg"
                  >
                    Prayer Requests
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full text-charcoal/80 dark:text-ivory/80 hover:text-gold hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-charcoal dark:text-ivory hover:text-gold lg:hidden transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
