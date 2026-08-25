'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { randomId } from '@/lib/utils';

export interface YouTubeLiveVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
  embedUrl: string;
}

// ── Toast ─────────────────────────────────────────────────────
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
}

// ── Modal ─────────────────────────────────────────────────────
export interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// ── Context Type ──────────────────────────────────────────────
interface AppContextType {
  // Announcement
  showAnnouncement: boolean;
  dismissAnnouncement: () => void;

  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  // AI Chat
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;

  // Mobile menu
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Toast
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;

  // Modal
  modal: ModalState;
  openModal: (opts: Omit<ModalState, 'isOpen'>) => void;
  closeModal: () => void;

  // YouTube – Live state
  isLive: boolean;
  setIsLive: (live: boolean) => void;
  liveVideo: YouTubeLiveVideo | null;
  checkLiveStatusNow: () => Promise<void>;

  // YouTube – Video list (auto-refreshed every 5 min)
  videos: YouTubeLiveVideo[];
  videosLoading: boolean;
  refreshVideos: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

/** How often (ms) the client re-fetches /api/youtube to get fresh videos + live status */
const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [searchOpen, setSearchOpen]             = useState(false);
  const [chatOpen, setChatOpen]                 = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);
  const [toasts, setToasts]                     = useState<Toast[]>([]);
  const [modal, setModal]                       = useState<ModalState>({ isOpen: false });
  const [isLive, setIsLive]                     = useState(false);
  const [liveVideo, setLiveVideo]               = useState<YouTubeLiveVideo | null>(null);
  const [videos, setVideos]                     = useState<YouTubeLiveVideo[]>([]);
  const [videosLoading, setVideosLoading]       = useState(true);

  const dismissAnnouncement = useCallback(() => setShowAnnouncement(false), []);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = randomId();
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const openModal = useCallback((opts: Omit<ModalState, 'isOpen'>) => {
    setModal({ ...opts, isOpen: true });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false });
  }, []);

  /** Single fetch that updates BOTH videos list AND live status */
  const refreshYouTubeData = useCallback(async () => {
    try {
      const res = await fetch('/api/youtube');
      if (!res.ok) return;
      const data = await res.json();

      setIsLive(!!data.isLive);
      setLiveVideo(data.liveVideo || null);

      if (Array.isArray(data.videos) && data.videos.length > 0) {
        setVideos(data.videos);
      }
    } catch {
      // Silently ignore network errors — we keep whatever we had before
    } finally {
      setVideosLoading(false);
    }
  }, []);

  // Alias for backward-compat (used by existing components)
  const checkLiveStatusNow = refreshYouTubeData;
  const refreshVideos       = refreshYouTubeData;

  // On mount: fetch immediately, then poll every 5 minutes
  useEffect(() => {
    refreshYouTubeData();
    const interval = setInterval(refreshYouTubeData, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refreshYouTubeData]);

  // Also re-fetch whenever the tab becomes visible again (user comes back to the tab)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        refreshYouTubeData();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [refreshYouTubeData]);

  return (
    <AppContext.Provider
      value={{
        showAnnouncement,
        dismissAnnouncement,
        searchOpen,
        setSearchOpen,
        chatOpen,
        setChatOpen,
        mobileMenuOpen,
        setMobileMenuOpen,
        toasts,
        addToast,
        removeToast,
        modal,
        openModal,
        closeModal,
        isLive,
        setIsLive,
        liveVideo,
        checkLiveStatusNow,
        videos,
        videosLoading,
        refreshVideos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
