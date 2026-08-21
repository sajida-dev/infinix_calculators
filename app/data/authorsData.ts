export interface AuthorSocials {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

export interface Author {
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

export const authorsData: Record<string, Author> = {
  "david-miller": {
    slug: "david-miller",
    name: "David Miller, CPA",
    jobTitle: "Lead Financial Analyst & Tax Technology Editor",
    credentials: "CPA, M.S. Finance (NYU Stern)",
    location: "New York, NY",
    tagline: "Financial Precision Crafting Growth",
    quote: "Precision modeling is the bedrock of fiscal strategy. We turn volatile tax rules, APR structures, and merchant interchange equations into transparent, actionable calculators.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "David is a Certified Public Accountant (CPA) with over 14 years of corporate tax, loan amortization modeling, and merchant processing cost accounting experience.",
    fullBio: [
      "David Miller is a Certified Public Accountant (CPA) and veteran financial modeler. Prior to joining Infinix Calculators as Lead Financial Editor, David spent over a decade advising e-commerce enterprises, multi-state retailers, and tech startups on sales tax nexus compliance, payroll gross-up structures, and credit card processing fee mitigation.",
      "At Infinix Calculators, David oversees the mathematical accuracy of all financial calculators, including Buy Now Pay Later (BNPL) installment interest engines, reverse merchant processing fee equations, and mortgage amortization algorithms.",
      "His technical articles on sales tax sourcing, payroll bonus withholding formulas, and payment processor interchange math have helped thousands of small business owners protect their profit margins."
    ],
    education: [
      "M.S. in Accounting & Taxation – NYU Stern School of Business",
      "B.S. in Corporate Finance – University of Illinois Urbana-Champaign",
      "Certified Public Accountant (CPA) – Licensed in Illinois & New York"
    ],
    expertise: [
      "Loan Amortization & BNPL APR Modeling",
      "Payment Processing Interchange & Gross-Up Math",
      "US Multi-State Sales Tax (Origin vs Destination)",
      "Payroll Tax Withholding & Bonus Gross-Ups",
      "Commercial Mortgage & HELOC Payoff Structures"
    ],
    reviewedCategories: [
      "Financial Calculators",
      "Tax & Payroll Calculators",
      "Merchant & Invoicing Tools"
    ],
    email: "david.miller@infinixcalculator.com",
    linkedinUrl: "https://www.linkedin.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:david.miller@infinixcalculator.com"
    }
  },
  "elena-rostova": {
    slug: "elena-rostova",
    name: "Elena Rostova, P.E.",
    jobTitle: "Senior Construction Estimator & Materials Engineer",
    credentials: "P.E., M.S. Civil Engineering (Georgia Tech)",
    location: "Atlanta, GA",
    tagline: "Architectural Precision Crafting Dreams",
    quote: "Innovation is the lifeblood of our narrative, propelling us forward as we embrace cutting-edge technologies and methodologies to push the boundaries of what's possible.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Elena is a licensed Professional Engineer (P.E.) specializing in structural volume estimation, soil compaction physics, and bulk materials logistics.",
    fullBio: [
      "Elena Rostova is a licensed Professional Engineer (P.E.) and construction cost consultant with 12+ years of field experience in civil infrastructure, commercial grading, and residential landscape engineering.",
      "Elena leads the Engineering & Materials calculation desk at Infinix Calculators. She formulates and peer-verifies our algorithms for topsoil cubic yardage, concrete slab load volume, roof rafter pitch coverage, and ocean freight CBM volumetric weight conversions.",
      "She is passionate about eliminating material waste on construction sites by providing contractors and DIY homeowners with mathematically precise volume, waste-factor, and bag-count estimators."
    ],
    education: [
      "M.S. in Civil & Environmental Engineering – Georgia Institute of Technology",
      "B.S. in Structural Engineering – Purdue University",
      "Licensed Professional Engineer (P.E.) – National Council of Examiners (NCEES)"
    ],
    expertise: [
      "Topsoil & Aggregates Volumetric Calculations",
      "Soil Compaction & Settling Margins (10-15% Buffers)",
      "Concrete Slab, Footing & Bag Estimations",
      "Roofing Slope, Pitch & Shingle Square Conversions",
      "CBM Logistics & Freight Density Weight Math"
    ],
    reviewedCategories: [
      "Construction & Materials",
      "Landscaping & Grading",
      "Logistics & Unit Converters"
    ],
    email: "elena.rostova@infinixcalculator.com",
    linkedinUrl: "https://www.linkedin.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:elena.rostova@infinixcalculator.com"
    }
  },
  "marcus-vance": {
    slug: "marcus-vance",
    name: "Dr. Marcus Vance, Ph.D.",
    jobTitle: "Lead Mathematician & Psychometric Systems Editor",
    credentials: "Ph.D. Applied Mathematics (MIT)",
    location: "Boston, MA",
    tagline: "Mathematical Modeling Decoding Systems",
    quote: "Rigorous quantitative formulation transforms raw uncertainty into predictable foresight, equipping educators, learners, and evaluators with trusted metrics.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Vance is a research mathematician and psychometric modeler specializing in standardized test scoring distributions, inverse trigonometry, and algebraic weighted averages.",
    fullBio: [
      "Dr. Marcus Vance holds a doctorate in Applied Mathematics and has published numerous research papers on psychometric test equating, weighted rating distributions, and applied numerical analysis.",
      "At Infinix Calculators, Dr. Vance oversees the algorithmic architecture of our educational and mathematical tools, including the LSAT raw-to-scaled score conversion engines, law school admissions prediction algorithms, and online rating recovery formulas.",
      "He ensures all formula derivations, boundary condition limits, and conversion constants strictly adhere to published peer-reviewed mathematical standards."
    ],
    education: [
      "Ph.D. in Applied Mathematics – Massachusetts Institute of Technology (MIT)",
      "B.S. in Mathematics & Statistics – University of Michigan, Ann Arbor"
    ],
    expertise: [
      "Psychometric Equating & LSAT Scoring Curves",
      "Weighted Star Rating Math (Google Review Calculus)",
      "Inverse Trigonometric Algorithms & Radians",
      "Probabilistic Admissions Predictor Models",
      "Logarithmic & Exponential Growth Math"
    ],
    reviewedCategories: [
      "Education & Admissions",
      "Mathematics & Geometry",
      "Reputation & Rating Calculators"
    ],
    email: "marcus.vance@infinixcalculator.com",
    linkedinUrl: "https://www.linkedin.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:marcus.vance@infinixcalculator.com"
    }
  },
  "sarah-jenkins": {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins, MS, OTR/L",
    jobTitle: "Clinical Operations Specialist & Productivity Lead",
    credentials: "MS, OTR/L, Healthcare Systems Management",
    location: "Philadelphia, PA",
    tagline: "Clinical Operations Empowering Care",
    quote: "Sustainable healthcare systems thrive when operational metrics align with high clinical standards, empowering therapists to deliver uncompromised patient care.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Sarah is a healthcare operations consultant with 11 years of experience optimizing Skilled Nursing Facility (SNF) clinical productivity metrics and time allocation.",
    fullBio: [
      "Sarah Jenkins is a licensed occupational therapist (OTR/L) and healthcare operations specialist. She has served as Director of Rehabilitation across multiple regional healthcare networks, managing clinical time allocations, CMS billing compliance, and staff productivity benchmarks.",
      "Sarah created the standardized clinical productivity framework used in Infinix's Therapy Productivity Calculator. She writes and reviews guides on ethical productivity targets, non-billable documentation management, and SNF operational efficiency.",
      "Her work advocates for sustainable clinical workflows that balance high therapy standards with regulatory documentation requirements."
    ],
    education: [
      "M.S. in Occupational Therapy & Healthcare Systems – Boston University",
      "B.S. in Kinesiology & Exercise Science – Penn State University"
    ],
    expertise: [
      "SNF Clinical Productivity Benchmarks",
      "Direct Care vs Non-Billable Time Calculations",
      "Lunch Break & Documentation Time Deductions",
      "Body Mass Index (BMI) Clinical Screening Indicators",
      "Staff Utilization & Efficiency Modeling"
    ],
    reviewedCategories: [
      "Health & Clinical Productivity",
      "Operations & Time Management",
      "Fitness & Screening Tools"
    ],
    email: "sarah.jenkins@infinixcalculator.com",
    linkedinUrl: "https://www.linkedin.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sarah.jenkins@infinixcalculator.com"
    }
  }
};

export function getAuthorBySlug(slug?: string): Author {
  if (slug && authorsData[slug]) {
    return authorsData[slug];
  }
  return authorsData["david-miller"]; // Default authoritative fallback
}

export function getAuthorForCategory(category: string): Author {
  const cat = category.toLowerCase();
  if (cat.includes("construction") || cat.includes("landscaping") || cat.includes("material") || cat.includes("logistics") || cat.includes("cbm")) {
    return authorsData["elena-rostova"];
  }
  if (cat.includes("education") || cat.includes("lsat") || cat.includes("math") || cat.includes("review")) {
    return authorsData["marcus-vance"];
  }
  if (cat.includes("health") || cat.includes("productivity") || cat.includes("therapy")) {
    return authorsData["sarah-jenkins"];
  }
  return authorsData["david-miller"];
}

export function getAllAuthors(): Author[] {
  return Object.values(authorsData);
}
