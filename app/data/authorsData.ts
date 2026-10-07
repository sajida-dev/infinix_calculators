export interface AuthorSocials {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

export interface Author {
  schemaType: "Person";
  slug: string;
  name: string;
  jobTitle: string;
  credentials: string;
  avatar: string;
  bio: string;
  fullBio: string[];
  education: string[];
  expertise: string[];
  reviewedCategories: string[];
  linkedinUrl?: string;
  email: string;
  location?: string;
  tagline?: string;
  quote?: string;
  socials?: AuthorSocials;
}

export const legacyAuthorSlugs: Record<string, string> = {
  "david-miller": "vaughn-mercer",
  "elena-rostova": "atlas-keller",
  "marcus-vance": "rowan-vance",
  "sarah-jenkins": "orion-mercer",
  "infinix-editorial-team": "ellison-grant",
  "finance-editorial-team": "vaughn-mercer",
  "construction-editorial-team": "atlas-keller",
  "math-editorial-team": "rowan-vance",
  "health-editorial-team": "orion-mercer",
};

export const authorsData: Record<string, Author> = {
  "ellison-grant": {
    schemaType: "Person",
    slug: "ellison-grant",
    name: "Ellison Grant",
    jobTitle: "Technology & 3D Printing Editorial",
    credentials: "",
    avatar: "/authors/Gemini_Generated_Image_xplw38xplw38xplw.jpg",
    bio: "Ellison Grant's editorial scope covers Infinix technology guides, calculator hardware, digital tools, and 3D printing cost estimates.",
    fullBio: [
      "Ellison Grant is the named editorial contact for technology and 3D printing content, including calculator hardware, digital-tool comparisons, print materials, electricity costs, and pricing assumptions. This profile describes assigned topic coverage, not an engineering credential or manufacturer affiliation.",
      "Printing estimates depend on material consumption, machine time, electricity prices, labor, and any failure allowance. Hardware features, testing rules, and product prices should be confirmed with the manufacturer or relevant official source.",
      "Editorial attribution does not establish independent product testing or professional certification. Questions and correction reports can be submitted through the contact page with the relevant article or calculator link.",
    ],
    education: [],
    expertise: ["Calculator hardware and digital tools", "3D printing material costs", "Electricity and machine-time estimates", "Print pricing assumptions"],
    reviewedCategories: [],
    email: "",
  },
  "vaughn-mercer": {
    schemaType: "Person",
    slug: "vaughn-mercer",
    name: "Vaughn Mercer",
    jobTitle: "Finance & Tax Editorial",
    credentials: "",
    avatar: "/authors/Gemini_Generated_Image_qz8kvjqz8kvjqz8k.jpg",
    bio: "Vaughn Mercer's editorial scope covers Infinix finance, tax, payroll, and payment-fee content. Estimates are educational and do not constitute financial or tax advice.",
    fullBio: [
      "Vaughn Mercer is the named editorial contact for loan payment scenarios, borrowing costs, sales tax, payroll estimates, and merchant fees. The role is editorial; this profile does not claim CPA licensing, financial-adviser registration, or lender affiliation.",
      "Financial results depend on the balance, rate, term, fees, and other assumptions entered. Tax and payment-provider rules can change; an estimate should be checked against official terms and the rules that apply to your situation.",
      "A category attribution is not a completed professional review. No degree, license, employer history, or individual endorsement is claimed here.",
    ],
    education: [],
    expertise: ["Loan payment scenarios", "Tax and payroll estimates", "Merchant processing fees", "Savings and retirement assumptions"],
    reviewedCategories: [],
    email: "",
  },
  "atlas-keller": {
    schemaType: "Person",
    slug: "atlas-keller",
    name: "Atlas Keller",
    jobTitle: "Construction & Materials Editorial",
    credentials: "",
    avatar: "/authors/Gemini_Generated_Image_oxoig3oxoig3oxoi.jpg",
    bio: "Atlas Keller's editorial scope covers Infinix material-volume, coverage, and construction planning content. Quantities and costs are estimates, not engineering specifications or supplier quotes.",
    fullBio: [
      "Atlas Keller is the named editorial contact for topsoil, concrete, roofing, material coverage, and freight-volume explanations. This editorial role does not imply professional engineering licensure or contractor certification.",
      "Material estimates depend on measured dimensions, units, depth, density, and any waste or settling allowance. Product instructions, site conditions, supplier packaging, and local prices can change the quantity or cost needed.",
      "The calculators do not replace structural design, a site inspection, or an approved project specification. Listing a tool in this editorial category does not claim that its formula has received professional engineering review.",
    ],
    education: [],
    expertise: ["Topsoil and aggregate volumes", "Concrete quantity estimates", "Roofing coverage", "Freight volume and unit conversions"],
    reviewedCategories: [],
    email: "",
  },
  "rowan-vance": {
    schemaType: "Person",
    slug: "rowan-vance",
    name: "Rowan Vance",
    jobTitle: "Mathematics & Education Editorial",
    credentials: "",
    avatar: "/authors/Gemini_Generated_Image_43lzf243lzf243lz.jpg",
    bio: "Rowan Vance's editorial scope covers Infinix mathematics, unit conversions, ratings, and educational scoring guides. No university or testing-agency affiliation is claimed.",
    fullBio: [
      "Rowan Vance is the named editorial contact for formulas, conversions, averages, rating scenarios, and educational score estimates. This profile describes topic coverage, not an academic degree or research career.",
      "Check the formula, units, rounding, and boundary conditions used by each tool. Test score conversions may depend on an exam-specific scale, while admissions estimates cannot predict an individual decision.",
      "No academic affiliation, research publication history, testing-agency endorsement, or independent specialist review is implied by the profile.",
    ],
    education: [],
    expertise: ["Mathematical formulas", "Unit conversions", "Averages and rating scenarios", "Educational score estimates"],
    reviewedCategories: [],
    email: "",
  },
  "orion-mercer": {
    schemaType: "Person",
    slug: "orion-mercer",
    name: "Orion Mercer",
    jobTitle: "Health & Productivity Editorial",
    credentials: "",
    avatar: "/authors/Gemini_Generated_Image_ax1zmoax1zmoax1z.jpg",
    bio: "Orion Mercer's editorial scope covers Infinix health-related estimates, time allocation, and productivity guides. The role is editorial, not clinical care or medical advice.",
    fullBio: [
      "Orion Mercer is the named editorial contact for work time, billable-time ratios, lunch deductions, and health-related planning estimates. This profile does not claim an occupational-therapy license, clinical practice, or healthcare consulting history.",
      "Productivity calculations depend on how worked time, breaks, billable activity, and documentation are defined. A calculated ratio is not a clinical standard, billing approval, or recommendation for patient care.",
      "Health-related outputs are educational estimates and must not be used as diagnosis or treatment advice. No clinical license, medical review, or professional practice history is claimed.",
    ],
    education: [],
    expertise: ["Work-time calculations", "Billable-time ratios", "Break and documentation assumptions", "Health estimate limitations"],
    reviewedCategories: [],
    email: "",
  },
};

export function getCanonicalAuthorSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  if (Object.hasOwn(authorsData, slug)) return slug;
  if (Object.hasOwn(legacyAuthorSlugs, slug)) return legacyAuthorSlugs[slug];
  return undefined;
}

export function getAuthorBySlug(slug?: string): Author {
  return authorsData[getCanonicalAuthorSlug(slug) ?? "ellison-grant"];
}

export function getAuthorForCategory(category: string, calculatorSlug?: string): Author {
  const cat = `${category} ${calculatorSlug ?? ""}`.toLowerCase();
  if (/technology|3d.print|calculator-hardware/.test(cat)) {
    return authorsData["ellison-grant"];
  }
  if (/construction|landscap|material|logistic|cbm/.test(cat)) {
    return authorsData["atlas-keller"];
  }
  if (/health|productivity|therapy/.test(cat)) {
    return authorsData["orion-mercer"];
  }
  if (/education|lsat|math|review|unit-converter/.test(cat)) {
    return authorsData["rowan-vance"];
  }
  if (/financ|tax|payroll|merchant/.test(cat)) {
    return authorsData["vaughn-mercer"];
  }
  return authorsData["ellison-grant"];
}

export function getAllAuthors(): Author[] {
  return Object.values(authorsData);
}
