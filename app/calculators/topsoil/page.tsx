import type { Metadata } from "next";
import Link from "next/link";
import TopsoilCalculator from "../../components/TopsoilCalculator";

export const metadata: Metadata = {
  title: "Topsoil Calculator - Estimate Cubic Yards, Feet & Bags",
  description: "Calculate exactly how much topsoil, dirt, or compost you need. Input dimensions to get results in cubic yards, cubic feet, tons, and bag counts.",
  keywords: [
    "topsoil calculator",
    "top soil calculator",
    "topsoil yard calculator",
    "mulch calculator",
    "soil bags calculator",
    "calculate topsoil needed",
  ],
};

export default function TopsoilPage() {
  const popularCalculators = [
    { name: "Affirm Calculator", href: "/calculators/affirm" },
    { name: "CBM Calculator", href: "/calculators/cbm" },
    { name: "Avalara Sales Tax", href: "/calculators/avalara-sales-tax" },
    { name: "Pro Rata Calculator", href: "/calculators/pro-rata" },
    { name: "Square Fee Calculator", href: "/calculators/square-fee" },
    { name: "HECM Calculator", href: "/calculators/hecm" },
    { name: "Gross Up Calculator", href: "/calculators/gross-up" },
    { name: "Reverse Tax Calculator", href: "/calculators/reverse-tax" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area (3/4 width on desktop) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Header Section */}
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Materials Calculator</span>
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-2 tracking-tight">
                Topsoil Calculator
              </h1>
              <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
                Use our free calculator to estimate the volume and weight of soil, dirt, compost, or mulch needed for your landscaping project. Works for rectangular lawns, raised beds, or circular plant beds.
              </p>
            </div>

            {/* Interactive Calculator Section */}
            <div>
              <TopsoilCalculator />
            </div>

            {/* Ad slots placed after calculator (hidden for now) */}
            <div className="hidden space-y-4">
              {/* Top Google Ad Slot Placeholder */}
              <div className="bg-white/80 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center h-24 text-slate-400 text-xs shadow-sm">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400 mb-1">Advertisement</span>
                <div className="w-full text-center py-2 text-slate-300">Responsive Ad Unit (Google AdSense Slot)</div>
              </div>

              {/* Middle Google Ad Slot Placeholder */}
              <div className="bg-white/80 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center h-24 text-slate-400 text-xs shadow-sm">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400 mb-1">Advertisement</span>
                <div className="w-full text-center py-2 text-slate-300">In-Feed Native Ad Unit</div>
              </div>
            </div>

            {/* Explanatory Example Section */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">How to Calculate Topsoil: Formulas & Example</h2>
              
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                  To figure out how much topsoil or compost you need, we determine the volume of the space (length × width × depth) and convert it to industry-standard units like cubic yards or bag counts.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm">Standard Formula:</h3>
                  <code className="block text-primary font-mono text-xs leading-relaxed">
                    Volume (Cubic Feet) = Length (ft) × Width (ft) × [Depth (inches) ÷ 12]
                  </code>
                  <code className="block text-primary font-mono text-xs leading-relaxed">
                    Volume (Cubic Yards) = Volume (Cubic Feet) ÷ 27
                  </code>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-slate-900 text-base">Step-by-Step Practical Example:</h3>
                  <p>
                    Suppose you want to fill a garden bed that is <strong>12 feet long</strong> and <strong>10 feet wide</strong>, with a soil depth of <strong>4 inches</strong>.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-2">
                    <li>
                      <strong>Convert depth to feet:</strong> 4 inches ÷ 12 = 0.333 feet.
                    </li>
                    <li>
                      <strong>Calculate volume in Cubic Feet:</strong> 12 ft × 10 ft × 0.333 ft = 40 cubic feet.
                    </li>
                    <li>
                      <strong>Convert to Cubic Yards:</strong> 40 cu ft ÷ 27 = 1.48 cubic yards.
                    </li>
                    <li>
                      <strong>Estimate bags needed:</strong> Since a standard 40 lb bag of topsoil contains roughly 0.75 cubic feet: 40 ÷ 0.75 = 54 bags.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4 divide-y divide-slate-100">
                <details className="group pb-4" open>
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>How do I calculate how much topsoil I will need?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    First, measure the length and width of your area in feet, then multiply these dimensions to get the total area. Multiply this area by your desired depth in inches, and divide that number by 12 to find the total cubic feet. To get cubic yards, divide the cubic feet by 27.
                  </p>
                </details>

                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>How much does a 40 lb bag of topsoil cover?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    A standard 40 lb bag of topsoil contains approximately <strong>0.75 cubic feet</strong> of soil. If you are spreading the soil at a depth of 2 inches, one 40 lb bag will cover about 4.5 square feet of area.
                  </p>
                </details>

                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>Is 2 inches of topsoil enough to grow grass?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    While grass can sprout in 2 inches of topsoil, a depth of <strong>4 to 6 inches</strong> is strongly recommended for a healthy, robust lawn. Deeper soil allows grass roots to establish deeply, locking in moisture and preventing turf burn during hot seasons.
                  </p>
                </details>

                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>How many 40 lb bags of topsoil does it take to make 1 yard?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    It takes <strong>36 bags</strong> (each being 40 lbs or 0.75 cubic feet) to equal 1 cubic yard. Because 1 cubic yard is equal to 27 cubic feet: 27 ÷ 0.75 = 36 bags.
                  </p>
                </details>

                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>Will 1 yard of topsoil fit in a pickup truck?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    Yes. Most standard full-size pickup trucks can carry 1 to 1.5 cubic yards of topsoil in their bed without exceeding capacity. However, topsoil is heavy (about 2000-2200 lbs per cubic yard), so check your truck's payload capacity limit before loading.
                  </p>
                </details>

                <details className="group pt-4">
                  <summary className="flex cursor-pointer items-center justify-between text-slate-900 font-semibold text-sm sm:text-base list-none">
                    <span>Can I estimate soil volume without a calculator?</span>
                    <span className="ml-1.5 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-1">
                    Yes, you can do quick mental math by multiplying length and width to get the square footage. For a common depth of 3 inches (which is 0.25 feet), simply divide your square footage by 4 to get the cubic feet. For 6 inches, divide by 2.
                  </p>
                </details>
              </div>
            </section>

            {/* Bottom Google Ad Slot Placeholder (hidden for now) */}
            <div className="hidden bg-white/80 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center h-24 text-slate-400 text-xs shadow-sm">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400 mb-1">Advertisement</span>
              <div className="w-full text-center py-2 text-slate-300">Anchor Sticky Ad Placeholder</div>
            </div>

          </div>

          {/* Sidebar Area (1/4 width on desktop) */}
          <div className="space-y-6">
            
            {/* Sidebar Ad Unit (hidden for now) */}
            <div className="hidden bg-white/85 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[250px] text-slate-400 text-xs shadow-sm sticky top-24">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400 mb-2">Advertisement</span>
              <div className="text-center w-full text-slate-300 px-4 py-8">
                300 x 250 Medium Rectangle Ad
              </div>
            </div>

            {/* Popular Tools Directory Cross-Linking */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-[360px]">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Popular Calculators
              </h3>
              <ul className="mt-4 space-y-3">
                {popularCalculators.map((calc) => (
                  <li key={calc.name}>
                    <Link
                      href={calc.href}
                      className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      <span>{calc.name}</span>
                      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
