import React from "react";

export default function IftaSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          IFTA Quarterly Fuel Tax Accounting: MPG Splits &amp; Tax Credits
        </h2>
        <p>
          The <strong>International Fuel Tax Agreement (IFTA)</strong> simplifies fuel tax reporting for commercial motor carriers operating across the 48 contiguous US states and 10 Canadian provinces. It distributes fuel taxes based on <em>where fuel was consumed</em> rather than where it was purchased at the pump.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Core IFTA Calculation Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Overall Fleet MPG = Total Fleet Miles Driven ÷ Total Gallons Purchased
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            State Fuel Consumed = Distance Driven in State ÷ Overall Fleet MPG
          </p>
          <p className="text-amber-600 dark:text-amber-400">
            Net Tax Due / (Credit) = (State Fuel Consumed - State Fuel Purchased) × State Tax Rate
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Understanding Fuel Tax Credits vs. Liabilities
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          If you purchase more fuel in a state than you burn while driving through it, you earn a <strong>tax credit</strong> from that state that can offset taxes owed in states where you drove without purchasing sufficient fuel.
        </p>
      </div>
    </article>
  );
}
