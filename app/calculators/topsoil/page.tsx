import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TopsoilCalculator from "../../components/TopsoilCalculator";
import CalculatorFaqs from "../../components/CalculatorFaqs";
import { blogData } from "../../data/blogData";

export const metadata: Metadata = {
  title: "Topsoil Calculator, Estimate Soil in Cubic Yards, Feet & Bags",
  description:
    "Free topsoil calculator to estimate cubic yards, cubic feet, tons and soil bags. Quickly calculate topsoil, fill dirt and compost for any project.",
  keywords: [
    "topsoil calculator",
    "top soil calculator",
    "topsoil estimator",
    "online topsoil calculator",
    "topsoil coverage calculator",
    "fill dirt calculator",
    "dirt cubic yard calculator",
    "how much for yard of topsoil",
    "topsoil depth guide",
    "cubic yard of topsoil",
    "ground cover calculator",
  ],
  alternates: {
    canonical: "https://infinixcalculator.com/calculators/topsoil",
  },
  openGraph: {
    title: "Topsoil Calculator – Fast & Accurate",
    description:
      "Estimate topsoil volume in cubic yards, feet, tons, or bag counts instantly.",
    url: "https://infinixcalculator.com/calculators/topsoil",
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
  // Pull related blog posts for the “You May Like” section
  const topsoilBlogs = Object.values(blogData).filter(
    (post) => post.calculatorSlug === "topsoil"
  );

  // Related calculators
  const relatedCalcs = [
    { name: "Fill Dirt Calculator", href: "/calculators/fill-dirt", desc: "Estimate fill dirt for foundation projects." },
    { name: "Ground Cover Calculator", href: "/calculators/ground-cover", desc: "Calculate coverage for grass, mulch and stones." },
    { name: "Dirt Cubic Yard Calculator", href: "/calculators/dirt-cubic-yard", desc: "Convert cubic yards to bags, tons, and weight." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* JSON‑LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Topsoil Calculator & Estimator",
            description: "Calculate soil volume in cubic yards, cubic feet, tons, and bag counts based on custom rectangle or circle dimensions.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            browserRequirements: "Requires HTML5 support",
            url: "https://infinixcalculator.com/calculators/topsoil",
          }).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://infinixcalculator.com" },
              { "@type": "ListItem", position: 2, name: "Calculators", item: "https://infinixcalculator.com/calculators" },
              { "@type": "ListItem", position: 3, name: "Topsoil Calculator", item: "https://infinixcalculator.com/calculators/topsoil" },
            ],
          }).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I calculate how much topsoil I will need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Measure length and width in feet, multiply for area, multiply by desired depth (inches ÷ 12) for cubic feet, then divide by 27 for cubic yards."
                }
              },
              {
                "@type": "Question",
                name: "What is 1 cubic yard of topsoil?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One cubic yard equals 27 cubic feet, roughly 2,000–2,200 lb of screened topsoil."
                }
              },
              // Additional FAQs are generated in the page content below.
            ],
          }).replace(/</g, "\\u003c")
        }}
      />
      {/* Page container */}
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link></li>
            <li className="flex items-center gap-1.5 text-slate-600 font-bold" aria-current="page"><span>/</span>Topsoil Calculator</li>
          </ol>
        </nav>

        {/* HERO + CALCULATOR */}
        <header className="mb-10 max-w-4xl">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            Topsoil Calculator &amp; Estimator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Estimate how much topsoil you need in cubic yards instantly. Enter your project dimensions below to get accurate coverage for landscaping, gardening, or lawn installations.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main calculator area */}
          <div className="lg:col-span-3 space-y-8">
            <TopsoilCalculator />

            {/* SEO Authority Article */}
            <article className="prose prose-slate ml-40 max-w-none text-slate-800 leading-relaxed">
              <h2 className="font-bold text-3xl mb-4">What is a Topsoil Calculator?</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">A <strong>topsoil calculator</strong> is an online tool that determines the volume of topsoil required for any landscaping project. It’s also known as a <em>top soil calculator</em>, <em>topsoil estimator</em>, or <em>dirt cubic yard calculator</em>. By inputting the dimensions of the area you plan to cover and the desired depth, the calculator instantly converts those measurements into cubic yards, cubic feet, tons, or even the number of bags you’ll need.</p>

              <h2 className="font-bold text-3xl mt-4">How the Topsoil Calculator Works</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">The calculator uses three simple inputs:</p>
              <ul className="list-disc list-inside ml-5">
                <li><strong>Length</strong>: measured in feet (or meters if you toggle units).</li>
                <li><strong>Width</strong>: also in feet.</li>
                <li><strong>Depth</strong>: the thickness of the top soil layer, typically entered in inches.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Once you submit these numbers, the tool multiplies length × width × (depth ÷ 12) to get cubic feet, then divides by 27 to convert to cubic yards – the standard unit for bulk soil orders. The calculator can also show you the equivalent weight in tons and how many 40‑lb bags you would need.</p>

              <h2 className="font-bold text-3xl mt-4">Formula Used</h2>
              <pre className="ml-5 bg-slate-200 text-slate-800 p-3 w-full rounded-md text-xs sm:text-sm">
                <code>Volume (Cubic Feet) = Length (ft) × Width (ft) × [Depth (in) ÷ 12]</code></pre>
              <pre className="ml-5 m-1 bg-slate-200 text-slate-800 p-3 w-full rounded-md text-xs sm:text-sm">
                <code>Volume (Cubic Yards) = Volume (Cubic Feet) ÷ 27</code></pre>

              <h2 className="font-bold text-3xl mt-4">How to Calculate Manually</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">If you prefer to work on paper, follow these steps:</p>
              <ol className="list-disc list-inside ml-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <li>Measure the length and width of the area in feet.</li>
                <li>Multiply length × width to get the area in square feet.</li>
                <li>Convert the desired depth from inches to feet (divide by 12).</li>
                <li>Multiply the area by the depth (in feet) to get cubic feet.</li>
                <li>Divide cubic feet by 27 to obtain cubic yards.</li>
                <li>Optional: Multiply cubic yards by the average weight of the soil (≈2,200 lb per cubic yard) to get total weight.</li>
              </ol>

              <h2 className="font-bold text-3xl mt-4">Topsoil Depth Guide</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Choosing the right depth is crucial for the health of your plants and the durability of your lawn. Below are common depth recommendations:</p>
              <ul className="list-disc list-inside ml-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <li><strong>Lawn installation:</strong> 4–6 inches of high‑quality topsoil provides a firm base for sod or seed.</li>
                <li><strong>Garden beds:</strong> 8–12 inches, especially for vegetable gardens, ensures sufficient root space and nutrient holding capacity.</li>
                <li><strong>Landscape grading:</strong> 2–4 inches for leveling and creating gentle slopes.</li>
                <li><strong>Sod preparation:</strong> 3–5 inches, depending on soil compaction and the type of grass.</li>
              </ul>

              <h2 className="font-bold text-3xl mt-4 mb-4">Soil Depth Reference Table</h2>
              <table className="w-full border-collapse border border-slate-200">
                <thead className="bg-slate-100 border border-slate-200 m-1">
                  <tr>
                    <th className="p-2 border border-slate-200 text-sm sm:text-base">Application</th>
                    <th className="p-2 border border-slate-200 text-sm sm:text-base">Recommended Depth (inches)</th>
                    <th className="p-2 border border-slate-200 text-sm sm:text-base">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Lawn (new sod)</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">4‑6</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Residential lawns, sports fields</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Vegetable garden</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">8‑12</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Fruit‑bearing beds, raised beds</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Landscape grading</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">2‑4</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Foundation leveling, slope correction</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Flower beds</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">6‑8</td>
                    <td className="p-2 border border-slate-200 text-sm sm:text-base">Perennial borders, ornamental gardens</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="font-bold text-3xl mt-4 mb-4">Conversion Table</h2>
              <table className="w-full border-collapse border border-slate-200">
                <thead className="bg-slate-100 border border-slate-200 m-1">
                  <tr>
                    <th className="p-2 border border-slate-200">Unit</th>
                    <th className="p-2 border border-slate-200">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border border-slate-200">1 foot</td><td className="p-2 border border-slate-200">12 inches</td></tr>
                  <tr><td className="p-2 border border-slate-200">1 yard</td><td className="p-2 border border-slate-200">3 feet</td></tr>
                  <tr><td className="p-2 border border-slate-200">1 cubic yard</td><td className="p-2 border border-slate-200">27 cubic feet</td></tr>
                  <tr><td className="p-2 border border-slate-200">1 cubic foot</td><td className="p-2 border border-slate-200">0.037 cubic yards</td></tr>
                </tbody>
              </table>

              <h2 className="font-bold text-3xl mt-4 mb-4">Real Calculation Examples</h2>
              <h3 className="font-bold text-xl mt-4 mb-4">Small Garden (10 ft × 8 ft × 4 in depth)</h3>
              <p>Area = 80 sq ft. <br /> Depth = 0.333 ft. <br /> Volume = 80 × 0.333 ≈ 26.7 cu ft → 0.99 cu yd. <br /> Rounded up, you’d order 1 cubic yard (or 2 bags of 40 lb each for a safety buffer).</p>

              <h3 className="font-bold text-xl mt-4 mb-4">Medium Lawn (30 ft × 20 ft × 5 in depth)</h3>
              <p>Area = 600 sq ft. <br /> Depth = 0.417 ft. <br /> Volume = 600 × 0.417 ≈ 250 cu ft → 9.26 cu yd. <br /> Add 10 % buffer → 10.2 cu yd (order 11 cubic yards).</p>

              <h3 className="font-bold text-xl mt-4 mb-4">Large Landscaping Project (50 ft × 40 ft × 8 in depth)</h3>
              <p>Area = 2,000 sq ft. <br /> Depth = 0.667 ft. <br /> Volume = 2,000 × 0.667 ≈ 1,334 cu ft → 49.4 cu yd. <br /> With a 10 % buffer you’ll need about 54 cubic yards.</p>

              <h2 className="font-bold text-3xl mt-4 mb-4">How Much Topsoil Do You Need?</h2>
              <p>When you search for “how much for yard of topsoil” or “4 yards of soil,” the answer depends on the surface area and desired depth. Using the calculator, you can instantly answer questions like:</p>
              <ul className="list-disc list-inside ml-5">
                <li>What is 1 cubic yard of topsoil?
                  <p className="ml-12"> Approximately 27 cubic ft, 2,000–2,200 lb of screened topsoil.</p>
                </li>
                <li>How many cubic yards do I need for a 500 sq ft lawn at 4 in depth?
                  <p className="ml-12">About 1.5 cubic yards (order 2 cubic yards to include a buffer).</p>
                </li>
                <li>What’s the difference between topsoil and fill dirt?
                  <p className="ml-12">Fill dirt is often ungraded, contains rocks and low organic matter, while topsoil is screened and rich in nutrients.</p>
                </li>
              </ul>

              <h2 className="font-bold text-3xl mt-4 mb-4">Buying Guide</h2>
              <p>When you’re ready to purchase, consider these factors:</p>
              <ul className="list-disc list-inside ml-5">
                <li><strong>Bulk vs. bagged soil:</strong> Bulk deliveries are cost‑effective for large volumes (10 + cubic yards) and reduce packaging waste. Bagged soil is convenient for DIY projects under 2 cubic yards.</li>
                <li><strong>Delivery pricing:</strong> Most suppliers charge per cubic yard plus a mileage fee. Some offer free delivery for orders over a certain volume.</li>
                <li><strong>Fill dirt vs. topsoil:</strong> Fill dirt is used for structural fill, foundations, and base layers; it’s typically cheaper but low in nutrients. Topsoil is designed for planting and landscaping.</li>
                <li><strong>Ground cover calculator context:</strong> If you’re also calculating grass or mulch coverage, use our <Link href="/calculators/ground-cover">ground cover calculator</Link> to ensure consistent material budgeting.</li>
              </ul>

              <h2 className="font-bold text-3xl mt-4 mb-4">Delivery Tips</h2>
              <p>Getting your soil onto the job site efficiently can save time and money:</p>
              <ul className="list-disc list-inside ml-5">
                <li><strong>Truck size:</strong> A standard 5‑ton dump truck holds roughly 10 cubic yards. Smaller trucks (2‑ton) carry 4 cubic yards.</li>
                <li><strong>Unloading strategy:</strong> Use a wheelbarrow or skid‑steer loader for tight spaces. Plan a clear path to avoid damage to existing landscaping.</li>
                <li><strong>Access constraints:</strong> Verify driveway width, gate clearance, and any steep ramps before the delivery arrives.</li>
              </ul>

              <h2 className="font-bold text-3xl mt-4 mb-4">Common Mistakes</h2>
              <ul className="list-disc list-inside ml-5">
                <li><strong>Neglecting compaction:</strong> Soil settles 10‑20 % after watering or tamping. Always add a safety buffer.</li>
                <li><strong>Wrong depth assumption:</strong> Using a depth that’s too shallow will leave your plants under‑nourished; too deep wastes material.</li>
                <li><strong>Unit conversion errors:</strong> Mixing feet and inches without proper conversion leads to large miscalculations.</li>
                <li><strong>Skipping the buffer:</strong> Forgetting the 10 % buffer can leave you short on material when the project is complete.</li>
              </ul>

              {/* FAQ component */}
              <CalculatorFaqs slug="topsoil" />

              <h2 className="font-bold text-3xl mt-4 mb-4">Related Calculators</h2>
              <ul className="list-disc list-inside ml-5">
                <li className="text-primary"><Link href="/calculators/fill-dirt">Fill Dirt Calculator</Link></li>
                <li className="text-primary"><Link href="/calculators/ground-cover">Ground Cover Calculator</Link></li>
                <li className="text-primary"><Link href="/calculators/dirt-cubic-yard">Dirt Cubic Yard Calculator</Link></li>
              </ul>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {topsoilBlogs.length > 0 && (
              <section className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                  You May Like
                </h3>
                <div className="space-y-5">
                  {topsoilBlogs.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 hover:text-primary transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200/50">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[9px] font-bold text-primary uppercase tracking-wider">
                          {rel.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors mt-1 line-clamp-2">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="pb-6 border-b border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Popular Tools
              </h3>
              <ul className="space-y-3.5">
                {relatedCalcs.map((calc) => (
                  <li key={calc.name}>
                    <Link
                      href={calc.href}
                      className="group ml-5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-0.5"
                    >
                      <span>{calc.name}</span>
                      <svg
                        className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pb-6 border-b border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Categories
              </h3>
              <ul className="ml-5 space-y-2">
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Construction &amp; Materials
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Landscaping &amp; Gardening
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Finance &amp; Payroll
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Health &amp; Fitness
                  </Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
