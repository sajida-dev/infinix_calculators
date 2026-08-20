import React from "react";

export default function FenceCostSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Fence Material Estimating: Posts, Rails, Pickets &amp; Concrete Footings
        </h2>
        <p>
          Calculating yard fencing materials requires breaking the total perimeter line into standard post spans (usually 6-foot or 8-foot centers), determining horizontal 2x4 rail requirements, and calculating vertical picket counts based on board width and overlap spacing.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Core Material Estimating Equations
        </h3>
        <ul className="space-y-2 font-mono text-xs sm:text-sm text-primary dark:text-sky-400">
          <li><strong>Post Count:</strong> Posts = Math.ceil(Total Perimeter Line ÷ Post Spacing) + 1 (plus extra for corner/gate transitions)</li>
          <li><strong>Horizontal Rails:</strong> Rails = (Post Count - 1) × 3 (3 rails recommended for 6ft privacy fences)</li>
          <li><strong>Pickets Needed:</strong> Pickets = (Total Length in Feet × 12) ÷ (Picket Width in Inches + Gap)</li>
          <li><strong>Concrete Bags:</strong> 1 to 1.5 bags (80 lb) of fast-setting concrete mix per post hole</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Average Material Pricing Benchmarks (2026 Reference)
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Pressure-Treated Pine:</strong> $15 to $25 per linear foot (most economical, 15-20 yr lifespan).</li>
          <li><strong>Western Red Cedar:</strong> $25 to $40 per linear foot (naturally insect &amp; rot resistant).</li>
          <li><strong>Vinyl / Composite:</strong> $30 to $55 per linear foot (zero maintenance, no painting or staining required).</li>
          <li><strong>Aluminum / Wrought Iron:</strong> $35 to $65 per linear foot (superior durability and pool boundary security).</li>
        </ul>
      </div>
    </article>
  );
}
