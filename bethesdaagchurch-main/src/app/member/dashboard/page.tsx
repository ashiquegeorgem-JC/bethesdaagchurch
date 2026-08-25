'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MOCK_MEMBER, SERMONS, EVENTS } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

export default function MemberDashboardPage() {
  const member = MOCK_MEMBER;
  const savedSermonObjects = SERMONS.filter((s) => member.savedSermons.includes(s.slug));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Welcome Header */}
          <div className="bg-navy text-ivory p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold shrink-0">
                <AppImage src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs text-gold font-bold uppercase tracking-widest">
                  MEMBER DASHBOARD
                </span>
                <h1 className="font-display font-bold text-display-sm text-ivory">
                  Welcome Back, {member.name}!
                </h1>
                <p className="text-xs text-ivory/70">Member since {member.memberSince}</p>
              </div>
            </div>
            <Link href="/member">
              <Button variant="outline-light" size="sm">
                Sign Out
              </Button>
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column — Groups & Saved Sermons */}
            <div className="lg:col-span-8 space-y-8">
              {/* My Groups */}
              <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  My Small Groups
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.groups.map((grp) => (
                    <div
                      key={grp}
                      className="p-4 border border-border bg-input rounded-2xl flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-display font-bold text-foreground">{grp}</h4>
                        <span className="text-xs text-gold font-semibold">Active Member</span>
                      </div>
                      <Link href="/community/groups">
                        <Button variant="ghost" size="sm" className="text-xs">
                          View
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Messages */}
              <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Saved Messages
                </h3>
                <div className="space-y-3">
                  {savedSermonObjects.map((sermon) => (
                    <div
                      key={sermon.id}
                      className="p-4 border border-border rounded-2xl flex items-center justify-between gap-4"
                    >
                      <div>
                        <Badge variant="gold" size="sm">
                          {sermon.series}
                        </Badge>
                        <h4 className="font-display font-bold text-foreground text-base mt-1">
                          {sermon.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{sermon.speaker}</p>
                      </div>
                      <Link href={`/messages/${sermon.slug}`}>
                        <Button variant="gold" size="sm">
                          Watch →
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Upcoming Events & Giving */}
            <div className="lg:col-span-4 space-y-8">
              {/* Upcoming Registered Events */}
              <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Registered Events
                </h3>
                <div className="p-4 border border-border rounded-2xl bg-gold/10 space-y-1">
                  <span className="text-xs font-bold text-gold uppercase">
                    FEATURED REGISTRATION
                  </span>
                  <h4 className="font-display font-bold text-foreground">{EVENTS[0].title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {EVENTS[0].date} • {EVENTS[0].time}
                  </p>
                </div>
              </div>

              {/* Giving History */}
              <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="font-display font-bold text-heading-md text-foreground">
                  Giving History
                </h3>
                <div className="space-y-2">
                  {member.givingHistory.map((g, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs py-2 border-b border-border last:border-0"
                    >
                      <div>
                        <span className="font-semibold block text-foreground">
                          ₹{g.amount.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">{g.type}</span>
                      </div>
                      <span className="text-muted-foreground">{g.date}</span>
                    </div>
                  ))}
                </div>
                <Link href="/give" className="block pt-2">
                  <Button variant="gold" size="sm" className="w-full">
                    Give Online →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <SearchOverlay />
      <ToastContainer />
      <Modal />
      <AIChat />
    </>
  );
}
