import React from "react";
import Link from "next/link";

export default function ElectricSeoContent() {
  return (
    <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Overview & Core Principle */}
      <section className="border-t border-slate-200 dark:border-[#4D5156] pt-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          How to Calculate Appliance Electricity Consumption &amp; Monthly Energy Costs
        </h2>
        <p>
          Calculating the exact operating cost of any household appliance—such as a central air conditioner, space heater, electric vehicle (EV) charger, or refrigerator—requires converting the appliance&apos;s rated power draw from <strong>Watts (W)</strong> into <strong>Kilowatt-Hours (kWh)</strong>, which is the standardized billing unit used by electric utility companies.
        </p>
        <p>
          Because electricity bills combine base generation rates with transmission, delivery, and regulatory surcharges, understanding your appliance&apos;s true duty cycle and power rating is the fastest way to identify high-draw culprits and lower monthly utility expenses.
        </p>
      </section>

      {/* Core Mathematical Equations */}
      <section className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          The Fundamental Electricity Cost Formulas
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Utility meters track total energy consumed over time. Use these three core formulas to convert manufacturer nameplate wattage into monetary figures:
        </p>
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <div className="p-3 bg-white dark:bg-[#191a1d] rounded-lg border border-slate-200 dark:border-[#4D5156]">
            <span className="block text-slate-500 text-[11px] uppercase tracking-wider font-sans font-bold">1. Daily Energy Consumption (kWh)</span>
            <code className="text-primary dark:text-sky-400 font-bold">
              Daily kWh = (Appliance Wattage [W] × Daily Operating Hours) ÷ 1,000
            </code>
          </div>
          <div className="p-3 bg-white dark:bg-[#191a1d] rounded-lg border border-slate-200 dark:border-[#4D5156]">
            <span className="block text-slate-500 text-[11px] uppercase tracking-wider font-sans font-bold">2. Duty-Cycle Adjusted Consumption (For Cycling Appliances)</span>
            <code className="text-emerald-600 dark:text-emerald-400 font-bold">
              Effective kWh = (Rated Watts × Duty Cycle % × Plugged-In Hours) ÷ 1,000
            </code>
          </div>
          <div className="p-3 bg-white dark:bg-[#191a1d] rounded-lg border border-slate-200 dark:border-[#4D5156]">
            <span className="block text-slate-500 text-[11px] uppercase tracking-wider font-sans font-bold">3. Total Monthly &amp; Annual Operating Expense</span>
            <code className="text-amber-600 dark:text-amber-400 font-bold">
              Monthly Cost ($) = Daily kWh × Utility Rate ($/kWh) × 30.4 Days
            </code>
          </div>
        </div>
      </section>

      {/* Comprehensive Appliance Reference Matrix */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Household Appliance Power Draw &amp; Monthly Operating Cost Matrix
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Estimates below reflect typical residential operation based on the U.S. national average residential electricity rate of <strong>$0.1688 per kWh</strong> (U.S. Energy Information Administration benchmark).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Appliance / Equipment</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Rated Wattage</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Typical Usage Profile</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Daily Energy</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Est. Monthly Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Central Air Conditioner (3.5 Ton, 14 SEER)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">3,500 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">8 hours active cooling / day</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">28.0 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600 dark:text-rose-400">$143.99 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Electric Vehicle (EV) Level 2 Home Charger</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">7,200 W (32A / 240V)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">2.5 hours / day (approx. 35 miles)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">18.0 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-rose-600 dark:text-rose-400">$92.56 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Electric Water Heater (50 Gallon Tank)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">4,500 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">3 hours heating element run / day</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">13.5 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-amber-600 dark:text-amber-400">$69.42 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Portable Space Heater (Ceramic / Oil-filled)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1,500 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">6 hours / day (High setting)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">9.0 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-amber-600 dark:text-amber-400">$46.19 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Electric Clothes Dryer</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">3,000 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">1 hour / day (approx. 1 load)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">3.0 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-slate-700 dark:text-slate-300">$15.40 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Gaming Desktop PC (GPU + Multi-Monitor)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">500 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">5 hours active load / day</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">2.5 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-slate-700 dark:text-slate-300">$12.83 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Energy Star Refrigerator (French Door, 25 cu ft)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">150 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">8 hours compressor run (33% duty cycle)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1.2 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">$6.16 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Smart TV (65-inch 4K OLED)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">120 W</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">5 hours viewing / day</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.6 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">$3.08 / mo</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold">Standby &amp; Vampire Loads (Whole House Idle)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">100 W (Continuous)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">24 hours / day (modems, smart devices, clocks)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">2.4 kWh</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-amber-600 dark:text-amber-400">$12.32 / mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* State-by-State Benchmark & Regional Utility Disparities */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          U.S. State Utility Rate Disparities &amp; Impact on Appliance Bills
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Electricity pricing varies by over 300% across the United States due to fuel generation mix, state utility regulation, and grid delivery infrastructure:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-wide">U.S. National Average</span>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">16.88¢ / kWh</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1,500W space heater for 6 hrs = $1.52 / day</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-wide">California (High Rate)</span>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">32.47¢ / kWh</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1,500W space heater for 6 hrs = $2.92 / day</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wide">Washington / Idaho (Low Rate)</span>
            <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 font-mono">11.35¢ / kWh</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1,500W space heater for 6 hrs = $1.02 / day</p>
          </div>
        </div>
      </section>

      {/* 4 Critical Calculation Traps */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          The 4 Most Common Electricity Calculation Traps
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1f2127]">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              1. Confusing Starting (Surge) Watts with Continuous Running Watts
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Motor-driven equipment (refrigerators, sump pumps, central AC compressors) lists high starting power (e.g., 2,500W surge) to kick on the induction motor. This surge lasts only 2 to 3 seconds. For energy billing, always multiply by the rated <em>running wattage</em> (e.g., 600W), not the peak starting surge.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1f2127]">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              2. Overlooking Thermostatic Duty Cycles
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              A refrigerator plugged into the wall 24 hours a day does not run 24 hours at full wattage. Its internal thermostat cycles the compressor on and off, resulting in an active duty cycle of 30% to 40% (approximately 8 hours of active draw). Assuming 24-hour continuous draw inflates estimated costs by nearly 300%.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1f2127]">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              3. Ignoring Delivery and Distribution Surcharges
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              If your utility quotes a generation supply rate of 8¢/kWh, your final bill likely includes delivery fees, transmission riders, and municipal taxes adding another 6¢ to 9¢/kWh. To find your true rate, divide the <strong>Total Bill Dollar Amount</strong> by the <strong>Total kWh Used</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1f2127]">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              4. Time-of-Use (TOU) Peak Rate Penalties
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Under Time-of-Use billing plans, running an EV charger, dishwasher, or clothes dryer during peak weekday hours (typically 4 PM to 9 PM) can cost 2x to 3x more per kWh than scheduling operation during super-off-peak overnight windows.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework: When Does Upgrading Pay For Itself? */}
      <section className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          Appliance Upgrade Payback Formula
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          When considering replacing an older appliance with an Energy Star certified unit, calculate the simple payback period:
        </p>
        <div className="p-4 bg-white dark:bg-[#191a1d] rounded-lg border border-slate-200 dark:border-[#4D5156] font-mono text-xs sm:text-sm text-primary dark:text-sky-400 font-bold">
          Payback Period (Years) = Price Difference ($) ÷ Annual Electricity Savings ($)
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <strong>Worked Example:</strong> Upgrading from a 15-year-old refrigerator (drawing 800 kWh/yr at $135/yr) to an Energy Star model (drawing 350 kWh/yr at $59/yr) saves $76 per year. If the new refrigerator premium is $300, the payback period is <code>$300 ÷ $76 ≈ 3.9 years</code>.
        </p>
      </section>

      {/* Step-by-Step Practical Energy Audit Checklist */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          4-Step Home Energy Audit Checklist
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Locate the Nameplate Power Rating:</strong> Check the metal UL/ETL sticker on the back or bottom of the appliance for &quot;Watts (W)&quot; or &quot;Amps (A) × Volts (V)&quot; (e.g., 10A × 120V = 1,200W).</li>
          <li><strong>Estimate Real Daily Runtime:</strong> Distinguish between continuous draw (space heaters, lamps) and duty-cycled appliances (compressors, heat pumps).</li>
          <li><strong>Calculate with Local Utility Rates:</strong> Input your accurate all-in rate per kWh into the <Link href="/calculators/electric" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">Electric Cost Calculator</Link>.</li>
          <li><strong>Eliminate Phantom Drain:</strong> Plug home entertainment systems, desktop PC setups, and chargers into smart surge protectors that automatically cut power when devices enter standby.</li>
        </ol>
      </section>
    </article>
  );
}
