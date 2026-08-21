import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { calculatorsData } from "../../../app/data/calculatorsData";
import { blogData } from "../../../app/data/blogData";
import DynamicCalculator from "../../../app/components/DynamicCalculator";
import CalculatorFaqs from "../../../app/components/CalculatorFaqs";
import CategoryClusterNav from "../../../app/components/CategoryClusterNav";
import CalculatorReviewBadge from "../../../app/components/CalculatorReviewBadge";
import DisclaimerBox from "../../../app/components/DisclaimerBox";
import AvalaraSeoContent from "../../../app/components/seo/AvalaraSeoContent";
import ConcreteSeoContent from "../../../app/components/seo/ConcreteSeoContent";
import RoofSeoContent from "../../../app/components/seo/RoofSeoContent";
import AffirmSeoContent from "../../../app/components/seo/AffirmSeoContent";
import MortgageGameSeoContent from "../../../app/components/seo/MortgageGameSeoContent";
import CbmSeoContent from "../../../app/components/seo/CbmSeoContent";
import SquareFeeSeoContent from "../../../app/components/seo/SquareFeeSeoContent";
import TherapyProductivitySeoContent from "../../../app/components/seo/TherapyProductivitySeoContent";
import GoogleReviewSeoContent from "../../../app/components/seo/GoogleReviewSeoContent";
import GrossUpSeoContent from "../../../app/components/seo/GrossUpSeoContent";
import ProRataSeoContent from "../../../app/components/seo/ProRataSeoContent";
import BalanceTransferSeoContent from "../../../app/components/seo/BalanceTransferSeoContent";
import DrywallSeoContent from "../../../app/components/seo/DrywallSeoContent";
import FenceCostSeoContent from "../../../app/components/seo/FenceCostSeoContent";
import MulchSeoContent from "../../../app/components/seo/MulchSeoContent";
import HecmSeoContent from "../../../app/components/seo/HecmSeoContent";
import HelocPayoffSeoContent from "../../../app/components/seo/HelocPayoffSeoContent";
import BmiSeoContent from "../../../app/components/seo/BmiSeoContent";
import LsatSeoContent from "../../../app/components/seo/LsatSeoContent";
import GeorgiaPayrollSeoContent from "../../../app/components/seo/GeorgiaPayrollSeoContent";
import ReverseTaxSeoContent from "../../../app/components/seo/ReverseTaxSeoContent";
import LosertownCalorieSeoContent from "../../../app/components/seo/LosertownCalorieSeoContent";
import RothVsTraditionalIraSeoContent from "../../../app/components/seo/RothVsTraditionalIraSeoContent";
import SellerFinancingSeoContent from "../../../app/components/seo/SellerFinancingSeoContent";
import CreditCardPayoffSeoContent from "../../../app/components/seo/CreditCardPayoffSeoContent";
import ProductivitySeoContent from "../../../app/components/seo/ProductivitySeoContent";
import GrassSeedSeoContent from "../../../app/components/seo/GrassSeedSeoContent";
import RentVsSellSeoContent from "../../../app/components/seo/RentVsSellSeoContent";
import WeddingAlcoholSeoContent from "../../../app/components/seo/WeddingAlcoholSeoContent";
import BridgeLoanSeoContent from "../../../app/components/seo/BridgeLoanSeoContent";
import TvMountingHeightSeoContent from "../../../app/components/seo/TvMountingHeightSeoContent";
import PondLinerSeoContent from "../../../app/components/seo/PondLinerSeoContent";
import VectorProductSeoContent from "../../../app/components/seo/VectorProductSeoContent";
import MortgageIdahoSeoContent from "../../../app/components/seo/MortgageIdahoSeoContent";
import MortgageKansasSeoContent from "../../../app/components/seo/MortgageKansasSeoContent";
import WeddingDrinkSeoContent from "../../../app/components/seo/WeddingDrinkSeoContent";
import PuppyWeightSeoContent from "../../../app/components/seo/PuppyWeightSeoContent";
import PuppyGrowthSeoContent from "../../../app/components/seo/PuppyGrowthSeoContent";
import DogSizeSeoContent from "../../../app/components/seo/DogSizeSeoContent";
import DogPregnancySeoContent from "../../../app/components/seo/DogPregnancySeoContent";
import MortgageMaineSeoContent from "../../../app/components/seo/MortgageMaineSeoContent";
import BrickSeoContent from "../../../app/components/seo/BrickSeoContent";
import IftaSeoContent from "../../../app/components/seo/IftaSeoContent";
import Retirement457SeoContent from "../../../app/components/seo/Retirement457SeoContent";
import SidingSeoContent from "../../../app/components/seo/SidingSeoContent";
import DinkytownSeoContent from "../../../app/components/seo/DinkytownSeoContent";
import MetalRoofSeoContent from "../../../app/components/seo/MetalRoofSeoContent";
import PawnSeoContent from "../../../app/components/seo/PawnSeoContent";
import HardMoneySeoContent from "../../../app/components/seo/HardMoneySeoContent";
import LeaseVsBuyCarSeoContent from "../../../app/components/seo/LeaseVsBuyCarSeoContent";
import PointsVsCashSeoContent from "../../../app/components/seo/PointsVsCashSeoContent";
import OklahomaTaxSeoContent from "../../../app/components/seo/OklahomaTaxSeoContent";
import NovigSeoContent from "../../../app/components/seo/NovigSeoContent";
import CalstrsSeoContent from "../../../app/components/seo/CalstrsSeoContent";
import GlobalSurgerySeoContent from "../../../app/components/seo/GlobalSurgerySeoContent";
import MortgageKentuckySeoContent from "../../../app/components/seo/MortgageKentuckySeoContent";
import ReverseSalesTaxSeoContent from "../../../app/components/seo/ReverseSalesTaxSeoContent";
import LaticreteGroutSeoContent from "../../../app/components/seo/LaticreteGroutSeoContent";
import MortgageArkansasSeoContent from "../../../app/components/seo/MortgageArkansasSeoContent";
import VirginiaSalarySeoContent from "../../../app/components/seo/VirginiaSalarySeoContent";
import MichiganTaxSeoContent from "../../../app/components/seo/MichiganTaxSeoContent";
import MortgageScSeoContent from "../../../app/components/seo/MortgageScSeoContent";
import ArkansasSalesTaxSeoContent from "../../../app/components/seo/ArkansasSalesTaxSeoContent";
import ArmMortgageSeoContent from "../../../app/components/seo/ArmMortgageSeoContent";
import ElectricSeoContent from "../../../app/components/seo/ElectricSeoContent";
import TileSqftSeoContent from "../../../app/components/seo/TileSqftSeoContent";
import DynastyDaddySeoContent from "../../../app/components/seo/DynastyDaddySeoContent";
import MapeiGroutSeoContent from "../../../app/components/seo/MapeiGroutSeoContent";
import MarylandTaxSeoContent from "../../../app/components/seo/MarylandTaxSeoContent";

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

  // Find supporting articles (min 6 items for sidebar)
  const supportingBlogs = Object.values(blogData)
    .filter((b) => b.calculatorSlug === slug)
    .concat(Object.values(blogData))
    .filter((b, idx, self) => self.findIndex((t) => t.slug === b.slug) === idx)
    .slice(0, 6);

  // Filter other calculators for sidebar (min 6 items)
  const otherCalculators = Object.values(calculatorsData)
    .filter((c) => c.slug !== slug && c.slug !== "topsoil")
    .slice(0, 6);

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

  const faqSchema = calc.faqs && calc.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": calc.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-slate-50 dark:bg-[#191a1d] text-slate-900 dark:text-slate-100 min-h-screen py-8 sm:py-12 transition-colors">
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <nav className="flex mb-8 text-xs font-semibold text-slate-400 dark:text-slate-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1.5 md:space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>/</span>
              <Link href="/calculators" className="hover:text-primary transition-colors">Calculators</Link>
            </li>
            <li className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-bold" aria-current="page">
              <span>/</span>
              <span>{calc.name}</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-bold text-primary dark:text-sky-400 mb-3">
            {calc.categoryLabel}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl tracking-tight">
            {calc.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {calc.metaDescription}
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Main Content (3/4 Width) */}
          <div className="lg:col-span-3 space-y-10">
            {/* E-E-A-T Reviewer Badge */}
            <CalculatorReviewBadge category={calc.category} />

            {/* Brand Independence Notice */}
            {calc.brandDisclaimer && (
              <DisclaimerBox
                title="Disclaimer"
                text={calc.brandDisclaimer}
                className="mb-6"
              />
            )}
            {/* Hydrate dynamic calculation forms */}
            <div>
              <DynamicCalculator slug={slug} />
            </div>

            {/* In-depth content block (Server Rendered) */}
            <section className="p-6 sm:p-10 space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">

              {/* Formula & Explanation */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  How to Calculate: Formula & Steps
                </h2>
                <p>{calc.formulaDescription}</p>
                <div className="bg-white dark:bg-[#22242A] border border-slate-100 dark:border-[#4D5156] p-5 rounded-2xl space-y-2">
                  <span className="block font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">Formula Used:</span>
                  <code className="block text-primary dark:text-sky-400 font-mono text-xs sm:text-sm">
                    {calc.formula}
                  </code>
                </div>
              </div>

              {/* Step-by-Step Example */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Step-by-Step Calculation Example
                </h3>
                <p>{calc.example}</p>
              </div>

              <hr className="border-slate-100 dark:border-[#4D5156]" />

              {/* Common Mistakes */}
              {calc.commonMistakes.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Common Mistakes to Avoid
                  </h2>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {calc.commonMistakes.map((mistake, idx) => (
                      <li key={idx}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="border-slate-100 dark:border-[#4D5156]" />

              {/* Use Cases */}
              {calc.useCases.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
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
                <div className="bg-primary/5 dark:bg-[#22242A] rounded-2xl border border-primary/10 dark:border-[#4D5156] p-6 space-y-3">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                    Expert Tips
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-700 dark:text-slate-300">
                    {calc.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Custom Premium SEO Article Content for High-Impression Query Hubs */}
              {slug === "affirm" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <AffirmSeoContent />
                </div>
              )}
              {slug === "mortgage-calculator-game" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageGameSeoContent />
                </div>
              )}
              {slug === "cbm" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <CbmSeoContent />
                </div>
              )}
              {slug === "square-fee" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <SquareFeeSeoContent />
                </div>
              )}
              {slug === "therapy-productivity" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <TherapyProductivitySeoContent />
                </div>
              )}
              {slug === "google-review" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <GoogleReviewSeoContent />
                </div>
              )}
              {slug === "avalara-sales-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <AvalaraSeoContent />
                </div>
              )}
              {slug === "concrete" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ConcreteSeoContent />
                </div>
              )}
              {slug === "gross-up" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <GrossUpSeoContent />
                </div>
              )}
              {slug === "pro-rata" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ProRataSeoContent />
                </div>
              )}
              {slug === "balance-transfer" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <BalanceTransferSeoContent />
                </div>
              )}
              {slug === "drywall" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <DrywallSeoContent />
                </div>
              )}
              {slug === "fence-cost" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <FenceCostSeoContent />
                </div>
              )}
              {slug === "mulch" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MulchSeoContent />
                </div>
              )}
              {slug === "roof" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <RoofSeoContent />
                </div>
              )}
              {slug === "hecm" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <HecmSeoContent />
                </div>
              )}
              {slug === "heloc-payoff" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <HelocPayoffSeoContent />
                </div>
              )}
              {slug === "bmi" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <BmiSeoContent />
                </div>
              )}
              {slug === "lsat-score-calculator" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <LsatSeoContent />
                </div>
              )}
              {slug === "georgia-payroll" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <GeorgiaPayrollSeoContent />
                </div>
              )}
              {slug === "reverse-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ReverseTaxSeoContent />
                </div>
              )}
              {slug === "losertown-calorie" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <LosertownCalorieSeoContent />
                </div>
              )}
              {slug === "roth-vs-traditional-ira" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <RothVsTraditionalIraSeoContent />
                </div>
              )}
              {slug === "seller-financing" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <SellerFinancingSeoContent />
                </div>
              )}
              {slug === "credit-card-payoff" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <CreditCardPayoffSeoContent />
                </div>
              )}
              {slug === "productivity" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ProductivitySeoContent />
                </div>
              )}
              {slug === "grass-seed" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <GrassSeedSeoContent />
                </div>
              )}
              {slug === "rent-vs-sell" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <RentVsSellSeoContent />
                </div>
              )}
              {slug === "wedding-alcohol" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <WeddingAlcoholSeoContent />
                </div>
              )}
              {slug === "bridge-loan" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <BridgeLoanSeoContent />
                </div>
              )}
              {slug === "tv-mounting-height" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <TvMountingHeightSeoContent />
                </div>
              )}
              {slug === "pond-liner" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <PondLinerSeoContent />
                </div>
              )}
              {slug === "vector-product" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <VectorProductSeoContent />
                </div>
              )}
              {slug === "mortgage-idaho" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageIdahoSeoContent />
                </div>
              )}
              {slug === "mortgage-kansas" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageKansasSeoContent />
                </div>
              )}
              {slug === "wedding-drink" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <WeddingDrinkSeoContent />
                </div>
              )}
              {slug === "puppy-to-dog-weight" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <PuppyWeightSeoContent />
                </div>
              )}
              {slug === "puppy-growth" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <PuppyGrowthSeoContent />
                </div>
              )}
              {slug === "dog-size" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <DogSizeSeoContent />
                </div>
              )}
              {slug === "dog-pregnancy" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <DogPregnancySeoContent />
                </div>
              )}
              {slug === "mortgage-maine" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageMaineSeoContent />
                </div>
              )}
              {slug === "brick" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <BrickSeoContent />
                </div>
              )}
              {slug === "ifta" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <IftaSeoContent />
                </div>
              )}
              {slug === "457-retirement" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <Retirement457SeoContent />
                </div>
              )}
              {slug === "siding" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <SidingSeoContent />
                </div>
              )}
              {slug === "dinkytown" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <DinkytownSeoContent />
                </div>
              )}
              {slug === "metal-roof" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MetalRoofSeoContent />
                </div>
              )}
              {slug === "pawn" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <PawnSeoContent />
                </div>
              )}
              {slug === "hard-money" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <HardMoneySeoContent />
                </div>
              )}
              {slug === "lease-vs-buy-car" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <LeaseVsBuyCarSeoContent />
                </div>
              )}
              {slug === "points-vs-cash" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <PointsVsCashSeoContent />
                </div>
              )}
              {slug === "oklahoma-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <OklahomaTaxSeoContent />
                </div>
              )}
              {slug === "novig" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <NovigSeoContent />
                </div>
              )}
              {slug === "calstrs" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <CalstrsSeoContent />
                </div>
              )}
              {slug === "global-surgery" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <GlobalSurgerySeoContent />
                </div>
              )}
              {slug === "mortgage-kentucky" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageKentuckySeoContent />
                </div>
              )}
              {slug === "reverse-sales-tax-calculator" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ReverseSalesTaxSeoContent />
                </div>
              )}
              {slug === "laticrete-grout" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <LaticreteGroutSeoContent />
                </div>
              )}
              {slug === "mortgage-arkansas" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageArkansasSeoContent />
                </div>
              )}
              {slug === "virginia-salary" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <VirginiaSalarySeoContent />
                </div>
              )}
              {slug === "michigan-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MichiganTaxSeoContent />
                </div>
              )}
              {slug === "mortgage-sc" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MortgageScSeoContent />
                </div>
              )}
              {slug === "arkansas-sales-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ArkansasSalesTaxSeoContent />
                </div>
              )}
              {slug === "arm-mortgage" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ArmMortgageSeoContent />
                </div>
              )}
              {slug === "electric" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <ElectricSeoContent />
                </div>
              )}
              {slug === "tile-sqft" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <TileSqftSeoContent />
                </div>
              )}
              {slug === "dynasty-daddy" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <DynastyDaddySeoContent />
                </div>
              )}
              {slug === "mapei-grout" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MapeiGroutSeoContent />
                </div>
              )}
              {slug === "maryland-tax" && (
                <div className="pt-6 border-t border-slate-200/50 dark:border-[#4D5156]/50">
                  <MarylandTaxSeoContent />
                </div>
              )}

            </section>

            {/* General Calculator Disclaimer */}
            <DisclaimerBox
              title="Disclaimer"
              className="my-8"
            >
              <p>
                This calculation tool is provided for educational and informational estimation purposes only. Results are based on mathematical formulas and user-supplied parameters. They do not constitute formal underwriting, financial, tax, engineering, or legal determinations.
              </p>
            </DisclaimerBox>

            {/* Reusable FAQs Section */}
            <CalculatorFaqs slug={slug} />

            {/* SEO Topic Cluster Navigation Hub */}
            <CategoryClusterNav category={calc.categoryLabel} currentSlug={slug} />
          </div>

          {/* Sidebar Area (1/4 width) */}
          <div className="space-y-6">

            {/* You May Like - Flat list of related articles (No outer card wrapper) */}
            {supportingBlogs.length > 0 && (
              <div className="pb-6 border-b border-slate-200/80 dark:border-[#4D5156]">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-5">You May Like</p>
                <div className="space-y-5">
                  {supportingBlogs.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 hover:text-primary transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-slate-100 dark:bg-[#191a1d] rounded-lg overflow-hidden shrink-0 shadow-xs border border-slate-200/50 dark:border-[#4D5156]/50">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-[9px] font-bold text-primary dark:text-sky-400 uppercase tracking-wider">{rel.category}</span>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-primary transition-colors mt-1 line-clamp-2">
                          {rel.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Categories Directory Links */}
            <div className="pb-6 border-b border-slate-200/80 dark:border-[#4D5156]">
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider pb-3 border-b border-slate-100 dark:border-[#4D5156]">
                Categories
              </p>
              <ul className="ml-5 space-y-2">
                <li>
                  <Link href="/calculators#financial" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 transition-colors block py-1">
                    Financial &amp; Loan Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators#tax" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 transition-colors block py-1">
                    Tax &amp; Payroll Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/calculators#construction" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 transition-colors block py-1">
                    Construction &amp; Material Tools
                  </Link>
                </li>
                <li>
                  <Link href="/calculators#health" className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400 transition-colors block py-1">
                    Health &amp; Fitness Calculators
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
