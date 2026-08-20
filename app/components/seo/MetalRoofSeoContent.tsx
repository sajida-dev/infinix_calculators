import React from "react";

export default function MetalRoofSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Metal Roofing Estimations: Pitch Multipliers, Panel Counts &amp; Screws
        </h2>
        <p>
          Estimating materials for corrugated (Tuftex / AG panel) or standing seam metal roofing requires converting the building&apos;s flat horizontal footprint into true sloped surface area using geometric pitch multipliers.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Metal Roofing Sizing Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Sloped Roof Area = (Building Length + 2×Overhang) × (Building Width + 2×Overhang) × Pitch Factor
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Fastener Screws Required = (Total Sloped Area in sq ft ÷ 100) × 80 Neoprene Screws
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Standard Roof Pitch Multipliers Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Pitch Ratio (Rise / 12)</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Slope Angle (Degrees)</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Area Multiplier Factor</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Typical Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">3 / 12 Pitch</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">14.0°</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">1.031</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Low-slope agricultural barns &amp; sheds.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">4 / 12 Pitch</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">18.4°</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">1.054</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Standard ranch style residential homes.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">6 / 12 Pitch</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">26.6°</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">1.118</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Most popular residential gable pitch.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">8 / 12 Pitch</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">33.7°</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">1.202</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Steep residential &amp; alpine snow shedding.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">12 / 12 Pitch</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">45.0°</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600">1.414</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Chalet / A-frame architectural structures.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
