# SEO and AdSense Remediation Plan

**Status:** Draft for review. No work in this document should be treated as approved for implementation until reviewed.

**Prepared:** 2026-09-17

## Implementation Log

### Completed on 2026-09-17

- Improved CBM metadata, guide content, and FAQs for the dimensions, cm, mm, inches, and cubic-meter query cluster.
- Updated title and meta-description copy for Affirm, Avalara, and Mortgage Calculator Games to better match the visible product and avoid unsupported absolute claims.
- Updated the Privacy Policy with Google AdSense/Analytics technology disclosure, a Google partner-data link, advertising preference links, and an effective date.
- Removed public “verified for accuracy” and fixed-response-time guarantees that were not backed by an auditable review system.
- Changed the contact form from a simulated successful submission to an explicit prefilled-email handoff.
- Corrected the Topsoil Calculator example from two 40 lb bags to approximately 36 0.75 cu ft bags for one cubic yard.
- Verified the application with `npm run build` after each implementation batch.

### Still blocked on owner verification or page-level review

- Confirm or replace all named contributor biographies, credentials, professional licenses, profile images, contact addresses, and educational affiliations.
- Confirm that each public support and editorial email address is actively monitored.
- Set the AdSense verification token in the production host and verify the deployed tag.
- Select a consent-management approach where it is legally required and confirm production behavior.
- Complete the keep/improve/noindex/consolidate decision for every indexable calculator and blog URL.
- Review all third-party content, images, and quotations for original contribution, attribution, and reuse rights.

## Objectives

1. Increase qualified organic clicks by improving click-through rate (CTR) on pages already ranking in the top 10 and lifting high-intent pages currently ranking on pages 2-6.
2. Build fewer, deeper topic hubs rather than adding large lists of near-duplicate keywords or pages.
3. Address the underlying signals associated with the AdSense low-value-content finding: insufficiently distinct content, thin or repetitive pages, incomplete evidence of editorial maintenance, and poor ad-to-content balance.
4. Complete the separately required AdSense site-ownership verification.

## Evidence Summary

Search Console data points to several different problems. They need different solutions.

| Cluster                                             | Evidence                                                                           | Likely issue                                                                                                                  | Priority |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- |
| Mortgage calculator games                           | 6,974 impressions, position 7.7, CTR 0.7%                                          | High visibility but poor search-result appeal and possible mismatch between game-specific queries and first-screen experience | P0       |
| Affirm payments                                     | 1,720 impressions at position 5.5; 901 payment-query impressions at position 6.2   | Strong ranking but weak CTR; visitors need clear payment scenario answers                                                     | P0       |
| Avalara sales tax                                   | 594 impressions at position 9.4; multiple ZIP/address queries at positions 6-10    | Strong ranking but low CTR; query intent expects accurate rate lookup and transparent source/limitations                      | P0       |
| CBM                                                 | 744 impressions at position 20.7; 407 cubic-meter impressions at position 24.7     | A coherent topic cluster, but not enough authority or intent-specific coverage to rank on page 1                              | P1       |
| Productivity and therapy productivity               | 633 impressions at position 18.2; therapy/PT variants around positions 8-18        | General and clinical intent may compete; different users need different inputs and explanations                               | P1       |
| Topsoil                                             | Local purchase queries rank 2-3 but have no clicks; calculation queries rank 40-70 | Local queries are not a fit for a non-local provider; calculator needs stronger informational intent content                  | P1       |
| Balance transfer, concrete, shingles, review rating | Meaningful impressions but mainly positions 30-60                                  | Pages need substantially differentiated tools and focused support content, not more keyword strings                           | P2       |

## Additional Official Guidance Reviewed

The approval strategy in this document also incorporates:

- Google AdSense content and user experience: https://support.google.com/adsense/answer/10015918
- Search Console manual actions and thin-content guidance: https://support.google.com/webmasters/answer/9044175
- Google Publisher Policies requirement to follow Search spam policies: https://support.google.com/publisherpolicies/answer/11035931

These sources reinforce four non-negotiable standards:

1. Every page needs enough original, substantial value to give users a reason to visit and return.
2. Similar or duplicated pages must be expanded into genuinely different resources, consolidated, or removed from indexing.
3. Pages must promise and deliver the service users expect, with working navigation and no misleading or irrelevant links/content.
4. Google-served ads cannot appear on pages that violate Google Search spam policies, including thin content, scraped content, and doorway pages.

## Site-Specific Approval Decision

**Do not request AdSense review yet.** The present site likely needs a content-quality reduction and accuracy pass before it is ready for a credible resubmission.

The codebase currently generates 137 calculator entries from one dynamic template, while the calculator directory advertises “hundreds” of tools. Shared components are not a policy violation by themselves, but this scale creates a strong risk that many URLs offer only a generic form plus interchangeable explanatory blocks. That maps directly to the official warning against thin pages and pages optimized mainly for keyword phrases.

The review also found examples of content that need an accuracy audit before monetization:

- The Topsoil Calculator page states that an approximately one-cubic-yard project could require “2 bags of 40 lb each,” while the same page says roughly 36 bags equal one cubic yard. This is a material factual contradiction.
- The topsoil calculator metadata and keyword lists promote local purchase/delivery terms such as “near me” and “for sale,” even though the site presents a calculation service rather than a local material supplier.
- About, author, editorial, and contact pages make detailed claims about professional credentials, review workflows, response times, and operating practices. These must be factual, supportable, and actively maintained.

## Approval Strategy: Improve Fewer Pages, Then Expand

### Stage A: Stop expanding indexable pages

Until the quality audit is complete:

- Do not add keyword-variant calculators, location pages, ZIP pages, competitor-brand pages, or articles made mainly to target individual queries.
- Do not add AdSense units to additional templates.
- Keep new editorial work limited to a small number of high-demand clusters where the tool can offer distinct, verifiable utility.

### Stage B: Create an indexable-page inventory

Export every canonical calculator and blog URL to a review spreadsheet. Each URL receives one decision: `keep and improve`, `consolidate/redirect`, or `noindex`.

Use the following objective scoring model:

| Test                                                                       | Points |
| -------------------------------------------------------------------------- | ------ |
| Calculator solves a distinct task with task-specific inputs and outputs    | 2      |
| Formula, sources/assumptions, constraints, and worked example are accurate | 2      |
| Original, task-specific guide includes decisions users need to make        | 2      |
| Page does not substantially duplicate another internal page                | 2      |
| Title, H1, calculator behavior, content, and links match one user intent   | 1      |
| Related internal links are relevant and users can navigate back to hubs    | 1      |

**Decision rule:** pages scoring 8-10 can remain indexable; pages scoring 5-7 need a defined improvement ticket before remaining indexed; pages scoring 0-4 should be noindexed or consolidated before the AdSense request. Do not score a page as complete based on word count alone.

### Stage C: Fix accuracy and truthfulness before authority signals

1. Test every calculator against independently calculated sample values and record the expected results.
2. Fix contradictory calculations, result labels, units, and text before adding further SEO content.
3. Replace unsupported “expert,” “certified,” “licensed,” “peer-reviewed,” or service-level language with accurate wording. Do not use invented personas or credentials.
4. For financial, tax, health, and clinical tools, show limitations, assumptions, applicable date, and a clear recommendation to confirm consequential decisions with a qualified professional.
5. Remove local-commercial language from calculator pages unless the site genuinely offers the product, delivery, service area, pricing, and customer support described.

### Stage D: Consolidate by topic rather than query variant

Use a hub-and-supporting-resource model:

| Topic                | Canonical tool                      | Supporting original resources                                     | Avoid                                              |
| -------------------- | ----------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| CBM                  | `/calculators/cbm`                  | Dimensions unit guide; mixed-carton workflow; freight terminology | A page for each unit/spelling variant              |
| Topsoil              | `/calculators/topsoil`              | Lawn/sod depth guide; cost guide; fill-dirt comparison            | “Near me” pages unless local sales are real        |
| Therapy productivity | `/calculators/therapy-productivity` | Billable-minute and lunch-break guide                             | Duplicating the general productivity tool          |
| General productivity | `/calculators/productivity`         | Team output and capacity-planning guide                           | Clinical/PT/OT terminology without feature support |
| Concrete             | `/calculators/concrete`             | Slab, footing, bag-yield, and volume guide                        | Separate synonyms with identical formulas          |
| Roofing              | `/calculators/roof`                 | Pitch, waste, and square-conversion guide                         | Competitor-brand landing pages                     |

### Stage E: Prove user experience and maintenance

- Run mobile and desktop tests on all retained templates; calculator inputs, results, navigation, and legal links must be visible and usable.
- Remove dead links, broken images, placeholder data, and pages whose promised feature does not work.
- Publish a truthful correction/update history for calculator logic changes where the site claims ongoing review.
- Keep the privacy policy, contact route, and editorial policy accurate to actual operations.
- Add a small number of fully original, well-researched guides each month only when they strengthen a retained calculator hub.

### Stage F: Resubmit only after evidence exists

Wait until the following evidence has been collected:

- A completed inventory that records an action for every indexable calculator and blog page.
- A list of URLs noindexed, redirected, or substantively rewritten.
- Calculator test cases for all retained high-priority tools.
- Production screenshots showing that no ad placement obstructs user interaction.
- Privacy, contact, author, and editorial information verified against the real operator and processes.
- Search Console confirmation that the revised sitemap is accepted and the site has no manual-action or security issues.

At that point, submit the review in AdSense. The review outcome is controlled solely by Google, but this gives the site a defensible basis for approval.

## Important Constraint: Keywords Are Not the Main Lever

The project already contains most observed query variations in `app/data/keywords.ts` and the relevant calculator configurations. Search-engine rankings primarily respond to useful page content, reliable calculator behavior, clear topic focus, links, and user satisfaction; the HTML `keywords` meta tag has little direct ranking value.

For each page, retain only keywords that match the actual tool and visible content. Do not create a page solely to capture a spelling variation, competitor name, unrelated local-purchase query, or a query that the calculator cannot answer.

## Work Already Completed

The first CBM and CTR metadata batch was implemented and verified with a successful production build.

- CBM page metadata now explicitly covers cm, mm, inches, feet, dimensions, and cubic meters.
- The CBM guide includes a millimeter formula, practical calculation workflow, and a clarification that carrier billing rules vary.
- CBM FAQs now include millimeter conversion and the distinction between cargo volume and shipment weight.
- Affirm, Avalara, and mortgage-game titles/descriptions were made more intent-specific; the unsupported absolute claim about credit impact was removed from the Affirm description.

## Phase 0: Technical and Policy Readiness

### 0.0 Official Google Publisher Policies review

**Primary source reviewed:** https://support.google.com/adsense/answer/10502938

The policy page groups obligations into content, behavioral, privacy, and other standards. The table below turns each relevant obligation into a concrete project decision. A green status means the local source appears to address the requirement; it is not a statement that Google has approved the site.

| Policy area                       | Official requirement                                                                                                                                                                                                          | Current project evidence                                                                                                                                                                                                                           | Status and required action                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Low-value inventory               | Ads cannot be placed on screens without publisher content or with low-value content.                                                                                                                                          | The site has more than 100 calculator routes generated from a shared template. Some high-priority routes have bespoke guides, but all pages need a quality review.                                                                                 | **Open.** Audit every indexable calculator using the Phase 4 rubric. Improve, consolidate, or noindex pages that lack a distinct calculator, unique explanation, and tested methodology.                                                                                                                                                                    |
| Replicated content                | Ads cannot appear beside embedded/copied content without meaningful added commentary or curation.                                                                                                                             | Blog data contains long HTML articles and references to external/community discussion.                                                                                                                                                             | **Open.** Review all articles and media for original wording, permissible quotations, source attribution, and added analysis. Never import Reddit text or external content wholesale.                                                                                                                                                                       |
| More ads than content             | Ads or paid promotional material must not exceed publisher content on a screen.                                                                                                                                               | AdSense script loads globally. `AdBanner` reserves large ad slots, though only `AdFooter` currently imports it and no root-layout usage was found.                                                                                                 | **Open.** Before enabling any placement, document it by URL/template and test that each viewport has substantial original content before and around the placement.                                                                                                                                                                                          |
| Ads interfering                   | Ads cannot overlay content, sit next to actions in a way that prompts unintended clicks, severely interrupt consumption, or create a dead end.                                                                                | `app/components/AdFooter.tsx` defines a fixed bottom banner that reserves a horizontal ad area. It is not mounted by `app/layout.tsx` at present.                                                                                                  | **Open preventive action.** Keep it unmounted. Do not introduce a fixed/sticky ad until a mobile interaction review proves it cannot cover calculator inputs, results, navigation, or the close control.                                                                                                                                                    |
| Accurate declarations             | Publisher, payment, ads.txt, and ad-request information must be complete and materially accurate.                                                                                                                             | `public/ads.txt` includes the configured Google publisher ID. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` was not set in local configuration during the earlier check.                                                                                  | **Open.** Set the exact AdSense verification value in production hosting, deploy, and verify the rendered meta tag. Keep publisher information and `ads.txt` accurate.                                                                                                                                                                                      |
| Misleading representation         | Do not misrepresent the publisher, creator, content purpose, or affiliation/endorsement.                                                                                                                                      | Calculator pages include independent-brand disclaimers for Affirm and Avalara. Author/editorial/contact pages claim named credentials, professional review, operating hours, response times, and specific practices.                               | **High priority open.** Retain only claims and author identities that are genuine and verifiable. Remove or rewrite unsupported credentials, affiliations, service levels, review claims, stock portraits presented as people, and fictitious contact details.                                                                                              |
| Privacy disclosure                | Publish and follow a privacy policy disclosing Google-related data collection, sharing, and use, including cookies, web beacons, IP addresses, or identifiers. The page may prominently link to Google’s partner-data notice. | `app/privacy/page.tsx` discusses third-party advertising and preferences, but does not explicitly state that Google/third parties may place/read cookies or use web beacons, IP addresses, and identifiers. It lacks the Google partner-data link. | **High priority open.** Update the policy to accurately describe Google AdSense and Analytics data practices, include the required cookie/web beacon/IP disclosure, and link to `https://www.google.com/policies/privacy/partners/`. Do not claim a “zero cookies policy” without distinguishing first-party cookies from third-party ad/analytics cookies. |
| Personalized advertising          | Do not target ads using sensitive information, including detailed financial status, health information, or children’s activity; comply with applicable user-consent requirements.                                             | The site covers financial, health, therapy, mortgage, and payroll tools. The code reviewed does not show custom ad targeting or PII passed to Google.                                                                                              | **Open.** Confirm no calculator input, email, query parameter, or user identifier is sent to Google ad requests or analytics. Configure and deploy a Google-certified consent-management platform where legally required before serving personalized ads to affected visitors.                                                                              |
| Identifying users                 | Do not pass personally identifiable information to Google or merge PII with non-PII without robust notice and prior opt-in.                                                                                                   | Calculator UI is client-side. Contact and third-party scripts must be reviewed before launch.                                                                                                                                                      | **Open.** Verify contact-form transport and analytics configuration. Do not include email, name, sensitive calculator inputs, or other PII in event names, URLs, ad targeting, or analytics parameters.                                                                                                                                                     |
| Content and intellectual property | Do not monetize illegal, infringing, deceptive, unsafe, or otherwise prohibited content.                                                                                                                                      | Brand-oriented pages exist for products/services such as Affirm and Avalara.                                                                                                                                                                       | **Open.** Maintain clear non-affiliation notices, use trademarks descriptively, avoid product logos without permission, and fact-check time-sensitive financial/tax information. Remove any copied imagery or content without permission.                                                                                                                   |
| Search spam standards             | Ads cannot be placed on pages that violate Google Search spam policies.                                                                                                                                                       | Large global keyword lists include competitor, local-intent, and unrelated terms.                                                                                                                                                                  | **Open.** Remove keyword targeting that the page cannot satisfy. Do not create scaled pages for ZIPs, cities, spelling variations, or brands without unique utility/data. Review all indexable pages for thin, duplicate, or doorway-like content.                                                                                                          |
| Better Ads Standards              | Ad experiences must comply with the Better Ads Standards.                                                                                                                                                                     | The code contains a potential fixed bottom placement.                                                                                                                                                                                              | **Open.** Keep ads non-intrusive, avoid interstitial/pop-up formats, and run mobile/desktop visual reviews before enabling ads.                                                                                                                                                                                                                             |

### 0.0.1 Immediate remediation order

Do these before checking the “I confirm I have fixed the issues” box in AdSense:

1. Verify every public identity, credential, image, contact address, operating-hour claim, and editorial-review claim. Remove or accurately rewrite any claim that cannot be supported.
2. Correct the privacy policy to disclose actual Google AdSense/Analytics behavior and add a consent solution where required.
3. Keep the fixed bottom ad disabled; do not add any new ad units while the site is rejected for low value.
4. Audit all indexable calculator and blog pages. Noindex or consolidate pages that fail the Phase 4 quality rubric, then rebuild and regenerate the sitemap.
5. Upgrade a limited number of high-demand calculator clusters with unique tools, sources, worked examples, limitations, and original supporting articles.
6. Deploy the site, complete ownership verification, and manually check the production version on mobile and desktop.
7. Request a new AdSense review only when every checkbox in the pre-submission list is true.

### 0.0.2 Privacy policy remediation specification

The current `No Cookies Policy` heading is potentially misleading because the site loads Google AdSense globally and conditionally loads Google Analytics. Replace it with an accurate explanation of first-party and third-party technologies after confirming the production configuration.

The approved replacement must state, in plain language:

- whether the site itself sets first-party cookies and what local-storage preferences it saves;
- that Google and other third-party vendors may use cookies, web beacons, IP addresses, or other identifiers to deliver, measure, and limit ads or analytics;
- what Google AdSense and Google Analytics are used for on the site;
- the link to `https://www.google.com/policies/privacy/partners/`;
- available advertising controls, including Google Ads Settings;
- a contact method for privacy requests that is actively monitored;
- the policy effective date and a process for material updates.

Do not say that data is “anonymous,” “aggregated only,” “never stored,” or “never shared” unless that is technically and contractually true for every deployed script and integration.

### 0.0.3 Pre-submission checklist

All items must be true before resubmission:

- [ ] The production home page passes ownership verification in AdSense.
- [ ] `https://infinixcalculator.com/ads.txt` is reachable and contains the exact authorized seller entry.
- [ ] Privacy policy matches the actual deployed AdSense, Analytics, local storage, contact form, and consent behavior.
- [ ] A legally appropriate consent-management flow is configured and tested for visitors where consent is required.
- [ ] No PII or sensitive calculator input is sent to Google ad or analytics services.
- [ ] No ads cover, push away, imitate, or sit beside calculator inputs, results, menus, links, or primary buttons.
- [ ] The sticky bottom ad remains inactive unless a separately approved mobile UX test passes.
- [ ] Every published author, credential, image, business claim, support email, and editorial process is accurate and supportable.
- [ ] Each indexable page provides a useful, working, topic-specific calculator or substantial original article content.
- [ ] Thin, duplicate, copied, unfinished, and misleading pages are noindexed, consolidated, or substantially improved.
- [ ] No copyrighted text, images, logos, or Reddit posts are reused without permission or meaningful original commentary.
- [ ] `npm run build` and `npm run sitemap` pass after changes that affect routes or indexing.
- [ ] Production mobile and desktop reviews pass for the homepage, calculator index, five priority calculators, three blogs, privacy, contact, and all legal pages.

### 0.0 Community research evidence queue

The following community discussions were supplied as qualitative research for the AdSense remediation work:

- https://www.reddit.com/r/passive_income/comments/1po1i2a/has_anyone_here_used_monetag_and_did_it_actually/
- https://www.reddit.com/r/Blogging/comments/1hoc0hm/why_i_left_adsense_removed_ads_code_and_joined/
- https://www.reddit.com/r/Adsense/comments/1tye86n/i_dont_understand_how_the_adsense_approval_system/
- https://www.reddit.com/r/Adsense/comments/1n3ij4g/why_cant_i_get_my_website_approved/
- https://www.reddit.com/r/SocialMediaMarketing/comments/1ebcum9/ditch_adsense_for_adcash_and_monetag_game_changers/
- https://www.reddit.com/r/adops/comments/1v9r4zd/nearly_1m_organic_search_clicks_but_my_adsense/
- https://www.reddit.com/r/adops/comments/1epsw49/alternative_to_adsense_for_a_small_website/
- https://www.reddit.com/r/Adsense/comments/1r6keeh/adsense_approved_my_site_with_almost_zero_traffic/
- https://www.reddit.com/r/Blogging/comments/1ktijop/website_with_15k_organic_monthly_traffic_rejected/
- https://www.reddit.com/r/Adsense/comments/1w9gpys/that_good_news_or_bad_news_adsense_email_from/

These sources may reveal recurring publisher experiences, but they do not establish Google policy, approval criteria, or a guaranteed path to approval. Do not copy their content into the site or use them as factual citations.

For every proposed action drawn from community discussion, record:

| Community observation                                 | Official policy/source checked                      | Site-specific evidence                                   | Decision                                |
| ----------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- | --------------------------------------- |
| Example: publishers report a fixed ad harms usability | Google AdSense content and user experience guidance | Mobile test shows bottom ad obscures calculator controls | Remove or retain with documented reason |

Use Google AdSense Program Policies, the AdSense content/user-experience guidance, and Google Search spam policies as the authority for approval-related decisions. Community suggestions to switch to an alternative ad network are out of scope until the site’s content quality, trust, and user experience are independently acceptable.

### 0.1 Complete AdSense ownership verification

**Owner action required:** obtain the exact verification value from AdSense and set it in the production hosting environment:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=verification-value-from-google
```

The application reads this variable in `app/metadata.ts`. After deployment, inspect the rendered homepage source and confirm that it contains a Google site-verification meta tag with the expected value.

**Acceptance checks**

- The production homepage returns HTTP 200.
- The Google verification meta tag is rendered on the deployed page.
- The ownership check succeeds in AdSense.
- `https://infinixcalculator.com/ads.txt` is public and includes `pub-3431842904505869`.

### 0.2 Reduce ad-related user-experience risk

Review whether the fixed bottom ad is active in production. It reserves substantial screen space and can obscure content, especially on mobile. Ads must never make the primary calculator, navigation, legal links, or article content difficult to reach.

**Proposed decision:** remove the fixed/sticky bottom ad globally and use only clearly separated in-content or footer ad placements after pages contain substantial original content.

**Acceptance checks**

- On a 360px-wide mobile viewport, inputs, results, and the primary action remain visible without closing an ad.
- Ads have a visible `Advertisement` label and adequate separation from navigation and buttons.
- No accidental-click placement is present near inputs, results, or primary actions.

### 0.3 Audit indexability and deployment health

Review the production domain, rather than only local builds.

- Confirm canonical URLs are self-referential and use HTTPS.
- Submit the current sitemap after deployment and check that it contains only canonical, indexable pages.
- Check Search Console Page Indexing for duplicates, crawled-not-indexed URLs, soft 404s, and server errors.
- Use Rich Results Test for the highest-priority calculator pages. FAQ schema must exactly match visible FAQs.
- Confirm images referenced by blog posts and site metadata load successfully.

## Phase 1: P0 CTR Improvements

Apply one grouped improvement at a time and measure it for at least 28 days before drawing conclusions.

### 1.1 Mortgage Calculator Games

**Target terms**

- Primary: `mortgage calculator games`, `mortgage calculator game`
- Secondary: `mortgage calculator games f1`, `mortgage calculator games drift`, `mortgage calculator games car`, `mortgage calculator unblocked games`, common misspellings only where naturally included in metadata or supporting copy

**Current concern**

The page earns extensive impressions but a 0.7% CTR at position 7.7. At this position, the search result needs to make the actual playable experience immediately obvious and accurately represent what the page provides.

**Implementation scope**

- Audit the game’s first-screen state on desktop and mobile: it must load promptly and be usable without scrolling through promotional copy.
- Ensure game modes shown in title/description actually exist and work.
- Add a concise, original explanation of what each mode teaches about payment term, interest, and extra-payment tradeoffs.
- Add screenshots or distinct game visuals only if they depict the real interface and do not slow the page excessively.
- Do not target games that the page does not actually offer.

**Success signal**

Increase CTR from 0.7% toward 1.5% or higher without a material position decline. At current impressions, each 0.1 percentage-point CTR improvement is approximately seven additional clicks per comparable period.

### 1.2 Affirm Payment Calculator

**Target terms**

- Primary: `affirm calculator`, `affirm payment calculator`, `affirm monthly payment calculator`
- Secondary: `affirm payment plans calculator`, `affirm apr calculator`, `affirm interest calculator`, `estimate affirm payments`, `affirm early payoff calculator`

**Implementation scope**

- Provide explicit scenario controls: purchase amount, APR, loan term, down payment, payment-plan type, and optional early payoff.
- Make assumptions visible near results: estimates only, provider offers vary, taxes/shipping can change the financed amount, and users should confirm terms at checkout.
- Add a comparison table for 0% APR, interest-bearing installment financing, and Pay in 4 only when formulas and terminology are accurate.
- Expand FAQs with questions visible on the page, including whether payment plans or approval terms vary by purchase and shopper.
- Maintain the independent, non-affiliation disclaimer.

**Content-quality requirement**

Do not state whether a specific lender always reports to credit bureaus or always affects credit scores unless current, verifiable, and carefully scoped. Avoid definitive claims where product terms may change.

### 1.3 Avalara Sales Tax Calculator

**Target terms**

- Primary: `avalara sales tax calculator`, `avalara tax calculator`, `avalara tax rate lookup`
- Secondary: `avalara sales tax lookup by address`, `avalara tax rates by zip code`, specific ZIP rate queries

**Implementation scope**

- Verify whether the tool actually performs ZIP/address rate lookup. If it only accepts a manually entered rate, remove “lookup” language from metadata and visible claims.
- If lookup data is supported, display the source, retrieval date, and a clear notice that rates can change and may depend on exact address/jurisdiction.
- If lookup data is not supported, position it as a sales-tax estimate and reverse-tax calculator; do not imply affiliation or live Avalara data.
- Keep the independent-brand disclaimer close to the calculator.

**Success signal**

Improve CTR from roughly 0.5% at position 9.4 while monitoring query-level clicks for high-impression ZIP and lookup terms.

## Phase 2: CBM Topic Hub and Supporting Article

### 2.1 Canonical calculator hub

The calculator at `/calculators/cbm` should remain the single canonical destination for dimensions-to-CBM conversion. Do not create separate pages for every spelling or unit permutation.

**Target terms**

- `cbm calculator`, `cubic meter calculator`, `cubic metres calculator`
- `how to calculate cbm`, `how to calculate cbm from dimensions`
- `cm to cbm`, `mm to cbm`, `inches to cbm`, `cbm calculator in inches`
- `cbm formula`, `cbm calculation formula`, `total cbm`, `1 cbm size`

**Remaining implementation ideas**

- Add an optional input mode for multiple different carton lines, not only a quantity of identical cartons.
- Show a downloadable/shareable calculation summary only if it works without collecting personal information.
- Add clear result labels for single-carton volume, total shipment volume, gross weight, and the difference between actual and dimensional weight.
- Cite neutral industry sources for standards or frame values as carrier-dependent rather than universal.

### 2.2 Proposed supporting blog

**Working title:** `How to Calculate CBM From CM, MM, Inches, and Shipping Dimensions`

**Canonical URL:** `/blog/how-to-calculate-cbm-from-dimensions`

**Purpose:** provide a detailed original learning resource that links to the calculator. It should not duplicate the calculator page word-for-word.

**Outline**

1. Direct answer and calculator link.
2. What CBM means and when it is used.
3. The universal formula in meters.
4. Separate worked examples for cm, mm, inches, and feet.
5. How to calculate total CBM for identical cartons and mixed shipments.
6. CBM versus cubic feet and CBM versus shipment weight.
7. Carrier chargeable-weight caveats and questions to ask a freight provider.
8. Common measurement errors: internal vs. external carton dimensions, omitted packaging, mixed units, and premature rounding.
9. Visible FAQs that answer search queries directly.
10. References section using primary or authoritative logistics sources where factual standards are discussed.

**Keyword use rule**

Use primary terms in the title, first paragraph, one heading where natural, image alt text where accurate, and FAQ questions. Do not repeat terms mechanically.

**Reddit-source workflow**

After you provide links, use them only to identify recurring real-world questions, edge cases, and terminology. The finished article must use original wording, attribute only direct quotations that are necessary and permitted, and rely on authoritative sources for factual claims.

**Required synchronized updates when approved**

- Add the blog record to `app/data/blogData.ts`.
- Add only missing target phrases to `app/data/keywords.ts`.
- Update the dedicated `app/data/faqs/cbmFaqs.ts` with contextual, link-rich visible FAQs.
- Assign the imported FAQs and appropriate keyword list in `app/data/calculatorsData.ts`.
- Run `npm run sitemap` to regenerate `public/sitemap.xml`.

## Phase 3: Resolve Overlap and Build Content Depth

### 3.1 Productivity and therapy productivity

Keep two distinct user journeys.

| Page                            | Intended audience                             | Must provide                                                                                                                    |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| General productivity calculator | Employees, managers, and teams                | output per person/hour/day, targets, daily averages, input units, transparent formula                                           |
| Therapy productivity calculator | PT, OT, SLP, PTA, and clinic operations users | billable minutes, shift duration, paid/unpaid lunch, documentation time, target percentage, clear clinical-workflow assumptions |

**Actions**

- Review titles, H1s, internal links, and FAQs so each page makes its audience unambiguous.
- Do not repeat identical content across the two pages.
- Add examples that use the exact inputs each audience recognizes.
- Monitor queries to see whether each URL receives the intended terms; adjust internal links before creating new pages.

### 3.2 Topsoil

Separate informational calculation intent from supplier/local intent.

**Target from the current site**

- `how much topsoil do i need`
- `topsoil coverage calculator`
- `how to calculate topsoil needed`
- `yards of soil calculator`
- `topsoil calculator for sod`
- cost-per-yard and bag-conversion questions where the page provides appropriate assumptions

**Deprioritize unless business reality changes**

- `topsoil near me`, `topsoil delivery near me`, `topsoil for sale near me`, and similar local purchase terms.

These queries often need a local supplier, service area, product availability, delivery terms, and real contact details. A calculator-only site should not imply it sells or delivers material.

**Actions**

- Audit title/description and remove local-commercial wording unless the business provides that service.
- Improve calculator results with cubic yards, cubic feet, bag equivalents, and a clearly explained waste/settling assumption.
- Expand original guides for lawn, sod, raised beds, and soil-depth decisions.

### 3.3 Construction calculators: concrete and roofing

Prioritize feature completeness before new content.

**Concrete requirements**

- Slab, footing, pad, and path shapes where supported.
- Cubic yards, cubic feet, and bag counts with a clearly stated bag-yield assumption.
- Waste factor that users can change.
- Separate material quantity from local price estimates unless live regional data is available.

**Roofing requirements**

- Roof area, pitch multiplier, waste, squares, bundle counts, and an explicit scope for gable/hip/complex roofs.
- A simple diagram or real interface image where it helps users understand measurement inputs.
- Content based on actual calculator capabilities, not competitor-brand query targeting.

## Phase 4: Sitewide Low-Value Content Audit

This is the most important phase for the AdSense review. The site should not publish a large number of pages that are only a similar form plus interchangeable paragraphs.

### 4.1 Audit every indexable calculator page

Use this rubric. A page that fails multiple mandatory items should be improved substantially or set to `noindex` until it is ready.

| Criterion            | Requirement                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| Unique function      | The calculator solves a specific problem with inputs and outputs that are meaningful for that problem. |
| Accurate model       | Formula, defaults, constraints, units, and result labels are testable and explained.                   |
| Original explanation | The page includes task-specific guidance, examples, assumptions, and limitations.                      |
| Intent match         | Title, H1, description, inputs, and content answer the same user question.                             |
| Distinct content     | It is not substantially duplicated from another calculator or generic template.                        |
| Trust signals        | Author/reviewer and relevant disclaimer are genuine, appropriate, and not fabricated.                  |
| UX quality           | The primary tool works on mobile, page load is reasonable, and ads do not interfere.                   |
| Internal links       | Relevant guides and related calculators are linked contextually, not simply in a generic list.         |

### 4.2 Content authenticity review

Review author biographies, credentials, images, and contact details. Do not represent fictional identities, credentials, institutional affiliations, professional licenses, or professional experience as real. Correct any inaccurate representation before an AdSense resubmission.

Review the editorial policy and author pages to ensure they describe actual editorial and review practices.

### 4.3 Consolidation rules

- Keep one canonical page per substantive task.
- Merge or redirect pages that only differ by a synonym when the calculator and answer are identical.
- Use `noindex` for unfinished, generic, duplicate, or low-utility pages rather than expanding them with keyword lists.
- Do not mass-produce city, ZIP, product-brand, or spelling-variant landing pages without genuinely distinct utility and verified data.

## Measurement Plan

Create a baseline CSV or spreadsheet before each phase. Track by canonical URL and query cluster.

| Metric                                     | Source                                   | Review cadence                                  |
| ------------------------------------------ | ---------------------------------------- | ----------------------------------------------- |
| Clicks, impressions, CTR, average position | Google Search Console Performance report | Weekly; compare 28-day windows                  |
| Indexed pages and coverage issues          | Search Console Page Indexing             | Weekly during cleanup                           |
| Core Web Vitals and mobile usability       | Search Console / PageSpeed Insights      | Before and after layout/ad changes              |
| AdSense review/ownership status            | AdSense                                  | After production verification and content audit |

Annotate every release with date, URL(s), changes, and the hypothesis being tested. Do not interpret normal daily variation as a ranking effect.

## Proposed Release Sequence

1. Complete production ownership verification and confirm `ads.txt`/meta-tag visibility.
2. Decide whether to remove the fixed bottom ad, then test mobile usability.
3. Deploy the completed CBM and CTR metadata changes.
4. Build and publish the CBM supporting blog after Reddit links and factual sources are reviewed.
5. Audit and improve the mortgage-game, Affirm, and Avalara first-screen experience.
6. Separate productivity versus therapy productivity intent and content.
7. Improve concrete and roofing tools/content; consolidate weak pages as identified.
8. Run a final sitewide quality review, then request AdSense review.

## Review Decisions Needed

Please mark each item with `approve`, `change`, or `defer` before implementation.

- [ ] Approve removal of the fixed bottom ad globally.
- [ ] Approve using the supplied Reddit discussions only as qualitative research, with Google policy as the final authority.
- [ ] Confirm whether the site has a real business address, support contact, and an actual editorial/review process that can be accurately published.
- [ ] Confirm whether the author identities, credentials, and biographies are factual and may remain published as written.
- [ ] Confirm whether the Avalara page has access to a current, licensed ZIP/address rate data source. If not, approve reframing it as a manual estimate tool.
- [ ] Approve the CBM article title and outline.
- [ ] Provide the Reddit links for CBM research.
- [ ] Choose the next cluster after CBM: mortgage games, Affirm, Avalara, productivity, concrete, or roofing.
- [ ] Approve a full calculator-page quality audit and `noindex` recommendation list before any pages are removed from search.

## Validation Required for Every Approved Batch

1. Run `npm run build`.
2. Run `npm run sitemap` whenever URLs are added or removed.
3. Check the deployed canonical URL, page title, meta description, visible H1, calculator behavior, FAQs, and structured data.
4. Test desktop and mobile layouts, especially calculator inputs/results and ad proximity.
5. Record the release in the measurement baseline before evaluating its effect.
