'use client';
import React, { use, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EVENTS } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function SingleEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { addToast } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const event = EVENTS.find((e) => e.slug === resolvedParams.slug) || EVENTS[0];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addToast({
      type: 'success',
      title: 'Registration Successful!',
      message: `You are registered for ${event.title}. Confirmation email sent!`,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Events', href: '/events' }, { label: event.title }]} />
        </div>

        {/* Hero Image & Overview */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <AppImage src={event.image} alt={event.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-navy/40" />
            <Badge variant="gold" className="absolute top-6 left-6 font-bold">{event.category}</Badge>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm mt-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-gold font-bold uppercase">{event.date} • {event.time}</span>
              <h1 className="font-display font-bold text-display-md text-foreground">{event.title}</h1>
              <p className="text-body text-muted-foreground font-medium flex items-center gap-1.5"><svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {event.location}</p>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-display font-bold text-heading-md text-foreground mb-2">About This Event</h3>
              <p className="text-body text-muted-foreground leading-relaxed">{event.description}</p>
            </div>

            {/* Schedule if available */}
            {event.schedule && event.schedule.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-heading-md text-foreground mb-4">Event Schedule</h3>
                <div className="space-y-4">
                  {event.schedule.map((dayItem, i) => (
                    <div key={i} className="p-4 bg-input border border-border rounded-2xl space-y-2">
                      <h4 className="font-display font-bold text-base text-gold">{dayItem.day}</h4>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                        {dayItem.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Registration Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-navy text-ivory border border-gold/30 p-8 rounded-3xl shadow-2xl">
            <h2 className="font-display font-bold text-heading-xl text-gold mb-2">Register for Event</h2>
            <p className="text-body-sm text-ivory/80 mb-6">Reserve your spot now. Registration is free and open to everyone.</p>

            {submitted ? (
              <div className="p-6 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl text-center space-y-3">
                <span className="text-4xl">✓</span>
                <h3 className="font-display font-bold text-heading-md text-emerald-400">Registration Successful!</h3>
                <p className="text-xs text-ivory/80">Thank you for registering for {event.title}. We look forward to seeing you!</p>
                <Button variant="gold" size="sm" onClick={() => setSubmitted(false)}>
                  Register Another Person
                </Button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">Full Name</label>
                  <input required type="text" placeholder="Sarah Johnson" className="w-full px-4 py-3 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">Email Address</label>
                  <input required type="email" placeholder="sarah@example.com" className="w-full px-4 py-3 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">Number of Attendees</label>
                  <select className="w-full px-4 py-3 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold text-sm">
                    <option>1 Attendee</option>
                    <option>2 Attendees</option>
                    <option>3 Attendees</option>
                    <option>4+ Attendees</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <Button type="submit" variant="gold" className="w-full py-3.5 text-base">
                    COMPLETE REGISTRATION
                  </Button>
                </div>
              </form>
            )}
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
