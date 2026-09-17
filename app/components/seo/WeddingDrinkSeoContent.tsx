import React from "react";

export default function WeddingDrinkSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Complete Reception Beverage &amp; Ice Calculations
        </h2>
        <p>
          A comprehensive wedding bar requires calculating not just alcoholic beverages, but also non-alcoholic mocktails, sodas, spring water, and <strong>bulk ice poundage</strong> for chilling and serving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">The 1.5 lb Ice Rule</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Catering standards recommend <strong>1.5 lbs of ice per guest</strong> for indoor receptions (and 2.0 to 2.5 lbs per guest for outdoor summer weddings) to cover both glassware ice and bottle chilling tubs.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Non-Alcoholic Pacing Ratio</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Plan for 2 non-alcoholic drinks per drinking guest (water/soda between cocktails) plus 1 soft drink per hour for designated drivers and non-drinking attendees.
          </p>
        </div>
      </div>
    </article>
  );
}
