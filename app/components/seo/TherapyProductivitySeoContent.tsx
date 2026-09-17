import React from "react";

export default function TherapyProductivitySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Clinical Productivity Standards for Physical, Occupational &amp; Speech Therapists
        </h2>
        <p>
          In Skilled Nursing Facilities (SNFs), acute inpatient rehabilitation, and outpatient clinics, clinical productivity measures the ratio of direct, billable patient care minutes against a therapist’s total paid shift time.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Standard Clinical Productivity Formula (with Lunch Deductions)
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Productivity (%) = [Total Billable Minutes ÷ (Total Paid Minutes - Unpaid Lunch Break)] × 100
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Example: On an 8-hour shift (480 min) with a 30-minute unpaid lunch (450 net minutes), 385 minutes of billable treatment equals (385 ÷ 450) × 100 = <strong>85.55% productivity</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Realistic Industry Benchmarks by Setting
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Outpatient Clinics:</strong> 75% – 85% (allows adequate time for documentation and discharge planning).</li>
          <li><strong>Skilled Nursing Facilities (SNFs):</strong> 80% – 88% (varies between primary PT/OT/SLP and assistants).</li>
          <li><strong>Home Health:</strong> Calculated primarily by visit unit points rather than raw shift minutes.</li>
          <li><strong>Inpatient Rehab Facilities (IRF):</strong> 70% – 80% (high patient transfer and interdisciplinary team conference overhead).</li>
        </ul>
      </div>
    </article>
  );
}
