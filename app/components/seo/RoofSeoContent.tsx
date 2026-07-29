export default function RoofSeoContent() {
  return (
    <article className="prose prose-slate max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          How to Calculate Roof Area &amp; Shingle Requirements
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Planning a roofing replacement requires accurate estimation of raw materials. Using a <strong>roof shingle calculator</strong> allows homeowners and building contractors to estimate the total roof surface area, the number of shingles squares, and the exact count of shingle bundles needed for the project.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Because climbing onto a steep roof with a measuring tape is dangerous, you can calculate the surface area from the ground by measuring the building's flat footprint (including eave overhangs) and multiplying it by the **Roof Pitch Slope Factor**.
        </p>
      </section>

      <section className="bg-primary/5 dark:bg-[#22242A] rounded-2xl border border-primary/10 dark:border-[#4D5156] p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          The Roofing Industry Standards: Squares &amp; Bundles
        </h3>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          Roofing materials are sold and quoted using standard industry terms:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-1">
          <li><strong>Roofing Square:</strong> A square represents exactly <strong>100 square feet</strong> of roof surface area. If your roof area is 2,400 sq ft, it is a 24-square roof.</li>
          <li><strong>Shingle Bundle:</strong> Shingles are packaged in bundles so they can be carried up ladders. There are exactly <strong>3 bundles in 1 roofing square</strong>. Therefore, a bundle covers 33.3 square feet.</li>
          <li><strong>Individual Shingles:</strong> A standard bundle of 3-tab shingles contains 29 shingles. An average square requires around 87 shingles.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Roof Pitch Factors &amp; Slope Multipliers
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Roof pitch represents the vertical rise in inches for every 12 inches of horizontal run. As the slope steepens, the multiplier increases, meaning a steep roof requires more shingles than a flat roof covering the same ground footprint:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 dark:border-[#4D5156]">
            <thead className="bg-slate-100 dark:bg-[#191a1d] border-b border-slate-200 dark:border-[#4D5156] font-bold text-slate-900 dark:text-slate-100">
              <tr>
                <th className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Roof Pitch (Rise / 12)</th>
                <th className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Roof Category</th>
                <th className="p-3">Slope Pitch Factor (Multiplier)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#4D5156] text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">3/12 rise</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Low Slope / Shed Roof</td>
                <td className="p-3 text-primary dark:text-sky-400 font-mono font-bold">1.030</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">4/12 rise</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Standard Ranch Roof</td>
                <td className="p-3 text-primary dark:text-sky-400 font-mono font-bold">1.054</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">6/12 rise</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Average Suburban Slope</td>
                <td className="p-3 text-primary dark:text-sky-400 font-mono font-bold">1.118</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">8/12 rise</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Steep Slope</td>
                <td className="p-3 text-primary dark:text-sky-400 font-mono font-bold">1.202</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156] font-semibold text-slate-800 dark:text-slate-200">12/12 rise</td>
                <td className="p-3 border-r border-slate-200 dark:border-[#4D5156]">Very Steep / A-Frame (45°)</td>
                <td className="p-3 text-primary dark:text-sky-400 font-mono font-bold">1.414</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          Selecting a Shingle Waste Factor: Gable vs. Hip Roofs
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          When installing shingles, many materials are trimmed and discarded at ridges, hips, and valleys. Ordering the exact net area will leave you short. You must include a waste allowance:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
          <li><strong>Gable Roofs (10% Waste):</strong> Rectangular sloping planes that meet at a single top ridge. They require minimal cutting, so a 10% buffer is sufficient.</li>
          <li><strong>Hip Roofs (15% Waste):</strong> Triangular sloping planes that meet at angled hip rafters. These require frequent diagonal trimming, generating more waste.</li>
          <li><strong>Complex Roofs (20% Waste):</strong> Roofs featuring multiple dormer windows, chimneys, intersecting valleys, or turrets. Requires significant customization and trimming.</li>
        </ul>
      </section>
    </article>
  );
}
