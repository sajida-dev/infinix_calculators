import Link from "next/link";
import { CalculatorInfo } from "../data/calculatorsData";

interface CalculatorCardProps {
  calculator: CalculatorInfo;
  variant?: "default" | "flat";
}

export default function CalculatorCard({ calculator, variant = "default" }: CalculatorCardProps) {
  const isFlat = variant === "flat";

  return (
    <div
      className={`rounded-xl border flex flex-col justify-between transition-all duration-200 ${
        isFlat
          ? "bg-slate-50 dark:bg-dark-bg border-slate-200/60 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-sm"
          : "bg-white dark:bg-dark-card border-slate-200/80 dark:border-dark-border shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500"
      } p-5 sm:p-6`}
    >
      <div>
        <span
          className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
            isFlat ? "bg-slate-200/60 dark:bg-dark-card text-slate-500 dark:text-slate-400" : "bg-primary/5 dark:bg-primary/20 text-primary dark:text-sky-400"
          }`}
        >
          {calculator.categoryLabel}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-3 leading-snug">
          {calculator.name}
        </h3>
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-400 mt-1">
          Calculation: {calculator.calcTime}
        </p>
        <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold mt-3 italic leading-snug">
          "{calculator.hook}"
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 line-clamp-3">
          {calculator.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border">
        <Link
          href={`/calculators/${calculator.slug}`}
          aria-label={`Calculate with ${calculator.name}`}
          className={`w-full min-h-[42px] inline-flex items-center justify-center rounded-lg py-2.5 text-xs font-bold transition-colors ${
            isFlat
              ? "bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-bg"
              : "bg-primary text-white hover:bg-primary-hover shadow-xs"
          }`}
        >
          Calculate Now
        </Link>
      </div>
    </div>
  );
}
