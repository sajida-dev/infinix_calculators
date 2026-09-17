import React from "react";

export default function PowerCostSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Calculating Appliance Electricity Costs in Kilowatt-Hours
        </h2>
        <p>
          Utility companies bill electricity in <strong>kilowatt-hours (kWh)</strong>, not raw watts. One kWh equals 1,000 watts of power drawn continuously for one hour. Understanding this unit lets you convert any appliance&apos;s wattage rating directly into a real dollar cost.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Running Wattage vs Peak Surge Wattage</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Appliance nameplates often list a peak startup surge wattage that is far higher than steady running wattage. Space heaters, refrigerators, and window AC units draw a brief surge, then settle to a lower sustained draw — use the running wattage for accurate cost estimates.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Delivery Charges & Rate Tiers</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Your posted &quot;kWh rate&quot; on a utility bill often bundles generation plus delivery/distribution charges. Always use the all-in blended rate from your latest bill, not just the base generation rate, for the most accurate monthly cost forecast.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Electricity Cost Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Cost = (Watts × Hours Used ÷ 1000) × Rate per kWh
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: A 1,500W space heater run 8 hours/day at $0.16/kWh costs 1.5 × 8 × 0.16 = $1.92/day, or ~$57.60/month.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Common High-Draw Household Appliances
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Central AC / heat pump: 3,000–5,000W</li>
          <li>Electric water heater: 4,000–4,500W</li>
          <li>Space heater: 1,500W</li>
          <li>Desktop gaming PC: 300–750W</li>
          <li>Refrigerator (average running): 100–200W</li>
        </ul>
      </div>
    </article>
  );
}
