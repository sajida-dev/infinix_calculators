import React from "react";

export default function MortgageMaineSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Maine Mortgage Financing: Municipal Property Taxes &amp; MaineHousing Programs
        </h2>
        <p>
          Calculating home loan payments in the State of Maine requires accounting for principal, interest, local municipal property tax mil rates, and cold-climate homeowners insurance reserves.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Maine Municipal Property Tax &amp; Homestead Exemption
        </h3>
        <p className="text-xs sm:text-sm">
          Property taxes in Maine are assessed locally at the municipal town or city level, with an effective statewide average of approximately <strong>1.36% of market value</strong>. The <em>Maine Homestead Property Tax Exemption</em> allows qualifying permanent residents to reduce the assessed property valuation of their primary home by up to $25,000.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          MaineHousing First-Time Homebuyer Assistance
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          The Maine State Housing Authority (MaineHousing) offers the <em>First Home Loan Program</em>, providing low, fixed interest rates and up to $5,000 in grant assistance toward down payments and closing costs for eligible buyers in Cumberland, York, Penobscot, and other Maine counties.
        </p>
      </div>
    </article>
  );
}
