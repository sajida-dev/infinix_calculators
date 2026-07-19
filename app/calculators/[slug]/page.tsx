import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { calculatorsData } from "../../../app/data/calculatorsData";
import { blogData } from "../../../app/data/blogData";
import DynamicCalculator from "../../../app/components/DynamicCalculator";
import CalculatorFaqs from "../../../app/components/CalculatorFaqs";

interface CalculatorPageProps {
  params: Promise<{ slug: string }>;
}

// Next.js 16 dynamic API compliance: generateMetadata receives params as a Promise and must await it
export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = calculatorsData[slug];

  if (!calc) {
    return {
      title: "Calculator Not Found - Infinix Tools",
      description: "The requested calculator utility could not be found.",
    };
  }

  return {
    title: calc.seoTitle,
    description: calc.metaDescription,
    keywords: calc.keywords,
    alternates: {
      canonical: `https://infinixcalculator.com/calculators/${slug}`,
    },
  };
}

// Generate static params for all slugs EXCEPT topsoil (to prevent overlapping routes warnings)
export async function generateStaticParams() {
  return Object.keys(calculatorsData)
    .filter((slug) => slug !== "topsoil")
    .map((slug) => ({
      slug,
    }));
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params;
  const calc = calculatorsData[slug];

  // If topsoil is requested through the catch-all, we route them to the dedicated static folder
  if (!calc || slug === "topsoil") {
    notFound();
  }

  // Find supporting articles
  const supportingBlogs = Object.values(blogData).slice(0, 4);

  // Filter other calculators for sidebar
  const otherCalculators = Object.values(calculatorsData)
    .filter((c) => c.slug !== slug && c.slug !== "topsoil")
    .slice(0, 4);

  // Schema Injection
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calc.name,
    "description": calc.metaDescription,
    "applicationCategory": calc.category === "financial" ? "FinanceApplication" : "BusinessApplication",
    "operatingSystem": "All",
    "url": `https://infinixcalculator.com/calculators/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://infinixcalculator.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://infinixcalculator.com/calculators",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": calc.name,
        "item": `https://infinixcalculator.com/calculators/${slug}`,
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>/</span>
              <Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link>
            </li>
            <li className="flex items-center gap-1.5 text-slate-600 font-bold" aria-current="page">
              <span>/</span>
              <span>{calc.name}</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
            {calc.categoryLabel}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            {calc.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {calc.metaDescription}
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Main Content (3/4 Width) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Hydrate dynamic calculation forms */}
            <div>
              <DynamicCalculator slug={slug} />
            </div>

            {/* In-depth content block (Server Rendered) */}
            <section className="p-6 sm:p-10 space-y-8  text-slate-600 leading-relaxed text-sm sm:text-base">

              {/* Formula & Explanation */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  How to Calculate: Formula & Steps
                </h2>
                <p>{calc.formulaDescription}</p>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
                  <span className="block font-bold text-slate-800 text-xs uppercase tracking-wider">Formula Used:</span>
                  <code className="block text-primary font-mono text-xs sm:text-sm">
                    {calc.formula}
                  </code>
                </div>
              </div>

              {/* Step-by-Step Example */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Step-by-Step Calculation Example
                </h3>
                <p>{calc.example}</p>
              </div>

              <hr className="border-slate-100" />

              {/* Common Mistakes */}
              {calc.commonMistakes.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Common Mistakes to Avoid
                  </h2>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {calc.commonMistakes.map((mistake, idx) => (
                      <li key={idx}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="border-slate-100" />

              {/* Use Cases */}
              {calc.useCases.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Practical Use Cases
                  </h2>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {calc.useCases.map((useCase, idx) => (
                      <li key={idx}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Tips */}
              {calc.tips.length > 0 && (
                <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6 space-y-3">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                    Expert Tips
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-700">
                    {calc.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

            </section>

            {/* Reusable FAQs Section */}
            <CalculatorFaqs slug={slug} />
          </div>



          {/* Sidebar Area (1/4 width) */}
          <div className="space-y-6">


            {/* You May Like - Flat list of related articles (No outer card wrapper) */}
            {supportingBlogs.length > 0 && (
              <div className="pb-6 border-b border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">You May Like</h3>
                <div className="space-y-5">
                  {supportingBlogs.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 hover:text-primary transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200/50">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="64px"
                          className="object-cover"
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



            {/* Popular Topics / Calculators (No card bg/border) */}
            {/* <div className="pb-6 border-b border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Popular Tools</h3>
              <ul className="space-y-3.5">
                {otherCalculators.map((calc) => (
                  <li key={calc.name}>
                    <Link
                      href={calc.href}
                      className="group ml-5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-0.5"
                    >
                      <span>{calc.name}</span>
                      <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Internal Categories Directory Links */}
            <div className="pb-6 border-b border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Categories
              </h3>
              <ul className="ml-5 space-y-2">
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Financial Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Tax & Payroll Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Construction & Materials
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-xs font-semibold text-slate-600 hover:text-primary transition-colors block py-1">
                    Health & Fitness Tools
                  </Link>
                </li>
              </ul>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
}
