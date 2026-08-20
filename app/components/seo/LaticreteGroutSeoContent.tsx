import React from "react";

export default function LaticreteGroutSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Tile Grout Coverage: Joint Volume Geometry &amp; Density Multipliers
        </h2>
        <p>
          Calculating grout bag requirements for ceramic, porcelain, natural stone, or glass mosaic installations requires computing <strong>joint cubic volume per square foot</strong> based on tile perimeter-to-area ratios and product material densities.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Tile Grout Weight Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Joint Volume (cu in / sq ft) = [ (Tile Length + Tile Width) × Joint Width × Tile Thickness × 144 ] ÷ (Tile Length × Tile Width)
        </p>
        <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base">
          Total Grout Weight (lbs) = Joint Volume × Product Density × Total Sq Ft × (1 + Waste %)
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Grout Product Density Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Grout Type</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Density (lbs / cu in)</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Recommended Joint Width</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Sanded Cementitious</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.065 lbs / in³</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-emerald-600">1/8&quot; to 1/2&quot;</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Floor tiles &amp; wide joints (prevents shrinking/cracking).</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Unsanded Cementitious</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.060 lbs / in³</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-sky-600">1/16&quot; to 1/8&quot;</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Polished marble, glass mosaics &amp; wall tiles (scratch-free).</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Epoxy Grout (e.g. SpectraLOCK)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.068 lbs / in³</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-purple-600">1/16&quot; to 3/8&quot;</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Commercial kitchens, shower stalls (100% stain/chemical proof).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
