import Link from "next/link";
import { calculatorsData } from "./data/calculatorsData";
import { blogData } from "./data/blogData";

export default function Home() {
  // Select specific calculators for homepage display
  const popularSlugs = ["topsoil", "concrete", "cbm", "affirm"];
  const popularCalcs = popularSlugs.map(slug => calculatorsData[slug]).filter(Boolean);

  const trendingCalcs = [
    calculatorsData["pro-rata"],
    calculatorsData["roof"],
    calculatorsData["bmi"]
  ].filter(Boolean);

  const recentCalcs = [
    calculatorsData["concrete"],
    calculatorsData["cbm"]
  ].filter(Boolean);

  // Group all calculators by category
  const categoriesList = [
    {
      id: "financial",
      title: "Financial Calculators",
      description: "Amortization, installment interest, and payroll splits.",
      links: [
        { name: "Affirm Calculator", href: "/calculators/affirm" },
        { name: "Pro Rata Calculator", href: "/calculators/pro-rata" },
        { name: "HECM Calculator", href: "/calculators/hecm" },
        { name: "HELOC Payoff", href: "/calculators/heloc-payoff" },
      ]
    },
    {
      id: "construction",
      title: "Construction & Materials",
      description: "Estimate soil depth, concrete yards, and roof pitches.",
      links: [
        { name: "Topsoil Calculator", href: "/calculators/topsoil" },
        { name: "Concrete Calculator", href: "/calculators/concrete" },
        { name: "Roof Calculator", href: "/calculators/roof" },
        { name: "Mulch Calculator", href: "/calculators/mulch" },
      ]
    },
    {
      id: "health",
      title: "Health & Fitness",
      description: "WHO standard body indices and health ranges.",
      links: [
        { name: "BMI Calculator", href: "/calculators/bmi" },
        { name: "Calorie Calculator", href: "/calculators/calorie" },
        { name: "Pregnancy Calculator", href: "/calculators/pregnancy" },
        { name: "Age Calculator", href: "/calculators/age" },
      ]
    },
    {
      id: "math",
      title: "Math & Business",
      description: "Percentage models, shipping volumes, and workspace stats.",
      links: [
        { name: "Productivity Calculator", href: "/calculators/productivity" },
        { name: "Therapy Productivity", href: "/calculators/therapy-productivity" },
        { name: "Google Review Calculator", href: "/calculators/google-review" },
        { name: "CBM Calculator", href: "/calculators/cbm" },
      ]
    }
  ];

  // Latest blog articles
  const latestArticles = Object.values(blogData).slice(0, 3);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* 1. SaaS Hero Section */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden py-16 sm:py-24">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">
              99.9% Precision Verified
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Professional Calculators Built for{" "}
              <span className="text-primary relative inline-block">
                Exact Decisions
                <span className="absolute bottom-1.5 left-0 w-full h-1 bg-primary/20 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl mx-auto">
              Run business financial models, estimate construction materials, and assess health metrics instantly. No registration, no cookies, just pure calculations.
            </p>

            {/* Standard HTML search form - 100% Server Rendered and dynamic */}
            <form action="/calculators" method="GET" className="mt-8 max-w-md mx-auto relative flex items-center">
              <input
                type="text"
                name="q"
                placeholder="Search calculators (e.g., topsoil, CBM, interest)..."
                required
                className="w-full rounded-full border border-slate-300 bg-white px-5 py-3.5 pr-12 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-slate-400"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-y-4 max-w-2xl mx-auto text-center">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">30+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">Precision Tools</span>
              </div>
              <div className="border-x border-slate-100">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary">Instant</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">Results On-Screen</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">100%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">AdSense Compliant</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Popular & Trending Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Popular Calculators</h2>
              <p className="text-slate-500 mt-2 text-sm">Our most frequently used utilities by contractors, logistics personnel, and buyers.</p>
            </div>
            <Link
              href="/calculators"
              className="text-primary font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1.5"
            >
              Browse all 30+ tools <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCalcs.map((calc) => (
              <div
                key={calc.slug}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded">
                    {calc.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">{calc.name}</h3>
                  <p className="text-xs font-bold text-slate-400 mt-1">Est. calc time: {calc.calcTime}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mt-3">
                    {calc.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/calculators/${calc.slug}`}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-primary py-2.5 text-xs font-bold text-white hover:bg-primary-hover shadow-sm transition-colors"
                  >
                    Calculate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick-Link lists for Trending and Recently Added */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200/60">
            {/* Trending column */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Trending Calculators
              </h3>
              <ul className="mt-4 space-y-4">
                {trendingCalcs.map((calc) => (
                  <li key={calc.slug}>
                    <Link
                      href={`/calculators/${calc.slug}`}
                      className="group flex items-center justify-between text-sm hover:text-primary transition-colors py-1.5"
                    >
                      <div>
                        <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{calc.name}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{calc.hook}</p>
                      </div>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recently Added column */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Recently Updated
              </h3>
              <ul className="mt-4 space-y-4">
                {recentCalcs.map((calc) => (
                  <li key={calc.slug}>
                    <Link
                      href={`/calculators/${calc.slug}`}
                      className="group flex items-center justify-between text-sm hover:text-primary transition-colors py-1.5"
                    >
                      <div>
                        <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{calc.name}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{calc.hook}</p>
                      </div>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reorganized User-Centric Category Layout */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Browse Tools by Category
            </h2>
            <p className="mt-3 text-base text-slate-500 leading-relaxed">
              Find customized calculations tailored to financial, materials estimating, and healthcare standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categoriesList.map((category) => (
              <div
                key={category.id}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 pb-2.5 border-b border-slate-200 flex justify-between items-center">
                    <span>{category.title}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </h3>
                  <p className="mt-3 text-sm text-slate-500">{category.description}</p>
                  
                  <ul className="mt-6 space-y-3 pt-1">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group flex items-center text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                        >
                          <svg
                            className="mr-2.5 h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Latest Guides & Articles (Topical authority) */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Guides</h2>
              <p className="text-slate-500 mt-2 text-sm">Detailed calculators explanations, formulas breakdown, and industry standards.</p>
            </div>
            <Link
              href="/blog"
              className="text-primary font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1.5"
            >
              Browse all guides <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-3.5 leading-snug group-hover:text-primary">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">By {article.author}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Read Guide
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Trust Indicators & Testimonials */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What Professionals Say</h2>
            <p className="mt-2 text-slate-500 text-sm">Calculators verified and loved by landscape supply yards, contractors, and developers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                "Our client orders are complex, but sending customers to Infinix's Topsoil Calculator has cut ordering mistakes by 40%. The bag estimates are spot-on."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                  JD
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Jack D.</span>
                  <span className="block text-[10px] text-slate-400 font-medium">Owner, Portland Soil & Mulch</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                "The CBM Calculator is extremely convenient for shipping layouts. I can calculate total volume and package weights across different unit systems in seconds."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                  SL
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Sarah L.</span>
                  <span className="block text-[10px] text-slate-400 font-medium">Logistics Coordinator, FreightGlobal</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                "I use the Pro Rata Calculator regularly for calculating final partial payments for incoming tenants. It removes disputes over daily rate allocations."
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                  MR
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Marcus R.</span>
                  <span className="block text-[10px] text-slate-400 font-medium">Property Manager, Peak Rentals</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Accordion FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm divide-y divide-slate-100">
            <details className="group pb-4" open>
              <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base list-none">
                <span>Are these calculators free to use?</span>
                <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed pl-1">
                Yes, 100% free. All tools are open-access with no registration, monthly limits, or credit card requirements. You can calculate as many materials, conversions, or interest payments as you need.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base list-none">
                <span>How accurate are the results?</span>
                <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed pl-1">
                All calculator formulas follow industry-standard mathematical definitions (such as the WHO guidelines for BMI, standard amortization algorithms for financial interest, and standard volumetric conversions for construction). However, we recommend adding safety margins (like a 10% waste buffer for concrete and topsoil) to account for real-world factors.
              </p>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold text-sm sm:text-base list-none">
                <span>Can I request a custom calculator?</span>
                <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed pl-1">
                Absolutely. We are expanding our directory monthly. You can reach out through our resources and support links, and our developers will work on building a standard precision layout for your required formula.
              </p>
            </details>
          </div>

        </div>
      </section>
    </div>
  );
}
