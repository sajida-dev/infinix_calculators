import React from "react";

export default function GrossUpSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Payroll Gross-Up Formulas: Paying Net Bonuses &amp; Executive Stipends
        </h2>
        <p>
          A <strong>payroll gross-up</strong> is an accounting calculation used by employers to increase the gross payment amount of a bonus, relocation allowance, or executive stipend so that the employee takes home the exact desired net amount after all mandatory federal, state, and FICA payroll taxes are withheld.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Universal Gross-Up Equation
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Gross Payment = Desired Net Amount ÷ [1 - (Federal Rate + State Rate + FICA Rate + Local Rate)]
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          *Note: For standard supplemental wage bonuses in the US, the IRS requires a statutory federal supplemental withholding rate of 22% (or 37% for bonus amounts exceeding $1 million).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Step-by-Step Gross-Up Example
        </h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm space-y-2">
          <p><strong>Goal:</strong> Award an employee a clean $5,000 net holiday bonus in Georgia.</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
            <li>Federal Supplemental Tax: 22.0%</li>
            <li>FICA (Social Security 6.2% + Medicare 1.45%): 7.65%</li>
            <li>Georgia State Income Tax: 5.39%</li>
            <li><strong>Total Combined Tax Percentage:</strong> 22% + 7.65% + 5.39% = 35.04% (0.3504)</li>
          </ul>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold pt-2">
            Gross Pay Required = $5,000 ÷ (1 - 0.3504) = $5,000 ÷ 0.6496 = $7,697.04
          </p>
        </div>
      </div>
    </article>
  );
}
