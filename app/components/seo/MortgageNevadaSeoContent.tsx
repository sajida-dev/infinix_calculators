import React from "react";

export default function MortgageNevadaSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Nevada Mortgage Payments: Low Property Tax, No State Income Tax
        </h2>
        <p>
          Nevada is one of the most tax-friendly states for homeowners: it levies <strong>no state income tax</strong> and carries a below-national-average effective property tax rate of roughly 0.48%–0.60%. This keeps monthly escrow obligations lower than comparably priced homes in high-tax states.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">HOA Fees in Master-Planned Communities</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Many Las Vegas and Reno master-planned communities carry monthly HOA dues of $50–$300+, which are not captured in a standard PITI (Principal, Interest, Taxes, Insurance) payment but should be budgeted as a fixed additional housing cost.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">SID/LID Assessments</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Some newer Nevada developments carry Special or Local Improvement District (SID/LID) bond assessments on the tax bill to fund infrastructure — always check the county assessor record for these add-on charges before finalizing a budget.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Nevada Monthly Payment Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            M = P × [i(1+i)^n] ÷ [(1+i)^n − 1] + (Home Value × Tax Rate ÷ 12) + (Annual Insurance ÷ 12)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: $450,000 home, 10% down, 6.8% rate, 30-year term, 0.48% NV tax rate ≈ $2,950 monthly payment including escrow.
          </p>
        </div>
      </div>
    </article>
  );
}
