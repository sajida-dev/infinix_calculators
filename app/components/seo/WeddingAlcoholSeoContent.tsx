import React from "react";

export default function WeddingAlcoholSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Wedding Reception Bar Planning: Consumption Rates &amp; Bottle Yields
        </h2>
        <p>
          Accurately estimating alcohol for a wedding reception or gala requires applying the <strong>industry standard consumption rule</strong>: 2 drinks per guest during the cocktail hour, followed by 1 drink per guest for every subsequent reception hour.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Total Drinks Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Total Drinks Required = Guest Count × (1 + Total Event Hours)
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Example: For 150 guests across a 5-hour event: 150 × (1 + 5) = <strong>900 total servings</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Standard Bottle &amp; Case Yield Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Beverage Type</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Container Size</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Standard Serving Size</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Servings Yield per Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Wine / Champagne</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">750 ml Bottle</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">5 oz (150 ml)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">5 Servings / Bottle</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Liquor / Spirits</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">750 ml Fifth</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">1.5 oz (45 ml) Shot</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">16 Cocktails / Bottle</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Beer</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Standard Case</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">12 oz Can/Bottle</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600">24 Beers / Case</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
