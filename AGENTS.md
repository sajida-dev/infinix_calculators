<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Modular FAQ & Keyword Architecture Guidelines
- **Separate FAQ Files**: All calculator FAQs MUST be stored in modular, dedicated files inside `app/data/faqs/` (e.g., `affirmFaqs.ts`, `topsoilFaqs.ts`, `squareFeeFaqs.ts`, `lsatFaqs.ts`, `generalFaqs.ts`) and re-exported via `app/data/faqs/index.ts`.
- **Zero Content Duplication**: `calculatorsData.ts`, calculator pages, and individual blog pages MUST import FAQs directly from `app/data/faqs/` rather than hardcoding or duplicating FAQ strings.
- **Synchronized Updates**: Whenever creating a new blog post or adding target SEO keywords for any calculator, always update:
  1. The dedicated FAQ file in `app/data/faqs/` (adding link-rich contextual FAQs)
  2. `app/data/keywords.ts` (adding all new target keywords)
  3. `app/data/calculatorsData.ts` (assigning the imported FAQs and keyword list)
  4. `scripts/generate-sitemap.ts` (re-generating `public/sitemap.xml`)
