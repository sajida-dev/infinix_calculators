"use client";

import { useState } from "react";

export default function AdFooter() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] h-20 flex items-center justify-center transition-transform duration-200 animate-in slide-in-from-bottom duration-300">
      <div className="relative w-full max-w-7xl px-4 flex items-center justify-between">
        
        {/* Ad Placeholder Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-50">
              Advertisement
            </span>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Footer Anchor Ad Slot (728x90 Leaderboard / Responsive Anchor)
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          aria-label="Close Ad"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  );
}
