import { calculatorsData } from "../data/calculatorsData";

interface CalculatorFaqsProps {
  slug: string;
  title?: string;
}

export default function CalculatorFaqs({ slug, title }: CalculatorFaqsProps) {
  const calc = calculatorsData[slug];

  if (!calc || !calc.faqs || calc.faqs.length === 0) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": calc.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, ''), // Strip HTML for schema
      },
    })),
  };

  return (
    <section className="py-6">
      {/* Dynamic JSON-LD FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 pb-3 border-b border-slate-200/80">
        {title || `Frequently Asked Questions About ${calc.name}`}
      </h2>

      <div className="divide-y divide-slate-200/80">
        {calc.faqs.map((faq, index) => (
          <details key={index} className="group py-4" open={index === 0}>
            <summary className="flex cursor-pointer items-center gap-3 text-slate-900 font-bold text-sm sm:text-base list-none focus:outline-none">
              <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <span>{faq.question}</span>
            </summary>
            <div
              className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 [&_a]:text-primary [&_a]:font-medium [&_a]:underline [&_a:hover]:text-primary-hover space-y-2"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </details>
        ))}
      </div>
    </section>
  );
}
