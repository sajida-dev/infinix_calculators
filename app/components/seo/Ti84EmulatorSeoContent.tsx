import React from "react";

export default function Ti84EmulatorSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Permutations, Combinations & Factorials Explained
        </h2>
        <p>
          Texas Instruments TI-84 Plus and TI-30XS scientific calculators are staples in algebra, statistics, and precalculus classrooms. This tool replicates their core combinatorics functions — factorials (!), permutations (nPr), and combinations (nCr) — for quick homework verification.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Combinations (nCr) — Order Doesn&apos;t Matter</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Use combinations when selecting a group where order is irrelevant, like choosing 2 toppings from 5 available flavors. Formula: <code>nCr = n! ÷ (r! × (n-r)!)</code>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Permutations (nPr) — Order Matters</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Use permutations when arranging items in a specific sequence, like ranking 1st/2nd/3rd place among 10 runners. Formula: <code>nPr = n! ÷ (n-r)!</code>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Worked Example
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            5C2 = 5! ÷ (2! × 3!) = 10 &nbsp;|&nbsp; 5P2 = 5! ÷ 3! = 20
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Selecting 2 unordered items from 5 gives 10 possible groups; ranking 2 ordered positions from 5 candidates gives 20 possible outcomes.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Common AP Statistics & Probability Uses
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Binomial probability distributions (nCr appears in the binomial coefficient).</li>
          <li>Lottery and card-hand probability calculations.</li>
          <li>Password/PIN combination counting problems.</li>
        </ul>
      </div>
    </article>
  );
}
