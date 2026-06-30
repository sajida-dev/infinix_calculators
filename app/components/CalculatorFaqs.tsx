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

  return (
    <section className="py-6">
      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 pb-3 ">
        {title || `Frequently Asked Questions About ${calc.name}`}
      </h2>

      <div>
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
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
