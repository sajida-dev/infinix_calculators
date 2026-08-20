import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllAuthors } from '../data/authorsData';

export const metadata: Metadata = {
  title: 'About Us & Editorial Standards – Infinix Calculators',
  description: 'Learn about the mission, editorial standards, formula verification methodology, and credentialed subject-matter specialists behind Infinix Calculators.',
  keywords: ['infinix calculators', 'about us', 'financial calculators', 'construction estimators', 'editorial standards', 'formula verification', 'privacy first calculators', 'editorial team'],
  alternates: { canonical: "https://infinixcalculator.com/about" },
};

export default function AboutPage() {
  const authors = getAllAuthors();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12 border-b border-slate-200 dark:border-[#4D5156] pb-8 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 mb-3 inline-block">
            About Infinix Calculators
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl tracking-tight">
            Computational Rigor &amp; Transparent Utilities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Empowering homeowners, business founders, contractors, students, and clinical professionals with instant, mathematically precise calculation utilities—tested and peer-reviewed by certified industry specialists.
          </p>
        </header>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          {/* Mission */}
          <section className="space-y-4 bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Mission</h2>
            <p>
              Founded in 2026, <strong>Infinix Calculators</strong> was developed with a simple conviction: essential computational tools—whether for calculating topsoil cubic yardage for a lawn, estimating credit card processing fees, or forecasting monthly financing installment costs—should be <strong>free, instant, transparent, and completely ad-uncluttered</strong> on any device.
            </p>
            <p>
              Unlike legacy calculator websites filled with obtrusive redirects, opaque proprietary algorithms, or paywalled results, Infinix runs high-speed client-side computations with complete mathematical transparency and plain-English step-by-step formula derivations.
            </p>
          </section>

          {/* Meet Our Editorial Board */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 dark:border-[#4D5156] pb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Editorial &amp; Review Board</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Every calculator formula and editorial guide is overseen by credentialed professionals.</p>
              </div>
              <Link href="/authors" className="text-xs font-bold text-primary dark:text-sky-400 hover:underline">
                View All Profiles &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {authors.map((author) => (
                <div
                  key={author.slug}
                  className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] flex gap-4 items-center hover:border-primary transition-all"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-primary/30">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm truncate">
                      {author.name}
                    </h3>
                    <p className="text-xs text-primary dark:text-sky-400 font-semibold truncate">
                      {author.jobTitle}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      {author.credentials}
                    </p>
                    <Link href={`/authors/${author.slug}`} className="text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-primary underline mt-1 inline-block">
                      Read Bio &amp; Articles &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5-Stage Verification Standard */}
          <section className="space-y-6 bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              The 5-Stage Computational Verification Standard
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              To guarantee that users and professionals can rely on our results for financial planning, contractor bids, and academic work, all tools undergo a rigorous 5-stage verification process:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-sky-400 font-extrabold flex items-center justify-center shrink-0 text-sm">1</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Academic &amp; Benchmark Formula Derivation</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Mathematical equations are derived from foundational academic references, IRS publication guidelines, ASTM building specifications, or psychometric research papers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-sky-400 font-extrabold flex items-center justify-center shrink-0 text-sm">2</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Cross-Verification with Industry Standards</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Our finance and tax models are cross-checked against municipal rate tables and payment processor interchange schedules (e.g. Visa/Mastercard/Square interchange fee structures).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-sky-400 font-extrabold flex items-center justify-center shrink-0 text-sm">3</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Boundary &amp; Stress Testing</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Every calculation engine is tested against edge-case inputs (e.g., zero-depth soil, extreme loan APRs, negative integers, fractional inches) to eliminate divide-by-zero errors or rounding anomalies.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-sky-400 font-extrabold flex items-center justify-center shrink-0 text-sm">4</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Client-Side Browser Execution</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Calculations execute client-side in the user's browser, ensuring sub-millisecond calculation response times and absolute privacy of user numerical inputs.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-sky-400 font-extrabold flex items-center justify-center shrink-0 text-sm">5</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Annual Regulatory &amp; Rate Review</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Tax thresholds, postal rate changes, and merchant processing percentages are audited periodically to maintain real-world currency.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Client-Side Computation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Privacy-First Architecture</h2>
            <p>
              We believe your financial figures, medical baseline scores, and business revenues belong only to you. When you enter numbers into any tool on Infinix Calculators—such as loan balances, payroll figures, or project dimensions—they are processed locally in your browser memory via JavaScript. We do not store, log, or sell your calculation inputs to third-party data brokers.
            </p>
          </section>

          {/* Get in Touch & Operating Transparency */}
          <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-[#4D5156]">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Corporate Transparency &amp; Contact</h2>
            <p>
              Have a question about a calculation formula, spotted a municipal rate change, or want to suggest a new tool? Our editorial team reviews user feedback within 24 to 48 business hours.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-xs sm:text-sm">
                Contact Support &amp; Editorial
              </Link>
              <Link href="/disclaimer" className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] font-bold hover:bg-slate-50 dark:hover:bg-[#191a1d] transition-colors text-xs sm:text-sm">
                Read Legal &amp; YMYL Disclaimers
              </Link>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
