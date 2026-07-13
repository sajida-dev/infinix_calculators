# SEO & Topsoil Calculator Enhancement

**Goal**: Boost site SEO by adding `Llms.txt`, displaying the Topsoil Calculator on the home page, and cleaning broken footer links.

## User Review Required

- **Location of `Llms.txt`**: Should it be placed in the `public` folder (served at `/Llms.txt`) or at the project root?
- **Content of `Llms.txt`**: Do you want a brief description/keyword list now, or placeholder text to fill later?

## Open Questions

- Any specific URLs in the footer that need replacement with alternatives?
- Should we add `rel="nofollow"` to any external links?

## Proposed Changes

---
### SEO File

- **[NEW]** `public/Llms.txt`
  ```
  # Infinix Calculators SEO Keywords
  topsoil calculator, construction calculators, business calculators, finance calculators, free online calculators, landscaping calculators, tax calculators, CBM calculator, affirm calculator, roof calculator, grout calculator, drywall calculator, mulch calculator
  ```

---
### Home Page (`app/page.tsx`)

- **[MODIFY]** `app/page.tsx`
  - Import the Topsoil Calculator component.
  - Insert a new section after the main header showcasing the calculator with a heading like "Topsoil Calculator – Our Most Popular Tool".

---
### Footer Link Cleanup (`app/components/Footer.tsx`)

- **[MODIFY]** `app/components/Footer.tsx`
  - Identify links that return 404 (e.g., placeholder `href="#"` or outdated routes).
  - Remove or replace them with valid URLs.
  - Add a comment `/* TODO: replace with updated URL */` where replacement is pending.

---
## Verification Plan

### Automated Tests
- Run `npm run dev` and ensure the dev server compiles without errors.
- Verify that `/Llms.txt` is accessible via the browser.
- Confirm the Topsoil Calculator appears on the home page and functions.
- Check the footer renders without broken link warnings.

### Manual Verification
- Open the site in a browser, navigate to the home page, and look for the new Topsoil Calculator section.
- Click each footer link to ensure they resolve correctly.
- Optionally run an SEO audit tool (e.g., Lighthouse) to see the impact of `Llms.txt`.
