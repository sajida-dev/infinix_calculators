# Implementation Plan - Infinix Calculators Header & Footer Redesign

Upgrade the Header and Footer components to match a modern, premium design with a sticky, blurred backdrop (glassmorphism) header, a clean white/gray layout, and a structured megamenu / footer using the primary accent color (`hsl(208, 88%, 47%)`) for highlights, text links, buttons, and shadows.

## Proposed Design Specs
- **Header**: Sticky/fixed position (`sticky top-0 z-50`), blurred white background (`bg-white/80 backdrop-blur-md border-b border-slate-200/80`), using the brand logo `/infinix-calculator-brand-logo.png`.
- **Calculators Dropdown**: A structured multi-column or category-based dropdown list containing categorized calculators based on the provided keywords (Financial, Tax & Payroll, Construction & Utility, Math & Productivity).
- **Footer**: A premium multi-column footer layout (white/light gray background) displaying branding, organized popular calculator links, newsletter subscription mockup, social icons, and legal pages.
- **Color Theme**: Accent color `hsl(208, 88%, 47%)` used for buttons, interactive highlights, focus states, and text hover effects. Backgrounds remain clean white or subtle gray (`bg-slate-50`).

---

## Proposed Changes

### Styling & CSS Customization
#### [MODIFY] [globals.css](file:///d:/Mern/projects/infinix/app/globals.css)
- Define custom Tailwind color variables or inline utilities for the primary accent color `hsl(208, 88%, 47%)` and custom box shadows.
- Add scroll behavior (`scroll-smooth`) and global body layout tweaks.

### Layout Integration
#### [MODIFY] [layout.tsx](file:///d:/Mern/projects/infinix/app/layout.tsx)
- Ensure the header, main content area, and footer layout handles a fixed/sticky header properly (e.g. adding appropriate padding/margin offsets).
- Set SEO meta tags based on the comprehensive keyword lists provided.

### Components
#### [MODIFY] [Header.tsx](file:///d:/Mern/projects/infinix/app/components/Header.tsx)
- Upgrade header to a modern glassmorphism navbar.
- Add structured categories and links for popular calculators in the dropdown submenu (e.g., Financial, Tax & Payroll, Construction, Productivity).
- Update navigation links: "Home", "Calculators" (dropdown), "Expand / Blog".

#### [MODIFY] [Footer.tsx](file:///d:/Mern/projects/infinix/app/components/Footer.tsx)
- Rebuild footer to use a premium multi-column layout.
- Column 1: Brand details (Logo, mission, copyright, social icons).
- Column 2: Popular Calculators (Affirm, CBM, Avalara, Pro Rata, HECM, etc.).
- Column 3: Tools & Construction (Grout, Roof, Fence, Mulch, Drywall, etc.).
- Column 4: Company & Legal (About, Blog, Terms of Service, Privacy Policy).

---

## Verification Plan

### Automated Verification
- Verify code compilation and startup using `npm run dev`.
- Inspect build/compilation logs.

### Manual Verification
- Verify header sticky behavior and glassmorphism backdrop blur on scroll.
- Test calculator dropdown visibility and layout responsiveness on mobile/desktop.
- Verify color applications for button highlights and text link states.
