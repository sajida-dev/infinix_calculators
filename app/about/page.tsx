import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us & Editorial Standards – Infinix Calculators',
  description: 'Learn what Infinix Calculators is for, how calculator assumptions are presented, and how to report a question or correction.',
  keywords: ['infinix calculators', 'about us', 'calculator assumptions', 'editorial standards', 'formula corrections'],
  alternates: { canonical: "https://infinixcalculator.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12 border-b border-slate-200 dark:border-dark-border pb-8 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 mb-3 inline-block">
            About Infinix Calculators
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl tracking-tight">
            Calculators That Show Their Work
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Infinix Calculators brings common planning calculations into one place, with practical inputs, readable results, and explanations of the assumptions behind an estimate.
          </p>
        </header>

        <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our Mission</h2>
            <p>
              <strong>Infinix Calculators</strong> is a collection of browser-based tools for everyday planning: estimating soil volume, exploring payment or loan scenarios, converting measurements, and working through other common calculations. The aim is to make the inputs and result understandable, not to replace a quote, official rate, or professional assessment.
            </p>
            <p>
              A result is only as useful as its assumptions. For a material estimate, dimensions and units matter; for a finance or tax estimate, the product terms and current rates matter. Check the explanation on the specific calculator, and verify changing rates or rules with the organization that publishes them before making a decision.
            </p>
          </section>

          <section className="space-y-6 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">How we handle formulas and corrections</h2>
            <p>
              Calculator pages should explain the inputs, units, formula, and important limitations that affect their result. Some pages also use preset rates or assumptions; those can change and should be checked against the current terms or source for your situation.
            </p>
            <p>
              If a result looks wrong, send the calculator link, the inputs you used, and what you expected to see. Please leave out account numbers and other sensitive information. We can review a specific report and update the tool or its explanation when a correction is needed.
            </p>
            <Link href="/editorial-policy" className="text-sm font-bold text-primary dark:text-sky-400 underline">
              Read our editorial and correction policy
            </Link>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Privacy and advertising</h2>
            <p>
              Many calculator inputs are processed in your browser to produce a result. The site also uses analytics and advertising services, which may process technical information under their own policies. See the <Link href="/privacy" className="font-bold text-primary dark:text-sky-400 underline">Privacy Policy</Link> for details about these services and your choices.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-dark-border">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Contact</h2>
            <p>
              Have a question, correction, or calculator suggestion? Use the contact page. Its form prepares an email in your device&apos;s email application; you will need to send it there.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-xs sm:text-sm">
                Contact us
              </Link>
              <Link href="/terms" className="px-5 py-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border font-bold hover:bg-slate-50 dark:hover:bg-dark-bg transition-colors text-xs sm:text-sm">
                Terms and Conditions
              </Link>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
