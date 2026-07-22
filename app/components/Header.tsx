"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriesList } from "../data/CategoryData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
      <div className="rounded-2xl border border-slate-200/80 bg-white/75 backdrop-blur-md px-5 py-3 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300">
        
        {/* Logo Branding */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/infinix-calculator-brand-logo.webp"
              alt="Infinix Calculators"
              width={140}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-primary transition-colors py-2">
            Home
          </Link>

          {/* Calculators Dropdown */}
          <div className="relative group">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors py-2"
            >
              <span>Calculators</span>
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Pure CSS Hover Dropdown */}
            <div className="absolute left-0 mt-1 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-lg hidden group-hover:block z-50">
              <ul className="space-y-1">
                {categoriesList.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/calculators#${cat.id}`} className="block rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/blog" className="hover:text-primary transition-colors py-2">
            Blog & Guides
          </Link>

          <Link href="/about" className="hover:text-primary transition-colors py-2">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-primary transition-colors py-2">
            Contact
          </Link>
        </nav>

        {/* Right side Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/calculators"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-hover shadow-md shadow-primary/10 hover:shadow-primary-lg"
          >
            All Calculators
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-100/80 text-slate-500 hover:text-slate-800 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Expandable Drawer */}
      {open && (
        <div className="md:hidden rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-4 mt-2 shadow-lg flex flex-col gap-2 transition-all duration-300">
          <Link 
            href="/" 
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/calculators" 
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Calculators
          </Link>
          {/* Collapsible/Indented list of categories for mobile */}
          <div className="pl-4 flex flex-col gap-1 border-l border-slate-100 ml-3">
            {categoriesList.map((cat) => (
              <Link 
                key={cat.id} 
                href={`/calculators#${cat.id}`}
                className="text-xs font-semibold text-slate-500 hover:text-primary py-1"
                onClick={() => setOpen(false)}
              >
                {cat.title}
              </Link>
            ))}
          </div>
          <Link 
            href="/blog" 
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog & Guides
          </Link>
          <Link 
            href="/about" 
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
