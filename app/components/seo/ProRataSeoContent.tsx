import React from "react";

export default function ProRataSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Pro Rata Calculation Guide: Prorated Rent, Salaries &amp; Retainer Invoices
        </h2>
        <p>
          <strong>Pro rata</strong> (Latin for "in proportion") is a mathematical principle used to allocate costs, revenues, salaries, or rents proportionately based on time occupied, days worked, or fractional shares held.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Prorated Rent (Move-In Math)</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            Prorated Rent = (Monthly Rent ÷ Days in Month) × Days Occupied
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For $1,800/month moving in on October 20th (12 days active out of 31): ($1,800 ÷ 31) × 12 = $696.77.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Prorated Employee Salary</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            Daily Salary = Annual Salary ÷ 260 Standard Working Days
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For an $80,000 salary starting 6 working days before the biweekly pay cycle ends: ($80,000 ÷ 260) × 6 = $1,846.15.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The Banker's Rule vs. Exact Calendar Days
        </h3>
        <p>
          In commercial accounting, two methods exist: the <strong>Actual Calendar Days Method</strong> (dividing by 28, 30, or 31 depending on the exact month) and the <strong>Banker's Rule</strong> (assuming a flat 30-day month / 360-day year). Most residential lease agreements legally mandate actual calendar days.
        </p>
      </div>
    </article>
  );
}
