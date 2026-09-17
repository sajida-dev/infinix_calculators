import { FAQItem } from "../calculatorsData";

export const mortgageStateExpandedFaqs: FAQItem[] = [
  {
    question: "How do state property tax rates impact monthly mortgage payments in Alabama, Wisconsin, CT, and Oklahoma?",
    answer: "Property tax rates vary significantly by state. For instance, Alabama has one of the lowest effective property tax rates (~0.41%), while Wisconsin and Connecticut are higher (~1.73% to 2.15%). Your monthly mortgage payment includes principal, interest, state taxes, and homeowners insurance (PITI)."
  },
  {
    question: "What is the difference between a mobile home mortgage and a traditional home loan?",
    answer: "Mobile homes (manufactured homes) classified as personal property (chattel) carry chattel loan rates, whereas mobile homes permanently affixed to land qualify for real property FHA, VA, or conventional mortgages with lower interest rates."
  },
  {
    question: "What are NACA mortgage requirements and benefits?",
    answer: "NACA (Neighborhood Assistance Corporation of America) offers 0% down payment, 0 closing costs, 0 mortgage insurance (PMI), and below-market interest rates for qualified primary residence buyers."
  }
];

export const helocRecastFaqs: FAQItem[] = [
  {
    question: "How does an interest-only HELOC work during the draw period?",
    answer: "During the initial draw period (typically 10 years), your monthly HELOC payment covers only accrued interest on the drawn balance. Once the repayment period begins (usually 10-20 years), monthly payments rise as principal amortizes."
  },
  {
    question: "What is a mortgage recast vs refinancing?",
    answer: "A mortgage recast allows you to make a lump-sum principal payment while keeping your existing interest rate and loan term. The lender recalculates (re-amortizes) your monthly payment to lower it, whereas refinancing replaces your loan with a new rate and term."
  }
];

export const closingCostsAndCreditFaqs: FAQItem[] = [
  {
    question: "What seller closing costs are calculated on a real estate net sheet?",
    answer: "Seller closing costs typically range from 6% to 10% of the sale price. Key expenses include real estate agent commissions (4%-6%), owner's title insurance, transfer taxes, escrow fees, and outstanding property tax prorations."
  },
  {
    question: "How does paying off credit card debt affect interest savings?",
    answer: "Making fixed payments above the minimum balance drastically reduces interest costs and shortens your payoff timeline by accelerating principal reduction."
  }
];

export const savingsAndRetirementFaqs: FAQItem[] = [
  {
    question: "How is Certificate of Deposit (CD) interest calculated?",
    answer: "CD interest compounds either daily or monthly based on the annual percentage yield (APY). The total return is computed using A = P(1 + r/n)^(nt), where P is principal, r is rate, n is compounding frequency, and t is years."
  },
  {
    question: "What is a 72(t) SEPP withdrawal strategy?",
    answer: "IRS Rule 72(t) allows Substantially Equal Periodic Payments (SEPP) from qualified retirement accounts prior to age 59.5 without incurring the 10% early withdrawal penalty, provided payments continue for at least 5 years or until age 59.5."
  }
];

export const stateTaxAndPayrollFaqs: FAQItem[] = [
  {
    question: "How is sales tax calculated across states like Missouri, Utah, Tennessee, and Colorado?",
    answer: "State sales tax represents the base state rate plus local city/county taxes. For example, Tennessee has a high state sales tax (7% + local up to 2.75%), while Missouri charges 4.225% state tax plus local taxes."
  },
  {
    question: "What is a gross-up paycheck calculation?",
    answer: "A gross-up calculation determines the total gross pay required to yield a targeted net (take-home) pay after accounting for tax withholdings and deductions."
  }
];

export const constructionExpandedFaqs: FAQItem[] = [
  {
    question: "How do I calculate asphalt driveway tonnage?",
    answer: "Driveway asphalt is calculated by taking area (sq ft) x depth (inches) / 12 to get cubic feet, then multiplying by ~145 lbs/cu ft and dividing by 2,000 to convert to tons."
  },
  {
    question: "How many cubic yards of concrete are in a slab?",
    answer: "Concrete slab volume in cubic yards = (Length in feet x Width in feet x Thickness in inches / 12) / 27. Add 10% for waste."
  }
];

export const healthAndFoodExpandedFaqs: FAQItem[] = [
  {
    question: "How are Starbucks drink calories calculated?",
    answer: "Calories depend on beverage base (espresso, brewed coffee, tea, frappuccino), milk selection (whole, skim, oat, almond), syrup pumps (~20 calories per pump), and toppings (whips, cold foam)."
  },
  {
    question: "How do you calculate your bench press 1 Rep Max (1RM)?",
    answer: "The 1RM is estimated using standard formulas like Epley: 1RM = Weight x (1 + Reps / 30), or Brzycki: 1RM = Weight / (1.0278 - 0.0278 x Reps)."
  }
];

export const metalsAndPowerFaqs: FAQItem[] = [
  {
    question: "How is silver scrap value determined by weight and purity?",
    answer: "Scrap silver value = Weight (troy oz or grams) x Silver Purity (e.g., 92.5% for Sterling) x Current Silver Spot Price."
  },
  {
    question: "How is electricity cost calculated for home appliances?",
    answer: "Power cost = (Wattage x Hours used per day / 1000) x Electricity Rate per kWh x Days in billing period."
  }
];

export const academicAndEmulatorsFaqs: FAQItem[] = [
  {
    question: "How is Digital SAT score converted from raw correct answers?",
    answer: "Digital SAT scoring converts raw correct answers in Reading & Writing (54 questions) and Math (44 questions) into scaled scores between 200 and 800 per section using adaptive test scaling."
  },
  {
    question: "What features are included in virtual scientific calculator emulators (TI-84 / Pink Calculator)?",
    answer: "Virtual scientific calculators support standard arithmetic, trigonometric functions (sin, cos, tan), logarithmic functions (log, ln), exponents, memory recall, and custom aesthetic themes."
  }
];

export const cdRatesExpandedFaqs: FAQItem[] = [
  {
    question: "How is Certificate of Deposit (CD) interest and APY calculated?",
    answer: "CD returns are calculated using the compound interest formula: <code>A = P × (1 + r/n)^(n×t)</code>, where P is initial deposit, r is the stated nominal interest rate, n is compounding frequency (typically daily or monthly), and t is term in years. The Annual Percentage Yield (APY) reflects true annual compound earnings. Calculate exact returns using our free <a href=\"/calculators/cd-rates\">CD Rates & APY Calculator</a>."
  },
  {
    question: "What is a CD ladder and how does it protect against interest rate volatility?",
    answer: "A CD ladder divides your savings equally across multiple CDs with staggered maturity dates (e.g. 6-month, 1-year, 2-year, 3-year, and 5-year terms). As each CD matures, you can either access cash without early withdrawal penalties or reinvest at current market interest rates."
  },
  {
    question: "What are typical CD early withdrawal penalties?",
    answer: "Banks typically charge between 90 days to 365 days of simple interest for breaking a CD before its maturity date. For example, an early withdrawal on a 1-year CD usually forfeits 3 months of accrued interest."
  }
];

export const santylExpandedFaqs: FAQItem[] = [
  {
    question: "How is Santyl (collagenase) ointment dosage calculated per wound area?",
    answer: "Santyl ointment dosage is calculated using wound surface area: <code>Dosage (grams) = Length (cm) × Width (cm) × 0.04 g/cm²</code> (assuming a nickel-thick 2mm application layer). Apply once daily or with each dressing change. Estimate tube counts with our <a href=\"/calculators/santyl\">Santyl Dosage Calculator</a>."
  },
  {
    question: "How long does a 30g or 90g tube of Santyl last?",
    answer: "A standard 30-gram tube of Santyl provides approximately 30 daily applications for a 25 cm² (5cm × 5cm) wound bed. A 90-gram tube supports 90 daily applications for small wounds or 30 days for extensive 75 cm² ulcerations."
  }
];

export const brickExpandedFaqs: FAQItem[] = [
  {
    question: "How many standard modular bricks do I need per square foot of wall?",
    answer: "For standard US modular bricks (3-5/8″ W × 2-1/4″ H × 7-5/8″ L) with standard 3/8-inch mortar joints, you need <strong>6.55 bricks per square foot</strong> of single-wythe wall. Always add a 5% to 10% cutting and breakage allowance. Calculate exact brick counts with our <a href=\"/calculators/brick\">Brick Masonry Calculator</a>."
  },
  {
    question: "How many bricks are in a standard pallet or cube?",
    answer: "A standard pallet (cube) of US red clay face brick contains approximately <strong>500 to 530 bricks</strong> (covering approximately 75 to 80 square feet of wall surface)."
  }
];

export const bridgeLoanExpandedFaqs: FAQItem[] = [
  {
    question: "What is a bridge loan and how is monthly interest calculated?",
    answer: "A bridge loan is short-term financing (typically 6 to 12 months) used to purchase a new home before selling your current property. Monthly interest is calculated as: <code>Monthly Payment = (Loan Amount × Annual Interest Rate) ÷ 12</code>. Calculate costs with our <a href=\"/calculators/bridge-loan\">Bridge Loan Calculator</a>."
  },
  {
    question: "What are typical interest rates and lender origination fees for bridge loans?",
    answer: "Bridge loan rates typically range from <strong>8% to 12% APR</strong> (approx 2% to 4% above standard prime mortgage rates), with origination fees of <strong>1% to 3%</strong> of the total bridge loan amount."
  }
];

export const hardMoneyExpandedFaqs: FAQItem[] = [
  {
    question: "How are hard money loan payments and points calculated for fix-and-flips?",
    answer: "Hard money loans are asset-based, interest-only loans for real estate investors. Monthly payment is <code>(Loan Amount × Interest Rate) ÷ 12</code>, with upfront points calculated as <code>Loan Amount × (Points ÷ 100)</code>. Model your flip margin with our <a href=\"/calculators/hard-money\">Hard Money Loan Calculator</a>."
  }
];

export const vectorProductExpandedFaqs: FAQItem[] = [
  {
    question: "How is the cross product of two 3D vectors calculated?",
    answer: "For vectors A = (a₁, a₂, a₃) and B = (b₁, b₂, b₃), the cross product A × B = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁). The resulting vector is perpendicular (orthogonal) to both input vectors. Calculate 3D vectors instantly using our <a href=\"/calculators/vector-product\">Vector Product Calculator</a>."
  },
  {
    question: "What is the difference between dot product and cross product?",
    answer: "The dot product (A · B = |A||B|cos(θ)) yields a scalar number measuring alignment, while the cross product (A × B = |A||B|sin(θ) n) yields a vector perpendicular to both inputs whose magnitude represents the parallelogram area."
  }
];

export const buildersRiskInsuranceExpandedFaqs: FAQItem[] = [
  {
    question: "How is builders risk insurance cost calculated for construction projects?",
    answer: "Builders risk insurance (course of construction insurance) typically costs <strong>1% to 4% of total construction project value</strong> (excluding land cost), depending on structure type, construction timeline, fire protection, and location. Estimate premiums with our <a href=\"/calculators/builders-risk-insurance\">Builders Risk Insurance Calculator</a>."
  }
];

export const dynastyDaddyExpandedFaqs: FAQItem[] = [
  {
    question: "How does fantasy football dynasty trade value calculation work?",
    answer: "Dynasty fantasy football trade value models combine player age, positional scarcity, projected fantasy points over replacement (VORP), and draft pick value curves (Superflex vs 1QB) to balance multi-asset dynasty trades. Value your roster with our <a href=\"/calculators/dynasty-daddy\">Dynasty Trade Value Calculator</a>."
  }
];

export const retirement457ExpandedFaqs: FAQItem[] = [
  {
    question: "What is a 457(b) retirement plan and how does it differ from a 401(k)?",
    answer: "A 457(b) is a non-qualified tax-advantaged deferred-compensation retirement plan available to state and local government employees and select non-profit staff. Key advantage: unlike a 401(k), 457(b) withdrawals upon separating from service are <strong>exempt from the 10% early withdrawal penalty</strong> regardless of age."
  }
];

export const goldScrapExpandedFaqs: FAQItem[] = [
  {
    question: "How is scrap gold and scrap jewelry value calculated from karat purity?",
    answer: "Scrap gold value is computed as: <code>Value = Weight (grams) × (Karat ÷ 24) × Spot Price of Gold per Gram × Refiner Payout %</code> (typically 80% to 95%). For example, 14K gold contains 58.33% pure gold. Calculate gold scrap value with our <a href=\"/calculators/gold-scrap\">Gold Scrap Value Calculator</a>."
  }
];
