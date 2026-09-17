import React from "react";

export default function VectorProductSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          3D Vector Algebra: Dot Product, Cross Product &amp; Orthogonality
        </h2>
        <p>
          In physics, linear algebra, and 3D computer graphics, vector multiplication is defined under two distinct operations: the <strong>Dot Product (Scalar Product)</strong> and the <strong>Cross Product (Vector Product)</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Dot Product (Scalar Output)</h3>
          <p className="font-mono text-primary dark:text-sky-400 text-xs sm:text-sm mb-2">
            A · B = AxBx + AyBy + AzBz = |A||B| cos(θ)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Produces a single scalar real number. If A · B = 0, the two vectors are perpendicular (orthogonal at 90°).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">Cross Product (3D Vector Output)</h3>
          <p className="font-mono text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-2">
            A × B = [AyBz - AzBy, AzBx - AxBz, AxBy - AyBx]
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Produces a brand-new 3D vector perpendicular (normal) to both input vectors with magnitude equal to |A||B| sin(θ).
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Angle Between Two 3D Vectors Formula
        </h3>
        <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-5 rounded-xl space-y-2">
          <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
            θ = arccos[ (A · B) ÷ (|A| × |B|) ]
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Where |A| = √(Ax² + Ay² + Az²) and |B| = √(Bx² + By² + Bz²).
          </p>
        </div>
      </div>
    </article>
  );
}
