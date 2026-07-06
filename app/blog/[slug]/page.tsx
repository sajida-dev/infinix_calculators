import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "../../data/blogData";
import { calculatorsData } from "../../data/calculatorsData";
import CalculatorFaqs from "../../components/CalculatorFaqs";
import SearchInput from "../../components/SearchInput";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return {
      title: "Article Not Found - Infinix Tools",
      description: "The requested landscaping or math guide could not be found.",
    };
  }

  return {
    title: `${post.title} - Calculator Guide`,
    description: post.excerpt,
    alternates: {
      canonical: `https://infinixcalculators.com/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  // Find companion calculator
  const calculator = post.calculatorSlug ? calculatorsData[post.calculatorSlug] : null;

  // Find related posts
  const relatedPosts = post.relatedSlugs
    .map((s) => blogData[s])
    .filter(Boolean);

  // Popular calculators list for sidebar
  const popularCalculators = [
    { name: "Topsoil Calculator", href: "/calculators/topsoil", category: "Construction" },
    { name: "Concrete Calculator", href: "/calculators/concrete", category: "Construction" },
    { name: "CBM Calculator", href: "/calculators/cbm", category: "Logistics" },
    { name: "Affirm Calculator", href: "/calculators/affirm", category: "Finance" },
  ];

  // Schema Injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Infinix Calculators",
      "logo": {
        "@type": "ImageObject",
        "url": "https://infinixcalculators.com/infinix-calculator-brand-logo.png",
      },
    },
    "image": `https://infinixcalculators.com${post.image}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://infinixcalculators.com/blog/${slug}`,
    },
  };

  // Determine if this post is about topsoil or soil to render companion FAQs
  const isSoilPost = slug.includes("topsoil") || slug.includes("soil") || slug.includes("dirt");

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Global Breadcrumbs */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </li>
            <li className="flex items-center gap-1.5 text-slate-600 truncate max-w-[200px] sm:max-w-none" aria-current="page">
              <span>/</span>
              <span>{post.title}</span>
            </li>
          </ol>
        </nav>

        {/* Clean 2-Column Layout (Main Content 8/12 width, Sidebar 4/12 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Column (8 cols on desktop, no borders or shadows) */}
          <div className="lg:col-span-8">
            <article>
              <header className="pb-5 border-b border-slate-200 mb-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                  {post.title}
                </h1>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  <span>By {post.author}</span>
                  <span>|</span>
                  <span>{post.date}</span>
                </div>
              </header>

              {/* Large Responsive Article Image */}
              <div className="relative w-full rounded-xl overflow-hidden mb-8 shadow-xs border border-slate-200/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              {/* Content Body with customized typographic separations */}
              <div 
                className="blog-content mt-8 text-slate-700 leading-relaxed text-sm sm:text-base space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Embedded Reusable FAQ Component */}
              {isSoilPost && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <CalculatorFaqs slug="topsoil" title="Frequently Asked Questions About Topsoil Volume" />
                </div>
              )}

              {/* Direct Tool Redirect Box (Clean light blue callout) */}
              {calculator && (
                <div className="mt-12 bg-primary/5 rounded-xl border border-primary/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Run Your Own Calculations</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Apply these metrics directly to your yard layout using our {calculator.name}.
                    </p>
                  </div>
                  <Link
                    href={`/calculators/${calculator.slug}`}
                    className="shrink-0 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover shadow-sm transition-colors"
                  >
                    Open {calculator.name}
                  </Link>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar Column (4 cols on desktop, flat transparent DC Rainmaker styles) */}
          <div className="lg:col-span-4 space-y-10 pl-0 lg:pl-6">
            
            {/* Search Input Widget (Transparent, bottom line search input) */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Search Calculators</h3>
              <SearchInput variant="minimal" placeholder="Search tools..." />
            </div>

            {/* Popular Topics / Calculators (No card bg/border) */}
            <div className="pb-6 border-b border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Popular Calculators</h3>
              <ul className="space-y-3.5">
                {popularCalculators.map((calc) => (
                  <li key={calc.name}>
                    <Link
                      href={calc.href}
                      className="group flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-0.5"
                    >
                      <span>{calc.name}</span>
                      <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* You May Like - Flat list of related articles (No outer card wrapper) */}
            {relatedPosts.length > 0 && (
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">You May Like</h3>
                <div className="space-y-5">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 hover:text-primary transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200/50">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[9px] font-bold text-primary uppercase tracking-wider">{rel.category}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors mt-1 line-clamp-2">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Sidebar Ad Slot (Flat unbordered placement) */}
            {/* <div className="py-4 text-center">
              <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded bg-slate-150">
                Advertisement
              </span>
              <div className="mt-4 py-12 text-xs font-semibold text-slate-400 border border-dashed border-slate-300 rounded-xl bg-slate-100/50">
                Sidebar Ad Slot
              </div>
            </div>
            */}

          </div>
        </div>
      </div>
    </div>
  );
}
