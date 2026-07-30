"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="inline-flex items-center p-1 rounded-full bg-slate-100 dark:bg-[#191a1d] border border-slate-200 dark:border-[#4D5156] shadow-inner transition-colors"
      role="radiogroup"
      aria-label="Color theme selection"
    >
      {/* Dark Theme Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        onClick={() => setTheme("dark")}
        title="Dark Mode"
        aria-label="Switch to Dark Mode"
        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
            : "text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      {/* System Theme Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        onClick={() => setTheme("system")}
        title="System Theme"
        aria-label="Switch to System Theme"
        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
            : "text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        {/* Half-circle system icon matching reference image */}
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18V4a8 8 0 010 16z" />
        </svg>
      </button>

      {/* Light Theme Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        onClick={() => setTheme("light")}
        title="Light Mode"
        aria-label="Switch to Light Mode"
        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
            : "text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  );
}
