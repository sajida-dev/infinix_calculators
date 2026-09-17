import React from "react";

export default function SellerFinancingSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Seller Financing &amp; Hard Money Loans: Balloon Amortization Mechanics
        </h2>
        <p>
          In <strong>seller financing (owner carry / contract for deed)</strong> and short-term private <strong>hard money lending</strong>, loan agreements are often structured with 30-year amortizations but carry a 3, 5, or 7-year <strong>balloon payment deadline</strong>.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Remaining Balloon Balance Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Balloon Balance = Principal × [(1 + r)^n - (1 + r)^p] ÷ [(1 + r)^n - 1]
        </p>
        <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
          <li><strong>r:</strong> Monthly interest rate (Annual APR ÷ 12).</li>
          <li><strong>n:</strong> Full amortization term in months (e.g., 30 yrs × 12 = 360 mos).</li>
          <li><strong>p:</strong> Balloon payment deadline in months (e.g., 5 yrs × 12 = 60 mos).</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Amortized vs. Interest-Only Balloon Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Structure ($200k at 7.0% APR)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Monthly Payment</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">5-Year Balloon Due</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Total 5-Yr Interest Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">30-Yr Amortized with 5-Yr Balloon</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$1,330.60 / mo</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">$189,486.20</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$69,322.20</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Interest-Only with 5-Yr Balloon</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$1,166.67 / mo</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-rose-600 font-bold">$200,000.00 (Full Principal)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$70,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
