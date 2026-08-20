import React from "react";

export default function PuppyWeightSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Canine Growth Curves: Predicting Adult Dog Weight by Breed Size
        </h2>
        <p>
          Estimating a puppy’s mature adult weight requires applying veterinary growth velocity formulas that account for the biological growth timeline of their breed size category.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Adult Weight Growth Factor Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Adult Weight = Current Weight (lbs) ÷ (Current Age in Weeks ÷ Total Growth Period in Weeks)
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Growth Period Duration by Breed Classification
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Breed Size Group</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Adult Weight Range</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Skeletal Growth Closes At</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">50% Adult Weight Milestone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-sky-600">Toy &amp; Small Breeds</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">&lt; 20 lbs</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">36 – 40 Weeks (9 mos)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">16 Weeks (4 mos)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-emerald-600">Medium Breeds</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">20 – 50 lbs</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">52 Weeks (12 mos)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">20 – 24 Weeks (5–6 mos)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-amber-600">Large Breeds</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">50 – 100 lbs</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">65 Weeks (15 mos)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">26 – 28 Weeks (6–7 mos)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-rose-600">Giant Breeds</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">&gt; 100 lbs</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">78 – 104 Weeks (18–24 mos)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">32 – 36 Weeks (8–9 mos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
