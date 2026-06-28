# Comprehensive SEO Audit and Implementation Plan

## Goal Description
Transform the existing Next.js application into an enterprise‑grade, fully SEO‑compliant site that adheres to the latest Next.js SEO recommendations, Google Search Essentials, Core Web Vitals, WCAG accessibility, and structured‑data best practices while preserving all existing functionality and UI.

## User Review Required
> [!IMPORTANT] **Review Required**
- Approve the plan to allow execution of the extensive code changes and additions outlined below.
- The plan will modify many files (metadata, layouts, pages, components, robots.txt, sitemap, etc.) and add new structures (JSON‑LD, Open Graph defaults, canonical handling, accessibility enhancements).
- No breaking changes will be introduced; all updates are additive or replace existing non‑compliant patterns with recommended ones.

## Open Questions
> [!WARNING] **Open Questions**
- Do you want to enable **Internationalization (i18n)** for locale‑specific metadata, or keep a single locale (`en`)?
- Should we generate **dynamic Open Graph/Twitter images** per calculator page using an API route, or keep static images?
- For structured data, do you prefer **single consolidated schema** per page or separate components for each type (e.g., `Breadcrumb`, `FAQ`)?
- Would you like to enable **Incremental Static Regeneration (ISR)** on calculator pages with a revalidation interval (e.g., 24 h) to keep SEO data fresh?
- Do you want a **dedicated `robots.txt` route** or static file under `/public`?

## Proposed Changes
---
### 1. Core Metadata Refactor
- Replace static `export const metadata` with **`generateMetadata`** functions where values depend on route parameters or async data (e.g., calculator slug pages, blog posts).
- Centralize default metadata (site‑wide defaults) in **`app/metadata.ts`** using `Metadata` object and export a helper `mergeMetadata`.
- Add missing fields: `canonical`, `metadataBase`, `verification`, `viewport`, `themeColor`, Apple web app tags, `openGraph`, `twitter`, `alternates` (language, media).
- Ensure `metadataBase` uses `process.env.NEXT_PUBLIC_BASE_URL`.

### 2. Layout Enhancements
- Move global tags (favicon, manifest, themeColor) to **`RootLayout`** via `metadata` export.
- Add `<html lang="en" dir="ltr">` with `lang` attribute derived from locale.
- Include **`<Link rel="preconnect">`** tags for Google Fonts and external assets in Head.
- Implement **`<SkipToContent>`** link for accessibility.

### 3. Robots.txt & Sitemap
- Convert `app/robots.ts` to a **Route Handler** (`app/robots.txt/route.ts`) that returns correct `Content-Type: text/plain` with:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: <base>/sitemap.xml`
- Ensure `sitemap.ts` already generates required fields; adjust to include dynamic routes (`/calculators/[slug]`) with `priority`, `changefreq`, `lastmod`.

### 4. Canonical URLs & Duplicate Content
- In `generateMetadata`, compute **canonical URL** using `metadataBase` + `pathname`.
- Add `<link rel="canonical" href="..."/>` automatically via metadata.
- Ensure no duplicate titles/descriptions across calculators.

### 5. Open Graph & Twitter Cards
- Provide site‑wide OG/Twitter defaults in `metadata.ts`.
- For each calculator page, generate **dynamic OG image URL** (`/api/og?slug=...`) – add a new API route `app/api/og/route.ts` that returns an image via `@vercel/og` (optional, can be static placeholder for now).
- Ensure `type: "article"` where appropriate, include `og:site_name`.

### 6. Favicons & Manifest
- Verify existence of all required icons in `public/` (favicon.ico, apple-touch-icon.png, mask-icon.svg).
- Add `manifest.webmanifest` with proper `icons` array.
- Export `icons` and `manifest` via metadata.

### 7. Structured Data (JSON‑LD)
- Create a **`components/StructuredData.tsx`** that receives a `type` prop and renders appropriate `<script type="application/ld+json">`.
- Implement schemas for:
  - `WebSite` (site root)
  - `WebPage` (generic pages)
  - `BreadcrumbList` (category and calculator pages)
  - `FAQPage` (if any FAQs exist)
  - `Product` / `SoftwareApplication` for calculators (include `name`, `description`, `url`, `offers` if applicable)
- Inject structured data via `generateMetadata` or directly in page components.

### 8. Accessibility Improvements
- Add **ARIA landmarks** (`<header>`, `<nav>`, `<main>`, `<footer>` already present, but ensure proper roles).
- Provide **skip navigation** link at top of `RootLayout`.
- Ensure all interactive elements have accessible names/labels (`SearchInput`, navigation links).
- Verify color contrast for text against background using Tailwind’s default palette (already using slate colors – adjust if needed).
- Add **focus outlines** on interactive elements.

### 9. Semantic HTML Refactor
- Replace generic `<div>` wrappers that act as sections with semantic tags (`<section>`, `<article>`, `<aside>`).
- Ensure headings follow a single `<h1>` per page hierarchy (calculator pages will derive H1 from calculator name).
- Add `<figure>` and `<figcaption>` for any illustrative images.

### 10. Image SEO & Optimization
- Convert all `<img>` usages to **`next/image`** component with `width`, `height`, `priority` where needed.
- Add descriptive `alt` attributes (currently missing on many icons).
- Enable `placeholder="blur"` for large images.
- Ensure responsive `sizes` are set via `layout="responsive"` (default).

### 11. Font Optimization
- Already using `next/font/google`; add `display: 'swap'` and **subsetting** to include only required glyphs.
- Preload critical fonts via `metadata` head links.

### 12. Performance & Core Web Vitals
- Audit bundle size using `next build` → `next analyze` (add `next-bundle-analyzer` plugin).
- Split large components (e.g., CalculatorCard) via **dynamic imports** for non‑critical UI.
- Ensure **lazy loading** of below‑the‑fold sections (sidebar ads, upcoming calculators).
- Add **`next/script`** with `strategy="lazyOnload"` for analytics.
- Verify **`font-display: swap`**, **`preconnect`** to Google Fonts.
- Set **`Cache-Control`** headers via `next.config.js` for static assets.

### 13. Rendering Strategy & ISR
- For static calculator pages (`/calculators/[slug]`), use **ISR** with `revalidate: 86400` (24 h) to keep data fresh.
- For blog posts, keep **static generation** (or ISR if frequent updates).
- Verify no unnecessary **SSR** on pages that can be static.

### 14. Caching & CDN
- Use `fetch` with `cache: 'force-cache'` and `next: { revalidate: 86400 }` where appropriate.
- Add proper **`Cache-Control`** headers for API routes.

### 15. Security Headers
- Update `next.config.js` to include **Content‑Security‑Policy**, **Referrer‑Policy**, **X‑Content‑Type‑Options**, **X‑Frame‑Options**, **Strict‑Transport‑Security**.

### 16. Testing & Verification
- Add **unit tests** for metadata generation (using Jest + @testing-library/react).
- Run **Lighthouse** CI check (`npm run lint && npm run build && lighthouse`) and record scores.
- Verify structured data with **Google Rich Results Test** via automated script.
- Ensure no accessibility violations with **axe-core**.

### 17. Documentation
- Create a **`docs/seo.md`** file summarizing all SEO implementations, how to add new calculators, and guidelines for future developers.
- Update `README.md` with SEO checklist.

---
## Verification Plan
- Run `npm run build` and ensure no TypeScript errors.
- Execute `npm run lint` (eslint) with no warnings.
- Run Lighthouse CI; each metric (LCP, CLS, FID) must be **≥ 90**.
- Use `@axe-core/react` to confirm **WCAG AA** compliance.
- Validate all JSON‑LD with Google's Rich Results Test.
- Confirm `robots.txt` reachable at `/robots.txt` and contains correct sitemap URL.
- Verify `sitemap.xml` lists all static and dynamic routes.
- Manually inspect a handful of calculator pages for correct OG/Twitter meta tags and canonical URLs.

---
### Next Steps
1. Await your approval of this implementation plan.
2. Upon approval, begin execution in the order presented, committing changes incrementally and running tests after each major step.
3. Provide progress updates and intermediate verification results.

---
*Please review the open questions and approve the plan so we can proceed.*
