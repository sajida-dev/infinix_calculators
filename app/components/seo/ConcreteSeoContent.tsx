import Link from "next/link";

export default function ConcreteSeoContent() {
  return (
    <article className="prose prose-slate max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          How to Calculate Concrete Volume: Slabs, Walls, and Footings
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Estimating concrete requirements accurately is the difference between a successful pour and an expensive, half-finished mess. Whether you are ordering a ready-mix delivery truck in cubic yards or purchasing individual pre-mix bags from local home improvement stores, using a <strong>concrete calculator</strong> guarantees precise volume planning and saves you from costly over-ordering or under-ordering.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Concrete volume is calculated in cubic feet by multiplying the surface area of the pour by its thickness (converted to feet), then dividing by 27 to obtain the volume in cubic yards. This free <strong>concrete slab cost calculator</strong> helps homeowners and contractors determine exactly how much material they need for driveways, patios, foundations, and walkways.
        </p>
      </section>

      <section className="bg-primary/5 dark:bg-dark-card rounded-2xl border border-primary/10 dark:border-dark-border p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Concrete Bags to Cubic Yards Quick Lookup Chart
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          How many bags of concrete do you need to equal a cubic yard? Use this reference table for standard pre-mix bag yields:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-dark-border">
            <thead className="bg-slate-100 dark:bg-dark-bg border-b border-slate-200 dark:border-dark-border font-bold text-slate-900 dark:text-slate-100">
              <tr>
                <th className="p-3 border-r border-slate-200 dark:border-dark-border">Bag Weight (lbs)</th>
                <th className="p-3 border-r border-slate-200 dark:border-dark-border">Volume Yield (cu ft)</th>
                <th className="p-3">Bags per Cubic Yard (27 cu ft)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-dark-border text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">80 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-mono">0.60 cu ft</td>
                <td className="p-3 text-primary dark:text-sky-400 font-bold">45 Bags</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">60 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-mono">0.45 cu ft</td>
                <td className="p-3 text-primary dark:text-sky-400 font-bold">60 Bags</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">40 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-mono">0.30 cu ft</td>
                <td className="p-3 text-primary dark:text-sky-400 font-bold">90 Bags</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          *Note: Bag yields are approximate and depend on the amount of water mixed. Always add a 10% waste buffer to account for spills, settling, and subgrade variations.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card rounded-xl p-5 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Rectangular Slabs Formula</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-dark-bg p-2.5 rounded-lg border border-slate-100 dark:border-dark-border">
            Volume (cu ft) = Length (ft) × Width (ft) × [Thickness (in) ÷ 12]
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Use this formula for square or rectangular shapes, including driveways, garden pathways, home foundation slabs, patio floors, and retaining walls.
          </p>
        </div>

        <div className="border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card rounded-xl p-5 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Circular Columns &amp; Piers Formula</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-dark-bg p-2.5 rounded-lg border border-slate-100 dark:border-dark-border">
            Volume (cu ft) = π × Radius² (ft) × Height/Depth (ft)
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Use this formula for circular concrete tube forms (e.g., Sonotubes), structural columns, deck post footings, circular fire pits, and support piers.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Concrete Slab Thickness Guidelines
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Selecting the appropriate thickness ensures structural durability. Below are industry-standard thicknesses for residential concrete pours:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
          <li><strong>Walkways &amp; Sidewalks (4 inches):</strong> Perfect for foot traffic, trash can storage, and general garden walkway surfaces.</li>
          <li><strong>Patios &amp; Hot Tub Pads (4 inches):</strong> Standard for standard outdoor seating. If supporting heavy swim spas, consider thick 5-6 inch bases with rebar reinforcing.</li>
          <li><strong>Residential Driveways (5–6 inches):</strong> Required for passenger vehicles and light trucks. Standard 4-inch pours can easily crack under vehicle weights or temperature expansion.</li>
          <li><strong>Heavy Equipment / Dump Truck Areas (6+ inches):</strong> Commercial yards and loading zones require thick slabs with internal steel reinforcement.</li>
        </ul>
      </section>

      {/* Real-World Cost Estimation */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Concrete Slab Cost Per Square Foot (2026 Pricing Guide)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Understanding <strong>concrete slab cost</strong> helps you budget accurately. Here are current national average prices for concrete installation:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-dark-border">
            <thead className="bg-slate-100 dark:bg-dark-bg border-b border-slate-200 dark:border-dark-border font-bold text-slate-900 dark:text-slate-100">
              <tr>
                <th className="p-3 border-r border-slate-200 dark:border-dark-border">Project Type</th>
                <th className="p-3 border-r border-slate-200 dark:border-dark-border">Thickness</th>
                <th className="p-3 border-r border-slate-200 dark:border-dark-border">Cost per Sq Ft</th>
                <th className="p-3">Typical Total Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-dark-border text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">Patio / Walkway</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border">4 inches</td>
                <td className="p-3 font-mono">$6 - $9</td>
                <td className="p-3 font-mono">$600 - $1,800 (200 sq ft)</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">Driveway</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border">5-6 inches</td>
                <td className="p-3 font-mono">$8 - $12</td>
                <td className="p-3 font-mono">$2,400 - $6,000 (600 sq ft)</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border font-semibold text-slate-800 dark:text-slate-200">Foundation Slab</td>
                <td className="p-3 border-r border-slate-200 dark:border-dark-border">6 inches</td>
                <td className="p-3 font-mono">$10 - $15</td>
                <td className="p-3 font-mono">$10,000 - $18,000 (1,200 sq ft)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Prices vary by region, reinforcement needs, and local labor rates. Use our calculator above to get your precise volume, then multiply by your local per-yard rate.
        </p>
      </section>

      {/* Step-by-Step Example */}
      <section className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Step-by-Step: Calculating Concrete for a 20×24 ft Driveway
        </h3>
        <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          <p><strong>Step 1:</strong> Measure the driveway area — 20 ft (length) × 24 ft (width) = 480 sq ft.</p>
          <p><strong>Step 2:</strong> Convert thickness to feet — 5 inches ÷ 12 = 0.417 ft.</p>
          <p><strong>Step 3:</strong> Calculate cubic feet — 480 sq ft × 0.417 ft = 200 cubic feet.</p>
          <p><strong>Step 4:</strong> Convert to cubic yards — 200 cu ft ÷ 27 = <strong>7.4 cubic yards</strong>.</p>
          <p><strong>Step 5:</strong> Add 10% waste buffer — 7.4 × 1.10 = <strong>8.15 cubic yards</strong> (order 8.25 to be safe).</p>
          <p className="font-semibold text-primary dark:text-sky-400">At $150/yard delivered, this driveway costs approximately $1,238 for materials alone.</p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Common Concrete Estimating Mistakes to Avoid
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
          <li><strong>Forgetting the waste factor:</strong> Always add 10-15% for spillage, subgrade settling, and over-excavation.</li>
          <li><strong>Mixing up inches and feet:</strong> Convert all measurements to feet before calculating volume.</li>
          <li><strong>Ignoring reinforcement:</strong> Rebar or wire mesh adds minimal volume but is essential for structural integrity.</li>
          <li><strong>Not checking minimum delivery:</strong> Most ready-mix trucks require a minimum of 3-4 cubic yards. Small projects may need bagged concrete instead.</li>
        </ul>
      </section>

      {/* Internal Links */}
      <section className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-xs text-blue-900 dark:text-blue-200 space-y-2">
        <p className="font-bold text-sm">Related Resources:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Learn about <Link href="/calculators/topsoil" className="underline hover:text-primary">soil and landscaping calculations</Link> for your yard projects.</li>
          <li>Use our <Link href="/calculators/asphalt-driveway-cost" className="underline hover:text-primary">asphalt driveway cost calculator</Link> for paving estimates.</li>
          <li>Read our complete guide on <Link href="/blog/concrete-price-per-yard-cost-guide" className="underline hover:text-primary">concrete prices per yard</Link>.</li>
        </ul>
      </section>
    </article>
  );
}
