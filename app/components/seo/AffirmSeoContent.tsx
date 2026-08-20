import React from "react";
import Link from "next/link";

export default function AffirmSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          How Affirm Loan Interest &amp; Payment Calculations Work
        </h2>
        <p>
          Buy Now, Pay Later (BNPL) platforms like Affirm provide consumer installment loans at point-of-sale. Unlike traditional revolving credit cards that calculate interest using compound daily balances, Affirm calculates interest using <strong>simple fixed interest</strong> on the starting loan principal balance.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
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
          *Note: Affirm does not charge late fees, prepayment penalties, or hidden origination compounding fees.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Affirm APR Tier Comparison Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Loan Amount</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Term</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">0% Promo APR</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">15% Standard APR</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">30% Max APR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">$500</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">6 Months</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600">$83.33/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">$87.08/mo ($22.50 int)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-amber-600">$90.83/mo ($45.00 int)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">$1,000</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">12 Months</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600">$83.33/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">$95.83/mo ($150.00 int)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-amber-600">$108.33/mo ($300.00 int)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">$2,500</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">24 Months</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600">$104.16/mo ($0 fee)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">$135.41/mo ($750.00 int)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-amber-600">$166.66/mo ($1,500.00 int)</td>
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
          <strong>Yes.</strong> Because Affirm uses simple uncompounded interest, if you make early partial payments or pay off the entire outstanding loan balance before the final scheduled date, you only pay interest accrued during the time the loan was open. There are zero early repayment penalties.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-xs text-blue-900 dark:text-blue-200">
        <span className="font-bold">Independent Calculation Notice: </span>
        Infinix Calculators is an independent computational research resource and is not affiliated with or endorsed by Affirm, Inc. All trademarks belong to their respective holders.
      </div>
    </article>
  );
}
