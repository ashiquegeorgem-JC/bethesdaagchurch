'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const featured = BLOG_POSTS.find((b) => b.featured) || BLOG_POSTS[0];
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = category === 'All' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.author.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
        </div>

        {/* Hero */}
        <section className="section bg-navy text-ivory text-center py-16">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-overline font-semibold uppercase tracking-[0.25em] text-gold">ARTICLES & PERSPECTIVES</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg mt-3 mb-4">Church Blog</h1>
            <p className="text-body-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Insightful articles on faith, spiritual growth, parenting, and Christian living.
            </p>
          </div>
        </section>

        {/* Featured Article Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden">
              <AppImage src={featured.image} alt={featured.title} fill className="object-cover" />
              <Badge variant="gold" className="absolute top-4 left-4 font-bold">FEATURED ARTICLE</Badge>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground font-semibold">{featured.author} • {featured.date} • {featured.readTime}</span>
                <h2 className="font-display font-bold text-display-sm text-foreground">{featured.title}</h2>
                <p className="text-body-sm text-muted-foreground leading-relaxed line-clamp-3">{featured.excerpt}</p>
              </div>

              <Link href={`/blog/${featured.slug}`}>
                <Button variant="gold" size="sm">
                  READ FULL ARTICLE →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Search & Categories Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card border border-border p-4 rounded-2xl shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full md:w-72 px-4 py-2.5 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />

            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    category === cat ? 'bg-gold text-navy-deep font-bold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="relative aspect-[16/10]">
                  <AppImage src={post.image} alt={post.title} fill className="object-cover" />
                  <Badge variant="navy" className="absolute top-3 left-3">{post.category}</Badge>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs text-muted-foreground font-semibold">{post.author} • {post.date}</span>
                  <h3 className="font-display font-bold text-heading-md text-foreground">{post.title}</h3>
                  <p className="text-body-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Article →
                    </Button>
                  </Link>
                </div>
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
