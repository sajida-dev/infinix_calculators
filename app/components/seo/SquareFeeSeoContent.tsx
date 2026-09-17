import React from "react";

export default function SquareFeeSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Square Merchant Processing Fee Formulas &amp; Reverse Invoicing Math
        </h2>
        <p>
          Square deducts merchant processing charges directly from the <strong>gross authorized transaction total</strong>—including item prices, state/local sales tax, shipping fees, and customer tips. To protect your profit margins and avoid under-invoicing, understanding the reverse gross-up formula is essential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Standard Fee (Deduction Math)</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            Fee = (Gross Sale × Rate) + Fixed Fee
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For a $100 in-person card reader charge (2.6% + $0.10): ($100 × 0.026) + $0.10 = $2.70 in fees. Net payout = $97.30.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Reverse Invoice (Gross-Up Math)</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            Invoice Total = (Desired Net + Fixed Fee) ÷ (1 - Rate)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            To net exactly $1,000 on an online invoice (2.9% + $0.30): ($1,000 + $0.30) ÷ 0.971 = $1,030.18.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Square Rates Breakdown (2026 Reference)
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Card Reader (Tap, Chip, Swiped):</strong> 2.6% + $0.10 per in-person transaction.</li>
          <li><strong>Digital Invoice &amp; Online Checkout:</strong> 2.9% + $0.30 per payment.</li>
          <li><strong>Manual Virtual Terminal Entry:</strong> 3.5% + $0.15 per keyed card.</li>
          <li><strong>International Card Surcharge:</strong> +1.0% additional fee on foreign cards.</li>
        </ul>
      </div>
    </article>
  );
}
