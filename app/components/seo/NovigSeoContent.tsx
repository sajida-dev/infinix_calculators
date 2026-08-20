import React from "react";

export default function NovigSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          No-Vig Sports Betting Math: Removing Juice &amp; Finding True Fair Odds
        </h2>
        <p>
          Sportsbooks build a mathematical profit margin—known as the <strong>vig (vigorish) or juice</strong>—into their betting lines. Calculating <strong>no-vig fair odds</strong> removes this bookmaker markup to reveal the market’s true implied win probabilities for Expected Value (+EV) auditing.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Implied Probability &amp; Vig Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Negative American Odds (-X): Implied Win % = |X| ÷ (|X| + 100)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Positive American Odds (+Y): Implied Win % = 100 ÷ (Y + 100)
          </p>
          <p className="text-amber-600 dark:text-amber-400">
            Sportsbook Vig (%) = (Implied Prob A + Implied Prob B - 1) × 100
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The Power Method for Fair Probability
        </h3>
        <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Fair Probability (Outcome A) = Implied Prob A ÷ (Implied Prob A + Implied Prob B)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For standard -110 / -110 lines (52.38% each = 104.76% sum), removing the 4.76% juice gives a true <strong>50.00% fair probability</strong> and <strong>+100 even money fair odds</strong>.
          </p>
        </div>
      </div>
    </article>
  );
}
