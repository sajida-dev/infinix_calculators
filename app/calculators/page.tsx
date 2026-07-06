import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { calculatorsData } from "../data/calculatorsData";
import { blogData } from "../data/blogData";
import CalculatorCard from "../components/CalculatorCard";
import SearchInput from "../components/SearchInput";
import { categoriesList } from "../data/CategoryData";
interface PageProps {
  searchParams: Promise<{ q?: string }>;
}


const metadata: Metadata = {
  metadataBase: new URL("https://infinixcalculator.com"),

  title: "All Online Calculators | Free Business, Finance, Health & Construction Calculators",

  description:
    "Browse hundreds of free online calculators for business, finance, health, construction, math, landscaping, loans, taxes, unit conversions, and everyday calculations. Fast, accurate, and mobile-friendly.",

  keywords: [
    "online calculators",
    "free calculators",
    "calculator directory",
    "business calculators",
    "finance calculators",
    "construction calculators",
    "health calculators",
    "math calculators",
    "unit converters",
    "percentage calculator",
    "loan calculator",
    "mortgage calculator",
    "topsoil calculator",
    "top soil calculator",
    "concrete calculator",
    "cbm calculator",
    "affirm calculator",
    "productivity calculator",
    "cost calculators",
    "estimators",
    "calculation tools",
    "lsat score calculator",
    "lsat score converter",
    "therapy productivity calculator",
    "how to calculate productivity",
    "law school predictor",
    "good lsat score",
    "lsat demon scholarship estimator",
    "lsat raw score conversion",
    "lsat top score",
    "how long is lsat",
    "how many questions are on the lsat",
    "what's a good lsat score",
    "lsat average score",
    "normal lsat score",
    "fill dirt calculator",
    "how much fill dirt do i need"
  ],

  alternates: {
    canonical: "https://infinixcalculator.com/calculators",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Free Online Calculators Directory | Infinix Calculators",

    description:
      "Discover hundreds of free online calculators covering finance, business, health, construction, landscaping, education, taxes, and more.",

    url: "https://infinixcalculator.com/calculators",

    siteName: "Infinix Calculators",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og/calculators-directory.webp",
        width: 1200,
        height: 630,
        alt: "Infinix Calculators Directory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Free Online Calculators Directory | Infinix Calculators",

    description:
      "Browse hundreds of free online calculators for finance, business, health, construction, and everyday calculations.",

    images: [
      "/images/og/calculators-directory.webp",
    ],
  },

  category: "Technology",

  creator: "Infinix Calculators",

  publisher: "Infinix Calculators",
};


export default async function CalculatorsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const searchQuery = (searchParams.q || "").trim().toLowerCase();
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
