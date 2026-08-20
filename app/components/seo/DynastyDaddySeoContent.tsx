import React from "react";

export default function DynastyDaddySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Dynasty Fantasy Football Trade Analytics: Asset Valuation &amp; Pick Equity
        </h2>
        <p>
          In dynasty fantasy football leagues (Superflex, TE-Premium, Half-PPR), player values fluctuate based on age, positional scarcity, and multi-year production windows. Evaluating package deals requires comparing consolidated <strong>market value indices</strong> rather than simple redraft season projections.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">The &quot;Studs vs. Duds&quot; Package Trap</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            A common mistake in dynasty trades is accepting three bench players for one elite Tier 1 asset (e.g. trading Justin Jefferson for three WR3s). Because starting lineups are constrained, elite top-tier production carries an exponential value multiplier that cannot be replaced by roster depth.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Positional Longevity Curves</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            <strong>Quarterbacks:</strong> Peak longevity (age 24–35+).<br />
            <strong>Wide Receivers:</strong> Stable multi-year value (age 22–29).<br />
            <strong>Running Backs:</strong> Steepest drop-off cliff (age 26–27).
          </p>
        </div>
      </div>
    </article>
  );
}
