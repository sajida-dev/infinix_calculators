import React from "react";

export default function MortgageArkansasSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Arkansas Mortgage Financing: Property Tax Rates &amp; ADFA Programs
        </h2>
        <p>
          Calculating a monthly home loan payment in the State of Arkansas requires modeling amortized Principal &amp; Interest alongside local Arkansas property taxes (which average approximately <strong>0.61% of market value</strong>) and homeowners hazard insurance.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Arkansas Homestead Tax Credit
        </h3>
        <p className="text-xs sm:text-sm">
          Under Arkansas Amendment 79, homeowners who reside in their primary home are eligible for an annual <strong>Homestead Property Tax Credit of up to $375 to $425</strong> against their local county ad valorem property tax bill.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          ADFA First-Time Homebuyer Down Payment Assistance
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          The <em>Arkansas Development Finance Authority (ADFA)</em> offers the <strong>Move-Up and ADFA Down Payment Assistance (DPA)</strong> programs, providing up to $10,000 or 6% of the purchase loan amount as a second mortgage to cover upfront closing costs for qualifying families.
        </p>
      </div>
    </article>
  );
}
