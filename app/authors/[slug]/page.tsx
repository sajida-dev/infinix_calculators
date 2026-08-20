import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { authorsData, getAllAuthors, getAuthorBySlug } from "../../data/authorsData";
import { blogData } from "../../data/blogData";
import { calculatorsData } from "../../data/calculatorsData";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) {
    return {
      title: "Author Profile Not Found – Infinix Calculators",
      description: "The requested contributor profile could not be found.",
    };
  }

  return {
    title: `${author.name} – Editorial Contributor & Reviewer | Infinix Calculators`,
    description: `${author.bio} Explore calculators, guides, and formula research authored and verified by ${author.name}.`,
    keywords: [
      author.name.toLowerCase(),
      author.jobTitle.toLowerCase(),
      "infinix calculators editorial team",
      ...author.expertise.map(e => e.toLowerCase()),
    ],
    alternates: {
      canonical: `https://infinixcalculator.com/authors/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllAuthors().map((a) => ({
    slug: a.slug,
  }));
}

export default async function AuthorProfilePage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) {
    notFound();
  }

  // Filter posts related to this author's expertise
  const authorPosts = Object.values(blogData).filter((post) => {
    if (post.authorSlug === slug) return true;
    const cat = post.category.toLowerCase();
    if (slug === "david-miller" && (cat.includes("financial") || cat.includes("tax") || cat.includes("business"))) return true;
    if (slug === "elena-rostova" && (cat.includes("construction") || cat.includes("material") || cat.includes("logistics"))) return true;
    if (slug === "marcus-vance" && (cat.includes("math") || cat.includes("education") || cat.includes("review"))) return true;
    if (slug === "sarah-jenkins" && (cat.includes("health") || cat.includes("productivity") || cat.includes("fitness"))) return true;
    return false;
  });

  // Filter calculators related to this author
  const authorCalculators = Object.values(calculatorsData).filter((calc) => {
    const cat = calc.category.toLowerCase();
    if (slug === "david-miller" && (cat.includes("financial") || cat.includes("tax"))) return true;
    if (slug === "elena-rostova" && (cat.includes("construction") || cat.includes("unit-converter"))) return true;
    if (slug === "marcus-vance" && (cat.includes("math") || cat.includes("education"))) return true;
    if (slug === "sarah-jenkins" && (cat.includes("health") || cat.includes("productivity"))) return true;
    return false;
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
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://infinixcalculator.com" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://infinixcalculator.com/about" },
      { "@type": "ListItem", position: 3, name: author.name, item: `https://infinixcalculator.com/authors/${slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 py-10 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400 dark:text-slate-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold" aria-current="page"><span>/</span><span>{author.name}</span></li>
          </ol>
        </nav>

        {/* Profile Header Card */}
        <section className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-3xl p-6 sm:p-10 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/40 shadow-md">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-emerald-600 text-white text-xs p-1.5 rounded-full border-2 border-white dark:border-[#22242A]" title="Verified Specialist">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400">
                  Editorial Board
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Formula Peer-Review Lead
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {author.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300">
                {author.jobTitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  {author.credentials}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${author.email}`} className="hover:underline text-primary dark:text-sky-400 font-semibold">
                    {author.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Details: Full Bio & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Main Bio Content */}
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-[#4D5156]">
                Professional Biography &amp; Standards
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {author.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Articles & Guides Authored */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Editorial Guides &amp; Research Authored ({authorPosts.length})
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {authorPosts.slice(0, 6).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl p-4 hover:border-primary transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-primary dark:text-sky-400">{post.category}</span>
                      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1.5">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-xs text-primary font-bold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Guide &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Credentials & Math Review Scope */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Academic &amp; Professional Background
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {author.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Areas of Computational Expertise
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {author.expertise.map((item, idx) => (
                  <span key={idx} className="text-[11px] font-medium bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-[#4D5156]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Tools Verified */}
            {authorCalculators.length > 0 && (
              <div className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Calculators Verified by {author.name.split(" ")[0]}
                </h3>
                <ul className="space-y-2">
                  {authorCalculators.map((calc) => (
                    <li key={calc.slug}>
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        <span>{calc.name}</span>
                        <span className="text-[10px] text-emerald-600 font-bold">Verified &check;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}
