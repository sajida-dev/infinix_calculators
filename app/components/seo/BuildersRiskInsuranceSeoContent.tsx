import React from "react";

export default function BuildersRiskInsuranceSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Builders Risk Insurance: Protecting a Property Mid-Construction
        </h2>
        <p>
          <strong>Builders risk insurance</strong> (also called course-of-construction insurance) covers a structure, materials, and equipment against fire, wind, theft, and vandalism while a building is under construction or major renovation — a standard homeowners policy does not cover an unfinished structure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Risk-Tier Rate Bands</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Premiums are typically quoted as 1%–3.5% of total construction value, scaled by risk tier: low risk (new suburban builds), medium risk (custom or coastal builds), and high risk (high-crime or commercial structures).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Policy Term Must Match Project Timeline</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Construction delays are common — failing to extend policy duration when a project runs past its original schedule can void coverage right when it&apos;s needed most.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Premium Estimation Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Premium = Construction Budget × Risk Rate; Monthly Cost = Premium ÷ Project Term (Months)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: A $200,000 medium-risk build at a 2% rate costs $4,000 for a 12-month policy term, or roughly $333/month.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          When Lenders Require Builders Risk Coverage
        </h3>
        <p>
          Most construction loan lenders require proof of an active builders risk policy before closing and disbursing funds. Buying coverage before breaking ground — rather than mid-project — is almost always cheaper and avoids gaps in protection.
        </p>
      </div>
    </article>
  );
}
