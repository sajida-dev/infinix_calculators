# Production-Grade Calculators Suite — Implementation Plan

Add a modern, interactive, and SEO-optimized **Calculators Hub & Engine** covering all **78 target keyword phrases** (and all their variations) provided in the prompt.

## Goal Description

Build a high-performance, multi-category Calculators Hub integrated into `JStudio` (`JStudio/src/routes/calculators`). The suite will include interactive calculators, visual breakdown charts, real-time formula computation, category filters, instant search, pre-populated presets, export/print capabilities, and comprehensive SEO schema markup for every calculator keyword.

---

## Target Keyword Coverage & Calculators Architecture

Every keyword from the prompt is explicitly categorized and powered by specialized interactive calculator engines:

### 1. Finance, Mortgages, Loans & Investments (30 Keywords)
- **Mortgages by State**: `mortgage calculator alabama`, `mortgage calculator wi`, `mortgage calculator ct`, `mortgage calculator oklahoma`, `mortgage calculator ga`, `mortgage calculator georgia`, `mortgage calculator washington state` (Includes local property tax & insurance rates).
- **Specialty Mortgages & Loans**: `mobile home mortgage calculator` (Chattel vs real property rates), `naca mortgage calculator` (0% down, 0 closing costs, buy-down points), `parent plus loan calculator` (Origination fees & repayment plans), `hecm calculator` (Reverse mortgage equity borrowing limit).
- **HELOC Calculators**: `interest only heloc calculator`, `heloc payoff calculator`, `heloc interest only calculator` (Draw period vs repayment interest schedule).
- **Mortgage Recast & Comparison**: `mortgage recast calculator`, `recast mortgage calculator`, `mortgage comparison calculator` (Principal reduction recast savings).
- **Closing Costs & Real Estate**: `seller closing cost calculator`, `closing cost calculator for seller` (Net sheet with commissions, title, and transfer taxes), `rental profit calculator` (Cap rate, NOI, Cash-on-cash return), `price per sqft calculator`.
- **Debt & Credit**: `pay off credit card calculator`, `credit card calculator` (Minimum payment vs fixed payoff timeline).
- **Savings & CDs**: `money market rate calculator`, `money market interest calculator`, `cd calculator interest`, `cd rate calculator`, `cd interest rates calculator`, `calculate cd interest`, `normal cd calculator` (Compound growth & APY returns).
- **Retirement & Annuities**: `edward jones retirement calculator`, `roth vs traditional 401k calculator`, `roth or 401k calculator`, `roth 401k calculator`, `72t calculator` (SEPP early withdrawal penalty exemption), `sep ira calculator`, `deferred annuity calculator`, `cash value life insurance calculator`, `iul calculator` (Indexed universal life growth with caps/floors).
- **Investment & Banking**: `investment calculator with withdrawals` (Retirement drawdown rate), `lease buyout calculator` (Car lease equity & tax calculation), `fdic calculator` (Deposit insurance coverage across account ownership types), `stock price calculator`, `price elasticity calculator`, `pro rata calculator`.

### 2. Tax, Payroll, & E-Commerce (23 Keywords)
- **State & Local Sales Taxes**: `tennessee tax calculator`, `alabama tax calculator`, `utah sales tax calculator`, `tn sales tax calculator`, `sales tax calculator missouri`, `calculate missouri sales tax on car`, `missouri auto sales tax calculator`, `colorado tax calculator`, `tax calculator michigan`, `tax calculator colorado`, `ohio sales tax calculator`, `mn sales tax calculator`, `massachusetts tax calculator`, `mo sales tax calculator`, `wisconsin tax calculator`, `tax calculator maryland`, `avalara sales tax calculator`.
- **Paycheck & Deductions**: `take home pay calculator florida`, `florida pay calculator`, `gross up calculator` (Net-to-gross pay conversion), `schedule 1 calculator` (Tax adjustments & deductions).
- **E-Commerce & Freight**: `ebay sales calculator` (Category fees & profit margin), `square fee calculator` (In-person 2.6%+10c vs online 2.9%+30c), `affirm calculator` (Buy now pay later installment schedule), `cbm calculator` (Cubic meters & volumetric freight weight), `gamestop trade in calculator` (Trade-in cash vs store credit value estimator).

### 3. Construction, Building & Home Improvement (15 Keywords)
- **Hardscaping & Aggregates**: `asphalt driveway cost calculator` (Tonnage & square feet cost), `mulch calculator` (Cubic yards & 2 cu ft bags needed), `concrete calculator slab` (Slab volume in yards & 80lb bags), `grout calculator` (Tile size & joint width coverage).
- **Fencing & Framing**: `fence cost calculator`, `wood fence calculator` (Pickets, posts, rails, concrete), `deck building calculator` (Joists, boards, footings), `sheetrock calculator` (4x8/4x12 drywall sheets & compound), `stairs run and rise calculator` (Stair riser height & stringer length according to IRC code).
- **Roofing & HVAC**: `roof calculator`, `shingle roof calculator` (Roof pitch multiplier & shingle bundles), `blown in insulation calculator` (R-value coverage & bag count), `air duct calculator`, `air duct design calculator` (CFM & duct diameter sizing).
- **Pools & Displays**: `pool gallons calculator`, `pool chemical calculator` (Water volume in gallons + chlorine/pH balance dosing), `screen dimension calculator` (16:9/21:9 diagonal to width/height/area), `house construction cost calculator`.

### 4. Health, Fitness & Food (8 Keywords)
- **Nutrition & Calories**: `calculate starbucks calories`, `starbucks calories calculator`, `starbucks calorie calculator` (Interactive drink customizer with sizes, milk, syrups, toppings), `keto macro calculator`, `keto meal calculator` (Net carbs, fat, protein target), `raw dog food calculator` (Daily raw meat, bone, organ ratio for dogs).
- **Fitness & Body**: `bench 1 rep max calculator` (Epley & Brzycki 1RM formulas), `tdee calculator to lose weight` (Total Daily Energy Expenditure & calorie deficit targets), `infant weight percentile calculator` (WHO growth chart percentiles), `abrathatfits calculator` (6-measurement bra size calculation).
- **Party & Events**: `alcohol calculator wedding`, `party booze calculator` (Wine, beer, spirits estimator by guest count & hours).

### 5. Energy, Metals & Mechanical (8 Keywords)
- **Utilities & Power**: `power cost calculator`, `energy bill calculator`, `energy cost calculator` (Appliance wattage x usage time x electricity rate).
- **Precious Metals**: `silver scrap calculator`, `silver price calculator`, `silver calculator`, `gold price per gram calculator`, `gold calculator scrap` (Live metal prices by gram, troy oz, pennyweight, & karat).
- **Transportation & Gears**: `taxi tariff calculator`, `taxi service calculator` (Base fare, distance & wait time pricing), `gear ratio calculator`, `bike gear ratio calculator` (Teeth ratio, gear inches, speed at cadence).

### 6. Academic, Math, Hardware & Aesthetic Calculators (22 Keywords)
- **Academic Testing**: `sat score calculator`, `sat calculator` (Digital SAT score scale 400-1600 from raw points), `ap calculator` (Composite points to 1-5 AP score).
- **Advanced Math & Sorting**: `critical point calculator`, `differential equations calculator` (Derivative roots & differential equation solvers with step-by-step math), `least to greatest calculator` (Sort decimals, fractions, negative numbers).
- **PC & Cloud Hardware**: `newegg power supply calculator`, `computer power calculator newegg` (CPU/GPU wattage estimator), `azure price calculator`.
- **Aesthetic Desktop Calculators**: `pink calculator`, `cute calculator`, `smart calculator` (Full interactive virtual desktop calculator with custom pastel pink/neon themes, memory, history, & key click sounds).
- **Scientific Calculator Emulators**: `ti-30x calculator`, `ti 84 plus silver edition calculator`, `texas instruments ti 30xs multiview scientific calculator`, `ti-36x pro calculator`, `titanium graphing calculator`, `used ti 84 calculator`, `calculator ti 84 used`, `4-function calculator`, `ten key calculator`, `non graphing calculator`, `walmart calculators`, `calculator phone`.
- **Utilities & Life**: `time clocks that calculate hours` (Employee shift hours with unpaid breaks & overtime), `cheating calculator` (Relationship honesty indicator), `calculate birth year from age`, `bill calculator` (Bill splitter with tip & itemization).

---

## Proposed Changes

### Component: Calculators Core & Route Integration

#### [NEW] [calculators.data.ts](file:///d:/Mern/projects/javedstudio-new/JStudio/src/data/calculators.data.ts)
- Comprehensive registry of all 78 keyword tools with metadata, category labels, icons, SEO descriptions, sample formulas, default parameters, and tags.

#### [NEW] [CalculatorEngines.tsx](file:///d:/Mern/projects/javedstudio-new/JStudio/src/components/calculators/CalculatorEngines.tsx)
- Modular interactive components implementing the precise math formulas for all categories (Mortgage, State Tax, Construction, Nutrition/Starbucks, Health/Fitness, Metals, Power, Aesthetic Pink/TI-84 Calculator, Math/Calculus, shift time clocks, etc.).
- Includes interactive controls: Sliders, Select dropdowns, Toggle switches, Recharts visual pie/bar charts, and clear summary cards.

#### [NEW] [calculators/index.tsx](file:///d:/Mern/projects/javedstudio-new/JStudio/src/routes/calculators/index.tsx)
- Main Calculators Hub landing page with:
  - Hero search bar with instant autocomplete.
  - Category pill filters (All, Finance, Tax & Payroll, Construction, Health & Food, Utilities, Math & Science, Aesthetic & Emulators).
  - Featured & popular keyword calculator grid.
  - Quick calculator modal / drawer for instant calculations directly on the hub.

#### [NEW] [calculators/$slug.tsx](file:///d:/Mern/projects/javedstudio-new/JStudio/src/routes/calculators/$slug.tsx)
- Individual calculator route rendering dedicated full-page interactive views with:
  - Dynamic page title and SEO meta descriptions matching the exact target keyword.
  - Live calculation engine with real-time recalculation.
  - Visual breakdown graphics (Recharts charts).
  - Formula explanations, FAQs, and structured JSON-LD schema markup for Google SERP rich results.
  - Related calculators sidebar and quick share/export options.

#### [MODIFY] [__root.tsx](file:///d:/Mern/projects/javedstudio-new/JStudio/src/routes/__root.tsx) / Header Navigation
- Add "Calculators" link to main site header navigation and footer.

---

## Verification Plan

### Automated Tests / Verification
- Run `npm run build` or `vite build` in `JStudio` to ensure clean TypeScript compilation and zero bundle errors.
- Verify TanStack router route generation (`routeTree.gen.ts`).

### Manual Verification
- Test interactive input changes across key calculator engines (e.g. Pink Calculator button presses, Starbucks calorie customizers, Mortgage state selectors, Square fee calculations, Tile/Grout dimensions, 1RM bench calculator, SAT score converter).
- Verify dark mode/light mode responsiveness and smooth visual aesthetics on desktop and mobile viewports.
