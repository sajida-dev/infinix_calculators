import React from "react";
import Link from "next/link";

export default function CdRatesSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Certificate of Deposit (CD) Interest Math: APY, Compounding &amp; Ladder Strategies
        </h2>
        <p>
          A Certificate of Deposit (CD) is a federally insured time deposit (FDIC or NCUA up to $250,000 per depositor) that locks your principal for a fixed term in exchange for a guaranteed interest rate. Calculating true CD earnings requires understanding the difference between the nominal interest rate and the <strong>Annual Percentage Yield (APY)</strong>, which factors in daily or monthly compounding.
        </p>
      </div>

      {/* The Core CD Compound Interest Formula */}
      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Compound Interest &amp; APY Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Total Future Balance (A) = P × (1 + r / n)^(n × t)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Annual Percentage Yield (APY) = (1 + r / n)^n - 1
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[11px]">
            Where: P = Initial Principal Deposit ($), r = Nominal Annual Interest Rate (decimal), n = Compounding Frequency per year (365 for daily, 12 for monthly), t = Term duration in years.
          </p>
        </div>
      </div>

      {/* Term Comparison Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          $10,000 CD Investment Yield Scenarios Across Standard Maturity Terms
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">CD Term</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Sample APY</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Total Interest Earned</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Final Maturity Balance</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Liquidity Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">6-Month CD</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">5.00% APY</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">$246.95</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$10,246.95</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Short-term liquidity; ideal before anticipated rate changes.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">1-Year (12-Mo) CD</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">4.85% APY</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">$485.00</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$10,485.00</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Most popular consumer tier for fixed annual budgeting.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">2-Year (24-Mo) CD</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">4.50% APY</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">$920.25</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$10,920.25</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Locks yield during federal rate-cutting cycles.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">5-Year (60-Mo) CD</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">4.20% APY</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">$2,283.97</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">$12,283.97</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Long-term guaranteed capital preservation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Building a CD Ladder */}
      <div className="space-y-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          How to Build an Optimized CD Ladder Strategy
        </h3>
        <p>
          A <strong>CD Ladder</strong> is a disciplined cash management technique where you divide your total investment capital into equal tranches across varying maturity terms (e.g. 1-year, 2-year, 3-year, 4-year, and 5-year CDs).
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong>Rolling Liquidity:</strong> A portion of your total savings matures every 12 months, providing fee-free access to principal without breaking long-term CDs.</li>
          <li><strong>Reinvestment Upside:</strong> When interest rates climb, matured tranches are reinvested at higher yields.</li>
          <li><strong>Penalty Avoidance:</strong> Early withdrawal penalties (typically 90 to 365 days of interest) are minimized because you only access matured buckets.</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Related tools: Model multi-bucket savings with our <Link href="/calculators/cd-ladder" className="text-primary dark:text-sky-400 font-bold hover:underline">CD Ladder Calculator</Link> or compare with liquid returns using our <Link href="/calculators/money-market-rate" className="text-primary dark:text-sky-400 font-bold hover:underline">Money Market Rate Calculator</Link>.
        </p>
      </div>
    </article>
  );
}
