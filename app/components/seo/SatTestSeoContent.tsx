import React from "react";

export default function SatTestSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Estimating Your SAT Test Score From Practice Test Raw Counts
        </h2>
        <p>
          When self-scoring an official practice test, you first tally raw correct answers per section, then convert each raw count to a scaled 200–800 score using the test&apos;s printed conversion table. This calculator uses a linear approximation of that curve so you can quickly gauge practice test performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Reading, Writing &amp; Math Split</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Reading and Writing/Language raw scores are combined into one 200–800 Verbal scale score, while Math questions are scaled independently into their own 200–800 score.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Curve Varies By Test Form</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Every official practice test has a slightly different equating table since raw difficulty differs between forms — always cross-check with the official answer key&apos;s conversion chart for final confirmation.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Practice Test Scoring Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Scale Score = 200 + (Raw Correct ÷ Max Possible) × 600
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: Reading 45/52 + Writing 38/44 = 83/96 combined ≈ 720 Verbal; Math 50/58 ≈ 717 Math, for a ~1437 composite.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Tips for Retaking a Diagnostic Test
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Retest under timed, exam-day conditions to get a realistic scale-score baseline.</li>
          <li>Track which question types cause repeat misses across multiple practice tests.</li>
          <li>Space retakes 2–3 weeks apart to allow targeted review of weak areas.</li>
        </ul>
      </div>
    </article>
  );
}
