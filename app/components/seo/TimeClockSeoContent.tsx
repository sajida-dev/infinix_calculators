import React from "react";

export default function TimeClockSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Calculating Shift Hours, Breaks & Overtime Correctly
        </h2>
        <p>
          Accurately converting clock-in and clock-out times into payable hours requires subtracting unpaid meal breaks and correctly identifying overtime thresholds. Under the FLSA, non-exempt hourly employees earn <strong>1.5x pay</strong> for hours worked beyond 40 in a single workweek.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Unpaid vs Paid Breaks</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Meal breaks of 30 minutes or longer, where an employee is fully relieved of duty, are typically unpaid and must be subtracted from gross shift time. Short rest breaks (5–20 minutes) are usually paid and should not be deducted.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Weekly Overtime Threshold</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Overtime is calculated on a <strong>per-workweek</strong> basis, not per-shift or per-day (except in a few states like California, which also mandate daily overtime after 8 hours).
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Shift Hours & Overtime Pay Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            Paid Hours = (Clock Out − Clock In) − Unpaid Break; Overtime Pay = (Hours − 40) × Rate × 1.5
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Example: Clocking in at 8:00 AM and out at 5:00 PM with a 30-minute unpaid lunch equals 8.5 paid hours for that shift.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Common Timesheet Mistakes
        </h3>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Forgetting to subtract unpaid lunch breaks, inflating payable hours.</li>
          <li>Mixing up AM/PM when a shift spans across noon or midnight.</li>
          <li>Applying overtime per-shift instead of aggregating total hours for the full workweek.</li>
        </ul>
      </div>
    </article>
  );
}
