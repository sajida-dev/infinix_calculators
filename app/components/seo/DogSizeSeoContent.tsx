import React from "react";

export default function DogSizeSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Canine Shoulder Height &amp; Frame Size Projections
        </h2>
        <p>
          In addition to adult weight, estimating an adult dog’s <strong>wither height (shoulder height from the floor)</strong> is essential for selecting appropriate crate sizes, vehicle harnesses, and elevated feeding stations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Standard Canine Size Classifications &amp; Crate Requirements
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Category</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Adult Shoulder Height</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Representative Breeds</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Recommended Crate Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-sky-600">Toy &amp; Small</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">6 – 14 Inches</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Chihuahua, Yorkie, French Bulldog, Pug</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold">22&quot; – 24&quot; Crate</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-emerald-600">Medium</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">15 – 21 Inches</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Beagle, Australian Shepherd, Border Collie</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold">30&quot; – 36&quot; Crate</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-amber-600">Large</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">22 – 27 Inches</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Labrador Retriever, Golden Retriever, German Shepherd</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold">42&quot; Crate</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-rose-600">Giant</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">&gt; 28 Inches</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Great Dane, Mastiff, Saint Bernard, Bernese Mountain Dog</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold">48&quot; – 54&quot; Crate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
