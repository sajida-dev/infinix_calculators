import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Infinix Calculators',
  description: 'Get in touch with the Infinix Calculators team. Find our email, social links, and support information.',
  keywords: ['contact', 'infinix calculators', 'support', 'email', 'social media', 'help'],
  alternates: {
    canonical: "https://infinixcalculator.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-slate-800 dark:text-slate-100 transition-colors">
      <h1 className="text-4xl font-extrabold text-primary dark:text-sky-400 mb-6">Contact Us</h1>
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
        We love hearing from our users! Whether you have a question, feedback, or just want to say hello, you can reach us through the channels below.
      </p>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Support Email</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-2">
        <a href="mailto:support@infinixcalc.com" className="text-primary dark:text-sky-400 underline">
          support@infinixcalc.com
        </a>
      </p>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Follow Us</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
        <li>
          <a href="https://twitter.com/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 underline">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/company/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
