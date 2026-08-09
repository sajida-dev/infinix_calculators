import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – Infinix Calculators',
  description: 'Get in touch with the Infinix Calculators support team. Submit feedback, request new calculator utilities, or report calculation discrepancies.',
  keywords: ['contact infinix calculators', 'support email', 'calculator feedback', 'report discrepancy', 'infinix calculator support'],
  alternates: {
    canonical: "https://infinixcalculator.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We welcome feedback, formula corrections, and feature requests. Reach out to our team via the form or email addresses below.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] text-center">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">User Support</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">General questions &amp; tool assistance</p>
            <a href="mailto:support@infinixcalculator.com" className="text-sm font-bold text-primary dark:text-sky-400 hover:underline">
              support@infinixcalculator.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] text-center">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Editorial &amp; Formulas</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Report formula math or rate updates</p>
            <a href="mailto:editorial@infinixcalculator.com" className="text-sm font-bold text-primary dark:text-sky-400 hover:underline">
              editorial@infinixcalculator.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] text-center">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Response Time</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Support hours: Mon - Fri</p>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Within 24 - 48 Hours
            </span>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <ContactForm />

      </div>
    </main>
  );
}
