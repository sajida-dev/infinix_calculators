import React from "react";

export default function ProductivitySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Measuring Employee Output, Quotas &amp; Labor Efficiency Ratios
        </h2>
        <p>
          In manufacturing operations, software engineering sprints, and corporate services, <strong>labor productivity</strong> measures the volume of goods, units, or tasks produced per labor hour or against established organizational baseline targets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Target Efficiency Quota Formula</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            Efficiency (%) = (Actual Units Completed ÷ Target Benchmark Units) × 100
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Completing 140 tickets in a queue where standard performance is 120 yields a <strong>116.6% productivity rating</strong>.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Labor Productivity (Revenue / Hr)</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            Labor Productivity = Total Revenue Generated ÷ Total Direct Hours Worked
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For a design agency generating $45,000 across 300 billable client hours, the team generates <strong>$150.00 / hour</strong> in gross labor productivity.
          </p>
        </div>
      </div>
    </article>
  );
}
