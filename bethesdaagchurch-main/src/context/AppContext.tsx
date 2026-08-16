'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { randomId } from '@/lib/utils';

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

  // Live state (for live stream demo)
  isLive: boolean;
  setIsLive: (live: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [modal, setModal] = useState<ModalState>({ isOpen: false });
  const [isLive, setIsLive] = useState(false);

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

  return (
    <AppContext.Provider
      value={{
        showAnnouncement, dismissAnnouncement,
        searchOpen, setSearchOpen,
        chatOpen, setChatOpen,
        mobileMenuOpen, setMobileMenuOpen,
        toasts, addToast, removeToast,
        modal, openModal, closeModal,
        isLive, setIsLive,
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
