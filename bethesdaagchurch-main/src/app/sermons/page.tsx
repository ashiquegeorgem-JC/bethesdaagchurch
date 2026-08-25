import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SermonsHero from '@/app/sermons/components/SermonsHero';
import FeaturedSermon from '@/app/sermons/components/FeaturedSermon';
import SermonArchive from '@/app/sermons/components/SermonArchive';
import DevotionsSection from '@/app/sermons/components/DevotionsSection';

export default function SermonsPage() {
  return (
    <>
      <Header />
      <main>
        <SermonsHero />
        <FeaturedSermon />
        <SermonArchive />
        <DevotionsSection />
      </main>
      <Footer />
    </>
  );
}
