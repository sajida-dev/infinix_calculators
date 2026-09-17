import React from "react";

export default function LosertownCalorieSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Metabolic Deficit Math: Mifflin-St Jeor Equations &amp; 1-Year Projections
        </h2>
        <p>
          The <strong>Losertown Calorie projection model</strong> uses metabolic rate physics to map weight loss timelines over 4, 8, 12, 24, and 52 weeks. By calculating your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE), it projects fat loss as your caloric deficit compounds over time.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Mifflin-St Jeor Clinical BMR Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            <strong>For Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in yrs) + 5
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            <strong>For Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in yrs) - 161
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">The 3,500 kcal Deficit Rule</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            One pound of human adipose adipose tissue stores approximately 3,500 kilocalories of chemical energy. A cumulative daily deficit of 500 kcal produces exactly 1 lb of fat loss per 7-day cycle.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Metabolic Adaptation Dynamic</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            As you shed body mass, your BMR naturally decreases because a smaller body requires less basal energy to maintain vital functions. Projections adjust dynamically at each multi-week milestone.
          </p>
        </div>
      </div>
    </article>
  );
}
