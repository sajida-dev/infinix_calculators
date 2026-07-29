export default function ConcreteSeoContent() {
  return (
    <article className="prose prose-slate max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          How to Calculate Concrete Volume: Slabs, Walls, and Footings
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Estimating concrete requirements accurately is the differences between a successful pour and an expensive, half-finished mess. Whether you are ordering a ready-mix delivery truck in cubic yards or purchasing individual pre-mix bags from local home improvement stores, using a <strong>concrete calculator</strong> guarantees precise volume planning.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Concrete volume is calculated in cubic feet by multiplying the surface area of the pour by its thickness (converted to feet), then dividing by 27 to obtain the volume in cubic yards.
        </p>
      </section>

      <section className="bg-primary/5 dark:bg-[#22242A] rounded-2xl border border-primary/10 dark:border-[#4D5156] p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Concrete Bags to Cubic Yards Quick Lookup Chart
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          How many bags of concrete do you need to equal a cubic yard? Use this reference table for standard pre-mix bag yields:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-[#4D5156]">
            <thead className="bg-slate-100 dark:bg-[#191a1d] border-b border-slate-200 dark:border-[#4D5156] font-bold text-slate-900 dark:text-slate-100">
              <tr>
                <th className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Bag Weight (lbs)</th>
                <th className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Volume Yield (cu ft)</th>
                <th className="p-3">Bags per Cubic Yard (27 cu ft)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#4D5156] text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">80 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-mono">0.60 cu ft</td>
                <td className="p-3 text-primary dark:text-sky-400 font-bold">45 Bags</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">60 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-mono">0.45 cu ft</td>
                <td className="p-3 text-primary dark:text-sky-400 font-bold">60 Bags</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">40 lb bag</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-mono">0.30 cu ft</td>
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
        <div className="border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#22242A] rounded-xl p-5 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Rectangular Slabs Formula</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-[#191a1d] p-2.5 rounded-lg border border-slate-100 dark:border-[#4D5156]">
            Volume (cu ft) = Length (ft) × Width (ft) × [Thickness (in) ÷ 12]
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Use this formula for square or rectangular shapes, including driveways, garden pathways, home foundation slabs, patio floors, and retaining walls.
          </p>
        </div>

        <div className="border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#22242A] rounded-xl p-5 space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Circular Columns &amp; Piers Formula</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-slate-50 dark:bg-[#191a1d] p-2.5 rounded-lg border border-slate-100 dark:border-[#4D5156]">
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
    </article>
  );
}
