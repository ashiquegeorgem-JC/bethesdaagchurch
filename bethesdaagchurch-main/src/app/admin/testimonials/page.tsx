'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminTestimonialsPage() {
  const { addToast } = useApp();
  const [tests, setTests] = useState(TESTIMONIALS);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">Testimonials Approval & Moderation</h2>
          <p className="text-xs text-ivory/60">Review and approve member testimony submissions</p>
        </div>
      </div>

      <div className="space-y-4">
        {tests.map((t) => (
          <div key={t.id} className="bg-navy border border-gold/20 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-base text-gold">{t.name}</h4>
                <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-bold">{t.category}</span>
              </div>
              <p className="text-xs text-ivory/80 italic line-clamp-2">&ldquo;{t.testimony}&rdquo;</p>
              <span className="text-[10px] text-ivory/50">Submitted on {t.date}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button variant="gold" size="sm" onClick={() => addToast({ type: 'success', title: 'Testimony Approved' })}>
                Approve ✓
              </Button>
              <button onClick={() => { setTests(tests.filter((item) => item.id !== t.id)); addToast({ type: 'info', title: 'Testimony Rejected' }); }} className="px-3 py-1.5 bg-red-600/30 text-red-400 rounded-lg text-xs font-semibold">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
