import React from "react";
import Link from "next/link";

export default function TanInverseSeoContent() {
    return (
        <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {/* Overview */}
            <section className="border-t border-slate-200 dark:border-[#4D5156] pt-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                    Tan Inverse (Arctan) Formula, Unit Circle Values & Real-World Applications
                </h2>
                <p>
                    In trigonometry, the <strong>inverse tangent</strong> — written <code className="text-primary dark:text-sky-400 font-mono">arctan(x)</code>, <code className="text-primary dark:text-sky-400 font-mono">atan(x)</code>, or <code className="text-primary dark:text-sky-400 font-mono">tan⁻¹(x)</code> — is the inverse operation of the tangent function. Given an input ratio <em>x</em> (opposite ÷ adjacent), it returns the angle <em>θ</em> whose tangent equals <em>x</em>:{" "}
                    <code className="text-primary dark:text-sky-400 font-mono">θ = arctan(x)</code> where <code className="text-primary dark:text-sky-400 font-mono">tan(θ) = x</code>.
                </p>
                <p>
                    Because the tangent function repeats every 180° (π radians), the arctan function is restricted to a <strong>principal value range</strong> of{" "}
                    <code className="text-primary dark:text-sky-400 font-mono">(-π/2, π/2)</code> or <code className="text-primary dark:text-sky-400 font-mono">(-90°, 90°)</code>. Use our free{" "}
                    <Link href="/calculators/tan-inverse" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">Tan Inverse Calculator</Link> to compute angles in radians, degrees, and exact π fractions instantly.
                </p>
            </section>

            {/* Domain & Range */}
            <section className="bg-slate-50 dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] p-6 sm:p-8 rounded-2xl space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    Domain, Range & Mathematical Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
                        <span className="text-slate-500 font-bold block mb-1">Domain (Input x)</span>
                        <p className="font-mono text-primary dark:text-sky-400 font-bold">All Real Numbers (-∞, ∞)</p>
                        <span className="text-[11px] text-slate-400 mt-2 block">Any real value is accepted as a tangent ratio.</span>
                    </div>
                    <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
                        <span className="text-slate-500 font-bold block mb-1">Range (Output θ)</span>
                        <p className="font-mono text-primary dark:text-sky-400 font-bold">(-π/2, π/2) or (-90°, 90°)</p>
                        <span className="text-[11px] text-slate-400 mt-2 block">Excludes exactly ±90° where tangent is undefined.</span>
                    </div>
                    <div className="p-4 bg-white dark:bg-[#191a1d] rounded-xl border border-slate-200 dark:border-[#4D5156]">
                        <span className="text-slate-500 font-bold block mb-1">Odd Symmetry</span>
                        <p className="font-mono text-primary dark:text-sky-400 font-bold">arctan(-x) = -arctan(x)</p>
                        <span className="text-[11px] text-slate-400 mt-2 block">Arctan is an odd function — negative inputs give negative angles.</span>
                    </div>
                </div>
            </section>

            {/* Common Values Reference Table */}
            <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Key Tan Inverse Values: Unit Circle Reference Table
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Input Value (x)</th>
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Exact Radians</th>
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Decimal Radians</th>
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Degrees</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-√3 ≈ -1.732</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-π/3</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-1.04720</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-60°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-1</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-π/4</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-0.78540</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-45°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-1/√3 ≈ -0.577</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-π/6</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-0.52360</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-30°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1/√3 ≈ 0.577</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">π/6</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.52360</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">30°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">π/4</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">0.78540</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">45°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">√3 ≈ 1.732</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">π/3</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1.04720</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">60°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-3</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">≈ -1.24905</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">-1.24905</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">≈ -71.57°</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">2</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">≈ 1.10715</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">1.10715</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">≈ 63.43°</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Radians to Degrees Conversion */}
            <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Converting Arctan Output: Radians ↔ Degrees
                </h3>
                <p>
                    Scientific calculators, Python, JavaScript, and Excel all compute arctan in <strong>radians</strong> by default. Use these two formulas to convert between angular units:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 dark:bg-[#22242A] rounded-xl border border-slate-200 dark:border-[#4D5156]">
                        <span className="text-slate-500 font-bold block mb-1">Radians → Degrees</span>
                        <p className="text-primary dark:text-sky-400 font-bold">Degrees = Radians × (180 / π)</p>
                        <span className="text-[11px] text-slate-400 mt-2 block">Example: 0.7854 × 57.2958 = 45°</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-[#22242A] rounded-xl border border-slate-200 dark:border-[#4D5156]">
                        <span className="text-slate-500 font-bold block mb-1">Degrees → Radians</span>
                        <p className="text-primary dark:text-sky-400 font-bold">Radians = Degrees × (π / 180)</p>
                        <span className="text-[11px] text-slate-400 mt-2 block">Example: 45° × 0.0174533 = 0.7854 rad</span>
                    </div>
                </div>
            </section>

            {/* atan vs atan2 */}
            <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Math.atan(x) vs. Math.atan2(y, x) in Programming
                </h3>
                <p>
                    In computer science and robotics, computing angles from coordinates using <code className="text-primary dark:text-sky-400 font-mono">Math.atan(y / x)</code> introduces <strong>quadrant ambiguity</strong> — division discards the sign information of both x and y, so it cannot distinguish between angles that are 180° apart.
                </p>
                <p>
                    The <code className="text-primary dark:text-sky-400 font-mono">Math.atan2(y, x)</code> function inspects the individual signs of y and x to return the correct angle across all four quadrants, from <code className="text-primary dark:text-sky-400 font-mono">-180°</code> to <code className="text-primary dark:text-sky-400 font-mono">+180°</code>:
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-200 dark:border-[#4D5156] text-xs sm:text-sm">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 font-bold">
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">atan(y/x)</th>
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">atan2(y, x) Result</th>
                                <th className="border border-slate-200 dark:border-[#4D5156] p-3 text-left">Quadrant</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#4D5156]">
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan(1/1) = 45°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan2(1, 1) = 45°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Quadrant I (+x, +y)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan(-1/1) = -45°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan2(-1, 1) = -45°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3">Quadrant IV (+x, -y)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan(1/-1) = -45° (WRONG)</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">atan2(1, -1) = 135°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-rose-500">Quadrant II (-x, +y)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono">atan(-1/-1) = 45° (WRONG)</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">atan2(-1, -1) = -135°</td>
                                <td className="border border-slate-200 dark:border-[#4D5156] p-3 font-bold text-rose-500">Quadrant III (-x, -y)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Real-World Applications */}
            <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Real-World Engineering, Physics & Construction Applications
                </h3>
                <ul className="list-disc list-inside space-y-2.5 pl-1">
                    <li>
                        <strong>Roof Pitch & Slope Angles:</strong> A 4/12 roof pitch has a rise of 4 inches per 12 inches of run. The angle is <code className="text-primary dark:text-sky-400 font-mono">arctan(4/12) = arctan(0.333) ≈ 18.43°</code>. Use this with our{" "}
                        <Link href="/calculators/roof" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2">Roof Shingle Calculator</Link> to estimate materials.
                    </li>
                    <li>
                        <strong>ADA Wheelchair Ramp Compliance:</strong> The Americans with Disabilities Act requires a maximum 1:12 ramp slope, equivalent to <code className="text-primary dark:text-sky-400 font-mono">arctan(1/12) ≈ 4.76°</code>. At 1:20, the angle drops to <code className="text-primary dark:text-sky-400 font-mono">≈ 2.86°</code>.
                    </li>
                    <li>
                        <strong>Electrical AC Power Factor (Phase Angle):</strong> An AC circuit's phase angle is <code className="text-primary dark:text-sky-400 font-mono">θ = arctan(X / R)</code>, where <em>X</em> is reactance and <em>R</em> is resistance. This angle directly determines the power factor <code className="text-primary dark:text-sky-400 font-mono">cos(θ)</code>.
                    </li>
                    <li>
                        <strong>Land Surveying & Grade Slopes:</strong> Elevation grade percentages convert to angles using arctan. A 6% grade means a 6-foot vertical rise per 100 horizontal feet: <code className="text-primary dark:text-sky-400 font-mono">arctan(0.06) ≈ 3.43°</code>.
                    </li>
                    <li>
                        <strong>Game Development & Camera Rotation:</strong> Game engines use <code className="text-primary dark:text-sky-400 font-mono">atan2</code> to rotate sprites and calculate aim angles by comparing the player's position to the cursor position.
                    </li>
                </ul>
                <p>
                    For a deeper dive into the arctan formula, odd/even symmetry, and the Taylor series expansion, read our full{" "}
                    <Link href="/blog/tan-inverse-formula-and-arctan-radians-degrees-guide" className="text-primary dark:text-sky-400 font-semibold underline underline-offset-2 hover:text-primary/80">
                        Tan Inverse Formula Guide
                    </Link>.
                </p>
            </section>
        </article>
    );
}