import React from "react";

export default function MortgageRecastSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Mortgage Recast vs Refinance: What&apos;s the Real Difference?
        </h2>
        <p>
          A <strong>mortgage recast</strong> (also called a &quot;re-amortization&quot;) lets you apply a lump-sum payment toward your principal balance while keeping your original interest rate, loan term, and closing costs unchanged. The lender simply re-calculates a lower monthly payment based on the reduced balance over the remaining term.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Recast Keeps Your Rate</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Unlike refinancing, a recast does not require a new credit check, new appraisal, or new closing disclosure. It typically only costs a small $150–$300 processing fee, making it far cheaper than a full refinance.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Not All Lenders & Loans Qualify</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Most conventional loans allow recasting, but FHA, VA, and USDA loans generally do not. Check with your loan servicer to confirm eligibility and any minimum lump-sum requirement (often $5,000–$10,000+).
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Recast Payment Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            New Payment = Amortize(Balance − Lump Sum, Same Rate, Same Remaining Term)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: A $50,000 lump sum on a $300,000 balance at 6.5% with 25 years remaining meaningfully lowers the monthly P&amp;I payment while the loan payoff date stays exactly the same.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Recast vs Extra Principal Payments
        </h3>
        <p>
          Making extra principal payments without recasting shortens your loan term but keeps the monthly payment the same. Recasting instead lowers the monthly payment immediately — ideal for homeowners who want reduced fixed monthly obligations rather than an earlier payoff date.
        </p>
      </div>
    </article>
  );
}
