import React from "react";

export default function GrassSeedSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Grass Seed Calculations: Seeding Rates by Turf Type &amp; Lawn Method
        </h2>
        <p>
          Calculating grass seed requirements requires determining your total lawn square footage, establishing whether you are planting a <strong>brand-new bare-soil lawn</strong> or <strong>overseeding an existing lawn</strong>, and applying the agronomic seeding rate per 1,000 square feet for your specific turfgrass variety.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Grass Seed Coverage Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Total Seed (lbs) = (Total Lawn Area in sq ft ÷ 1,000) × Recommended Seeding Rate (lbs / 1,000 sq ft)
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Agronomic Seeding Rates Reference Table (Per 1,000 Sq Ft)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Grass Type</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">New Lawn Rate</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Overseeding Rate</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Germination Window</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Kentucky Bluegrass</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">2 to 3 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">1 to 1.5 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">14 – 28 Days</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Tall Fescue (TTTF)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">6 to 8 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">3 to 4 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">7 – 14 Days</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Perennial Ryegrass</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">5 to 7 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">2.5 to 3.5 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">5 – 10 Days (Fastest)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Bermuda Grass</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">1 to 2 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">0.5 to 1.0 lbs</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">10 – 21 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
