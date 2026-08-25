'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BLOG_POSTS } from '@/lib/mock-data';
import { useApp } from '@/context/AppContext';

export default function AdminBlogPage() {
  const { addToast } = useApp();
  const [posts, setPosts] = useState(BLOG_POSTS);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-display-sm text-ivory">
            Blog Articles Management
          </h2>
          <p className="text-xs text-ivory/60">Create and publish church articles</p>
        </div>
        <Button
          variant="gold"
          size="sm"
          onClick={() => addToast({ type: 'info', title: 'New Article Editor' })}
        >
          + NEW ARTICLE
        </Button>
      </div>

      <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-xs text-ivory">
          <thead className="bg-navy-deep border-b border-gold/20 text-gold uppercase font-semibold">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {posts.map((p) => (
              <tr key={p.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-semibold text-white">{p.title}</td>
                <td className="p-4">{p.author}</td>
                <td className="p-4 text-gold">{p.category}</td>
                <td className="p-4">{p.date}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => {
                      setPosts(posts.filter((b) => b.id !== p.id));
                      addToast({ type: 'success', title: 'Article Deleted' });
                    }}
                    className="px-2.5 py-1 bg-red-600/30 text-red-400 rounded hover:bg-red-600 hover:text-white"
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
