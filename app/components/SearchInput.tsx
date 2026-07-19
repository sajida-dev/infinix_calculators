"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { calculatorsData } from "../data/calculatorsData";

interface SearchInputProps {
  placeholder?: string;
  variant?: "large" | "standard" | "minimal";
  defaultValue?: string;
  name?: string;
}

export default function SearchInput({
  placeholder = "Search calculators...",
  variant = "standard",
  defaultValue = "",
  name = "q",
}: SearchInputProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close suggestions on clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync with default values (e.g. on navigation back/forward)
  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);

  // Compute suggestions
  const handleInputChange = (val: string) => {
    setQuery(val);
    const normalized = val.trim().toLowerCase();
    if (!normalized) {
      setSuggestions([]);
      return;
    }

    const matches = Object.values(calculatorsData)
      .filter(
        (calc) =>
          calc.name.toLowerCase().includes(normalized) ||
          calc.categoryLabel.toLowerCase().includes(normalized) ||
          calc.description.toLowerCase().includes(normalized)
      )
      .slice(0, 5); // Limit suggestions to 5 results

    setSuggestions(matches);
    setIsOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/calculators?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const selectSuggestion = (slug: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/calculators/${slug}`);
  };

  // Rendering variations based on layout needs
  if (variant === "large") {
    return (
      <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleFormSubmit}
          className="relative flex items-center shadow-lg rounded-2xl bg-white border border-slate-200/85 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200"
        >
          <div className="pl-5 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            name={name}
            value={query}
            onFocus={() => query.trim() && setIsOpen(true)}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder || "Search calculators"}
            className="w-full bg-transparent px-4 py-4 sm:py-5 text-sm sm:text-base text-slate-900 focus:outline-none placeholder-slate-400"
            autoComplete="off"
          />
          <button
            type="submit"
            className="mr-2 rounded-xl bg-primary px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white hover:bg-primary-hover transition-colors shadow-sm"
          >
            Search
          </button>
        </form>

        {/* Floating suggestion box */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden z-50 text-left">
            <ul className="divide-y divide-slate-100">
              {suggestions.map((calc) => (
                <li key={calc.slug}>
                  <button
                    type="button"
                    onClick={() => selectSuggestion(calc.slug)}
                    className="w-full text-left px-5 py-3 hover:bg-slate-50 transition-colors flex flex-col"
                  >
                    <span className="text-xs font-bold text-slate-900">{calc.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{calc.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div ref={containerRef} className="relative w-full">
        <form onSubmit={handleFormSubmit} className="relative flex items-center">
          <input
            type="text"
            name={name}
            value={query}
            onFocus={() => query.trim() && setIsOpen(true)}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder || "Search calculators"}
            className="w-full bg-transparent border-b border-slate-300 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary placeholder-slate-400"
            autoComplete="off"
          />
          <button type="submit" className="absolute right-0 text-slate-400 hover:text-slate-600" aria-label="Search Submit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* Minimal suggestion box */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 mt-1 bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden z-50">
            <ul className="divide-y divide-slate-100">
              {suggestions.map((calc) => (
                <li key={calc.slug}>
                  <button
                    type="button"
                    onClick={() => selectSuggestion(calc.slug)}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors flex flex-col"
                  >
                    <span className="text-[11px] font-bold text-slate-800">{calc.name}</span>
                    <span className="text-[9px] text-slate-400 mt-0.5 line-clamp-1">{calc.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Standard (Default variant)
  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <form
        onSubmit={handleFormSubmit}
        className="relative flex items-center shadow-xs rounded-xl bg-white border border-slate-200 focus-within:ring-2 focus-within:ring-primary/10"
      >
        <div className="pl-4 text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          name={name}
          value={query}
          onFocus={() => query.trim() && setIsOpen(true)}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder || "Search calculators"}
          className="w-full bg-transparent px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:outline-none placeholder-slate-400"
          autoComplete="off"
        />
      </form>

      {/* Floating suggestion box */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-1.5 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden z-50 text-left">
          <ul className="divide-y divide-slate-100">
            {suggestions.map((calc) => (
              <li key={calc.slug}>
                <button
                  type="button"
                  onClick={() => selectSuggestion(calc.slug)}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors flex flex-col"
                >
                  <span className="text-[11px] font-bold text-slate-800">{calc.name}</span>
                  <span className="text-[9px] text-slate-400 mt-0.5 line-clamp-1">{calc.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
