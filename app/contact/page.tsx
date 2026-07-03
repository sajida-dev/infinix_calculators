import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Infinix Calculators',
  description: 'Get in touch with the Infinix Calculators team. Find our email, social links, and support information.',
  keywords: ['contact', 'infinix calculators', 'support', 'email', 'social media', 'help'],
};

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 prose prose-lg text-slate-800">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-slate-700 mb-4">
        We love hearing from our users! Whether you have a question, feedback, or just want to say hello, you can reach us through the channels below.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Support Email</h2>
      <p className="text-slate-600 mb-2">
        <a href="mailto:support@infinixcalc.com" className="text-primary underline">
          support@infinixcalc.com
        </a>
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Follow Us</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>
          <a href="https://twitter.com/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/company/infinixcalc" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
