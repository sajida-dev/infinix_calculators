import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAuthorForCategory, getAuthorBySlug } from "../data/authorsData";

interface CalculatorReviewBadgeProps {
  category: string;
  authorSlug?: string;
  className?: string;
}

export default function CalculatorReviewBadge({ category, authorSlug, className = "" }: CalculatorReviewBadgeProps) {
  const author = authorSlug ? getAuthorBySlug(authorSlug) : getAuthorForCategory(category);

  return (
    <div className={`p-4 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] shadow-xs flex flex-wrap items-center justify-between gap-4 transition-colors ${className}`}>
      <div className="flex items-center gap-3">
        <Link href={`/authors/${author.slug}`} className="relative shrink-0 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#22242A]" />
        </Link>

        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Formula Verified &amp; Maintained by:
            </span>
            <Link
              href={`/authors/${author.slug}`}
              className="text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-sky-400 transition-colors"
            >
              {author.name}
            </Link>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">
            {author.credentials} • {author.jobTitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-[11px]">
        <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Peer-Reviewed Algorithm
        </span>
        <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
          Audited for 2026 Rules
        </span>
      </div>
    </div>
  );
}
