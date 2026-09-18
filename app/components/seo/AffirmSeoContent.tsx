import React from "react";

export default function AffirmSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          How Affirm Loan Interest, Down Payments &amp; Pay-in-4 Work
        </h2>
        <p>
          Buy Now, Pay Later (BNPL) platforms like Affirm provide consumer installment financing at point-of-sale. Plan terms, APR, fees, payment timing, and eligibility can vary by merchant, product, borrower, and offer. Use this page as an independent estimate and review the lender's actual disclosure before accepting an offer.
        </p>
      </div>

      {/* Pay in 4 Schedule Matrix */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Affirm Pay in 4 Schedule Breakdown ($375 Order Example)
        </h3>
        <p className="text-sm">
          This $375 example illustrates four equal payments under a hypothetical 0% APR Pay in 4 offer. Eligibility, minimums, payment timing, and available terms can vary, so confirm the offer shown at checkout:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Payment Milestone</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Due Date</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Amount Due</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Interest / Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border">
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Payment 1 (Down Payment)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Today (Checkout)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">$93.75</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$0.00 (0% APR)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Payment 2</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">2 Weeks Later (Day 14)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">$93.75</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$0.00 (0% APR)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Payment 3</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">4 Weeks Later (Day 28)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">$93.75</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$0.00 (0% APR)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Payment 4 (Final)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">6 Weeks Later (Day 42)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">$93.75</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$0.00 (0% APR)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Affirm Simple Interest Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Total Interest = Principal (P) × (Annual APR ÷ 100) × (Term in Months ÷ 12)
        </p>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Monthly Payment = (Principal + Total Interest) ÷ Term in Months
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *Note: This is a simplified estimate. Review the actual offer disclosure for APR, fees, payment schedule, late-payment treatment, and prepayment terms.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Affirm Monthly APR Tier Comparison Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Loan Amount</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Term</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">0% Promo APR</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">15% Standard APR</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">30% Max APR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">$500</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">6 Months</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$83.33/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$87.08/mo ($22.50 int)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-amber-600">$90.83/mo ($45.00 int)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">$1,000</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">12 Months</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$83.33/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$95.83/mo ($150.00 int)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-amber-600">$108.33/mo ($300.00 int)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">$2,500</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">24 Months</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600">$104.16/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$135.41/mo ($750.00 int)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-amber-600">$166.66/mo ($1,500.00 int)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Does Paying Off Affirm Early Save You Money on Interest?
        </h3>
        <p>
          Early payoff may change the interest you pay, but the result depends on the specific agreement and payment schedule. Check the actual offer disclosure for payoff terms and do not assume every plan uses the same calculation.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-xs text-blue-900 dark:text-blue-200">
        <span className="font-bold">Independent Calculation Notice: </span>
        Infinix Calculators is an independent computational research resource and is not affiliated with or endorsed by Affirm, Inc. All trademarks belong to their respective holders.
      </div>
    </article>
  );
}
