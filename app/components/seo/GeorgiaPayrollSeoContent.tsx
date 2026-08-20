import React from "react";

export default function GeorgiaPayrollSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Georgia State Paycheck Calculations &amp; Flat Income Tax Transition
        </h2>
        <p>
          Calculating take-home pay in Georgia requires deducting federal income tax withholding, federal payroll taxes (Social Security &amp; Medicare), and the <strong>Georgia state individual income tax rate</strong> from gross earnings.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Georgia Net Paycheck Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Net Pay = Gross Earnings - Federal Income Tax - FICA (7.65%) - GA State Tax (5.39%) - Voluntary Deductions
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Under Georgia House Bill 1437 / HB 1015, Georgia transitioned from graduated tax brackets to a flat state individual income tax rate (5.39%), scheduled to gradually decrease to 4.99% in future tax years.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Form G-4 Allowances</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Employees in Georgia complete State Form G-4 to establish marital status and dependent allowances, which reduce taxable gross wages before state tax is applied.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Pre-Tax Benefits Impact</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Contributions to traditional 401(k) retirement accounts, HSA/FSA medical plans, and Section 125 cafeteria plans reduce both federal and state taxable income.
          </p>
        </div>
      </div>
    </article>
  );
}
