import React from "react";

export default function LeaseVsBuyCarSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Lease vs. Buy Vehicle Economics: Depreciation, Money Factor &amp; Equity
        </h2>
        <p>
          Deciding whether to lease or purchase a new vehicle comes down to a comparison between <strong>short-term monthly cash flow</strong> and <strong>long-term asset equity</strong> after factoring in automotive depreciation curves.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Total Cost Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Total Lease Cost = Down Payment + (Monthly Lease Payment × Lease Term Months)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Net Buy Cost = Down Payment + (Loan Payment × Term Months) - Vehicle Residual Resale Value
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Converting Lease Money Factor to APR
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Dealership lease contracts specify the finance charge as a <strong>Money Factor (Rent Charge)</strong> rather than an APR. To calculate the equivalent annual interest rate, multiply the money factor by <strong>2,400</strong> (e.g. a Money Factor of 0.0025 × 2,400 = <strong>6.0% APR</strong>).
        </p>
      </div>
    </article>
  );
}
