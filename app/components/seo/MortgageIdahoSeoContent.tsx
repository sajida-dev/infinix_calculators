import React from "react";

export default function MortgageIdahoSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Idaho Mortgage Financing: Property Tax Brackets &amp; PITI Calculations
        </h2>
        <p>
          Calculating a monthly home loan payment in Idaho requires factoring in Principal, Interest, Homeowners Insurance, and local county Property Taxes (<strong>PITI</strong>).
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Idaho Homeowner&apos;s Property Tax Exemption
        </h3>
        <p className="text-xs sm:text-sm">
          Under Idaho Code § 63-602G, owner-occupied primary residences in Idaho qualify for the <strong>Homeowner&apos;s Property Tax Exemption</strong>, which exempts up to 50% of the taxable value of the home and up to one acre of land (capped at a statutory maximum index annually, typically ~$125,000).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          PITI Monthly Payment Components in Idaho
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-400">
          <li><strong>Principal &amp; Interest:</strong> Standard amortized monthly loan obligation.</li>
          <li><strong>Idaho Effective Property Tax:</strong> Averages approximately 0.63% to 0.75% statewide (Ada, Canyon, and Kootenai counties).</li>
          <li><strong>Hazard &amp; Wildfire Insurance:</strong> Averages ~0.35% to 0.50% of structural value annually.</li>
          <li><strong>Private Mortgage Insurance (PMI):</strong> Applied if putting less than 20% down on conventional loans (0.3% – 1.2% annually).</li>
        </ul>
      </div>
    </article>
  );
}
