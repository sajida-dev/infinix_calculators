import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Infinix Calculators',
  description: 'Terms for using Infinix Calculators, including calculator limitations, advertising, third-party services, and contact information.',
  keywords: ['terms and conditions', 'infinix calculators', 'usage policy', 'privacy terms', 'online calculator terms', 'legal disclaimer', 'service agreement'],
  alternates: {
    canonical: "https://infinixcalculator.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-slate-200 pb-7 dark:border-dark-border">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Terms and Conditions</h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Last updated: September 30, 2026</p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            These terms apply when you access or use Infinix Calculators. If you do not agree, do not use the site.
          </p>
        </header>

        <div className="space-y-8 leading-relaxed text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Using the site</h2>
            <p className="mt-2">You may use the calculators and other site content for lawful purposes. Do not interfere with the site, attempt unauthorized access, misuse its services, or use it in a way that violates another person&apos;s rights or applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Estimates, not professional advice</h2>
            <p className="mt-2">Calculator results depend on the inputs, formulas, assumptions, and any preset rates shown on the relevant page. Results are general estimates, may contain errors, and are not a quote, guarantee, or substitute for professional, financial, tax, medical, legal, or construction advice. Verify important figures and current terms with an appropriate professional or authoritative source before acting.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Availability and changes</h2>
            <p className="mt-2">Tools and content may be changed, interrupted, or removed. We may update these terms by posting a revised version here. The date above indicates when this page was last revised.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Content and third-party services</h2>
            <p className="mt-2">Unless a page says otherwise, site text, design, and branding are provided by Infinix Calculators. Third-party names and marks belong to their respective owners. The site may include advertising, analytics, and links or services operated by others; their content, availability, and privacy practices are governed by their own terms and policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Liability</h2>
            <p className="mt-2">To the extent permitted by applicable law, Infinix Calculators is not responsible for losses resulting from reliance on an estimate, an interruption or unavailability of the site, or a third-party service. Nothing in these terms limits a right or liability that applicable law does not allow to be limited.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Contact</h2>
            <p className="mt-2">Questions about these terms can be sent to <a href="mailto:support@infinixcalculator.com" className="font-semibold text-primary underline dark:text-sky-400">support@infinixcalculator.com</a>. See also our <Link href="/privacy" className="font-semibold text-primary underline dark:text-sky-400">Privacy Policy</Link> and <Link href="/contact" className="font-semibold text-primary underline dark:text-sky-400">Contact page</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
