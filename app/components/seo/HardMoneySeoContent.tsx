import React from "react";

export default function HardMoneySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Real Estate Hard Money Financing: Points, Interest-Only Debt &amp; ARV
        </h2>
        <p>
          In residential real estate investing and fix-and-flip projects, <strong>hard money loans</strong> are asset-based short-term financing vehicles (6 to 18 months) used to acquire and renovate distressed properties that traditional mortgage banks refuse to finance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Upfront Lender Points Fee</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            Points Fee = Total Loan Principal × (Points % ÷ 100)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Hard money lenders typically charge <strong>1.5 to 3.5 points</strong> (1 point = 1% of the loan amount) as an upfront origination fee at closing.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Interest-Only Debt Service</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            Monthly Payment = (Loan Principal × Annual Interest Rate) ÷ 12
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Interest rates typically range from <strong>10.0% to 14.0%</strong>. Principal is repaid as a lump sum when the property is sold or refinanced.
          </p>
        </div>
      </div>
    </article>
  );
}
