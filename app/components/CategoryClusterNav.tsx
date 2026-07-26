import Link from "next/link";

interface CategoryClusterNavProps {
  category?: string;
  currentSlug?: string;
}

interface ClusterHub {
  categoryName: string;
  title: string;
  pillarCalc: { name: string; href: string; slug: string };
  topArticles: { title: string; href: string }[];
  siblingCalcs: { name: string; href: string }[];
}

const clusterHubs: Record<string, ClusterHub> = {
  Finance: {
    categoryName: "Financial & Financing",
    title: "Finance & Installment Loan Hub",
    pillarCalc: { name: "Affirm Calculator", href: "/calculators/affirm", slug: "affirm" },
    topArticles: [
      { title: "Affirm vs. Klarna vs. Afterpay: BNPL Comparison", href: "/blog/affirm-vs-klarna-vs-afterpay-comparison" },
      { title: "Why Use Affirm Instead of a Credit Card?", href: "/blog/why-use-affirm-instead-of-credit-card" },
      { title: "Does Affirm Hurt Your Credit Score?", href: "/blog/does-affirm-hurt-your-credit-score" },
      { title: "How Does Affirm Work? Pay in 4 vs. Monthly", href: "/blog/how-does-affirm-work-pay-in-4-vs-monthly" },
      { title: "How to Escape the Affirm Debt Trap Early", href: "/blog/affirm-debt-trap-how-to-pay-off-bnpl" },
    ],
    siblingCalcs: [
      { name: "Square Fee Calculator", href: "/calculators/square-fee" },
      { name: "Mortgage Payoff Game", href: "/calculators/mortgage-calculator-game" },
      { name: "Pro Rata Calculator", href: "/calculators/pro-rata" },
      { name: "Credit Card Payoff", href: "/calculators/credit-card-payoff" },
    ]
  },
  Education: {
    categoryName: "Education & Exams",
    title: "Education & LSAT Prep Hub",
    pillarCalc: { name: "LSAT Score Calculator", href: "/calculators/lsat-score-calculator", slug: "lsat-score-calculator" },
    topArticles: [
      { title: "2026 LSAT Exam Breakdown & Timing Guide", href: "/blog/lsat-exam-breakdown-timing-sections-prep" },
      { title: "LSAT Raw Score vs. Scaled Score Conversion", href: "/blog/lsat-raw-score-conversion-guide" },
      { title: "What is a Good LSAT Score? Average & Elite Ranges", href: "/blog/what-is-a-good-lsat-score" },
      { title: "How Long is the LSAT Exam? Timing & Structure", href: "/blog/how-long-is-the-lsat-exam" },
      { title: "Law School Predictor & Scholarship Estimator", href: "/blog/law-school-predictor-scholarships" },
    ],
    siblingCalcs: [
      { name: "MCAT Score Estimator", href: "/calculators/mcat" },
      { name: "SAT Score Estimator", href: "/calculators/sat-test" },
      { name: "529 College Savings", href: "/calculators/529-growth" },
      { name: "Differential Equations", href: "/calculators/differential-equations-calculator" },
    ]
  },
  Construction: {
    categoryName: "Construction & Landscaping",
    title: "Construction & Landscaping Hub",
    pillarCalc: { name: "Topsoil Calculator", href: "/calculators/topsoil", slug: "topsoil" },
    topArticles: [
      { title: "How Much Topsoil Do I Need? Yardage Guide", href: "/blog/how-much-topsoil-do-i-need" },
      { title: "Fill Dirt vs. Topsoil Differences & Uses", href: "/blog/fill-dirt-vs-topsoil" },
      { title: "How Many Bags of Concrete Do I Need?", href: "/blog/how-many-bags-of-concrete-do-i-need" },
      { title: "Concrete Price Per Yard & Slab Cost Guide", href: "/blog/concrete-price-per-yard-cost-guide" },
      { title: "Best Soil Depth for Lawn & Grass Seeding", href: "/blog/best-soil-depth-for-grass" },
    ],
    siblingCalcs: [
      { name: "Concrete Calculator", href: "/calculators/concrete" },
      { name: "Roofing Pitch & Square", href: "/calculators/roof" },
      { name: "Mulch Calculator", href: "/calculators/mulch" },
      { name: "Drywall Estimator", href: "/calculators/drywall" },
    ]
  },
  Tax: {
    categoryName: "Tax & Payroll",
    title: "Tax, Sales & Payroll Hub",
    pillarCalc: { name: "Avalara Sales Tax Calculator", href: "/calculators/avalara-sales-tax", slug: "avalara-sales-tax" },
    topArticles: [
      { title: "Complete Guide to Avalara AvaTax Pricing & Math", href: "/blog/avalara-sales-tax-calculator-guide" },
      { title: "California Sales Tax Sourcing: San Francisco 94105", href: "/blog/california-sales-tax-by-zip-code-94105" },
      { title: "Square Fee Invoicing & Passing Fees to Clients", href: "/blog/square-fee-calculator-guide" },
    ],
    siblingCalcs: [
      { name: "Reverse Sales Tax", href: "/calculators/reverse-tax" },
      { name: "Gross-Up Paycheck", href: "/calculators/gross-up" },
      { name: "IFTA Fuel Tax Estimator", href: "/calculators/ifta" },
    ]
  },
  Logistics: {
    categoryName: "Logistics & Freight",
    title: "Logistics & Freight Volume Hub",
    pillarCalc: { name: "CBM Shipping Calculator", href: "/calculators/cbm", slug: "cbm" },
    topArticles: [
      { title: "How to Calculate CBM Volume & Shipping Weight", href: "/blog/how-to-calculate-cbm-shipping-volume-guide" },
      { title: "Convert Inches & Centimeters to CBM Volume", href: "/blog/calculate-cbm-from-inches-and-centimeters" },
      { title: "Infinix Complete Calculator Hub Guide", href: "/blog/infinix-calculator-suite-guide" },
    ],
    siblingCalcs: [
      { name: "Topsoil Volume Calculator", href: "/calculators/topsoil" },
      { name: "Concrete Slab Calculator", href: "/calculators/concrete" },
    ]
  }
};

export default function CategoryClusterNav({ category, currentSlug }: CategoryClusterNavProps) {
  // Map category string to clusterHub key
  let hubKey = "Finance";
  if (category) {
    const catLower = category.toLowerCase();
    if (catLower.includes("educat") || catLower.includes("lsat")) hubKey = "Education";
    else if (catLower.includes("construct") || catLower.includes("landscaping")) hubKey = "Construction";
    else if (catLower.includes("tax") || catLower.includes("payroll")) hubKey = "Tax";
    else if (catLower.includes("logistics") || catLower.includes("shipping")) hubKey = "Logistics";
    else if (catLower.includes("finance") || catLower.includes("credit")) hubKey = "Finance";
  }

  const hub = clusterHubs[hubKey] || clusterHubs.Finance;

  return (
    <nav className="my-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs" aria-label="Related Topics and Calculators">
      {/* Header section matching clean site design */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md">
            {hub.categoryName} Topic Hub
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Explore Related Guides &amp; Tools
          </h3>
        </div>
        <Link
          href={hub.pillarCalc.href}
          className="shrink-0 text-xs font-bold bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-hover transition-colors shadow-xs"
        >
          Open {hub.pillarCalc.name}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* In-Depth Topic Articles */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">
            In-Depth Topic Guides
          </h4>
          <ul className="space-y-2.5">
            {hub.topArticles
              .filter((art) => art.href !== `/blog/${currentSlug}`)
              .slice(0, 4)
              .map((art) => (
                <li key={art.href}>
                  <Link
                    href={art.href}
                    className="group flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary transition-colors py-1"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform leading-snug">{art.title}</span>
                    <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Related Category Tools */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3.5">
            Related Category Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {hub.siblingCalcs
              .filter((calc) => calc.href !== `/calculators/${currentSlug}`)
              .map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="text-xs font-semibold bg-slate-50 hover:bg-primary/5 text-slate-700 hover:text-primary px-3 py-1.5 rounded-lg transition-colors border border-slate-200/80 hover:border-primary/20"
                >
                  {calc.name}
                </Link>
              ))}
            <Link
              href="/calculators"
              className="text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              View All Tools →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
