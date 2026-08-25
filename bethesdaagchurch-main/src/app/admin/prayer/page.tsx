'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';

export default function AdminPrayerPage() {
  const { addToast } = useApp();
  const [prayers, setPrayers] = useState([
    {
      id: 'p1',
      name: 'Anonymous',
      request: 'Pray for healing for my mother who is undergoing surgery this week.',
      date: '2026-08-10',
      status: 'Pending',
    },
    {
      id: 'p2',
      name: 'Ramesh Kumar',
      request: "Seeking guidance and God's open doors for a new job opportunity.",
      date: '2026-08-09',
      status: 'Prayed',
    },
    {
      id: 'p3',
      name: 'Priya S.',
      request: 'Prayer for peace and restoration in my family.',
      date: '2026-08-08',
      status: 'Prayed',
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-display-sm text-ivory">
          Prayer Requests Management
        </h2>
        <p className="text-xs text-ivory/60">
          Review prayer requests submitted by members and visitors
        </p>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Request</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {prayers.map((p) => (
              <tr key={p.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{p.name}</td>
                <td className="p-4 max-w-md">{p.request}</td>
                <td className="p-4">{p.date}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-0.5 rounded font-bold ${p.status === 'Prayed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => {
                      setPrayers(
                        prayers.map((item) =>
                          item.id === p.id ? { ...item, status: 'Prayed' } : item
                        )
                      );
                      addToast({ type: 'success', title: 'Marked as Prayed' });
                    }}
                  >
                    Mark Prayed ✓
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
