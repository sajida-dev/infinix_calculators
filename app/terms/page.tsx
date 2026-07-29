import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Infinix Calculators',
  description: 'Read the Terms and Conditions governing the use of Infinix Calculators, a premium suite of professional online calculators.',
  keywords: ['terms and conditions', 'infinix calculators', 'usage policy', 'privacy terms', 'online calculator terms', 'legal disclaimer', 'service agreement'],
  alternates: {
    canonical: "https://infinixcalculator.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 text-slate-800 dark:text-slate-100 transition-colors">
      <h1 className="text-4xl font-extrabold text-primary dark:text-sky-400 mb-6">Terms and Conditions</h1>
      <p className="text-slate-700 dark:text-slate-300">Welcome to Infinix Calculators. By accessing or using our website and services, you agree to comply with and be bound by the following terms:</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>1. Acceptance of Terms</h2>
      <p className="text-slate-700 dark:text-slate-300">These Terms and Conditions constitute a legal agreement between you and Infinix Calculators. If you do not agree with any part of these terms, you must discontinue use of the site immediately.</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>2. Use of Services</h2>
      <p className="text-slate-700 dark:text-slate-300">Our calculators are provided free of charge for personal and commercial use. You may not:</p>
      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mt-2">
        <li>Redistribute, sell, or license any part of the service without explicit written permission.</li>
        <li>Attempt to reverse‑engineer or extract the underlying source code.</li>
        <li>Use the service for illegal activities or to infringe third‑party rights.</li>
      </ul>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>3. Intellectual Property</h2>
      <p className="text-slate-700 dark:text-slate-300">All content, designs, and code are the intellectual property of Infinix Calculators and are protected by applicable copyright laws. The source code is publicly available on GitHub under the MIT license.</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>4. Disclaimer of Warranties</h2>
      <p className="text-slate-700 dark:text-slate-300">The calculators are provided “as is” without any warranties of accuracy, reliability, or fitness for a particular purpose. Use the results at your own risk.</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>5. Limitation of Liability</h2>
      <p className="text-slate-700 dark:text-slate-300">Infinix Calculators shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the service.</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>6. Changes to Terms</h2>
      <p className="text-slate-700 dark:text-slate-300">We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4'>7. Contact</h2>
      <p className="text-slate-700 dark:text-slate-300">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@infinixcalc.com" className="text-primary dark:text-sky-400 underline">support@infinixcalc.com</a>.</p>
    </section>
  );
}
