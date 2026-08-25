import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import NextServiceSection from '@/app/components/NextServiceSection';
import OnlineOfflineGatheringsSection from '@/app/components/OnlineOfflineGatheringsSection';
import WhatYoullFindSection from '@/app/components/WhatYoullFindSection';
import VisitUsSection from '@/app/components/VisitUsSection';
import SermonsSection from '@/app/components/SermonsSection';
import MinistriesSection from '@/app/components/MinistriesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import PrayerSection from '@/app/components/PrayerSection';
import GiveSection from '@/app/components/GiveSection';
import { SearchOverlay } from '@/components/ui/SearchOverlay';
import { ToastContainer } from '@/components/ui/Toast';
import { Modal } from '@/components/ui/Modal';
import { AIChat } from '@/components/AIChat';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NextServiceSection />
        <OnlineOfflineGatheringsSection />
        <WhatYoullFindSection />
        <SermonsSection />
        <MinistriesSection />
        <VisitUsSection />
        <TestimonialsSection />
        <PrayerSection />
        <GiveSection />
      </main>
      <Footer />

      {/* Global Overlays & Modals */}
      <SearchOverlay />
      <ToastContainer />
      <Modal />
      <AIChat />
    </>
  );
}
