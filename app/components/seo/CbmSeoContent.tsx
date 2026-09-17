import React from "react";
import Link from "next/link";

export default function CbmSeoContent() {
  return (
    <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Overview */}
      <section className="border-t border-slate-200 dark:border-dark-border pt-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          CBM Freight Shipping, Weight Conversion &amp; Container Volume Guide
        </h2>
        <p>
          In international ocean and air freight logistics, <strong>CBM (Cubic Meters / m³)</strong> is the primary unit of measurement used to calculate cargo volume, container capacity utilization, and chargeable dimensional freight weight.
        </p>
        <p>
          Whether you are shipping Less than Container Load (LCL), Full Container Load (FCL), or palletized air cargo, use our free <Link href="/calculators/cbm" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">CBM Shipping Calculator</Link> to compute volume across centimeters, inches, feet, and total carton counts.
        </p>
        <p>
          <strong>Quick answer:</strong> convert each dimension to meters, multiply length by width by height, and multiply by the carton quantity. A 50 cm x 40 cm x 30 cm carton is 0.06 CBM; ten matching cartons are 0.60 CBM.
        </p>
      </section>

      {/* Core Conversion Formulas */}
      <section className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          How to Calculate CBM from Any Unit of Measurement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs sm:text-sm">
          <div className="p-4 bg-white dark:bg-dark-bg rounded-xl border border-slate-200 dark:border-dark-border">
            <span className="text-slate-500 font-bold block mb-1">From Centimeters (cm)</span>
            <p className="text-primary dark:text-sky-400 font-bold">
              CBM = (L × W × H) ÷ 1,000,000
            </p>
            <span className="text-[11px] text-slate-400 mt-2 block">Example: 50×40×30 cm = 0.06 CBM</span>
          </div>

          <div className="p-4 bg-white dark:bg-dark-bg rounded-xl border border-slate-200 dark:border-dark-border">
            <span className="text-slate-500 font-bold block mb-1">From Inches (in)</span>
            <p className="text-primary dark:text-sky-400 font-bold">
              CBM = (L × W × H) ÷ 61,023.74
            </p>
            <span className="text-[11px] text-slate-400 mt-2 block">Example: 48×40×51 in = 1.605 CBM</span>
          </div>

          <div className="p-4 bg-white dark:bg-dark-bg rounded-xl border border-slate-200 dark:border-dark-border">
            <span className="text-slate-500 font-bold block mb-1">From Feet (ft)</span>
            <p className="text-primary dark:text-sky-400 font-bold">
              CBM = (L × W × H) ÷ 35.3147
            </p>
            <span className="text-[11px] text-slate-400 mt-2 block">Example: 4×4×4 ft = 1.812 CBM</span>
          </div>
        </div>
        <p className="text-sm">
          For dimensions in millimeters, divide each measurement by 1,000 before multiplying. Equivalently, use <strong>CBM = (L mm × W mm × H mm) ÷ 1,000,000,000</strong>. Measure the outside of packed cartons, including any overhang, because that is the space a shipment occupies.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Calculate Total CBM From Shipping Dimensions
        </h3>
        <ol className="list-decimal list-inside space-y-2 pl-1">
          <li>Use one measurement unit for length, width, and height.</li>
          <li>Select that unit in the calculator and enter the outside dimensions of one carton or pallet.</li>
          <li>Enter the number of identical cartons to get total CBM and cubic feet.</li>
          <li>Compare the result with the carrier&apos;s quote, which may use actual weight, dimensional weight, a minimum charge, or all three.</li>
        </ol>
        <p>
          CBM measures space, not mass. A CBM-to-kilogram ratio is a carrier billing convention, so confirm the divisor and any minimum charge with the freight provider before booking.
        </p>
      </section>

      {/* Sea Freight vs Air Freight Chargeable Weight Ratio */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          CBM to Kilograms (KG) Chargeable Weight Rules
        </h3>
        <p className="text-sm">
          Freight carriers calculate shipping costs based on <strong>Chargeable Weight</strong>, which is the higher number between actual gross scale weight and dimensional volumetric weight:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Shipping Mode</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">1 CBM Weight Equivalent</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">0.4 CBM Chargeable Weight</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">0.6 CBM Chargeable Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border">
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Ocean LCL Freight</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">1 CBM = 1,000 kg (1 Ton)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">400 kg</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">600 kg</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Standard Air Cargo (IATA)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">1 CBM = 167 kg (1:6)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">66.8 kg</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">100.2 kg</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Express Courier (DHL/FedEx)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-amber-600 dark:text-amber-400">1 CBM = 200 kg (1:5)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">80.0 kg</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">120.0 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Pallet & Cargo Dimension Benchmarks */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Standard Pallet &amp; Crate Dimension Reference Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Cargo / Pallet Type</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Dimensions (Inches)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Total Cubic Inches</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Volume in CBM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border">
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Standard GMA Pallet (Loaded)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">48″ × 40″ × 51″</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">97,920 in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">1.605 CBM</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Oversized Machinery Crate</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">67″ × 41″ × 59″</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">162,073 in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">2.656 CBM</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">High-Cube Master Skid</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">68″ × 70″ × 96″</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">456,960 in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">7.488 CBM</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">Standard Master Parcel Carton</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">24″ × 18″ × 16″</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">6,912 in³</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold text-primary dark:text-sky-400">0.113 CBM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ocean Shipping Container Capacities */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Standard Ocean Container Capacity Reference Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Container Type</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Internal Dimensions (L × W × H)</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Max Volume Capacity</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Usable Practical CBM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-dark-border">
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">20ft Standard (20GP)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">5.89m × 2.35m × 2.39m</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">33.2 CBM</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">28 – 30 CBM</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">40ft Standard (40GP)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">12.03m × 2.35m × 2.39m</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">67.6 CBM</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">58 – 62 CBM</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold">40ft High Cube (40HQ)</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">12.03m × 2.35m × 2.69m</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono">76.2 CBM</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">68 – 70 CBM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
