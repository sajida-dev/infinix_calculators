import React from "react";

export default function SellerClosingCostSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          What Home Sellers Actually Pay at Closing
        </h2>
        <p>
          Home sellers typically net <strong>92%–95% of the sale price</strong> after covering real estate commissions, transfer taxes, title/escrow fees, and any remaining mortgage payoff. A seller net sheet totals these deductions to project the actual cash proceeds you&apos;ll walk away with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Agent Commissions (5%–6%)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Commission is typically split between the listing agent and buyer&apos;s agent and is the largest single seller expense. Post-2024 NAR settlement changes make commission rates more negotiable than ever.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Transfer Taxes &amp; Title Fees</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            State and county transfer/stamp taxes (often 0.1%–2% of sale price) plus title insurance and escrow fees typically add another 1%–3% of the sale price to total seller costs.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Net Seller Proceeds Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Net Proceeds = Sale Price − Commission − Transfer Tax − Title/Escrow Fees − Mortgage Payoff
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: $400,000 sale, 5% commission ($20,000), $2,000 transfer tax, $2,500 title/escrow, $250,000 mortgage payoff ≈ $125,500 net cash to seller.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Costs Sellers Often Forget
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Prorated property taxes owed up to the closing date.</li>
          <li>Buyer-requested repair credits negotiated after inspection.</li>
          <li>HOA transfer or resale certificate fees.</li>
        </ul>
      </div>
    </article>
  );
}
