import React from "react";

export default function SidingSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Siding Square Sizing: Wall Area, Window Deductions &amp; Waste Math
        </h2>
        <p>
          In construction and exterior remodeling, siding materials (vinyl, fiber cement, engineered wood, and cedar shake) are measured and sold in <strong>&quot;Squares&quot;</strong>, where 1 Square equals exactly <strong>100 square feet</strong> of finished exterior wall coverage.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Siding Squares Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Siding Squares Needed = [ (Gross Wall Area - Window/Door Cutouts) × (1 + Waste %) ] ÷ 100
        </p>
        <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
          <li><strong>Standard Window Deduction:</strong> ~15 sq ft per typical window.</li>
          <li><strong>Standard Exterior Door Deduction:</strong> ~20 sq ft per entry door.</li>
          <li><strong>Gable End Siding:</strong> (Gable Base Width × Peak Height) ÷ 2.</li>
          <li><strong>Standard Waste Factor:</strong> 10% for simple rectangular walls; 15%–20% for complex multistory gables and dormers.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Siding Material Comparison (Per Square)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Material Type</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Typical Lifespan</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Maintenance Level</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Key Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Vinyl Siding</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">20 – 40 Years</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-emerald-600">Low (Periodic wash)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Most cost-effective, never requires painting.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Fiber Cement (Hardie)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">30 – 50 Years</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Medium (Paint every 10-15 yrs)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Class A fire-rated, impervious to rot and woodpeckers.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Engineered Wood</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">25 – 40 Years</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Medium (Paint maintenance)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Real cedar appearance with fungal resistance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
