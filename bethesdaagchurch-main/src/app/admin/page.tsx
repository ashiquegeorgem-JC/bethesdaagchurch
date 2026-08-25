'use client';
import React from 'react';
import { ADMIN_STATS, ADMIN_CHART_DATA } from '@/lib/mock-data';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default function AdminDashboardPage() {
  const stats = [
    {
      title: 'Total Visitors',
      value: ADMIN_STATS.visitors.value.toLocaleString(),
      change: ADMIN_STATS.visitors.change,
      icon: 'VS',
    },
    {
      title: 'Prayer Requests',
      value: ADMIN_STATS.prayerRequests.value,
      change: ADMIN_STATS.prayerRequests.change,
      icon: 'PR',
    },
    {
      title: 'Event Registrations',
      value: ADMIN_STATS.eventRegistrations.value,
      change: ADMIN_STATS.eventRegistrations.change,
      icon: 'EV',
    },
    {
      title: 'Sermon Views',
      value: ADMIN_STATS.sermonViews.value.toLocaleString(),
      change: ADMIN_STATS.sermonViews.change,
      icon: 'SE',
    },
    {
      title: 'Donations Collected',
      value: `₹${ADMIN_STATS.donations.value.toLocaleString()}`,
      change: ADMIN_STATS.donations.change,
      icon: 'DO',
    },
    {
      title: 'Upcoming Events',
      value: ADMIN_STATS.upcomingEvents.value,
      change: 'Active',
      icon: 'UP',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display font-bold text-display-sm text-ivory">Dashboard Overview</h2>
        <p className="text-xs text-ivory/60">
          Live metrics & engagement summary for Bethesda AG Church
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-navy border border-gold/20 p-6 rounded-2xl shadow-xl space-y-2"
          >
            <div className="flex items-center justify-between text-ivory/70">
              <span className="text-xs font-semibold uppercase">{s.title}</span>
              <span className="text-xl">{s.icon}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-display font-bold text-display-sm text-ivory">{s.value}</span>
              <span className="text-xs font-bold text-emerald-400">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visitors Chart */}
        <div className="bg-navy border border-gold/20 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="font-display font-bold text-heading-md text-gold">
            Website Visitors Trend
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ADMIN_CHART_DATA.visitors}>
                <defs>
                  <linearGradient id="visitorGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C9A45C" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#C9A45C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#0B1F33',
                    borderColor: '#C9A45C',
                    borderRadius: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#C9A45C"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#visitorGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sermon Views Chart */}
        <div className="bg-navy border border-gold/20 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="font-display font-bold text-heading-md text-gold">
            Sermon Views & Streams
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ADMIN_CHART_DATA.sermonViews}>
                <defs>
                  <linearGradient id="sermonGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B6992" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B6992" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#0B1F33',
                    borderColor: '#3B6992',
                    borderRadius: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B6992"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#sermonGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
