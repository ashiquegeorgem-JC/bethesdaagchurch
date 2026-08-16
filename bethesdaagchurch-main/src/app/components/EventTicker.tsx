'use client';
import React from 'react';

const weeklyEvents = [
  { day: 'Sunday', time: '7:30 AM', label: 'Kannada / Tamil Service' },
  { day: 'Sunday', time: '9:30 AM', label: 'Malayalam / Kannada Service' },
  { day: 'Sunday', time: '11:30 AM', label: 'English / Telugu Service' },
  { day: 'Sunday', time: '6:30 PM', label: 'Kannada / Hindi Service' },
  { day: 'Daily', time: '7:00 AM', label: 'Morning Devotion (Zoom)' },
  { day: 'Daily', time: '11:30 AM', label: 'Intercessory Prayer (Zoom)' },
  { day: 'Tue–Thu', time: '7:30 PM', label: 'Bible Study (Zoom)' },
  { day: 'Monday', time: '7:30 PM', label: 'Life Group' },
  { day: 'Wednesday', time: '10:30 AM', label: "Women\'s Fellowship" },
  { day: 'Friday', time: '7:30 PM', label: 'Cottage Prayer' },
  { day: 'Saturday', time: '6:00 PM', label: 'Youth Meeting' },
  { day: 'Saturday', time: '7:30 PM', label: 'Workers Meeting' },
];

const Separator = () => (
  <span className="mx-6 inline-flex items-center gap-1.5 opacity-50" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 48 48" fill="none">
      <rect x="20" y="4" width="8" height="40" rx="2" fill="#C7A16A" />
      <rect x="4" y="18" width="40" height="8" rx="2" fill="#C7A16A" />
    </svg>
  </span>
);

export default function EventTicker() {
  // Duplicate items for seamless loop
  const items = [...weeklyEvents, ...weeklyEvents];

  return (
    <div
      className="relative w-full overflow-hidden bg-church-green border-y border-church-gold/30 py-3"
      aria-label="Weekly events ticker">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #2E7D4D, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #2E7D4D, transparent)' }} />
      {/* Scrolling track */}
      <div className="flex whitespace-nowrap animate-ticker">
        {items?.map((event, idx) => (
          <span key={idx} className="inline-flex items-center text-sm font-medium">
            <span className="text-church-gold/80 text-xs font-semibold tracking-widest uppercase mr-2">
              {event?.day}
            </span>
            <span className="text-white/90 font-medium">{event?.label}</span>
            <span className="ml-2 text-church-gold text-xs font-bold bg-white/10 px-2 py-0.5 rounded-full">
              {event?.time}
            </span>
            <Separator />
          </span>
        ))}
      </div>
    </div>
  );
}
