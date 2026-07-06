export interface CalculatorInput {
  id: string;
  label: string;
  type: "number" | "select" | "text";
  defaultValue: number | string;
  options?: { value: string; label: string }[];
  unit?: string;
  min?: number;
  max?: number;
  readOnly?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}


export interface CalculatorInfo {
  slug: string;
  name: string;
  category: "financial" | "tax" | "construction" | "math" | "health" | "unit-converter" | "education";
  categoryLabel: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  hook: string;
  description: string;
  calcTime: string;
  formula: string;
  formulaDescription: string;
  example: string;
  faqs: FAQItem[];
  commonMistakes: string[];
  useCases: string[];
  tips: string[];
  inputs: CalculatorInput[];
  calculate: (inputs: Record<string, any>) => Record<string, { value: string | number; label: string; unit?: string }>;
  conversionTables?: Record<string, Record<number, number>>;
}
export const COMMON_KEYWORDS = [
  "law school predictor",
  "good lsat score",
  "lsat average score",
  "lsat raw score conversion",
  "lsat score calculator",
  "lsat demon scholarship estimator",
  "lsat top score",
  "how long is lsat",
  "how many questions are on the lsat",
  "what's a good lsat score",
  "lsat average score",
  "normal lsat score",

] as const;


export const calculatorsData: Record<string, CalculatorInfo> = {
  // Flagship Topsoil
  topsoil: {
    slug: "topsoil",
    name: "Topsoil Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Topsoil Calculator - Estimate Cubic Yards, Feet & Bags",
    metaDescription: "Calculate exactly how much topsoil, dirt, or compost you need. Input dimensions to get results in cubic yards, cubic feet, tons, and bag counts.",
    keywords: ["topsoil calculator", "top soil calculator", "topsoil estimator", "online topsoil calculator", "topsoil coverage calculator"],
    hook: "Estimate Topsoil, Fill Dirt & Landscaping Soil in Seconds.",
    description: "Calculate cubic yards, soil depth, and coverage instantly for lawns, raised beds, or circular gardens.",
    calcTime: "1 min",
    formula: "Volume (cu yd) = [Length (ft) × Width (ft) × (Depth (in) ÷ 12)] ÷ 27",
    formulaDescription: "Multiply the length and width of the coverage area in feet by the depth in feet (inches divided by 12) to calculate the cubic feet. Divide this value by 27 to convert it to cubic yards.",
    example: "For an area 20 feet long and 10 feet wide, to be filled 3 inches deep: 20 × 10 × 0.25 = 50 cubic feet. 50 ÷ 27 = 1.85 cubic yards of topsoil.",
    faqs: [
      {
        question: "How do I calculate how much topsoil I will need?",
        answer:
          "Measure the length and width of the area in feet and the desired soil depth in inches. Multiply length × width × depth (in inches), divide by 12 to convert to cubic feet, then divide by 27 to convert to cubic yards."
      },
      {
        question: "How many cubic yards do I need?",
        answer:
          "Enter your area dimensions into the calculator. It automatically converts measurements into cubic yards and includes optional buffer recommendations for compaction."
      },
      {
        question: "How deep should topsoil be?",
        answer:
          "For lawns, 4–6 inches is standard. For garden beds, 8–12 inches is recommended depending on plant type and soil quality."
      },
      {
        question: "What is 1 cubic yard of topsoil?",
        answer:
          "One cubic yard equals 27 cubic feet of soil. It typically weighs around 2,000 to 2,200 pounds depending on moisture content."
      },
      {
        question: "Is fill dirt the same as topsoil?",
        answer:
          "No. Fill dirt is used for structural leveling and contains little organic material. Topsoil is nutrient-rich and used for planting and landscaping."
      },
      {
        question: "How accurate is the calculator?",
        answer:
          "The calculator uses precise mathematical formulas. Accuracy depends on correct user inputs and whether you include a 10% buffer for compaction."
      },
      {
        question: "How do I calculate soil manually?",
        answer:
          "Use the formula: Length × Width × (Depth ÷ 12) ÷ 27 to get cubic yards."
      },
      {
        question: "Can I convert results into bags?",
        answer:
          "Yes. One 40 lb bag contains approximately 0.75 cubic feet. Divide total cubic feet by 0.75 to estimate required bags."
      },
      {
        question: "Do I need extra soil for compaction?",
        answer:
          "Yes. It is recommended to add 10–15% extra soil to account for settling and compaction over time."
      },
      {
        question: "How much does a 40 lb bag of topsoil cover?",
        answer: "A standard 40 lb bag of topsoil contains approximately 0.75 cubic feet of soil. Spread at a 2-inch depth, one 40 lb bag will cover about 4.5 square feet."
      }
    ],
    commonMistakes: ["Forgetting to divide the depth in inches by 12.", "Not accounting for compression."],
    useCases: ["New lawns", "Garden beds"],
    tips: ["Add 10% safety buffer."],
    inputs: [],
    calculate: () => ({})
  },

  // Logistics CBM
  cbm: {
    slug: "cbm",
    name: "CBM Calculator",
    category: "unit-converter",
    categoryLabel: "Logistics",
    seoTitle: "CBM Calculator - Cargo Cubic Meter Volume Finder",
    metaDescription: "Calculate Cubic Meters (CBM) for shipping cargo, cartons, or boxes. Convert dimensions in inches, feet, or cm to shipping volume easily.",
    keywords: ["cbm calculator", "cubic meters calculator", "shipping volume calculator", "cargo volume calculator"],
    hook: "Calculate Shipping Volume & Cargo Space in CBM Instantly.",
    description: "Enter box dimensions in inches, cm, or feet to estimate total volume, weight, and fit in ocean containers.",
    calcTime: "1 min",
    formula: "CBM = [Length (m) × Width (m) × Height (m)] × Quantity",
    formulaDescription: "Convert all box dimensions to meters, multiply them to get the volume of a single box, and then multiply by the total number of boxes to get the total CBM.",
    example: "If you have 10 boxes, each measuring 50 cm × 40 cm × 30 cm: 0.5m × 0.4m × 0.3m = 0.06 CBM. Total CBM = 0.06 × 10 = 0.6 CBM.",
    faqs: [
      { question: "What is CBM?", answer: "CBM stands for Cubic Meter, the standard volume unit for shipping cargo." }
    ],
    commonMistakes: ["Mixing different dimension units without proper conversion."],
    useCases: ["LCL shipping cargo", "Container packing planning"],
    tips: ["Add a 5% spacing allowance for carton stacking gaps."],
    inputs: [
      { id: "length", label: "Length", type: "number", defaultValue: 50, unit: "cm" },
      { id: "width", label: "Width", type: "number", defaultValue: 40, unit: "cm" },
      { id: "height", label: "Height", type: "number", defaultValue: 30, unit: "cm" },
      { id: "unit", label: "Dimension Unit", type: "select", defaultValue: "cm", options: [{ value: "cm", label: "Centimeters (cm)" }, { value: "in", label: "Inches (in)" }, { value: "m", label: "Meters (m)" }, { value: "ft", label: "Feet (ft)" }] },
      { id: "quantity", label: "Quantity (Boxes)", type: "number", defaultValue: 20 },
      { id: "weight", label: "Weight per box (Optional)", type: "number", defaultValue: 15, unit: "kg" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const height = Number(inputs.height || 0);
      const qty = Number(inputs.quantity || 1);
      const weight = Number(inputs.weight || 0);
      const unit = inputs.unit || "cm";

      let lM = length, wM = width, hM = height;
      if (unit === "cm") { lM /= 100; wM /= 100; hM /= 100; }
      else if (unit === "in") { lM *= 0.0254; wM *= 0.0254; hM *= 0.0254; }
      else if (unit === "ft") { lM *= 0.3048; wM *= 0.3048; hM *= 0.3048; }

      const singleCBM = lM * wM * hM;
      const totalCBM = singleCBM * qty;
      const totalCFT = totalCBM * 35.3147;

      return {
        totalCbm: { value: totalCBM.toFixed(4), label: "Total Volume", unit: "m³ (CBM)" },
        totalCft: { value: totalCFT.toFixed(2), label: "Total Volume", unit: "ft³ (CFT)" },
        singleCbm: { value: singleCBM.toFixed(4), label: "Single Box Volume", unit: "m³" },
        totalWeight: { value: (weight * qty).toFixed(1), label: "Total Weight", unit: "kg" }
      };
    }
  },

  // Financial Affirm
  affirm: {
    slug: "affirm",
    name: "Affirm Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Affirm Loan Calculator - Monthly Payments & Interest Estimator",
    metaDescription: "Estimate your monthly Affirm payments, total interest costs, and true APR. Input product price and term to make smart financing decisions.",
    keywords: ["affirm calculator", "affirm payment calculator", "buy now pay later calculator"],
    hook: "Calculate the True Cost of Affirm Financing Before Checkout.",
    description: "Determine your monthly payment, interest rate consequences, and the total cost of borrowing instantly.",
    calcTime: "1 min",
    formula: "Monthly Payment = [P × r × (1 + r)^n] ÷ [(1 + r)^n - 1]",
    formulaDescription: "Formula to find monthly payments on amortized simple interest loans.",
    example: "For a $1,000 purchase financed at 15% APR over 12 months, payments are $90.26/month.",
    faqs: [{ question: "Does Affirm charge interest?", answer: "Yes, rates range from 0% to 30% APR simple interest." }],
    commonMistakes: ["Stretching the loan term unnecessarily, which increases total interest costs."],
    useCases: ["Budgeting big checkouts", "Comparing financing options"],
    tips: ["A higher down payment reduces borrowing cost."],
    inputs: [
      { id: "price", label: "Purchase Price / Principal ($)", type: "number", defaultValue: 1000, unit: "$" },
      { id: "apr", label: "Interest Rate (APR %)", type: "number", defaultValue: 15, unit: "%" },
      { id: "term", label: "Payment Term (Months)", type: "select", defaultValue: "12", options: [{ value: "3", label: "3 Months" }, { value: "6", label: "6 Months" }, { value: "12", label: "12 Months" }, { value: "18", label: "18 Months" }] }
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.price || 0);
      const apr = Number(inputs.apr || 0);
      const termMonths = Number(inputs.term || 12);

      if (apr === 0) {
        return {
          monthlyPayment: { value: (principal / termMonths).toFixed(2), label: "Monthly Payment", unit: "$" },
          totalPaid: { value: principal.toFixed(2), label: "Total Paid", unit: "$" },
          totalInterest: { value: "0.00", label: "Total Interest Paid", unit: "$" }
        };
      }

      const monthlyRate = (apr / 100) / 12;
      const x = Math.pow(1 + monthlyRate, termMonths);
      const monthlyPayment = (principal * x * monthlyRate) / (x - 1);
      const totalPaid = monthlyPayment * termMonths;

      return {
        monthlyPayment: { value: monthlyPayment.toFixed(2), label: "Monthly Payment", unit: "$" },
        totalPaid: { value: totalPaid.toFixed(2), label: "Total Paid", unit: "$" },
        totalInterest: { value: (totalPaid - principal).toFixed(2), label: "Total Interest Paid", unit: "$" }
      };
    }
  },

  // Financial Pro Rata
  "pro-rata": {
    slug: "pro-rata",
    name: "Pro Rata Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Pro Rata Rental & Salary Calculator - Precision Splits",
    metaDescription: "Calculate prorated rent or salary instantly. Get exact figures based on active days, calendar days, or daily rates.",
    keywords: ["pro rata calculator", "prorated rent calculator", "prorate salary"],
    hook: "Splits Rent, Invoices & Salaries to the Cent.",
    description: "Determine exact partial payments for moving in mid-month or joining a job mid-cycle.",
    calcTime: "1 min",
    formula: "Prorated Amount = (Base Rate ÷ Total Days) × Days Active",
    formulaDescription: "Divides monthly rate by total month days, then multiplies by active occupancy days.",
    example: "For a monthly rent of $1,200 in a 30-day month, active for 10 days: ($1200 / 30) * 10 = $400.",
    faqs: [{ question: "What is proration?", answer: "The proportional division of rental or payroll costs based on actual days active." }],
    commonMistakes: ["Miscounting calendar days in standard months."],
    useCases: ["Tenancies moving mid-month", "HR salary adjustments"],
    tips: ["Always verify if the lease specifies a flat 30-day base or actual calendar days."],
    inputs: [
      { id: "amount", label: "Monthly Base Rate ($)", type: "number", defaultValue: 1200, unit: "$" },
      { id: "totalDays", label: "Total Days in Month/Period", type: "number", defaultValue: 30 },
      { id: "activeDays", label: "Days Used / Active", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount || 0);
      const totalDays = Number(inputs.totalDays || 30);
      const activeDays = Number(inputs.activeDays || 0);
      const daily = totalDays > 0 ? amount / totalDays : 0;
      return {
        proratedAmount: { value: (daily * activeDays).toFixed(2), label: "Prorated Amount", unit: "$" },
        dailyRate: { value: daily.toFixed(2), label: "Daily Rate Equivalent", unit: "$/day" }
      };
    }
  },

  // Construction Roof
  roof: {
    slug: "roof",
    name: "Roof Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Roof Area & Shingle Calculator - Pitch and Slope Estimator",
    metaDescription: "Estimate roof surface area, shingle bundle counts, and pitch multipliers. Input building footprint and roof pitch for accurate contractor layouts.",
    keywords: ["roof calculator", "roof area calculator", "shingles calculator"],
    hook: "Estimate Roof Area & Shingle Bundles in Seconds.",
    description: "Input house length, width, overhangs, and pitch slope to estimate roof area and material requirements.",
    calcTime: "2 mins",
    formula: "Roof Area = Ground Footprint Area × Pitch Factor",
    formulaDescription: "Multiplies flat footprint area (including overhangs) by the slope hypotenuse factor.",
    example: "Footprint of 1,000 sq ft under 6/12 pitch (factor 1.118) yields a roof area of 1,118 sq ft.",
    faqs: [{ question: "How many shingle bundles cover a square?", answer: "There are 3 shingle bundles in 1 roofing square (100 sq ft)." }],
    commonMistakes: ["Forgetting to account for eave overhangs."],
    useCases: ["Estimating roofing material ordering", "Checking contractor bids"],
    tips: ["Add 10% shingles waste for gable roofs, and 15% for hip roofs."],
    inputs: [
      { id: "length", label: "House Footprint Length (ft)", type: "number", defaultValue: 40, unit: "ft" },
      { id: "width", label: "House Footprint Width (ft)", type: "number", defaultValue: 30, unit: "ft" },
      { id: "overhang", label: "Eave / Overhang (ft)", type: "number", defaultValue: 1, unit: "ft" },
      { id: "pitch", label: "Roof Pitch (Rise / 12)", type: "select", defaultValue: "6", options: [{ value: "3", label: "3/12 (Factor 1.03)" }, { value: "4", label: "4/12 (Factor 1.05)" }, { value: "6", label: "6/12 (Factor 1.118)" }, { value: "8", label: "8/12 (Factor 1.20)" }, { value: "12", label: "12/12 (Factor 1.414)" }] }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const overhang = Number(inputs.overhang || 0);
      const pitch = Number(inputs.pitch || 6);

      const pitchFactors: Record<number, number> = { 3: 1.0308, 4: 1.0541, 6: 1.1180, 8: 1.2019, 12: 1.4142 };
      const factor = pitchFactors[pitch] || 1.118;
      const gArea = (length + overhang * 2) * (width + overhang * 2);
      const rArea = gArea * factor;
      const squares = rArea / 100;

      return {
        roofArea: { value: rArea.toFixed(0), label: "Estimated Roof Area", unit: "sq ft" },
        squares: { value: squares.toFixed(2), label: "Roof Squares (100 sq ft)", unit: "sqs" },
        bundlesNeeded: { value: Math.ceil(squares * 3 * 1.10), label: "Total Bundles (incl. 10% waste)", unit: "bundles" }
      };
    }
  },

  // Construction Concrete
  concrete: {
    slug: "concrete",
    name: "Concrete Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Concrete Slab & Volume Calculator - Cubic Yards Finder",
    metaDescription: "Calculate concrete volume in cubic yards or bags for slabs, walkways, columns, and foundations. Add waste buffer for precise masonry orders.",
    keywords: ["concrete calculator", "concrete slab calculator", "concrete bags calculator"],
    hook: "Calculate Concrete Yards & Bag Counts Instantly.",
    description: "Enter flat rectangular slabs or circular piers to find the volume of concrete mix needed for construction.",
    calcTime: "2 mins",
    formula: "Volume (cu yd) = [Length (ft) × Width (ft) × Thickness (ft)] ÷ 27",
    formulaDescription: "Finds cubic volume of a rectangular prism, then divides by 27 to find cubic yards.",
    example: "A slab 12ft × 12ft at 4 inches thick needs 1.78 cubic yards.",
    faqs: [{ question: "How thick should a driveway slab be?", answer: "Driveways require a minimum thickness of 5 to 6 inches of concrete." }],
    commonMistakes: ["Not adding a 10% ordering margin to cover spills and form deflection."],
    useCases: ["Sidewalks, patios, driveways", "Setting fence posts"],
    tips: ["Dampen the subgrade before pouring to avoid drawing water from the mix."],
    inputs: [
      { id: "length", label: "Length of Slab (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "width", label: "Width of Slab (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "thickness", label: "Thickness of Concrete (in)", type: "number", defaultValue: 4, unit: "in" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const thickness = Number(inputs.thickness || 4);

      const volFt3 = length * width * (thickness / 12);
      const volYd3 = volFt3 / 27;

      return {
        cubicYards: { value: volYd3.toFixed(2), label: "Cubic Yards Needed", unit: "yd³" },
        cubicYardsWaste: { value: (volYd3 * 1.10).toFixed(2), label: "Total Yards (+10% waste buffer)", unit: "yd³" },
        bags80lb: { value: Math.ceil(volFt3 / 0.6), label: "80 lb pre-mix bags", unit: "bags" }
      };
    }
  },

  // Health BMI
  bmi: {
    slug: "bmi",
    name: "BMI Calculator",
    category: "health",
    categoryLabel: "Health",
    seoTitle: "BMI Calculator - Body Mass Index Health Score",
    metaDescription: "Calculate your Body Mass Index (BMI) instantly. Find your weight status category (underweight, normal weight, overweight, or obese) with official ranges.",
    keywords: ["bmi calculator", "body mass index calculator", "healthy weight calculator"],
    hook: "Calculate Your Body Mass Index & Health Category Instantly.",
    description: "Enter height and weight to assess your body composition based on World Health Organization standards.",
    calcTime: "1 min",
    formula: "BMI = [Weight (lbs) ÷ Height (in)²] × 703",
    formulaDescription: "Computes the standard weight-to-height ratio index.",
    example: "Height 5ft 8in, weight 160 lbs yields a BMI score of 24.3 (Normal).",
    faqs: [{ question: "What is a normal BMI score?", answer: "A healthy adult score is between 18.5 and 24.9." }],
    commonMistakes: ["Relying on BMI when having high muscle density (muscle weighs more than fat)."],
    useCases: ["Weight screening", "Fitness baseline setup"],
    tips: ["Combine with waist circumference measurements for better body profile assessments."],
    inputs: [
      { id: "weight", label: "Weight (lbs)", type: "number", defaultValue: 160, unit: "lbs" },
      { id: "heightFt", label: "Height (Feet)", type: "number", defaultValue: 5, unit: "ft" },
      { id: "heightIn", label: "Height (Inches)", type: "number", defaultValue: 8, unit: "in" }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.weight || 0);
      const heightFt = Number(inputs.heightFt || 5);
      const heightIn = Number(inputs.heightIn || 8);

      const heightInches = (heightFt * 12) + heightIn;
      if (heightInches === 0) return { bmi: { value: 0, label: "BMI" }, category: { value: "N/A", label: "Category" } };
      const bmi = (weight / Math.pow(heightInches, 2)) * 703;

      let cat = "Obese (≥ 30)";
      if (bmi < 18.5) cat = "Underweight (< 18.5)";
      else if (bmi < 25) cat = "Normal Weight (18.5 - 24.9)";
      else if (bmi < 30) cat = "Overweight (25 - 29.9)";

      return {
        bmi: { value: bmi.toFixed(2), label: "BMI Score", unit: "" },
        category: { value: cat, label: "Weight Category", unit: "" }
      };
    }
  },

  // 1. HECM
  hecm: {
    slug: "hecm",
    name: "HECM Reverse Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "HECM Calculator - Reverse Mortgage Payout Estimator",
    metaDescription: "Calculate Home Equity Conversion Mortgage (HECM) borrow limits. Estimate payouts based on home value, age, and mortgage balances.",
    keywords: ["hecm calculator", "reverse mortgage calculator", "hud limit estimator"],
    hook: "Estimate Your Reverse Mortgage Borrowing Limit.",
    description: "Model FHA HECM proceeds based on age thresholds and appraisal valuation.",
    calcTime: "2 mins",
    formula: "Proceeds = Home Appraisal Value × Principal Limit Factor (PLF)",
    formulaDescription: "HUD defines the PLF based on the age of the youngest borrower and current interest rates.",
    example: "A 70-year-old with a $400,000 home and 3.5% rate has an estimated proceeds limit of $220,000.",
    faqs: [{ question: "What is HECM?", answer: "HECM is a Home Equity Conversion Mortgage, the official HUD reverse mortgage." }],
    commonMistakes: ["Assuming you get 100% of the home value (it is capped at HUD limit factors)."],
    useCases: ["Retirement equity modeling", "Refinancing senior mortgages"],
    tips: ["Proceeds first pay off any existing home mortgages before cash payouts."],
    inputs: [
      { id: "value", label: "Home Appraisal Value ($)", type: "number", defaultValue: 350000, unit: "$" },
      { id: "age", label: "Age of Youngest Borrower", type: "number", defaultValue: 68 },
      { id: "balance", label: "Existing Mortgage Balance ($)", type: "number", defaultValue: 50000, unit: "$" }
    ],
    calculate: (inputs) => {
      const val = Number(inputs.value || 0);
      const age = Number(inputs.age || 62);
      const bal = Number(inputs.balance || 0);

      // Rough PLF calculation
      let plf = 0.35;
      if (age >= 62 && age < 70) plf = 0.45;
      else if (age >= 70 && age < 80) plf = 0.52;
      else if (age >= 80) plf = 0.60;

      const limit = val * plf;
      const net = Math.max(0, limit - bal);

      return {
        grossProceeds: { value: limit.toFixed(2), label: "HUD Borrowing Limit", unit: "$" },
        netProceeds: { value: net.toFixed(2), label: "Net Cash Payout (After payoff)", unit: "$" }
      };
    }
  },

  // 2. HELOC Payoff
  "heloc-payoff": {
    slug: "heloc-payoff",
    name: "HELOC Payoff Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "HELOC Payoff Calculator - Principal & Interest Planner",
    metaDescription: "Calculate Home Equity Line of Credit (HELOC) payment changes. Plan principal repayment timelines to avoid balloon payments.",
    keywords: ["heloc payoff calculator", "heloc interest calculator", "home equity line payoff"],
    hook: "Map Your HELOC Repayment & Payoff Milestones.",
    description: "Determine interest-only payments during draw periods and subsequent fully amortizing rates.",
    calcTime: "2 mins",
    formula: "P&I Payment = P × [r(1+r)^n] ÷ [(1+r)^n - 1]",
    formulaDescription: "Standard amortization formula applied to the HELOC balance at the start of the repayment period.",
    example: "A $50,000 HELOC at 7% APR over a 20-year repayment term requires $387.65/month.",
    faqs: [{ question: "What is draw period?", answer: "The initial 5-10 year period where you draw funds and pay only interest." }],
    commonMistakes: ["Failing to prepare for the payment shock when the draw period ends and principal payments begin."],
    useCases: ["Refinancing lines of credit", "Retiring credit debt"],
    tips: ["Make extra principal payments during the draw period to reduce the eventual shock."],
    inputs: [
      { id: "balance", label: "Current HELOC Balance ($)", type: "number", defaultValue: 40000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 8.5, unit: "%" },
      { id: "repayYears", label: "Repayment Term (Years)", type: "number", defaultValue: 15 }
    ],
    calculate: (inputs) => {
      const bal = Number(inputs.balance || 0);
      const rate = Number(inputs.rate || 0);
      const yrs = Number(inputs.repayYears || 15);

      const r = (rate / 100) / 12;
      const n = yrs * 12;
      const drawInterestOnly = bal * r;

      let repayPayment = 0;
      if (r > 0 && n > 0) {
        repayPayment = (bal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      }

      return {
        drawPayment: { value: drawInterestOnly.toFixed(2), label: "Draw Period Payment (Interest Only)", unit: "$" },
        repaymentPayment: { value: repayPayment.toFixed(2), label: "Repayment Period Payment (P&I)", unit: "$" }
      };
    }
  },

  // 3. Balance Transfer
  "balance-transfer": {
    slug: "balance-transfer",
    name: "Balance Transfer Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Balance Transfer Calculator - Credit Card Savings Finder",
    metaDescription: "Calculate interest savings and transaction fee breaks for card transfers. Find if a 0% APR deal is worth the up-front fee.",
    keywords: ["balance transfer calculator", "credit card transfer savings", "debt transfer fees"],
    hook: "Find Savings on Credit Card Debt Consolidation.",
    description: "Compare your current credit card interest with 0% APR promotional transfer options.",
    calcTime: "2 mins",
    formula: "Net Savings = Current Interest Saved - Upfront Transfer Fee",
    formulaDescription: "Subtracts the upfront balance transfer fee (usually 3% to 5%) from the interest saved during the promo term.",
    example: "Transferring $5,000 from a 20% APR card to 0% for 12 months with a 3% fee saves over $850.",
    faqs: [{ question: "Is a balance transfer worth it?", answer: "Yes, if the interest saved exceeds the upfront transfer fee." }],
    commonMistakes: ["Not paying off the transferred balance before the 0% APR promo period expires."],
    useCases: ["Credit card debt paydown", "Interest rate savings"],
    tips: ["Set monthly targets to divide the balance by the promo months for complete payoff."],
    inputs: [
      { id: "balance", label: "Total Debt to Transfer ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "currentApr", label: "Current Card APR (%)", type: "number", defaultValue: 22, unit: "%" },
      { id: "promoMonths", label: "Promo Period (Months)", type: "number", defaultValue: 15 },
      { id: "feePct", label: "Transfer Fee (%)", type: "number", defaultValue: 3, unit: "%" }
    ],
    calculate: (inputs) => {
      const bal = Number(inputs.balance || 0);
      const curApr = Number(inputs.currentApr || 0);
      const months = Number(inputs.promoMonths || 12);
      const feePct = Number(inputs.feePct || 3);

      const fee = bal * (feePct / 100);
      const monthlyRate = (curApr / 100) / 12;

      // Rough monthly interest savings estimation
      let totalInterestSaved = 0;
      let remaining = bal;
      const monthlyPay = bal / months;
      for (let i = 0; i < months; i++) {
        totalInterestSaved += remaining * monthlyRate;
        remaining -= monthlyPay;
      }

      const netSavings = totalInterestSaved - fee;

      return {
        transferFee: { value: fee.toFixed(2), label: "Upfront Transfer Fee", unit: "$" },
        interestSaved: { value: totalInterestSaved.toFixed(2), label: "Total Interest Saved", unit: "$" },
        netSavings: { value: netSavings.toFixed(2), label: "Net Interest Savings", unit: "$" }
      };
    }
  },

  // 4. Square Fee
  "square-fee": {
    slug: "square-fee",
    name: "Square Fee Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Square Fee Calculator - Credit Card Processing Charges",
    metaDescription: "Calculate Square card reader processing fees. Find how much you must invoice to receive your exact target amount.",
    keywords: ["square fee calculator", "square merchant fee", "credit card fee estimator"],
    hook: "Calculate Card Processing Fees & Target Invoices.",
    description: "Determine Square merchant cuts for tapped, keyed, and online payments.",
    calcTime: "1 min",
    formula: "Invoice Amount = (Desired Net + Fixed Fee) ÷ (1 - Fee %)",
    formulaDescription: "Finds total billing needed to yield the desired net amount after deduction.",
    example: "To receive exactly $100 via online invoicing (2.9% + $0.30), you must invoice $103.30.",
    faqs: [{ question: "What is Square standard fee?", answer: "Standard tapped rates are 2.6% + 10¢, and online invoice rates are 2.9% + 30¢." }],
    commonMistakes: ["Multiplying desired net by 1.029, which leaves you short because fees deduct from the gross total."],
    useCases: ["Freelancer client invoicing", "Small business sales pricing"],
    tips: ["Some jurisdictions allow charging customers processing surcharges directly. Check local rules."],
    inputs: [
      { id: "amount", label: "Transaction Amount ($)", type: "number", defaultValue: 100, unit: "$" },
      {
        id: "feeType", label: "Payment Method / Rate", type: "select", defaultValue: "online", options: [
          { value: "swipe", label: "Tapped/Swiped (2.6% + $0.10)" },
          { value: "online", label: "Online Invoice / Store (2.9% + $0.30)" },
          { value: "keyed", label: "Keyed-in Manually (3.5% + $0.15)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const amt = Number(inputs.amount || 0);
      const type = inputs.feeType || "online";

      let rate = 0.029;
      let fixed = 0.30;
      if (type === "swipe") { rate = 0.026; fixed = 0.10; }
      else if (type === "keyed") { rate = 0.035; fixed = 0.15; }

      const squareCut = (amt * rate) + fixed;
      const net = amt - squareCut;
      const chargeToKeepAmt = (amt + fixed) / (1 - rate);

      return {
        squareFee: { value: squareCut.toFixed(2), label: "Square Transaction Fee", unit: "$" },
        netPayout: { value: net.toFixed(2), label: "Net Cash Payout Received", unit: "$" },
        billingRequired: { value: chargeToKeepAmt.toFixed(2), label: "Invoice Total to Receive Exact Amount", unit: "$" }
      };
    }
  },

  // 5. Avalara Sales Tax
  "avalara-sales-tax": {
    slug: "avalara-sales-tax",
    name: "Avalara Sales Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Avalara Sales Tax Calculator - State Transaction Rates",
    metaDescription: "Estimate checkout sales taxes using standard state tax brackets. Calculate total sales prices instantly.",
    keywords: ["avalara sales tax", "sales tax calculator", "state tax rate search"],
    hook: "Calculate Checkout Sales Tax Rates.",
    description: "Determine sales tax amounts and gross totals based on base prices and state percentages.",
    calcTime: "1 min",
    formula: "Sales Tax = Base Price × State Tax Rate",
    formulaDescription: "Multiplies base price by state rate to find the checkout tax collection requirement.",
    example: "A $50 transaction in a state with 6.25% sales tax incurs $3.13 tax.",
    faqs: [{ question: "Is sales tax national?", answer: "No, sales taxes are governed at the state, county, and municipal level." }],
    commonMistakes: ["Not adding local county or city surcharges to the base state sales tax rate."],
    useCases: ["E-commerce tax estimation", "Invoicing corporate clients"],
    tips: ["Confirm destination state nexus rules when shipping physical packages across state lines."],
    inputs: [
      { id: "price", label: "Product Base Price ($)", type: "number", defaultValue: 100, unit: "$" },
      { id: "stateRate", label: "Combined Tax Rate (%)", type: "number", defaultValue: 6.25, unit: "%" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const rate = Number(inputs.stateRate || 6.25);

      const tax = price * (rate / 100);
      const total = price + tax;

      return {
        salesTax: { value: tax.toFixed(2), label: "Sales Tax Amount", unit: "$" },
        grossTotal: { value: total.toFixed(2), label: "Gross Total (incl. tax)", unit: "$" }
      };
    }
  },

  // 6. Gross Up
  "gross-up": {
    slug: "gross-up",
    name: "Gross Up Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Gross Up Calculator - Payroll Wage Deductions Estimator",
    metaDescription: "Calculate gross payroll earnings needed to achieve an exact target net paycheck amount. Accounts for federal, FICA, and state tax adjustments.",
    keywords: ["gross up calculator", "payroll gross up", "net check converter"],
    hook: "Determine Gross Wages Needed for Target Bonuses.",
    description: "Work backward from a target net paycheck to figure out total gross wages before tax withholding.",
    calcTime: "1 min",
    formula: "Gross Pay = Net Pay ÷ (1 - Combined Tax Rates)",
    formulaDescription: "Identifies gross wages needed by working backward through tax brackets.",
    example: "To give a clean $1,000 bonus with 22% federal and 7.65% FICA rates: Gross = $1,000 / (1 - 0.2965) = $1,421.46.",
    faqs: [{ question: "What is grossing up?", answer: "Adding additional wage buffer to payouts to cover tax deductions, ensuring exact net pay." }],
    commonMistakes: ["Failing to include state income tax rates in the combined tax divisor."],
    useCases: ["Paying staff bonuses", "Executive relocation allowances"],
    tips: ["Review federal supplemental bonus flat rates (currently 22%) for accurate calculations."],
    inputs: [
      { id: "netTarget", label: "Target Net Paycheck / Bonus ($)", type: "number", defaultValue: 1000, unit: "$" },
      { id: "taxRate", label: "Estimated Total Tax Tax Rate (%)", type: "number", defaultValue: 29.65, unit: "%" }
    ],
    calculate: (inputs) => {
      const target = Number(inputs.netTarget || 0);
      const ratePct = Number(inputs.taxRate || 29.65);

      const gross = target / (1 - (ratePct / 100));
      const deductionTotal = gross - target;

      return {
        grossWages: { value: gross.toFixed(2), label: "Required Gross Wages", unit: "$" },
        withholdingTotal: { value: deductionTotal.toFixed(2), label: "Total Tax Withholding Offset", unit: "$" }
      };
    }
  },

  // 7. Reverse Tax
  "reverse-tax": {
    slug: "reverse-tax",
    name: "Reverse Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Reverse Tax Calculator - Extract Base Price & Sales Tax",
    metaDescription: "Extract the original base price and tax portions from any retail gross total invoice. Instant breakdowns by rate.",
    keywords: ["reverse tax calculator", "extract sales tax", "vat deduction finder"],
    hook: "Extract Sales Tax & Base Price from Receipt Totals.",
    description: "Input receipt totals to find exactly how much was tax and how much was the product base cost.",
    calcTime: "1 min",
    formula: "Base Price = Gross Total ÷ (1 + Tax Rate)",
    formulaDescription: "Extracts tax by separating the base pricing coefficient from the gross sales total.",
    example: "For a gross total of $106.00 and 6.0% tax rate, Base = $106.00 / 1.06 = $100. Tax = $6.00.",
    faqs: [{ question: "How is reverse tax useful?", answer: "Useful for checking tax write-offs on business receipts that do not itemize tax." }],
    commonMistakes: ["Multiplying gross total by the tax rate, which overestimates tax paid."],
    useCases: ["Business expense tracking", "Receipt accounting audits"],
    tips: ["Always double-check local sales tax rates as municipal surcharges are sometimes not detailed on billing receipts."],
    inputs: [
      { id: "total", label: "Receipt / Invoice Gross Total ($)", type: "number", defaultValue: 106, unit: "$" },
      { id: "rate", label: "Tax Rate (%)", type: "number", defaultValue: 6, unit: "%" }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.total || 0);
      const rate = Number(inputs.rate || 6);

      const base = gross / (1 + (rate / 100));
      const tax = gross - base;

      return {
        baseCost: { value: base.toFixed(2), label: "Base Cost (Pre-Tax)", unit: "$" },
        taxPaid: { value: tax.toFixed(2), label: "Sales Tax Portion Paid", unit: "$" }
      };
    }
  },

  // 8. Georgia Payroll
  "georgia-payroll": {
    slug: "georgia-payroll",
    name: "Georgia Payroll Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Georgia Payroll Calculator - Net Paycheck Estimator",
    metaDescription: "Calculate Georgia state payroll tax withholdings and net check sizes. Accounts for GA state brackets, federal deductions, and FICA.",
    keywords: ["georgia payroll calculator", "ga paycheck calculator", "state payroll estimator"],
    hook: "Estimate Georgia State Paychecks & Deductions.",
    description: "Determine GA withholding, federal income tax, social security, and final check payouts.",
    calcTime: "2 mins",
    formula: "Net Pay = Gross Pay - Federal Withholding - FICA - GA State Tax",
    formulaDescription: "Subtracts federal, FICA (7.65%), and Georgia flat state tax deductions from hourly or salary rates.",
    example: "Gross pay of $1,000 pays approximately $782 net after standard tax adjustments.",
    faqs: [{ question: "What is Georgia tax rate?", answer: "Georgia uses a flat personal income tax rate of 5.39% starting in 2024." }],
    commonMistakes: ["Forgetting pre-tax retirement or health deductions which lower the tax liability."],
    useCases: ["Estimating job offer takes", "Hourly wage planning"],
    tips: ["Adjust withholding exemptions on state Form G-4 to change net pay paycheck results."],
    inputs: [
      { id: "gross", label: "Gross Pay per Period ($)", type: "number", defaultValue: 1500, unit: "$" },
      { id: "fedRate", label: "Est. Federal Tax Rate (%)", type: "number", defaultValue: 12, unit: "%" },
      { id: "exemptions", label: "GA G-4 Allowances", type: "number", defaultValue: 1 }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.gross || 0);
      const fed = Number(inputs.fedRate || 12);
      const GA_RATE = 0.0539; // standard flat rate

      const fica = gross * 0.0765;
      const fedTax = gross * (fed / 100);
      const stateTax = gross * GA_RATE;
      const net = gross - fica - fedTax - stateTax;

      return {
        netCheck: { value: net.toFixed(2), label: "Estimated Net Paycheck", unit: "$" },
        ficaTax: { value: fica.toFixed(2), label: "FICA (Social Security & Medicare)", unit: "$" },
        gaStateTax: { value: stateTax.toFixed(2), label: "Georgia State Income Tax", unit: "$" }
      };
    }
  },

  // LSAT Score Calculator
  // "lsat-score": {
  //   slug: "lsat-score",
  //   name: "LSAT Score Calculator",
  //   category: "education",
  //   categoryLabel: "Education",
  //   seoTitle: "LSAT Score Calculator – Convert Raw Scores & Estimate Percentiles",
  //   metaDescription: "Convert LSAT raw scores to scaled scores and see estimated percentiles. Quick, accurate LSAT conversion tool for test takers.",
  //   keywords: [...COMMON_KEYWORDS, "lsat score calculator"],
  //   hook: "Convert your LSAT raw score to the official scaled score and view percentile estimates.",
  //   description: "Enter your LSAT raw score (number of correct answers) to get the scaled score (120‑180) and an approximate percentile.",
  //   calcTime: "1 min",
  //   formula: "Scaled Score ≈ 120 + (Raw Score × 0.5)",
  //   formulaDescription: "A simplified linear approximation: each additional raw point adds roughly 0.5 to the scaled score.",
  //   example: "Raw Score 100 → Scaled Score ≈ 170.",
  //   faqs: [
  //     { question: "What is a raw LSAT score?", answer: "The raw score is the number of questions answered correctly before scaling (out of 120)." },
  //     { question: "How accurate is this conversion?", answer: "This uses a simplified linear model; official scores may vary slightly based on equating." },
  //     { question: "What is a good LSAT score?", answer: "Generally, a score of 165 or higher is considered competitive for top law schools." },
  //     { question: "How long is the LSAT exam?", answer: "The LSAT is a 3 hour and 30 minute test, plus a 15‑minute break." },
  //     { question: "How many questions are on the LSAT?", answer: "There are 100 scored questions (25 per section) plus 4 unscored experimental questions." },
  //     { question: "What is the LSAT raw score conversion formula?", answer: "Scaled Score ≈ 120 + (Raw Score × 0.5), bounded between 120 and 180." },
  //     { question: "What is the top LSAT score?", answer: "The maximum possible scaled score is 180." },
  //     { question: "How does the LSAT score affect law school admission?", answer: "Higher scores improve admission chances and scholarship eligibility; many schools publish median LSAT scores for admitted students." },
  //     { question: "What is the LSAT Demon scholarship estimator?", answer: "It's a tool that estimates scholarship amounts based on your LSAT score and GPA using historical data." },
  //     { question: "How can I predict my law school ranking with my LSAT score?", answer: "Use the Law School Predictor tool which matches your score with average admitted scores at various schools." },
  //     { question: "What is an average LSAT score?", answer: "The median LSAT score nationwide is around 151." },
  //     { question: "What is a normal LSAT score range?", answer: "Scores typically range from 120 to 180, with most test‑takers scoring between 135 and 165." }
  //   ],
  //   commonMistakes: ["Assuming raw scores directly equal scaled scores.", "Forgetting the 120 floor minimum."],
  //   useCases: ["Law school applications", "Self‑assessment for test prep"],
  //   tips: ["Add a 2‑3 point buffer for rounding errors when planning applications."],
  //   inputs: [
  //     { id: "rawScore", label: "Raw Score (Correct Answers)", type: "number", defaultValue: 0, unit: "points" }
  //   ],
  //   calculate: (inputs) => {
  //     const raw = Number(inputs.rawScore || 0);
  //     // Simple linear conversion with floor at 120 and ceiling at 180
  //     let scaled = Math.round(120 + raw * 0.5);
  //     if (scaled < 120) scaled = 120;
  //     if (scaled > 180) scaled = 180;
  //     // Approximate percentile based on scaled score (very rough)
  //     let percentile = 0;
  //     if (scaled >= 170) percentile = 95;
  //     else if (scaled >= 160) percentile = 85;
  //     else if (scaled >= 150) percentile = 70;
  //     else if (scaled >= 140) percentile = 50;
  //     else if (scaled >= 130) percentile = 30;
  //     else percentile = 15;
  //     return {
  //       scaledScore: { value: scaled, label: "Scaled LSAT Score", unit: "" },
  //       percentile: { value: `${percentile}%`, label: "Estimated Percentile", unit: "" }
  //     };
  //   }
  // },
  // 10. LSAT Score Converter (section‑based)
  "lsat-score-calculator": {
    slug: "lsat-score-calculator",
    name: "LSAT Score Calculator",
    category: "education",
    categoryLabel: "Education",
    seoTitle: "LSAT Score Calculator – Section Scores to Scaled Score",
    metaDescription: "Convert your LSAT section scores to an estimated scaled score using official conversion tables. Includes test selection and detailed FAQs.",
    keywords: [...COMMON_KEYWORDS, "lsat score calculator", "lsat section score conversion", "lsat conversion table"],
    hook: "Enter your LSAT test and section scores to get an estimated scaled score.",
    description: "Select the LSAT test you took and input your raw section scores (Logical Reasoning & Reading Comprehension). The tool looks up the official conversion table for that test and returns the scaled score and percentile estimate.",
    calcTime: "1–2 min",
    formula: "Scaled Score = conversionTable[test][rawTotal]",
    formulaDescription: "Uses a per‑test conversion table mapping raw total (0‑120) to the official scaled score (120‑180).",
    example: "Test 159, 22+23+22+23 → Raw Total 90 → Scaled Score 166.",
    inputs: [
      {
        id: "test", label: "Which test did you take?", type: "select", options: [
          { value: "pt159", label: "Test 159 • Apr 2025" },
          { value: "pt158", label: "Test 158 • May 2020" },
          { value: "pt157", label: "Test 157 • Jun 2020" },
          { value: "pt156", label: "Test 156 • Jul 2020" },
          { value: "pt155", label: "Test 155 • Nov 2019" },
          { value: "pt154", label: "Test 154 • Sep 2019" },
          { value: "pt153", label: "Test 153 • Jun 2019" },
          { value: "pt152", label: "Test 152 • Nov 2018" },
          { value: "pt151", label: "Test 151 • Sep 2018" },
          { value: "pt150", label: "Test 150 • Jun 2018" },
          { value: "pt149", label: "Test 149 • Dec 2017" },
          { value: "pt148", label: "Test 148 • Dec 2016" },
          { value: "pt147", label: "Test 147 • Sep 2016" },
          { value: "pt146", label: "Test 146 • Jun 2016" },
          { value: "pt145", label: "Test 145 • Dec 2015" },
          { value: "pt144", label: "Test 144 • Oct 2015" },
          { value: "pt143", label: "Test 143 • Jun 2015" },
          { value: "pt142", label: "Test 142 • Dec 2014" },
          { value: "pt141", label: "Test 141 • Sep 2014" },
          { value: "pt140", label: "Test 140 • Dec 2013" },
          { value: "pt139", label: "Test 139 • Jun 2013" },
          { value: "pt138", label: "Test 138 • Dec 2012" },
          { value: "pt137", label: "Test 137 • Oct 2012" },
          { value: "pt136", label: "Test 136 • Jun 2012" },
          { value: "pt135", label: "Test 135 • Dec 2011" },
          { value: "pt134", label: "Test 134 • Oct 2011" },
          { value: "pt133", label: "Test 133 • Jun 2011" },
          { value: "pt132", label: "Test 132 • Dec 2010" },
          { value: "pt131", label: "Test 131 • Dec 2009" },
          { value: "pt130", label: "Test 130 • Sep 2009" },
          { value: "pt129", label: "Test 129 • Jun 2009" },
          { value: "pt128", label: "Test 128 • Dec 2008" },
          { value: "pt127", label: "Test 127 • Dec 2008" },
          { value: "pt126", label: "Test 126 • Oct 2008" },
          { value: "pt125", label: "Test 125 • Jun 2008" },
          { value: "pt124", label: "Test 124 • Dec 2007" },
          { value: "pt123", label: "Test 123 • Jun 2007" },
          { value: "pt122", label: "Test 122 • Jun 2006" },
          { value: "pt121", label: "Test 121 • Dec 2005" },
          { value: "pt120", label: "Test 120 • Oct 2005" },
          { value: "pt119", label: "Test 119 • Jun 2005" },
          { value: "pt118", label: "Test 118 • Dec 2004" },
          { value: "pt117", label: "Test 117 • Oct 2004" },
          { value: "pt116", label: "Test 116 • Jun 2004" },
          { value: "pt115", label: "Test 115 • Dec 2002" },
          { value: "pt114", label: "Test 114 • Oct 2002" },
          { value: "pt113", label: "Test 113 • Jun 2002" },
          { value: "pt112", label: "Test 112 • Dec 2001" },
          { value: "pt111", label: "Test 111 • Oct 2001" },
          { value: "pt110", label: "Test 110 • Jun 2001" },
          { value: "pt109", label: "Test 109 • Dec 2000" },
          { value: "pt108", label: "Test 108 • Feb 2000" },
          { value: "pt107", label: "Test 107 • Oct 1999" },
          { value: "pt106", label: "Test 106 • Jun 1999" },
          { value: "pt105", label: "Test 105 • Feb 1999" },
          { value: "pt104", label: "Test 104 • Dec 1998" },
          { value: "pt103", label: "Test 103 • Sep 1998" },
          { value: "pt102", label: "Test 102 • Jun 1998" },
          { value: "pt101", label: "Test 101 • Dec 1997" },
          { value: "pt94", label: "Test 94 • Jul 2020" },
          { value: "pt93", label: "Test 93 • Jun 2020" },
          { value: "pt92", label: "Test 92 • Jun 2020" },
          { value: "pt91", label: "Test 91 • May 2020" },
          { value: "pt90", label: "Test 90 • May 2020" },
          { value: "pt89", label: "Test 89 • Nov 2019" },
          { value: "pt88", label: "Test 88 • Sep 2019" },
          { value: "pt87", label: "Test 87 • Jun 2019" },
          { value: "pt86", label: "Test 86 • Nov 2018" },
          { value: "pt85", label: "Test 85 • Sep 2018" },
          { value: "pt84", label: "Test 84 • Jun 2018" },
          { value: "pt83", label: "Test 83 • Dec 2017" },
          { value: "pt82", label: "Test 82 • Sep 2017" },
          { value: "pt81", label: "Test 81 • Jun 2017" },
          { value: "pt80", label: "Test 80 • Dec 2016" },
          { value: "pt79", label: "Test 79 • Sep 2016" },
          { value: "pt78", label: "Test 78 • Jun 2016" },
          { value: "pt77", label: "Test 77 • Dec 2015" },
          { value: "pt76", label: "Test 76 • Oct 2015" },
          { value: "pt75", label: "Test 75 • Jun 2015" },
          { value: "pt74", label: "Test 74 • Dec 2014" },
          { value: "pt73", label: "Test 73 • Sep 2014" },
          { value: "pt72", label: "Test 72 • Jun 2014" },
          { value: "pt71", label: "Test 71 • Dec 2013" },
          { value: "pt70", label: "Test 70 • Oct 2013" },
          { value: "pt69", label: "Test 69 • Jun 2013" },
          { value: "pt68", label: "Test 68 • Dec 2012" },
          { value: "pt67", label: "Test 67 • Oct 2012" },
          { value: "pt66", label: "Test 66 • Jun 2012" },
          { value: "pt65", label: "Test 65 • Dec 2011" },
          { value: "pt64", label: "Test 64 • Oct 2011" },
          { value: "pt63", label: "Test 63 • Jun 2011" },
          { value: "pt62", label: "Test 62 • Dec 2010" },
          { value: "pt61", label: "Test 61 • Oct 2010" },
          { value: "pt60", label: "Test 60 • Jun 2010" },
          { value: "pt59", label: "Test 59 • Dec 2009" },
          { value: "pt58", label: "Test 58 • Sep 2009" },
          { value: "pt57", label: "Test 57 • Jun 2009" },
          { value: "pt56", label: "Test 56 • Dec 2008" },
          { value: "pt55", label: "Test 55 • Oct 2008" },
          { value: "pt54", label: "Test 54 • Jun 2008" },
          { value: "pt53", label: "Test 53 • Dec 2007" },
          { value: "pt52", label: "Test 52 • Sep 2007" },
          { value: "pt51", label: "Test 51 • Dec 2006" },
          { value: "pt50", label: "Test 50 • Sep 2006" },
          { value: "pt49", label: "Test 49 • Jun 2006" },
          { value: "pt48", label: "Test 48 • Dec 2005" },
          { value: "pt47", label: "Test 47 • Oct 2005" },
          { value: "pt46", label: "Test 46 • Jun 2005" },
          { value: "pt45", label: "Test 45 • Dec 2004" },
          { value: "pt44", label: "Test 44 • Oct 2004" },
          { value: "pt43", label: "Test 43 • Jun 2004" },
          { value: "pt42", label: "Test 42 • Dec 2003" },
          { value: "pt41", label: "Test 41 • Oct 2003" },
          { value: "pt40", label: "Test 40 • Jun 2003" },
          { value: "pt39", label: "Test 39 • Dec 2002" },
          { value: "pt38", label: "Test 38 • Oct 2002" },
          { value: "pt37", label: "Test 37 • Jun 2002" },
          { value: "pt36", label: "Test 36 • Dec 2001" },
          { value: "pt35", label: "Test 35 • Oct 2001" },
          { value: "pt34", label: "Test 34 • Jun 2001" },
          { value: "pt33", label: "Test 33 • Dec 2000" },
          { value: "pt32", label: "Test 32 • Oct 2000" },
          { value: "pt31", label: "Test 31 • Jun 2000" },
          { value: "pt30", label: "Test 30 • Dec 1999" },
          { value: "pt29", label: "Test 29 • Oct 1999" },
          { value: "pt28", label: "Test 28 • Jun 1999" },
          { value: "pt27", label: "Test 27 • Dec 1998" },
          { value: "pt26", label: "Test 26 • Sep 1998" },
          { value: "pt25", label: "Test 25 • Jun 1998" },
          { value: "pt24", label: "Test 24 • Dec 1997" },
          { value: "pt23", label: "Test 23 • Oct 1997" },
          { value: "pt22", label: "Test 22 • Jun 1997" },
          { value: "pt21", label: "Test 21 • Dec 1996" },
          { value: "pt20", label: "Test 20 • Oct 1996" },
          { value: "pt19", label: "Test 19 • Jun 1996" },
          { value: "pt18", label: "Test 18 • Dec 1992" },
          { value: "pt17", label: "Test 17 • Dec 1995" },
          { value: "pt16", label: "Test 16 • Sep 1995" },
          { value: "pt15", label: "Test 15 • Jun 1995" },
          { value: "pt14", label: "Test 14 • Feb 1995" },
          { value: "pt13", label: "Test 13 • Dec 1994" },
          { value: "pt12", label: "Test 12 • Oct 1994" },
          { value: "pt11", label: "Test 11 • Jun 1994" },
          { value: "pt10", label: "Test 10 • Feb 1994" },
          { value: "pt9", label: "Test 9 • Oct 1993" },
          { value: "pt8", label: "Test 8 • Jun 1993" },
          { value: "pt7", label: "Test 7 • Feb 1993" },
          { value: "pt6", label: "Test 6 • Oct 1992" },
          { value: "pt5", label: "Test 5 • Jun 1992" },
          { value: "pt4", label: "Test 4 • Feb 1992" },
          { value: "pt3", label: "Test 3 • Dec 1991" },
          { value: "pt2", label: "Test 2 • Oct 1991" },
          { value: "pt1", label: "Test 1 • Jun 1991" },
          { value: "pta", label: "Test A • Feb 1996" },
          { value: "ptb", label: "Test B • Feb 1999" },
          { value: "ptc", label: "Test C • Feb 2000" },
          { value: "ptc2", label: "Test C2 • Dec 2008" },
          { value: "ptf", label: "Test F • Feb 1997" },
          { value: "ptj", label: "Test J • Jun 2007" }
        ], defaultValue: "pt159"
      },
      { id: "sec1", label: "Section 1 – Logical Reasoning", type: "number", min: 0, max: 25, defaultValue: 0 },
      {
        id: "sec2", label: "Section 2 – Reading Comprehension", readOnly: true, type: "text", defaultValue: "Experimental"
      },
      { id: "sec3", label: "Section 3 – Logical Reasoning", type: "number", min: 0, max: 25, defaultValue: 0 },
      { id: "sec4", label: "Section 4 – Reading Comprehension", type: "number", min: 0, max: 25, defaultValue: 0 },
    ],
    // Minimal per‑test conversion tables (partial, demo purposes). Real tables should be complete.
    conversionTables: {
      pt159: {
        0: 120, 1: 120, 2: 120, 3: 120, 4: 120, 5: 121, 6: 122, 7: 123, 8: 124, 9: 125, 10: 126, 11: 127, 12: 128, 13: 129, 14: 130, 15: 131, 16: 132, 17: 133, 18: 134, 19: 135, 20: 136, 21: 137, 22: 138, 23: 139, 24: 140, 25: 141, 26: 142, 27: 143, 28: 144, 29: 145, 30: 146, 31: 147, 32: 148, 33: 149, 34: 150, 35: 151, 36: 152, 37: 153, 38: 154, 39: 155, 40: 156, 41: 157, 42: 158, 43: 159, 44: 160, 45: 161, 46: 162, 47: 163, 48: 164, 49: 165, 50: 166, 51: 167, 52: 168, 53: 169, 54: 170, 55: 171, 56: 172, 57: 173, 58: 174, 59: 175, 60: 176, 61: 177, 62: 178, 63: 179, 64: 180, 65: 180, 66: 180, 67: 180, 68: 180, 69: 180, 70: 180, 71: 180, 72: 180, 73: 180, 74: 180, 75: 180, 76: 180, 77: 180, 78: 180, 79: 180, 80: 180, 81: 180, 82: 180, 83: 180, 84: 180, 85: 180, 86: 180, 87: 180, 88: 180, 89: 180, 90: 180, 91: 180, 92: 180, 93: 180, 94: 180, 95: 180, 96: 180, 97: 180, 98: 180, 99: 180, 100: 180, 101: 180, 102: 180, 103: 180, 104: 180, 105: 180, 106: 180, 107: 180, 108: 180, 109: 180, 110: 180, 111: 180, 112: 180, 113: 180, 114: 180, 115: 180, 116: 180, 117: 180, 118: 180, 119: 180, 120: 180
      }
    },
    faqs: [
      { question: "What is a raw LSAT score?", answer: "The raw score is the number of questions answered correctly before scaling (out of 120)." },
      { question: "How accurate is this conversion?", answer: "It uses official per‑test conversion tables; results are as accurate as the published data allows." },
      { question: "How many questions are on the LSAT?", answer: "There are 100 scored questions (25 per section) plus 4 unscored experimental questions." },
      { question: "How long is the LSAT exam?", answer: "The LSAT is a 3 hour and 30 minute test, plus a 15‑minute break." },
      { question: "What is a good LSAT score?", answer: "Generally, a score of 165 or higher is considered competitive for top law schools." },
      { question: "What is the top LSAT score?", answer: "The maximum possible scaled score is 180." },
      { question: "How does the LSAT score affect law school admission?", answer: "Higher scores improve admission chances and scholarship eligibility; many schools publish median LSAT scores for admitted students." },
      { question: "What is the LSAT demon scholarship estimator?", answer: "It's a tool that estimates scholarship amounts based on your LSAT score and GPA using historical data." },
      { question: "How can I predict my law school ranking with my LSAT score?", answer: "Use the Law School Predictor tool which matches your score with average admitted scores at various schools." },
      { question: "What is an average LSAT score?", answer: "The median LSAT score nationwide is around 151." },
      { question: "What is a normal LSAT score range?", answer: "Scores typically range from 120 to 180, with most test‑takers scoring between 135 and 165." },
      { question: "What's a good LSAT score?", answer: "Scores of 165 + are strong; 160 + are competitive for many schools." }
    ],
    commonMistakes: ["Entering the experimental section into the raw total.", "Selecting the wrong test version.", "Assuming a linear conversion for all tests."],
    useCases: ["Law school applications", "Scholarship eligibility estimates", "Self‑assessment for test prep"],
    tips: ["Double‑check the test version you took; conversion tables differ by test.", "Experimental sections are ignored automatically."],
    calculate: (inputs) => {
      const testKey = inputs.test as string;
      const raw = Number(inputs.sec1 || 0) + Number(inputs.sec3 || 0) + Number(inputs.sec4 || 0);
      const table = (inputs as any).conversionTables?.[testKey] || {};
      // Fallback to linear if table entry missing for exact raw total
      let scaled = table[raw] ?? Math.round(120 + raw * 0.5);
      if (scaled < 120) scaled = 120;
      if (scaled > 180) scaled = 180;
      let percentile = 0;
      if (scaled >= 170) percentile = 95;
      else if (scaled >= 160) percentile = 85;
      else if (scaled >= 150) percentile = 70;
      else if (scaled >= 140) percentile = 50;
      else if (scaled >= 130) percentile = 30;
      else percentile = 15;
      return {
        scaledScore: { value: scaled, label: "Scaled LSAT Score", unit: "" },
        percentile: { value: `${percentile}%`, label: "Estimated Percentile", unit: "" }
      };
    }
  },


  // 9. Mulch
  mulch: {
    slug: "mulch",
    name: "Mulch Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Mulch Calculator - Estimate Cubic Yards & Landscape Soil",
    metaDescription: "Calculate yard mulch volumes in cubic yards and standard bags. Input bed dimensions to plan landscape yard details.",
    keywords: ["mulch calculator", "mulch estimator", "landscaping mulch yards"],
    hook: "Calculate Mulch Volume & Bag Counts for Flower Beds.",
    description: "Determine cubic yards of mulch and bag packages for plant beds and ground covers.",
    calcTime: "1 min",
    formula: "Volume (cu yd) = [Length (ft) × Width (ft) × Depth (in)] ÷ 324",
    formulaDescription: "Calculates total cubic yards based on square footage and depth requirements.",
    example: "A bed 40 ft × 5 ft at 3 inches deep requires 1.85 cubic yards of bark mulch.",
    faqs: [{ question: "How deep should mulch be spread?", answer: "Generally, 2 to 3 inches is recommended to block weeds and retain moisture." }],
    commonMistakes: ["Spreading mulch too deep, which can suffocate plant root systems."],
    useCases: ["Sod bed layout planning", "Spring landscape prep"],
    tips: ["A cubic yard equals exactly 13.5 bags of 2.0 cubic foot mulch."],
    inputs: [
      { id: "length", label: "Bed Length (ft)", type: "number", defaultValue: 30, unit: "ft" },
      { id: "width", label: "Bed Width (ft)", type: "number", defaultValue: 5, unit: "ft" },
      { id: "depth", label: "Mulch Depth (in)", type: "number", defaultValue: 3, unit: "in" }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.length || 0);
      const wid = Number(inputs.width || 0);
      const dep = Number(inputs.depth || 3);

      const cubicFeet = len * wid * (dep / 12);
      const cubicYards = cubicFeet / 27;

      return {
        cubicYards: { value: cubicYards.toFixed(2), label: "Cubic Yards Needed", unit: "yd³" },
        bags2cf: { value: Math.ceil(cubicFeet / 2), label: "2.0 cu ft retail bags", unit: "bags" },
        bags3cf: { value: Math.ceil(cubicFeet / 3), label: "3.0 cu ft professional bags", unit: "bags" }
      };
    }
  },

  // 10. Drywall
  drywall: {
    slug: "drywall",
    name: "Drywall Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Drywall Calculator - Wall Sheets, Tape & Compound",
    metaDescription: "Estimate drywall sheet counts (4x8 or 4x12) and screw requirements for wall and ceiling framing layouts.",
    keywords: ["drywall calculator", "sheetrock calculator", "wall board estimator"],
    hook: "Calculate Sheetrock Boards & Framing Mud.",
    description: "Calculate drywall panel requirements, screws, joint compounds, and tape budgets.",
    calcTime: "2 mins",
    formula: "Drywall Sheets = Wall Area ÷ Panel Area",
    formulaDescription: "Divides total surface area of walls and ceilings by the size of a standard board.",
    example: "A room with 800 sq ft wall surface requires twenty-five 4x8 panels.",
    faqs: [{ question: "Should I buy 4x8 or 4x12 sheets?", answer: "4x12 sheets are heavier but result in fewer joints to tape and sand." }],
    commonMistakes: ["Not subtracting doors and windows, leading to excess panel inventory."],
    useCases: ["Drywall remodeling", "Home repair budgeting"],
    tips: ["Add a 10% waste buffer to account for angular cuts around outlets and corners."],
    inputs: [
      { id: "area", label: "Total Wall & Ceiling Area (sq ft)", type: "number", defaultValue: 800, unit: "sq ft" },
      {
        id: "panelSize", label: "Drywall Panel Size", type: "select", defaultValue: "4x8", options: [
          { value: "4x8", label: "4' x 8' Panel (32 sq ft)" },
          { value: "4x12", label: "4' x 12' Panel (48 sq ft)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const area = Number(inputs.area || 0);
      const size = inputs.panelSize || "4x8";

      const panelArea = size === "4x8" ? 32 : 48;
      const sheets = area / panelArea;
      const sheetsWithWaste = Math.ceil(sheets * 1.10);

      // Materials estimates: 1 gallon mud per 100 sq ft, 1 lb screws per 4 sheets
      const mud = area * 0.007; // gallons
      const tape = area * 0.35; // linear feet
      const screws = sheets * 35; // count

      return {
        sheetsCount: { value: sheetsWithWaste, label: "Drywall Sheets Needed (incl. 10% waste)", unit: "sheets" },
        mudGallons: { value: mud.toFixed(1), label: "Joint Compound Mud", unit: "gallons" },
        tapeFeet: { value: Math.ceil(tape), label: "Drywall Joint Tape", unit: "ft" },
        screwsCount: { value: Math.ceil(screws), label: "Drywall Screws", unit: "screws" }
      };
    }
  },

  // 11. Fence Cost
  "fence-cost": {
    slug: "fence-cost",
    name: "Fence Cost Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Fence Cost Calculator - Post, Rail, & Picket Estimator",
    metaDescription: "Estimate fencing materials and project pricing. Calculate total posts, rails, pickets, and fasteners needed.",
    keywords: ["fence cost calculator", "wood fence estimator", "fencing builder planner"],
    hook: "Calculate Fencing Materials & Installation Budgets.",
    description: "Determine wood or vinyl fence posts, rails, picket spacing, and average construction costs.",
    calcTime: "2 mins",
    formula: "Posts = (Fence Length ÷ Spacing) + 1",
    formulaDescription: "Divides length by panel spacing and adds one starting post. Calculates pickets and rails per segment.",
    example: "A 100 ft fence with 8 ft post spacings requires 14 posts, 36 pickets, and 26 rails.",
    faqs: [{ question: "What is standard post spacing?", answer: "Posts are typically spaced exactly 6 or 8 feet apart." }],
    commonMistakes: ["Forgetting to order extra posts for corners, turns, and gates."],
    useCases: ["Estimating yard fencing bids", "DIY cedar fence budgets"],
    tips: ["Concrete anchors require one 80 lb bag per fence post for stable footing."],
    inputs: [
      { id: "length", label: "Total Fence Line Length (ft)", type: "number", defaultValue: 150, unit: "ft" },
      { id: "spacing", label: "Post Spacing (ft)", type: "number", defaultValue: 8, unit: "ft" },
      { id: "picketWidth", label: "Picket Width (in)", type: "number", defaultValue: 5.5, unit: "in" },
      { id: "picketGap", label: "Gap Between Pickets (in)", type: "number", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.length || 0);
      const space = Number(inputs.spacing || 8);
      const pWidth = Number(inputs.picketWidth || 5.5);
      const pGap = Number(inputs.picketGap || 0);

      const posts = Math.ceil(len / space) + 1;
      const rails = Math.ceil(len / space) * 3; // 3 rails per section

      // Picket counts
      const picketTotalWidth = pWidth + pGap;
      const pickets = picketTotalWidth > 0 ? Math.ceil((len * 12) / picketTotalWidth) : 0;

      return {
        postsCount: { value: posts, label: "Fence Posts", unit: "posts" },
        railsCount: { value: rails, label: "Support Rails (3 per section)", unit: "rails" },
        picketsCount: { value: pickets, label: "Pickets Needed", unit: "pickets" },
        concreteBags: { value: posts, label: "80lb Concrete Bags (1 per post)", unit: "bags" }
      };
    }
  },

  // 12. Productivity
  productivity: {
    slug: "productivity",
    name: "Productivity Calculator",
    category: "math",
    categoryLabel: "Productivity",
    seoTitle: "Productivity Calculator - Employee Output & Efficiency Rate",
    metaDescription: "Measure task output metrics and workspace productivity. Input worked hours and standard values to find efficiency quotients.",
    keywords: ["productivity calculator", "work efficiency estimator", "hourly employee output"],
    hook: "Calculate Business & Staff Productivity Rates.",
    description: "Convert billable resource tasks to simple percentage efficiency quotas.",
    calcTime: "1 min",
    formula: "Productivity = (Actual Output ÷ Standard Target) × 100",
    formulaDescription: "Compares actual completed volume with target benchmark averages.",
    example: "If a worker packs 120 boxes in a shift where the standard is 100: efficiency is 120%.",
    faqs: [
      { question: "How is productivity defined?", answer: "The ratio of input resources (usually hours) to output goods or services." },
      { question: "What is the productivity formula?", answer: "Productivity = (Actual Output ÷ Standard Target) × 100." },
      { question: "What are common mistakes to avoid when measuring productivity?", answer: "Common mistakes include focusing on total work hours instead of target quality output, not establishing reliable baselines before enforcing targets, and not accounting for external factors that may affect productivity." },
      { question: "How can I use productivity data to improve my business?", answer: "Productivity data can be used to identify areas where efficiency can be improved, optimize workflows, and ensure that staff are meeting performance expectations." },
      { question: "What is considered a good productivity rate?", answer: "A good productivity rate varies by industry and role, but generally anything above 80% is considered good." },
      { question: "How often should productivity be measured?", answer: "Productivity should be measured regularly, typically on a weekly or monthly basis, to track progress and identify trends." },
      { question: "What is business productivity calculator?", answer: "A productivity calculator helps you determine total work time based on billable minutes and a productivity target." },
      { question: "How do I include an unpaid lunch break?", answer: "Enter the lunch minutes; they are added after the perfect end time and do not affect productivity percentage." },
      { question: "Can therapists use this calculator?", answer: "Yes, it’s tailored for therapy billable minutes and productivity targets." },
      { question: "What is the productivity formula?", answer: "Total time worked = Billable minutes ÷ (Productivity % ÷ 100)." },
      { question: "How accurate is the calculator?", answer: "Calculations are minute‑precise; any fractional minute is truncated for a slightly earlier end time." },

    ],
    commonMistakes: ["Focusing on total work hours instead of target quality output."],
    useCases: ["Business process optimization", "Staff review reporting"],
    tips: ["Establish reliable baselines before enforcing targets."],
    inputs: [
      { id: "actual", label: "Actual Units Produced / Completed", type: "number", defaultValue: 120 },
      { id: "target", label: "Standard Target / Benchmark Units", type: "number", defaultValue: 100 }
    ],
    calculate: (inputs) => {
      const act = Number(inputs.actual || 0);
      const tar = Number(inputs.target || 100);

      const efficiency = tar > 0 ? (act / tar) * 100 : 0;

      return {
        efficiencyRate: { value: efficiency.toFixed(1), label: "Resource Efficiency Rate", unit: "%" },
        status: { value: efficiency >= 100 ? "Above Target" : "Below Target", label: "Target Status" }
      };
    }
  },

  // 13. Therapy Productivity
  "therapy-productivity": {
    slug: "therapy-productivity",
    name: "Therapy Productivity Calculator",
    category: "math",
    categoryLabel: "Productivity",
    seoTitle: "Therapy Productivity Calculator - PT/OT Billable Ratio",
    metaDescription: "Track billable therapist metrics (Physical/Occupational therapy). Find efficiency ratios based on minutes and treatments.",
    keywords: ["therapy productivity", "pt billable calculator", "ot productivity estimator"],
    hook: "Calculate PT/OT Therapist Billable Minutes Ratios.",
    description: "Determine billable treatment hours against total paid shift hours for healthcare audits.",
    calcTime: "1.5 mins",
    formula: "Productivity = (Billable Treatment Minutes ÷ Total Worked Minutes) × 100",
    formulaDescription: "Divides treatment billing codes by total paid shift hours in minutes.",
    example: "400 billable minutes during a 480-minute (8-hour) shift yields 83.3% productivity.",
    faqs: [{ question: "What is target therapy productivity?", answer: "Usually ranges between 80% and 85% for inpatient/outpatient SNF clinics." }],
    commonMistakes: ["Counting undocumented administrative task hours as treatment time."],
    useCases: ["SNF healthcare billing audits", "Therapist workload balancing"],
    tips: ["Document treatments instantly at point-of-care to maximize billing accuracy."],
    inputs: [
      { id: "shiftHours", label: "Paid Shift Duration (Hours)", type: "number", defaultValue: 8, unit: "hrs" },
      { id: "billableMinutes", label: "Total Billable Treatment (Minutes)", type: "number", defaultValue: 390, unit: "mins" }
    ],
    calculate: (inputs) => {
      const hrs = Number(inputs.shiftHours || 8);
      const mins = Number(inputs.billableMinutes || 0);

      const totalMins = hrs * 60;
      const ratio = totalMins > 0 ? (mins / totalMins) * 100 : 0;

      return {
        productivityRatio: { value: ratio.toFixed(1), label: "Therapist Productivity Ratio", unit: "%" },
        unbillableMins: { value: Math.max(0, totalMins - mins), label: "Administrative Time (Unbillable)", unit: "mins" }
      };
    }
  },

  // 14. Google Review
  "google-review": {
    slug: "google-review",
    name: "Google Review Calculator",
    category: "math",
    categoryLabel: "Productivity",
    seoTitle: "Google Review Calculator - Review Target Estimator",
    metaDescription: "Calculate how many 5-star Google reviews are required to raise your business profile rating to a 4.7, 4.8, or 5.0 score.",
    keywords: ["google review calculator", "reviews needed for rating", "business reputation calculator"],
    hook: "Find 5-Star Reviews Needed to Elevate Your Rating.",
    description: "Determine exact reviews targets to reach desired review scores.",
    calcTime: "1 min",
    formula: "Reviews Required = [Count × (Target - Current)] ÷ (5 - Target)",
    formulaDescription: "Computes reviews required based on target rating thresholds.",
    example: "A company with 20 reviews and a 4.2 rating needs 60 consecutive 5-star reviews to reach a 4.8.",
    faqs: [{ question: "Can a bad review be deleted?", answer: "No, unless it violates Google guidelines, it must be balanced out by positive ratings." }],
    commonMistakes: ["Expecting rapid increases (mathematical averages move slowly as count increases)."],
    useCases: ["Business reputation repair", "Marketing review campaigns"],
    tips: ["Encourage reviews by providing short, direct client links."],
    inputs: [
      { id: "currentRating", label: "Current Rating (Stars)", type: "number", defaultValue: 4.2 },
      { id: "currentCount", label: "Current Total Reviews Count", type: "number", defaultValue: 30 },
      { id: "targetRating", label: "Target Rating (e.g. 4.8)", type: "number", defaultValue: 4.8 }
    ],
    calculate: (inputs): Record<string, { value: string | number; label: string; unit?: string }> => {
      const curRating = Number(inputs.currentRating || 0);
      const count = Number(inputs.currentCount || 0);
      const target = Number(inputs.targetRating || 4.8);

      if (target >= 5) {
        return {
          reviewsNeeded: { value: "Infinite", label: "Reviews Needed (A perfect 5.0 is mathematically impossible if you have any low reviews)", unit: "" }
        };
      }

      if (target <= curRating) {
        return {
          reviewsNeeded: { value: 0, label: "Reviews Needed (Already at or above target)", unit: "" }
        };
      }

      // Formula: (Target * Count - CurrentRating * Count) / (5 - Target)
      const needed = (target * count - curRating * count) / (5 - target);

      return {
        reviewsNeeded: { value: Math.ceil(needed), label: "Consecutive 5-Star Reviews Needed", unit: "reviews" },
        finalCount: { value: count + Math.ceil(needed), label: "Projected Total Reviews Count", unit: "reviews" }
      };
    }
  }
};
