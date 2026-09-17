import React from "react";

export default function BridgeLoanSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Transitional Bridge Financing: LTV Calculations &amp; Carrying Costs
        </h2>
        <p>
          A <strong>bridge loan (swing loan)</strong> is a short-term financing tool (typically 6 to 12 months) designed to help homeowners purchase a new home before their current home sells by leveraging the equity locked in their existing property.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Maximum Bridge Loan Borrowing Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Max Bridge Amount = (Current Home Appraised Value × Max LTV Cap) - Existing Mortgage Balance
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *Most institutional bridge lenders enforce a maximum cumulative Loan-to-Value (CLTV) limit between 75% and 80%.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Interest-Only Carrying Costs Case Study
        </h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-xs sm:text-sm space-y-2">
          <p><strong>Property:</strong> $500,000 value with a $250,000 primary mortgage at 80% maximum CLTV.</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
            <li>Max Combined Lending Limit: $500,000 × 0.80 = $400,000</li>
            <li>Net Bridge Proceeds Available: $400,000 - $250,000 = <strong>$150,000</strong></li>
            <li>Monthly Interest at 9.0% APR: ($150,000 × 0.09) ÷ 12 = <strong>$1,125.00 / month</strong></li>
          </ul>
        </div>
      </div>
    </article>
  );
}
