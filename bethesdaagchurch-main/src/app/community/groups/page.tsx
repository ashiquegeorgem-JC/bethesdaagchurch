'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';
import AppImage from '@/components/ui/AppImage';
import { IMAGES, SMALL_GROUPS } from '@/lib/mock-data';

export default function SmallGroupsPage() {
  const { addToast } = useApp();
  const [dayFilter, setDayFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredGroups = SMALL_GROUPS.filter((g) => {
    const matchesDay = dayFilter === 'All' || g.day.toLowerCase().includes(dayFilter.toLowerCase());
    const matchesType = typeFilter === 'All' || g.type === typeFilter;
    const matchesSearch =
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.location.toLowerCase().includes(search.toLowerCase()) ||
      g.leader.toLowerCase().includes(search.toLowerCase());
    return matchesDay && matchesType && matchesSearch;
  });

  const handleJoin = (groupName: string) => {
    addToast({
      type: 'success',
      title: 'Join Request Sent!',
      message: `Your request to join ${groupName} has been submitted. The group leader will contact you!`,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[{ label: 'Community', href: '/community' }, { label: 'Small Groups' }]}
          />
        </div>

        {/* Hero */}
        <section className="relative bg-navy text-ivory text-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={IMAGES.family}
              alt="Small groups background"
              fill
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">
              SMALL GROUPS FINDER
            </span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ivory mt-3 mb-4 leading-tight">
              Find Your Small Group
            </h1>
            <p className="text-body-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Small groups are where a big church feels like family. Connect with believers in your
              neighborhood for Bible study, prayer, and encouragement.
            </p>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by group name or location..."
              className="w-full md:w-80 px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={dayFilter}
                onChange={(e) => setDayFilter(e.target.value)}
                className="px-4 py-2.5 bg-input border border-border rounded-xl text-xs font-semibold"
              >
                <option value="All">All Days</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2.5 bg-input border border-border rounded-xl text-xs font-semibold"
              >
                <option value="All">All Types</option>
                <option value="Bible Study">Bible Study</option>
                <option value="Fellowship">Fellowship</option>
                <option value="Marriage">Marriage</option>
                <option value="Prayer">Prayer</option>
              </select>
            </div>
          </div>
        </section>

        {/* Groups Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="gold">{group.type}</Badge>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {group.spotsAvailable} Spots Open
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-heading-md text-foreground">
                    {group.name}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{group.description}</p>
                </div>

                <div className="bg-input p-4 rounded-2xl text-xs text-foreground space-y-1.5 border border-border">
                  <p>
                    <strong>Day:</strong> {group.day}s at {group.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {group.location}
                  </p>
                  <p>
                    <strong>Leader:</strong> {group.leader}
                  </p>
                  <p>
                    <strong>Target:</strong> {group.ageGroup}
                  </p>
                </div>

                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => handleJoinGroup(group.name)}
                  className="w-full"
                >
                  JOIN GROUP
                </Button>
              </div>
            ))}
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
