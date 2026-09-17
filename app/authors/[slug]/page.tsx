import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { authorsData, getAllAuthors } from "../../data/authorsData";
import { blogData } from "../../data/blogData";
import { calculatorsData } from "../../data/calculatorsData";
import BlogCard from "../../components/BlogCard";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) {
    return {
      title: "Author Not Found – Infinix Calculators",
      description: "The requested author profile could not be found.",
    };
  }

  return {
    title: `${author.name} – Author Profile & Articles | Infinix Calculators`,
    description: author.bio,
    alternates: {
      canonical: `https://infinixcalculator.com/authors/${slug}`,
    },
    openGraph: {
      title: `${author.name} – Infinix Calculators`,
      description: author.bio,
      url: `https://infinixcalculator.com/authors/${slug}`,
      siteName: "Infinix Calculators",
      images: [
        {
          url: author.avatar,
          width: 600,
          height: 600,
          alt: author.name,
        },
      ],
      type: "profile",
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) {
    notFound();
  }

  // Filter posts strictly authored by this author
  const authorPosts = Object.values(blogData).filter((post) => post.authorSlug === slug);

  // Filter calculators reviewed by this author
  const reviewedCalculators = Object.values(calculatorsData).filter((calc) => {
    const cat = calc.category.toLowerCase();
    const catLabel = (calc.categoryLabel || "").toLowerCase();
    if (slug === "elena-rostova") {
      return cat.includes("construction") || catLabel.includes("materials") || catLabel.includes("landscaping") || calc.slug === "cbm" || calc.slug === "topsoil";
    }
    if (slug === "marcus-vance") {
      return cat.includes("math") || cat.includes("education") || calc.slug.includes("lsat") || calc.slug.includes("review") || calc.slug === "tan-inverse";
    }
    if (slug === "sarah-jenkins") {
      return cat.includes("health") || calc.slug.includes("productivity") || calc.slug === "santyl" || calc.slug.includes("dog") || calc.slug.includes("calorie");
    }
    return cat.includes("financial") || cat.includes("tax") || calc.slug.includes("affirm") || calc.slug.includes("square") || calc.slug.includes("gross-up");
  }).slice(0, 8);

  // Schema.org Person & ProfilePage
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.jobTitle,
      "description": author.bio,
      "image": author.avatar,
      "worksFor": {
        "@type": "Organization",
        "name": "Infinix Calculators",
        "url": "https://infinixcalculator.com",
      },
      "alumniOf": author.education.map((edu) => ({
        "@type": "EducationalOrganization",
        "name": edu,
      })),
      "knowsAbout": author.expertise,
      "url": `https://infinixcalculator.com/authors/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://infinixcalculator.com" },
      { "@type": "ListItem", position: 2, name: "Authors", item: "https://infinixcalculator.com/authors" },
      { "@type": "ListItem", position: 3, name: author.name, item: `https://infinixcalculator.com/authors/${slug}` },
    ],
  };

  const tagline = author.tagline || `${author.name} — Specialist & Author`;
  const quote = author.quote || "Innovation is the lifeblood of our narrative, propelling us forward as we embrace cutting-edge technologies and methodologies to push the boundaries of what's possible.";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      {/* Hero Banner with Dark Background */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-14 sm:py-20 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Architectural & Editorial Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-4 text-xs font-semibold text-slate-300" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-primary dark:hover:text-sky-400 transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span>/</span>
                <Link href="/authors" className="hover:text-primary dark:hover:text-sky-400 transition-colors">Authors</Link>
              </li>
              <li className="flex items-center gap-1.5 text-primary dark:text-sky-400 font-bold" aria-current="page">
                <span>/</span>
                <span>{author.name}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Blog Author Details
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Headline & Philosophy/Quote Split Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left: Bold Catchy Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15]">
              {tagline}
            </h2>
          </div>

          {/* Right: Author Quote with Vertical Accent Line */}
          <div className="lg:col-span-6">
            <div className="border-l-[3px] border-primary dark:border-l-sky-400 pl-5 sm:pl-6 py-1">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {quote}
              </p>
            </div>
          </div>
        </section>

        {/* Author Bio Card (Photo on Left, Details on Right) */}
        <section className=" p-6 sm:p-10  mb-14 transition-colors">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">

            {/* Author Portrait Image */}
            <div className="w-full sm:w-80 md:w-72 lg:w-80 aspect-square sm:aspect-[4/4.8] rounded-2xl overflow-hidden relative shadow-sm shrink-0 bg-slate-100 dark:bg-dark-bg border border-slate-200 dark:border-dark-border/60">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 360px"
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Author Details & Bio Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  {author.name}
                </h2>

                <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {author.location ? `${author.location} • ` : ""}{author.jobTitle}
                </p>

                {author.credentials && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {author.credentials}
                  </p>
                )}

                {/* Bio Narrative Paragraphs */}
                <div className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {author.fullBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>


            </div>

          </div>
        </section>

        {/* Education & Expertise Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Education & Credentials */}
          <div className=" p-6 sm:p-7 ">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-sky-400"></span>
              Education &amp; Credentials
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {author.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-primary dark:text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Expertise */}
          <div className=" p-6 sm:p-7">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-sky-400"></span>
              Areas of Expertise &amp; Research
            </h3>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Reviewed Calculators Section */}
        {reviewedCalculators.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-dark-border pb-5 mb-8">
              <div>
                <span className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest block mb-1">
                  Formula Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  Calculators &amp; Formulas Verified by {author.name}
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-dark-card px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-dark-border self-start sm:self-auto shadow-2xs">
                {reviewedCalculators.length} Tools
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {reviewedCalculators.map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-primary dark:hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-sky-400 block mb-1">
                      {calc.categoryLabel}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                      {calc.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {calc.description || calc.metaDescription}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary dark:text-sky-400 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Launch Calculator &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Author's Blog Articles Section (Using exact BlogCard design) */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-dark-border pb-5 mb-8">
            <div>
              <span className="text-xs font-bold text-primary dark:text-sky-400 uppercase tracking-widest block mb-1">
                Published Knowledge
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                Articles &amp; Guides by {author.name}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-dark-card px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-dark-border self-start sm:self-auto shadow-2xs">
              {authorPosts.length} {authorPosts.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {authorPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border p-12 text-center shadow-xs">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">No Articles Listed</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
                Check back soon for newly published calculation breakdowns and guide posts by {author.name}.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors"
              >
                Browse All Guides
              </Link>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
