import type { Metadata } from "next";
import Link from "next/link";
import TopsoilCalculator from "../../components/TopsoilCalculator";
import CalculatorFaqs from "../../components/CalculatorFaqs";
import { blogData } from "../../data/blogData";
import { calculatorsData } from "../../data/calculatorsData";

export const metadata: Metadata = {
  title: "Topsoil Calculator - Estimate Cubic Yards, Feet & Bags of Soil",
  description: "Calculate exactly how much topsoil, fill dirt, or compost you need. Input dimensions to get coverage results in cubic yards, cubic feet, tons, and bag counts.",
  keywords: [
    "topsoil calculator",
    "top soil calculator",
    "topsoil estimator",
    "online topsoil calculator",
    "topsoil coverage calculator",
    "fill dirt calculator",
    "dirt cubic yard calculator",
    "how much for yard of topsoil",
  ],
  alternates: {
    canonical: "https://infinixcalculators.com/calculators/topsoil",
  },
  openGraph: {
    title: "Topsoil Calculator – Fast & Accurate",
    description: "Estimate topsoil volume in cubic yards, feet, tons, or bag counts instantly.",
    url: "https://infinixcalculators.com/calculators/topsoil",
    siteName: "Infinix Calculators",
    images: [{ url: "/og-topsoil.png", width: 1200, height: 630, alt: "Topsoil Calculator" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topsoil Calculator – Estimate Soil Volume",
    description: "Fast online calculator for topsoil, fill dirt, and compost.",
    images: ["/og-topsoil.png"],
    creator: "@Infinix",
  },
};

export default function TopsoilPage() {
  // Get supporting blog articles for topsoil
  const topsoilBlogs = Object.values(blogData).filter(
    (post) => post.calculatorSlug === "topsoil"
  );

  // Related calculators
  const relatedCalcs = [
    { name: "Concrete Calculator", href: "/calculators/concrete", desc: "Estimate cubic yards for concrete slabs." },
    { name: "Mulch Calculator", href: "/calculators/mulch", desc: "Calculate organic bark and mulch coverage." },
    { name: "Roof Calculator", href: "/calculators/roof", desc: "Estimate roofing shingles and pitch dimensions." },
  ];

  // Structured Data Schema Objects
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Topsoil Calculator & Estimator",
    "description": "Calculate soil volume in cubic yards, cubic feet, tons, and bag counts based on custom rectangle or circle dimensions.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5 support",
    "url": "https://infinixcalculators.com/calculators/topsoil",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://infinixcalculators.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://infinixcalculators.com/calculators",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Topsoil Calculator",
        "item": "https://infinixcalculators.com/calculators/topsoil",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate how much topsoil I will need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, measure the length and width of your area in feet, then multiply these dimensions to get the total square footage. Multiply this area by your desired depth in inches, and divide that number by 12 to find the total cubic feet. To get cubic yards, divide the cubic feet by 27.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does a 40 lb bag of topsoil cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard 40 lb bag of topsoil contains approximately 0.75 cubic feet of soil. If you are spreading the soil at a depth of 2 inches, one 40 lb bag will cover about 4.5 square feet of area.",
        },
      },
      {
        "@type": "Question",
        "name": "How many 40 lb bags of topsoil does it take to make 1 yard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It takes 36 bags (each being 40 lbs or 0.75 cubic feet) to equal 1 cubic yard. Because 1 cubic yard is equal to 27 cubic feet: 27 ÷ 0.75 = 36 bags.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Topsoil Coverage",
    "description": "Calculate cubic yards of soil or dirt needed for your yard or garden bed.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Measure Footprint Area",
        "text": "Measure the length and width of your rectangular lawn or garden bed in feet.",
        "url": "https://infinixcalculators.com/calculators/topsoil#step-area",
      },
      {
        "@type": "HowToStep",
        "name": "Define Desired Depth",
        "text": "Decide how deep you want the topsoil (commonly 3 to 6 inches for turf, 12 inches for vegetable beds).",
        "url": "https://infinixcalculators.com/calculators/topsoil#step-depth",
      },
      {
        "@type": "HowToStep",
        "name": "Calculate Volume",
        "text": "Multiply length by width by depth (in inches divided by 12). Divide by 27 to find the total cubic yards of topsoil required.",
        "url": "https://infinixcalculators.com/calculators/topsoil#step-volume",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Dynamic JSON-LD Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>/</span>
              <Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link>
            </li>
            <li className="flex items-center gap-1.5 text-slate-600 font-bold" aria-current="page">
              <span>/</span>
              <span>Topsoil Calculator</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-4xl">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            Topsoil Calculator & Estimator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Use this online topsoil calculator to estimate the exact volume and weight of topsoil, compost, mulch, or fill dirt needed for your landscaping projects. Calculates total cubic yards, cubic feet, tons, and individual bag counts instantly.
          </p>
        </header>

        {/* Main Grid: Calculator (left) + Sidebar (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Main Area (3/4 width) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Interactive Client Calculator Form */}
            <div>
              <TopsoilCalculator />
            </div>

            {/* In-depth content block */}
            <section className="p-6 sm:p-10 space-y-8 text-slate-600 leading-relaxed text-sm sm:text-base">

              {/* Formula explanation */}
              <div id="step-volume" className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  How to Estimate Topsoil Volume: Formula & Principles
                </h2>
                <p>
                  To figure out how much ground cover or landscape soil you need, we determine the three-dimensional volume of the space. This involves multiplying the surface area (length by width) by the desired depth, then converting the result to standard sales metrics (cubic yards or bag counts).
                </p>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
                  <span className="block font-bold text-slate-800 text-xs uppercase tracking-wider">Volumetric Formulas:</span>
                  <code className="block text-primary font-mono text-xs sm:text-sm">
                    Volume (Cubic Feet) = Length (ft) × Width (ft) × [Depth (in) ÷ 12]
                  </code>
                  <code className="block text-primary font-mono text-xs sm:text-sm">
                    Volume (Cubic Yards) = Volume (Cubic Feet) ÷ 27
                  </code>
                </div>
              </div>

              {/* Example block */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Step-by-Step Practical Soil Example
                </h3>
                <p>
                  Suppose you want to grade a rectangular lawn area that is <strong>24 feet long</strong> and <strong>15 feet wide</strong>, with a required topsoil depth of <strong>4 inches</strong>.
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li>
                    <strong>Convert depth to feet:</strong> 4 inches ÷ 12 = 0.333 feet.
                  </li>
                  <li>
                    <strong>Calculate footprint area:</strong> 24 ft × 15 ft = 360 square feet.
                  </li>
                  <li>
                    <strong>Find volume in Cubic Feet:</strong> 360 sq ft × 0.333 ft = 120 cubic feet.
                  </li>
                  <li>
                    <strong>Convert to Cubic Yards:</strong> 120 cu ft ÷ 27 = <strong>4.44 cubic yards of topsoil</strong>.
                  </li>
                  <li>
                    <strong>Estimate bag count:</strong> If buying retail 40 lb bags (which yield approx. 0.75 cu ft of soil): 120 ÷ 0.75 = <strong>160 bags</strong>.
                  </li>
                </ol>
              </div>

              <hr className="border-slate-100" />

              {/* Material Densities */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Soil Types & Material Densities
                </h2>
                <p>
                  Not all soils weigh the same. When ordering bulk soil, supply yards often sell by weight (tons) rather than yards. The moisture level and makeup of the organic material heavily dictate the load:
                </p>
                <ul className="list-disc list-inside space-y-2.5 pl-2">
                  <li>
                    <strong>Standard Topsoil:</strong> Weighs roughly 2,000 to 2,200 lbs per cubic yard (about 1 ton). This is standard screened dirt.
                  </li>
                  <li>
                    <strong>Organic Compost:</strong> Much lighter. Weighs about 1,000 to 1,400 lbs per cubic yard. Made of decomposed organic compost and bark.
                  </li>
                  <li>
                    <strong>Heavy Clay & Topsoil Mix:</strong> Dense. Weighs 2,200 to 2,500 lbs per yard. Compacts tightly, holds water.
                  </li>
                  <li>
                    <strong>Wet Dirt / Mud:</strong> Extremely heavy. Can exceed 2,800 lbs per yard. Avoid ordering wet soil as it is difficult to grade and shovel.
                  </li>
                </ul>
              </div>

              <hr className="border-slate-100" />

              {/* Common mistakes */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Common Topsoil Estimation Mistakes & Tips
                </h2>
                <p>
                  Avoid these frequent missteps when ordering bulk dirt cubic yard calculations for landscaping:
                </p>
                <ul className="list-disc list-inside space-y-2.5 pl-2">
                  <li>
                    <strong>Neglecting Compaction (Settlement):</strong> Soil naturally settles and compacts by 10% to 20% after watering, rain, or tamping. Always add a 10% buffer to your final yards count.
                  </li>
                  <li>
                    <strong>Ignoring Eaves & Overhangs:</strong> If measuring for flower beds along walls, include eave overhangs if you plan to cover the soil under them.
                  </li>
                  <li>
                    <strong>Unscreened vs Screened Soil:</strong> Unscreened soil is cheaper but contains rocks, weed seeds, and roots. Screened topsoil has been processed, making it premium and ready for seeding.
                  </li>
                </ul>
              </div>
            </section>

            {/* Reusable FAQs Section */}
            <CalculatorFaqs slug="topsoil" />
          </div>

          {/* Sidebar Area (1/4 width) */}
          <div className="space-y-6">


            {/* You May Like - Flat list of related articles (No outer card wrapper) */}
            {topsoilBlogs.length > 0 && (
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">You May Like</h3>
                <div className="space-y-5">
                  {topsoilBlogs.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 hover:text-primary transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200/50">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[9px] font-bold text-primary uppercase tracking-wider">{rel.category}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors mt-1 line-clamp-2">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}



            {/* Popular Topics / Calculators (No card bg/border) */}
            <div className="pb-6 border-b border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Popular Tools</h3>
              <ul className="space-y-3.5">
                {relatedCalcs.map((calc) => (
                  <li key={calc.name}>
                    <Link
                      href={calc.href}
                      className="group ml-5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-0.5"
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

            {/* Internal Categories Directory Links */}
            <div className="pb-6 border-b border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Categories
              </h3>
              <ul className="ml-5 space-y-2">
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Financial Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Tax & Payroll Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Construction & Materials
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Health & Fitness Tools
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
