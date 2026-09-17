import React from "react";

export default function PawnSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Pawn Shop Collateral Loans: Valuation Rules &amp; APR Economics
        </h2>
        <p>
          A <strong>pawn loan</strong> is a short-term collateralized cash loan where personal items (jewelry, firearms, luxury watches, musical instruments, tools) are held as security for an agreed term (typically 30 to 90 days).
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The 30% to 50% Valuation Rule
        </h3>
        <p className="text-xs sm:text-sm">
          Pawn shops rarely lend based on original retail purchase price. Instead, they determine fair market wholesale/resale value (e.g. recent eBay sold comps) and offer a loan principal equal to <strong>30% to 50% of resale value</strong> to mitigate downside risk if the item is forfeited.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Total Repayment &amp; Annualized APR Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Total Repayment = Loan Principal + (Loan Principal × Monthly Finance Rate × Term Months)
          </p>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base">
            Annualized APR (%) = Monthly Interest Rate (%) × 12
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            *A monthly finance charge of 10% translates to an effective <strong>120% APR</strong> under Truth in Lending standards.
          </p>
        </div>
      </div>
    </article>
  );
}
