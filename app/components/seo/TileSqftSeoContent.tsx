import React from "react";

export default function TileSqftSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Floor &amp; Wall Tile Sizing: Square Footage, Waste Margins &amp; Box Counts
        </h2>
        <p>
          Ordering tile for bathrooms, kitchens, entryways, or backsplashes requires calculating the exact net square footage of the room, determining the square footage per individual tile, and factoring in cutting waste for diagonal or offset patterns.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Tile Sizing Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Tile Area (sq ft) = (Tile Length in inches × Tile Width in inches) ÷ 144
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Gross Tiles Required = (Total Room Area in sq ft ÷ Tile Area) × (1 + Waste %)
          </p>
          <p className="text-amber-600 dark:text-amber-400">
            Boxes to Order = Ceiling( Gross Tiles Required ÷ Tiles per Box Package )
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Recommended Waste Factors by Tile Layout Pattern
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Tile Pattern / Layout</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Recommended Waste Margin</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Standard Grid / Straight Stack</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">10% Waste</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Minimal cuts along perimeter walls.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Running Bond / Subway Offset (50%)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-sky-600">12% – 15% Waste</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Half-cuts at end of every alternating row.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Diagonal / 45° Angle Layout</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-amber-600">15% – 20% Waste</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Triangle cuts required at all four boundary edges.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Herringbone Pattern</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600">20% Waste</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Complex multi-angle cuts and off-cut waste.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
