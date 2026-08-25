'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { EVENTS } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminEventsPage() {
  const { addToast, openModal, closeModal } = useApp();
  const [eventList, setEventList] = useState(EVENTS);

  const handleDelete = (id: string) => {
    setEventList((prev) => prev.filter((e) => e.id !== id));
    addToast({ type: 'success', title: 'Event Deleted', message: 'Event removed.' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">Events Management</h2>
          <p className="text-xs text-ivory/60">Manage church events and registrations</p>
        </div>
        <Button
          variant="gold"
          size="sm"
          onClick={() => addToast({ type: 'info', title: 'Add Event Modal Triggered' })}
        >
          + ADD NEW EVENT
        </Button>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Event Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date & Time</th>
              <th className="p-4">Location</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {eventList.map((e) => (
              <tr key={e.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{e.title}</td>
                <td className="p-4 text-gold">{e.category}</td>
                <td className="p-4">
                  {e.date} • {e.time}
                </td>
                <td className="p-4">{e.location}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="px-2.5 py-1 bg-red-600/30 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
