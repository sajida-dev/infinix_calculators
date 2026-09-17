import React from "react";

export default function CreditCardPayoffSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Credit Card Amortization: Minimum Payment Traps &amp; CareCredit Formulas
        </h2>
        <p>
          Unlike fixed installment loans, credit card balances compound interest on a <strong>Daily Periodic Rate (DPR)</strong>. Paying only the lender’s minimum monthly payment (typically interest plus 1% to 2% of principal) extends debt payoff over 15 to 30 years and costs thousands in compound interest.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The CareCredit Deferred Interest Trap Explained
        </h3>
        <p className="text-xs sm:text-sm">
          Promotional financing cards (like CareCredit or Synchrony) offer &quot;No Interest if Paid in Full within 6, 12, 18, or 24 Months.&quot; However, these are <strong>deferred interest</strong> promotions, not true 0% APR.
        </p>
        <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
          ⚠️ If even $1.00 remains unpaid when the promotional term ends, the card issuer charges interest retroactively on the entire original purchase balance from Day 1 at standard rates (26.99% – 32.99% APR).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Fixed Payment Payoff Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Months to Pay Off = -ln[1 - (Balance × r ÷ Monthly Payment)] ÷ ln(1 + r)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Where <em>r</em> is the monthly interest rate (APR ÷ 12) and <em>ln</em> is the natural logarithm function.
          </p>
        </div>
      </div>
    </article>
  );
}
