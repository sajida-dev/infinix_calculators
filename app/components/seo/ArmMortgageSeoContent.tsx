import React from "react";

export default function ArmMortgageSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Adjustable-Rate Mortgages (ARM): Teaser Rates, Caps &amp; Payment Shock
        </h2>
        <p>
          An <strong>Adjustable-Rate Mortgage (ARM)</strong>, such as a 5/1, 7/1, or 10/1 hybrid ARM, offers a lower introductory &quot;teaser&quot; interest rate for a fixed initial period (5, 7, or 10 years). Afterward, the rate adjusts annually based on benchmark indices (SOFR) plus a lender margin.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Understanding ARM Rate Adjustment Caps (e.g. 2/2/5 Structure)
        </h3>
        <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Initial Cap (First Number):</strong> Maximum the rate can increase at the first adjustment date (e.g., 2%).</li>
          <li><strong>Periodic Cap (Second Number):</strong> Maximum the rate can change in any subsequent adjustment year (e.g., 2%).</li>
          <li><strong>Lifetime Cap (Third Number):</strong> Absolute maximum the interest rate can ever rise above the initial rate (e.g., 5%).</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Worst-Case Monthly Payment Calculation
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Borrowing <strong>$300,000</strong> on a 5/1 ARM at a 6.0% initial rate costs <strong>$1,798.65 / month</strong>. If rates jump to the 11.0% lifetime cap after year 5, the monthly payment increases by over $1,000 to <strong>$2,809.50 / month</strong>.
        </p>
      </div>
    </article>
  );
}
