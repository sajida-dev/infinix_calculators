import React from "react";

export default function MulchSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Mulch Volume Estimating: Cubic Yards, Bagged Bark &amp; Depth Guides
        </h2>
        <p>
          Mulch protects garden root systems, suppresses weeds, and preserves soil moisture. Calculating mulch requires determining the total square footage of garden beds and converting desired depth into cubic yards or bagged volume.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Mulch Volume Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Volume (cu yd) = [Length (ft) × Width (ft) × (Depth in Inches ÷ 12)] ÷ 27
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Shortcut formula: Total Square Footage × Depth (in) ÷ 324 = Total Cubic Yards
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Bag Count Quick Conversion Guide
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Cubic Yards Needed</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">2.0 cu ft Bags (Standard)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">3.0 cu ft Bags (Commercial)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Coverage at 3-inch Depth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">1 Cubic Yard</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">14 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">9 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">108 sq ft</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">3 Cubic Yards</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">41 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">27 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">324 sq ft</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">5 Cubic Yards</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">68 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">45 Bags</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">540 sq ft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
