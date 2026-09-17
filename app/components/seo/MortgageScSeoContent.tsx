import React from "react";

export default function MortgageScSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          South Carolina Mortgage Financing: 4% Primary Assessment vs. 6% Secondary
        </h2>
        <p>
          South Carolina features some of the lowest effective property taxes in the United States (averaging <strong>0.56% of market value</strong> for primary residences). However, tax bills vary dramatically based on whether the home is registered as a legal primary residence or a secondary vacation/rental home.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">4% Primary Residence Assessment Ratio</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Owner-occupied primary residences are assessed at only <strong>4% of fair market value</strong> and are 100% exempt from school operating property taxes (Act 388), resulting in an effective tax rate of ~0.50% to 0.65%.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">6% Secondary / Rental Ratio</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Second homes, beach vacation rentals, and investment properties are assessed at <strong>6% of market value</strong> with no school operating tax exemption, causing property taxes to be 2.5× to 3× higher.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          South Carolina PITI Monthly Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Total PITI = Principal &amp; Interest + (Home Price × 0.56% ÷ 12) + (Home Price × 0.58% ÷ 12)
          </p>
        </div>
      </div>
    </article>
  );
}
