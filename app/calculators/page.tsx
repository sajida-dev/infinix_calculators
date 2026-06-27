import type { Metadata } from "next";
import Link from "next/link";
import { calculatorsData, CalculatorInfo } from "../data/calculatorsData";

// Define PageProps for Next.js 16, where searchParams is a Promise
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

  // Define categories and their order
  const categoriesDef = [
    { id: "financial", label: "Financial Calculators", desc: "Amortization, installment options, payment planning, and interest models." },
    { id: "tax", label: "Tax & Payroll Calculators", desc: "Sales tax estimations, payroll conversions, and salary deductions." },
    { id: "construction", label: "Construction & Landscaping", desc: "Volume estimations for topsoil, concrete, mulch, and roofing angles." },
    { id: "health", label: "Health & Fitness Calculators", desc: "Standard health indices, BMI calculators, and body composition guidelines." },
    { id: "math", label: "Math & Business Productivity", desc: "Percentage formulas, Google review targets, and logistics metrics." },
    { id: "unit-converter", label: "Logistics & Unit Converters", desc: "CBM shipping volume calculations and metric system conversions." }
  ];

  // We have detailed interactive calculations in calculatorsData.
  // To keep the directory full and avoid 404, we list all available items from calculatorsData,
  // and we can also add stubs for the other ones. Let's list the ones present in calculatorsData
  // and add custom stubs with unique slugs and details.
  // Let's create an array of all calculators including those that use the dynamic catch-all route!
  const allCalculatorsList: Omit<CalculatorInfo, "calculate" | "inputs" | "faqs">[] = [
    // Financial
    {
      slug: "affirm",
      name: "Affirm Calculator",
      category: "financial",
      categoryLabel: "Financial",
      hook: "Calculate Monthly Affirm Payments & Interest.",
      description: "Estimate monthly installment costs, total interest paid, and true APR for checks.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "pro-rata",
      name: "Pro Rata Calculator",
      category: "financial",
      categoryLabel: "Financial",
      hook: "Split Rent, Salaries & Retainer Fees in Seconds.",
      description: "Calculate daily rates and partial payments based on exact calendar days.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "hecm",
      name: "HECM Calculator",
      category: "financial",
      categoryLabel: "Financial",
      hook: "Estimate Reverse Mortgage HECM Payout Limits.",
      description: "Model Home Equity Conversion Mortgages based on appraisal values, ages, and rates.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "heloc-payoff",
      name: "HELOC Payoff Calculator",
      category: "financial",
      categoryLabel: "Financial",
      hook: "Model HELOC Principal & Interest Payments.",
      description: "Plan payoff timelines, draw periods, and interest adjustments for home equity loans.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "balance-transfer",
      name: "Balance Transfer Calculator",
      category: "financial",
      categoryLabel: "Financial",
      hook: "Estimate Credit Card Balance Transfer Savings.",
      description: "Compare fee rates, interest-free periods, and payoff timelines to save money.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },

    // Tax
    {
      slug: "avalara-sales-tax",
      name: "Avalara Sales Tax Calculator",
      category: "tax",
      categoryLabel: "Tax & Payroll",
      hook: "Estimate Sales Tax Rates by Zip & State.",
      description: "Run retail transactions and local sales tax calculations instantly.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "gross-up",
      name: "Gross Up Calculator",
      category: "tax",
      categoryLabel: "Tax & Payroll",
      hook: "Calculate Gross Pay from Desired Net Take-Home.",
      description: "Determine before-tax wages needed to cover payroll withholding and taxes.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "reverse-tax",
      name: "Reverse Tax Calculator",
      category: "tax",
      categoryLabel: "Tax & Payroll",
      hook: "Calculate Pre-Tax Cost & Sales Tax Paid.",
      description: "Extract the base price and sales tax portions from any total invoice amount.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "georgia-payroll",
      name: "Georgia Payroll Calculator",
      category: "tax",
      categoryLabel: "Tax & Payroll",
      hook: "Estimate Georgia State Payroll Tax Deductions.",
      description: "Calculate GA state withholding, FICA, and net check sizes for hourly workers.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },

    // Construction
    {
      slug: "topsoil",
      name: "Topsoil Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Estimate Topsoil, Fill Dirt & Soil Bags in Yards.",
      description: "Calculate topsoil cubic yards, ground depth, and coverage for raised garden beds.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "concrete",
      name: "Concrete Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Estimate Cubic Yards of Concrete for Slabs & Piers.",
      description: "Calculate concrete slab volumes, bag counts, and yardage requirements with waste buffers.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "roof",
      name: "Roof Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Estimate Roof Surface Area & Shingle Bundles.",
      description: "Factor in roof pitches, slopes, overhangs, and waste allowances for shingles.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "mulch",
      name: "Mulch Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Calculate Mulch Yards & Landscape Soil Bags.",
      description: "Estimate organic mulch or bark requirements for garden beds and yards.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "drywall",
      name: "Drywall Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Estimate Drywall Sheets, Joint Compound & Screws.",
      description: "Calculate how many drywall boards (4x8 or 4x12) are needed to hang walls.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "fence-cost",
      name: "Fence Cost Calculator",
      category: "construction",
      categoryLabel: "Construction",
      hook: "Estimate Fence Materials & Installation Budgets.",
      description: "Find post spacings, picket counts, rails, and total budget estimates for fencing.",
      calcTime: "2 mins",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },

    // Health
    {
      slug: "bmi",
      name: "BMI Calculator",
      category: "health",
      categoryLabel: "Health",
      hook: "Calculate Body Mass Index (BMI) & Weight Status.",
      description: "Assess overall body composition ranges according to WHO medical categories.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },

    // Math & Productivity
    {
      slug: "productivity",
      name: "Productivity Calculator",
      category: "math",
      categoryLabel: "Productivity",
      hook: "Calculate Employee Efficiency & Resource Output.",
      description: "Measure standard work times, utilization rates, and task productivity metrics.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "therapy-productivity",
      name: "Therapy Productivity Calculator",
      category: "math",
      categoryLabel: "Productivity",
      hook: "Track Billable Hours for PT/OT Therapists.",
      description: "Calculate billable minutes, therapist target percentages, and resource usage.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },
    {
      slug: "google-review",
      name: "Google Review Calculator",
      category: "math",
      categoryLabel: "Productivity",
      hook: "Find Reviews Needed to Raise Your Business Rating.",
      description: "Calculate how many 5-star Google ratings are required to reach a 4.8 or 5.0 score.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    },

    // Logistics & Unit Converters
    {
      slug: "cbm",
      name: "CBM Calculator",
      category: "unit-converter",
      categoryLabel: "Logistics",
      hook: "Calculate Cargo Volume in Cubic Meters.",
      description: "Determine carton shipping volumes in CBM and CFT for ocean container space.",
      calcTime: "1 min",
      seoTitle: "", metaDescription: "", keywords: [], formula: "", formulaDescription: "", example: "", commonMistakes: [], useCases: [], tips: []
    }
  ];

  // Filter based on search query
  const filteredCalculators = allCalculatorsList.filter((calc) => {
    if (!searchQuery) return true;
    const nameMatch = calc.name.toLowerCase().includes(searchQuery);
    const descMatch = calc.description.toLowerCase().includes(searchQuery);
    const hookMatch = calc.hook.toLowerCase().includes(searchQuery);
    return nameMatch || descMatch || hookMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Calculators Directory
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Access our free collection of verified calculations, built for logistics, billing splits, contractor material estimates, and body index metrics.
          </p>

          {/* Simple Inline Search Form */}
          <form action="/calculators" method="GET" className="mt-8 max-w-md mx-auto relative flex items-center">
            <input
              type="text"
              name="q"
              defaultValue={searchQuery}
              placeholder="Search directory (e.g. topsoil, CBM, interest)..."
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-slate-400"
            />
            {searchQuery && (
              <Link
                href="/calculators"
                className="absolute right-12 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            )}
            <button
              type="submit"
              className="absolute right-2 p-1.5 rounded-full bg-primary text-white hover:bg-primary-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search Submit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Search Results Display */}
        {searchQuery ? (
          <div>
            <h2 className="text-lg font-bold text-slate-700 mb-6">
              Search Results for "{searchQuery}" ({filteredCalculators.length} items found)
            </h2>
            {filteredCalculators.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCalculators.map((calc) => (
                  <div
                    key={calc.slug}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{calc.name}</h3>
                      <p className="text-xs font-semibold text-primary uppercase mt-1 tracking-wider">{calc.category}</p>
                      <p className="text-xs text-slate-400 mt-0.5">Est. calculation time: {calc.calcTime}</p>
                      
                      <p className="text-sm font-semibold text-slate-800 leading-snug mt-3 italic">
                        "{calc.hook}"
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed mt-2">
                        {calc.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="w-full inline-flex items-center justify-center rounded-lg bg-primary py-2 text-xs font-bold text-white hover:bg-primary-hover shadow-sm transition-colors"
                      >
                        Calculate Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm">
                <p className="text-slate-500 font-medium">No calculators found matching your search query.</p>
                <Link
                  href="/calculators"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-bold text-white hover:bg-primary-hover shadow-md transition-colors"
                >
                  Clear search and browse all
                </Link>
              </div>
            )}
          </div>
        ) : (
          /* Standard Categorized Grid */
          <div className="space-y-12">
            {categoriesDef.map((cat) => {
              const catCalcs = filteredCalculators.filter(c => c.category === cat.id);
              if (catCalcs.length === 0) return null;

              return (
                <section key={cat.id} className="pt-6">
                  <div className="border-b border-slate-200 pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">{cat.label}</h2>
                    <p className="text-sm text-slate-500 mt-1">{cat.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catCalcs.map((calc) => (
                      <div
                        key={calc.slug}
                        className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">{calc.name}</h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {calc.calcTime}
                            </span>
                          </div>
                          
                          <p className="text-sm font-semibold text-slate-800 leading-snug mt-3 italic">
                            "{calc.hook}"
                          </p>
                          <p className="text-sm text-slate-500 leading-relaxed mt-2">
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
                </section>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
