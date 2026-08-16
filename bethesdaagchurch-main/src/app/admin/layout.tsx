'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';

const ADMIN_NAV = [
  { label: 'Dashboard', href: '/admin', icon: 'DA' },
  { label: 'Sermons', href: '/admin/sermons', icon: 'SE' },
  { label: 'Events', href: '/admin/events', icon: 'EV' },
  { label: 'Ministries', href: '/admin/ministries', icon: 'MI' },
  { label: 'Blog Articles', href: '/admin/blog', icon: 'BL' },
  { label: 'Photo Gallery', href: '/admin/gallery', icon: 'GA' },
  { label: 'Testimonials', href: '/admin/testimonials', icon: 'TE' },
  { label: 'Prayer Requests', href: '/admin/prayer', icon: 'PR' },
  { label: 'Members', href: '/admin/members', icon: 'ME' },
  { label: 'Donations', href: '/admin/donations', icon: 'DO' },
  { label: 'Settings', href: '/admin/settings', icon: 'ST' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-navy-deep text-ivory">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-navy border-r border-gold/20 flex flex-col justify-between p-4 shrink-0 hidden md:flex">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 p-2">
            <AppImage src="/bethesda-logo-transparent.png" alt="Bethesda AG Church" width={36} height={36} className="h-9 w-auto object-contain" />
            <div>
              <h2 className="font-display font-bold text-sm text-gold tracking-wider">BETHESDA</h2>
              <p className="text-[10px] text-ivory/60 uppercase">Admin Portal</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {ADMIN_NAV.map((nav) => {
              const active = pathname === nav.href;
              return (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    active ? 'bg-gold text-navy-deep font-bold shadow-md' : 'text-ivory/80 hover:bg-white/5 hover:text-gold'
                  }`}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-ivory/60">
          <span>v2.6 Frontend Admin</span>
          <Link href="/" className="hover:text-gold">
            Exit Admin →
          </Link>
        </div>
      </aside>

      {/* Main Admin Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 bg-navy/90 border-b border-gold/20 flex items-center justify-between px-6 shrink-0">
          <h1 className="font-display font-bold text-base text-gold uppercase tracking-wider">Church Management System</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ivory/70 hidden sm:inline">Admin User: Pastor Samuel</span>
            <Link href="/" className="text-xs px-3 py-1.5 bg-gold/15 text-gold border border-gold/30 rounded-lg font-bold">
              View Website ↗
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 sm:p-10 flex-1">{children}</main>

        <ToastContainer />
        <Modal />
      </div>
    </div>
  );
}
