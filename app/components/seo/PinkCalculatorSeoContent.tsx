import React from "react";
import Link from "next/link";

export default function PinkCalculatorSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Why Aesthetic Study Tools &amp; Pink Calculators Boost Focus and Math Productivity
        </h2>
        <p>
          In modern digital workflows, study ergonomics and visual aesthetics play a pivotal psychological role in reducing cognitive fatigue. An aesthetic online calculator transforms repetitive calculations, homework assignments, budgeting schedules, and scientific equations into an enjoyable desk experience. Whether styled with classic rose tones, soft blush accents, or warm sand neutrals, visual harmony enhances long-session computational focus.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            4 Pastel Aesthetic Themes
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Switch seamlessly between Classic Rose, Soft Blush, Minimal Noir, and Warm Sand to match your study setup and desktop aesthetic.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            Mechanical Key Clicks
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Powered by the Web Audio API, enjoy tactile audio feedback with zero latency, complete with a quick 1-click mute toggle.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-2">
            Scientific Trigonometry Drawer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Expand into scientific mode for trigonometric functions (sin, cos, tan, tan⁻¹), logarithms (log, ln), powers (x², x³), factorials (n!), and constants (π, e).
          </p>
        </div>
      </div>

      {/* Comparison: Online Pink Calculator vs Physical Hardware */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Online Pink Calculator vs. Physical Handheld Calculators (TI-84 Plus CE &amp; Casio fx-9750GIII)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white dark:bg-dark-card rounded-xl border border-slate-200 dark:border-dark-border overflow-hidden">
            <thead>
              <tr className="bg-slate-100 dark:bg-dark-bg border-b border-slate-200 dark:border-dark-border text-slate-900 dark:text-slate-100">
                <th className="p-3.5 font-bold">Feature / Metric</th>
                <th className="p-3.5 font-bold text-rose-600 dark:text-rose-400">Infinix Online Calculator</th>
                <th className="p-3.5 font-bold">TI-84 Plus CE (Rose / Pink)</th>
                <th className="p-3.5 font-bold">Casio fx-9750GIII (Pink)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-dark-border">
              <tr>
                <td className="p-3.5 font-semibold">Cost</td>
                <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">100% Free (No Ads / No Signups)</td>
                <td className="p-3.5 text-slate-500">$130 – $150 USD</td>
                <td className="p-3.5 text-slate-500">$55 – $65 USD</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Device Compatibility</td>
                <td className="p-3.5">Works on any browser, mobile phone, tablet, or desktop</td>
                <td className="p-3.5">Requires carrying 7.5 oz handheld device</td>
                <td className="p-3.5">Requires carrying 7.2 oz handheld device</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Audio &amp; Custom Themes</td>
                <td className="p-3.5 font-semibold">4 Custom Pastel Themes + Audio Click Toggle</td>
                <td className="p-3.5">Fixed shell color, silent rubber membrane keys</td>
                <td className="p-3.5">Fixed shell color, plastic keys</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Calculation Tape History</td>
                <td className="p-3.5">20-entry searchable history with 1-click restore</td>
                <td className="p-3.5">Scrollable history buffer</td>
                <td className="p-3.5">Limited memory recall</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold">Copy to Clipboard</td>
                <td className="p-3.5 font-semibold">Instant 1-Click Clipboard Copy</td>
                <td className="p-3.5">Requires USB link cable transfer</td>
                <td className="p-3.5">No direct clipboard copy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Keyboard Shortcuts Cheat Sheet */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Keyboard Shortcuts &amp; Rapid Math Operation Cheat Sheet
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border space-y-2">
            <span className="font-semibold text-xs uppercase text-slate-500 dark:text-slate-400 block">Basic Operations</span>
            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">0</kbd> to <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">9</kbd> : Enter Digits</li>
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">+</kbd>, <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">-</kbd>, <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">*</kbd>, <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">/</kbd> : Basic Arithmetic</li>
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">Enter</kbd> or <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">=</kbd> : Calculate Result</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border space-y-2">
            <span className="font-semibold text-xs uppercase text-slate-500 dark:text-slate-400 block">Editing &amp; Clear Keys</span>
            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">Backspace</kbd> : Delete last entered digit</li>
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">Escape</kbd> or <kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">C</kbd> : All Clear (AC)</li>
              <li><kbd className="px-2 py-0.5 rounded bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border font-mono text-slate-800 dark:text-slate-200">%</kbd> : Convert number to percentage (N ÷ 100)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Helpful Links */}
      <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Looking for specialized financial or math tools?</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Explore our trigonometry, mortgage simulation, and fee calculators.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculators/tan-inverse" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-card transition">
            Tan Inverse Calculator
          </Link>
          <Link href="/calculators/mortgage-calculator-game" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-card transition">
            Mortgage Simulator
          </Link>
        </div>
      </div>
    </article>
  );
}

