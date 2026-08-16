'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SERMONS } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminSermonsPage() {
  const { addToast, openModal, closeModal } = useApp();
  const [sermonList, setSermonList] = useState(SERMONS);

  const handleDelete = (id: string) => {
    setSermonList((prev) => prev.filter((s) => s.id !== id));
    addToast({ type: 'success', title: 'Sermon Deleted', message: 'Sermon removed from frontend list.' });
  };

  const handleAddSermon = () => {
    openModal({
      title: 'Add New Sermon',
      content: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
            addToast({ type: 'success', title: 'Sermon Added', message: 'New sermon added to database (mock).' });
          }}
          className="space-y-4 text-foreground"
        >
          <div>
            <label className="block text-xs font-semibold mb-1">Sermon Title</label>
            <input required type="text" placeholder="Title" className="w-full px-3 py-2 bg-input border border-border rounded-xl text-xs" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Speaker</label>
            <input required type="text" placeholder="Pastor Samuel Thomas" className="w-full px-3 py-2 bg-input border border-border rounded-xl text-xs" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Series</label>
            <input required type="text" placeholder="Foundations of Faith" className="w-full px-3 py-2 bg-input border border-border rounded-xl text-xs" />
          </div>
          <Button type="submit" variant="gold" className="w-full py-2.5">
            SAVE SERMON
          </Button>
        </form>
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">Sermons Management</h2>
          <p className="text-xs text-ivory/60">Add, edit, or delete sermons in the public library</p>
        </div>
        <Button variant="gold" size="sm" onClick={handleAddSermon}>
          + ADD NEW SERMON
        </Button>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Speaker</th>
              <th className="p-4">Date</th>
              <th className="p-4">Series</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {sermonList.map((s) => (
              <tr key={s.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{s.title}</td>
                <td className="p-4">{s.speaker}</td>
                <td className="p-4">{s.date}</td>
                <td className="p-4 text-gold">{s.series}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => handleDelete(s.id)} className="px-2.5 py-1 bg-red-600/30 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
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
