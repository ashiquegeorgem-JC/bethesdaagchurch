'use client';
import React from 'react';

export default function AdminDonationsPage() {
  const donations = [
    { id: 'tx-101', donor: 'Sarah Johnson', amount: 2500, type: 'Monthly Tithe', date: '2026-08-01', status: 'Completed' },
    { id: 'tx-102', donor: 'Anonymous', amount: 5000, type: 'Missions Support', date: '2026-08-03', status: 'Completed' },
    { id: 'tx-103', donor: 'Rahul Menon', amount: 1000, type: 'One Time Offering', date: '2026-08-05', status: 'Completed' },
    { id: 'tx-104', donor: 'John Peter', amount: 10000, type: 'Building Fund', date: '2026-08-07', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-display-sm text-ivory">Donations & Financial Records</h2>
        <p className="text-xs text-ivory/60">Track digital giving and financial contributions</p>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Donor Name</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Type</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {donations.map((d) => (
              <tr key={d.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-mono text-gold">{d.id}</td>
                <td className="p-4 font-semibold text-white">{d.donor}</td>
                <td className="p-4 font-bold text-white">₹{d.amount.toLocaleString()}</td>
                <td className="p-4">{d.type}</td>
                <td className="p-4">{d.date}</td>
                <td className="p-4 text-right">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-lg">{d.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
