import React from "react";

export default function BrickSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Masonry Estimations: Brick Densities, Mortar Bags &amp; Waste Factors
        </h2>
        <p>
          Estimating facing brick quantities and Type N or Type S mortar bags for brick walls, veneer cladding, or garden retaining structures requires calculating net wall surface area in square feet and applying the appropriate brick size multiplier with a 3/8&quot; standard mortar joint.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Masonry Material Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Total Bricks = (Wall Length in ft × Wall Height in ft) × Bricks per Sq Ft × (1 + Waste %)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            80 lb Mortar Bags Required = Total Bricks ÷ 30
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Standard Brick Sizes &amp; Square Foot Densities
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Brick Format</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Nominal Dimensions (D × H × L)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Bricks per Sq Ft</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Common Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Standard Modular</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">3⅝&quot; × 2¼&quot; × 7⅝&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">6.55 bricks / sq ft</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Residential home veneer cladding.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Queen Size</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">3&quot; × 2¾&quot; × 7⅝&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">5.20 bricks / sq ft</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Faster laying times; economical residential.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Utility Brick</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">3⅝&quot; × 3⅝&quot; × 11⅝&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">3.00 bricks / sq ft</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Commercial structures &amp; retaining walls.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
