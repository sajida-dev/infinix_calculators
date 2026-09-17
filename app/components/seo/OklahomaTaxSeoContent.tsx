import React from "react";

export default function OklahomaTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Oklahoma State Income Tax: Progressive Brackets &amp; Standard Deductions
        </h2>
        <p>
          The Oklahoma individual income tax system uses a <strong>six-tier progressive bracket structure</strong> with marginal rates ranging from 0.25% up to a top rate of 4.75% applied to taxable income after subtracting standard state deductions.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Oklahoma Standard Deductions
        </h3>
        <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Single / Married Filing Separately:</strong> $6,350</li>
          <li><strong>Married Filing Jointly / Qualifying Surviving Spouse:</strong> $12,700</li>
          <li><strong>Head of Household:</strong> $9,350</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Oklahoma Marginal Income Tax Brackets (Single Filer)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Taxable Income Bracket</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Marginal Rate</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Tax Calculation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$0 – $1,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-sky-600">0.25%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">0.25% of taxable income</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$1,001 – $2,500</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-sky-600">0.75%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$2.50 + 0.75% of excess over $1,000</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$2,501 – $3,750</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">1.75%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$13.75 + 1.75% of excess over $2,500</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$3,751 – $4,900</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">2.75%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$35.63 + 2.75% of excess over $3,750</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$4,901 – $7,200</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-amber-600">3.75%</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$67.25 + 3.75% of excess over $4,900</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">Over $7,200</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-rose-600">4.75% (Top)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">$153.50 + 4.75% of excess over $7,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
