import React from "react";

export default function TvMountingHeightSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Ergonomic TV Wall Mounting: Seated Eye-Level Coordinates &amp; Viewing Angles
        </h2>
        <p>
          Mounting a flat-screen television at the correct height is critical to prevent cervical neck strain and visual fatigue. The <strong>Society of Motion Picture and Television Engineers (SMPTE)</strong> and <strong>THX standards</strong> mandate that the vertical center of the television screen should be positioned directly at your eye level when seated in your primary viewing position.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Wall Bracket Height Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Screen Center Height = Seated Eye Level (Typically 42 inches from floor on standard sofa)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Bottom of TV to Floor = Seated Eye Level - (TV Screen Height ÷ 2)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Common Screen Size Mounting Guidelines (Based on 42&quot; Eye Level)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">TV Diagonal Size</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Approx. Screen Height</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Recommended Bottom to Floor</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Ideal Viewing Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">55-Inch TV</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">27.0 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">28.5 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">6.5 to 8.0 ft</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">65-Inch TV</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">31.8 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">26.1 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">8.0 to 9.5 ft</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">75-Inch TV</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">36.8 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">23.6 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">9.5 to 11.5 ft</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">85-Inch TV</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">41.7 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">21.1 inches</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">11.0 to 13.0 ft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
