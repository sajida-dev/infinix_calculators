import React from "react";

export default function PuppyGrowthSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Tracking Canine Growth Velocity &amp; Development Stages
        </h2>
        <p>
          Monitoring a puppy’s weekly rate of weight gain helps pet owners and veterinarians ensure healthy skeletal development, prevent pediatric obesity, and choose the correct caloric portions for growth-stage puppy kibble.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Weekly Weight Gain Velocity</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            Weekly Gain = Current Weight (lbs) ÷ Current Age (Weeks)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            For medium/large breeds, healthy puppies typically gain 1.5 to 2.5 lbs per week between weeks 8 and 20.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156]">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Growth Plate Closure Milestones</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Puppy growth plates (epiphyseal plates) remain open during peak growth. Strenuous repetitive jumping or agility exercises should be avoided until growth plates fuse (12 months for medium, 18–24 months for large/giant breeds).
          </p>
        </div>
      </div>
    </article>
  );
}
