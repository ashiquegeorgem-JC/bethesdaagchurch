'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { SERMONS, EVENTS, MINISTRIES, BLOG_POSTS } from '@/lib/mock-data';

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      if (e.key === 'Escape' && searchOpen) setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [searchOpen]);

  const filteredSermons = query ? SERMONS.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()) || s.speaker.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredEvents = query ? EVENTS.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()) || e.category.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredMinistries = query ? MINISTRIES.filter((m) => m.name.toLowerCase().includes(query.toLowerCase())) : [];
  const filteredBlog = query ? BLOG_POSTS.filter((b) => b.title.toLowerCase().includes(query.toLowerCase())) : [];

  const hasResults = filteredSermons.length > 0 || filteredEvents.length > 0 || filteredMinistries.length > 0 || filteredBlog.length > 0;

  return (
    <AnimatePresence>
      {searchOpen && (
        <div className="fixed inset-0 z-100 flex flex-col items-center p-4 sm:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-navy-deep/90 backdrop-blur-xl"
          />

          {/* Search box */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Input bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <svg className="w-6 h-6 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sermons, events, ministries, blog..."
                className="w-full bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="px-2 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md uppercase"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
              {!query && (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm">Type to start searching across sermons, events, ministries, and blog articles...</p>
                </div>
              )}

              {query && !hasResults && (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm">No results found for &ldquo;{query}&rdquo;.</p>
                </div>
              )}

              {filteredSermons.length > 0 && (
                <div>
                  <h4 className="text-overline font-semibold uppercase text-gold tracking-wider mb-3">Sermons</h4>
                  <div className="space-y-2">
                    {filteredSermons.map((sermon) => (
                      <Link
                        key={sermon.id}
                        href={`/messages/${sermon.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-foreground text-sm">{sermon.title}</p>
                          <p className="text-xs text-muted-foreground">{sermon.speaker} • {sermon.date}</p>
                        </div>
                        <span className="text-xs px-2.5 py-1 bg-gold/15 text-gold rounded-full font-semibold">{sermon.series}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredEvents.length > 0 && (
                <div>
                  <h4 className="text-overline font-semibold uppercase text-gold tracking-wider mb-3">Events</h4>
                  <div className="space-y-2">
                    {filteredEvents.map((event) => (
                      <Link
                        key={event.id}
                        href={`/events/${event.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-foreground text-sm">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.date} • {event.location}</p>
                        </div>
                        <span className="text-xs px-2.5 py-1 bg-navy text-ivory rounded-full font-semibold">{event.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredMinistries.length > 0 && (
                <div>
                  <h4 className="text-overline font-semibold uppercase text-gold tracking-wider mb-3">Ministries</h4>
                  <div className="space-y-2">
                    {filteredMinistries.map((ministry) => (
                      <Link
                        key={ministry.id}
                        href={`/ministries/${ministry.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-foreground text-sm">{ministry.name}</p>
                          <p className="text-xs text-muted-foreground">{ministry.shortDesc}</p>
                        </div>
                        <span className="text-xs font-semibold text-gold">View Ministry →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredBlog.length > 0 && (
                <div>
                  <h4 className="text-overline font-semibold uppercase text-gold tracking-wider mb-3">Articles</h4>
                  <div className="space-y-2">
                    {filteredBlog.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-foreground text-sm">{post.title}</p>
                          <p className="text-xs text-muted-foreground">{post.author} • {post.date}</p>
                        </div>
                        <span className="text-xs font-semibold text-gold">Read Article →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
