import React from "react";

export default function ArkansasSalesTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Arkansas Sales Tax Calculations: State, County &amp; Municipal Surtaxes
        </h2>
        <p>
          Calculating retail sales tax or performing reverse tax extraction in the State of Arkansas requires combining the <strong>state baseline rate of 6.50%</strong> with local county and municipal sales taxes, which frequently push the total combined sales tax rate to between <strong>8.50% and 11.50%</strong>.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Arkansas Combined Sales Tax Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Combined Rate = 6.50% State Base + County Tax Rate + City Tax Rate
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Sales Tax Owed = Pre-Tax Purchase Price × Combined Rate
          </p>
          <p className="text-amber-600 dark:text-amber-400">
            Reverse Base Extraction = Gross Receipt Total ÷ (1 + Combined Rate)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Sample Major Arkansas City Combined Rates
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Jurisdiction</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">State Rate</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">County + City Rate</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Total Combined Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Little Rock (Pulaski County)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">6.50%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">2.50%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">9.00%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Fayetteville (Washington County)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">6.50%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">3.25%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">9.75%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Fort Smith (Sebastian County)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">6.50%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">3.25%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600">9.75%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
