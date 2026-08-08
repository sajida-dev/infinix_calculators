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
