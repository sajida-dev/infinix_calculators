import React from "react";

export default function CalstrsSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          CalSTRS Defined Benefit Pension: 2% at 60 vs. 2% at 62 Calculations
        </h2>
        <p>
          The <strong>California State Teachers&apos; Retirement System (CalSTRS)</strong> provides a lifetime defined-benefit pension to California public educators, calculated using service credits, age factors, and final compensation averages.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The CalSTRS Defined Benefit Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Annual Pension = Service Credit (Years) × Age Factor (%) × Final Compensation Average
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *Monthly Pension = Annual Pension ÷ 12.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">CalSTRS 2% at 60 (Hired &lt; 2013)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Normal retirement age is 60 (2.0% age factor). Retiring at 63 yields the maximum 2.4% age factor. Members with 30+ service years receive an additional <strong>0.2% career factor bonus</strong> (capped at 2.4%).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">CalSTRS 2% at 62 (PEPRA Tier)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            For teachers hired on or after January 1, 2013 under PEPRA. Normal retirement age is 62 (2.0% age factor), reaching the maximum 2.4% factor at age 65. Final compensation is calculated over 36 consecutive months.
          </p>
        </div>
      </div>
    </article>
  );
}
