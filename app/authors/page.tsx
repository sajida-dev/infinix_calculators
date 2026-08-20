import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllAuthors } from "../data/authorsData";

export const metadata: Metadata = {
  title: "Editorial Board & Formula Verification Team – Infinix Calculators",
  description: "Meet the certified public accountants, civil engineers, applied mathematicians, and clinical specialists who author and verify calculation tools on Infinix Calculators.",
  keywords: ["editorial team", "formula verification", "infinix authors", "cpa finance lead", "licensed civil engineer", "applied mathematics"],
  alternates: {
    canonical: "https://infinixcalculator.com/authors",
  },
};

export default function AuthorsIndexPage() {
  const authors = getAllAuthors();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 mb-3 inline-block">
            E-E-A-T Editorial Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Our Editorial &amp; Review Board
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every calculator formula, financial amortization schedule, material volume model, and reference guide published on Infinix Calculators is authored and peer-verified by credentialed subject-matter specialists.
          </p>
        </header>

        {/* Authors Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {authors.map((author) => (
            <div
              key={author.slug}
              className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {author.name}
                    </h2>
                    <p className="text-xs font-semibold text-primary dark:text-sky-400">
                      {author.jobTitle}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {author.credentials}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {author.bio}
                </p>

                <div className="space-y-2 mb-4">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Expertise:</span>
                  <div className="flex flex-wrap gap-1">
                    {author.expertise.slice(0, 3).map((exp, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 dark:bg-[#191a1d] px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#4D5156]">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-[#4D5156] flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified Formula Lead
                </span>
                <Link
                  href={`/authors/${author.slug}`}
                  className="text-xs font-bold text-primary dark:text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Full Profile &amp; Research</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
