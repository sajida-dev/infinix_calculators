"use client";

import { useState } from "react";
import AdBanner from "./AdBanner";

export default function AdFooter() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Bottom Banner Advertisement"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#22242A]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#4D5156] shadow-lg py-2 flex items-center justify-center transition-transform duration-200"
    >
      <div className="relative w-full max-w-7xl px-4 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center">
          <AdBanner className="my-0 w-full" adFormat="horizontal" />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#191a1d] transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          aria-label="Close Advertisement"
          title="Close Ad"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
