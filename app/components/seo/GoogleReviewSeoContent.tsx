import React from "react";

export default function GoogleReviewSeoContent() {
  return (
    <article className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
      <div className="border-t border-slate-200 dark:border-dark-border pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Google Review Recovery Math: The Formula to Reach 4.8+ Stars
        </h2>
        <p>
          Google Business Profile ratings rely on weighted mathematical averages. Because a single 1-star review carries significant mathematical weight, recovering an average from 4.2 back up to 4.8 or 4.9 requires a substantial volume of consecutive 5-star reviews.
        </p>
      </div>

      <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border p-6 rounded-2xl space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          The 5-Star Reviews Required Formula
        </h3>
        <p className="font-mono text-primary dark:text-sky-400 font-bold text-sm sm:text-base">
          Reviews Needed = [Current Count × (Target Rating - Current Average)] ÷ (5 - Target Rating)
        </p>
        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <p><strong>Example:</strong> A business with 30 reviews at a 4.2 rating aiming for 4.8:</p>
          <p className="font-mono text-slate-700 dark:text-slate-300">
            [30 × (4.8 - 4.2)] ÷ (5 - 4.8) = [30 × 0.6] ÷ 0.2 = 18 ÷ 0.2 = <strong>90 consecutive 5-star reviews</strong>.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Why You Cannot Reach a True 5.0 Rating After a Bad Review
        </h3>
        <p>
          In the formula above, setting the target rating to 5.0 results in division by zero (5 - 5 = 0). Mathematically, once a business receives even one review below 5 stars, the true mathematical average can never reach 5.0 again. However, because Google rounds to the nearest tenth, you only need to reach a true average of <strong>4.95 stars</strong> to display 5.0 stars publicly.
        </p>
      </div>
    </article>
  );
}
