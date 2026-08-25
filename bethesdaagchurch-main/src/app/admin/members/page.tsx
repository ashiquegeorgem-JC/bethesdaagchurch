'use client';
import React from 'react';
import { MOCK_MEMBER } from '@/lib/mock-data';

export default function AdminMembersPage() {
  const members = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+91 98765 43210',
      group: 'Faith Builders',
      joined: '2022-03-15',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 98123 45678',
      group: 'Women of the Word',
      joined: '2021-08-20',
    },
    {
      id: '3',
      name: 'Rahul Menon',
      email: 'rahul@example.com',
      phone: '+91 98987 65432',
      group: 'Young Professionals',
      joined: '2023-01-10',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-display-sm text-ivory">Member Directory</h2>
        <p className="text-xs text-ivory/60">
          View registered church members and group affiliations
        </p>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Group</th>
              <th className="p-4">Member Since</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {members.map((m) => (
              <tr key={m.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{m.name}</td>
                <td className="p-4">{m.email}</td>
                <td className="p-4">{m.phone}</td>
                <td className="p-4 text-gold">{m.group}</td>
                <td className="p-4">{m.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
