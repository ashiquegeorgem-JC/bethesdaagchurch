'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';
import { useApp } from '@/context/AppContext';

export default function MemberLoginPage() {
  const router = useRouter();
  const { addToast } = useApp();
  const [email, setEmail] = useState('sarah@example.com');
  const [password, setPassword] = useState('password');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Welcome Back!',
      message: 'Logging into Member Portal...',
    });
    router.push('/member/dashboard');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-card border border-border p-8 rounded-3xl shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <svg
              className="w-10 h-10 text-gold mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1 className="font-display font-bold text-heading-xl text-foreground">
              Member Portal
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Sign in to access your saved sermons, groups, and giving history.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full py-3.5 mt-2">
              SIGN IN TO PORTAL
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            Demo Portal: Click Sign In to view mock member dashboard.
          </p>
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
