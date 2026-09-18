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
    <section className={`calculator-review flex flex-wrap items-center justify-between gap-3 text-xs ${className}`} aria-label="Editorial review">
      <div className="flex items-center gap-2.5">
        <Link href={`/authors/${author.slug}`} className="shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            width={28}
            height={28}
            className="w-7 h-7 rounded-full object-cover"
          />
        </Link>
        <div className="text-slate-600 dark:text-slate-400">
          <span>Reviewed by </span>
          <Link
            href={`/authors/${author.slug}`}
            className="font-medium text-slate-900 dark:text-slate-200 hover:underline"
          >
            {author.name}
          </Link>
          <span className="text-slate-400 dark:text-slate-500"> ({author.credentials})</span>
        </div>
      </div>

      <div className="text-slate-500 dark:text-slate-400 text-[11px] flex items-center gap-2">
        <span>Formula and assumptions reviewed</span>
        <span aria-hidden="true">•</span>
        <span>Estimate only</span>
      </div>
    </section>
  );
}

