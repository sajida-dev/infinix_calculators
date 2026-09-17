import React from "react";

export default function ReverseTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Reverse Sales Tax Math: Extracting Net Base Price from Gross Receipts
        </h2>
        <p>
          A <strong>reverse sales tax calculation</strong> (also called back-calculating VAT or extracting sales tax) is used by accountants and business owners when only the final receipt total is known and they need to isolate the pre-tax item cost from the sales tax paid.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Proper Reverse Tax Division Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Pre-Tax Base Price = Gross Receipt Total ÷ (1 + Tax Rate)
        </p>
        <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base">
          Sales Tax Portion = Gross Receipt Total - Pre-Tax Base Price
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The Common Multiplication Mistake to Avoid
        </h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-xs sm:text-sm space-y-2">
          <p className="text-rose-600 dark:text-rose-400 font-bold">
            ❌ Incorrect Method (Direct Multiplication):
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Multiplying a $108.00 gross total by 8% yields $8.64 in tax, incorrectly giving a base cost of $99.36.
          </p>
          <p className="text-emerald-600 dark:text-emerald-400 font-bold pt-2">
            ✅ Correct Method (Division by 1 + Rate):
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            $108.00 ÷ (1 + 0.08) = $108.00 ÷ 1.08 = <strong>$100.00 exact base price</strong> and <strong>$8.00 exact tax</strong>.
          </p>
        </div>
      </div>
    </article>
  );
}
