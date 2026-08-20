import React from "react";

export default function LsatSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          LSAT Raw-to-Scaled Score Conversion &amp; Percentile Mechanics
        </h2>
        <p>
          The Law School Admission Test (LSAT) administered by LSAC uses an equating scale that converts raw correct answers (totaling roughly 75 to 78 questions across scored sections) into a scaled score ranging from <strong>120 to 180</strong>.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          How LSAC Equating Works
        </h3>
        <p className="text-xs sm:text-sm">
          Because slight difficulty differences exist between test administrations, LSAC generates a unique conversion chart for every specific PrepTest. This ensures a 170 on a difficult exam represents the exact same aptitude percentile as a 170 on an easier form.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          General Score Band &amp; Law School Admissions Targets
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Scaled Score</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Percentile</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Target Law School Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">170 – 180</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">97th – 99.9th</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">T14 Elite (Yale, Stanford, Harvard, Columbia, NYU, Chicago).</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-sky-600">160 – 169</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">78th – 96th</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Tier 1 &amp; Top 50 National Programs with merit scholarship contention.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">150 – 159</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">40th – 75th</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Regional ABA-accredited law schools and state university programs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
