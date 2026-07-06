import type { Metadata } from "next";
import Link from "next/link";
import { blogData } from "../data/blogData";
import BlogCard from "../components/BlogCard";

export const metadata: Metadata = {
  title: "Landscape & Calculation Guides Blog - Infinix Calculator",
  description: "Read detailed guides, mathematical breakdowns, material estimating instructions, and calculators instructions from our landscape and finance experts.",
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
    "productivity calculator",
    "cost calculators",
    "estimators",
    "calculation tools",
    "lsat score calculator",
    "lsat score converter",
    "therapy productivity calculator",
    "how to calculate productivity",
    "law school predictor",
    "good lsat score",
    "lsat demon scholarship estimator",
    "lsat raw score conversion",
    "lsat top score",
    "how long is lsat",
    "how many questions are on the lsat",
    "what's a good lsat score",
    "lsat average score",
    "normal lsat score",
    "fill dirt calculator",
    "how much fill dirt do i need"
  ],
};

export default function BlogPage() {
  const posts = Object.values(blogData);

  // Choose the first article as the featured post
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Featured Guides & Articles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth guides, pricing reports, and step-by-step instructions. Written by professional designers, contractors, and logicians to help you get correct estimations.
          </p>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <section className="mb-16">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-md transition-shadow duration-200">

              {/* Left Column (Image): 5 cols on desktop */}
              <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full bg-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>

              {/* Right Column (Text): 7 cols on desktop */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                    <span>{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-4 leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mt-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-semibold">By {featuredPost.author}</span>
                  <div className="flex gap-4 items-center">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover shadow-sm transition-colors"
                    >
                      Read Full Guide
                    </Link>
                    <Link
                      href="/calculators/topsoil"
                      className="text-xs font-bold text-slate-500 hover:text-primary transition-colors"
                    >
                      Open Calculator
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Remaining Posts Grid */}
        {remainingPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
              All Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}


            </div>
          </section>
        )}

        {/* Cluster Companion CTA */}
        <section className="bg-primary/5 rounded-2xl border border-primary/10 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Calculator Companion
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            Estimate Volumes & Costs in Seconds
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-4 leading-relaxed">
            Ready to apply these formulas to your own project? Open our flagship Topsoil Calculator to get instant cubic yards, tons, and bag counts.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/calculators/topsoil"
              className="rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-primary-hover shadow-md transition-all"
            >
              Open Topsoil Calculator
            </Link>
            <Link
              href="/calculators"
              className="rounded-lg bg-white border border-slate-200 px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              View All Calculators
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
