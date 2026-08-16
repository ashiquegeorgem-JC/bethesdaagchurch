'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useApp } from '@/context/AppContext';
import { CHURCH_INFO } from '@/lib/mock-data';

export default function PrayerSection() {
  const { addToast } = useApp();
  const [request, setRequest] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    const message = anonymous
      ? `Hello Bethesda Prayer Team, please pray for this anonymous request: "${request}"`
      : `Hello Bethesda Prayer Team, please pray for my request: "${request}"`;

    const url = `https://wa.me/${CHURCH_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    addToast({
      type: 'success',
      title: 'Prayer Request Sent',
      message: 'Opening WhatsApp to send your prayer request directly to our team.',
    });
    setRequest('');
  };

  return (
    <section className="py-24 md:py-32 bg-sky dark:bg-charcoal border-b border-sand/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="SEEKING GOD TOGETHER"
          title="You Don't Have to Pray Alone"
          description="&ldquo;Whatever you're carrying, we'd be honoured to pray with you.&rdquo;"
        />

        <form onSubmit={handleSubmit} className="bg-card border border-sand p-6 sm:p-10 rounded-3xl shadow-card space-y-5 text-left max-w-2xl mx-auto mt-8">
          <div>
            <label className="block text-xs font-semibold text-charcoal dark:text-ivory mb-2">Your Prayer Request</label>
            <textarea
              required
              rows={4}
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="How can we pray for you today?"
              className="w-full px-4 py-3 bg-input border border-sand rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-gold font-sans"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
            <label className="flex items-center gap-2.5 text-xs text-muted-text dark:text-ivory/80 cursor-pointer font-medium select-none">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="w-4 h-4 text-gold rounded border-sand focus:ring-gold"
              />
              Keep request anonymous
            </label>

            <div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs font-bold transition-all duration-300 flex items-center gap-2 shadow-md uppercase tracking-wider"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.229-1.157z" />
                </svg>
                SEND VIA WHATSAPP
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
