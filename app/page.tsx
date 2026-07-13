import Link from "next/link";
import { calculatorsData } from "./data/calculatorsData";
import { blogData } from "./data/blogData";
import SearchInput from "./components/SearchInput";
import BlogCard from "./components/BlogCard";
import TopsoilCalculator from "./components/TopsoilCalculator";
import { categoriesList } from "./data/CategoryData";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infinix Calculators – Professional Tools for Finance, Construction & Landscaping',
  description: 'Run business financial models, construction material estimates, health metrics, and 30+ professional calculators instantly. No registration required.',
  keywords: ['calculators', 'financial calculator', 'construction calculator', 'topsoil calculator', 'CBM calculator', 'concrete calculator', 'business finance', 'free online calculators'],
  // Add more SEO parameters
  alternates: {
    canonical: 'https://infinixcalculator.com/', // Replace with your actual domain
  },
  openGraph: {
    title: 'Infinix Calculators – Professional Tools for Finance, Construction & Landscaping',
    description: 'Run business financial models, construction material estimates, health metrics, and 30+ professional calculators instantly. No registration required.',
    url: 'https://infinixcalculator.com/',
    siteName: 'Infinix Calculators',
    images: [
      {
        url: 'https://infinixcalculator.com/og-image.png', // Optional: Add your OG image
        width: 1200,
        height: 630,
        alt: 'Infinix Calculators Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinix Calculators – Professional Tools for Finance, Construction & Landscaping',
    description: 'Run business financial models, construction material estimates, health metrics, and 30+ professional calculators instantly. No registration required.',
    images: ['https://infinixcalculator.com/og-image.png'], // Optional: Add your Twitter image
    creator: '@yourtwitterhandle', // Optional: Add your Twitter handle
  },
};

export default function Home() {

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

      {/* 1.5. Featured Topsoil Calculator Showcase */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              Featured Tool
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Topsoil Calculator – Our Most Popular Tool
            </h2>
            <p className="mt-4 text-slate-600">
              Planning a garden bed, lawn topdressing, or landscaping project? Quickly calculate the exact volume of soil, mulch, or compost you need, in yards, cubic feet, or tons.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TopsoilCalculator />
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
              All Calculators →
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
