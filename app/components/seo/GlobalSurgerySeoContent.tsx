import React from "react";
import Link from "next/link";

export default function GlobalSurgerySeoContent() {
  return (
    <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      {/* Overview & Regulatory Scope */}
      <section className="border-t border-slate-200 dark:border-[#4D5156] pt-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          CPT Global Surgery Package Rules: 000, 010 &amp; 090 Post-Op Days
        </h2>
        <p>
          The <strong>Centers for Medicare &amp; Medicaid Services (CMS)</strong> and the American Medical Association (AMA) define surgical payments through <strong>Global Surgery Periods</strong>. All standard preoperative evaluations, intraoperative surgical services, and routine postoperative follow-ups are bundled into a single CPT procedure payment.
        </p>
        <p>
          Billing separate Evaluation and Management (E/M) services during an active global surgical window without valid qualifying billing modifiers results in immediate claim denials. Use our <Link href="/calculators/global-surgery" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">Global Surgery Calculator</Link> to compute exact post-op expiration dates and billing resumption windows.
        </p>
      </section>

      {/* CMS Global Surgery Days Classification Matrix */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          CMS Global Period Classifications &amp; Post-Op Timelines
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Global Code</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Procedure Type</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Pre-Op Window</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Post-Op Window Scope</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Separate Billing Resumes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold font-mono text-sky-600 dark:text-sky-400">000 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Endoscopies &amp; Minor Diagnostics (e.g., CPT 46600)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Day of procedure only</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Day of procedure only (no post-op days)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Post-Op Day 1</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold font-mono text-emerald-600 dark:text-emerald-400">010 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Minor Surgical Procedures (e.g., CPT 11402)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Day of procedure only</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Surgery date + 10 full calendar days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Post-Op Day 11</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold font-mono text-rose-600 dark:text-rose-400">090 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Major Surgical Operations (e.g., CPT 49591, 50080)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-amber-600">1 day prior to surgery</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Surgery date + 90 full calendar days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Post-Op Day 91</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common CPT Code Global Period Reference Table */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          High-Volume CPT Procedures &amp; Global Window Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">CPT Code</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Procedure Description</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Global Days</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Billing Policy Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">CPT 11402</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Excision benign lesion (trunk/arms/legs, 1.1–2.0 cm)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600 font-bold">010 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Routine suture removal is non-billable during 10 days.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">CPT 46600</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Diagnostic anoscopy</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-sky-600 font-bold">000 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Unrelated E/M on same day requires Modifier 25.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">CPT 49591 / 49650</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Laparoscopic / open abdominal hernia repair</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-rose-600 font-bold">090 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Pre-op E/M 1 day prior and all 90-day follow-ups bundled.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono font-bold">CPT 50080</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Percutaneous nephrostolithotomy (kidney stone surgery)</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-rose-600 font-bold">090 Days</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Staged second-look procedures require Modifier 58.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Critical Medical Billing Modifiers */}
      <section className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 sm:p-8 rounded-2xl space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Medical Billing Modifiers for Global Surgical Windows
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          When care during a post-op window falls outside standard routine recovery, specific CPT modifiers must be appended:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
            <span className="font-bold text-primary dark:text-sky-400 font-mono">Modifier 24</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Unrelated Evaluation &amp; Management (E/M) service provided by the same physician during a post-op period.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
            <span className="font-bold text-primary dark:text-sky-400 font-mono">Modifier 25</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Significant, separately identifiable E/M service on the exact day of a minor 000-day or 010-day procedure.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">Modifier 58</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Staged or planned related procedure by the same surgeon during the original post-op period.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
            <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">Modifier 78 &amp; 79</span>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              <strong>78:</strong> Unplanned return to OR for complications. <strong>79:</strong> Completely unrelated surgery during post-op.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
