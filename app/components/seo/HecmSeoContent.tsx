import React from "react";

export default function HecmSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          FHA HECM Reverse Mortgage Rules, Principal Limit Factors &amp; Payout Formulas
        </h2>
        <p>
          A <strong>Home Equity Conversion Mortgage (HECM)</strong> is a government-backed reverse mortgage insured by the Federal Housing Administration (FHA) and regulated by HUD. It enables senior homeowners (age 62 or older) to convert home equity into tax-free cash proceeds without required monthly mortgage payments.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The HECM Principal Limit (Borrowing Capacity) Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Gross Principal Limit = Min(Appraised Home Value, FHA Maximum Claim Limit) × Principal Limit Factor (PLF)
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *The Principal Limit Factor (PLF) is determined by HUD tables based on the age of the youngest borrower (or non-borrowing spouse) and the expected interest rate (10-year Treasury CMT margin).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Age-Based Proceeds Progression</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Older borrowers receive higher borrowing percentages because of shorter actuarial life expectancies. A 62-year-old typically accesses ~35-42% of home value, while an 82-year-old may access 60-65%+.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Mandatory Lien Payoffs</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            HUD requires any existing primary mortgage, HELOC, or tax liens to be paid off in full at closing using HECM proceeds before any remaining net cash is disbursed to the homeowner.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          HECM Payout Options Breakdown
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Lump Sum:</strong> Fixed-rate single advance at closing (subject to first-year 60% mandatory utilization caps).</li>
          <li><strong>Growing Line of Credit (LOC):</strong> The unused portion of the credit line grows over time regardless of home value fluctuations.</li>
          <li><strong>Tenure Payments:</strong> Guaranteed monthly cash advances for as long as at least one borrower lives in the home as primary residence.</li>
        </ul>
      </div>
    </article>
  );
}
