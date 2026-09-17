import React from "react";

export default function MichiganTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Michigan State Income Tax: Flat Rate Withholding &amp; City Income Taxes
        </h2>
        <p>
          The State of Michigan levies a <strong>flat individual income tax rate of 4.25%</strong> on taxable income. Unlike states with progressive brackets, every dollar of taxable income is taxed at the exact same percentage rate.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Michigan Net Paycheck Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Net Pay = Gross Pay - (Gross Pay × 4.25% MI State Tax) - (Gross Pay × 7.65% FICA) - Federal Withholding - Local City Tax
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Michigan Municipal City Income Taxes
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Over 20 Michigan cities levy local municipal income taxes in addition to state tax:
        </p>
        <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Detroit:</strong> 2.40% resident / 1.20% non-resident</li>
          <li><strong>Grand Rapids:</strong> 1.50% resident / 0.75% non-resident</li>
          <li><strong>Lansing / Flint / Saginaw:</strong> 1.00% resident / 0.50% non-resident</li>
        </ul>
      </div>
    </article>
  );
}
