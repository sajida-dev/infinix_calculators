import React from "react";

export default function DrywallSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Drywall Sheet Estimating, Mud Compound &amp; Fastener Calculations
        </h2>
        <p>
          Estimating drywall (sheetrock / gypsum board) requires calculating the combined surface area of room perimeter walls and ceilings, dividing by panel square footage, and adding a <strong>10% to 15% waste allowance</strong> for off-cuts, corner joints, and electrical outlet cutouts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Standard 4x8 Panel (32 sq ft)</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Standard residential sheets measuring 4 feet wide by 8 feet tall. Easy to carry and maneuver up stairs or through narrow doorways. Ideal for DIYers.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Commercial 4x12 Panel (48 sq ft)</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Longer 12-foot sheets reduce horizontal joints by 25%, resulting in fewer seams to tape and mud. Heavier and requires two people to hang.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Rule-of-Thumb Accessory Estimates
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Joint Compound Mud:</strong> ~0.053 gallons of ready-mix mud per square foot (approx. 5.3 gallons per 100 sq ft).</li>
          <li><strong>Drywall Tape:</strong> ~0.35 linear feet of paper or mesh tape per square foot of wall area.</li>
          <li><strong>Drywall Screws:</strong> ~32 to 36 coarse-thread drywall screws per 4x8 panel (fastened every 12 to 16 inches on studs).</li>
        </ul>
      </div>
    </article>
  );
}
