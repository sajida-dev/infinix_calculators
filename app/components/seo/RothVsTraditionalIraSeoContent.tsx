import React from "react";

export default function RothVsTraditionalIraSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Roth vs. Traditional IRA / 401(k): Tax Timing &amp; Conversion Math
        </h2>
        <p>
          The fundamental difference between <strong>Traditional (Pre-Tax)</strong> and <strong>Roth (Post-Tax)</strong> retirement accounts comes down to when income taxes are paid: today vs. at retirement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Traditional IRA / 401(k) Mechanics</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Contributions are tax-deductible today, lowering your current taxable income. Growth is tax-deferred, and withdrawals in retirement are taxed as ordinary income at your future tax rate.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Roth IRA / 401(k) Mechanics</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Contributions are made with post-tax dollars (no upfront tax deduction). All capital gains, dividends, and compound growth compound 100% tax-free, and qualified withdrawals after age 59½ are completely tax-free.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The Roth Conversion Tax Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Conversion Tax Due = Converted Traditional Pre-Tax Balance × Current Marginal Income Tax Rate
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <strong>Critical Strategy:</strong> Always pay the conversion tax using external non-retirement cash reserves. Withholding taxes from the conversion amount reduces the compounding principal and triggers a 10% early withdrawal penalty if under age 59½.
          </p>
        </div>
      </div>
    </article>
  );
}
