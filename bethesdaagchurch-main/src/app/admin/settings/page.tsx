'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';

export default function AdminSettingsPage() {
  const { addToast } = useApp();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Settings Saved',
      message: 'Church settings updated successfully.',
    });
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="font-display font-bold text-display-sm text-ivory">Church Settings</h2>
        <p className="text-xs text-ivory/60">Configure global site settings and contact information</p>
      </div>

      <form onSubmit={handleSave} className="bg-navy border border-gold/20 p-8 rounded-3xl space-y-6 shadow-xl text-xs text-ivory">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-heading-md text-gold">General Information</h3>

          <div>
            <label className="block text-ivory/80 font-semibold mb-1">Church Name</label>
            <input defaultValue="Bethesda AG Church" className="w-full px-4 py-2.5 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>

          <div>
            <label className="block text-ivory/80 font-semibold mb-1">Church Tagline</label>
            <input defaultValue="A place to belong. A place to grow. A place to encounter God." className="w-full px-4 py-2.5 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>

          <div>
            <label className="block text-ivory/80 font-semibold mb-1">Church Email</label>
            <input defaultValue="contact@bethesdaag.org" className="w-full px-4 py-2.5 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>

          <div>
            <label className="block text-ivory/80 font-semibold mb-1">Church Phone</label>
            <input defaultValue="+91 98450 09824" className="w-full px-4 py-2.5 bg-navy-deep border border-gold/30 rounded-xl text-ivory focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
        </div>

        <Button type="submit" variant="gold" className="w-full py-3 text-sm">
          SAVE CHURCH SETTINGS
        </Button>
      </form>
    </div>
  );
}
