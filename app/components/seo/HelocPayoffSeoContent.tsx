import React from "react";

export default function HelocPayoffSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          HELOC Repayment Math: Avoiding the Draw Period Payment Shock
        </h2>
        <p>
          A <strong>Home Equity Line of Credit (HELOC)</strong> operates in two distinct phases: a 10-year <strong>Draw Period</strong> (during which borrowers may draw funds and pay interest-only) followed by a 10 to 20-year <strong>Repayment Period</strong> (during which the full principal balance must be amortized alongside ongoing interest).
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Two Phase Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            <strong>Draw Period (Interest-Only):</strong> Monthly Payment = Balance × (APR ÷ 12)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            <strong>Repayment Period (P&amp;I):</strong> Monthly Payment = Balance × [r(1 + r)^n] ÷ [(1 + r)^n - 1]
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Payment Shock Case Study: A $50,000 HELOC at 8.5% APR
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Phase</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Duration</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Monthly Payment</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Principal Reduction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Draw Period (Interest-Only)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Years 1–10</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">$354.17 / mo</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 text-rose-500 font-bold">$0 (Zero)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Repayment (15-yr Amortization)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Years 11–25</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600">$492.38 / mo</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 text-emerald-600 font-bold">Full $50,000 paid off</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
