import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-50 dark:bg-[#191a1d] min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24 transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-3xl p-8 sm:p-10 shadow-sm text-center">
        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight sm:text-4xl">404 - Page Not Found</h1>
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          The requested page could not be found. It may have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-[#4D5156] text-left">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Popular Categories</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Link href="/calculators?cat=finance" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-sky-400 transition-colors">Finance</Link>
            <Link href="/calculators?cat=construction" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-sky-400 transition-colors">Construction</Link>
            <Link href="/calculators?cat=health" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-sky-400 transition-colors">Health</Link>
            <Link href="/blog" className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-sky-400 transition-colors">Blog & Guides</Link>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-md shadow-primary/20 transition-all hover:-translate-y-[1px]"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#191a1d] px-6 py-3 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#22242A] transition-all hover:-translate-y-[1px]"
          >
            Go Back Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-slate-400 dark:text-slate-500">
          Looking for site structure? View our <a href="/sitemap.xml" className="text-primary dark:text-sky-400 underline hover:text-primary-hover">XML Sitemap</a>.
        </div>
      </div>
    </div>
  );
}
