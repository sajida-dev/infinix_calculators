"use client";

import { useState } from "react";
import Link from "next/link";
import { categoriesList } from "../data/CategoryData";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2.5 min-h-11 min-w-11 flex items-center justify-center rounded-xl hover:bg-slate-100/80 dark:hover:bg-dark-bg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {open && (
        <div className="md:hidden rounded-2xl border border-slate-200/80 dark:border-dark-border bg-white/95 dark:bg-dark-card/95 backdrop-blur-md p-4 mt-2 shadow-lg flex flex-col gap-1 transition-all duration-300">
          <Link href="/" className="rounded-lg px-3.5 py-2.5 min-h-11 flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/calculators" className="rounded-lg px-3.5 py-2.5 min-h-11 flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors" onClick={() => setOpen(false)}>
            Calculators
          </Link>
          <div className="pl-4 flex flex-col gap-1 border-l border-slate-200 dark:border-dark-border ml-3">
            {categoriesList.map((cat) => (
              <Link
                key={cat.id}
                href={`/calculators#${cat.id}`}
                className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-300 py-2 min-h-9.5 flex items-center"
                onClick={() => setOpen(false)}
              >
                {cat.title}
              </Link>
            ))}
          </div>
          <Link href="/blog" className="rounded-lg px-3.5 py-2.5 min-h-11 flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors" onClick={() => setOpen(false)}>
            Blog &amp; Guides
          </Link>
          <Link href="/about" className="rounded-lg px-3.5 py-2.5 min-h-11 flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="rounded-lg px-3.5 py-2.5 min-h-11 flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
