'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { MINISTRIES } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminMinistriesPage() {
  const { addToast } = useApp();
  const [minList, setMinList] = useState(MINISTRIES);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">Ministries Management</h2>
          <p className="text-xs text-ivory/60">Configure church ministry details and leaders</p>
        </div>
        <Button variant="gold" size="sm" onClick={() => addToast({ type: 'info', title: 'Add Ministry' })}>
          + ADD MINISTRY
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {minList.map((m) => (
          <div key={m.id} className="bg-navy border border-gold/20 p-6 rounded-2xl space-y-3 shadow-xl">
            <h3 className="font-display font-bold text-heading-md text-gold">{m.name}</h3>
            <p className="text-xs text-ivory/70 line-clamp-2">{m.shortDesc}</p>
            <p className="text-[11px] text-ivory/50">Meeting: {m.meetingTime}</p>
            <div className="flex justify-end gap-2 pt-2 border-t border-white/10">
              <button onClick={() => addToast({ type: 'info', title: `Editing ${m.name}` })} className="px-2 py-1 bg-white/10 text-xs rounded hover:bg-white/20">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
