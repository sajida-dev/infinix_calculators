import React from "react";
import Link from "next/link";

export default function DinkytownSeoContent() {
  return (
    <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Overview */}
      <section className="border-t border-slate-200 dark:border-[#4D5156] pt-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Financial Decision Modeling: Savings Yields vs. High-Interest Debt Amortization
        </h2>
        <p>
          In personal wealth planning, evaluating your finances in silos leads to costly mistakes. The most common financial misstep is holding cash in low-yield savings accounts while simultaneously carrying high-interest revolving credit card balances.
        </p>
        <p>
          Inspired by traditional Dinkytown financial calculator logic, our <Link href="/calculators/dinkytown" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">Dinkytown Financial Calculator</Link> models compound interest accumulation and debt amortization side-by-side to determine your true <strong>Net Worth Delta</strong>.
        </p>
      </section>

      {/* The Mathematics of Negative Arbitrage */}
      <section className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          The Guaranteed Return Principle: Debt Payoff vs. Savings APY
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Paying down a credit card balance with an <strong>18% to 24.99% APR</strong> delivers an immediate, risk-free, tax-free return equal to the interest avoided:
        </p>
        <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156] font-mono text-xs sm:text-sm space-y-2">
          <p className="text-primary dark:text-sky-400 font-bold">
            Net Arbitrage (%) = Savings APY % - Debt APR %
          </p>
          <p className="text-rose-600 dark:text-rose-400 font-bold">
            Example: 4.5% HYSA Yield - 21.0% Credit Card APR = -16.5% Annual Wealth Loss
          </p>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Carrying a $5,000 credit card balance at 21% APR costs <strong>$1,050 per year in interest</strong>. Keeping that same $5,000 in a savings account at 4.5% yields only <strong>$225 in taxable interest</strong> ($168 after 25% tax), resulting in an annual net loss of <strong>$882</strong>.
        </p>
      </section>

      {/* Comparison: Debt Avalanche vs. Debt Snowball */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Debt Payoff Strategies: Avalanche vs. Snowball
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Strategy</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Target Order</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Primary Advantage</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Mathematical Efficiency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-primary dark:text-sky-400">Debt Avalanche</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Highest APR to Lowest APR</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Minimizes total lifetime interest paid</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Optimal (Saves most $)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-amber-600 dark:text-amber-400">Debt Snowball</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Smallest Balance to Largest Balance</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Fast psychological wins by closing accounts</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-slate-600 dark:text-slate-400">Behavioral focus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Amortization Acceleration: Extra Monthly Payments */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          The Compounding Power of Extra Principal Payments
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Because mortgage and loan interest is calculated against the remaining principal balance, even small extra monthly payments dramatically compress loan timelines:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Base 30-Year Loan</span>
            <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">$350k @ 6.5%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total Interest: $446,450 (360 mos)</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-wide">+$100 / Month</span>
            <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">Payoff: 25.5 Years</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Saves $65,200 in interest</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wide">+$250 / Month</span>
            <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">Payoff: 21.3 Years</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Saves $134,800 in interest</p>
          </div>
        </div>
      </section>
    </article>
  );
}
