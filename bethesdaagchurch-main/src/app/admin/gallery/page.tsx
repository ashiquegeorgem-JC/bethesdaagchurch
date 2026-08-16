'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { GALLERY_ITEMS } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminGalleryPage() {
  const { addToast } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">Photo Gallery Manager</h2>
          <p className="text-xs text-ivory/60">Upload, organize, and categorize church media</p>
        </div>
        <Button variant="gold" size="sm" onClick={() => addToast({ type: 'success', title: 'Simulating Photo Upload', message: 'Photo uploaded successfully to gallery.' })}>
          <svg className="w-4 h-4 inline-block mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg> UPLOAD PHOTOS
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="bg-navy border border-gold/20 p-3 rounded-2xl space-y-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-deep">
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs font-semibold text-ivory line-clamp-1">{item.caption}</p>
            <span className="text-[10px] text-gold font-bold uppercase">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
