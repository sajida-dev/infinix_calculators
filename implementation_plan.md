# Implementation Plan - Modular FAQ Architecture & Affirm Content Expansion

This plan addresses both the content expansion (6 new Affirm blogs, 14+ expanded FAQs, 100 keywords, Reddit source citations) and the **architectural refactoring** to store FAQs in separate modular files (`app/data/faqs/`) to eliminate content duplication across calculator pages and blog posts.

---

## Technical Architecture: Modular FAQ System

```
app/data/
├── faqs/
│   ├── index.ts                # Central barrel export for all FAQ modules
│   ├── affirmFaqs.ts           # Dedicated Affirm FAQs (14+ link-rich items)
│   ├── topsoilFaqs.ts          # Dedicated Topsoil FAQs
│   ├── concreteFaqs.ts         # Dedicated Concrete FAQs
│   ├── lsatFaqs.ts             # Dedicated LSAT FAQs
│   ├── squareFeeFaqs.ts        # Dedicated Square Fee FAQs
│   └── ...                     # Individual FAQ files per calculator slug
├── calculatorsData.ts          # Imports individual FAQs (e.g. faqs: affirmFaqs)
└── blogData.ts                 # Blog posts reference calculators & FAQs without duplication
```

### Benefits:
1. **Single Source of Truth**: Updating an FAQ in `affirmFaqs.ts` automatically updates `/calculators/affirm` and all Affirm-related blog post pages (`/blog/*`).
2. **Zero Content Duplication**: FAQ text lives in one file per calculator instead of being copy-pasted across blogs and calculators.
3. **Targeted Imports**: Pages import *only* the specific FAQ module they need (`import { affirmFaqs } from "@/app/data/faqs/affirmFaqs"`), keeping bundle sizes minimal.

---

## User Review Required

> [!IMPORTANT]
> A workspace convention will be added to `AGENTS.md` documenting this modular FAQ pattern so all future blog posts and keyword additions systematically update `app/data/faqs/<slug>Faqs.ts`.

---

## Proposed Changes

### 1. Refactor FAQs into Separate Files

#### [NEW] [affirmFaqs.ts](file:///d:/Mern/projects/infinix/app/data/faqs/affirmFaqs.ts)
Create dedicated export `affirmFaqs` containing all 14+ comprehensive FAQs:
- Purchasing power calculation & dynamic limits ($5K loans, down payments)
- Simple interest vs amortized loan math (3, 6, 12, 24, 36 months)
- Early payoff & partial payment interest savings
- Credit bureau reporting (Experian, TransUnion, AAoA impact)
- Stores accepting Affirm (Walmart, Amazon, Apple, Best Buy, Home Depot, Lowe's, eBay)
- Paying rent, bills, gift cards, or car rentals with Affirm
- Affirm Debit Card vs standard credit cards
- Spanish guide: ¿Qué es Affirm y cómo funciona?

#### [NEW] [topsoilFaqs.ts](file:///d:/Mern/projects/infinix/app/data/faqs/topsoilFaqs.ts)
#### [NEW] [concreteFaqs.ts](file:///d:/Mern/projects/infinix/app/data/faqs/concreteFaqs.ts)
#### [NEW] [lsatFaqs.ts](file:///d:/Mern/projects/infinix/app/data/faqs/lsatFaqs.ts)
#### [NEW] [squareFeeFaqs.ts](file:///d:/Mern/projects/infinix/app/data/faqs/squareFeeFaqs.ts)
#### [NEW] [index.ts](file:///d:/Mern/projects/infinix/app/data/faqs/index.ts)
Extract FAQs for existing primary calculators into standalone modules and export them from `app/data/faqs/index.ts`.

#### [MODIFY] [calculatorsData.ts](file:///d:/Mern/projects/infinix/app/data/calculatorsData.ts)
Import `affirmFaqs`, `topsoilFaqs`, `concreteFaqs`, `lsatFaqs`, `squareFeeFaqs`, etc., and set `faqs` property in each calculator definition to its imported array. Include all 100 user keywords in `affirm.keywords`.

### 2. New Affirm Blog Posts

#### [MODIFY] [blogData.ts](file:///d:/Mern/projects/infinix/app/data/blogData.ts)
Add 6 new high-intent, SEO-optimized blog posts using the 19 Reddit thread insights and keyword list:
1. `how-affirm-purchasing-power-is-calculated-down-payment-guide`
2. `how-affirm-calculates-interest-apr-vs-monthly-payment-math`
3. `paying-off-affirm-early-partial-payments-interest-savings`
4. `affirm-0-percent-apr-hidden-fees-down-payment-truth`
5. `where-can-you-use-affirm-stores-bills-rent-cars-gift-cards`
6. `que-es-affirm-como-funciona-en-espanol-guia-completa`

Cross-link all Affirm blog posts via `relatedSlugs` and internal HTML links pointing to `/calculators/affirm` and related blogs.

### 3. Master Keywords & Rules

#### [MODIFY] [keywords.ts](file:///d:/Mern/projects/infinix/app/data/keywords.ts)
Add all 100 keywords to the master keywords dataset.

#### [MODIFY] [AGENTS.md](file:///d:/Mern/projects/infinix/AGENTS.md)
Document the modular FAQ rule for future development memory.

---

## Verification Plan

### Automated Tests
1. **Sitemap Generation**: Run `npm run sitemap` (or `npx tsx scripts/generate-sitemap.ts`) to ensure all blog posts are indexed in `public/sitemap.xml`.
2. **Next.js Production Build**: Run `npm run build` to confirm zero TypeScript compilation errors, circular dependencies, or broken imports.

### Manual Verification
1. Verify `/calculators/affirm` loads FAQs cleanly from `affirmFaqs.ts`.
2. Verify `/blog/[slug]` pages render associated calculator FAQs dynamically via `<CalculatorFaqs slug="..." />` with zero content duplication.
