import React from "react";

export default function MortgageKentuckySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Kentucky Mortgage Planning: County Property Taxes &amp; PITI Calculations
        </h2>
        <p>
          Estimating monthly home loan obligations in the Commonwealth of Kentucky requires calculating amortized Principal &amp; Interest alongside local county/city property taxes (averaging <strong>0.85% of assessed value</strong>) and hazard homeowners insurance.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Kentucky PITI Monthly Payment Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Total PITI = Principal &amp; Interest + (Home Price × 0.85% ÷ 12) + (Home Price × 0.62% ÷ 12)
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Kentucky Homestead Exemption
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Homeowners in Jefferson (Louisville), Fayette (Lexington), and Boone counties who are 65 or older, or classified as totally disabled, qualify for the <strong>Kentucky Homestead Exemption</strong>, which deducts over $46,000 from the assessed value of their primary residence.
        </p>
      </div>
    </article>
  );
}
