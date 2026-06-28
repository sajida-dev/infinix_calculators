import Link from "next/link";
import { calculatorsData } from "./data/calculatorsData";
import { blogData } from "./data/blogData";
import SearchInput from "./components/SearchInput";
import BlogCard from "./components/BlogCard";

export default function Home() {
  // Define Category Headers and their respective SVGs for the circular icons (matching /calculators directory layout)
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

  // Latest blog articles
  const latestArticles = Object.values(blogData).slice(0, 3);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* 1. SaaS Hero Section */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden py-15 sm:py-28">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1]">
              Professional Calculators Built for{" "}
              <span className="text-primary relative inline-block">
                Exact Decisions
                <span className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Run business financial models, estimate construction materials, and assess health metrics instantly. No registration, no cookies, just pure calculations.
            </p>

            {/* Reusable Search Bar with Autocomplete Suggestions */}
            <div className="mt-10">
              <SearchInput
                variant="large"
                placeholder="Search 30+ calculators (e.g. topsoil, CBM, interest)..."
              />
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-y-4 max-w-2xl mx-auto text-center">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">30+</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Precision Tools</span>
              </div>
              <div className="border-x border-slate-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">Instant</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Results On-Screen</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">100%</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">AdSense Ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Structured Directories categories block (Pinterest-style listing directly on Homepage) */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 border-b border-slate-200 pb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Browse Calculator Topics</h2>
              <p className="text-slate-500 mt-2 text-xs sm:text-sm">
                Explore individual calculator utilities organized by functional industry.
              </p>
            </div>
            <Link href="/calculators" className="text-primary font-bold text-xs sm:text-sm hover:underline">
              All Tools Directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoriesList.map((cat) => (
              <div key={cat.id} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.desc}
                    </p></div>
                </div>

                {/* Vertical list of matching calculators */}
                <ul className="space-y-3.5 pl-11">
                  {cat.slugs.map((slug) => {
                    const calc = calculatorsData[slug];
                    if (!calc) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/calculators/${slug}`} className="group block text-base hover:text-primary transition-all">
                          <span className="block font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                            {calc.name}
                          </span>
                          <span className="block text-sm text-slate-400 group-hover:text-slate-500 transition-colors mt-0.5 leading-normal">
                            {calc.description}
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
      </section>

      {/* 3. Featured Guides Blog Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Featured Guides & Cost Studies</h2>
              <p className="text-slate-500 mt-2 text-sm sm:text-base">
                In-depth articles and mathematical breakdowns compiled by our industry experts.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-primary font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1.5"
            >
              Browse all articles <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <BlogCard key={article.slug} post={article} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
