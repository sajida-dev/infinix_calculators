import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import BlogFilterBar from "../components/BlogFilterBar";
import BlogPagination from "../components/BlogPagination";

export const metadata: Metadata = {
  title: "Landscape & Calculation Guides Blog - Infinix Calculator",
  description: "Read detailed guides, mathematical breakdowns, material estimating instructions, and calculators instructions from our landscape and finance experts.",
  alternates: {
    canonical: "https://infinixcalculator.com/blog",
  },
  keywords: [
    "infinix calculator",
    "infinix calculators",
    "calculators",
    "topsoil calculator",
    "finance calculator",
    "construction calculator",
    "health calculator",
    "unit converter",
    "online estimator",
    "online calculators",
    "free calculators",
    "calculator directory",
    "business calculators",
    "finance calculators",
    "construction calculators",
    "health calculators",
    "math calculators",
    "unit converters",
    "percentage calculator",
    "loan calculator",
    "mortgage calculator",
    "topsoil calculator",
    "top soil calculator",
    "concrete calculator",
    "cbm calculator",
    "affirm calculator",
    "square fee calculator",
    "square processing fee calculator",
    "productivity calculator",
    "cost calculators",
    "estimators",
    "calculation tools",
    "lsat score calculator"
  ],
};

interface BlogPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    author?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const q = (params.q || "").trim();
  const selectedCategory = params.category || "All";
  const selectedAuthor = params.author || "All";
  const selectedSort = params.sort || "newest";
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  const allPosts = Object.values(blogData);

  // Derive unique categories and authors dynamically
  const categories = ["All", ...Array.from(new Set(allPosts.map((p) => p.category).filter(Boolean)))];
  const authors = ["All", ...Array.from(new Set(allPosts.map((p) => p.author).filter(Boolean)))];

  // Compute category counts
  const categoryCounts: Record<string, number> = {
    All: allPosts.length,
  };
  allPosts.forEach((post) => {
    if (post.category) {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    }
  });

  // Apply filtering
  let filtered = allPosts.filter((post) => {
    if (selectedCategory !== "All" && post.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (selectedAuthor !== "All" && post.author.toLowerCase() !== selectedAuthor.toLowerCase()) {
      return false;
    }
    if (q) {
      const query = q.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(query);
      const matchExcerpt = post.excerpt.toLowerCase().includes(query);
      const matchCategory = post.category.toLowerCase().includes(query);
      const matchAuthor = post.author.toLowerCase().includes(query);
      const matchContent = post.content.toLowerCase().includes(query);
      if (!matchTitle && !matchExcerpt && !matchCategory && !matchAuthor && !matchContent) {
        return false;
      }
    }
    return true;
  });

  // Apply sorting
  filtered.sort((a, b) => {
    if (selectedSort === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (selectedSort === "title") {
      return a.title.localeCompare(b.title);
    }
    // newest (default)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Featured Post logic (only shown on Page 1 with no active filters/search)
  const isDefaultView = selectedCategory === "All" && selectedAuthor === "All" && selectedSort === "newest" && !q && currentPage === 1;
  const featuredPost = isDefaultView ? filtered[0] : null;
  const gridPosts = isDefaultView ? filtered.slice(1) : filtered;

  // Pagination Math
  const POSTS_PER_PAGE = 9;
  const totalPosts = gridPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE) || 1;
  const validPage = Math.min(currentPage, totalPages);

  const startIndex = (validPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = gridPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const searchParamsObj: Record<string, string> = {};
  if (params.q) searchParamsObj.q = params.q;
  if (params.category) searchParamsObj.category = params.category;
  if (params.author) searchParamsObj.author = params.author;
  if (params.sort) searchParamsObj.sort = params.sort;

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Featured Guides & Articles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth guides, calculation breakdowns, and expert estimating advice across finance, construction, landscaping, and business tools.
          </p>
        </div>

        {/* Filter & Search Bar Component */}
        <BlogFilterBar
          categories={categories}
          categoryCounts={categoryCounts}
          authors={authors}
          selectedCategory={selectedCategory}
          selectedAuthor={selectedAuthor}
          selectedSort={selectedSort}
          searchQuery={q}
        />

        {/* Featured Post Card (Default Page 1 view) */}
        {featuredPost && (
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-md transition-shadow duration-200">

              {/* Left Column (Image): 5 cols on desktop */}
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full bg-slate-100">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Right Column (Text): 7 cols on desktop */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                    <span className="text-primary font-bold uppercase tracking-wider">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-4 leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mt-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-semibold">By {featuredPost.author}</span>
                  <div className="flex gap-4 items-center">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover shadow-xs transition-colors"
                    >
                      Read Full Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Paginated Articles Grid Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              {q || selectedCategory !== "All" || selectedAuthor !== "All"
                ? `Filtered Articles (${totalPosts})`
                : "All Guides"}
            </h2>
            <span className="text-xs font-semibold text-slate-400">
              Showing {paginatedPosts.length} of {totalPosts} {totalPosts === 1 ? "article" : "articles"}
            </span>
          </div>

          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Pagination Component */}
              <BlogPagination
                currentPage={validPage}
                totalPages={totalPages}
                baseUrl="/blog"
                searchParamsObj={searchParamsObj}
              />
            </>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8 shadow-xs">
              <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-slate-800 mb-2">No Matching Articles Found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
                We couldn't find any articles matching your search query or active category filters. Try adjusting your search term or clearing active filters.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-xs transition-colors"
              >
                Reset All Search Filters
              </Link>
            </div>
          )}
        </section>

        {/* Bottom CTA Card */}
        <section className="bg-primary/5 rounded-2xl border border-primary/10 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xs">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Free Interactive Estimators
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            Estimate Volumes, Taxes & Costs Instantly
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-4 leading-relaxed">
            Apply these guide formulas directly to your project. Explore our full library of financial, construction, tax, and business calculation tools.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/calculators/square-fee"
              className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-xs transition-all"
            >
              Square Fee Calculator
            </Link>
            <Link
              href="/calculators"
              className="rounded-xl bg-white border border-slate-200 px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
            >
              View All 100+ Calculators
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
