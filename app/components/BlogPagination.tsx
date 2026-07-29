import Link from "next/link";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParamsObj: Record<string, string>;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  baseUrl,
  searchParamsObj,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParamsObj);
    if (pageNumber <= 1) {
      params.delete("page");
    } else {
      params.set("page", pageNumber.toString());
    }
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  // Build page number array
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-12 pt-6 border-t border-slate-200 dark:border-[#4D5156] flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
        Showing Page <span className="text-slate-900 dark:text-slate-100 font-bold">{currentPage}</span> of{" "}
        <span className="text-slate-900 dark:text-slate-100 font-bold">{totalPages}</span>
      </span>

      <nav className="inline-flex items-center gap-1.5" aria-label="Pagination Navigation">
        {/* Previous Button (Crawling anchor link with rel="prev") */}
        {currentPage > 1 ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            rel="prev"
            aria-label="Go to previous page"
            className="px-3.5 py-2 rounded-xl border border-slate-200/90 dark:border-[#4D5156] text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#191a1d] hover:text-primary dark:hover:text-sky-400 transition-colors flex items-center gap-1 shadow-xs"
          >
            ← Prev
          </Link>
        ) : (
          <span className="px-3.5 py-2 rounded-xl border border-slate-100 dark:border-[#4D5156]/50 text-xs font-bold text-slate-300 dark:text-slate-600 cursor-not-allowed">
            ← Prev
          </span>
        )}

        {/* Numeric Page Buttons (Crawling anchor links) */}
        {pages.map((p) => {
          const isActive = p === currentPage;
          return (
            <Link
              key={p}
              href={createPageUrl(p)}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to page ${p}`}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isActive
                  ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                  : "border border-slate-200/90 dark:border-[#4D5156] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#191a1d] hover:text-primary dark:hover:text-sky-400"
              }`}
            >
              {p}
            </Link>
          );
        })}

        {/* Next Button (Crawling anchor link with rel="next") */}
        {currentPage < totalPages ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            rel="next"
            aria-label="Go to next page"
            className="px-3.5 py-2 rounded-xl border border-slate-200/90 dark:border-[#4D5156] text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#191a1d] hover:text-primary dark:hover:text-sky-400 transition-colors flex items-center gap-1 shadow-xs"
          >
            Next →
          </Link>
        ) : (
          <span className="px-3.5 py-2 rounded-xl border border-slate-100 dark:border-[#4D5156]/50 text-xs font-bold text-slate-300 dark:text-slate-600 cursor-not-allowed">
            Next →
          </span>
        )}
      </nav>
    </div>
  );
}
