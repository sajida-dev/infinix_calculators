# Implementation Plan - Enterprise SEO Platform for Calculators

Upgrade the Infinix Calculators website into a premium, scalable SEO-first platform. This plan details the database-driven routing architecture, SaaS landing page layout, blog system, structured metadata, and Next.js 16 conventions.

## User Review Required

> [!IMPORTANT]
> **Next.js 16 Routing Convention**:
> Starting with Next.js 16, dynamic route parameters (`params` and `searchParams`) are strictly asynchronous. All dynamic pages and metadata generators must treat them as promises and `await` them.
>
> **Data-Driven Architecture**:
> Instead of creating 30+ separate folder routes and duplicate calculator code, we will implement a database-driven catch-all route (`app/calculators/[slug]/page.tsx`) mapped to a configurable calculator component. The topsoil calculator will remain a dedicated high-priority route (`app/calculators/topsoil/page.tsx`) to showcase absolute topical authority.

## Proposed Changes

---

### Core SEO & Layout Configuration

#### [MODIFY] [layout.tsx](file:///d:/Mern/projects/infinix/app/layout.tsx)
- Hide the `AdFooter` component (comment it out inside the body tags, preserving it in imports).
- Configure standard canonical base URL generation and fallback metadata structure.

#### [NEW] [sitemap.ts](file:///d:/Mern/projects/infinix/app/sitemap.ts)
- Dynamically generate the `sitemap.xml` listing the Home, All Calculators page, all supported database-driven calculators, and all blog articles.

#### [NEW] [robots.ts](file:///d:/Mern/projects/infinix/app/robots.ts)
- Programmatically output a search-crawler friendly `robots.txt` pointing to the dynamic sitemap.

---

### Data Models & Systems

#### [NEW] [calculatorsData.ts](file:///d:/Mern/projects/infinix/app/data/calculatorsData.ts)
- Store metadata, description, formulas, step-by-step examples, keywords, FAQs, and a client-side calculation schema for popular calculators like Affirm, CBM, Pro Rata, Roof, Concrete, Mulch, BMI, and Drywall.

#### [NEW] [blogData.ts](file:///d:/Mern/projects/infinix/app/data/blogData.ts)
- Store a structured database of articles forming the topical SEO clusters for the calculators (e.g. 10 articles for Topsoil, and support articles for Concrete, Mulch, CBM, etc.).

---

### Home Page & Categories Directory

#### [MODIFY] [page.tsx](file:///d:/Mern/projects/infinix/app/page.tsx)
- Redesign the homepage into a premium SaaS-quality landing page:
  - Hero with search and stats.
  - Popular, Trending, and Recently Added lists.
  - Reorganized categories: Financial, Construction, Health, Math, and Unit Converters (removing CPC badges).
  - Featured Guides and Latest Articles sections.
  - Rich FAQ block, Testimonials, and Trust indicators.

#### [MODIFY] [page.tsx](file:///d:/Mern/projects/infinix/app/calculators/page.tsx)
- Update the calculator directory listing to match the new user-centric categorizations, including custom card descriptions, calculation times, target keywords, and "Calculate Now" CTAs.

---

### Topsoil Calculator (Flagship Route)

#### [MODIFY] [page.tsx](file:///d:/Mern/projects/infinix/app/calculators/topsoil/page.tsx)
- Restructure heading hierarchies (H1 -> H2 -> H3) with semantic keyword integration.
- Inject structured schema (WebApplication, BreadcrumbList, FAQPage, and HowTo JSON-LD).
- Add highly detailed contents: formulas, step-by-step calculations, common mistakes, use cases, tips, CTAs, and internal linking to topsoil blog articles and related calculators.

---

### Dynamic Calculator Catch-All

#### [NEW] [page.tsx](file:///d:/Mern/projects/infinix/app/calculators/[slug]/page.tsx)
- Dynamic route to serve all other database-driven calculators.
- Uses `generateMetadata` (awaiting `params`) for unique SEO tags.
- Renders the custom calculator interface alongside its specific SEO formulas, FAQs, related calculators, articles, and schema.

#### [NEW] [DynamicCalculator.tsx](file:///d:/Mern/projects/infinix/app/components/DynamicCalculator.tsx)
- Core client-side form rendering engine. Renders fields (e.g. number inputs, dropdown selects), runs calculations instantly, and prints result cards (similar in quality to the topsoil calculator).

---

### Blog System

#### [NEW] [page.tsx](file:///d:/Mern/projects/infinix/app/blog/page.tsx)
- Blog listing landing page showcasing articles by categories, popular reads, and latest posts.

#### [NEW] [page.tsx](file:///d:/Mern/projects/infinix/app/blog/[slug]/page.tsx)
- Blog post page with full layout, breadcrumbs, related articles, CTA back to its companion calculator, FAQs, and Article/BlogPosting schema. Awaits the `params` promise according to Next.js 16 guidelines.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify Next.js builds successfully.
- Check typescript compilation for async parameters warnings.

### Manual Verification
- Navigate home, category directories, blog pages, and calculators to ensure smooth client-side rendering.
- Verify canonical URLs and JSON-LD schema scripts inside elements.
- Test client calculator calculations (e.g. CBM, Affirm, Roof, Topsoil).
- Inspect Core Web Vitals targets in browser audits.
