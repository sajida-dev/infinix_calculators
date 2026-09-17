import React from "react";

export default function VirginiaSalarySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Virginia Paycheck Calculations: Progressive State Brackets &amp; FICA
        </h2>
        <p>
          Calculating take-home pay in the Commonwealth of Virginia requires deducting Federal Income Tax, FICA mandatory contributions (6.2% Social Security + 1.45% Medicare), and Virginia’s <strong>four progressive marginal income tax brackets</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Virginia Individual State Income Tax Brackets
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Virginia Taxable Income Bracket</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Marginal Tax Rate</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">State Tax Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$0 – $3,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-sky-600">2.00%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">2% of taxable income</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$3,001 – $5,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-sky-600">3.00%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$60 + 3% of excess over $3,000</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$5,001 – $17,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">5.00%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$120 + 5% of excess over $5,000</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">Over $17,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-rose-600">5.75% (Top)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$720 + 5.75% of excess over $17,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Virginia Form VA-4 Personal Allowances</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Virginia provides a standard deduction of <strong>$8,000 for single filers</strong> and <strong>$16,000 for married couples filing jointly</strong>, plus a $930 personal exemption deduction per dependent claimed.
        </p>
      </div>
    </article>
  );
}
