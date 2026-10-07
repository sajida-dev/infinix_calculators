# Search Console and Author Implementation Plan

Prepared: 2026-10-06
Status: Approved by the user on 2026-10-06. Mortgage/sitemap and supplied-name editorial profile batches complete. Optional contributor details and URL-level SEO baseline inputs pending.

## Scope and Approval Gate

Use the supplied Google Search Console query and daily performance tables to prioritize improvements. Create complete author profiles from verified contributor details, connect their real social profiles, and keep attribution consistent across the site.

Implement approved batches separately; request approval before expanding scope. The user supplied five public names and authorized category assignments. Profiles describe editorial scope only; qualifications, personal portraits, social links, and completed-review claims require contributor-specific confirmation. Preserve configured advertising scripts and unrelated changes.

## Search Console Baseline

Daily data supplied: July 4 through October 3, 2026. The query table's exact date range, search type, country, device, and filters were not supplied; do not assume it covers the same period.

| Period                 | Clicks | Impressions | Calculated CTR | Approximate weighted position |
| ---------------------- | -----: | ----------: | -------------: | ----------------------------: |
| July 4-10              |      3 |       1,180 |          0.25% |                         49.47 |
| September 20-26        |    161 |      16,325 |          0.99% |                         13.59 |
| September 27-October 3 |    206 |      17,581 |          1.17% |                         12.20 |

Weekly CTR is total clicks divided by total impressions, not the average of daily percentages. Position is an impression-weighted approximation calculated from rounded daily positions.

The latest complete week versus the preceding week shows:

- Clicks increased 28.0%.
- Impressions increased 7.7%.
- CTR increased approximately 0.19 percentage points, using unrounded ratios.
- Approximate average position improved from 13.59 to 12.20; lower is better.

October 1-3 positions are worse than September 28-30, but three days do not establish a sustained decline. Compare matching weekdays and rolling 7/28-day periods before diagnosing a regression. Sitewide position can change with query mix and does not prove individual pages improved or declined.

The query export does not include landing URLs. Route assignments below are candidates until confirmed with query-by-page exports. Do not add query impressions together and represent them as sitewide totals.

## Ordered SEO Priorities

| Order | Evidence from supplied queries                                                                                               | Proposed action after approval                                                                                                                                                                                                                                    |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Mortgage calculator games: 101 clicks / 8,912 impressions, 1.1% CTR, position 7.7                                            | Confirm the ranking URL and actual playable experience. Review title, description, first-screen access, mobile usability, and game-intent match. Do not promise unrelated F1, driving, football, or unblocked games unless genuinely available.                   |
| 2     | Affirm calculator: 52 / 2,247, position 5.5; payment calculator: 22 / 1,253, position 6.0                                    | Audit the existing title rather than repeat previous optimization. Make payment estimates, APR, down payment, term, interest, and total cost clear. Check Pay in 4 and zero-APR behavior; distinguish estimates from lender approval or purchasing power.         |
| 3     | Avalara sales tax calculator: 3 / 588, position 9.5; Avalara tax calculator: 0 / 297, position 10.0                          | Align snippets with the actual estimator. Verify dated rates and official sources; do not imply live address-level lookup or Avalara affiliation unless supported.                                                                                                |
| 4     | Therapy productivity: 2 / 275, position 12.8; lunch-break variant position 7.6; general productivity: 2 / 654, position 18.5 | Keep general output calculations separate from clinical billable-time productivity. Validate lunch deductions and denominator assumptions. Include the supplied daily-output example: 240 units / 5 days = 48 units/day, without repeating every query variation. |
| 5     | CBM calculator: 0 / 795, position 20.8; cubic meter calculator: 0 / 426, position 24.9                                       | Audit the existing hub and conversion content before adding more. Check cm, mm, inches, quantity, units, formulas, examples, and supporting links. Strengthen one canonical hub rather than create thin synonym pages.                                            |
| 6     | Balance transfer: 0 / 896, position 43.1; concrete: 0 / 441, position 61.9; roofing variants around positions 30-45          | Improve calculator accuracy, distinct intent coverage, assumptions, useful examples, sources, and contextual links. These are primarily ranking opportunities, not snippet-only CTR fixes.                                                                        |
| 7     | Topsoil calculator: 0 / 168, position 52.1; how much topsoil: 0 / 365, position 50.2                                         | Improve volume, coverage, bags, settling assumptions, and clearly labeled cost estimates. Local supplier queries at positions around 2 are a separate intent; do not claim local stock, delivery, or supplier services the site does not provide.                 |
| 8     | Square fees, pro rata, gross-up, builders risk, printing, review ratings, HECM, and education tools                          | Queue evidence-backed audits after higher-priority batches. Do not delete useful low-click tools or create pages for every spelling variant.                                                                                                                      |

Protect existing brand, pink, and aesthetic calculator traffic. Do not change successful homepage positioning as part of unrelated author or finance work. Ignore irrelevant accidental queries and avoid keyword stuffing.

## Author Profile and Trust Plan

### Current Findings

- `app/data/authorsData.ts` defines four named profiles with degrees, licenses, experience claims, stock-photo avatars, and social-network homepage URLs. These claims require confirmation; this audit does not establish whether the contributors are real.
- Author-category fallback logic can produce a byline without an explicit contributor assignment.
- `app/components/CalculatorReviewBadge.tsx` says formulas and assumptions were reviewed based on category selection, without a review record in that component.
- `app/authors/[slug]/page.tsx` independently infers reviewed calculators using hardcoded author slugs. Changing names alone can break or misrepresent this association.
- Existing Person/ProfilePage schema includes education claims; social links must describe the same real contributor, not a network homepage or an unrelated account.

Local hypothesis: explicit contributor assignments and confirmed review records will keep profile listings, bylines, review badges, and structured data consistent, whereas name-only replacement will not.

Discriminating check after implementation: for a sampled calculator with a confirmed review, verify the badge, reviewer profile, and schema resolve to the same contributor; for an unreviewed calculator, verify no completed-review claim is rendered.

### Contributor Details Needed

For each profile, provide:

- Real public name, or a disclosed pen name approved by the contributor; proposed names must not imply invented expert identities.
- Actual role, short biography, longer biography, subject experience, and contributions to this project.
- Education, credentials, license jurisdiction, and supporting verification where applicable. Omit anything unconfirmed.
- Portrait the contributor has permission to use. Do not present a stock model as the contributor.
- Optional public location and contact address, with permission to publish.
- Exact LinkedIn, Facebook, Instagram, or X profile URLs you will supply, with confirmation they belong to that contributor.
- Articles genuinely authored and calculators genuinely reviewed, with review dates and scope where available.
- Whether these profiles are additions or replacements; confirm an old-to-new mapping only when the attribution is legitimate.

Complete profiles mean complete supported information, not invented degrees, employers, years of experience, publication history, testimonials, or contact addresses. Omit unavailable optional fields and sections. Social links help corroborate identity but do not guarantee search rankings or trust.

### Implementation Steps After Approval

1. Confirm contributor identities and addition-versus-replacement decisions. Keep incomplete proposals unpublished; use truthful editorial-team attribution where appropriate rather than invent a specialist.
2. Update the author data model only as needed for optional verified fields and explicit attribution/review records. Avoid silent assignment to an unrelated expert when an author slug is invalid.
3. Update author index/detail pages and shared author components. Use the contributor name as the profile heading, show only supported details, and render supplied social links accessibly. Add profile-specific `sameAs` entries consistent with the visible page.
4. Replace category-inferred completed-review claims with explicit, confirmed review attribution. Reuse one ownership source for profile listings and badges. Distinguish author, editor, and reviewer roles.
5. Update affected article bylines, calculator assignments, metadata, and structured data together. Do not transfer authorship to a different person merely because a profile is being replaced.
6. Preserve legitimate old profile URLs. Add redirects only for the same person's renamed slug; do not redirect an unrelated contributor to a replacement person. Review internal links and sitemap entries accordingly.

## Files and Surfaces

Author batch, only where required:

- `app/data/authorsData.ts`: profile content, identity links, lookup behavior.
- `app/authors/page.tsx` and `app/authors/[slug]/page.tsx`: profile listings, supported details, social links, metadata, schema.
- `app/components/AuthorBio.tsx`, `CalculatorReviewBadge.tsx`, and `BlogCard.tsx`: consistent attribution and conditional fields.
- `app/data/blogData.ts`, `app/blog/page.tsx`, and `app/blog/[slug]/page.tsx`: confirmed byline mappings and related schema.
- `app/data/calculatorsData.ts` and calculator routes: explicit reviewer information where confirmed.
- `app/editorial-policy/page.tsx` and `app/about/page.tsx`: truthful team and review-process descriptions if affected.
- `next.config.mjs` or the existing canonical routing owner: approved same-person slug redirects only if needed.
- `scripts/generate-sitemap.ts` and `public/sitemap.xml`: canonical author URLs and sitemap consistency. The conflicting App Router sitemap was removed during validation; use the public generator as the single owner.

SEO batches, limited to the approved query cluster:

- `app/data/calculatorsData.ts`: calculator metadata, assumptions, examples, and behavior if defects are demonstrated.
- `app/data/keywords.ts`: relevant intent-aligned keyword mappings, not every raw search query.
- `app/data/faqs/` and its `index.ts`: dedicated modular FAQ sources; no duplicated FAQ strings in calculator or blog data.
- Existing `app/components/seo/` components, calculator components, and relevant calculator/blog routes: only demonstrated content or usability gaps.
- `scripts/generate-sitemap.ts` and `public/sitemap.xml`: synchronized generation after approved content/keyword changes, as required by AGENTS.md.
- This plan: append approved batch dates, outcomes, and measurement notes.

Do not automatically modify every listed file. Before any Next.js code changes, read the relevant installed guides under `node_modules/next/dist/docs/`, as required by AGENTS.md.

## Execution and Validation

1. Approval: confirm author batch scope and the first SEO cluster. Obtain real contributor details before publishing profiles.
2. Baseline: obtain Search Console CSV exports for pages, query-by-page, dates, device/country, and the query table's date range/filters. Record existing titles and route-level metrics; do not infer query-to-URL ownership from query text alone.
3. Author batch: implement verified profiles and consistent attribution, then validate before SEO edits.
4. First SEO batch: confirm mortgage-game intent and the owning URL, implement one coherent change group, and validate. Continue to Affirm/Avalara and subsequent clusters only within approved scope.
5. Measure: annotate deployment dates and compare matched 7-day and 28-day windows, by URL and query cluster. Track clicks, impressions, weighted CTR, and position separately. Account for query mix, seasonality, and reporting lag; do not attribute all changes to a deployment.

Checks for each applicable implementation batch:

- First run the cheapest focused behavior check: attribution consistency for authors, or known inputs and expected outputs for calculator changes.
- Run scoped ESLint, `npx tsc --noEmit`, `npm run lint`, and `npm run build`; report pre-existing failures separately.
- For affected routes, check canonical URLs, HTTP status/redirects, author links, metadata, and rendered JSON-LD. FAQ schema must match visible modular FAQs and appear only once per page; rich-result eligibility is not guaranteed.
- Run `npm run sitemap` for approved content changes. Parse the result and verify unique canonical URLs, author inclusion, no stale slugs, and HTTP 200 at `/sitemap.xml`. Keep one sitemap owner; do not reintroduce an App Router route alongside the public file. Topsoil must appear once through calculator enumeration.
- Verify profile/social-link usability on desktop and mobile, portrait loading, accessible link names, and no overflowing text.
- Validate identity URLs belong to the approved contributor; omit placeholder social links and unsupported credential schema.
- Start a local server for implemented UI changes and provide its URL. No server is necessary for this planning-only document.

Planning validation: weekly arithmetic was checked in PowerShell. Git status was unavailable because `git` is not on the current terminal PATH. The initial planning-only batch changed no application code or sitemap.

## Implementation Log

### 2026-10-06: Mortgage Simulator Batch

- Approval recorded; contributor identities and replacement decisions are still pending.
- Confirmed the local mortgage route renders `MortgageCalculatorGame`; Search Console query-to-page ownership remains unverified without the export.
- Added shared payoff math and regression checks for zero APR, extra payments, final-payment capping, comparable terms, and invalid inputs. Connected both calculator paths to the same implementation.
- Fixed the term comparison to use the same principal and selected APR, and calculate totals before display rounding. Removed selectors that did not change calculations.
- Corrected metadata, keyword mappings, visible SEO content, and modular FAQs to describe educational simulations rather than nonexistent racing games, badges, or expense modeling.
- Added visible assumptions and accessible slider/mode names. Removed the duplicate static topsoil entry from the sitemap generator; it remains included through calculator enumeration.
- Live validation found `/sitemap.xml` returned HTTP 500 because the App Router sitemap and public file claimed the same path. Removed the conflicting App Router sitemap, preserving the required generated public file. Live XML now returns HTTP 200 with 209 unique URLs and no parsing errors.
- Validation passed: `npx tsx scripts/validate-mortgage.ts`, `npx tsc --noEmit`, final `npm run build`, and scoped ESLint for the simulator, payoff utility, validation script, keywords, FAQ source, SEO component, and sitemap generator.
- Full `npm run lint` remains blocked by existing errors in unrelated components/pages and the shared calculator data file's two pre-existing `any` errors. No unrelated lint cleanup was attempted. The mortgage component's timestamp purity warning was resolved locally.
- Browser checks passed for zero APR, extra payments, consistent loan-term assumptions, property purchase, and year advancement. Desktop and mobile screenshots were inspected; the tested mobile layout had no document overflow. Canonical and title match the mortgage route; exactly one FAQ schema contains ten questions, with answers matching the rendered FAQ content.
- Preview: `http://localhost:3000/calculators/mortgage-calculator-game`, using the workspace's existing dev server. Next.js declined a second dev instance for this workspace; the existing process was not interrupted.
- Later query-specific SEO batches require URL-level baseline data to meet the approved measurement gate. No author identity, portrait, credential, or authorship has been invented or reassigned.

## Remaining Inputs

Names and category assignments have been implemented as requested. Provide contributor-confirmed social profile URLs, permitted portraits, qualifications, and actual review records before adding those optional details. For later query-specific SEO batches, provide Search Console pages and query-by-page exports with date range and filters. Missing facts must not be filled with guesses.

## Named Editorial Profile Batch

### 2026-10-06: User-Supplied Names

| Public name   | Editorial scope                                         | Canonical profile        |
| ------------- | ------------------------------------------------------- | ------------------------ |
| Vaughn Mercer | Finance, tax, payroll, payment fees                     | `/authors/vaughn-mercer` |
| Atlas Keller  | Construction, materials, landscaping, freight volume    | `/authors/atlas-keller`  |
| Rowan Vance   | Mathematics, education, ratings, unit conversions       | `/authors/rowan-vance`   |
| Orion Mercer  | Health-related estimates, productivity, time allocation | `/authors/orion-mercer`  |
| Ellison Grant | General editorial content and site information          | `/authors/ellison-grant` |

- Replaced the earlier team-label draft with the five names supplied by the user. Biographies describe assigned editorial scope, not invented experience, education, licenses, employers, research, or expert endorsements.
- Preserved existing article references through explicit legacy-slug resolution. Legacy profile URLs return HTTP 200 with a migration notice, `noindex, follow`, and the current canonical profile URL; they do not claim continuity of the old personal biography.
- Profile headings, metadata, profile schema, shared editorial labels, article links, and blog search/filter options now use the supplied names. Article schema retains Infinix as organizational author and uses the assigned named editorial contact as editor, rather than inventing individual authorship of older articles.
- Removed inferred completed-review claims and category-based formula-verification listings. Calculator listings now identify editorial categories, using one shared resolver. CBM routes to Atlas and productivity routes to Orion even when the underlying broad category is unit-converter or math.
- Empty credentials and education are not displayed. No personal portraits, individual email addresses, placeholder social-network links, or unconfirmed credentials are published. The existing brand mark is explicitly labeled and is not emitted as a Person portrait in schema.
- Added an editorial-attribution disclosure to the policy. Preserved configured advertising and unrelated changes.
- Passed `npx tsx scripts/validate-authors.ts`, `npx tsc --noEmit`, `npm run build`, and focused ESLint for the author/profile/calculator attribution slice. Full lint retains existing failures; scoped blog lint identifies an existing apostrophe error in the blog index and an unused-variable warning in the article page. An existing BlogCard Tailwind shorthand suggestion remains unchanged.
- Browser checks passed for all five canonical profile names, HTTP 200, Person schema, canonical URLs, absence of credential/portrait/review claims, legacy profile disclosure, unknown-profile HTTP 404, named blog filters/search, article editor schema, and calculator attribution.
- Responsive layout measurements found no document overflow in the tested desktop/mobile profile views. The refreshed mobile profile screenshot was inspected successfully; initial directory screenshots were stale/cropped in the browser tool, so full desktop screenshot verification remains limited. Optimized brand-image requests return HTTP 200 and the profile icon renders.
- Regenerated the sitemap: live HTTP 200, 210 unique URLs, exactly five current profile entries, and no legacy author URLs. Preview: `http://localhost:3000/authors` using the existing workspace server.
