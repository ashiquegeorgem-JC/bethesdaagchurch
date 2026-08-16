'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { CHURCH_INFO } from '@/lib/mock-data';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory border-t border-gold/20 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Promise Band */}
        <div className="bg-charcoal-light/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 mb-16 text-center border border-gold/20 shadow-card">
          <p className="font-display text-gold text-lg sm:text-xl italic mb-2">Our Promise</p>
          <p className="text-ivory/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every person who walks through our doors will encounter God&apos;s Presence, Genuine Love, Biblical Teaching, Authentic Community, and Practical Hope.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AppImage src="/bethesda-logo-transparent.png" alt="Bethesda AG Church" width={52} height={52} className="h-12 w-auto object-contain" />
              <div className="flex flex-col justify-center items-start text-left leading-none gap-0.5">
                <span className="font-display font-bold text-xl text-ivory tracking-[0.08em] leading-none">BETHESDA</span>
                <span className="text-[10px] text-gold font-bold tracking-[0.22em] uppercase leading-none">AG CHURCH</span>
              </div>
            </div>
            <p className="text-ivory/70 text-xs leading-relaxed">
              Loving God . Loving People . Inspiring The World.<br />
              A place of faith, hope, and community in Bengaluru.
            </p>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-display font-bold text-gold text-sm tracking-wider uppercase mb-4">Ministries</h4>
            <ul className="space-y-2 text-xs text-ivory/70">
              <li><Link href="/ministries/kids" className="hover:text-gold transition-colors">Kids Ministry</Link></li>
              <li><Link href="/ministries/youth" className="hover:text-gold transition-colors">Youth Ministry</Link></li>
              <li><Link href="/ministries/women" className="hover:text-gold transition-colors">Women&apos;s Fellowship</Link></li>
              <li><Link href="/ministries/men" className="hover:text-gold transition-colors">Men&apos;s Fellowship</Link></li>
              <li><Link href="/community/groups" className="hover:text-gold transition-colors">Small Groups</Link></li>
              <li><Link href="/prayer" className="hover:text-gold transition-colors">Prayer Ministry</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-ivory/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Mission & Vision</Link></li>
              <li><Link href="/about/leadership" className="hover:text-gold transition-colors">Leadership Team</Link></li>
              <li><Link href="/messages" className="hover:text-gold transition-colors">Sermon Library</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">Upcoming Events</Link></li>
              <li><Link href="/give" className="hover:text-gold transition-colors">Give Online</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-gold text-sm tracking-wider uppercase mb-4">Visit Us</h4>
            <address className="not-italic text-xs text-ivory/70 space-y-2 leading-relaxed">
              <p>{CHURCH_INFO.address}</p>
              <p><a href={`tel:${CHURCH_INFO.phone}`} className="hover:text-gold transition-colors">{CHURCH_INFO.phone}</a></p>
              <p><a href={`https://wa.me/${CHURCH_INFO.whatsapp}?text=${encodeURIComponent("Hello Bethesda AG Church!")}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-semibold flex items-center gap-1.5"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.229-1.157z"/></svg> WhatsApp Chat</a></p>
              <p><a href={CHURCH_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline font-semibold flex items-center gap-1.5"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> YouTube Channel</a></p>
              <p><a href={`mailto:${CHURCH_INFO.email}`} className="hover:text-gold transition-colors">{CHURCH_INFO.email}</a></p>
              <p className="text-gold font-medium pt-1">{CHURCH_INFO.officeHours}</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© 2026 Bethesda AG Church. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}