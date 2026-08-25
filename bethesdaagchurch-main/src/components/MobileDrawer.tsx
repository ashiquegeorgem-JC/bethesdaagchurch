'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AppImage from './ui/AppImage';
import { Button } from './ui/Button';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    sub: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
    ],
  },
  {
    label: 'Ministries',
    href: '/ministries',
    sub: [
      { label: 'All Ministries', href: '/ministries' },
      { label: "Children's Ministry", href: '/ministries/childrens' },
      { label: 'Youth Ministry', href: '/ministries/youth' },
      { label: 'Worship Ministry', href: '/ministries/worship' },
      { label: 'Pastoral Ministry', href: '/ministries/pastoral' },
      { label: 'Evangelism Ministry', href: '/ministries/evangelism' },
      { label: 'Translation Ministry', href: '/ministries/translation' },
      { label: 'Greeters Ministry', href: '/ministries/greeters' },
      { label: 'Hospitality Ministry', href: '/ministries/hospitality' },
      { label: 'Facilities & Maintenance', href: '/ministries/facilities' },
      { label: 'Media Ministry', href: '/ministries/media' },
      { label: 'Prayer Ministry', href: '/ministries/prayer-ministry' },
    ],
  },
  { label: 'Messages', href: '/messages' },
  { label: 'Events', href: '/events' },
  {
    label: 'Community',
    href: '/community',
    sub: [
      { label: 'Small Groups', href: '/community/groups' },
      { label: 'Testimonies', href: '/community/testimonies' },
      { label: 'Prayer', href: '/prayer' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    sub: [
      { label: 'Devotionals', href: '/resources/devotionals' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-deep/80 backdrop-blur-md"
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy text-ivory flex flex-col justify-between p-6 shadow-2xl overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-gold/20 pb-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <AppImage
                src="/bethesda-logo-transparent.png"
                alt="Bethesda AG Church"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col justify-center items-start text-left leading-none gap-0.5">
                <span className="font-display font-bold text-lg text-ivory tracking-[0.08em] leading-none text-left">
                  BETHESDA
                </span>
                <span className="text-[10px] text-gold font-bold tracking-[0.22em] uppercase leading-none text-left">
                  AG CHURCH
                </span>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-ivory transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="my-6 flex-1 space-y-1">
            {MENU_ITEMS.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-display font-semibold text-lg text-ivory hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="p-1 text-gold hover:text-ivory transition-colors"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${expanded === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.sub && expanded === item.label && (
                  <div className="pl-4 py-2 space-y-2 border-l border-gold/30 my-1 bg-white/5 rounded-r-lg">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={onClose}
                        className="block text-sm text-ivory/80 hover:text-gold py-1 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-gold/20">
            <Link href="/give" onClick={onClose} className="block">
              <Button variant="gold" className="w-full">
                GIVE ONLINE
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
