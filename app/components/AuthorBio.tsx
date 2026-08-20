import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Author, getAuthorBySlug, getAuthorForCategory } from "../data/authorsData";

interface AuthorBioProps {
  authorSlug?: string;
  category?: string;
  className?: string;
}

export default function AuthorBio({ authorSlug, category, className = "" }: AuthorBioProps) {
  const author: Author = authorSlug
    ? getAuthorBySlug(authorSlug)
    : category
      ? getAuthorForCategory(category)
      : getAuthorBySlug("david-miller");

  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-[#4D5156] bg-slate-50/70 dark:bg-[#22242A]/60 p-5 sm:p-6 transition-colors ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
        {/* Author Avatar Thumbnail */}
        <Link href={`/authors/${author.slug}`} className="shrink-0 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-slate-200 dark:border-[#4D5156] group-hover:border-primary transition-colors">
            <Image
              src={author.avatar}
              alt={author.name}
              width={64}
              height={64}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </Link>

        {/* Bio Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-0.5">
                Written by
              </span>
              <Link href={`/authors/${author.slug}`} className="group">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                  {author.name}
                </h3>
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {author.jobTitle}
              </p>
            </div>

            <Link
              href={`/authors/${author.slug}`}
              className="text-xs font-semibold text-primary dark:text-sky-400 hover:underline"
            >
              View Profile &amp; Articles →
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
