'use client';
import React, { use } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BLOG_POSTS } from '@/lib/mock-data';
import AppImage from '@/components/ui/AppImage';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { addToast } = useApp();

  const post = BLOG_POSTS.find((b) => b.slug === resolvedParams.slug) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast({
      type: 'success',
      title: 'Link Copied!',
      message: 'Article link copied to clipboard.',
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="space-y-4 text-center">
            <Badge variant="gold" className="font-bold">
              {post.category}
            </Badge>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-foreground">
              {post.title}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              {post.author} • Published on {post.date} • {post.readTime}
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-xl">
            <AppImage src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-sm space-y-6 text-body text-foreground leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-6">
            <Link href="/blog">
              <Button variant="outline" size="sm">
                ← Back to Articles
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <svg
                className="w-4 h-4 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>{' '}
              Share Article
            </Button>
          </div>
        </article>
      </main>
      <Footer />
      <SearchOverlay />
      <ToastContainer />
      <Modal />
      <AIChat />
    </>
  );
}
