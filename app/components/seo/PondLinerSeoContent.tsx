import React from "react";

export default function PondLinerSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Pond Liner Sizing: 3D Excavation Geometry &amp; Overlap Buffers
        </h2>
        <p>
          Calculating flexible sheet liner requirements (EPDM rubber or PVC) for water gardens, koi ponds, and retention basins requires accounting for surface dimensions, vertical slope depth on both sides, and an anchoring perimeter overlap.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Pond Liner Sizing Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Liner Length (ft) = Pond Max Length + (2 × Maximum Depth) + (2 × Edge Overlap)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Liner Width (ft) = Pond Max Width + (2 × Maximum Depth) + (2 × Edge Overlap)
          </p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *A minimum edge overlap buffer of 1.5 to 2.0 feet is required around the entire rim to secure the liner under stone coping and prevent bank soil washouts.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          EPDM vs. PVC vs. RPE Liner Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Material</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Typical Thickness</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Lifespan</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">45 Mil EPDM Rubber</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">1.14 mm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">20 – 30 Years</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Fish-safe koi ponds with curves and cold freeze-thaw cycles.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">20–30 Mil PVC</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">0.50 – 0.75 mm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">5 – 10 Years</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Budget decorative fountains and small patio water features.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Reinforced Polyethylene (RPE)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">24 – 30 Mil</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">25+ Years</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Large farm retention lakes and commercial water storage.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
