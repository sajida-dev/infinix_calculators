import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us – Infinix Calculators',
  description: 'Discover the mission, editorial standards, formula verification methodology, and technical architecture behind Infinix Calculators.',
  keywords: ['infinix calculators', 'about us', 'financial calculators', 'construction estimators', 'editorial standards', 'formula verification', 'privacy first calculators'],
  alternates: { canonical: "https://infinixcalculator.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-10 border-b border-slate-200 dark:border-[#4D5156] pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl tracking-tight">
            About Infinix Calculators
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Empowering homeowners, business owners, students, and professionals with instant, mathematically precise calculation utilities.
          </p>
        </header>

        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Mission</h2>
            <p>
              Founded in 2026, <strong>Infinix Calculators</strong> was developed to eliminate complex spreadsheets, paywalled calculation tools, and clutter-heavy web pages. We believe essential computational tools—whether for calculating topsoil cubic yardage for a lawn, estimating credit card processing fees, or forecasting monthly financing installment costs—should be free, accessible, and fast on any device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Editorial &amp; Computational Rigor</h2>
            <p>
              Every calculator, formula guide, and written reference on our platform is authored, reviewed, and tested by the <strong>Infinix Calculators Editorial Team</strong>. 
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Formula Peer-Verification:</strong> Mathematical formulas (such as simple amortized interest, geometry volume equations, and tax percentages) are verified against standard academic, municipal, and industry benchmarks.</li>
              <li><strong>Independent Methodology:</strong> Our tools are developed independently to provide unbiased, transparent results without hidden affiliate markups or proprietary algorithms.</li>
              <li><strong>Regular Updates:</strong> Tax rates, formula assumptions, and user guides are reviewed periodically to reflect real-world changes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Privacy &amp; Client-Side Computation</h2>
            <p>
              We take user privacy seriously. All primary calculations are performed client-side inside your web browser. When you input values—such as loan balances, dimensions, or custom parameters—your data is processed in real time in your local browser session and is never sold to third-party data brokers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Core Categories We Support</h2>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Construction &amp; Landscaping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Topsoil cubic yardage, concrete slab volumes, roofing pitch &amp; shingle requirements.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Financial &amp; Business</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Square merchant fee calculations, pro-rata splits, financing interest estimations.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Tax &amp; Payroll</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Gross-up salary formulas, sales tax estimations, and invoice math.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Health &amp; Education</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Body Mass Index (BMI) indicators, CBM logistics conversions, and study math.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-[#4D5156]">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Get in Touch</h2>
            <p>
              Have a question about a calculation formula, spotted a discrepancy, or want to suggest a new tool? Visit our <Link href="/contact" className="text-primary font-bold hover:underline">Contact Page</Link> or email us directly at <a href="mailto:support@infinixcalculator.com" className="text-primary font-bold hover:underline">support@infinixcalculator.com</a>.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
