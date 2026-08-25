'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { AI_RESPONSES, AI_SUGGESTIONS } from '@/lib/mock-data';

interface Message {
  sender: 'user' | 'ai';
  text: string;
  isWhatsApp?: boolean;
}

export function AIChat() {
  const { chatOpen, setChatOpen } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Hello! I am your Bethesda AI assistant. How can I help you today? Feel free to ask about service times, location, prayer, or events.',
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when messages change or chat opens
  useEffect(() => {
    if (chatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      // Check if user asked a long/complex question (> 45 chars or > 7 words)
      const trimmed = text.trim();
      const isBigQuestion = trimmed.length > 45 || trimmed.split(/\s+/).length > 7;

      if (isBigQuestion) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'For detailed queries, guidance, or personal support, please reach out to us directly through WhatsApp. Our pastoral team is happy to assist you!',
            isWhatsApp: true,
          },
        ]);
      } else {
        const response =
          AI_RESPONSES[text] ||
          'Thank you for asking! For specific inquiries, feel free to connect with our church office or reach out via WhatsApp at +91 97433 16337. God bless you!';
        setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
      }
    }, 500);
  };

  const whatsappUrl = `https://wa.me/919743316337?text=${encodeURIComponent('Hello Bethesda Church Team, I have a question regarding your ministry/services.')}`;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 left-6 z-[9999] flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-charcoal text-ivory border border-gold/40 shadow-elevated hover:bg-charcoal/90 hover:scale-105 transition-all duration-300 group"
        aria-label="Ask Bethesda AI"
      >
        <svg
          className="w-5 h-5 text-gold shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="text-sm font-semibold tracking-wider font-display text-gold group-hover:text-gold-soft">
          Ask Bethesda
        </span>
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-[10000] w-[calc(100vw-3rem)] max-w-sm sm:max-w-md bg-card text-card-foreground border border-sand rounded-3xl shadow-elevated overflow-hidden flex flex-col h-[480px] sm:h-[520px]"
          >
            {/* Header */}
            <div className="bg-charcoal text-ivory p-4 px-6 flex items-center justify-between border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-gold">Bethesda Assistant</h3>
                  <p className="text-[11px] text-ivory/70">Ask anything about Bethesda AG Church</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-ivory/60 hover:text-ivory p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Body with Auto-Scroll */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gold text-charcoal font-medium rounded-br-none shadow-sm'
                        : 'bg-cream text-charcoal border border-sand rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    {msg.isWhatsApp && (
                      <div className="mt-3 pt-2 border-t border-sand/60">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-sm"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.983z" />
                          </svg>
                          Contact Us Through WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            <div className="p-3 bg-cream/60 border-t border-sand overflow-x-auto no-scrollbar flex gap-2">
              {AI_SUGGESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-[11px] px-3 py-1.5 bg-white border border-sand rounded-full text-charcoal hover:border-gold whitespace-nowrap shrink-0 transition-colors font-medium"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3.5 border-t border-sand flex items-center gap-2 bg-card">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-input border border-sand rounded-xl text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 rounded-xl bg-gold text-white dark:text-charcoal hover:bg-gold-dark font-bold transition-colors shrink-0"
                aria-label="Send message"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
