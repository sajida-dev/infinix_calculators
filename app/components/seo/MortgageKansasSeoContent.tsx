import React from "react";

export default function MortgageKansasSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Kansas Mortgage Planning: Mill Levies &amp; Property Tax Calculations
        </h2>
        <p>
          Estimating home ownership costs in Kansas requires modeling your amortized loan balance alongside Kansas county <strong>mill levies</strong> and severe weather homeowners insurance premiums.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          How Kansas Property Tax Mill Levies Work
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Assessed Value = Appraised Home Value × 11.5% (Residential Assessment Rate)
        </p>
        <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base">
          Annual Tax = (Assessed Value × Total County Mill Levy) ÷ 1,000
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *The statewide effective residential tax rate averages approximately <strong>1.34% to 1.45%</strong> of fair market appraisal value (Sedgwick, Johnson, and Shawnee counties).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Tornado &amp; Hail Insurance Considerations
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Due to regional windstorm, hail, and convective storm activity in the Great Plains, homeowners insurance in Kansas typically ranges from 0.60% to 0.95% of home value annually, which is collected in monthly escrow alongside property taxes.
        </p>
      </div>
    </article>
  );
}
