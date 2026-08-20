import React from "react";

export default function MarylandTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Maryland State &amp; County Income Tax: Progressive Brackets &amp; Piggyback Rates
        </h2>
        <p>
          Maryland tax liabilities consist of two mandatory components: the <strong>State Progressive Income Tax</strong> (ranging from 2.00% to 5.75%) plus a mandatory <strong>Local County Piggyback Income Tax</strong> (ranging from 2.25% to 3.20% depending on your county of residence).
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Maryland Total Tax Liability Formula
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Maryland Taxable Income = Gross Income - Standard Deduction (15% of gross, capped at $2,550 single / $5,100 married)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Total Maryland Tax = State Progressive Tax + (Taxable Income × County Piggyback Rate %)
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Maryland County Piggyback Tax Rates Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">County / Jurisdiction</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Local County Tax Rate</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Top Combined State + County Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Montgomery County</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600">3.20% (Maximum)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">8.95%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Prince George&apos;s / Baltimore City</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600">3.20%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">8.95%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Anne Arundel County</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600 font-bold">2.81%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">8.56%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Talbot County / Worcester</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-sky-600 font-bold">2.40% / 2.25%</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">8.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
