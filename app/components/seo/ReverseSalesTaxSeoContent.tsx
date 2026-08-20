import React from "react";

export default function ReverseSalesTaxSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Reverse Sales Tax Extraction: Mathematical Proof &amp; Invoicing Math
        </h2>
        <p>
          In corporate bookkeeping, VAT audits, and expense reporting, extracting the pre-tax base price from a tax-inclusive receipt total requires applying the <strong>reciprocal division formula</strong> rather than direct percentage subtraction.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Universal Reverse Tax Formulas
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Pre-Tax Base Price = Gross Receipt Total ÷ [ 1 + (Sales Tax Rate % ÷ 100) ]
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Tax Amount Paid = Gross Receipt Total - Pre-Tax Base Price
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Why Direct Multiplication is Mathematically Incorrect
        </h3>
        <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-5 rounded-xl space-y-2 text-xs sm:text-sm">
          <p>
            If a receipt totals <strong>$108.00</strong> with an 8% sales tax:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
            <li><strong>Correct Division:</strong> $108.00 ÷ 1.08 = <strong>$100.00 Base Cost</strong> ($8.00 tax).</li>
            <li><strong>Incorrect Multiplication:</strong> $108.00 × 0.08 = $8.64 ($99.36 Base Cost — a 64¢ calculation error!).</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
