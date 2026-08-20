import React from "react";

export default function RentVsSellSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Rent vs. Sell: Evaluating Landlord Cash Flow &amp; Return on Equity (ROE)
        </h2>
        <p>
          When relocating or upgrading to a new primary residence, homeowners face a critical financial decision: <strong>liquidate home equity today</strong> or <strong>retain the property as a long-term rental</strong>.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Landlord Return on Equity (ROE) Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          ROE (%) = [Annual Net Rental Cash Flow ÷ Net Immediate Sales Equity] × 100
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *If your Return on Equity is under 5% to 6%, your home equity is working inefficiently as a rental and would likely generate superior, hands-off yields invested elsewhere (such as index funds or high-yield bonds).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Section 121 Capital Gains Exclusion</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            If you lived in the property for 2 of the last 5 years, you can exclude up to <strong>$250,000</strong> (single) or <strong>$500,000</strong> (married) in capital gains tax-free. Converting it to a rental long-term may cause you to forfeit this exclusion.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Depreciation Recapture Rules</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Rental properties allow annual 27.5-year straight-line building depreciation deductions. However, when you eventually sell, the IRS taxes accumulated depreciation at a 25% recapture rate.
          </p>
        </div>
      </div>
    </article>
  );
}
