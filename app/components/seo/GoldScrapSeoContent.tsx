import React from "react";

export default function GoldScrapSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          How Scrap Gold & Silver Melt Value Is Really Calculated
        </h2>
        <p>
          Scrap jewelry and coin buyers do not pay the full spot price quoted on financial news tickers. Instead, they pay based on the <strong>pure metal content</strong> of your item, derived from its karat or purity stamp, then apply a discount off melt value to cover refining costs and profit margin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Troy Ounces vs Standard Ounces</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Precious metals are priced in <strong>Troy ounces (31.1035 grams)</strong>, not the standard Avoirdupois ounce (28.35 grams) used for food or shipping weight. Using the wrong ounce definition alone creates a ~10% valuation error.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Karat Purity Table</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            10K = 41.7% pure, 14K = 58.3% pure, 18K = 75.0% pure, 24K = 99.9% pure. Sterling silver is stamped &quot;925&quot; and is 92.5% pure silver.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Melt Value Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Melt Value = Weight (g) × Purity % × (Spot Price ÷ 31.1035)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: 10g of 14K gold at a $2,400/oz spot price = 10 × 0.583 × ($2,400 ÷ 31.1035) ≈ $450.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Why Buyers Pay Less Than 100% of Melt Value
        </h3>
        <p>
          Pawn shops and scrap dealers typically offer <strong>70%–90% of calculated melt value</strong> to cover refining loss, assay testing, and profit margin. Mail-in gold buyers often pay on the lower end (50%-70%), while local coin shops that sell direct to refiners tend to offer more competitive rates.
        </p>
      </div>
    </article>
  );
}
