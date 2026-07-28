"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface BlogFilterBarProps {
  categories: string[];
  categoryCounts: Record<string, number>;
  authors: string[];
  selectedCategory: string;
  selectedAuthor: string;
  selectedSort: string;
  searchQuery: string;
}

export default function BlogFilterBar({
  categories,
  categoryCounts,
  authors,
  selectedCategory,
  selectedAuthor,
  selectedSort,
  searchQuery,
}: BlogFilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Sync input if URL query changes externally
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const updateFilters = (updates: {
    category?: string;
    author?: string;
    sort?: string;
    q?: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    // Reset pagination on filter change
    params.delete("page");

    if (updates.category !== undefined) {
      if (updates.category === "All") params.delete("category");
      else params.set("category", updates.category);
    }

    if (updates.author !== undefined) {
      if (updates.author === "All") params.delete("author");
      else params.set("author", updates.author);
    }

    if (updates.sort !== undefined) {
      if (updates.sort === "newest") params.delete("sort");
      else params.set("sort", updates.sort);
    }

    if (updates.q !== undefined) {
      const trimmed = updates.q.trim();
      if (!trimmed) params.delete("q");
      else params.set("q", trimmed);
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: localQuery });
  };

  const clearAllFilters = () => {
    setLocalQuery("");
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedAuthor !== "All" ||
    selectedSort !== "newest" ||
    Boolean(searchQuery);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-xs mb-10 space-y-6">
      {/* Top Search Bar Row */}
      <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg
            className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search guides by keyword, topic, author, or formula..."
            className="w-full pl-11 pr-9 py-3 bg-slate-50 border border-slate-200/90 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 font-medium"
          />
          {localQuery && (
            <button
              type="button"
              onClick={() => {
                setLocalQuery("");
                updateFilters({ q: "" });
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold p-1 rounded-md"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-xs transition-colors shrink-0 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            "Search Articles"
          )}
        </button>
      </form>

      {/* Category Filter Pills with Counts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            Topic Categories
          </span>
          {selectedCategory !== "All" && (
            <button
              type="button"
              onClick={() => updateFilters({ category: "All" })}
              className="text-[11px] font-semibold text-primary hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => updateFilters({ category: cat })}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isActive
                  ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                  }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-500"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Controls: Author, Sort & Active Filter Chips */}
      <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Author Filter Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="author-select" className="text-xs font-bold text-slate-500 shrink-0">
              Author:
            </label>
            <select
              id="author-select"
              value={selectedAuthor}
              onChange={(e) => updateFilters({ author: e.target.value })}
              className="bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer w-44 sm:w-81"
            >
              {authors.map((auth) => (
                <option key={auth} value={auth}>
                  {auth}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-xs font-bold text-slate-500 shrink-0">
              Sort By:
            </label>
            <select
              id="sort-select"
              value={selectedSort}
              onChange={(e) => updateFilters({ sort: e.target.value })}
              className="bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer w-44 sm:w-81"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips & Clear All */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-bold">
                Category: {selectedCategory}
                <button
                  type="button"
                  onClick={() => updateFilters({ category: "All" })}
                  className="hover:text-primary-hover font-extrabold"
                >
                  ✕
                </button>
              </span>
            )}

            {selectedAuthor !== "All" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-bold">
                Author: {selectedAuthor}
                <button
                  type="button"
                  onClick={() => updateFilters({ author: "All" })}
                  className="hover:text-primary-hover font-extrabold"
                >
                  ✕
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-bold">
                Query: "{searchQuery}"
                <button
                  type="button"
                  onClick={() => {
                    setLocalQuery("");
                    updateFilters({ q: "" });
                  }}
                  className="hover:text-primary-hover font-extrabold"
                >
                  ✕
                </button>
              </span>
            )}

            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 underline transition-colors ml-2"
            >
              Reset All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
