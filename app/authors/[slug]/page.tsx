import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { authorsData, getAllAuthors } from "../../data/authorsData";
import { blogData } from "../../data/blogData";

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
          width: 400,
          height: 400,
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

  // Filter posts authored by this author
  const authorPosts = Object.values(blogData).filter((post) => {
    if (post.authorSlug === slug) return true;
    const cat = post.category.toLowerCase();
    if (slug === "david-miller" && (cat.includes("financial") || cat.includes("tax") || cat.includes("business"))) return true;
    if (slug === "elena-rostova" && (cat.includes("construction") || cat.includes("material") || cat.includes("logistics"))) return true;
    if (slug === "marcus-vance" && (cat.includes("math") || cat.includes("education") || cat.includes("review"))) return true;
    if (slug === "sarah-jenkins" && (cat.includes("health") || cat.includes("productivity") || cat.includes("fitness"))) return true;
    return false;
  });

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
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>/</span>
              <Link href="/authors" className="hover:text-primary transition-colors">Authors</Link>
            </li>
            <li className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold" aria-current="page">
              <span>/</span>
              <span>{author.name}</span>
            </li>
          </ol>
        </nav>

        {/* Clean, Authentic Profile Header */}
        <section className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-slate-200 dark:border-[#4D5156] shrink-0">
              <Image
                src={author.avatar}
                alt={author.name}
                width={120}
                height={120}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>

            <div className="flex-1 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {author.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                {author.jobTitle}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {author.credentials}
              </p>
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                <a
                  href={`mailto:${author.email}`}
                  className="hover:underline text-primary dark:text-sky-400 font-medium"
                >
                  {author.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Content: Bio & Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Bio Column */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-[#4D5156]">
                About {author.name}
              </h2>
              <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {author.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Articles by Author */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Articles by {author.name} ({authorPosts.length})
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {authorPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-xl p-4.5 hover:border-primary transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-sky-400">
                        {post.category}
                      </span>
                      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-xs text-primary dark:text-sky-400 font-semibold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read article &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column: Education & Expertise */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Education &amp; Credentials
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

            <div className="bg-white dark:bg-[#22242A] border border-slate-200 dark:border-[#4D5156] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {author.expertise.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-slate-100 dark:bg-[#191a1d] text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-[#4D5156]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
