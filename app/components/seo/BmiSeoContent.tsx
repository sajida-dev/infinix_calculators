import React from "react";

export default function BmiSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Body Mass Index (BMI) Clinical Categories &amp; Calculation Formulas
        </h2>
        <p>
          <strong>Body Mass Index (BMI)</strong> is an anthropometric screening metric established by the World Health Organization (WHO) and the Centers for Disease Control and Prevention (CDC) to categorize adult weight status relative to height.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Imperial Formula (Pounds &amp; Inches)</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            BMI = [Weight (lbs) ÷ Height (in)²] × 703
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For 160 lbs at 5&apos;8&quot; (68 in): (160 ÷ 4,624) × 703 = <strong>24.32 (Normal)</strong>.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Metric Formula (Kg &amp; Meters)</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            BMI = Weight (kg) ÷ Height (m)²
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For 72.5 kg at 1.73 m: 72.5 ÷ (1.73 × 1.73) = <strong>24.22 (Normal)</strong>.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          WHO Standard Adult BMI Classifications
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Category</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">BMI Range (kg/m²)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Associated Health Risk Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-sky-600">Underweight</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">&lt; 18.5</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Increased risk for nutritional deficiency &amp; osteoporosis.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-emerald-600">Normal Weight</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold">18.5 – 24.9</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Lowest statistical risk for cardiovascular disease.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-amber-600">Overweight</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">25.0 – 29.9</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Moderate risk for hypertension and pre-diabetes.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-rose-600">Obesity (Class I–III)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold">&ge; 30.0</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">High risk for type 2 diabetes, stroke, and sleep apnea.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
