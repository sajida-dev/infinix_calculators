import React from "react";

interface DisclaimerBoxProps {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function DisclaimerBox({
  title = "Disclaimer",
  text,
  children,
  className = "",
}: DisclaimerBoxProps) {
  return (
    <div
      className={`rounded-xl bg-[#fef8e7] dark:bg-[#25221b] border border-[#fae8b6] dark:border-[#423924] p-5 sm:p-6 text-slate-900 dark:text-amber-100 shadow-2xs transition-colors ${className}`}
    >
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-amber-50 tracking-tight mb-2">
        {title}
      </h3>
      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-2 [&_a]:text-primary dark:[&_a]:text-sky-400 [&_a]:underline [&_a]:font-semibold">
        {text ? <p>{text}</p> : children}
      </div>
    </div>
  );
}
