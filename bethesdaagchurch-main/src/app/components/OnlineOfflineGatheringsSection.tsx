'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CHURCH_INFO } from '@/lib/mock-data';

const onlineGatherings = [
  { name: 'Life Group Prayer', day: 'Mon', time: '7:30 PM – 8:30 PM' },
  { name: 'Morning Devotion', day: 'Mon – Sat', time: '7:00 AM – 8:00 AM' },
  { name: 'Daily Intercessory Prayer', day: 'Mon – Thu', time: '11:30 AM – 12:30 PM' },
  { name: 'Afternoon Prayer', day: 'Mon – Sat', time: '3:00 PM – 4:00 PM' },
  { name: 'Bible Study', day: 'Tue – Thu', time: '7:30 PM – 8:30 PM' },
  { name: 'Mid Night Prayer Meeting', day: 'Sat', time: '10:00 PM – 12:30 AM' },
];

const physicalGatherings = [
  { name: 'Life Group Prayer', day: 'Mon', time: '7:30 PM – 8:30 PM' },
  { name: 'Women’s Fellowship', day: 'Wed', time: '10:30 AM – 12:30 PM' },
  { name: 'Men’s Fellowship', day: 'Thu', time: '7:30 PM – 8:30 PM' },
  { name: 'Cottage Prayer', day: 'Fri', time: '7:30 PM – 8:30 PM' },
  { name: 'Fasting Prayer', day: 'Fri – Sat', time: '10:00 AM – 1:00 PM' },
  { name: 'Youth Meeting', day: 'Sat', time: '6:00 PM – 7:20 PM' },
  { name: 'Workers Meeting', day: 'Sat', time: '7:30 PM – 8:30 PM' },
];

export default function OnlineOfflineGatheringsSection() {
  const whatsappJoinUrl = `https://wa.me/${CHURCH_INFO.whatsapp}?text=${encodeURIComponent('Hello Bethesda AG Church, I would like to join your online/offline gatherings!')}`;

  return (
    <section className="py-24 md:py-32 bg-cream dark:bg-charcoal border-b border-sand/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="STAY CONNECTED"
          title="Online & Weekly Gatherings"
          description="Join us throughout the week for prayer, discipleship, and fellowship — virtually online or in-person at our sanctuary."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
          {/* ONLINE Gatherings Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-ivory dark:bg-charcoal/90 border border-sand/80 rounded-3xl p-8 sm:p-10 shadow-card relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-sand/60 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal dark:text-ivory tracking-wide">
                    ONLINE
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Virtual Meetings
                </span>
              </div>

              <ul className="space-y-4">
                {onlineGatherings.map((item) => (
                  <li key={item.name + item.day} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-sand/30 gap-1 sm:gap-4">
                    <span className="font-medium text-base text-charcoal dark:text-ivory">
                      {item.name} <span className="text-xs text-muted-text dark:text-ivory/60 font-normal">({item.day})</span>
                    </span>
                    <span className="font-semibold text-gold text-sm sm:text-base tracking-wide">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={whatsappJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gold text-white dark:text-charcoal font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gold-dark transition-all duration-300 shadow-md"
              >
                JOIN ONLINE PRAYER ON WHATSAPP →
              </a>
            </div>
          </motion.div>

          {/* PHYSICAL Gatherings Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-ivory dark:bg-charcoal/90 border border-sand/80 rounded-3xl p-8 sm:p-10 shadow-card relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-sand/60 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal dark:text-ivory tracking-wide">
                    PHYSICAL
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
                  In-Person Fellowship
                </span>
              </div>

              <ul className="space-y-4">
                {physicalGatherings.map((item) => (
                  <li key={item.name + item.day} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-sand/30 gap-1 sm:gap-4">
                    <span className="font-medium text-base text-charcoal dark:text-ivory">
                      {item.name} <span className="text-xs text-muted-text dark:text-ivory/60 font-normal">({item.day})</span>
                    </span>
                    <span className="font-semibold text-gold text-sm sm:text-base tracking-wide">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={CHURCH_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-charcoal dark:bg-sand/20 text-ivory dark:text-ivory border border-sand font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-charcoal/80 transition-all duration-300 shadow-md"
              >
                LOCATION: RAJAJINAGAR SANCTUARY →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
