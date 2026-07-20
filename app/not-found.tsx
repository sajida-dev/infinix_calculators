import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm text-center">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">404 - Page Not Found</h1>
        <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
          The requested page could not be found. It may have been moved, deleted, or the URL might be incorrect.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-md shadow-primary/20 transition-all hover:-translate-y-[1px]"
          >
            Browse Calculators
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all hover:-translate-y-[1px]"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
