import React from "react";

export default function PointsVsCashSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-[#4D5156] pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Travel Rewards Valuation: Cents Per Point (CPP) &amp; Booking Math
        </h2>
        <p>
          Determining whether to book a flight, hotel room, or vacation rental using credit card points (Chase Ultimate Rewards, Amex Membership Rewards, Capital One Miles) or paying cash requires calculating the exact <strong>Cents Per Point (CPP)</strong> redemption yield.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The Cents Per Point (CPP) Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          CPP = [ (Cash Price in $ - Award Booking Taxes/Fees in $) × 100 ] ÷ Points Required
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Redemption Decision Thresholds Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100">
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Calculated CPP Yield</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Redemption Rating</th>
                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Action Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-rose-600">&lt; 1.2¢ / Point</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Poor Value</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3"><strong>Pay Cash.</strong> Save points for higher-value redemptions.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-amber-600">1.2¢ – 1.8¢ / Point</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Fair / Baseline Value</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Acceptable for economy flights and standard hotel stays.</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-semibold text-emerald-600 font-bold">&gt; 2.0¢ / Point</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Exceptional Value</td>
                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-emerald-600"><strong>Use Points!</strong> Maximizes transfer partner efficiency.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
