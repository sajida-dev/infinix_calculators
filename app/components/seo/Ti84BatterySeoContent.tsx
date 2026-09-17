import React from "react";

export default function Ti84BatterySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          TI-84 Battery Life: Rechargeable CE vs Standard AAA Models
        </h2>
        <p>
          The <strong>TI-84 Plus CE</strong> uses a built-in 1200mAh rechargeable lithium-ion battery (like a smartphone), while the older monochrome <strong>TI-84 Plus</strong> runs on 4x AAA alkaline batteries plus a backup coin cell. Battery runtime depends heavily on screen brightness and usage frequency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Brightness Is the #1 Battery Drain</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Running the TI-84 Plus CE at maximum backlight brightness can cut total charge life from ~50 hours down to as little as 15 hours. Lowering brightness one or two notches roughly doubles usable exam-day battery life.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">AAA Model Lifespan</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Standard TI-84 Plus units on 4x AAA batteries typically last several months of regular classroom use since the monochrome screen draws far less power than a full-color LCD.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Battery Life Estimation Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Days of Use = Total Capacity Hours ÷ Daily Usage Hours
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: A CE model with 30 hours of medium-brightness capacity, used 2 hours/day, lasts about 15 days per full charge cycle.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Tips to Maximize Battery Lifespan
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Lower screen brightness before standardized tests to guarantee a full exam session of charge.</li>
          <li>Store the calculator in a cool, dry place — heat accelerates lithium-ion self-discharge and capacity loss.</li>
          <li>Fully charge the CE model the night before an exam rather than relying on a partial top-up charge.</li>
        </ul>
      </div>
    </article>
  );
}
