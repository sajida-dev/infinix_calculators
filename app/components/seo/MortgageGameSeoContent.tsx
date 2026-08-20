import React from "react";

export default function MortgageGameSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Mastering Mortgage Math: Interactive Amortization &amp; Financial Strategy
        </h2>
        <p>
          Mortgage calculator games and interactive simulators turn complex home loan amortization mathematics into intuitive, visual decision models. By simulating down payments, interest rate fluctuations, and extra principal prepayments, homebuyers and students can see firsthand how minor monthly adjustments save tens of thousands of dollars in lifetime interest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            The Power of Extra Monthly Payments
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Adding just $100 per month towards your loan principal on a $350,000 30-year fixed mortgage at 6.5% interest reduces your payoff timeline by over <strong>4.5 years</strong> and saves more than <strong>$65,000 in interest</strong>.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            15-Year vs. 30-Year Loan Mechanics
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            A 15-year fixed loan carries higher monthly payments but drastically lowers total borrowing costs. On a $400,000 loan, a 15-year term typically incurs less than half the total cumulative interest of a 30-year mortgage.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Core Equations Behind Mortgage Amortization
        </h3>
        <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            M = P × [r(1 + r)^n] ÷ [(1 + r)^n - 1]
          </p>
          <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
            <li><strong>M:</strong> Total monthly mortgage payment (principal + interest).</li>
            <li><strong>P:</strong> Principal loan amount (Home Purchase Price - Down Payment).</li>
            <li><strong>r:</strong> Monthly interest rate (Annual Interest Rate ÷ 12).</li>
            <li><strong>n:</strong> Total number of monthly payments (Loan Term in Years × 12).</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
