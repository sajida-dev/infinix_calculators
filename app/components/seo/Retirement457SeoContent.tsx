import React from "react";

export default function Retirement457SeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Governmental 457(b) Deferred Compensation: Rules &amp; Compound Growth
        </h2>
        <p>
          A <strong>governmental 457(b) plan</strong> is a non-qualified, tax-advantaged deferred-compensation retirement plan available to state and local municipal employees, public school educators, law enforcement officers, and firefighters.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">No 10% Early Withdrawal Penalty</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Unlike 401(k) and 403(b) accounts, governmental 457(b) plans allow penalty-free distributions at <strong>any age</strong> once you separate from your employer (subject only to regular ordinary income tax).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Dual Contribution Limits</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            If your public employer offers both a 403(b) and a 457(b), you can contribute the full annual elective deferral limit ($23,000+ base) to <strong>both plans simultaneously</strong>, doubling your tax-sheltered savings.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Monthly Compounding Future Value Formula
        </h3>
        <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            FV = Initial Principal × (1 + r)^n + Monthly Contribution × [((1 + r)^n - 1) ÷ r]
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Where <em>r</em> is the monthly rate of return (annual return ÷ 12) and <em>n</em> is total months to retirement.
          </p>
        </div>
      </div>
    </article>
  );
}
