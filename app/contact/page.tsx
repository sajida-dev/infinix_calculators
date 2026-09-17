import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us & Editorial Support – Infinix Calculators',
  description: 'Get in touch with the Infinix Calculators editorial, technical, and data compliance teams. Submit feedback, request new calculation tools, or report formula updates.',
  keywords: ['contact infinix calculators', 'support email', 'calculator feedback', 'report discrepancy', 'infinix calculator support', 'editorial desk'],
  alternates: {
    canonical: "https://infinixcalculator.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-8 text-center">

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Contact Our Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We welcome feedback, formula corrections, and feature requests. Reach out to our specialized desks via the email routing below or submit the interactive form.
          </p>
        </header>

        {/* Department Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-center shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-base">User Support</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Tool usage, bug reports &amp; feature requests</p>
            </div>
            <a href="mailto:support@infinixcalculator.com" className="text-xs font-bold text-primary dark:text-sky-400 hover:underline">
              support@infinixcalculator.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-center shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-base">Editorial &amp; Formulas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Formula peer-review &amp; rate updates</p>
            </div>
            <a href="mailto:editorial@infinixcalculator.com" className="text-xs font-bold text-primary dark:text-sky-400 hover:underline">
              editorial@infinixcalculator.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-center shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-base">Compliance &amp; Privacy</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">GDPR, CPRA data rights &amp; terms</p>
            </div>
            <a href="mailto:privacy@infinixcalculator.com" className="text-xs font-bold text-primary dark:text-sky-400 hover:underline">
              privacy@infinixcalculator.com
            </a>
          </div>
        </div>

        {/* Operating Hours & Response SLA */}
        <div className="mb-10 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-900 dark:text-blue-200 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-bold">Editorial Desk Operating Hours: Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST</span>
          </div>
          <span>Typical response time: <strong>24 &ndash; 48 hours</strong></span>
        </div>

        {/* Interactive Contact Form */}
        <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl p-6 sm:p-10 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Send an Inquiry or Formula Suggestion
          </h2>
          <ContactForm />
        </div>

      </div>
    </main>
  );
}
