import React from "react";

export default function SatScoreSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          How the Digital SAT Converts Raw Answers Into a 1600 Scale Score
        </h2>
        <p>
          The Digital SAT scores two sections — <strong>Reading &amp; Writing</strong> and <strong>Math</strong> — each on a 200–800 scale, which are summed for a composite score between 400 and 1600. Unlike a simple percentage, the College Board applies an equating curve so raw scores map slightly differently between test administrations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">No Guessing Penalty</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            The Digital SAT does not deduct points for incorrect answers. Always fill in a guess for every question — an unanswered question and a wrong answer score identically (zero credit).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Adaptive Module Difficulty</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Each section has two modules. Performance on Module 1 determines whether you receive an easier or harder Module 2, which shifts the raw-to-scale conversion — a simplified linear estimate is a strong approximation but not the official adaptive result.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Simplified Raw-to-Scale Estimation Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Section Scale Score = 200 + (Correct ÷ Total Questions) × 600
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: 45 of 54 correct Reading &amp; Writing questions ≈ 700 scaled; 38 of 44 correct Math questions ≈ 718 scaled, for a composite near 1418.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          SAT Score Percentile Benchmarks
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>1500+ : Top 1% nationally, competitive for Ivy League and top-20 universities.</li>
          <li>1400–1490: Strong score for most selective flagship state universities.</li>
          <li>1200–1390: Solidly above the national average (~1050).</li>
          <li>Below 1000: Below the 40th percentile; consider a retake with targeted prep.</li>
        </ul>
      </div>
    </article>
  );
}
