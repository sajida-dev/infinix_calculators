import React from "react";

export default function MapeiGroutSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Mapei Grout Coverage: Product Formulations, Joint Geometry &amp; Densities
        </h2>
        <p>
          Calculating grout weights and coverage for <strong>Mapei tiling systems</strong> requires applying product-specific dry density coefficients tailored for Keracolor Sanded/Unsanded, Ultracolor Plus FA, and Kerapoxy epoxy formulations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Mapei Product Density &amp; Joint Width Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Mapei Product</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Density (lbs / in³)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Joint Capability</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Keracolor S (Sanded)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">0.065 lbs / in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">1/8&quot; to 5/8&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Polymer-modified cementitious for floor tile.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Keracolor U (Unsanded)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">0.058 lbs / in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">1/16&quot; to 1/8&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Scratch-free for glazed ceramic &amp; polished marble.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Ultracolor Plus FA</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 font-bold">0.062 lbs / in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">1/16&quot; to 3/4&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">All-in-one fine aggregate with DropEffect water repellency.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Kerapoxy Epoxy</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">0.067 lbs / in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">1/16&quot; to 3/8&quot;</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">100% solid epoxy for commercial food prep &amp; heavy acid zones.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
