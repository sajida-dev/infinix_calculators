import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Standards & Correction Policy – Infinix Calculators',
  description: 'Read the editorial standards, formula verification methodology, factual correction policy, and computational ethics governing Infinix Calculators.',
  keywords: ['editorial standards', 'correction policy', 'formula verification', 'fact checking', 'infinix calculator ethics', 'methodology'],
  alternates: {
    canonical: 'https://infinixcalculator.com/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-4 text-center sm:text-left pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Editorial Standards &amp; Review Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Our commitment to formula precision, independent research, computational ethics, and transparent correction processes.
          </p>
        </header>

        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">

          {/* 1. Computational Mission */}
          <section className="space-y-4 p-4 sm:p-8 ">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              1. Computational Accuracy &amp; Formula Rigor
            </h2>
            <p>
              At <strong>Infinix Calculators</strong>, our core priority is mathematical precision. We believe that tools utilized by contractors, small business founders, students, and healthcare professionals must be reliable, unbiased, and mathematically sound.
            </p>
            <p>
              Every formula implemented on our platform is authored and reviewed by credentialed subject-matter specialists (such as Certified Public Accountants, Professional Civil Engineers, and Applied Mathematicians). Calculations are cross-checked against standard academic sources, IRS tax publications, ASTM engineering specifications, and municipal tax grids.
            </p>
          </section>

          {/* 2. Independence & Objectivity */}
          <section className="space-y-4 p-4 sm:p-6 ">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              2. Independence &amp; Zero Affiliate Bias
            </h2>
            <p>
              Our calculators are developed strictly as neutral, open utilities. We do not alter, skew, or inflate calculations to favor specific lenders, merchants, materials suppliers, or commercial partners.
            </p>
            <p>
              When comparing financing options (such as BNPL APR vs. credit card compounding) or merchant fee structures (such as Square in-person vs. manual keyed rates), formulas are derived purely from publicly published schedules without financial bias.
            </p>
          </section>

          {/* 3. Discrepancy Reporting & Correction Protocol */}
          <section className="space-y-4 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              3. Formula Correction &amp; Discrepancy Resolution Protocol
            </h2>
            <p>
              We maintain an open-door policy for formula corrections, tax rate adjustments, and boundary-condition reports. When a discrepancy is reported by a user or discovered by our internal audit team:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2 text-xs sm:text-sm">
              <li><strong>Initial Investigation:</strong> The relevant domain editor investigates the source code within 24 hours.</li>
              <li><strong>Mathematical Re-Verification:</strong> The calculation is validated against two independent benchmark sources.</li>
              <li><strong>Code Deployment:</strong> Updates are unit-tested and deployed across our global CDN.</li>
              <li><strong>Changelog Logging:</strong> Meaningful formula or tax rate updates are documented in the respective tool notes.</li>
            </ol>
            <p className="pt-2 text-xs">
              To report a discrepancy, contact our editorial team directly at <a href="mailto:editorial@infinixcalculator.com" className="text-primary font-bold hover:underline">editorial@infinixcalculator.com</a>.
            </p>
          </section>

          {/* 4. Privacy & Client-Side Execution */}
          <section className="space-y-4 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              4. Client-Side Processing &amp; Data Ethics
            </h2>
            <p>
              We believe user numerical inputs—whether sensitive payroll numbers, business turnover, or personal loan amounts—should remain strictly private. Our computational engines run locally in the client browser through optimized JavaScript. We do not store, track, or sell your calculation inputs.
            </p>
          </section>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/authors" className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-xs sm:text-sm">
              Meet Our Editorial Board &rarr;
            </Link>
            <Link href="/about" className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] font-bold hover:bg-slate-50 dark:hover:bg-[#191a1d] transition-colors text-xs sm:text-sm">
              About Infinix Calculators
            </Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] font-bold hover:bg-slate-50 dark:hover:bg-[#191a1d] transition-colors text-xs sm:text-sm">
              Submit Feedback
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
