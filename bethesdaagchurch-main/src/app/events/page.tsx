'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EVENTS, EVENT_CATEGORIES } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

import { IMAGES } from '@/lib/mock-data';

export default function EventsPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const featured = EVENTS.find((e) => e.featured) || EVENTS[0];
  const filteredEvents = EVENTS.filter((e) => {
    const matchesCat = category === 'All' || e.category === category;
    const matchesSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Events' }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.gathering}
              alt="Events background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              WHAT&apos;S HAPPENING
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Church Events &amp; Gatherings
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Connect, grow, and serve together. Find upcoming conferences, worship nights, outreach
              days, and community gatherings.
            </p>
          </div>
        </section>

        {/* Featured Event Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-card border border-gold/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden">
              <AppImage src={featured.image} alt={featured.title} fill className="object-cover" />
              <Badge variant="gold" className="absolute top-4 left-4 font-bold">
                FEATURED EVENT
              </Badge>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  {featured.date} • {featured.time}
                </span>
                <h2 className="font-display font-bold text-display-sm text-foreground">
                  {featured.title}
                </h2>
                <p className="text-xs text-muted-foreground font-semibold">{featured.subtitle}</p>
                <p className="text-body-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link href={`/events/${featured.slug}`}>
                  <Button variant="gold">REGISTER NOW</Button>
                </Link>
                <Link href={`/events/${featured.slug}`}>
                  <Button variant="outline">EVENT DETAILS</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Category Filter Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card border border-border p-4 rounded-2xl shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="w-full md:w-72 px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-muted-foreground"
            />
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full flex-wrap justify-center">
              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    category === cat
                      ? 'bg-gold text-charcoal shadow-sm'
                      : 'bg-muted text-foreground border border-border hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Grid View ─────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-navy text-ivory px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Grid View
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10]">
                  <AppImage src={event.image} alt={event.title} fill className="object-cover" />
                  <Badge variant="navy" className="absolute top-3 left-3">
                    {event.category}
                  </Badge>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs text-gold font-bold uppercase">
                    {event.date} • {event.time}
                  </span>
                  <h3 className="font-display font-bold text-heading-md text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-gold shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </p>
                  <p className="text-body-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link href={`/events/${event.slug}`}>
                    <Button variant="gold" size="sm" className="w-full">
                      {event.registrationOpen ? 'REGISTER' : 'VIEW DETAILS'}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Calendar View ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendar View
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-sm">
            <p className="text-body-sm text-muted-foreground mb-6 text-center font-medium">
              Upcoming events scheduled for August – October 2026
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEvents.map((e) => (
                <div
                  key={e.id}
                  className="p-5 border border-border rounded-2xl bg-muted hover:border-gold hover:shadow-md transition-all duration-200 group"
                >
                  <span className="text-xs font-bold text-gold block mb-1.5">{e.date}</span>
                  <h4 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-gold transition-colors">
                    {e.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {e.time} • {e.location}
                  </p>
                  <Link
                    href={`/events/${e.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-gold font-bold hover:underline"
                  >
                    Register →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SearchOverlay />
      <ToastContainer />
      <Modal />
      <AIChat />
    </>
  );
}
