import React from "react";
import Link from "next/link";

export default function SantylSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Santyl (Collagenase) Ointment Dosage: Wound Surface Area &amp; Tube Sizing Math
        </h2>
        <p>
          Santyl&reg; (collagenase ointment, 250 units/gram) is an enzymatic debriding prescription ointment indicated for debriding chronic dermal ulcers and severely burned areas. Calculating accurate tube quantities is critical for clinical wound care protocols, Medicare Part D coverage documentation, and avoiding medication shortages during active treatment plans.
        </p>
      </div>

      {/* The Clinical Dosage Formula */}
      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Santyl Surface Area &amp; Dosage Equations
        </h3>
        <div className="space-y-2 font-mono text-xs sm:text-sm">
          <p className="text-primary dark:text-sky-400">
            Wound Surface Area (cm²) = Length (cm) × Width (cm)
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            Daily Application (Grams) = Wound Area (cm²) × 0.04 g/cm²
          </p>
          <p className="text-slate-900 dark:text-slate-100">
            30-Day Prescription Need (Grams) = Daily Application (Grams) × Daily Dressing Changes × 30 Days
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[11px]">
            Clinical Standard: 0.04 grams per square centimeter corresponds to the manufacturer recommended application thickness of approximately 2 millimeters (roughly the thickness of a US nickel).
          </p>
        </div>
      </div>

      {/* Wound Size vs Tube Requirements Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Wound Dimensions vs. Monthly Santyl Tube Requirements
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Wound Size (L × W)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Surface Area</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Daily Dosage (1x/day)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">30-Day Total Grams</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Recommended Tube Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">2 cm × 2 cm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">4 cm²</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">0.16 g / day</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">4.8 grams</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">One 30g Tube</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">5 cm × 5 cm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">25 cm²</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">1.00 g / day</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">30.0 grams</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">One 30g Tube</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">7.5 cm × 7.5 cm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">56.25 cm²</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">2.25 g / day</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">67.5 grams</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">One 90g Tube (or three 30g)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">10 cm × 10 cm</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">100 cm²</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">4.00 g / day</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">120.0 grams</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold text-emerald-600">Two 90g Tubes (or four 30g)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Clinical Best Practices */}
      <div className="space-y-4 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Clinical Application Guidelines &amp; Precautions
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li><strong>Application Layer:</strong> Apply directly to the wound surface at a uniform nickel thickness (2 mm). Confine application strictly to necrotic tissue; avoid spreading onto healthy surrounding periwound margins.</li>
          <li><strong>Cleansing Solutions:</strong> Cleanse wound bed with sterile normal saline (0.9% NaCl) or sterile water before applying. Avoid detergents, hydrogen peroxide, povidone-iodine, or heavy metal ions (silver/mercury) which inactivate enzymatic collagenase activity.</li>
          <li><strong>Cross-Hatching:</strong> For thick, hard, leathery eschar, a qualified clinician should cross-hatch the necrotic center with a #10 blade to allow enzymatic penetration.</li>
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Related clinical tools: Model surgical billing cycles with our <Link href="/calculators/global-surgery" className="text-primary dark:text-sky-400 font-bold hover:underline">Global Surgery Calculator</Link> or calculate staffing hours with our <Link href="/calculators/therapy-productivity" className="text-primary dark:text-sky-400 font-bold hover:underline">Therapy Productivity Calculator</Link>.
        </p>
      </div>
    </article>
  );
}
