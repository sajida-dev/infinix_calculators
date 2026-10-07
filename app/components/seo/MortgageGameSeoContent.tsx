import React from "react";
import Link from "next/link";

export default function MortgageGameSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Mortgage Payoff and Portfolio Simulation
        </h2>
        <p>
          Compare fixed-rate mortgage scenarios using a loan balance, APR, and extra monthly principal payment. The payoff estimates show how your assumptions affect interest and repayment time. The rental portfolio is a separate fictional scenario, not a lender quote or investment forecast.
        </p>
      </div>

      {/* Why People Search for Mortgage Games */}
      <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-2">
        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
          Educational Background
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Educational Simulations, Not Driving Games
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          This page offers mortgage payoff, loan-term comparison, and rental-portfolio simulations. It does not host F1, Formula Racers, drift, or sports games. Access on school and workplace networks depends on their policies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            The Power of Extra Monthly Payments
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Extra payments reduce the outstanding balance before future monthly interest is calculated. Savings depend on the principal, rate, term, and payment timing. This model assumes a fixed rate and extra principal every month, without fees or penalties.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            15-Year vs. 30-Year Loan Mechanics
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            The comparison holds the principal and APR constant, with no extra payments on either term. A shorter term increases the scheduled monthly payment and reduces interest at a positive rate. Actual offers may have different rates and fees.
          </p>
        </div>
      </div>

      {/* Core Amortization Equations */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Core Mathematical Equations Behind Mortgage Amortization
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-5 rounded-xl space-y-3">
          <p className="font-mono text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base">
            M = P × [r(1 + r)ⁿ] / [(1 + r)ⁿ − 1]
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
            <li><strong>M:</strong> Total monthly mortgage payment (principal + interest).</li>
            <li><strong>P:</strong> Principal loan amount (Home Purchase Price − Down Payment).</li>
            <li><strong>r:</strong> Monthly interest rate (Annual APR Percentage / 100 / 12).</li>
            <li><strong>n:</strong> Total number of monthly payments (Loan Term in Years × 12).</li>
            <li><strong>Savings Score:</strong> Score = min(1000, (Interest Saved / Base Total Interest) × 1000).</li>
            <li><strong>Zero APR:</strong> M = P / n; the interest Savings Score is zero.</li>
          </ul>
        </div>
      </div>

      {/* Real Estate Tycoon Rules & Decision Tips */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Principles from the Real Estate Portfolio Simulation
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block text-sm">1. Cash Buffer First</span>
            <p className="text-slate-600 dark:text-slate-400">The fictional portfolio starts with $60,000. Buying a property deducts its preset down payment; later cash events can add or subtract funds.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block text-sm">2. Focus on Cash Flow</span>
            <p className="text-slate-600 dark:text-slate-400">Displayed cash flow is preset rent minus mortgage payments. It is not net income after taxes, insurance, vacancy, and all operating costs.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block text-sm">3. Equity Snowball</span>
            <p className="text-slate-600 dark:text-slate-400">Yearly equity gains use fictional appreciation and paydown percentages. Equity cannot be withdrawn in this simulation, and values are not forecasts.</p>
          </div>
        </div>
      </div>

      {/* Related Calculators Navigation */}
      <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Explore Related Financial Calculators</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Model installment plans, debt payoffs, and daily calculations.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculators/affirm" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
            Affirm Payment Calculator
          </Link>
          <Link href="/calculators/balance-transfer" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
            Balance Transfer Calculator
          </Link>
          <Link href="/calculators/pink-calculator" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
            Pink Aesthetic Calculator
          </Link>
        </div>
      </div>
    </article>
  );
}

