import React from "react";

export default function DogPregnancySeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Canine Gestation Timeline: 63-Day Whelping Milestones &amp; Veterinary Care
        </h2>
        <p>
          Canine pregnancy lasts an average of <strong>63 days</strong> (normal physiological range is 58 to 68 days from the date of ovulation or mating). Tracking exact gestational milestones ensures timely veterinary diagnostic scans, nutritional shifts, and proper whelping box preparation.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The 24-Hour Pre-Labor Temperature Drop Indicator
        </h3>
        <p className="text-xs sm:text-sm">
          A pregnant bitch&apos;s normal baseline body temperature is 100.5°F to 102.5°F. Beginning around <strong>Day 58</strong>, take rectal temperatures twice daily. A sudden, sharp drop below <strong>99.0°F (37.2°C)</strong> signals an abrupt drop in progesterone and confirms that stage 1 whelping labor will initiate within 12 to 24 hours.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Critical Canine Pregnancy Milestones
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-dark-border text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Gestation Window</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Embryological Milestone</th>
                <th className="border border-slate-200 dark:border-dark-border p-3 text-left">Recommended Veterinary Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-sky-600">Day 25 – 35</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Embryo implantation &amp; embryonic vesicles detectable.</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold">Ultrasound Scan (Confirms pregnancy &amp; viability)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-emerald-600">Day 45 – 50</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Fetal skeletons begin mineralizing and calcifying.</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-mono font-bold">Abdominal X-Ray (Accurate puppy head/spine count)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-amber-600">Day 56 – 60</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Mammary gland development &amp; colostrum production.</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Introduce female to whelping box in quiet area.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-semibold text-rose-600">Day 63</td>
                <td className="border border-slate-200 dark:border-dark-border p-3">Full gestational maturity.</td>
                <td className="border border-slate-200 dark:border-dark-border p-3 font-bold">Whelping / Delivery of puppies.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
