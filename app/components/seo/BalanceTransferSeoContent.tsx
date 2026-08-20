import React from "react";

export default function BalanceTransferSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Credit Card Balance Transfer Savings &amp; Fee Breakeven Math
        </h2>
        <p>
          A credit card balance transfer allows borrowers to move high-interest credit card debt (typically 20% to 29% APR) to a new credit card offering a <strong>0% introductory APR</strong> for 12 to 21 months.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Net Transfer Savings Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Net Savings = Cumulative Interest on Old Card - Upfront Transfer Fee (3% to 5%)
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Example: On an $8,000 balance at 24% APR over a 15-month promo period, you would pay ~$1,600 in interest on your old card. With a 3% transfer fee ($240), your <strong>net interest savings is $1,360</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          3 Critical Rules for Balance Transfer Success
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Pay Off Before Promo Expiration:</strong> Once the 0% promotional window closes, any remaining balance resets to the standard APR (often 24.99%+).</li>
          <li><strong>Avoid New Purchases on the Card:</strong> Many issuers do not apply 0% APR to new purchases, creating mixed-rate interest charges.</li>
          <li><strong>Factor in Upfront Fees:</strong> A 3% to 5% fee is immediately added to the new card balance. Divide your total balance (principal + fee) by the promo months to set an exact zero-balance monthly payment.</li>
        </ul>
      </div>
    </article>
  );
}
