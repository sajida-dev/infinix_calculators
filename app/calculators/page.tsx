import type { Metadata } from "next";
import Link from "next/link";
import { calculatorsData } from "../data/calculatorsData";
import { blogData } from "../data/blogData";
import CalculatorCard from "../components/CalculatorCard";
import SearchInput from "../components/SearchInput";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  title: "Precision Calculators Directory - Infinix Tools",
  description: "Browse our directory of professional financial, construction, health, math, and unit converter calculators. Instant results, zero registration.",
  keywords: ["calculators directory", "all calculators", "infinix tools", "online estimators"],
};

export default async function CalculatorsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const searchQuery = (searchParams.q || "").trim().toLowerCase();

  // Define Category Headers and their respective SVGs for the circular icons
  const categoriesList = [
    {
      id: "financial",
      title: "Financial Calculators",
      desc: "Amortization, loans, and interest planning.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      slugs: ["affirm", "pro-rata", "hecm", "heloc-payoff", "balance-transfer", "square-fee"]
    },
    {
      id: "tax",
      title: "Tax & Payroll Calculators",
      desc: "Sales tax extraction and state payroll paycheck estimations.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      slugs: ["avalara-sales-tax", "gross-up", "reverse-tax", "georgia-payroll"]
    },
    {
      id: "construction",
      title: "Construction & Materials",
      desc: "Slab volume, soil yardage, overhangs, and slope factors.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      slugs: ["topsoil", "concrete", "roof", "mulch", "drywall", "fence-cost"]
    },
    {
      id: "health",
      title: "Health & Fitness Tools",
      desc: "WHO body index formulas and health composition guides.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      slugs: ["bmi"]
    },
    {
      id: "math",
      title: "Math & Business Productivity",
      desc: "Review totals targets and workspace efficiency indices.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      slugs: ["productivity", "therapy-productivity", "google-review"]
    },
    {
      id: "unit-converter",
      title: "Logistics & Converters",
      desc: "Carton volumes in CBM and CFT container limits.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      slugs: ["cbm"]
    }
  ];

  // Helper lists for the right sidebar (stubs / upcoming work)
  const popularSlugs = ["topsoil", "concrete", "cbm", "affirm"];
  const popularCalcs = popularSlugs.map(s => calculatorsData[s]).filter(Boolean);

  const upcomingCalcs = [
    { name: "Siding Estimator", desc: "Wall cladding and flashing panel boards." },
    { name: "IFTA Fuel Tax", desc: "State mileage splits and fuel tax." },
    { name: "Deferred Annuity", desc: "Annuity future value growth factors." },
    { name: "IUL Growth", desc: "Indexed universal life policy growth." }
  ];

  const recentBlogs = Object.values(blogData).slice(0, 3);

  // If search query is active, filter results and render matching cards instead
  const allCalcsFlat = Object.values(calculatorsData);
  const searchResults = allCalcsFlat.filter((calc) => {
    if (!searchQuery) return false;
    return (
      calc.name.toLowerCase().includes(searchQuery) ||
      calc.description.toLowerCase().includes(searchQuery) ||
      calc.hook.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Prominent Header block with Search */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Browse Help Topics & Calculators
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Find formulas, examples, and interactive calculators for financial splits, state tax paycheck withholding, and landscaping materials.
          </p>

          {/* Reusable Autocomplete Search component */}
          <div className="mt-8">
            <SearchInput
              variant="standard"
              defaultValue={searchQuery}
              placeholder="Search calculator topics (e.g. topsoil, CBM, interest)..."
            />
          </div>
        </div>

        {/* 1. Search Results Layout */}
        {searchQuery ? (
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              Search Results for "{searchQuery}" ({searchResults.length} matches found)
            </h2>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((calc) => (
                  <CalculatorCard key={calc.slug} calculator={calc} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
                <p className="text-sm text-slate-500 font-semibold">No calculator matches found.</p>
                <Link
                  href="/calculators"
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-xs font-bold text-white hover:bg-primary-hover transition-colors"
                >
                  Browse all topics
                </Link>
              </div>
            )}
          </div>
        ) : (

          /* 2. Standard Help Center Layout (Two columns grid: Categories list + Sidebar) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column (8 cols on desktop): Browse help topics list */}
            <div className="lg:col-span-8 space-y-12">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                All Calculators
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoriesList.map((cat) => (
                  <div key={cat.id} className="space-y-4">
                    {/* Category Title with Blue circular icon */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm shrink-0">
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-base font-bold text-slate-900 leading-tight">
                          {cat.title}
                        </h3>
                        <p className="text-[14px] text-slate-400 mt-0.5">{cat.desc}</p>
                      </div>
                    </div>

                    {/* Calculator lists under this category */}
                    <ul className="space-y-3.5 pl-11">
                      {cat.slugs.map((slug) => {
                        const calc = calculatorsData[slug];
                        if (!calc) return null;
                        return (
                          <li key={slug}>
                            <Link href={`/calculators/${slug}`} className="group block text-md hover:text-primary transition-all">
                              <span className="block text-primary group-hover:text-primary transition-colors leading-snug">
                                {calc.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar Column (4 cols on desktop, flat transparent layout) */}
            <div className="lg:col-span-4 space-y-10 pl-0 lg:pl-6">

              {/* Popular calculators (No card bg) */}
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Popular Tools
                </h3>
                <ul className="space-y-3">
                  {popularCalcs.map((calc) => (
                    <li key={calc.slug}>
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="group flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-0.5"
                      >
                        <span>{calc.name}</span>
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent guides (No card bg) */}
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Guides & Cost Reports
                </h3>
                <ul className="space-y-3">
                  {recentBlogs.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block text-xs hover:text-primary transition-colors"
                      >
                        <span className="block font-semibold text-slate-700 group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </span>
                        <span className="block text-[8px] text-slate-400 mt-1">{post.date}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problems we're fixing (No card bg) */}
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Problems we're fixing
                </h3>
                <ul className="space-y-3.5">
                  {upcomingCalcs.map((item) => (
                    <li key={item.name} className="text-xs leading-normal">
                      <span className="block font-bold text-slate-500">{item.name}</span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Ad Unit 1 */}
              {/* <div className="py-4 text-center">
                <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-150">
                  Advertisement
                </span>
                <div className="mt-4 py-12 text-xs font-semibold text-slate-400 border border-dashed border-slate-300 rounded-xl bg-slate-100/50">
                  Sidebar Display Banner 1
                </div>
              </div> */}

              {/* Sidebar Ad Unit 2 (Fills empty vertical space down to page end) */}
              {/* <div className="py-4 text-center">
                <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-150">
                  Advertisement
                </span>
                <div className="mt-4 py-16 text-xs font-semibold text-slate-400 border border-dashed border-slate-300 rounded-xl bg-slate-100/50">
                  Sidebar Display Banner 2
                </div>
              </div> */}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
