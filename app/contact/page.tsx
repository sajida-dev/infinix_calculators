import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us & Editorial Support – Infinix Calculators',
  description: 'Contact Infinix Calculators with a question, formula correction, privacy request, or calculator suggestion.',
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

          <h1 className="text-4xl  font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Contact Our Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Send a question about a calculator, report a possible error, request a privacy-related action, or suggest a tool. Choose the closest topic and include the page URL so we can understand your message.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="mailto:support@infinixcalculator.com" className="font-semibold text-primary dark:text-sky-400 underline">General and calculator questions</a>
          <a href="mailto:editorial@infinixcalculator.com" className="font-semibold text-primary dark:text-sky-400 underline">Formula corrections</a>
          <a href="mailto:privacy@infinixcalculator.com" className="font-semibold text-primary dark:text-sky-400 underline">Privacy requests</a>
        </div>

        <section className="py-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Contact form
          </h2>
          <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            This form does not submit to a website server. It opens your email application with the message filled in; review it and press Send there. If no email application opens, use one of the email links above.
          </p>
          <ContactForm />
        </section>

      </div>
    </main>
  );
}
