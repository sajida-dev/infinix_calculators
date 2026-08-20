import React from "react";
import { homepageFaqs } from "../data/faqs/homepageFaqs";

export default function HomepageFaqs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, ""),
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#191a1d] border-t border-slate-200 dark:border-[#4D5156] transition-colors">
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to know about our free calculation platform, formula methodologies, and privacy standards.
          </p>
        </div>

        <div className="bg-white dark:bg-[#22242A] rounded-2xl border border-slate-200/80 dark:border-[#4D5156] p-6 sm:p-8 shadow-xs divide-y divide-slate-200/80 dark:divide-[#4D5156]">
          {homepageFaqs.map((faq, index) => (
            <details key={index} className="group py-4.5 first:pt-0 last:pb-0" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base list-none focus:outline-none select-none">
                <span>{faq.question}</span>
                <span className="shrink-0 text-slate-400 dark:text-slate-400 group-open:rotate-180 transition-transform duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div
                className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pr-6 [&_a]:text-primary dark:[&_a]:text-sky-400 [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-primary-hover"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
