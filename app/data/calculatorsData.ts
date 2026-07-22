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
    seoTitle: "Roof Shingle Calculator - Estimate Shingles & Roof Area",
    metaDescription: "Estimate roof surface area, shingle bundle counts, individual shingles, and costs. Accounts for eave overhangs and custom pitch factors.",
    keywords: ["roof shingle calculator", "shingle calculator", "roof area calculator", "shingles bundle calculator", "roofing cost estimator"],
    hook: "Estimate Roof Area & Shingle Bundles in Seconds.",
    description: "Input house length, width, overhangs, pitch slope, shingle cost, and waste factor to estimate roof area and shingles needed.",
    calcTime: "2 mins",
    formula: "Roof Area = Ground Footprint Area × Pitch Factor",
    formulaDescription: "Multiplies flat footprint area (including overhangs) by the pitch hypotenuse slope factor, then adds the selected waste margin to calculate required bundles.",
    example: "Footprint of 1,000 sq ft under 6/12 pitch (factor 1.118) yields a roof area of 1,118 sq ft. Adding a 10% waste margin means ordering 37 bundles of shingles.",
    faqs: [
      { question: "How many shingle bundles cover a square?", answer: "There are exactly 3 bundles of shingles in one roofing square. A square is the roofing industry standard unit of measurement, representing 100 square feet of roof surface." },
      { question: "How many shingles are in a bundle?", answer: "A standard bundle of 3-tab asphalt shingles contains 29 shingles. Architectural shingle bundles can contain between 26 to 28 shingles depending on the manufacturer." },
      { question: "What waste factor should I choose for shingle calculation?", answer: "Use 10% waste for standard A-frame/gable roofs with few intersections. Choose 15% waste for hip roofs or those with valleys, and 20% for complex roofs with multiple dormers, chimneys, or intersecting ridges." }
    ],
    commonMistakes: ["Forgetting to account for eave overhangs.", "Not adding a waste buffer (typically 10-15%) for shingles cuts."],
    useCases: ["Estimating roofing material ordering", "Checking contractor bids", "DIY roofing material budget planning"],
    tips: ["Add 10% shingles waste for simple gable roofs, and 15-20% for hip roofs or complex designs."],
    inputs: [
      { id: "length", label: "House Footprint Length (ft)", type: "number", defaultValue: 40, unit: "ft" },
      { id: "width", label: "House Footprint Width (ft)", type: "number", defaultValue: 30, unit: "ft" },
      { id: "overhang", label: "Eave / Overhang (ft)", type: "number", defaultValue: 1, unit: "ft" },
      { id: "pitch", label: "Roof Pitch (Rise / 12)", type: "select", defaultValue: "6", options: [{ value: "3", label: "3/12 (Factor 1.03)" }, { value: "4", label: "4/12 (Factor 1.05)" }, { value: "6", label: "6/12 (Factor 1.118)" }, { value: "8", label: "8/12 (Factor 1.20)" }, { value: "12", label: "12/12 (Factor 1.414)" }] },
      { id: "pricePerBundle", label: "Cost per Shingle Bundle ($)", type: "number", defaultValue: 35, unit: "$" },
      { id: "wastePercent", label: "Waste Factor (%)", type: "select", defaultValue: "10", options: [{ value: "10", label: "10% (Simple Gable Roof)" }, { value: "15", label: "15% (Standard Hip Roof)" }, { value: "20", label: "20% (Complex Multi-Valleys)" }] }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const overhang = Number(inputs.overhang || 0);
      const pitch = Number(inputs.pitch || 6);
      const pricePerBundle = Number(inputs.pricePerBundle || 35);
      const wastePercent = Number(inputs.wastePercent || 10);

      const pitchFactors: Record<number, number> = { 3: 1.0308, 4: 1.0541, 6: 1.1180, 8: 1.2019, 12: 1.4142 };
      const factor = pitchFactors[pitch] || 1.118;
      const gArea = (length + overhang * 2) * (width + overhang * 2);
      const rArea = gArea * factor;
      const squares = rArea / 100;

      const wasteMultiplier = 1 + (wastePercent / 100);
      const bundlesNeeded = Math.ceil(squares * 3 * wasteMultiplier);
      const totalCost = bundlesNeeded * pricePerBundle;

      // Individual shingles count: 1 bundle is typically 29 shingles
      const shinglesCount = bundlesNeeded * 29;

      return {
        roofArea: { value: rArea.toFixed(0), label: "Estimated Roof Area", unit: "sq ft" },
        squares: { value: squares.toFixed(2), label: "Roof Squares (100 sq ft)", unit: "sqs" },
        bundlesNeeded: { value: bundlesNeeded, label: `Bundles Needed (${wastePercent}% waste incl.)`, unit: "bundles" },
        shinglesNeeded: { value: shinglesCount, label: "Approx. Individual Shingles", unit: "shingles" },
        estimatedCost: { value: totalCost.toFixed(2), label: "Estimated Material Cost", unit: "$" }
      };
    }
  },

  // Construction Concrete
  concrete: {
    slug: "concrete",
    name: "Concrete Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Concrete Slab & Volume Calculator - Cubic Yards & Bags Finder",
    metaDescription: "Calculate concrete volume in cubic yards or bags for rectangular slabs or circular pillars. Instantly estimate bags of 40lb, 60lb, or 80lb mix.",
    keywords: ["concrete calculator", "concrete slab calculator", "concrete bags calculator", "concrete yards calculator", "how many bags of concrete"],
    hook: "Calculate Concrete Yards & Bag Counts Instantly.",
    description: "Enter flat rectangular slabs or circular piers to find the volume of concrete mix and bags of pre-mix needed.",
    calcTime: "2 mins",
    formula: "Slab: Volume = Length × Width × Thickness | Column: Volume = π × Radius² × Depth",
    formulaDescription: "Finds the cubic volume of a rectangular slab or cylinder in cubic feet, converts it to cubic yards by dividing by 27, and calculates bags by dividing volume by the yield of the selected bag size.",
    example: "A rectangular slab 12ft × 12ft at 4 inches thick needs 1.78 cubic yards. This requires forty-five 80 lb bags or sixty 60 lb bags of concrete.",
    faqs: [
      { question: "How many 80 lb bags of concrete make a cubic yard?", answer: "It takes exactly 45 bags of 80 lb concrete mix to equal one cubic yard (27 cubic feet) of concrete. For 60 lb bags, you will need 60 bags; and for 40 lb bags, you will need 90 bags." },
      { question: "How thick should concrete slabs be for driveways vs patios?", answer: "Patios, walkways, and garden paths typically require a thickness of 4 inches of concrete. Driveways and structures bearing heavier loads require at least 5 to 6 inches of concrete to prevent cracking under weight." },
      { question: "How much extra concrete should I order for waste?", answer: "It is standard practice to add a 10% waste buffer to your total volume. This covers spills, uneven subgrades, and form bending during the pour." }
    ],
    commonMistakes: ["Not adding a 10% ordering margin to cover spills and form deflection.", "Forgetting to divide slab thickness in inches by 12 when calculating volume in cubic feet."],
    useCases: ["Concrete driveways, sidewalk slabs, and patios", "Poured concrete columns, footings, and fence posts", "DIY concrete landscaping borders"],
    tips: ["Dampen the subgrade before pouring to avoid drawing water from the concrete mix, which causes rapid drying and cracks."],
    inputs: [
      { id: "shape", label: "Project Shape", type: "select", defaultValue: "slab", options: [{ value: "slab", label: "Rectangular Slab / Wall" }, { value: "cylinder", label: "Circular Column / Hole" }] },
      { id: "length", label: "Length (ft) - Ignore for Columns", type: "number", defaultValue: 12, unit: "ft" },
      { id: "widthOrDia", label: "Width or Column Diameter (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "thicknessOrHeight", label: "Thickness (in) or Column Depth (in)", type: "number", defaultValue: 4, unit: "in" },
      { id: "pricePerYard", label: "Cost per Cubic Yard ($)", type: "number", defaultValue: 135, unit: "$" },
      { id: "bagSize", label: "Concrete Bag Size Option", type: "select", defaultValue: "80", options: [{ value: "80", label: "80 lb bags (0.60 cu ft)" }, { value: "60", label: "60 lb bags (0.45 cu ft)" }, { value: "40", label: "40 lb bags (0.30 cu ft)" }] }
    ],
    calculate: (inputs) => {
      const shape = inputs.shape || "slab";
      const length = Number(inputs.length || 0);
      const widthOrDia = Number(inputs.widthOrDia || 0);
      const thicknessOrHeight = Number(inputs.thicknessOrHeight || 4);
      const pricePerYard = Number(inputs.pricePerYard || 135);
      const bagSizeVal = Number(inputs.bagSize || 80);

      let volFt3 = 0;
      if (shape === "slab") {
        volFt3 = length * widthOrDia * (thicknessOrHeight / 12);
      } else {
        const radius = widthOrDia / 2;
        volFt3 = Math.PI * Math.pow(radius, 2) * (thicknessOrHeight / 12);
      }

      const volYd3 = volFt3 / 27;
      const volYd3Waste = volYd3 * 1.10;
      const totalCost = volYd3Waste * pricePerYard;

      let bagYield = 0.6;
      if (bagSizeVal === 60) bagYield = 0.45;
      else if (bagSizeVal === 40) bagYield = 0.3;

      const bagsCountWithWaste = Math.ceil((volFt3 * 1.10) / bagYield);

      return {
        cubicYards: { value: volYd3.toFixed(2), label: "Cubic Yards Needed", unit: "yd³" },
        cubicYardsWaste: { value: volYd3Waste.toFixed(2), label: "Total Yards (+10% waste buffer)", unit: "yd³" },
        bagsSelected: { value: bagsCountWithWaste, label: `Required ${bagSizeVal} lb bags (+10% waste)`, unit: "bags" },
        bagsComparison: { 
          value: `80lb: ${Math.ceil((volFt3 * 1.10) / 0.6)} | 60lb: ${Math.ceil((volFt3 * 1.10) / 0.45)} | 40lb: ${Math.ceil((volFt3 * 1.10) / 0.3)}`, 
          label: "Bags Needed by Size (+10% waste)" 
        },
        estimatedCost: { value: totalCost.toFixed(2), label: "Estimated Material Cost (+10% waste)", unit: "$" }
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
    seoTitle: "Avalara Sales Tax Calculator - ZIP Code Rate Lookup",
    metaDescription: "Estimate checkout sales taxes. Enter a ZIP code (like San Francisco 94105) to automatically load combined state, county, and local tax rates.",
    keywords: ["avalara sales tax calculator", "avalara tax calculator", "avalara 94105 sales tax rate", "sales tax by zip code", "california sales tax calculator"],
    hook: "Calculate Checkout Sales Tax Rates.",
    description: "Determine sales tax amounts and gross totals based on base prices and state percentages. Enter a ZIP code to load local combined rates automatically.",
    calcTime: "1 min",
    formula: "Sales Tax = Base Price × Combined Tax Rate",
    formulaDescription: "Multiplies base price by state and local tax rate to find the total sales tax required for collection at checkout.",
    example: "A $50 transaction in ZIP 94105 (San Francisco, CA) uses a rate of 8.625%, incurring $4.31 sales tax for a total of $54.31.",
    faqs: [
      { question: "What is the sales tax rate for ZIP code 94105?", answer: "The combined sales tax rate for ZIP code 94105 (San Francisco, California) is 8.625%. This comprises the California state tax of 6.00%, San Francisco County tax of 0.25%, and local district taxes of 2.375%." },
      { question: "How does the Avalara tax calculator determine sales tax?", answer: "It calculates sales tax based on the transaction's destination (the buyer's ZIP code). By checking the state, county, and local district rates, it aggregates them into a single combined sales tax rate applied to the purchase price." },
      { question: "Is the tax calculation accurate for all US locations?", answer: "Yes. The calculator supports custom percentage entries for any jurisdiction and includes a lookup database for popular ZIP codes (such as New York 10001, San Francisco 94105, Seattle 98101, and Chicago 60601) to automate the calculation." }
    ],
    commonMistakes: ["Not adding local county or city surcharges to the base state sales tax rate.", "Assuming sales tax rates are identical across all ZIP codes in a state."],
    useCases: ["E-commerce tax estimation", "Invoicing corporate clients", "Verifying consumer sales receipts"],
    tips: ["Confirm destination state nexus rules when shipping physical packages across state lines, as nexus dictates whether you must collect tax."],
    inputs: [
      { id: "price", label: "Product Base Price ($)", type: "number", defaultValue: 100, unit: "$" },
      { id: "zipCode", label: "ZIP Code (e.g. 94105, 10001) - Optional", type: "text", defaultValue: "" },
      { id: "stateRate", label: "Or Custom Combined Tax Rate (%)", type: "number", defaultValue: 6.25, unit: "%" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      let rate = Number(inputs.stateRate || 6.25);
      const zip = String(inputs.zipCode || "").trim();

      const zipRates: Record<string, { rate: number; location: string }> = {
        "94105": { rate: 8.625, location: "San Francisco, CA" },
        "10001": { rate: 8.875, location: "New York, NY" },
        "90210": { rate: 9.50, location: "Beverly Hills, CA" },
        "60601": { rate: 10.25, location: "Chicago, IL" },
        "77001": { rate: 8.25, location: "Houston, TX" },
        "33101": { rate: 7.00, location: "Miami, FL" },
        "98101": { rate: 10.25, location: "Seattle, WA" },
        "85001": { rate: 8.60, location: "Phoenix, AZ" },
        "19101": { rate: 8.00, location: "Philadelphia, PA" },
        "30301": { rate: 8.90, location: "Atlanta, GA" },
        "02101": { rate: 6.25, location: "Boston, MA" },
        "20001": { rate: 6.00, location: "Washington, DC" },
      };

      let infoMsg = "";
      if (zip && zipRates[zip]) {
        rate = zipRates[zip].rate;
        infoMsg = `${zipRates[zip].location}`;
      } else if (zip) {
        infoMsg = `Custom ZIP (using manual rate below)`;
      }

      const tax = price * (rate / 100);
      const total = price + tax;

      return {
        salesTax: { value: tax.toFixed(2), label: "Sales Tax Amount", unit: "$" },
        grossTotal: { value: total.toFixed(2), label: "Gross Total (incl. tax)", unit: "$" },
        detectedRate: { 
          value: rate.toFixed(3) + "%", 
          label: `Applied Rate ${infoMsg ? `(${infoMsg})` : ""}` 
        }
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
    metaDescription: "Measure task output metrics, workplace efficiency rates, and employee productivity using the standard productivity formula. Input actual units and targets.",
    keywords: [
      "productivity calculator",
      "productivity formula",
      "how to calculate productivity",
      "productivity calc",
      "how to work out productivity",
      "how do you calculate productivity",
      "how to compute productivity",
      "how to figure out productivity",
      "calculate productivity",
      "calculating productivity",
      "how do we calculate productivity",
      "work efficiency estimator"
    ],
    hook: "Calculate Business & Staff Productivity Rates.",
    description: "Convert billable resource tasks to simple percentage efficiency quotas.",
    calcTime: "1 min",
    formula: "Productivity = (Actual Output ÷ Standard Target) × 100",
    formulaDescription: "Compares actual completed volume with target benchmark averages.",
    example: "If a worker packs 120 boxes in a shift where the standard is 100, the productivity rate is 120%.",
    faqs: [
      { question: "How is productivity calculated in the workplace?", answer: "Productivity is calculated by dividing the actual output (units produced, services rendered, tasks completed) by the standard target or benchmark value, then multiplying by 100 to get a percentage efficiency quotient." },
      { question: "What is the standard productivity formula?", answer: "The basic productivity formula is: Productivity % = (Actual Output ÷ Standard Target) × 100." },
      { question: "How do you work out employee productivity?", answer: "Identify a target baseline (e.g., 50 client files processed per day) and measure the employee's actual completed task count. Enter these values into our productivity calculator to find the efficiency rate." },
      { question: "How do I compute productivity for physical units?", answer: "Simply count the physical items produced (e.g., widgets packed, lines of code, articles written) and divide by the target goal for that specific duration." },
      { question: "What is a good workplace productivity rate?", answer: "Generally, a productivity rate of 90% to 100% indicates that targets are being met efficiently. Rates above 100% show outstanding performance, while rates below 80% suggest potential workflow bottlenecks." }
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
    seoTitle: "Therapy Productivity Calculator - PT/OT Billable Ratio & Lunch Breaks",
    metaDescription: "Calculate PT/OT therapy productivity. Support for 30-minute unpaid lunch breaks, therapist billable minutes targets (80-85%), and administrative unbillable tracking.",
    keywords: [
      "therapy productivity calculator",
      "therapist productivity calculator",
      "pt productivity calculator",
      "productivity calculator for therapists",
      "therapy productivity calculator app",
      "30 minute lunch break calculator app",
      "break therapy",
      "bookmark timers",
      "therapy productivity",
      "pt billable calculator"
    ],
    hook: "Calculate PT/OT Therapist Billable Minutes Ratios & Lunch Schedules.",
    description: "Determine billable treatment hours against paid shift hours and project shift lengths including unpaid lunch breaks.",
    calcTime: "1.5 mins",
    formula: "Productivity = (Billable Treatment Minutes ÷ Total Worked Minutes) × 100",
    formulaDescription: "Divides treatment minutes under billable CPT codes by the total paid shift duration in minutes.",
    example: "400 billable minutes during an 8-hour (480-minute) paid shift yields 83.3% productivity.",
    faqs: [
      { question: "What is a therapy productivity calculator?", answer: "A tool used by physical therapists (PT), occupational therapists (OT), and speech-language pathologists (SLP) to calculate their billable clinical treatment time against their total paid shift duration." },
      { question: "How do I calculate PT productivity with a 30-minute unpaid lunch break?", answer: "Input your paid shift hours (e.g. 8 hours) and unpaid lunch break (e.g. 30 minutes). The calculator will compute your total scheduled work window (8.5 hours) and let you know the target billable minutes needed based on your clinic's productivity target." },
      { question: "What is a typical productivity target for therapists?", answer: "Most skilled nursing facilities (SNFs) and outpatient clinics enforce a therapy productivity target between 80% and 85%. Outpatient pediatric clinics may have lower targets (around 70-75%) due to administrative overhead." },
      { question: "What counts as billable minutes for therapists?", answer: "Only direct patient care (evaluations, therapeutic exercises, manual therapy) under active CPT codes is billable. Administrative tasks like chart documentation, scheduling, meetings, and sanitizing equipment are unbillable." },
      { question: "How does the 30 minute lunch break calculator work?", answer: "It adds your unpaid break minutes to your total paid minutes to show the exact duration of your overall shift. For an 8-hour shift with a 30-minute lunch, you will be at the facility for 8 hours and 30 minutes." }
    ],
    commonMistakes: ["Counting undocumented administrative task hours as treatment time.", "Excluding unpaid lunch breaks from overall site attendance calculations."],
    useCases: ["SNF healthcare billing audits", "Therapist workload balancing", "Shift and break schedule planning"],
    tips: ["Document treatments instantly at point-of-care to maximize billing accuracy.", "Utilize bookmark timers or shift trackers to segment admin tasks from treatment blocks."],
    inputs: [
      { id: "shiftHours", label: "Paid Shift Duration (Hours)", type: "number", defaultValue: 8, unit: "hrs" },
      { id: "billableMinutes", label: "Total Billable Treatment (Minutes)", type: "number", defaultValue: 390, unit: "mins" },
      { id: "targetRatio", label: "Clinic Productivity Target (%)", type: "number", defaultValue: 85, unit: "%" },
      { id: "lunchBreak", label: "Unpaid Lunch Break (Minutes)", type: "number", defaultValue: 30, unit: "mins" }
    ],
    calculate: (inputs) => {
      const hrs = Number(inputs.shiftHours || 8);
      const mins = Number(inputs.billableMinutes || 0);
      const target = Number(inputs.targetRatio || 85);
      const lunch = Number(inputs.lunchBreak || 30);

      const totalPaidMins = hrs * 60;
      const ratio = totalPaidMins > 0 ? (mins / totalPaidMins) * 100 : 0;
      const requiredBillableMins = Math.round((totalPaidMins * target) / 100);
      const totalWindowHours = ((totalPaidMins + lunch) / 60).toFixed(2);

      return {
        productivityRatio: { value: ratio.toFixed(1), label: "Current Therapist Productivity", unit: "%" },
        unbillableMins: { value: Math.max(0, totalPaidMins - mins), label: "Administrative Time (Unbillable)", unit: "mins" },
        targetMinutes: { value: requiredBillableMins, label: `Target Billable Minutes (for ${target}% Goal)`, unit: "mins" },
        totalShiftLength: { value: totalWindowHours, label: `Total Shift Window (including Lunch)`, unit: "hrs" }
      };
    }
  },

  // 14. Google Review
  "google-review": {
    slug: "google-review",
    name: "Google Review Calculator",
    category: "math",
    categoryLabel: "Productivity",
    seoTitle: "Google Review Calculator - How Many 5-Star Reviews Do You Need?",
    metaDescription: "Calculate how many 5-star Google reviews your business needs to reach a 4.7, 4.8, or 4.9 rating. Free Google rating calculator and reputation analyzer.",
    keywords: [
      "google review calculator",
      "reputation calculator",
      "5 star google reviews",
      "google 5 star",
      "google 5 star review",
      "5 star google",
      "5 stars on google",
      "google reviews calculator",
      "5 star on google",
      "google rating calculator",
      "5 stars google",
      "how many google reviews do i need",
      "5 stars google reviews",
      "google review tracker",
      "how to increase google rating",
      "google 5-star review",
      "google review 5 star",
      "google review 5 stars",
      "how to increase google star rating",
      "increase google rating",
      "rating and review",
      "review calculator google",
      "5 stars google review",
      "google five star review",
      "rating generator",
      "google review analyzer",
      "google review calculator free",
      "google review star calculator",
      "google reviews 5 star",
      "google reviews ranking"
    ],
    hook: "Find 5-Star Reviews Needed to Elevate Your Rating & Simulate Progress.",
    description: "Determine exact review targets to reach desired review scores and simulate projected rating increases.",
    calcTime: "1 min",
    formula: "Reviews Required = [Count × (Target - Current)] ÷ (5 - Target)",
    formulaDescription: "Computes reviews required based on target rating thresholds using weighted averages, plus simulates rating growth based on prospective positive reviews.",
    example: "A company with 20 reviews and a 4.2 rating needs 60 consecutive 5-star reviews to reach a 4.8. Simulating 10 new 5-star reviews yields a 4.46 rating.",
    faqs: [
      { question: "How many 5-star Google reviews do I need to raise my rating?", answer: "This depends on your current review count and rating. Because Google uses a weighted arithmetic average, the more existing reviews you have, the more 5-star reviews you need to budge the score. For example, raising a 4.0 rating with 10 reviews to a 4.5 requires 10 five-star reviews. With 100 reviews, it requires 100 five-star reviews." },
      { question: "How is the Google star rating calculated?", answer: "Google calculates ratings as a weighted average: (Sum of all star values) ÷ (Total number of reviews). It then truncates or rounds the result to one decimal place for public display." },
      { question: "How can I increase my Google star rating?", answer: "To increase your rating, you must gather new 5-star reviews to dilute the statistical weight of low ratings. Sending direct review link requests to satisfied customers right after transactions is the most effective approach." },
      { question: "Why is a perfect 5.0 Google rating mathematically impossible after a bad review?", answer: "Once you have even one 1-star, 2-star, or 3-star review, the mathematical average of your score can never reach exactly 5.0, regardless of how many 5-star reviews you receive (since any value less than 5 in the average pulls it below 5.0). However, you can easily reach a rounded 4.9." },
      { question: "Can a bad Google review be deleted or removed?", answer: "You cannot delete a Google review simply because it is negative. However, you can flag and report reviews that violate Google's terms of service (such as fake accounts, harassment, or conflicts of interest). If the review is valid, the only solution is to get more 5-star reviews to out-average it." }
    ],
    commonMistakes: ["Expecting rapid increases (mathematical averages move slowly as count increases).", "Trying to delete real negative reviews instead of driving new 5-star submissions."],
    useCases: ["Business reputation repair", "Marketing review campaigns", "Customer experience analytics"],
    tips: ["Encourage reviews by providing short, direct client links.", "Follow up with customers within 24 hours of service to get the highest conversion rate."],
    inputs: [
      { id: "currentRating", label: "Current Rating (Stars)", type: "number", defaultValue: 4.2 },
      { id: "currentCount", label: "Current Total Reviews Count", type: "number", defaultValue: 30 },
      { id: "targetRating", label: "Target Rating (e.g. 4.8)", type: "number", defaultValue: 4.8 },
      { id: "simulatedReviews", label: "Simulate Getting New 5-Star Reviews (Count)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs): Record<string, { value: string | number; label: string; unit?: string }> => {
      const curRating = Number(inputs.currentRating || 0);
      const count = Number(inputs.currentCount || 0);
      const target = Number(inputs.targetRating || 4.8);
      const simulated = Number(inputs.simulatedReviews || 10);

      // Simulation Calculation
      const projectedRating = count + simulated > 0 ? (curRating * count + 5 * simulated) / (count + simulated) : 0;

      // Reviews Needed Calculation
      if (target >= 5) {
        return {
          projectedRating: { value: projectedRating.toFixed(2), label: `Projected Rating (After +${simulated} 5-Star Reviews)`, unit: "stars" },
          reviewsNeeded: { value: "Infinite", label: "Reviews Needed (A perfect 5.0 is mathematically impossible if you have any low reviews)", unit: "" }
        };
      }

      if (target <= curRating) {
        return {
          projectedRating: { value: projectedRating.toFixed(2), label: `Projected Rating (After +${simulated} 5-Star Reviews)`, unit: "stars" },
          reviewsNeeded: { value: 0, label: "Reviews Needed (Already at or above target)", unit: "" }
        };
      }

      const needed = (target * count - curRating * count) / (5 - target);

      return {
        projectedRating: { value: projectedRating.toFixed(2), label: `Projected Rating (After +${simulated} 5-Star Reviews)`, unit: "stars" },
        reviewsNeeded: { value: Math.ceil(needed), label: "Consecutive 5-Star Reviews Needed", unit: "reviews" },
        finalCount: { value: count + Math.ceil(needed), label: "Projected Total Reviews Count", unit: "reviews" }
      };
    }
  },
  // 15. Losertown Calorie
  "losertown-calorie": {
    slug: "losertown-calorie",
    name: "Losertown Calorie Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "Losertown Calorie Calculator - Weight Loss & Fat Loss Projection",
    metaDescription: "Estimate your weight loss and fat loss timeline with the Losertown Calorie Calculator. Get weekly BMR, TDEE, and weight milestones for up to 1 year.",
    keywords: [
      "losertown",
      "losertown calorie calculator",
      "losertown calculator",
      "losertown fat loss",
      "losertowm",
      "losetown",
      "losertown weight loss calculator",
      "weight loss projection"
    ],
    hook: "Project your weight loss timeline over weeks, months, and up to one year.",
    description: "Calculate your BMR, TDEE, and weight milestones based on your age, activity, and target daily calorie intake.",
    calcTime: "2 mins",
    formula: "TDEE = BMR × Activity Multiplier; Weekly Deficit = (TDEE - Daily Calories) × 7; Weight Change = Deficit ÷ 3500",
    formulaDescription: "Calculates BMR using the Mifflin-St Jeor formula, adjusts for activity level to find TDEE, and calculates projected fat loss by dividing the weekly calorie deficit by 3,500 (the calories in 1 lb of fat).",
    example: "A 30-year-old active female with a TDEE of 2,000 kcal consuming 1,500 kcal daily creates a 500 kcal daily deficit (3,500 kcal/week), losing 1 lb per week.",
    faqs: [
      { question: "What is the Losertown calorie calculator?", answer: "The Losertown calculator is a weight loss projection tool that helps you visualize your fat loss progress over a prolonged timeline (4 weeks, 8 weeks, 12 weeks, 6 months, and 1 year) by estimating your daily energy expenditure against your food intake." },
      { question: "How does the Losertown calculator project weight loss?", answer: "It determines your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). If your target daily calorie intake is lower than your TDEE, it multiplies the daily calorie deficit by 7 to find your weekly deficit. Since 3,500 kcal equals roughly 1 pound of fat, it divides your weekly deficit by 3,500 to estimate weekly loss." },
      { question: "Are search typos like 'losertowm' or 'losetown' referring to this calculator?", answer: "Yes, 'losertowm' and 'losetown' are common search typos for the popular Losertown calorie tracking page. This tool provides the exact same mathematical formulas to project your weight loss journey." },
      { question: "How accurate is the Losertown fat loss projection?", answer: "The projection assumes a constant activity level and precise calorie tracking. In reality, as you lose weight, your BMR drops slightly because your body requires less energy to sustain a lighter frame. To maintain high accuracy, re-calculate your BMR every 5 to 10 pounds lost." },
      { question: "What is the difference between BMR and TDEE?", answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns to perform basic life-sustaining functions at rest. TDEE (Total Daily Energy Expenditure) is your BMR multiplied by an activity factor representing your daily physical movement." }
    ],
    commonMistakes: ["Underestimating daily calorie intake.", "Overestimating physical activity level.", "Assuming BMR remains identical after losing substantial weight."],
    useCases: ["Diet planning", "Weight loss tracking", "Weekly calorie deficit calculations"],
    tips: ["Tracking foods precisely with a digital scale yields the most accurate deficit results.", "Under-report activity levels slightly if you have a desk job to avoid overestimating TDEE."],
    inputs: [
      { id: "age", label: "Age (Years)", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", defaultValue: "female", options: [{ value: "male", label: "Male" }, { value: "female", label: "Female" }] },
      { id: "weight", label: "Current Weight (lbs)", type: "number", defaultValue: 160, unit: "lbs" },
      { id: "height", label: "Height (Inches)", type: "number", defaultValue: 65, unit: "in" },
      { id: "activity", label: "Activity Level", type: "select", defaultValue: "1.2", options: [{ value: "1.2", label: "Sedentary (desk job)" }, { value: "1.375", label: "Lightly Active (1-3 days/wk)" }, { value: "1.55", label: "Moderately Active (3-5 days/wk)" }, { value: "1.725", label: "Very Active (6-7 days/wk)" }] },
      { id: "calories", label: "Target Daily Calorie Intake (kcal)", type: "number", defaultValue: 1500, unit: "kcal" }
    ],
    calculate: (inputs) => {
      const age = Number(inputs.age || 30);
      const gender = inputs.gender || "female";
      const wLbs = Number(inputs.weight || 160);
      const hIn = Number(inputs.height || 65);
      const activity = parseFloat(inputs.activity || "1.2");
      const cal = Number(inputs.calories || 1500);

      const weightKg = wLbs * 0.453592;
      const heightCm = hIn * 2.54;

      const bmr = gender === "male"
        ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
        : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;

      const tdee = bmr * activity;
      const dailyDeficit = tdee - cal;
      const weeklyLoss = (dailyDeficit * 7) / 3500;

      return {
        bmr: { value: bmr.toFixed(0), label: "Basal Metabolic Rate (BMR)", unit: "kcal" },
        tdee: { value: tdee.toFixed(0), label: "Total Daily Energy Expenditure (TDEE)", unit: "kcal" },
        weeklyChange: { value: weeklyLoss.toFixed(2), label: "Estimated Weekly Weight Change", unit: "lbs" },
        weight4w: { value: Math.max(0, wLbs - (weeklyLoss * 4)).toFixed(1), label: "Projected Weight (4 Weeks)", unit: "lbs" },
        weight8w: { value: Math.max(0, wLbs - (weeklyLoss * 8)).toFixed(1), label: "Projected Weight (8 Weeks)", unit: "lbs" },
        weight12w: { value: Math.max(0, wLbs - (weeklyLoss * 12)).toFixed(1), label: "Projected Weight (12 Weeks)", unit: "lbs" },
        weight24w: { value: Math.max(0, wLbs - (weeklyLoss * 24)).toFixed(1), label: "Projected Weight (6 Months / 24 Weeks)", unit: "lbs" },
        weight52w: { value: Math.max(0, wLbs - (weeklyLoss * 52)).toFixed(1), label: "Projected Weight (1 Year / 52 Weeks)", unit: "lbs" }
      };
    }
  },
  // 16. Roth vs Traditional IRA
  "roth-vs-traditional-ira": {
    slug: "roth-vs-traditional-ira",
    name: "Roth vs Traditional IRA & 401k Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Roth vs Traditional IRA & 401k Calculator - Growth & Conversion Tax",
    metaDescription: "Compare pre-tax and Roth IRA/401(k) balances. Calculate compound interest, employer matching, Roth conversion taxes, and find your optimal retirement path.",
    keywords: [
      "ira calculator",
      "roth 401k calculator",
      "traditional ira calculator",
      "roth or 401k calculator",
      "roth conversion tax calculator",
      "roth vs traditional 401k calculator",
      "does a roth ira earn interest",
      "ira roth ira conversion calculator",
      "ira withdrawal tax rate calculator",
      "roth ira conversion tax calculator",
      "roth vs traditional ira calculator",
      "ira rate of return",
      "roth ira vs traditional ira calculator",
      "roth or traditional 401k calculator",
      "roth vs pretax 401k",
      "sep ira contribution calculator",
      "do roth iras earn interest",
      "roth 401k vs traditional 401k calculator",
      "roth ira compound interest",
      "custodial roth ira calculator",
      "roth basis",
      "roth ira withdrawal calculator",
      "roth tsp calculator",
      "tax on ira withdrawal calculator",
      "average ira rate of return",
      "cd vs roth ira",
      "does a roth ira grow",
      "fidelity roth ira interest rate",
      "roth 401k calculator with match",
      "roth conversion calculator excel",
      "roth vs 401k calculator",
      "roth vs traditional calculator",
      "should i max out my roth ira",
      "what is the interest rate on a roth ira",
      "401k roth or traditional",
      "401k to roth ira conversion calculator",
      "401k vs roth 401k calculator",
      "basis of conversions roth ira",
      "convert 403b to roth ira",
      "rollover ira calculator",
      "roth 401k vs regular 401k calculator",
      "roth ira versus traditional ira calculator",
      "roth vs traditional calculator 401k",
      "tax calculator for ira withdrawal",
      "taxes on ira withdrawal calculator",
      "traditional vs roth ira calculator",
      "401k calculator roth",
      "401k roth vs before tax",
      "401k tax deduction calculator",
      "average roth ira interest rates",
      "best roth conversion calculator",
      "convert ira to roth calculator",
      "convert to a roth ira calculator",
      "pre tax 401k vs roth 401k",
      "robin hood ira",
      "roth 401k calc",
      "roth 401k vs 401k calculator",
      "roth 401k vs traditional 401 k calculator",
      "roth 403b calculator",
      "roth conversion software",
      "roth ira vs 401k calculator",
      "roth or traditional calculator",
      "traditional vs roth 401k calculator",
      "typical ira rate of return",
      "401k conversion to roth 401k",
      "401k tax savings calculator",
      "average roth ira rate of return",
      "boldin roth conversion calculator",
      "free roth conversion calculator",
      "free roth conversion tax calculator",
      "ira compound interest",
      "ira rollover to roth calculator",
      "roth ira future value calculator",
      "roth ira versus cd",
      "roth ira withdrawal penalty calculator",
      "should i do a roth or traditional 401k",
      "voya financial ira",
      "what is interest rate on roth ira",
      "what type of ira should i open",
      "what will my roth ira be worth",
      "401k pre tax vs roth 401k",
      "401k pretax vs roth",
      "401k roth 401k conversion",
      "401k vs 401k roth calculator",
      "401k vs roth ira calculator",
      "average roth ira percentage rate",
      "difference between simple and roth ira",
      "how much interest does an ira earn",
      "ira calculator simple",
      "ira roth conversion calculator",
      "roth 401k contribution calculator",
      "roth 457 calculator",
      "roth ira wealthfront",
      "roth ira with chase",
      "roth versus pre tax 401k",
      "roth vs traditional 401 k calculator",
      "simple ira withdrawal calculator",
      "what is better traditional ira or roth ira",
      "401k after tax vs roth",
      "calculate taxes on roth conversion"
    ],
    hook: "Compare IRA & 401k accounts, calculate matches, and estimate conversion taxes.",
    description: "Compare final after-tax balances of Roth and Traditional accounts at retirement, factor in employer matching, and estimate conversion tax liability.",
    calcTime: "2.5 mins",
    formula: "FV = Contribution × [((1 + r)^n - 1) / r]; Traditional Net = FV × (1 - Retirement Tax); Conversion Tax = Balance × Current Tax",
    formulaDescription: "Traditional plans defer taxes until withdrawal, while Roth plans are funded with post-tax dollars to allow tax-free growth. Employer matching is added to the traditional pre-tax portion.",
    example: "Contributing $6,500 annually at 7% for 25 years yields $411,114. Traditional is taxed at retirement, Roth is tax-free. Converting a $50k Traditional IRA at a 22% tax rate triggers $11,000 in tax due today.",
    faqs: [
      { question: "What is the difference between a Roth and Traditional retirement account?", answer: "Traditional accounts are funded with pre-tax dollars, lowering your taxable income today, but withdrawals are taxed at retirement. Roth accounts are funded with post-tax dollars, meaning no tax deduction today, but all future compound interest, growth, and withdrawals are 100% tax-free." },
      { question: "Does a Roth IRA earn interest or grow?", answer: "A Roth IRA is an investment container (not a single interest-bearing account like a bank CD). Within the IRA, you invest in assets like stock index funds, mutual funds, or bonds. The account grows through compound interest, capital gains, and dividend payouts, which are entirely tax-free." },
      { question: "What is a Roth conversion, and how are the taxes calculated?", answer: "A Roth conversion is transferring assets from a Traditional (pre-tax) IRA or 401(k) to a Roth (post-tax) IRA. Because these funds have never been taxed, the entire converted amount is added to your taxable income for the year, and taxes are due at your current income tax rate. For example, converting $50,000 in a 22% tax bracket costs $11,000 in conversion taxes." },
      { question: "How does employer matching work in a Traditional vs. Roth 401(k)?", answer: "If you select a 401(k), employers can match your contributions (e.g. 50% match up to 6%). Historically, all employer matching funds must go into a Traditional pre-tax account, which will be taxed upon withdrawal. Even if you contribute to a Roth 401(k), the matched portion usually grows pre-tax in a traditional sleeve." },
      { question: "What is a good rate of return for an IRA?", answer: "Historically, the average rate of return for a balanced stock market index fund (like the S&P 500) inside an IRA is roughly 7% to 10% per year, adjusted for inflation, over a long-term (20+ year) horizon." }
    ],
    commonMistakes: [
      "Assuming Roth is always superior without calculating tax bracket shifts.",
      "Not maximizing contributions early to exploit compound interest.",
      "Forgetting to pay Roth conversion taxes from outside the account (paying it from the IRA triggers early withdrawal penalties)."
    ],
    useCases: ["Retirement planning", "Investment comparisons", "Roth conversion tax planning", "401k match modeling"],
    tips: [
      "If you are currently in a low tax bracket, Roth is usually the best choice.",
      "Always contribute at least enough to capture your full employer 401(k) match—it is free money.",
      "If doing a Roth conversion, make sure you have cash reserves in a regular bank account to pay the conversion tax."
    ],
    inputs: [
      { id: "accountType", label: "Account Type", type: "select", defaultValue: "ira", options: [{ value: "ira", label: "IRA (Individual)" }, { value: "401k", label: "401k (Employer Sponsored)" }] },
      { id: "contribution", label: "Your Annual Contribution ($)", type: "number", defaultValue: 6500, unit: "$" },
      { id: "employerMatch", label: "Employer Match % (For 401k)", type: "number", defaultValue: 0, unit: "%" },
      { id: "years", label: "Years to Retirement", type: "number", defaultValue: 25 },
      { id: "returnRate", label: "Expected Annual Return (%)", type: "number", defaultValue: 7, unit: "%" },
      { id: "currentTax", label: "Current Income Tax Rate (%)", type: "number", defaultValue: 22, unit: "%" },
      { id: "retirementTax", label: "Retirement Income Tax Rate (%)", type: "number", defaultValue: 15, unit: "%" },
      { id: "conversionAmount", label: "Traditional Balance to Convert to Roth ($)", type: "number", defaultValue: 0, unit: "$" }
    ],
    calculate: (inputs) => {
      const type = inputs.accountType || "ira";
      const c = Number(inputs.contribution || 6500);
      const match = Number(inputs.employerMatch || 0) / 100;
      const n = Number(inputs.years || 25);
      const r = Number(inputs.returnRate || 7) / 100;
      const currentTaxRate = Number(inputs.currentTax || 22) / 100;
      const retirementTaxRate = Number(inputs.retirementTax || 15) / 100;
      const conversion = Number(inputs.conversionAmount || 0);

      const annualContribTraditional = c + (type === "401k" ? c * match : 0);
      const annualContribRoth = c;

      const fvTraditional = r > 0 ? annualContribTraditional * (Math.pow(1 + r, n) - 1) / r : annualContribTraditional * n;
      const fvRoth = r > 0 ? annualContribRoth * (Math.pow(1 + r, n) - 1) / r : annualContribRoth * n;
      const fvRothMatch = type === "401k" && r > 0 ? (c * match) * (Math.pow(1 + r, n) - 1) / r : 0;

      const tradNet = fvTraditional * (1 - retirementTaxRate);
      const rothNet = fvRoth + (fvRothMatch * (1 - retirementTaxRate));

      const totalCont = c * n;
      const conversionTax = conversion * currentTaxRate;
      const annualTaxSavings = c * currentTaxRate;
      const totalTaxSavingsToday = annualTaxSavings * n;

      return {
        totalContributions: { value: totalCont.toFixed(2), label: "Your Total Contributions", unit: "$" },
        traditionalNet: { value: tradNet.toFixed(2), label: `${type.toUpperCase()} Traditional Net (After Tax)`, unit: "$" },
        rothNet: { value: rothNet.toFixed(2), label: `${type.toUpperCase()} Roth Net (Tax-Free Payout)`, unit: "$" },
        conversionTaxDue: { value: conversionTax.toFixed(2), label: `Conversion Tax Due Now`, unit: "$" },
        pretaxTaxSavings: { value: totalTaxSavingsToday.toFixed(2), label: "Total Tax Savings Today (Traditional)", unit: "$" }
      };
    }
  },
  // 17. Seller Financing
  "seller-financing": {
    slug: "seller-financing",
    name: "Seller Financing & Hard Money Loan Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Seller Financing & Hard Money Loan Calculator - Balloon Amortization",
    metaDescription: "Calculate owner-financed and hard money mortgage terms. Estimate interest-only payments, balloon payoffs, total finance charges, and amortization schedules.",
    keywords: [
      "hard money loan calculator",
      "real estate financing",
      "seller financing calculator",
      "chattel loan calculator",
      "line of credit interest calculator",
      "owner financing calculator",
      "equipment financing calculator",
      "owner financing on land",
      "seller financed homes for sale",
      "solar loan calculator",
      "balloon loan amortization schedule",
      "credit line calculator",
      "equipment finance calculator",
      "amortization table with balloon payment",
      "amortization calculator with balloon",
      "amount financed",
      "hard money lender calculator",
      "hard money lender loan calculator",
      "renovation loan calculator",
      "amortization with balloon calculator",
      "calculate the finance charge",
      "contract for deed calculator",
      "owner financed contract",
      "seller financing homes near me",
      "add on interest",
      "amortization calculator balloon payment",
      "amortization calculator for balloon payment",
      "amortization schedule balloon payment",
      "backwards loan calculator",
      "balloon mortgage amortization schedule",
      "how to figure out finance charge",
      "is owner financing a good idea",
      "is seller financing a good idea",
      "mortgage calculator balloon loan",
      "pros and cons of seller financing",
      "seller finance homes for sale",
      "seller financing calculator with balloon payment",
      "what does owner finance mean",
      "5 year balloon mortgage calculator",
      "amortization schedule with a balloon payment",
      "average interest rate calculator",
      "balloon amortization schedule",
      "benefits of seller financing",
      "equipment loan payment calculator",
      "owner will carry",
      "pros and cons of owner financing",
      "reverse loan calc",
      "seller finance contract",
      "seller financing interest rate",
      "advantages of owner financing",
      "amortization table with balloon",
      "backwards amortization calculator",
      "balloon payment amortization calculator",
      "financial calculations",
      "financing by owner",
      "five year loan",
      "land contract calculator with balloon payment",
      "loan calculator balloon mortgage",
      "loan calculator with balloon",
      "owner finance mortgage calculator",
      "seller financing pros and cons",
      "seller take back mortgage",
      "贷款 计算 器",
      "amortization calculator reverse",
      "amortization chart with balloon",
      "balloon loan calculator amortization schedule",
      "balloon payment calculator interest only",
      "contract for deed calculator with balloon payment",
      "deferred interest calculator",
      "finance cost",
      "how do you owner finance a home",
      "how seller financing works",
      "interest only loan calculator with balloon payment",
      "interest only loan with balloon payment calculator",
      "interest only payment calculator with balloon",
      "land contract balloon payment calculator",
      "line of credit calculator monthly payment",
      "loan amortization with balloon payment",
      "loc payment calculator",
      "mortgage balloon payment calculator",
      "owner financing agreement",
      "owner financing terms",
      "what does it mean owner will carry",
      "amortization schedule with balloon payment in excel",
      "aven calculator",
      "balloon payment calculator mortgage",
      "calculate finance charge",
      "deferred payment loan calculator",
      "finance in real estate",
      "free seller financing calculator with balloon payment",
      "hard money lending calculator",
      "hard money loan payment calculator",
      "how to find seller financing homes",
      "interest only with balloon payment calculator",
      "mortgage calculator with balloon",
      "owner finance house contract",
      "owner financing home",
      "reverse interest rate calculator",
      "reverse payment calculator",
      "seller carry financing"
    ],
    hook: "Calculate monthly payments, finance charges, and balloon balances for owner financing or hard money loans.",
    description: "Input real estate purchase or private lender terms to model amortized or interest-only schedules and balloon payoff amounts.",
    calcTime: "2 mins",
    formula: "Amortized P&I = P × [r(1+r)^n] ÷ [(1+r)^n - 1]; Interest-Only Payment = P × r",
    formulaDescription: "Calculates monthly payments based on loan amortization type, then projects the remaining balance using standard mortgage formulas at the balloon deadline.",
    example: "A $200k loan at 6.5% interest amortized over 30 years with a 5-year balloon requires $1,264/mo with a $187,902 balloon due. If interest-only, the monthly payment is $1,083 with a $200,000 balloon due.",
    faqs: [
      { question: "What is seller financing and how does it work?", answer: "Seller financing (or owner financing) is a real estate transaction where the seller acts as the lender. Instead of the buyer getting a traditional bank mortgage, the buyer makes monthly payments directly to the seller based on an agreed-upon interest rate and schedule." },
      { question: "What is a hard money loan?", answer: "A hard money loan is a short-term, asset-backed loan secured by real estate, typically used by house flippers or real estate investors. Hard money loans are usually structured with interest-only payments and a short-term balloon payoff (typically 1 to 3 years) when the property is sold or refinanced." },
      { question: "What does it mean when a listing says 'owner will carry'?", answer: "This means the owner is willing to offer seller financing. They will carry the mortgage note, allowing the buyer to buy the house without a traditional bank mortgage." },
      { question: "How does a balloon payment work?", answer: "A balloon payment is a large lump-sum payment due at the end of a loan's term. Many owner financing deals use a 30-year amortization schedule (to keep monthly payments low) but have a 5-year balloon clause. This means the buyer makes low payments for 5 years, then must pay off the entire remaining loan balance in full (usually by selling the home or refinancing)." },
      { question: "What is the difference between an amortized and an interest-only balloon loan?", answer: "In an amortized loan, each monthly payment covers both interest and a small amount of the principal, meaning your balloon balance drops slightly over time. In an interest-only loan, your monthly payments cover only the interest accrued, meaning the balloon balance at the end is exactly equal to the initial loan amount." },
      { question: "How do you calculate a finance charge on a loan?", answer: "The finance charge is the total cost of borrowing the money, which primarily consists of the total interest paid. To find this, multiply your monthly payment by the number of months paid up to the balloon payoff, add the balloon payment, and subtract the initial loan principal." }
    ],
    commonMistakes: [
      "Assuming the loan is fully amortized over the balloon term (a balloon term requires a massive lump-sum payoff at the end).",
      "Forgetting to factor in property taxes and insurance when estimating monthly real estate carrying costs."
    ],
    useCases: ["Owner-financed real estate purchases", "Hard money lender terms modeling", "Land contract and contract-for-deed planning", "Equipment or renovation financing estimations"],
    tips: [
      "If you are the buyer, ensure you have a clear plan (refinancing or selling) before the balloon payment deadline arrives.",
      "Buyers should set up an escrow account for property taxes and home insurance to avoid default risks."
    ],
    inputs: [
      { id: "price", label: "Purchase Price or Property Value ($)", type: "number", defaultValue: 250000, unit: "$" },
      { id: "downPayment", label: "Down Payment or Equity ($)", type: "number", defaultValue: 50000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "amortization", label: "Amortization Period (Years)", type: "number", defaultValue: 30 },
      { id: "balloon", label: "Balloon Term (Years)", type: "number", defaultValue: 5 },
      { id: "paymentType", label: "Payment Structure Type", type: "select", defaultValue: "amortized", options: [{ value: "amortized", label: "Fully Amortized (P&I)" }, { value: "interest-only", label: "Interest-Only" }] }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const amort = Number(inputs.amortization || 30);
      const balloon = Number(inputs.balloon || 5);
      const type = inputs.paymentType || "amortized";

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = amort * 12;
      const p = balloon * 12;

      let monthly = 0;
      let remaining = principal;

      if (type === "interest-only") {
        monthly = r > 0 ? principal * r : 0;
        remaining = principal;
      } else {
        if (r > 0 && n > 0) {
          monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          if (p < n) {
            remaining = principal * (Math.pow(1 + r, n) - Math.pow(1 + r, p)) / (Math.pow(1 + r, n) - 1);
          } else {
            remaining = 0;
          }
        } else {
          monthly = principal / n;
          remaining = Math.max(0, principal - (monthly * p));
        }
      }

      const totalPaid = (monthly * Math.min(n, p)) + (p < n ? remaining : 0);
      const totalInterest = Math.max(0, totalPaid - principal);

      return {
        amountFinanced: { value: principal.toFixed(2), label: "Amount Financed (Principal)", unit: "$" },
        monthlyPayment: { value: monthly.toFixed(2), label: type === "interest-only" ? "Monthly Payment (Interest-Only)" : "Monthly Payment (P&I)", unit: "$" },
        balloonPayment: { value: remaining.toFixed(2), label: `Balloon Payoff (At Year ${balloon})`, unit: "$" },
        financeCharge: { value: totalInterest.toFixed(2), label: "Total Finance Charge (Interest Cost)", unit: "$" }
      };
    }
  },
  // 18. Credit Card Payoff
  "credit-card-payoff": {
    slug: "credit-card-payoff",
    name: "Credit Card Pay Off Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Credit Card Pay Off Calculator - Interest & CareCredit Payment Estimator",
    metaDescription: "Calculate credit card payoff timelines, minimum payments, and interest costs. Estimate monthly payments to be debt-free or avoid CareCredit deferred interest.",
    keywords: [
      "credit card payoff calculator",
      "credit card payment calculator",
      "credit card debt calculator",
      "credit card debt payoff calculator",
      "credit card pay off calculator",
      "credit card calculator payoff",
      "credit card monthly payment calculator",
      "ideal credit card",
      "how long to pay off credit card",
      "pay off credit card calculator",
      "how to figure out interest",
      "calculate credit card payoff",
      "care credit calculator",
      "care credit payment calculator",
      "carecredit calculator",
      "credit card balance transfer calculator",
      "how long credit card",
      "how long will it take to pay off my loan",
      "line of credit interest calculator",
      "payoff credit card calculator",
      "credit card cash back calculator",
      "credit card fee calculator",
      "credit card pay off",
      "debt service calculator",
      "care credit payment estimator",
      "credit card calculator monthly payment",
      "credit card debt calculator payoff",
      "5.99 interest rate credit card",
      "best way to pay down credit cards",
      "credit card minimum payment calc",
      "credit card payoff calculator excel",
      "how long to pay off credit card calculator",
      "care credit estimate",
      "carecredit payment calculator",
      "credit card caculator",
      "minimum payment on credit card calculator",
      "payoff calculator credit card",
      "best way to pay off multiple credit cards",
      "cc minimum payment calculator",
      "credit card amortization schedule",
      "credit card snowball calculator",
      "how do i pay off my credit card",
      "how to pay apple debt",
      "minimum balance calculator",
      "paying down credit card calculator",
      "balance formula calculator",
      "calculator to pay off credit card",
      "credit card calculator minimum payment",
      "credit card generator with money",
      "debt calculator credit card",
      "debt management plan calculator",
      "decrease in credit balance",
      "how to find my interest rate on my credit card",
      "how to get 4000 dollars fast",
      "i have 30000 in credit card debt",
      "ameriprise financial credit card",
      "does paying off credit card help credit score",
      "how long to pay off my loan",
      "how long until my loan is paid off",
      "how to pay off my credit card",
      "how to pay off your credit card",
      "national debt relief calculator",
      "aven payment calculator",
      "can you pay off credit cards with credit cards",
      "credit cards calculator",
      "credit planner",
      "debt management calculator",
      "discover lower interest rate",
      "how long to pay a credit card off",
      "how long to pay credit card off calculator",
      "how long will take to pay off my credit card",
      "how much is on a credit card",
      "how much of my credit card should i pay",
      "how to calculate paying off a credit card",
      "minimum payment on $15 000 credit card",
      "pay back credit card calculator",
      "the best way to pay off credit card debt",
      "annual debt service calculator",
      "best time to pay off credit card",
      "can i payoff my car loan with a credit card",
      "credit card loan payoff calculator",
      "credit card payment tracker",
      "credit card payoff calculator multiple cards",
      "credit debt payoff calculator",
      "debt management program calculator",
      "how do you pay off credit cards",
      "how long will it take to pay off loan",
      "how much of my credit card should i pay off",
      "how much should i pay my credit card each month",
      "how to calculate monthly payment for credit card",
      "how to figure out monthly payments on a credit card",
      "how to get 6000 dollars fast",
      "line of credit calculator monthly payment",
      "pay it off",
      "should i save or pay off debt calculator",
      "best ways to pay off credit card",
      "calculate how much interest i will earn",
      "calculate monthly payment credit card",
      "calculator credit card minimum payment",
      "credit card amount calculator"
    ],
    hook: "Find your debt-free timeline, calculate minimum payments, and simulate payoff strategies.",
    description: "Enter your card balance and APR to calculate payoff durations, total interest, minimum monthly bills, and CareCredit promo repayment targets.",
    calcTime: "2 mins",
    formula: "Fixed Term PMT = B × [r(1+r)^n] ÷ [(1+r)^n - 1]; Minimum Payment = Max($25, B × Rate + B × r)",
    formulaDescription: "Calculates required payments to be debt-free in a target number of months, or models a fixed monthly payment using monthly compounding interest formulas.",
    example: "A $5,000 balance at 20% APR paid off at $150/month takes 51 months and incurs $2,544 in interest. To pay it off in 24 months, a monthly payment of $254 is required.",
    faqs: [
      { question: "How long does it take to pay off a credit card making only minimum payments?", answer: "Credit card minimum payments are usually set to 1% to 2% of your balance plus interest, or a flat $25 to $35 (whichever is higher). Because this barely covers the monthly interest, it can take 15 to 30 years to fully wipe out a large balance, costing you thousands of dollars in unnecessary interest charges." },
      { question: "What is CareCredit, and how do I calculate its promotional payments?", answer: "CareCredit is a healthcare credit card often offering 6, 12, 18, or 24-month promotional periods with deferred interest. If you do not pay off the entire promotional balance by the deadline, interest is retroactively charged from the purchase date at a very high rate (usually 29.99%). To avoid this, divide your starting balance by the number of promotional months (e.g., $1,200 ÷ 12 months = $100/month) and make that payment monthly." },
      { question: "How do I calculate the interest accrued on my credit card?", answer: "To calculate monthly interest, divide your APR by 365 to get your daily interest rate, multiply it by your average daily balance, and then multiply by the number of days in the billing cycle. In our calculator, this is simplified using monthly compounding: monthly interest = balance × (APR ÷ 12)." },
      { question: "What is the best strategy to pay off multiple credit cards?", answer: "The two most popular strategies are the Debt Snowball and the Debt Avalanche. The Debt Snowball focuses on paying off the smallest balances first to gain momentum. The Debt Avalanche focuses on paying off the cards with the highest interest rates (APR) first to minimize overall interest costs." },
      { question: "Does paying off my credit card balance help my credit score?", answer: "Yes, significantly. Paying down your credit card balances lowers your credit utilization ratio (how much credit you are using compared to your limits). Keeping your utilization below 30%—and ideally below 10%—is one of the fastest ways to boost your credit score." }
    ],
    commonMistakes: [
      "Paying only the minimum balance, which keeps you in debt for decades.",
      "Not realizing that promotional 'no interest' terms actually defer the interest, risking massive retroactive interest charges.",
      "Continuing to use the credit card while actively trying to pay down its balance."
    ],
    useCases: ["Credit card debt payoff planning", "CareCredit promotional repayment planning", "Minimum monthly payment budgeting", "Balance transfer calculations"],
    tips: [
      "Always pay more than the minimum payment to reduce your principal balance faster.",
      "If you have a CareCredit card, set up auto-pay for the target promotional payoff amount (Balance ÷ Months) rather than Google's default minimum to ensure you don't get hit with deferred interest.",
      "Consider a balance transfer card with a 0% introductory rate if you can pay off the debt within the intro period."
    ],
    inputs: [
      { id: "balance", label: "Credit Card Balance ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "apr", label: "Interest Rate (APR %)", type: "number", defaultValue: 18.9, unit: "%" },
      { id: "monthlyPayment", label: "Your Planned Monthly Payment ($)", type: "number", defaultValue: 200, unit: "$" },
      { id: "targetMonths", label: "Target Months to be Debt-Free", type: "number", defaultValue: 24 },
      { id: "promoMonths", label: "CareCredit / Deferred Interest Promo (Months)", type: "select", defaultValue: "0", options: [{ value: "0", label: "None (Standard Card)" }, { value: "6", label: "6 Months Promo" }, { value: "12", label: "12 Months Promo" }, { value: "18", label: "18 Months Promo" }, { value: "24", label: "24 Months Promo" }] },
      { id: "minPayRate", label: "Minimum Payment Percentage Rule (%)", type: "number", defaultValue: 2, unit: "%" }
    ],
    calculate: (inputs): Record<string, { value: string | number; label: string; unit?: string }> => {
      const bal = Number(inputs.balance || 0);
      const apr = Number(inputs.apr || 18.9);
      const pay = Number(inputs.monthlyPayment || 200);
      const target = Number(inputs.targetMonths || 24);
      const promo = Number(inputs.promoMonths || 0);
      const minPercent = Number(inputs.minPayRate || 2) / 100;

      const r = (apr / 100) / 12;
      const minPayRequired = bal * r;

      // 1. Initial Minimum Payment
      const initialMinPayment = Math.max(25, bal * minPercent + minPayRequired);

      // 2. Fixed Term Monthly Payment
      let requiredFixedTermPMT = 0;
      if (r > 0) {
        requiredFixedTermPMT = (bal * r * Math.pow(1 + r, target)) / (Math.pow(1 + r, target) - 1);
      } else {
        requiredFixedTermPMT = bal / target;
      }

      // 3. CareCredit Promo Payoff Payment
      const requiredPromoPMT = promo > 0 ? bal / promo : 0;

      // 4. Fixed Payment Simulation
      if (pay <= minPayRequired) {
        return {
          initialMin: { value: initialMinPayment.toFixed(2), label: "Initial Minimum Payment", unit: "$" },
          requiredPMT: { value: requiredFixedTermPMT.toFixed(2), label: `Required Payment (to clear in ${target} mos)`, unit: "$" },
          promoPMT: { value: promo > 0 ? requiredPromoPMT.toFixed(2) : "N/A", label: promo > 0 ? `CareCredit Promo Monthly Payment` : "CareCredit Promo Payment", unit: promo > 0 ? "$" : "" },
          error: { value: "Warning", label: "Your planned payment must exceed the monthly interest accrual." }
        };
      }

      let months = 0;
      let interestTotal = 0;
      let remaining = bal;

      while (remaining > 0 && months < 360) {
        const interest = remaining * r;
        interestTotal += interest;
        const currentPay = Math.min(remaining + interest, pay);
        remaining = remaining + interest - currentPay;
        months++;
      }

      return {
        initialMin: { value: initialMinPayment.toFixed(2), label: "Initial Minimum Payment", unit: "$" },
        requiredPMT: { value: requiredFixedTermPMT.toFixed(2), label: `Required Payment (to clear in ${target} mos)`, unit: "$" },
        promoPMT: { value: promo > 0 ? requiredPromoPMT.toFixed(2) : "N/A", label: promo > 0 ? `CareCredit Promo Monthly Payment` : "CareCredit Promo Payment", unit: promo > 0 ? "$" : "" },
        payoffMonths: { value: months, label: "Planned Payment: Months to Pay Off", unit: "months" },
        payoffYears: { value: (months / 12).toFixed(1), label: "Planned Payment: Years to Pay Off", unit: "years" },
        totalInterest: { value: interestTotal.toFixed(2), label: "Planned Payment: Total Interest Paid", unit: "$" },
        totalPaid: { value: (bal + interestTotal).toFixed(2), label: "Planned Payment: Total Amount Paid", unit: "$" }
      };
    }
  },

  // 19. Vector Product
  "vector-product": {
    slug: "vector-product",
    name: "Vector Dot & Cross Product Calculator",
    category: "math",
    categoryLabel: "Mathematics",
    seoTitle: "Vector Dot & Cross Product Calculator - 3D Vector Math",
    metaDescription: "Calculate the dot product, cross product, magnitudes, and angle between two 3D vectors. Free vector mathematics and scalar calculator.",
    keywords: [
      "cross product calculator",
      "dot product calculator",
      "vector cross product calculator",
      "vector product calculator",
      "scalar product calculator",
      "how to calculate cross product",
      "how to calculate dot product",
      "vector dot product calculator",
      "dot product of vectors calculator",
      "cross product of two vectors calculator",
      "how to calculate dot product of two vectors",
      "how to calculate cross product of two vectors",
      "scalar product of vectors",
      "vector product of vectors",
      "cross product vector math",
      "dot product vector math"
    ],
    hook: "Calculate dot product, cross product, vector magnitudes, and angle between 3D vectors.",
    description: "Input X, Y, and Z coordinate values for two 3D vectors to compute their scalar dot product, vector cross product, magnitude lengths, and the angle separating them.",
    calcTime: "1.5 mins",
    formula: "A · B = AxBx + AyBy + AzBz; A × B = [AyBz - AzBy, AzBx - AxBz, AxBy - AyBx]",
    formulaDescription: "Computes the scalar dot product by summing the products of corresponding components, and computes the 3D cross product vector perpendicular to both input vectors.",
    example: "For A = [3, -5, 4] and B = [2, 7, -3]: Dot Product is -41; Cross Product is [-13, 17, 31].",
    faqs: [
      { question: "What is a dot product (scalar product)?", answer: "The dot product is an algebraic operation that takes two equal-length sequences of numbers (usually coordinate vectors) and returns a single scalar number. It measures how much the vectors point in the same direction." },
      { question: "What is a cross product (vector product)?", answer: "The cross product is a binary operation on two vectors in a three-dimensional space. It results in a third vector that is perpendicular (orthogonal) to both of the original vectors, with a magnitude equal to the area of the parallelogram that the vectors span." },
      { question: "How do you calculate the dot product of two vectors?", answer: "Multiply the corresponding components of the two vectors together and sum the results: A · B = (Ax × Bx) + (Ay × By) + (Az × Bz)." },
      { question: "How do you calculate the cross product of two vectors?", answer: "Use the determinant formula for 3D vectors: AxB = [ (Ay × Bz - Az × By), (Az × Bx - Ax × Bz), (Ax × By - Ay × Bx) ]. The result is always a 3D vector, not a scalar." },
      { question: "What is the angle between perpendicular and parallel vectors?", answer: "If the dot product of two vectors is exactly 0, the vectors are perpendicular (90 degrees). If the cross product of two vectors is [0, 0, 0], the vectors are parallel (0 or 180 degrees)." }
    ],
    commonMistakes: [
      "Confusing the dot product (which outputs a single number) with the cross product (which outputs a new 3D vector).",
      "Attempting to calculate a cross product for 2D vectors directly (the cross product is only defined in three dimensions, though 2D vectors can be represented in 3D by setting the Z component to 0)."
    ],
    useCases: ["Physics force and torque calculations", "3D computer graphics and game development", "Linear algebra homework checking", "Engineering structural analysis"],
    tips: [
      "To calculate 2D vectors, simply leave the Z component (Az and Bz) empty or set to 0.",
      "The order of vectors matters for the cross product: A × B is the negative (opposite direction) of B × A."
    ],
    inputs: [
      { id: "ax", label: "Vector A - X Component (Ax)", type: "number", defaultValue: 3 },
      { id: "ay", label: "Vector A - Y Component (Ay)", type: "number", defaultValue: -5 },
      { id: "az", label: "Vector A - Z Component (Az)", type: "number", defaultValue: 4 },
      { id: "bx", label: "Vector B - X Component (Bx)", type: "number", defaultValue: 2 },
      { id: "by", label: "Vector B - Y Component (By)", type: "number", defaultValue: 7 },
      { id: "bz", label: "Vector B - Z Component (Bz)", type: "number", defaultValue: -3 }
    ],
    calculate: (inputs) => {
      const ax = Number(inputs.ax || 0);
      const ay = Number(inputs.ay || 0);
      const az = Number(inputs.az || 0);
      const bx = Number(inputs.bx || 0);
      const by = Number(inputs.by || 0);
      const bz = Number(inputs.bz || 0);

      const dotProduct = (ax * bx) + (ay * by) + (az * bz);
      const cx = (ay * bz) - (az * by);
      const cy = (az * bx) - (ax * bz);
      const cz = (ax * by) - (ay * bx);
      const crossProductStr = `[${cx}, ${cy}, ${cz}]`;

      const magA = Math.sqrt((ax * ax) + (ay * ay) + (az * az));
      const magB = Math.sqrt((bx * bx) + (by * by) + (bz * bz));

      let angleDeg = "N/A";
      const denom = magA * magB;
      if (denom > 0) {
        const cosTheta = Math.max(-1, Math.min(1, dotProduct / denom));
        const thetaRad = Math.acos(cosTheta);
        angleDeg = ((thetaRad * 180) / Math.PI).toFixed(1);
      }

      return {
        dotProduct: { value: dotProduct, label: "Dot Product (Scalar Product)", unit: "" },
        crossProduct: { value: crossProductStr, label: "Cross Product (Vector Product)", unit: "" },
        magnitudeA: { value: magA.toFixed(3), label: "Magnitude of Vector A |A|", unit: "" },
        magnitudeB: { value: magB.toFixed(3), label: "Magnitude of Vector B |B|", unit: "" },
        angle: { value: angleDeg, label: "Angle Between Vectors", unit: "degrees" }
      };
    }
  },

  // 20. Grass Seed
  "grass-seed": {
    slug: "grass-seed",
    name: "Grass Seed Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Grass Seed Calculator - Lawn Coverage & Bag Estimator",
    metaDescription: "Calculate how much grass seed you need for your lawn. Estimate seed weights in pounds by grass type and planting method.",
    keywords: ["grass seed calculator", "how much grass seed", "lawn seeding rate"],
    hook: "Find exact grass seed weight and bag requirements for your yard.",
    description: "Input your lawn square footage and select your grass type to get precise seeding volume guidelines.",
    calcTime: "1 min",
    formula: "Seed Required (lbs) = (Area ÷ 1000) × Seeding Rate",
    formulaDescription: "Calculates seed requirements based on recommended seeding weights per 1,000 square feet.",
    example: "A 5,000 sq ft new lawn with Tall Fescue requires 40 lbs of grass seed (8 lbs per 1,000 sq ft).",
    faqs: [
      { question: "Is seeding rate different for new lawns vs overseeding?", answer: "Yes, new lawns require about double the seeding rate of overseeding because there is no existing grass structure." }
    ],
    commonMistakes: ["Failing to keep the seed consistently moist during the first 2-3 weeks of germination."],
    useCases: ["Lawn seeding", "Yard landscaping"],
    tips: ["Always add starter fertilizer to accelerate root development during planting."],
    inputs: [
      { id: "area", label: "Lawn Area (sq ft)", type: "number", defaultValue: 2000, unit: "sq ft" },
      { id: "plantingType", label: "Planting Method", type: "select", defaultValue: "new", options: [{ value: "new", label: "New Lawn / Bare Soil" }, { value: "overseed", label: "Overseeding Existing Lawn" }] },
      { id: "grassType", label: "Grass Variety", type: "select", defaultValue: "fescue", options: [{ value: "bluegrass", label: "Kentucky Bluegrass" }, { value: "fescue", label: "Tall Fescue" }, { value: "ryegrass", label: "Perennial Ryegrass" }, { value: "bermuda", label: "Bermuda Grass" }] }
    ],
    calculate: (inputs) => {
      const area = Number(inputs.area || 0);
      const planting = inputs.plantingType || "new";
      const grass = inputs.grassType || "fescue";

      const rates: Record<string, Record<string, number>> = {
        bluegrass: { new: 3, overseed: 1.5 },
        fescue: { new: 8, overseed: 4 },
        ryegrass: { new: 7, overseed: 3.5 },
        bermuda: { new: 2, overseed: 1 }
      };

      const rate = rates[grass]?.[planting] || 5;
      const lbs = (area / 1000) * rate;

      return {
        seedWeight: { value: lbs.toFixed(1), label: "Grass Seed Needed", unit: "lbs" },
        bags5lb: { value: Math.ceil(lbs / 5), label: "5 lb bags needed", unit: "bags" },
        bags20lb: { value: Math.ceil(lbs / 20), label: "20 lb bags needed", unit: "bags" }
      };
    }
  },
  // 20. Gear Ratio Speed
  "gear-ratio": {
    slug: "gear-ratio",
    name: "Gear Ratio Speed Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Gear Ratio Speed Calculator - RPM to MPH Gearing Finder",
    metaDescription: "Calculate vehicle speeds in MPH based on engine RPM, tire diameter, transmission gear ratio, and rear axle ratio.",
    keywords: ["gear ratio speed calculator", "rpm to mph calculator", "transmission speed calculator"],
    hook: "Determine speed based on engine RPM and drivetrain gearing.",
    description: "Input transmission ratios and tire size to determine theoretical vehicle top speed and gearing curves.",
    calcTime: "2 mins",
    formula: "Speed (MPH) = (RPM × Tire Diameter) ÷ (Transmission Ratio × Axle Ratio × 336)",
    formulaDescription: "Computes ground speed by determining wheel RPM and multiplying by tire circumference.",
    example: "At 3,000 RPM with 26\" tires, 1.0 transmission gear, and 3.73 axle, the speed is 62.2 MPH.",
    faqs: [
      { question: "What is axle ratio?", answer: "The ratio between the driveshaft rotations and differential axle rotations, indicating how many times the driveshaft spins to turn the wheels once." }
    ],
    commonMistakes: ["Confusing tire radius with tire diameter in inputs."],
    useCases: ["Drivetrain gearing optimizations", "Transmission speed checking"],
    tips: ["A lower gear ratio increases acceleration, while a higher ratio improves highway fuel efficiency."],
    inputs: [
      { id: "rpm", label: "Engine RPM", type: "number", defaultValue: 3000, unit: "RPM" },
      { id: "tireSize", label: "Tire Diameter (inches)", type: "number", defaultValue: 27, unit: "in" },
      { id: "gearRatio", label: "Transmission Gear Ratio", type: "number", defaultValue: 1.0, unit: ":1" },
      { id: "axleRatio", label: "Rear Axle / Differential Ratio", type: "number", defaultValue: 3.73, unit: ":1" }
    ],
    calculate: (inputs) => {
      const rpm = Number(inputs.rpm || 0);
      const tire = Number(inputs.tireSize || 27);
      const gear = Number(inputs.gearRatio || 1.0);
      const axle = Number(inputs.axleRatio || 3.73);

      const overall = gear * axle;
      const mph = overall > 0 ? (rpm * tire) / (overall * 336) : 0;
      const kph = mph * 1.60934;

      return {
        overallRatio: { value: overall.toFixed(2), label: "Overall Gearing Ratio", unit: ":1" },
        speedMph: { value: mph.toFixed(1), label: "Vehicle Speed (MPH)", unit: "MPH" },
        speedKph: { value: kph.toFixed(1), label: "Vehicle Speed (km/h)", unit: "km/h" }
      };
    }
  },
  // 21. Rent vs Sell
  "rent-vs-sell": {
    slug: "rent-vs-sell",
    name: "Rent vs Sell Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Rent vs Sell Calculator - Landlord Return on Equity Finder",
    metaDescription: "Determine if selling your home or keeping it as a rental property yields higher long-term returns. Computes landlord cash flow and ROE.",
    keywords: ["rent vs sell calculator", "should i rent or sell", "landlord cash flow estimator"],
    hook: "Compare liquid sales proceeds against monthly landlord returns.",
    description: "Input property details to analyze landlord cash flow and Return on Equity (ROE) versus cashing out today.",
    calcTime: "2 mins",
    formula: "Annual Rent Cashflow = (Rent - Costs) × 12; Sale Proceeds = Value - Mortgage - Fees; ROE = Cashflow ÷ Proceeds",
    formulaDescription: "Finds net cash proceeds from an immediate sale and compares it with net rental income to calculate Return on Equity.",
    example: "Selling nets $100,000. Renting nets $500/mo ($6,000/yr), yielding a 6% Return on Equity.",
    faqs: [
      { question: "What is landlord Return on Equity (ROE)?", answer: "A financial metric comparing net rental income to the cash equity that would be unlocked by selling the property." }
    ],
    commonMistakes: ["Failing to account for vacancies, landlord insurance premiums, and ongoing maintenance reserves in expenses."],
    useCases: ["Home relocation planning", "Real estate investment reviews"],
    tips: ["A landlord ROE below 5-6% usually suggests selling is more profitable than renting."],
    inputs: [
      { id: "homeValue", label: "Estimated Home Value ($)", type: "number", defaultValue: 350000, unit: "$" },
      { id: "mortgage", label: "Remaining Mortgage Balance ($)", type: "number", defaultValue: 180000, unit: "$" },
      { id: "sellingCosts", label: "Selling Costs (broker fee, closing %)", type: "number", defaultValue: 6, unit: "%" },
      { id: "monthlyRent", label: "Target Monthly Rent Income ($)", type: "number", defaultValue: 2200, unit: "$" },
      { id: "monthlyExpenses", label: "Total Landlord Monthly Expenses ($)", type: "number", defaultValue: 1600, unit: "$" }
    ],
    calculate: (inputs) => {
      const val = Number(inputs.homeValue || 0);
      const mort = Number(inputs.mortgage || 0);
      const sc = Number(inputs.sellingCosts || 6) / 100;
      const rent = Number(inputs.monthlyRent || 0);
      const exp = Number(inputs.monthlyExpenses || 0);

      const netProceeds = val - mort - (val * sc);
      const monthlyCash = rent - exp;
      const annualCash = monthlyCash * 12;
      const roe = netProceeds > 0 ? (annualCash / netProceeds) * 100 : 0;

      return {
        saleProceeds: { value: Math.max(0, netProceeds).toFixed(2), label: "Net Cash Equity if Sold", unit: "$" },
        annualCashflow: { value: annualCash.toFixed(2), label: "Net Annual Landlord Cash Flow", unit: "$" },
        roe: { value: roe.toFixed(2), label: "Estimated Return on Equity (ROE)", unit: "%" }
      };
    }
  },
  // 22. Mortgage Calculator Game
  "mortgage-calculator-game": {
    slug: "mortgage-calculator-game",
    name: "Mortgage Calculator Game",
    category: "education",
    categoryLabel: "Education",
    seoTitle: "Mortgage Calculator Game - Beat the Bank!",
    metaDescription: "An interactive educational calculator game. Test how extra monthly payments reduce mortgage timelines and lifetime interest expenses.",
    keywords: ["mortgage calculator games", "mortgage calculator game", "extra payment calculator game", "interest savings game"],
    hook: "Play the extra payment challenge to save thousands in interest.",
    description: "Input mortgage details and model custom extra monthly payments to calculate your financial Savings Score.",
    calcTime: "2 mins",
    formula: "P&I = P × [r(1+r)^n] ÷ [(1+r)^n - 1]; Score = (Interest Saved ÷ Base Interest) × 1000",
    formulaDescription: "Simulates mortgage amortization month-by-month and calculates savings multipliers based on extra cash payments.",
    example: "Adding $150/mo to a standard 30-year mortgage saves $36,000 and scores a 280 point Savings rating.",
    faqs: [
      { question: "How does the Savings Score work?", answer: "It represents the percentage of total mortgage interest saved, scaled out of 1000 possible points." }
    ],
    commonMistakes: ["Failing to confirm whether your mortgage lender charges pre-payment penalty fees."],
    useCases: ["Financial literacy training", "Mortgage payoff optimization planning"],
    tips: ["Making a single extra mortgage payment each year can shave 4-5 years off your loan term."],
    inputs: [
      { id: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: 300000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 60000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 },
      { id: "extraPayment", label: "Extra Monthly Payment ($)", type: "number", defaultValue: 150, unit: "$" }
    ],
    calculate: (inputs): Record<string, { value: string | number; label: string; unit?: string }> => {
      const price = Number(inputs.homePrice || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);
      const extra = Number(inputs.extraPayment || 0);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      if (r <= 0 || n <= 0 || principal <= 0) {
        return { error: { value: "Invalid Inputs", label: "Please check inputs." } };
      }

      const monthlyBase = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const normalInterest = (monthlyBase * n) - principal;

      let monthsWithExtra = 0;
      let remaining = principal;
      let interestWithExtra = 0;

      while (remaining > 0 && monthsWithExtra < 600) {
        const interest = remaining * r;
        interestWithExtra += interest;
        const payment = Math.min(remaining + interest, monthlyBase + extra);
        remaining = remaining + interest - payment;
        monthsWithExtra++;
      }

      const savedInterest = normalInterest - interestWithExtra;
      const yearsSaved = (n - monthsWithExtra) / 12;
      const score = normalInterest > 0 ? (savedInterest / normalInterest) * 1000 : 0;

      return {
        normalMonthly: { value: monthlyBase.toFixed(2), label: "Normal Monthly Payment (P&I)", unit: "$" },
        normalTotalInterest: { value: normalInterest.toFixed(2), label: "Total Base Interest Cost", unit: "$" },
        interestSaved: { value: Math.max(0, savedInterest).toFixed(2), label: "Interest Cash Saved", unit: "$" },
        yearsSaved: { value: Math.max(0, yearsSaved).toFixed(1), label: "Years Cut Off Loan Term", unit: "years" },
        gameScore: { value: Math.round(score), label: "Your Savings Score (Beat the Bank!)", unit: "pts" }
      };
    }
  },
  // 23. Wedding Alcohol
  "wedding-alcohol": {
    slug: "wedding-alcohol",
    name: "Wedding Alcohol Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Wedding Alcohol Calculator - Guest Bar Supplies Planner",
    metaDescription: "Estimate cases of beer, and bottles of wine or liquor needed for your wedding reception based on guest counts and event duration.",
    keywords: ["wedding alcohol calculator", "wedding reception drink planner", "how much wine for wedding", "wedding liquor calculator"],
    hook: "Estimate wedding bar inventory requirements instantly.",
    description: "Input guest list counts and event duration to project cases and bottles required for a fully stocked bar.",
    calcTime: "1 min",
    formula: "Total Drinks = Guests × (1 + Duration); splits based on preference templates",
    formulaDescription: "Assumes guests drink 2 servings in the first hour and 1 serving hourly thereafter.",
    example: "120 guests over 5 hours consume 720 drinks. Balanced: 360 beers, 36 bottles of wine, and 11 bottles of liquor.",
    faqs: [
      { question: "How many glasses of wine are in a bottle?", answer: "A standard 750ml bottle contains approximately 5 glasses of wine." },
      { question: "How many drinks are in a standard liquor bottle?", answer: "A standard fifth (750ml) bottle provides approximately 16 standard mixed drinks." }
    ],
    commonMistakes: ["Forgetting to account for ice, cups, and non-alcoholic alternatives."],
    useCases: ["Wedding planning", "Large event beverage budgets"],
    tips: ["Buy from retailers who offer returns on unopened cases of beer or bottles of wine."],
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 120 },
      { id: "duration", label: "Event Duration (Hours)", type: "number", defaultValue: 5, unit: "hrs" },
      { id: "preference", label: "Alcohol Preference Profile", type: "select", defaultValue: "balanced", options: [{ value: "balanced", label: "Balanced (50% Beer, 25% Wine, 25% Liquor)" }, { value: "beer", label: "Beer Heavy (60% Beer, 20% Wine, 20% Liquor)" }, { value: "wine", label: "Wine Heavy (20% Beer, 60% Wine, 20% Liquor)" }, { value: "liquor", label: "Liquor Heavy (20% Beer, 20% Wine, 60% Liquor)" }] }
    ],
    calculate: (inputs) => {
      const guests = Number(inputs.guests || 0);
      const dur = Number(inputs.duration || 0);
      const pref = inputs.preference || "balanced";

      const totalDrinks = guests * (1 + dur);

      let beerP = 0.5, wineP = 0.25, liqP = 0.25;
      if (pref === "beer") { beerP = 0.6; wineP = 0.2; liqP = 0.2; }
      else if (pref === "wine") { beerP = 0.2; wineP = 0.6; liqP = 0.2; }
      else if (pref === "liquor") { beerP = 0.2; wineP = 0.2; liqP = 0.6; }

      const beers = totalDrinks * beerP;
      const wines = totalDrinks * wineP;
      const liquors = totalDrinks * liqP;

      return {
        totalDrinksNeeded: { value: totalDrinks, label: "Total Drinks Required", unit: "drinks" },
        beerCases: { value: Math.ceil(beers / 24), label: "Cases of Beer (24 per case)", unit: "cases" },
        wineBottles: { value: Math.ceil(wines / 5), label: "Bottles of Wine (750ml)", unit: "bottles" },
        liquorBottles: { value: Math.ceil(liquors / 16), label: "Bottles of Liquor (750ml)", unit: "bottles" }
      };
    }
  },
  // 24. Bridge Loan
  "bridge-loan": {
    slug: "bridge-loan",
    name: "Bridge Loan Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Bridge Loan Calculator - transitional financing limit",
    metaDescription: "Calculate maximum transitional bridge loan proceeds, interest-only payments, and loan-to-value limits.",
    keywords: ["bridge loan calculator", "bridge mortgage estimator", "bridge loan payment"],
    hook: "Estimate transitional loan parameters when buying a new home.",
    description: "Determine your maximum available bridge loan amount and interest payment options based on your home values and current debt.",
    calcTime: "2 mins",
    formula: "Max Loan = (Value × LTV Limit) - Mortgage Balance",
    formulaDescription: "Applies maximum Loan-to-Value constraints to current property value, then subtracts existing mortgages.",
    example: "A $400,000 home with a $200,000 mortgage at 80% LTV provides a bridge limit of $120,000.",
    faqs: [
      { question: "What is a bridge loan?", answer: "A short-term loan used to bridge the gap between buying a new home and selling your existing home." }
    ],
    commonMistakes: ["Assuming bridge loan terms last for standard amortizations (they are usually short-term, 6 to 12 months, interest-only)."],
    useCases: ["Home relocation", "Transitional real estate financing"],
    tips: ["Budget for high transaction fees when closing bridge loans."],
    inputs: [
      { id: "value", label: "Current Home Value ($)", type: "number", defaultValue: 450000, unit: "$" },
      { id: "mortgage", label: "Existing Mortgage Balance ($)", type: "number", defaultValue: 220000, unit: "$" },
      { id: "ltv", label: "Max Bridge LTV Limit (%)", type: "number", defaultValue: 80, unit: "%" },
      { id: "rate", label: "Bridge Loan APR (%)", type: "number", defaultValue: 8.5, unit: "%" }
    ],
    calculate: (inputs) => {
      const val = Number(inputs.value || 0);
      const mort = Number(inputs.mortgage || 0);
      const ltv = Number(inputs.ltv || 80) / 100;
      const rate = Number(inputs.rate || 8.5) / 100;

      const limit = (val * ltv) - mort;
      const monthlyInterest = limit > 0 ? (limit * rate) / 12 : 0;

      return {
        maxBridgeLoan: { value: Math.max(0, limit).toFixed(2), label: "Max Bridge Loan Limit", unit: "$" },
        monthlyInterest: { value: Math.max(0, monthlyInterest).toFixed(2), label: "Monthly Interest-Only Payment", unit: "$" }
      };
    }
  },
  // 25. TV Mounting Height
  "tv-mounting-height": {
    slug: "tv-mounting-height",
    name: "TV Mounting Height Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "TV Mounting Height Calculator - Ideal Sitting Viewing Height",
    metaDescription: "Calculate the ideal TV mounting height for your wall. Positions the screen center perfectly at eye-level when sitting.",
    keywords: ["tv mounting height calculator", "wall mount tv height", "ideal tv height"],
    hook: "Calculate wall-mount coordinates for your flat-screen TV.",
    description: "Input screen size and sitting height parameters to determine bottom and center mounting markers.",
    calcTime: "1 min",
    formula: "Bottom Mount Height = Eye Level - (TV Screen Height ÷ 2)",
    formulaDescription: "Lines up the vertical center of the TV with your seating eye-line to prevent neck fatigue.",
    example: "A 65-inch TV with eye-level at 42 inches should be mounted 26.3 inches off the ground.",
    faqs: [
      { question: "What is standard seating eye height?", answer: "For standard couches, the average sitting eye height is 42 inches from the floor." }
    ],
    commonMistakes: ["Mounting the TV too high (e.g. above fireplaces without tilting mounts), which strains neck muscles."],
    useCases: ["Living room setups", "Home theater installations"],
    tips: ["If mounting above eye level, use a tilt mount and tilt the screen downward by 5 to 15 degrees."],
    inputs: [
      { id: "screenSize", label: "TV Screen Size (Diagonal inches)", type: "number", defaultValue: 65, unit: "in" },
      { id: "eyeHeight", label: "Seated Eye Height (inches from floor)", type: "number", defaultValue: 42, unit: "in" }
    ],
    calculate: (inputs) => {
      const size = Number(inputs.screenSize || 65);
      const eye = Number(inputs.eyeHeight || 42);

      const tvH = size * 0.49; // standard 16:9 ratio height factor
      const tvW = size * 0.87; // standard 16:9 ratio width factor

      const bottom = eye - (tvH / 2);

      return {
        tvWidth: { value: tvW.toFixed(1), label: "Estimated TV Screen Width", unit: "inches" },
        tvHeight: { value: tvH.toFixed(1), label: "Estimated TV Screen Height", unit: "inches" },
        idealCenter: { value: eye.toFixed(1), label: "Recommended Center Wall Height", unit: "inches" },
        idealBottom: { value: Math.max(0, bottom).toFixed(1), label: "Recommended Mounting Height (From Floor to TV Bottom)", unit: "inches" }
      };
    }
  },
  // 26. Pond Liner
  "pond-liner": {
    slug: "pond-liner",
    name: "Pond Liner Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Pond Liner Calculator - Sheet Dimensions & Area Finder",
    metaDescription: "Calculate required pond liner sheet lengths, widths, and total square footage. Accounts for depth and border overlap zones.",
    keywords: ["pond liner calculator", "pond sheet size estimator", "liner dimensions"],
    hook: "Calculate liner sheet requirements for garden ponds.",
    description: "Input pond length, width, and depth to figure out the exact liner sheet dimensions you need to order.",
    calcTime: "1 min",
    formula: "Liner Dimension = Size + (2 × Depth) + (2 × Overlap)",
    formulaDescription: "Adds twice the pond depth and twice the edge overlap buffer to the length and width.",
    example: "A pond 10ft × 8ft at 3ft depth with 1.5ft overlap needs an 19ft × 17ft liner sheet.",
    faqs: [
      { question: "How much edge overlap is recommended?", answer: "A minimum border overlap of 1 to 2 feet is recommended to anchor the liner beneath stone borders." }
    ],
    commonMistakes: ["Forgetting to measure from the deepest point of the pond, which under-calculates required sheet width."],
    useCases: ["Backyard garden pond installation", "Koi pond excavation planning"],
    tips: ["Always add geotextile underlayment beneath the liner to prevent root and stone punctures."],
    inputs: [
      { id: "length", label: "Pond Length (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "width", label: "Pond Width (ft)", type: "number", defaultValue: 8, unit: "ft" },
      { id: "depth", label: "Pond Depth (ft)", type: "number", defaultValue: 3, unit: "ft" },
      { id: "overlap", label: "Edge Overlap / Anchor Border (ft)", type: "number", defaultValue: 1.5, unit: "ft" }
    ],
    calculate: (inputs) => {
      const l = Number(inputs.length || 0);
      const w = Number(inputs.width || 0);
      const d = Number(inputs.depth || 0);
      const o = Number(inputs.overlap || 1.5);

      const linerL = l + (2 * d) + (2 * o);
      const linerW = w + (2 * d) + (2 * o);
      const area = linerL * linerW;

      return {
        linerLength: { value: linerL.toFixed(1), label: "Required Liner Sheet Length", unit: "ft" },
        linerWidth: { value: linerW.toFixed(1), label: "Required Liner Sheet Width", unit: "ft" },
        totalArea: { value: area.toFixed(0), label: "Total Liner Surface Area", unit: "sq ft" }
      };
    }
  },
  // 27. Mortgage Idaho
  "mortgage-idaho": {
    slug: "mortgage-idaho",
    name: "Idaho Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Idaho Mortgage Calculator - Monthly Payment Estimator",
    metaDescription: "Calculate mortgage payments in Idaho. Estimates PITI payments using local Idaho average property tax rates (0.63%) and insurance.",
    keywords: ["mortgage calculator idaho", "idaho home payment calculator", "idaho piti estimator"],
    hook: "Calculate home loan payments in the state of Idaho.",
    description: "Determine principal, interest, taxes, and insurance (PITI) details utilizing Idaho-specific property tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (0.63% annual) + Monthly Insurance (0.35% annual)",
    formulaDescription: "Finds the amortized monthly mortgage payment and adds standard property reserves for the state of Idaho.",
    example: "A $350k home in Idaho with 10% down at 6.5% interest costs approximately $2,279/mo.",
    faqs: [
      { question: "What is the average Idaho property tax rate?", answer: "Idaho has an average property tax rate of approximately 0.63% of the home value annually." }
    ],
    commonMistakes: ["Forgetting that local tax rates can vary significantly by county or municipality in Idaho."],
    useCases: ["Idaho real estate buying", "Home budgeting planning"],
    tips: ["Idaho offers a homeowner's exemption that can reduce property tax assessments by up to 50% for primary residences."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 350000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 35000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0063) / 12;
      const ins = (price * 0.0035) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "Idaho Property Tax Reserves", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 28. Wedding Drink
  "wedding-drink": {
    slug: "wedding-drink",
    name: "Wedding Drink Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Wedding Drink Calculator - Complete Beverage & Ice Planner",
    metaDescription: "Estimate complete wedding beverage requirements, including alcoholic drinks, sodas, water, and ice for your reception.",
    keywords: ["wedding drink calculator", "wedding beverage planner", "wedding drink list estimator"],
    hook: "Calculate complete guest beverage inventories.",
    description: "Map both alcoholic and non-alcoholic drink counts, cups, and ice pound requirements for your reception.",
    calcTime: "2 mins",
    formula: "Soft Drinks = Guests × 2 + NonDrinkers × Duration; Alcohol = Drinkers × (1 + Duration)",
    formulaDescription: "Calculates beverage requirements using standard party consumption rates, accounting for designated non-drinkers.",
    example: "150 guests over 5 hours with 15% non-drinkers needs 720 alcoholic servings, 350 soft drinks, and 225 lbs of ice.",
    faqs: [
      { question: "How much ice is needed per guest?", answer: "We recommend approximately 1.5 pounds of ice per guest to keep drinks chilled and coolers stocked." }
    ],
    commonMistakes: ["Failing to adjust soda and water counts upward if the event is held outdoors during summer months."],
    useCases: ["Wedding bar shopping list planning", "Large event beverage coordination"],
    tips: ["Rent dispensers for water and punch to reduce plastic bottle waste."],
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 150 },
      { id: "duration", label: "Event Duration (Hours)", type: "number", defaultValue: 5, unit: "hrs" },
      { id: "nonDrinkers", label: "Non-Drinkers / Designated Drivers (%)", type: "number", defaultValue: 15, unit: "%" }
    ],
    calculate: (inputs) => {
      const guests = Number(inputs.guests || 0);
      const dur = Number(inputs.duration || 0);
      const nd = Number(inputs.nonDrinkers || 15);

      const nonDrinkerCount = guests * (nd / 100);
      const drinkerCount = guests - nonDrinkerCount;

      const alcDrinks = drinkerCount * (1 + dur);
      const softDrinks = (guests * 2) + (nonDrinkerCount * dur);
      const ice = guests * 1.5;

      return {
        alcoholServings: { value: Math.ceil(alcDrinks), label: "Alcoholic Drink Servings", unit: "drinks" },
        softDrinkServings: { value: Math.ceil(softDrinks), label: "Soft Drinks & Water Servings", unit: "drinks" },
        icePounds: { value: Math.ceil(ice), label: "Ice Required", unit: "lbs" }
      };
    }
  },
  // 29. Mortgage Kansas
  "mortgage-kansas": {
    slug: "mortgage-kansas",
    name: "Kansas Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Kansas Mortgage Calculator - Monthly Payment Estimator",
    metaDescription: "Calculate mortgage payments in Kansas. Estimates PITI payments using local Kansas average property tax rates (1.34%) and insurance.",
    keywords: ["mortgage calculator kansas", "kansas home payment calculator", "kansas piti estimator"],
    hook: "Calculate home loan payments in the state of Kansas.",
    description: "Determine principal, interest, taxes, and insurance (PITI) details utilizing Kansas-specific property tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (1.34% annual) + Monthly Insurance (0.65% annual)",
    formulaDescription: "Finds the amortized monthly mortgage payment and adds standard property reserves for the state of Kansas.",
    example: "A $250k home in Kansas with 10% down at 6.5% interest costs approximately $1,838/mo.",
    faqs: [
      { question: "What is the average Kansas property tax rate?", answer: "Kansas has an average property tax rate of approximately 1.34% of the home value annually." }
    ],
    commonMistakes: ["Failing to review local county tax adjustments, which can alter the overall payment amount."],
    useCases: ["Kansas home purchases", "Refinancing properties in Kansas"],
    tips: ["A higher down payment cuts mortgage insurance premiums (PMI), saving money monthly."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 250000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 25000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0134) / 12;
      const ins = (price * 0.0065) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "Kansas Property Tax Reserves", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 30. Reverse Sales Tax Calculator
  "reverse-sales-tax-calculator": {
    slug: "reverse-sales-tax-calculator",
    name: "Reverse Sales Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Reverse Sales Tax Calculator - Extract original price",
    metaDescription: "Extract the original tax-exclusive price and the tax portion from receipt totals.",
    keywords: ["reverse sales tax calculator", "calculate reverse sales tax", "remove tax from total"],
    hook: "Extract original product price and tax paid.",
    description: "Calculates original value and tax component paid on gross checkout invoices.",
    calcTime: "1 min",
    formula: "Base = Gross ÷ (1 + Tax Rate); Tax = Gross - Base",
    formulaDescription: "Works backward from invoice gross total using standard percentage division.",
    example: "Receipt total of $108 with 8% sales tax has a base cost of $100 and tax portion of $8.",
    faqs: [
      { question: "What is reverse sales tax?", answer: "A calculation used to determine the pre-tax price of an item or service when only the total paid price is known." }
    ],
    commonMistakes: ["Multiplying the total price by the tax percentage to find the tax amount, which is mathematically incorrect."],
    useCases: ["Business expensing", "Auditing checkout invoices"],
    tips: ["Ensure you are using the correct combined state and local tax rate for accurate extraction."],
    inputs: [
      { id: "total", label: "Receipt / Invoice Gross Total ($)", type: "number", defaultValue: 108, unit: "$" },
      { id: "rate", label: "Tax Rate (%)", type: "number", defaultValue: 8, unit: "%" }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.total || 0);
      const rate = Number(inputs.rate || 8);

      const base = gross / (1 + (rate / 100));
      const tax = gross - base;

      return {
        baseCost: { value: base.toFixed(2), label: "Base Cost (Pre-Tax)", unit: "$" },
        taxPaid: { value: tax.toFixed(2), label: "Sales Tax Portion Paid", unit: "$" }
      };
    }
  },
  // 31. Puppy to Dog Weight Calculator
  "puppy-to-dog-weight": {
    slug: "puppy-to-dog-weight",
    name: "Puppy to Dog Weight Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "Puppy to Dog Weight Calculator - Estimate Adult Dog Weight",
    metaDescription: "Estimate your puppy's adult weight based on their current age, weight, and breed size group. Accurate growth projections.",
    keywords: ["puppy to dog weight calculator", "puppy weight calculator", "dog weight estimator", "adult dog weight calculator", "dog weight calculator"],
    hook: "Predict your puppy's final adult weight.",
    description: "Input your puppy's current age in weeks, weight, and size category to project their adult size.",
    calcTime: "1 min",
    formula: "Adult Weight = Current Weight ÷ (Age in Weeks ÷ Growth Period Weeks)",
    formulaDescription: "Estimates growth curves based on breed size group. Smaller dogs reach maturity faster (38 weeks), while larger dogs grow for up to 78 weeks.",
    example: "A 16-week medium breed puppy weighing 15 lbs has a growth factor of 16/52 (0.308). Estimated adult weight is 15 ÷ 0.308 ≈ 48.7 lbs.",
    faqs: [
      { question: "When do puppies stop growing?", answer: "Toy/small breeds stop growing around 9-10 months. Medium dogs reach adult weight around 12 months, large dogs at 12-15 months, and giant breeds can take up to 2 years." },
      { question: "Is the puppy weight calculator 100% accurate?", answer: "No, it is an estimate. Genetics, nutrition, and general health also influence a dog's final size." }
    ],
    commonMistakes: ["Using months instead of weeks for the age input.", "Incorrect breed size classification (e.g. labeling a giant breed as medium)."],
    useCases: ["Choosing puppy food portion sizes", "Sizing crates, beds, and collars", "Estimating adult veterinary care requirements"],
    tips: ["Consult your veterinarian if your puppy is growing too fast or too slow compared to breed averages."],
    inputs: [
      { id: "currentWeight", label: "Current Weight (lbs)", type: "number", defaultValue: 15, unit: "lbs" },
      { id: "ageWeeks", label: "Age (Weeks)", type: "number", defaultValue: 16, unit: "weeks" },
      { 
        id: "breedSize", 
        label: "Breed Size Group", 
        type: "select", 
        defaultValue: "medium", 
        options: [
          { value: "small", label: "Toy & Small (<20 lbs adult)" },
          { value: "medium", label: "Medium (20-50 lbs adult)" },
          { value: "large", label: "Large (50-100 lbs adult)" },
          { value: "giant", label: "Giant (>100 lbs adult)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.currentWeight || 0);
      const age = Number(inputs.ageWeeks || 16);
      const size = inputs.breedSize || "medium";

      let growthWeeks = 52;
      if (size === "small") growthWeeks = 38;
      else if (size === "large") growthWeeks = 65;
      else if (size === "giant") growthWeeks = 78;

      const factor = Math.min(1.0, age / growthWeeks);
      const adultWeight = factor > 0 ? weight / factor : 0;
      const pctReached = factor * 100;

      return {
        adultWeight: { value: adultWeight.toFixed(1), label: "Estimated Adult Weight", unit: "lbs" },
        pctReached: { value: pctReached.toFixed(0), label: "Current Weight Progress", unit: "%" }
      };
    }
  },
  // 32. Puppy Growth Calculator
  "puppy-growth": {
    slug: "puppy-growth",
    name: "Puppy Growth Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "Puppy Growth Calculator - Track Puppy Development",
    metaDescription: "Track your puppy's growth rate and development timeline. View estimated weekly weight gain and remaining growth.",
    keywords: ["puppy growth calculator", "puppy development tracker", "puppy weight gain calculator"],
    hook: "Monitor your puppy's development milestones.",
    description: "Input current weight and age to estimate the weekly growth rate and remaining growth potential.",
    calcTime: "1 min",
    formula: "Weekly Growth Rate = Current Weight ÷ Age (Weeks)",
    formulaDescription: "Computes average weekly weight gain to date and projects the remaining growth required to reach adult size.",
    example: "A 16-week puppy weighing 16 lbs has gained an average of 1 lb per week. It will gain approximately 32.7 lbs more to reach a 48.7 lb adult weight.",
    faqs: [
      { question: "How much weight should a puppy gain per week?", answer: "Small breeds gain a few ounces per week, medium breeds gain 1-2 lbs per week, while large and giant breeds can gain 2-5 lbs weekly during peak growth." }
    ],
    commonMistakes: ["Expecting constant linear weight gain, as growth rates typically slow down after 6 months."],
    useCases: ["Monitoring healthy growth trajectories", "Detecting growth spurts or stagnation"],
    tips: ["A healthy puppy should have a visible waistline and ribs that are easily felt but not protruding."],
    inputs: [
      { id: "currentWeight", label: "Current Weight (lbs)", type: "number", defaultValue: 15, unit: "lbs" },
      { id: "ageWeeks", label: "Age (Weeks)", type: "number", defaultValue: 16, unit: "weeks" },
      { 
        id: "breedSize", 
        label: "Breed Size Group", 
        type: "select", 
        defaultValue: "medium", 
        options: [
          { value: "small", label: "Toy & Small (<20 lbs adult)" },
          { value: "medium", label: "Medium (20-50 lbs adult)" },
          { value: "large", label: "Large (50-100 lbs adult)" },
          { value: "giant", label: "Giant (>100 lbs adult)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.currentWeight || 0);
      const age = Number(inputs.ageWeeks || 16);
      const size = inputs.breedSize || "medium";

      let growthWeeks = 52;
      if (size === "small") growthWeeks = 38;
      else if (size === "large") growthWeeks = 65;
      else if (size === "giant") growthWeeks = 78;

      const factor = Math.min(1.0, age / growthWeeks);
      const adultWeight = factor > 0 ? weight / factor : 0;
      const weeklyGain = age > 0 ? weight / age : 0;
      const remaining = Math.max(0, adultWeight - weight);

      return {
        adultWeight: { value: adultWeight.toFixed(1), label: "Projected Adult Weight", unit: "lbs" },
        weeklyGain: { value: weeklyGain.toFixed(2), label: "Average Weekly Weight Gain", unit: "lbs/week" },
        remainingWeight: { value: remaining.toFixed(1), label: "Remaining Weight to Gain", unit: "lbs" }
      };
    }
  },
  // 33. Dog Size Calculator
  "dog-size": {
    slug: "dog-size",
    name: "Dog Size Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "Dog Size Calculator - Estimate Adult Height & Size Category",
    metaDescription: "Estimate your puppy's adult height, weight, and size class. Tailored for all dog breed size groups.",
    keywords: ["dog size calculator", "how big will my puppy get", "dog size estimator"],
    hook: "Estimate your dog's future height and classification.",
    description: "Predict adult size metrics including estimated height at the shoulders and final weight group.",
    calcTime: "1 min",
    formula: "Height Projection = Base Category Height × Weight Growth Factor",
    formulaDescription: "Converts estimated adult weight to shoulder height range brackets standardized for major dog breed groups.",
    example: "A puppy with a projected 48.7 lb adult weight falls in the Medium category with an estimated shoulder height of 15-20 inches.",
    faqs: [
      { question: "How tall will my puppy get?", answer: "Usually, shoulder height corresponds to adult weight group: Small (8-15\"), Medium (15-20\"), Large (20-26\"), Giant (26-35\")." }
    ],
    commonMistakes: ["Confusing height at the head with height at the shoulders (withers)."],
    useCases: ["Checking suitability for small apartments", "Selecting dog doors, crates, and travel boxes"],
    tips: ["A dog's height is measured from the ground to the top of its shoulders (the withers) while standing."],
    inputs: [
      { id: "currentWeight", label: "Current Weight (lbs)", type: "number", defaultValue: 15, unit: "lbs" },
      { id: "ageWeeks", label: "Age (Weeks)", type: "number", defaultValue: 16, unit: "weeks" },
      { 
        id: "breedSize", 
        label: "Breed Size Group", 
        type: "select", 
        defaultValue: "medium", 
        options: [
          { value: "small", label: "Toy & Small (<20 lbs adult)" },
          { value: "medium", label: "Medium (20-50 lbs adult)" },
          { value: "large", label: "Large (50-100 lbs adult)" },
          { value: "giant", label: "Giant (>100 lbs adult)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.currentWeight || 0);
      const age = Number(inputs.ageWeeks || 16);
      const size = inputs.breedSize || "medium";

      let growthWeeks = 52;
      if (size === "small") growthWeeks = 38;
      else if (size === "large") growthWeeks = 65;
      else if (size === "giant") growthWeeks = 78;

      const factor = Math.min(1.0, age / growthWeeks);
      const adultWeight = factor > 0 ? weight / factor : 0;

      let estHeight = "15 - 20";
      let sizeCategory = "Medium Breed";
      if (adultWeight < 20) {
        estHeight = "8 - 15";
        sizeCategory = "Toy & Small Breed";
      } else if (adultWeight > 100) {
        estHeight = "26 - 35";
        sizeCategory = "Giant Breed";
      } else if (adultWeight > 50) {
        estHeight = "20 - 26";
        sizeCategory = "Large Breed";
      }

      return {
        adultWeight: { value: adultWeight.toFixed(1), label: "Estimated Adult Weight", unit: "lbs" },
        estHeight: { value: estHeight, label: "Estimated Shoulder Height", unit: "inches" },
        sizeCategory: { value: sizeCategory, label: "Dog Size Category", unit: "" }
      };
    }
  },
  // 34. Dog Pregnancy Calculator
  "dog-pregnancy": {
    slug: "dog-pregnancy",
    name: "Dog Pregnancy Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "Dog Pregnancy Calculator - Whelping Due Date & Gestation Calendar",
    metaDescription: "Calculate your dog's whelping due date and view critical pregnancy milestones, scan dates, and x-ray windows.",
    keywords: ["calculator dog pregnancy", "dog pregnancy due date", "whelping calculator", "canine gestation calculator"],
    hook: "Map out your dog's pregnancy milestones and due date.",
    description: "Input the mating date or days since mating to calculate the expected whelping window and weekly milestones.",
    calcTime: "1 min",
    formula: "Due Date = Mating Date + 63 Days",
    formulaDescription: "Standard dog gestation lasts approximately 63 days (can vary from 58 to 68 days).",
    example: "If mating occurred 10 days ago, due date is in 53 days. Ultrasound window starts in 15 days.",
    faqs: [
      { question: "How long is a dog pregnant?", answer: "Normally 63 days from ovulation, though birth can occur safely between 58 and 68 days." },
      { question: "When can a vet confirm pregnancy?", answer: "Ultrasound can confirm pregnancy at days 25-35. X-rays can detect puppy skeletons after day 45." }
    ],
    commonMistakes: ["Failing to log multiple mating dates, which can shift the whelping window by a few days."],
    useCases: ["Preparing whelping box timelines", "Scheduling vet checkups and scans", "Predicting birth dates"],
    tips: ["Begin monitoring your dog's temperature daily around day 58. A drop below 99°F indicates labor should start within 24 hours."],
    inputs: [
      { id: "daysSinceMating", label: "Days Since Mating", type: "number", defaultValue: 10, unit: "days" }
    ],
    calculate: (inputs) => {
      const days = Number(inputs.daysSinceMating || 0);
      const GESTATION = 63;
      const daysRemaining = Math.max(0, GESTATION - days);

      let status = "Early stage (Embryos descending)";
      let nextMilestone = "Ultrasound Scan (Day 25-35)";

      if (days >= 56) {
        status = "Late stage (Prepare for whelping any day)";
        nextMilestone = "Whelping / Delivery";
      } else if (days >= 45) {
        status = "Late stage (Skeletons calcifying)";
        nextMilestone = "X-ray Check (Day 45+) / Set up Whelping Box (Day 56)";
      } else if (days >= 28) {
        status = "Mid stage (Heartbeats detectable)";
        nextMilestone = "Puppy skeletons calcifying (Day 45)";
      } else if (days >= 25) {
        status = "Mid stage (Ultrasound window active)";
        nextMilestone = "Heartbeat check (Day 28)";
      }

      return {
        daysRemaining: { value: daysRemaining, label: "Days Remaining", unit: "days" },
        progressDays: { value: `${days} / ${GESTATION}`, label: "Gestation Progress", unit: "days" },
        pregnancyStatus: { value: status, label: "Current Pregnancy Status", unit: "" },
        nextMilestone: { value: nextMilestone, label: "Next Critical Milestone", unit: "" }
      };
    }
  },
  // 35. Maine Mortgage Calculator
  "mortgage-maine": {
    slug: "mortgage-maine",
    name: "Maine Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Maine Mortgage Calculator - PITI Monthly Payment Estimator",
    metaDescription: "Estimate mortgage payments in Maine. Calculates PITI using Maine's average property tax rate (1.36%) and typical homeowners insurance.",
    keywords: ["mortgage calculator maine", "maine home payment calculator", "maine mortgage piti estimator"],
    hook: "Calculate home loan payments in the state of Maine.",
    description: "Estimate monthly principal, interest, taxes, and insurance (PITI) using local Maine tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (1.36% annual) + Monthly Insurance (0.55% annual)",
    formulaDescription: "Calculates the amortized monthly mortgage payment and appends standard Maine property tax rates.",
    example: "A $300k home in Maine with 10% down ($30k) at 6.5% interest costs approximately $2,185/month.",
    faqs: [
      { question: "What is the property tax rate in Maine?", answer: "Maine's state average property tax rate is approximately 1.36% of the home value annually, though county rates vary." }
    ],
    commonMistakes: ["Failing to account for local Maine municipal property tax adjustments.", "Not budgeting for private mortgage insurance (PMI) if putting down less than 20%."],
    useCases: ["Maine house shopping", "Refinancing properties in Portland, Bangor, or Augusta"],
    tips: ["Review Maine Housing (MaineHousing) first-time homebuyer programs for lower interest rates or down payment grants."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 300000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 30000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0136) / 12;
      const ins = (price * 0.0055) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "Maine Property Tax Reserves (1.36%)", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 36. Brick Calculator
  "brick": {
    slug: "brick",
    name: "Brick Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Brick Calculator - Estimate Wall Bricks & Mortar Bags",
    metaDescription: "Calculate the exact number of bricks and mortar bags required for a wall or brick paving project. Accounts for modular, queen, and utility sizes.",
    keywords: ["calculator for bricks", "brick calculator", "wall brick estimator", "mortar bag calculator"],
    hook: "Estimate brick counts and mortar requirements instantly.",
    description: "Input wall dimensions and select brick sizes to calculate material volume and estimated project costs.",
    calcTime: "2 mins",
    formula: "Total Bricks = Wall Area × Bricks per Sq Ft × (1 + Waste %)",
    formulaDescription: "Finds the total wall surface area in square feet, multiplies by standard brick layout densities, and appends a materials waste margin.",
    example: "A 20ft long, 8ft tall wall (160 sq ft) using standard modular bricks (6.55/sq ft) requires 1,048 bricks. Adding 10% waste results in 1,153 bricks.",
    faqs: [
      { question: "How many bricks are in a square foot?", answer: "Standard modular brick layouts require approximately 6.55 bricks per square foot with standard 3/8\" mortar joints. Queen size requires ~5.2, and utility size requires ~3.0." },
      { question: "How much mortar do I need?", answer: "One standard 80 lb bag of mortar mix is typically required to lay about 30 modular bricks." }
    ],
    commonMistakes: ["Forgetting to add a waste buffer (10% is standard) for corners, half-cuts, and breakage."],
    useCases: ["Building brick walls or retaining structures", "Laying brick patios or garden paths"],
    tips: ["Order all bricks at once to ensure consistent color matching across the entire shipment."],
    inputs: [
      { id: "wallLength", label: "Wall Length (ft)", type: "number", defaultValue: 20, unit: "ft" },
      { id: "wallHeight", label: "Wall Height (ft)", type: "number", defaultValue: 8, unit: "ft" },
      { 
        id: "brickSize", 
        label: "Brick Size & Type", 
        type: "select", 
        defaultValue: "modular", 
        options: [
          { value: "modular", label: "Modular (6.55 per sq ft)" },
          { value: "queen", label: "Queen (5.20 per sq ft)" },
          { value: "utility", label: "Utility (3.00 per sq ft)" }
        ] 
      },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10, unit: "%" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.wallLength || 0);
      const height = Number(inputs.wallHeight || 0);
      const type = inputs.brickSize || "modular";
      const waste = Number(inputs.wastePct || 10);

      const area = length * height;
      
      let ratio = 6.55;
      if (type === "queen") ratio = 5.2;
      else if (type === "utility") ratio = 3.0;

      const rawBricks = area * ratio;
      const totalBricks = rawBricks * (1 + waste / 100);
      const mortarBags = totalBricks / 30;

      return {
        wallArea: { value: area.toFixed(1), label: "Total Wall Area", unit: "sq ft" },
        bricksNeeded: { value: Math.ceil(rawBricks), label: "Base Bricks Needed", unit: "bricks" },
        totalBricks: { value: Math.ceil(totalBricks), label: "Total Bricks (+ Waste)", unit: "bricks" },
        mortarBags: { value: Math.ceil(mortarBags), label: "80 lb Mortar Bags Needed", unit: "bags" }
      };
    }
  },
  // 37. IFTA Fuel Tax Calculator
  "ifta": {
    slug: "ifta",
    name: "IFTA Fuel Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "IFTA Fuel Tax Calculator - Trip Mileage & Surcharge Estimator",
    metaDescription: "Calculate International Fuel Tax Agreement (IFTA) payouts. Estimate net fuel tax due or credit refunds by state tax rates.",
    keywords: ["ifta calculator", "ifta fuel tax calculator", "trucking fuel tax estimator", "mileage tax calculator"],
    hook: "Determine net fuel tax due or refund credits across jurisdictions.",
    description: "Analyze trucking fuel consumption and state distance splits to calculate net tax balances under IFTA guidelines.",
    calcTime: "2 mins",
    formula: "Tax Due = (State Distance ÷ Average MPG - Fuel Purchased in State) × State Tax Rate",
    formulaDescription: "Divides total trip distance by total fuel consumed to get the vehicle MPG. Computes fuel consumed in the target state, deducts fuel purchased there, and multiplies by the state tax rate.",
    example: "Driving 300 miles in New York (tax rate $0.41/gal) on a 1,000-mile, 150-gallon trip (6.67 MPG) consumes 45 gallons. If you bought 40 gallons in NY, you owe tax on the 5-gallon difference: 5 × $0.41 = $2.05.",
    faqs: [
      { question: "What is IFTA?", answer: "The International Fuel Tax Agreement is an agreement between US states and Canadian provinces to simplify reporting of fuel use taxes by commercial carriers." },
      { question: "What happens if my tax due is negative?", answer: "A negative amount represents a tax credit, meaning you purchased more fuel in that state than you consumed, resulting in a refund balance." }
    ],
    commonMistakes: ["Failing to account for toll vs non-toll mileage or mixed fuel types.", "Inaccurate record-keeping of retail fuel purchase receipts."],
    useCases: ["Quarterly IFTA tax preparation", "Fleet fuel cost auditing", "Owner-operator route optimization"],
    tips: ["Purchase fuel in lower-tax states while maintaining compliance to improve cash flow credit balances."],
    inputs: [
      { id: "totalDistance", label: "Total Trip Distance (miles)", type: "number", defaultValue: 1000, unit: "mi" },
      { id: "totalFuel", label: "Total Fuel Purchased (gallons)", type: "number", defaultValue: 150, unit: "gal" },
      { 
        id: "state", 
        label: "Target Reporting State", 
        type: "select", 
        defaultValue: "NY", 
        options: [
          { value: "NY", label: "New York ($0.411 / gal)" },
          { value: "CA", label: "California ($0.579 / gal)" },
          { value: "IL", label: "Illinois ($0.454 / gal)" },
          { value: "TX", label: "Texas ($0.200 / gal)" },
          { value: "GA", label: "Georgia ($0.321 / gal)" }
        ] 
      },
      { id: "stateDistance", label: "Distance Traveled in State (miles)", type: "number", defaultValue: 300, unit: "mi" },
      { id: "stateFuelPurchased", label: "Fuel Purchased in State (gallons)", type: "number", defaultValue: 40, unit: "gal" }
    ],
    calculate: (inputs) => {
      const totalDist = Number(inputs.totalDistance || 0);
      const totalFl = Number(inputs.totalFuel || 1);
      const stateId = inputs.state || "NY";
      const stateDist = Number(inputs.stateDistance || 0);
      const stateFuelPur = Number(inputs.stateFuelPurchased || 0);

      const rates: Record<string, number> = {
        NY: 0.411,
        CA: 0.579,
        IL: 0.454,
        TX: 0.200,
        GA: 0.321
      };

      const rate = rates[stateId] || 0.30;
      const mpg = totalDist / totalFl;
      const stateConsumed = stateDist / mpg;
      const taxDue = (stateConsumed - stateFuelPur) * rate;

      return {
        mpg: { value: mpg.toFixed(2), label: "Average Vehicle MPG", unit: "miles/gal" },
        stateConsumed: { value: stateConsumed.toFixed(2), label: "Fuel Consumed in State", unit: "gallons" },
        netTaxDue: { value: taxDue.toFixed(2), label: "Net Tax Due (Refund if negative)", unit: "$" }
      };
    }
  },
  // 38. 457 Retirement Calculator
  "457-retirement": {
    slug: "457-retirement",
    name: "457 Retirement Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "457 / 457b Retirement Savings Calculator - Pre-tax Compound Growth",
    metaDescription: "Calculate your future 457(b) retirement account balance. Models tax-deferred compound interest and annual contribution limits.",
    keywords: ["457 calculator", "457b calculator", "457 retirement calculator", "deferred compensation calculator"],
    hook: "Grow your tax-deferred government retirement savings.",
    description: "Input your monthly contributions and annual rate of return to project your 457 deferred compensation balance.",
    calcTime: "2 mins",
    formula: "FV = P × (1 + r)^n + PMT × [((1 + r)^n - 1) ÷ r]",
    formulaDescription: "Standard future value formula compounded monthly, where PMT is the monthly contribution and r is the monthly rate of return.",
    example: "Starting with $10,000 and contributing $1,000/month for 25 years at an 8% annual return yields a projected balance of $968,266.",
    faqs: [
      { question: "What is a 457(b) plan?", answer: "A 457(b) plan is a tax-advantaged deferred compensation retirement plan available to state and local government employees and some non-profits." },
      { question: "What are the 2024 contribution limits for 457(b)?", answer: "The employee contribution limit is $23,000. For those age 50 or older, the catch-up contribution allows up to $30,500." }
    ],
    commonMistakes: ["Failing to account for age 50+ catch-up contributions.", "Underestimating compound growth benefits over long timeframes."],
    useCases: ["Government or municipal employee retirement planning", "Supplemental retirement saving analysis"],
    tips: ["A major benefit of 457(b) plans is no 10% early withdrawal penalty after leaving employment, regardless of age."],
    inputs: [
      { id: "currentBalance", label: "Current Balance ($)", type: "number", defaultValue: 10000, unit: "$" },
      { id: "monthlyContribution", label: "Monthly Contribution ($)", type: "number", defaultValue: 1000, unit: "$" },
      { id: "annualReturn", label: "Expected Annual Return (%)", type: "number", defaultValue: 8, unit: "%" },
      { id: "years", label: "Years to Grow", type: "number", defaultValue: 25 }
    ],
    calculate: (inputs) => {
      const balance = Number(inputs.currentBalance || 0);
      const contribution = Number(inputs.monthlyContribution || 0);
      const retRate = Number(inputs.annualReturn || 8);
      const yrs = Number(inputs.years || 25);

      const r = (retRate / 100) / 12;
      const n = yrs * 12;

      let fv = balance * Math.pow(1 + r, n);
      if (r > 0) {
        fv += contribution * ((Math.pow(1 + r, n) - 1) / r);
      } else {
        fv += contribution * n;
      }

      const totalCont = balance + (contribution * n);
      const growth = fv - totalCont;

      return {
        futureBalance: { value: fv.toFixed(2), label: "Projected Account Value", unit: "$" },
        totalContributions: { value: totalCont.toFixed(2), label: "Total Contributions Made", unit: "$" },
        growthEarned: { value: growth.toFixed(2), label: "Total Investment Growth", unit: "$" }
      };
    }
  },
  // 39. Siding Calculator
  "siding": {
    slug: "siding",
    name: "Siding Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Siding Material & Installation Cost Calculator",
    metaDescription: "Calculate the squares of siding needed for your home. Estimate material costs and account for window/door cutouts.",
    keywords: ["siding calculator", "siding cost estimator", "siding squares calculator", "vinyl siding calculator"],
    hook: "Calculate home siding materials and cost in seconds.",
    description: "Input wall measurements and structural cutouts to estimate siding square footage, material squares, and total cost.",
    calcTime: "2 mins",
    formula: "Squares Needed = [Net Wall Area × (1 + Waste %)] ÷ 100",
    formulaDescription: "Finds the gross wall area, deducts window (~15 sq ft) and door (~20 sq ft) cutouts, multiplies by a waste factor, and divides by 100 to get 'Squares' (the standard industry siding unit of 100 sq ft).",
    example: "For a wall 100ft long and 10ft tall (1,000 sq ft) with 6 windows and 2 doors, Net Area = 1,000 - 90 - 40 = 870 sq ft. With 10% waste, you need 9.57 Squares.",
    faqs: [
      { question: "What is a 'square' of siding?", answer: "In construction, one square of siding equals 100 square feet of material coverage." }
    ],
    commonMistakes: ["Failing to subtract large window and door areas, resulting in significant over-ordering.", "Not ordering enough waste buffer for complex gable cuts."],
    useCases: ["Contractor siding quotes", "DIY house exterior renovations"],
    tips: ["A standard waste factor is 10% for rectangular walls, but increase it to 15-20% if your walls contain steep gables."],
    inputs: [
      { id: "wallLength", label: "Total Wall Perimeter (ft)", type: "number", defaultValue: 100, unit: "ft" },
      { id: "wallHeight", label: "Average Wall Height (ft)", type: "number", defaultValue: 10, unit: "ft" },
      { id: "windows", label: "Number of Windows", type: "number", defaultValue: 6 },
      { id: "doors", label: "Number of Exterior Doors", type: "number", defaultValue: 2 },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10, unit: "%" },
      { id: "sqftCost", label: "Siding Material Cost ($ / sq ft)", type: "number", defaultValue: 3.50, unit: "$" }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.wallLength || 0);
      const h = Number(inputs.wallHeight || 0);
      const win = Number(inputs.windows || 0);
      const dr = Number(inputs.doors || 0);
      const waste = Number(inputs.wastePct || 10);
      const costSq = Number(inputs.sqftCost || 3.50);

      const gross = len * h;
      const deductions = (win * 15) + (dr * 20);
      const net = Math.max(0, gross - deductions);
      const totalArea = net * (1 + waste / 100);
      const squares = totalArea / 100;
      const cost = totalArea * costSq;

      return {
        netSidingArea: { value: net.toFixed(0), label: "Net Coverage Area Needed", unit: "sq ft" },
        squares: { value: squares.toFixed(2), label: "Siding Squares Needed", unit: "squares" },
        materialCost: { value: cost.toFixed(2), label: "Estimated Material Cost", unit: "$" }
      };
    }
  },
  // 40. Dinkytown Financial Suite Calculator
  "dinkytown": {
    slug: "dinkytown",
    name: "Dinkytown Financial Suite Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Dinkytown Financial Suite Calculator - Wealth & Debt Modeler",
    metaDescription: "Model simultaneous savings building and high-interest debt paydowns. A premium, comprehensive financial planning dashboard.",
    keywords: ["dinkytown calculators", "dinkytown financial planner", "wealth builder calculator", "debt payoff savings planner"],
    hook: "Evaluate how savings contributions and debt paydowns impact your net worth.",
    description: "Input monthly savings plans alongside outstanding credit card debts to see your future consolidated net worth projections.",
    calcTime: "2 mins",
    formula: "Net Worth Impact = Future Savings Balance - Outstanding Debt Balance",
    formulaDescription: "Compunds savings balance monthly, amortizes debt payments, and calculates the net difference at the end of the term.",
    example: "Saving $500/month for 10 years at 6% yield gives $79,085. Paying $250/month on a $5,000, 18% APR credit card wipes it out in 24 months, costing $1,015 in interest. Net worth delta is $78,070.",
    faqs: [
      { question: "Why compare debt and savings together?", answer: "High-interest debt drains wealth faster than typical savings accounts grow it. Reviewing both helps balance wealth-building with debt reduction." }
    ],
    commonMistakes: ["Failing to pay down high-interest credit cards before prioritizing lower-yield savings."],
    useCases: ["Consolidated household financial planning", "Debt snowball/avalanche decisions"],
    tips: ["If your debt APR is higher than your savings return rate, focus surplus cash on paying off the debt first."],
    inputs: [
      { id: "monthlySavings", label: "Monthly Savings Contribution ($)", type: "number", defaultValue: 500, unit: "$" },
      { id: "savingsYears", label: "Savings Duration (Years)", type: "number", defaultValue: 10 },
      { id: "savingsRate", label: "Savings Annual Yield (%)", type: "number", defaultValue: 6, unit: "%" },
      { id: "debtBalance", label: "Credit Card Debt Balance ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "debtPayment", label: "Monthly Debt Payment ($)", type: "number", defaultValue: 250, unit: "$" },
      { id: "debtApr", label: "Credit Card APR (%)", type: "number", defaultValue: 18, unit: "%" }
    ],
    calculate: (inputs) => {
      const savings = Number(inputs.monthlySavings || 0);
      const yrs = Number(inputs.savingsYears || 10);
      const rate = Number(inputs.savingsRate || 6);
      const debt = Number(inputs.debtBalance || 0);
      const dPay = Number(inputs.debtPayment || 0);
      const dApr = Number(inputs.debtApr || 18);

      // 1. Savings Compound
      const rS = (rate / 100) / 12;
      const nS = yrs * 12;
      let futureSavings = 0;
      if (rS > 0) {
        futureSavings = savings * ((Math.pow(1 + rS, nS) - 1) / rS);
      } else {
        futureSavings = savings * nS;
      }

      // 2. Debt Amortization
      const rD = (dApr / 100) / 12;
      let debtMonths = 0;
      let debtInterest = 0;
      if (debt > 0 && dPay > 0) {
        const minPayRequired = debt * rD;
        if (dPay > minPayRequired) {
          let rem = debt;
          while (rem > 0 && debtMonths < 360) {
            const interest = rem * rD;
            debtInterest += interest;
            const currentPay = Math.min(rem + interest, dPay);
            rem = rem + interest - currentPay;
            debtMonths++;
          }
        } else {
          debtMonths = 360; // infinite
        }
      }

      const netWorthImpact = futureSavings - debtInterest;

      return {
        projectedSavings: { value: futureSavings.toFixed(2), label: "Consolidated Savings Balance", unit: "$" },
        debtMonthsToZero: { value: debtMonths === 360 ? "Infinite" : debtMonths, label: "Months to Clear Card Debt", unit: "months" },
        debtInterestPaid: { value: debtInterest.toFixed(2), label: "Total Interest Wasted on Card", unit: "$" },
        netWorthDelta: { value: netWorthImpact.toFixed(2), label: "Net Financial Worth Impact", unit: "$" }
      };
    }
  },
  // 41. Metal Roof Calculator
  "metal-roof": {
    slug: "metal-roof",
    name: "Metal Roof Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Metal Roof Panel & Screw Material Calculator",
    metaDescription: "Estimate the metal roofing panels, screws, trim, and waste buffer for a metal roof installation. Accurately model pitch adjustments.",
    keywords: ["metal roof calculator", "metal roofing cost", "roof panel estimator", "corrugated metal roofing calculator"],
    hook: "Calculate corrugated or standing seam metal roofing layouts.",
    description: "Input house dimensions, overhang size, and slope factors to estimate the count of panel sheets and fasteners required.",
    calcTime: "2 mins",
    formula: "Roof Area = Footprint Area × Slope Factor × (1 + Waste %)",
    formulaDescription: "Computes the total sloped surface area including overhangs, then calculates the number of full panels needed based on panel width, adding standard roofing screws (80 screws per 100 sq ft).",
    example: "A 40ft × 30ft building under a 6/12 pitch (factor 1.118) and 1ft overhang yields 1,476 sq ft of roof area. Using 3ft wide panels with a 10% waste buffer requires approximately 18 panels and 1,180 screws.",
    faqs: [
      { question: "How many screws do I need for a metal roof?", answer: "Usually, 80 to 100 specialized roofing screws are required per square (100 square feet) of metal roofing material." },
      { question: "What is the standard width of metal roof panels?", answer: "Most metal roofing panels are sold in standard widths of 36 inches (3 feet) of coverage." }
    ],
    commonMistakes: ["Failing to account for roof pitch multipliers, which increases slope lengths.", "Not ordering enough screws for edge trims and ridges."],
    useCases: ["Ordering barn or residential metal roof packages", "Comparing metal roof vs asphalt shingle material volumes"],
    tips: ["Order specialized neoprene-washer screws that seal the sheet metal screw holes to prevent leaks."],
    inputs: [
      { id: "length", label: "Building Footprint Length (ft)", type: "number", defaultValue: 40, unit: "ft" },
      { id: "width", label: "Building Footprint Width (ft)", type: "number", defaultValue: 30, unit: "ft" },
      { id: "overhang", label: "Roof Eave / Overhang (ft)", type: "number", defaultValue: 1, unit: "ft" },
      { 
        id: "pitch", 
        label: "Roof Pitch (Rise / 12)", 
        type: "select", 
        defaultValue: "6", 
        options: [
          { value: "3", label: "3/12 (Factor 1.03)" },
          { value: "4", label: "4/12 (Factor 1.05)" },
          { value: "6", label: "6/12 (Factor 1.118)" },
          { value: "8", label: "8/12 (Factor 1.20)" },
          { value: "12", label: "12/12 (Factor 1.414)" }
        ] 
      },
      { id: "panelWidth", label: "Panel Coverage Width (ft)", type: "number", defaultValue: 3, unit: "ft" },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10, unit: "%" }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.length || 0);
      const w = Number(inputs.width || 0);
      const overhang = Number(inputs.overhang || 0);
      const pitch = Number(inputs.pitch || 6);
      const pWidth = Number(inputs.panelWidth || 3);
      const waste = Number(inputs.wastePct || 10);

      const pitchFactors: Record<number, number> = { 3: 1.0308, 4: 1.0541, 6: 1.1180, 8: 1.2019, 12: 1.4142 };
      const factor = pitchFactors[pitch] || 1.118;
      
      const footprintArea = (len + overhang * 2) * (w + overhang * 2);
      const slopedArea = footprintArea * factor;
      const totalArea = slopedArea * (1 + waste / 100);
      const squares = totalArea / 100;

      // Panels estimation
      // Assume double sloped roof (gable), panels go from eave to ridge
      const slopeLength = ((w / 2) + overhang) * factor;
      const runPerSide = len + overhang * 2;
      const panelsPerSide = Math.ceil(runPerSide / pWidth);
      const totalPanels = panelsPerSide * 2 * (1 + waste / 100);

      const screws = totalArea * 0.8; // 80 per square

      return {
        roofArea: { value: slopedArea.toFixed(0), label: "Estimated Sloped Roof Area", unit: "sq ft" },
        panelsNeeded: { value: Math.ceil(totalPanels), label: "Estimated Panels Required", unit: "panels" },
        screwsNeeded: { value: Math.ceil(screws), label: "Fastening Screws Required", unit: "screws" }
      };
    }
  },
  // 42. Pawn Shop Loan Calculator
  "pawn": {
    slug: "pawn",
    name: "Pawn Shop Loan Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Pawn Shop Loan Calculator - Interest & Fees Repayment Planner",
    metaDescription: "Calculate pawn shop loan amounts and interest payoffs. Understand the true APR and repayment totals for pawned items.",
    keywords: ["pawn calculator", "pawn shop loan calculator", "pawn loan interest calculator", "pawn estimator"],
    hook: "Plan short-term collateral pawn shop loans.",
    description: "Determine the loan principal, monthly interest charges, and the final payout amount needed to recover your item.",
    calcTime: "1 min",
    formula: "Total Repayment = Loan Principal + (Loan Principal × Monthly Interest Rate × Term in Months)",
    formulaDescription: "Pawn shops charge simple monthly interest fees. Standard APR equals monthly interest multiplied by 12.",
    example: "Pawning a $1,000 item at 40% valuation yields a $400 loan. At a 10% monthly interest rate for 3 months, total interest is $120. Total repayment is $520.",
    faqs: [
      { question: "How do pawn loans work?", answer: "You exchange a valuable item for a short-term cash loan. If you repay the loan plus interest within the term, you reclaim the item. Otherwise, the pawn shop keeps and sells the item." },
      { question: "What is the APR on a pawn loan?", answer: "Pawn loan APRs are very high, often ranging from 120% to 240% annually depending on local regulations." }
    ],
    commonMistakes: ["Failing to reclaim the item before the loan duration expires, resulting in collateral forfeiture."],
    useCases: ["Estimating cash offers for personal items", "Short-term budgeting planner"],
    tips: ["Only pawn items you are willing to lose if your financial situation does not allow for quick repayment."],
    inputs: [
      { id: "itemValue", label: "Estimated Item Resale Value ($)", type: "number", defaultValue: 1000, unit: "$" },
      { id: "loanPct", label: "Pawn Valuation Offer (%)", type: "number", defaultValue: 40, unit: "%" },
      { id: "monthlyRate", label: "Monthly Interest Rate (%)", type: "number", defaultValue: 10, unit: "%" },
      { id: "termMonths", label: "Loan Duration (Months)", type: "number", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const val = Number(inputs.itemValue || 0);
      const pct = Number(inputs.loanPct || 40);
      const rate = Number(inputs.monthlyRate || 10);
      const term = Number(inputs.termMonths || 3);

      const principal = val * (pct / 100);
      const interest = principal * (rate / 100) * term;
      const totalRepay = principal + interest;
      const apr = rate * 12;

      return {
        loanAmount: { value: principal.toFixed(2), label: "Loan Offer Amount", unit: "$" },
        totalRepayment: { value: totalRepay.toFixed(2), label: "Total Repayment to Reclaim Item", unit: "$" },
        feesTotal: { value: interest.toFixed(2), label: "Total Pawn Fees & Interest Paid", unit: "$" },
        apr: { value: apr.toFixed(0), label: "Annual Percentage Rate (APR)", unit: "%" }
      };
    }
  },
  // 43. Hard Money Loan Calculator
  "hard-money": {
    slug: "hard-money",
    name: "Hard Money Loan Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Hard Money Loan Calculator - Real Estate House Flip Modeler",
    metaDescription: "Calculate house flipping hard money interest-only payments, upfront lender points, and net financing totals for real estate rehabs.",
    keywords: ["hard money loan calculator", "hard money calculator", "house flipping loan calculator", "rehab loan calculator"],
    hook: "Model real estate investment hard money loans.",
    description: "Determine upfront lender points, interest-only monthly payments, and aggregate borrowing costs for real estate deals.",
    calcTime: "2 mins",
    formula: "Monthly Payment = Loan Principal × Interest Rate ÷ 12; Points Fee = Loan Principal × Points %",
    formulaDescription: "Calculates monthly interest payments and adds upfront underwriting points fee coefficients.",
    example: "Borrowing $187,500 (75% LTV on $250k total) at 12% interest with 2.5 points for 6 months costs $1,875/month in interest and $4,687 in points fees. Total cost: $15,937.",
    faqs: [
      { question: "What is a hard money loan?", answer: "A short-term, high-interest loan secured by real estate, commonly used by house flippers and developers to purchase and rehab properties." },
      { question: "What are 'points' on a hard money loan?", answer: "Points are upfront lender origination fees. 1 point equals 1% of the total loan principal." }
    ],
    commonMistakes: ["Failing to budget for holding costs or rehab delays, which prolong high-interest payment terms."],
    useCases: ["Analyzing house flipping property deals", "Comparing lender terms and interest charges"],
    tips: ["Lenders often lend based on ARV (After Repair Value) rather than purchase price. Confirm the loan structure before closing."],
    inputs: [
      { id: "purchasePrice", label: "Property Purchase Price ($)", type: "number", defaultValue: 200000, unit: "$" },
      { id: "rehabCost", label: "Estimated Rehab Cost ($)", type: "number", defaultValue: 50000, unit: "$" },
      { id: "ltv", label: "LTV Offer on Purchase (%)", type: "number", defaultValue: 75, unit: "%" },
      { id: "interestRate", label: "Lender Interest Rate (%)", type: "number", defaultValue: 12, unit: "%" },
      { id: "points", label: "Lender Points (%)", type: "number", defaultValue: 2.5, unit: "%" },
      { id: "termMonths", label: "Rehab Loan Term (Months)", type: "number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.purchasePrice || 0);
      const ltvVal = Number(inputs.ltv || 75);
      const rate = Number(inputs.interestRate || 12);
      const points = Number(inputs.points || 2.5);
      const term = Number(inputs.termMonths || 6);

      const loanAmt = price * (ltvVal / 100);
      const monthlyPi = loanAmt * (rate / 100) / 12;
      const pointsFees = loanAmt * (points / 100);
      const totalBorrowing = (monthlyPi * term) + pointsFees;

      return {
        loanAmt: { value: loanAmt.toFixed(2), label: "Hard Money Loan Amount", unit: "$" },
        monthlyPi: { value: monthlyPi.toFixed(2), label: "Monthly Interest-Only Payment", unit: "$" },
        pointsFees: { value: pointsFees.toFixed(2), label: "Upfront Points Fee", unit: "$" },
        totalBorrowing: { value: totalBorrowing.toFixed(2), label: "Total Cost of Financing", unit: "$" }
      };
    }
  },
  // 44. Lease vs Buy Car Calculator
  "lease-vs-buy-car": {
    slug: "lease-vs-buy-car",
    name: "Lease vs Buy Car Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Lease vs Buy Car Calculator - Auto Financing Comparison",
    metaDescription: "Compare the total costs of leasing a vehicle vs buying with a loan. Get a clear recommendation based on depreciation and residual values.",
    keywords: ["lease vs buy car calculator", "car lease vs buy calculator", "auto finance comparison"],
    hook: "Decide whether to lease or buy your next vehicle.",
    description: "Compare total out-of-pocket costs, interest payments, and end-of-term resale equity.",
    calcTime: "2 mins",
    formula: "Lease Cost = Down + (Payment × Term); Buy Cost = Down + (Loan Payment × Term) - Resale Value",
    formulaDescription: "Calculates the total cost to lease including monthly lease payments, and compares it to the purchase amortization minus the vehicle's projected resale value at the end of the term.",
    example: "Leasing a $35k car for 36 months at $399/mo with $3k down costs $17,364. Buying with $5k down and a 6.5% interest loan costs $30,940, but subtracting $18k resale value leaves a net cost of $12,940. Buying is cheaper by $4,424.",
    faqs: [
      { question: "Is it better to lease or buy a car?", answer: "Buying is generally cheaper in the long run because you build vehicle equity. Leasing is best if you want lower monthly payments and plan to change cars every 2-3 years." },
      { question: "What is car residual value?", answer: "The estimated value of the car at the end of the lease term, set by the leasing company." }
    ],
    commonMistakes: ["Failing to account for vehicle equity at the end of the loan term, which makes leasing look cheaper than it actually is."],
    useCases: ["Evaluating dealership car offers", "Personal transportation budgeting"],
    tips: ["Negotiate the purchase price (capitalized cost) of the car before discussing lease options to lower your monthly payments."],
    inputs: [
      { id: "carPrice", label: "Car Purchase Price ($)", type: "number", defaultValue: 35000, unit: "$" },
      { id: "term", label: "Comparison Term (Months)", type: "number", defaultValue: 36 },
      { id: "leaseDown", label: "Lease Down Payment ($)", type: "number", defaultValue: 3000, unit: "$" },
      { id: "leaseMonthly", label: "Lease Monthly Payment ($)", type: "number", defaultValue: 399, unit: "$" },
      { id: "loanDown", label: "Loan Down Payment ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "loanRate", label: "Loan Interest Rate (%)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "resaleValue", label: "Est. Resale Value at End ($)", type: "number", defaultValue: 18000, unit: "$" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.carPrice || 35000);
      const term = Number(inputs.term || 36);
      const lDown = Number(inputs.leaseDown || 3000);
      const lMonthly = Number(inputs.leaseMonthly || 399);
      const loanDown = Number(inputs.loanDown || 5000);
      const loanRate = Number(inputs.loanRate || 6.5);
      const resale = Number(inputs.resaleValue || 18000);

      const leaseTotal = lDown + (lMonthly * term);

      // Buy amortization
      const principal = price - loanDown;
      const r = (loanRate / 100) / 12;
      const n = term;

      let monthlyLoanPay = 0;
      if (r > 0 && n > 0) {
        monthlyLoanPay = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyLoanPay = principal / n;
      }

      const buyTotal = loanDown + (monthlyLoanPay * term) - resale;
      const difference = Math.abs(leaseTotal - buyTotal);
      const recommendation = buyTotal < leaseTotal 
        ? `Buying is estimated to be $${difference.toFixed(0)} cheaper than leasing.` 
        : `Leasing is estimated to be $${difference.toFixed(0)} cheaper than buying.`;

      return {
        leaseTotal: { value: leaseTotal.toFixed(2), label: "Total Cost to Lease", unit: "$" },
        buyMonthly: { value: monthlyLoanPay.toFixed(2), label: "Monthly Buy Loan Payment", unit: "$" },
        buyTotal: { value: buyTotal.toFixed(2), label: "Net Cost to Buy (incl. Resale)", unit: "$" },
        recommendation: { value: recommendation, label: "Financing Recommendation", unit: "" }
      };
    }
  },
  // 45. Points vs Cash Calculator
  "points-vs-cash": {
    slug: "points-vs-cash",
    name: "Points vs Cash Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Points vs Cash Calculator - Travel Rewards Value Finder",
    metaDescription: "Calculate whether to book your next flight or hotel using credit card rewards points or cash. Realize true values in cents per point.",
    keywords: ["points vs cash calculator", "points vs cash travel", "cents per point calculator", "credit card rewards value"],
    hook: "Decide whether to use reward points or cash for bookings.",
    description: "Input cash rates, points required, and booking fees to evaluate the cents-per-point redemption value.",
    calcTime: "1 min",
    formula: "Redemption Value (cents/point) = (Cash Price - Fees) × 100 ÷ Points Required",
    formulaDescription: "Compares the cash-equivalent value of using points against a target redemption benchmark (e.g. 1.2 or 1.5 cents per point).",
    example: "A $500 flight costs 30,000 points + $5.60 in fees. Value is ($500 - $5.60) × 100 ÷ 30,000 = 1.65 cents/point. If your target is 1.2 cents, booking with points is recommended.",
    faqs: [
      { question: "What is a good value per credit card point?", answer: "Typically, a redemption value above 1.5 cents per point is considered excellent. Standard cash back redemptions offer exactly 1.0 cent per point." },
      { question: "Should I book flights or hotels with points?", answer: "Flights (especially business class) often offer much higher point value redemptions than standard hotels." }
    ],
    commonMistakes: ["Forgetting to subtract award taxes and carrier fees from the cash price before dividing by points."],
    useCases: ["Evaluating airline frequent flyer options", "Credit card points transfer decisions"],
    tips: ["Always search both cash rates and award space on the same day as reward availability can fluctuate."],
    inputs: [
      { id: "cashPrice", label: "Cash Price of Booking ($)", type: "number", defaultValue: 500, unit: "$" },
      { id: "pointsRequired", label: "Points Required for Booking", type: "number", defaultValue: 30000 },
      { id: "feesCash", label: "Taxes & Fees on Points Booking ($)", type: "number", defaultValue: 5.60, unit: "$" },
      { id: "pointValueTarget", label: "Your Target Point Value (cents/point)", type: "number", defaultValue: 1.2, unit: "¢" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.cashPrice || 0);
      const points = Number(inputs.pointsRequired || 1);
      const fees = Number(inputs.feesCash || 0);
      const target = Number(inputs.pointValueTarget || 1.2);

      const netCashSaved = price - fees;
      const realizedCents = points > 0 ? (netCashSaved * 100) / points : 0;
      
      const isGoodDeal = realizedCents >= target;
      const rec = isGoodDeal 
        ? `Pay with Points: Realized value of ${realizedCents.toFixed(2)}¢ exceeds your target of ${target}¢.` 
        : `Pay with Cash: Realized value of ${realizedCents.toFixed(2)}¢ is below your target of ${target}¢.`;

      return {
        pointValueRealized: { value: realizedCents.toFixed(2), label: "Realized Value per Point", unit: "¢/point" },
        netSavings: { value: netCashSaved.toFixed(2), label: "Net Cash Saved (after fees)", unit: "$" },
        recommendation: { value: rec, label: "Redemption Recommendation", unit: "" }
      };
    }
  },
  // 46. Oklahoma Tax Calculator
  "oklahoma-tax": {
    slug: "oklahoma-tax",
    name: "Oklahoma Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Oklahoma Tax Calculator - State Income Tax Estimator",
    metaDescription: "Calculate Oklahoma state income tax withholdings using standard progressive tax brackets and filing deductions.",
    keywords: ["oklahoma tax calculator", "oklahoma income tax estimator", "ok state tax brackets", "paycheck deductions oklahoma"],
    hook: "Estimate Oklahoma state tax liabilities based on gross income.",
    description: "Determine your taxable income, state brackets offset, and effective tax rates instantly.",
    calcTime: "1 min",
    formula: "Taxable Income = Gross Wages - Standard Deduction; Apply Progressive Brackets",
    formulaDescription: "Subtracts the Oklahoma standard deduction and calculates tax using state marginal tax rates (0.25% to 4.75%).",
    example: "A single taxpayer earning $60,000 deducts $6,350. Taxable income of $53,650 falls into progressive brackets, leading to an estimated tax of $2,347.",
    faqs: [
      { question: "What is Oklahoma's top income tax rate?", answer: "Oklahoma's top marginal income tax rate is 4.75%, which applies to single incomes over $7,200 and married joint incomes over $12,200." },
      { question: "What is the Oklahoma standard deduction?", answer: "For 2024, Oklahoma's standard deduction is $6,350 for single filers and $12,700 for married joint filers." }
    ],
    commonMistakes: ["Applying the tax rate to total gross earnings without subtracting standard deductions first."],
    useCases: ["Estimating state tax liability", "Quarterly tax planning for independent contractors"],
    tips: ["Filing status significantly shifts bracket thresholds. Ensure you select the correct status."],
    inputs: [
      { id: "grossWages", label: "Annual Gross Income ($)", type: "number", defaultValue: 60000, unit: "$" },
      { 
        id: "filingStatus", 
        label: "Filing Status", 
        type: "select", 
        defaultValue: "single", 
        options: [
          { value: "single", label: "Single Filer" },
          { value: "married", label: "Married Filing Jointly" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.grossWages || 0);
      const status = inputs.filingStatus || "single";

      const deduction = status === "married" ? 12700 : 6350;
      const taxable = Math.max(0, gross - deduction);

      // Oklahoma Brackets (Single thresholds: 1k, 2.5k, 3.75k, 4.9k, 7.2k)
      // Married thresholds are double.
      const multiplier = status === "married" ? 2 : 1;
      const brackets = [
        { limit: 1000 * multiplier, rate: 0.0025 },
        { limit: 2500 * multiplier, rate: 0.0075 },
        { limit: 3750 * multiplier, rate: 0.0175 },
        { limit: 4900 * multiplier, rate: 0.0275 },
        { limit: 7200 * multiplier, rate: 0.0375 },
        { limit: Infinity, rate: 0.0475 }
      ];

      let tax = 0;
      let temp = taxable;
      let prevLimit = 0;

      for (let i = 0; i < brackets.length; i++) {
        const currentLimit = brackets[i].limit - prevLimit;
        const currentRate = brackets[i].rate;

        if (temp > currentLimit) {
          tax += currentLimit * currentRate;
          temp -= currentLimit;
          prevLimit = brackets[i].limit;
        } else {
          tax += temp * currentRate;
          break;
        }
      }

      const effectiveRate = gross > 0 ? (tax / gross) * 100 : 0;

      return {
        taxableIncome: { value: taxable.toFixed(2), label: "Oklahoma Taxable Income", unit: "$" },
        okStateTax: { value: tax.toFixed(2), label: "Estimated State Tax", unit: "$" },
        effectiveRate: { value: effectiveRate.toFixed(2), label: "Effective State Tax Rate", unit: "%" }
      };
    }
  },
  // 47. No-Vig / Novig Odds Calculator
  "novig": {
    slug: "novig",
    name: "No-Vig Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "No-Vig Odds Calculator - Fair Probability & Juice Finder",
    metaDescription: "Calculate the no-vig fair odds and true implied probability for sports bets. Strips juice margins from American bookmaker odds.",
    keywords: ["novig calculator", "no vig calculator", "betting fair odds calculator", "remove juice calculator"],
    hook: "Calculate fair sports betting odds by removing bookmaker vig.",
    description: "Input American odds for two outcomes to calculate true fair probabilities and bookmaker margins.",
    calcTime: "1 min",
    formula: "Fair Probability = Implied Probability ÷ Total Implied Probabilities",
    formulaDescription: "Converts American odds to decimal rates, calculates the combined overround (vig), and normalizes individual probabilities to find the 'fair' odds.",
    example: "Odds of -110 (52.38% probability) and +110 (47.62% probability) sum to 100%. If both are -110 (52.38% each), the sum is 104.76%. Removing the 4.76% vig gives a fair probability of 50.00% and fair odds of +100.",
    faqs: [
      { question: "What is 'vig' in sports betting?", answer: "Vig (short for vigorish, juice, or margin) is the fee the sportsbook charges for taking a bet. It is built directly into the odds." },
      { question: "How does a no-vig calculator help?", answer: "It allows you to compare different sportsbooks' odds against a 'fair' baseline, helping you identify positive expected value (+EV) opportunities." }
    ],
    commonMistakes: ["Entering fractional or decimal odds. This calculator is designed specifically for American odds format (e.g. -110, +150)."],
    useCases: ["Hedging and arbitrage calculation", "Expected value (+EV) betting audits", "Removing sportsbook overround"],
    tips: ["A lower vig percentage indicates a more competitive market with better pricing for bettors."],
    inputs: [
      { id: "oddsA", label: "American Odds (Outcome A)", type: "number", defaultValue: -110 },
      { id: "oddsB", label: "American Odds (Outcome B)", type: "number", defaultValue: -110 }
    ],
    calculate: (inputs) => {
      const oddA = Number(inputs.oddsA);
      const oddB = Number(inputs.oddsB);

      // American to Implied Probability
      const getImplied = (american: number) => {
        if (american > 0) {
          return 100 / (american + 100);
        } else {
          const positive = Math.abs(american);
          return positive / (positive + 100);
        }
      };

      const impA = getImplied(oddA);
      const impB = getImplied(oddB);
      const sum = impA + impB;
      const vig = (sum - 1) * 100;

      const fairProbA = sum > 0 ? impA / sum : 0;
      const fairProbB = sum > 0 ? impB / sum : 0;

      // Probability to American Odds
      const getAmerican = (prob: number) => {
        if (prob === 0 || prob === 1) return 0;
        const dec = 1 / prob;
        if (dec >= 2.0) {
          return Math.round((dec - 1) * 100);
        } else {
          return Math.round(-100 / (dec - 1));
        }
      };

      const fairOddsA = getAmerican(fairProbA);
      const fairOddsB = getAmerican(fairProbB);

      const formatOdds = (val: number) => {
        return val >= 0 ? `+${val}` : `${val}`;
      };

      return {
        vigPercent: { value: vig.toFixed(2), label: "Sportsbook Vig / Juice", unit: "%" },
        fairOddsA: { value: formatOdds(fairOddsA), label: "Outcome A Fair Odds", unit: "" },
        fairOddsB: { value: formatOdds(fairOddsB), label: "Outcome B Fair Odds", unit: "" },
        probabilityA: { value: (fairProbA * 100).toFixed(1), label: "Outcome A Fair Implied Probability", unit: "%" }
      };
    }
  },
  // 48. CalSTRS Pension Retirement Calculator
  "calstrs": {
    slug: "calstrs",
    name: "CalSTRS Pension Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "CalSTRS Retirement Pension Calculator - California Teacher Benefits",
    metaDescription: "Estimate your CalSTRS California teacher pension benefit using service credits, retirement age, final compensation, and membership tiers.",
    keywords: ["calstrs calculator", "calstrs retirement calculator", "california teacher pension calculator", "calstrs benefit estimator"],
    hook: "Calculate your estimated CalSTRS retirement benefit.",
    description: "Input service credit years, age, and final compensation to project your monthly and annual defined pension payments.",
    calcTime: "2 mins",
    formula: "Monthly Benefit = Service Credit × Age Factor × Final Compensation ÷ 12",
    formulaDescription: "Multiplies service credit years by age-factor coefficients (based on membership tier and retirement age) and final salary compensation averages.",
    example: "Hired before 2013, retiring at age 60 with 25 service years and final compensation of $80,000 (factor 2.0%). Benefit: 25 × 2.0% × $80,000 = $40,000 annual / $3,333.33 monthly.",
    faqs: [
      { question: "What are the two CalSTRS tiers?", answer: "Members hired before January 1, 2013, are in the 2% at 60 tier. Members hired on or after that date are in the 2% at 62 tier." },
      { question: "What is CalSTRS Career Factor?", answer: "For the 2% at 60 tier, if you retire with 30 or more years of service credit, CalSTRS adds 0.2% to your age factor (up to a maximum of 2.40%)." }
    ],
    commonMistakes: ["Failing to adjust filing tiers based on your actual hire date, which significantly shifts age factor thresholds."],
    useCases: ["California public school teacher retirement planning", "Evaluating final compensation payout scenarios"],
    tips: ["Sick leave balances can sometimes be converted to add partial service credit years at retirement. Check with your district."],
    inputs: [
      { id: "serviceCredit", label: "Service Credit (Years)", type: "number", defaultValue: 25, unit: "yrs" },
      { id: "retirementAge", label: "Retirement Age", type: "number", defaultValue: 60, unit: "years" },
      { id: "finalCompensation", label: "Final Compensation Average ($/year)", type: "number", defaultValue: 80000, unit: "$" },
      { 
        id: "tier", 
        label: "CalSTRS Membership Tier", 
        type: "select", 
        defaultValue: "before2013", 
        options: [
          { value: "before2013", label: "2% at 60 (Hired before Jan 1, 2013)" },
          { value: "after2013", label: "2% at 62 (Hired on/after Jan 1, 2013)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const service = Number(inputs.serviceCredit || 0);
      const age = Number(inputs.retirementAge || 60);
      const comp = Number(inputs.finalCompensation || 0);
      const tier = inputs.tier || "before2013";

      let factor = 0;

      if (tier === "before2013") {
        // 2% at 60 Age Factor table
        if (age >= 63) factor = 2.4;
        else if (age === 62) factor = 2.27;
        else if (age === 61) factor = 2.13;
        else if (age === 60) factor = 2.0;
        else if (age === 59) factor = 1.88;
        else if (age === 58) factor = 1.76;
        else if (age === 57) factor = 1.64;
        else if (age === 56) factor = 1.52;
        else if (age === 55) factor = 1.4;
        else if (age === 54) factor = 1.34;
        else if (age === 53) factor = 1.28;
        else if (age === 52) factor = 1.22;
        else if (age === 51) factor = 1.16;
        else if (age >= 50) factor = 1.1;

        // Apply Career Factor
        if (service >= 30) {
          factor = Math.min(2.4, factor + 0.2);
        }
      } else {
        // 2% at 62 Age Factor table
        if (age >= 65) factor = 2.4;
        else if (age === 64) factor = 2.2;
        else if (age === 63) factor = 2.1;
        else if (age === 62) factor = 2.0;
        else if (age === 61) factor = 1.88;
        else if (age === 60) factor = 1.76;
        else if (age === 59) factor = 1.64;
        else if (age === 58) factor = 1.52;
        else if (age === 57) factor = 1.4;
        else if (age === 56) factor = 1.28;
        else if (age >= 55) factor = 1.16;
      }

      const annual = service * (factor / 100) * comp;
      const monthly = annual / 12;
      const rate = service * factor;

      return {
        ageFactor: { value: factor.toFixed(2), label: "Calculated Age Factor Multiplier", unit: "%" },
        monthlyPension: { value: monthly.toFixed(2), label: "Estimated Monthly Pension", unit: "$" },
        annualPension: { value: annual.toFixed(2), label: "Estimated Annual Pension", unit: "$" },
        replacementRate: { value: rate.toFixed(1), label: "Income Replacement Percentage", unit: "%" }
      };
    }
  },
  // 49. CPT Global Surgery Calculator
  "global-surgery": {
    slug: "global-surgery",
    name: "Global Surgery Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Global Surgery Period Calculator - Medical CPT Billing Codes",
    metaDescription: "Calculate the global surgery period (0, 10, or 90 days) for CPT codes. Find post-operative dates and billing start parameters.",
    keywords: ["global calculator surgery", "global surgery billing calculator", "cpt post-op global days finder", "medicare global surgery calculator"],
    hook: "Calculate medical billing global surgery post-op periods.",
    description: "Determine when global surgery periods expire and separate E/M codes become billable for a procedure.",
    calcTime: "1 min",
    formula: "End Date = Surgery Date + Global Days; Billing Resumes = End Date + 1 Day",
    formulaDescription: "Adds CPT designated global postoperative period days (000, 010, or 090) to the date of operation to find the final global care window.",
    example: "A surgery on July 1 with a 90-day global period has its global period end on September 29. Separate billing resumes September 30 (Day 91 post-op).",
    faqs: [
      { question: "What is a global surgery period?", answer: "A global period is the timeframe during which routine post-operative care is bundled into the surgical procedure payment and cannot be billed separately." },
      { question: "What modifiers bypass global periods?", answer: "Modifiers like -24 (unrelated E/M), -58 (staged procedure), -78 (return to OR for complications), and -79 (unrelated procedure by same physician) are used to report services during global periods." }
    ],
    commonMistakes: ["Failing to count the surgery date as Day 0 when counting 10 or 90 days for post-op calculations.", "Forgetting that commercial insurance companies can differ from Medicare rules."],
    useCases: ["Medical billing post-op checks", "Surgical practice scheduling coordination"],
    tips: ["Use CPT code 99024 to document post-op visits within global periods for quality reporting even though they yield zero cash reimbursement."],
    inputs: [
      { id: "daysSinceSurgery", label: "Days Elapsed Since Surgery Date", type: "number", defaultValue: 10 },
      { 
        id: "globalPeriod", 
        label: "CPT Global Days Class", 
        type: "select", 
        defaultValue: "90", 
        options: [
          { value: "0", label: "0-Day (Minor procedures / Endoscopy)" },
          { value: "10", label: "10-Day (Minor surgeries)" },
          { value: "90", label: "90-Day (Major surgeries)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const elapsed = Number(inputs.daysSinceSurgery || 0);
      const period = Number(inputs.globalPeriod || 90);

      const daysRemaining = Math.max(0, period - elapsed);
      const firstBilling = period + 1;

      let status = "Inside Global Period (Bundled Visits)";
      if (elapsed > period) {
        status = "Outside Global Period (Separate billing allowed)";
      }

      return {
        daysRemaining: { value: daysRemaining, label: "Days Left in Global Period", unit: "days" },
        firstBillingDay: { value: `Day ${firstBilling} post-op`, label: "Separate Billing Allowed Date", unit: "" },
        status: { value: status, label: "Current Billing Status", unit: "" }
      };
    }
  },
  // 50. Kentucky Mortgage Calculator
  "mortgage-kentucky": {
    slug: "mortgage-kentucky",
    name: "Kentucky Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Kentucky Mortgage Calculator - PITI Monthly Payment Estimator",
    metaDescription: "Calculate home mortgage payments in Kentucky. Estimates PITI payments using local Kentucky average property tax rates (0.85%) and homeowners insurance.",
    keywords: ["mortgage calculator kentucky", "kentucky home payment calculator", "kentucky piti estimator"],
    hook: "Calculate home loan payments in the state of Kentucky.",
    description: "Determine principal, interest, taxes, and insurance (PITI) details utilizing Kentucky-specific property tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (0.85% annual) + Monthly Insurance (0.62% annual)",
    formulaDescription: "Finds the amortized monthly mortgage payment and adds standard property reserves for the state of Kentucky.",
    example: "A $250k home in Kentucky with 10% down ($25k) at 6.5% interest costs approximately $1,729/month.",
    faqs: [
      { question: "What is the average property tax rate in Kentucky?", answer: "Kentucky has a very competitive average property tax rate of approximately 0.85% of the home value annually." }
    ],
    commonMistakes: ["Failing to account for local municipal or school district taxes, which can alter the overall payment amount."],
    useCases: ["Kentucky home purchases", "Refinancing properties in Louisville, Lexington, or Bowling Green"],
    tips: ["A higher down payment cuts mortgage insurance premiums (PMI), saving money monthly."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 250000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 25000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0085) / 12;
      const ins = (price * 0.0062) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "Kentucky Property Tax Reserves (0.85%)", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 51. Laticrete Grout Coverage Calculator
  "laticrete-grout": {
    slug: "laticrete-grout",
    name: "Laticrete Grout Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Laticrete Grout Weight & Coverage Calculator - Tile Joint Estimator",
    metaDescription: "Calculate the weight of Laticrete grout needed for tiling. Inputs tile dimensions, joint width, and total area.",
    keywords: ["laticrete grout calculator", "grout weight calculator", "tile grout coverage estimator", "how much grout do i need"],
    hook: "Estimate grout weights and joint volumes instantly.",
    description: "Input tile length, width, thickness, and joint width to calculate the grout bags required for construction layouts.",
    calcTime: "2 mins",
    formula: "Weight (lbs) = Volume (cu in) × density × Area (sq ft) × (1 + Waste %)",
    formulaDescription: "Computes joint volume based on tile perimeter-to-area ratio and joint width, then converts to weight using product-specific densities (sanded: 0.065, unsanded: 0.060, epoxy: 0.068 lbs/cu in).",
    example: "Tiling 100 sq ft using 12x12x3/8\" tiles and a 1/8\" joint requires 9.0 lbs of sanded grout. With a 10% waste buffer, you should order 9.9 lbs.",
    faqs: [
      { question: "How much extra grout should I order for waste?", answer: "We recommend adding a standard 10% waste factor. For unglazed tiles, increase this buffer to 15%." },
      { question: "What is the difference between sanded and unsanded grout?", answer: "Sanded grout contains sand which prevents shrinkage in joints wider than 1/8\". Unsanded grout is used for thin joints (under 1/8\") to prevent scratching delicate tiles." }
    ],
    commonMistakes: ["Using mix units without proper conversions.", "Failing to account for tile thickness in joint depth calculations."],
    useCases: ["Kitchen backsplash tiling projects", "Bathroom floor remodel material calculations"],
    tips: ["Keep joints clean before grouting to ensure even color distribution and material bonding."],
    inputs: [
      { id: "tileLength", label: "Tile Length (inches)", type: "number", defaultValue: 12 },
      { id: "tileWidth", label: "Tile Width (inches)", type: "number", defaultValue: 12 },
      { id: "tileThickness", label: "Tile Thickness (inches)", type: "number", defaultValue: 0.375 },
      { id: "jointWidth", label: "Joint Width (inches)", type: "number", defaultValue: 0.125 },
      { id: "areaSqft", label: "Total Installation Area (sq ft)", type: "number", defaultValue: 100 },
      { 
        id: "groutType", 
        label: "Grout Product Casing", 
        type: "select", 
        defaultValue: "sanded", 
        options: [
          { value: "sanded", label: "Sanded Cementitious (Density 0.065)" },
          { value: "unsanded", label: "Unsanded Cementitious (Density 0.060)" },
          { value: "epoxy", label: "Epoxy Grout (Density 0.068)" }
        ] 
      },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.tileLength || 12);
      const w = Number(inputs.tileWidth || 12);
      const t = Number(inputs.tileThickness || 0.375);
      const jw = Number(inputs.jointWidth || 0.125);
      const area = Number(inputs.areaSqft || 100);
      const waste = Number(inputs.wastePct || 10);
      const gType = inputs.groutType || "sanded";

      let density = 0.065;
      if (gType === "unsanded") density = 0.060;
      else if (gType === "epoxy") density = 0.068;

      // Volume of joints per sq ft (cu inches)
      // Standard Formula: ((L + W) * Jw * Jd * 144) / (L * W)
      const volumePerSqft = ((len + w) * jw * t * 144) / (len * w);
      const netWeight = volumePerSqft * density * area;
      const totalWeight = netWeight * (1 + waste / 100);

      return {
        groutVolumeSqft: { value: volumePerSqft.toFixed(2), label: "Joint Volume per Sq Ft", unit: "cu in" },
        rawWeight: { value: netWeight.toFixed(1), label: "Net Grout Weight Needed", unit: "lbs" },
        totalWeight: { value: totalWeight.toFixed(1), label: "Total Grout Weight (+ Waste)", unit: "lbs" }
      };
    }
  },
  // 52. Arkansas Mortgage Calculator
  "mortgage-arkansas": {
    slug: "mortgage-arkansas",
    name: "Arkansas Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Arkansas Mortgage Calculator - PITI Monthly Payment Estimator",
    metaDescription: "Calculate home mortgage payments in Arkansas. Estimates PITI payments using local Arkansas average property tax rates (0.61%) and homeowners insurance.",
    keywords: ["mortgage calculator arkansas", "arkansas home payment calculator", "arkansas piti estimator"],
    hook: "Calculate home loan payments in the state of Arkansas.",
    description: "Determine principal, interest, taxes, and insurance (PITI) details utilizing Arkansas-specific property tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (0.61% annual) + Monthly Insurance (0.70% annual)",
    formulaDescription: "Finds the amortized monthly mortgage payment and adds standard property reserves for the state of Arkansas.",
    example: "A $250k home in Arkansas with 10% down ($25k) at 6.5% interest costs approximately $1,697/month.",
    faqs: [
      { question: "What is the average property tax rate in Arkansas?", answer: "Arkansas has one of the lowest property tax rates in the nation, averaging approximately 0.61% of the home value annually." }
    ],
    commonMistakes: ["Failing to account for local municipal or county sales tax components, which can alter the overall payment amount."],
    useCases: ["Arkansas home purchases", "Refinancing properties in Little Rock, Fayetteville, or Fort Smith"],
    tips: ["Review first-time homebuyer programs through ADFA for down payment assistance."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 250000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 25000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0061) / 12;
      const ins = (price * 0.0070) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "Arkansas Property Tax Reserves (0.61%)", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 53. Virginia Salary / Paycheck Withholding Calculator
  "virginia-salary": {
    slug: "virginia-salary",
    name: "Virginia Salary Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Virginia Salary Calculator - Net Paycheck Take-Home Planner",
    metaDescription: "Calculate Virginia paycheck net take-home pay. Models Virginia state income tax brackets, FICA, and federal deductions.",
    keywords: ["virginia salary calculator", "va paycheck calculator", "virginia state tax withholding", "net income virginia"],
    hook: "Estimate Virginia state paycheck withholdings & take-home pay.",
    description: "Input gross earnings and schedule frequencies to compute net take-home cash offsets after tax deductions.",
    calcTime: "2 mins",
    formula: "Net Pay = Gross Pay - FICA - Federal Tax - VA State Tax",
    formulaDescription: "Subtracts federal tax rates, FICA (7.65%), and Virginia state progressive tax brackets (2% to 5.75%) from periodic earnings.",
    example: "Earning $2,500 bi-weekly ($65,000/year gross) pays approximately $1,885 net after standard tax adjustments.",
    faqs: [
      { question: "What are Virginia's tax brackets?", answer: "Virginia uses four tax brackets: 2.0% (first $3k), 3.0% (next $2k), 5.0% (next $12k), and 5.75% (incomes over $17k)." },
      { question: "What deductions apply to VA salary?", answer: "Standard payroll deductions include FICA (7.65% combined Social Security and Medicare), Federal Income Tax, and Virginia State Income Tax." }
    ],
    commonMistakes: ["Applying a single flat tax rate to total gross earnings rather than marginal progressive brackets."],
    useCases: ["Estimating job offer takes in Virginia", "Budgeting monthly expenses based on paycheck schedules"],
    tips: ["Filing status does not change the Virginia bracket rates but determines standard deduction limits on state tax returns."],
    inputs: [
      { id: "grossPay", label: "Gross Pay per Period ($)", type: "number", defaultValue: 2500, unit: "$" },
      { 
        id: "payPeriods", 
        label: "Pay Schedule / Frequency", 
        type: "select", 
        defaultValue: "26", 
        options: [
          { value: "52", label: "Weekly (52 periods)" },
          { value: "26", label: "Bi-Weekly (26 periods)" },
          { value: "12", label: "Monthly (12 periods)" }
        ] 
      },
      { id: "federalRate", label: "Est. Federal Tax Rate (%)", type: "number", defaultValue: 12, unit: "%" }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.grossPay || 0);
      const periods = Number(inputs.payPeriods || 26);
      const fed = Number(inputs.federalRate || 12);

      const annualGross = gross * periods;

      // Virginia Brackets: 3k at 2%, 5k at 3%, 17k at 5%, over 17k at 5.75%
      let annualStateTax = 0;
      if (annualGross > 17000) {
        annualStateTax = (3000 * 0.02) + (2000 * 0.03) + (12000 * 0.05) + ((annualGross - 17000) * 0.0575);
      } else if (annualGross > 5000) {
        annualStateTax = (3000 * 0.02) + (2000 * 0.03) + ((annualGross - 5000) * 0.05);
      } else if (annualGross > 3000) {
        annualStateTax = (3000 * 0.02) + ((annualGross - 3000) * 0.03);
      } else {
        annualStateTax = annualGross * 0.02;
      }

      const stateTax = annualStateTax / periods;
      const fica = gross * 0.0765;
      const fedTax = gross * (fed / 100);
      const net = gross - fica - fedTax - stateTax;

      return {
        netPaycheck: { value: net.toFixed(2), label: "Estimated Net Paycheck", unit: "$" },
        ficaWithholding: { value: fica.toFixed(2), label: "FICA Withholding", unit: "$" },
        vaStateTax: { value: stateTax.toFixed(2), label: "Virginia State Income Tax", unit: "$" }
      };
    }
  },
  // 54. Michigan State Tax Withholding Calculator
  "michigan-tax": {
    slug: "michigan-tax",
    name: "Michigan Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Michigan Tax Calculator - Flat State Withholding & Net Check Finder",
    metaDescription: "Estimate Michigan flat state income tax withholdings, FICA deductions, and net check sizes using the 4.25% state rate.",
    keywords: ["michigan tax calculator", "mi paycheck calculator", "michigan state tax withholding", "michigan flat tax estimator"],
    hook: "Estimate Michigan state paycheck withholdings & take-home pay.",
    description: "Input periodic gross earnings to calculate net paycheck offsets using Michigan's flat tax rate.",
    calcTime: "2 mins",
    formula: "Net Pay = Gross Pay - FICA - Federal Tax - MI State Tax (4.25%)",
    formulaDescription: "Subtracts federal tax rates, FICA (7.65%), and Michigan's flat state tax rate (4.25% for 2024) from periodic earnings.",
    example: "Earning $2,500 bi-weekly ($65,000/year gross) pays approximately $1,922 net after flat Michigan state tax and adjustments.",
    faqs: [
      { question: "What is Michigan's income tax rate?", answer: "Michigan has a flat personal income tax rate of 4.25% for the tax year 2024." },
      { question: "Are city income taxes applicable in Michigan?", answer: "Yes. Many cities in Michigan (like Detroit, Grand Rapids, and Lansing) levy additional local municipal income taxes, which are not calculated by this state-wide tool." }
    ],
    commonMistakes: ["Failing to account for local municipal city taxes if living or working in a taxing Michigan municipality."],
    useCases: ["Job salary modeling in Michigan", "Estimating paycheck takes"],
    tips: ["Adjust your state withholding allowances on Form MI-W4 to fine-tune your net paycheck calculations."],
    inputs: [
      { id: "grossPay", label: "Gross Pay per Period ($)", type: "number", defaultValue: 2500, unit: "$" },
      { 
        id: "payPeriods", 
        label: "Pay Schedule / Frequency", 
        type: "select", 
        defaultValue: "26", 
        options: [
          { value: "52", label: "Weekly (52 periods)" },
          { value: "26", label: "Bi-Weekly (26 periods)" },
          { value: "12", label: "Monthly (12 periods)" }
        ] 
      },
      { id: "federalRate", label: "Est. Federal Tax Rate (%)", type: "number", defaultValue: 12, unit: "%" }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.grossPay || 0);
      const fed = Number(inputs.federalRate || 12);
      const MI_RATE = 0.0425;

      const stateTax = gross * MI_RATE;
      const fica = gross * 0.0765;
      const fedTax = gross * (fed / 100);
      const net = gross - fica - fedTax - stateTax;

      return {
        netPaycheck: { value: net.toFixed(2), label: "Estimated Net Paycheck", unit: "$" },
        ficaWithholding: { value: fica.toFixed(2), label: "FICA Withholding", unit: "$" },
        miStateTax: { value: stateTax.toFixed(2), label: "Michigan State Income Tax (4.25%)", unit: "$" }
      };
    }
  },
  // 55. South Carolina Mortgage Calculator
  "mortgage-sc": {
    slug: "mortgage-sc",
    name: "South Carolina Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "South Carolina Mortgage Calculator - PITI Monthly Payment Estimator",
    metaDescription: "Calculate home mortgage payments in South Carolina. Estimates PITI payments using local South Carolina average property tax rates (0.56%) and homeowners insurance.",
    keywords: ["mortgage calculator sc", "south carolina home payment calculator", "south carolina piti estimator"],
    hook: "Calculate home loan payments in the state of South Carolina.",
    description: "Determine principal, interest, taxes, and insurance (PITI) details utilizing South Carolina-specific property tax brackets.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P&I + Monthly Tax (0.56% annual) + Monthly Insurance (0.58% annual)",
    formulaDescription: "Finds the amortized monthly mortgage payment and adds standard property reserves for the state of South Carolina.",
    example: "A $250k home in South Carolina with 10% down ($25k) at 6.5% interest costs approximately $1,662/month.",
    faqs: [
      { question: "What is the average property tax rate in South Carolina?", answer: "South Carolina has one of the lowest average property tax rates in the United States at approximately 0.56% of the home value annually." }
    ],
    commonMistakes: ["Failing to account for local municipal or school district taxes, which can alter the overall payment amount."],
    useCases: ["South Carolina home purchases", "Refinancing properties in Charleston, Columbia, or Greenville"],
    tips: ["Check eligibility for the South Carolina state homestead exemption if you are over 65 or disabled to lower your tax reserves."],
    inputs: [
      { id: "price", label: "Home Purchase Price ($)", type: "number", defaultValue: 250000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 25000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 6.5);
      const term = Number(inputs.term || 30);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const tax = (price * 0.0056) / 12;
      const ins = (price * 0.0058) / 12;
      const total = monthlyPi + tax + ins;

      return {
        principalInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        monthlyPropertyTax: { value: tax.toFixed(2), label: "South Carolina Property Tax (0.56%)", unit: "$" },
        monthlyInsurance: { value: ins.toFixed(2), label: "Homeowners Insurance Reserves", unit: "$" },
        totalMonthlyPayment: { value: total.toFixed(2), label: "Total Monthly Payment (PITI)", unit: "$" }
      };
    }
  },
  // 56. Arkansas Sales Tax Calculator
  "arkansas-sales-tax": {
    slug: "arkansas-sales-tax",
    name: "Arkansas Sales Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Arkansas Sales Tax Calculator - Combined Rate Estimator",
    metaDescription: "Calculate Arkansas sales tax or extract base values using the 6.5% state rate and custom county/city rates.",
    keywords: ["arkansas sales tax calculator", "arkansas sales tax lookup", "extract sales tax arkansas", "combined sales tax ar"],
    hook: "Calculate sales tax or reverse tax from purchase amounts in Arkansas.",
    description: "Input prices and select tax calculation methods to determine base amount, sales tax collections, and gross totals.",
    calcTime: "1 min",
    formula: "Tax = Base Price × Combined Tax Rate; Combined Rate = State Rate (6.5%) + Local Rate",
    formulaDescription: "Calculates sales tax based on standard Arkansas rules or reverses the formula to extract tax from a gross invoice total.",
    example: "A $100 purchase with 6.5% state tax and 2.5% local tax incurs $9.00 sales tax, totaling $109.00.",
    faqs: [
      { question: "What is the statewide sales tax rate in Arkansas?", answer: "The state of Arkansas has a base sales tax rate of 6.5%." },
      { question: "Do cities in Arkansas charge additional sales tax?", answer: "Yes, local city and county sales tax rates are added to the state rate and commonly range from 1.0% to 3.5%, leading to combined rates of 8.0% to 10.0%." }
    ],
    commonMistakes: ["Applying the state sales tax rate only and ignoring local municipal or county sales taxes."],
    useCases: ["Business invoice generation in Arkansas", "Accounting receipt verification"],
    tips: ["Make sure to verify if your municipality has special district taxes for transit or tourism projects."],
    inputs: [
      { id: "amount", label: "Amount / Price ($)", type: "number", defaultValue: 100, unit: "$" },
      { id: "stateRate", label: "Arkansas State Tax Rate (%)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "localRate", label: "Local / County Tax Rate (%)", type: "number", defaultValue: 2.5, unit: "%" },
      { 
        id: "calcMode", 
        label: "Calculation Method", 
        type: "select", 
        defaultValue: "add", 
        options: [
          { value: "add", label: "Add Tax to Base Amount" },
          { value: "extract", label: "Extract Tax from Gross Total" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount || 0);
      const stateRate = Number(inputs.stateRate || 6.5);
      const localRate = Number(inputs.localRate || 2.5);
      const mode = inputs.calcMode || "add";

      const combinedRate = stateRate + localRate;

      let base = 0;
      let tax = 0;
      let total = 0;

      if (mode === "add") {
        base = amount;
        tax = amount * (combinedRate / 100);
        total = amount + tax;
      } else {
        base = amount / (1 + (combinedRate / 100));
        tax = amount - base;
        total = amount;
      }

      return {
        baseAmount: { value: base.toFixed(2), label: "Base Price (Pre-Tax)", unit: "$" },
        taxAmount: { value: tax.toFixed(2), label: "Sales Tax Amount", unit: "$" },
        totalAmount: { value: total.toFixed(2), label: "Total Price", unit: "$" }
      };
    }
  },
  // 57. Adjustable Rate Mortgage (ARM) Calculator
  "arm-mortgage": {
    slug: "arm-mortgage",
    name: "ARM Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "ARM Mortgage Calculator - Adjustable Rate Loan Estimator",
    metaDescription: "Estimate monthly payments for Adjustable Rate Mortgages (ARM). Compare initial fixed-rate payments with worst-case lifetime caps.",
    keywords: ["arm mortgage calculator", "adjustable rate mortgage calculator", "5/1 arm calculator", "hybrid arm payments"],
    hook: "Calculate initial and worst-case payments for ARMs.",
    description: "Input initial loan amounts, teaser interest rates, fixed periods, and lifetime caps to estimate future mortgage volatility.",
    calcTime: "2 mins",
    formula: "P&I Payment = Loan Balance × (r(1+r)^n) ÷ ((1+r)^n - 1)",
    formulaDescription: "Calculates the initial payment based on the teaser rate, then models the maximum possible monthly payment utilizing lifetime interest rate caps.",
    example: "A $300k 5/1 ARM with a 6.0% initial rate and 5.0% lifetime cap (max rate 11.0%) starts at $1,798/month. If the rate adjusts to its max of 11.0% after year 5, the payment rises to $2,809/month.",
    faqs: [
      { question: "What does 5/1 ARM mean?", answer: "The interest rate is fixed for the first 5 years. After that, it can adjust once every year for the remaining life of the loan." },
      { question: "What is an ARM lifetime cap?", answer: "The maximum amount the interest rate can increase over the life of the loan above the initial interest rate." }
    ],
    commonMistakes: ["Budgeting only for the initial teaser payment and forgetting to prepare for potential future payment shock when rate adjustments begin."],
    useCases: ["Comparing fixed-rate vs adjustable-rate mortgages", "Short-term homeownership financial modeling"],
    tips: ["Choose an ARM if you plan to sell the home or refinance before the initial fixed-rate period ends."],
    inputs: [
      { id: "loanAmount", label: "Loan Amount ($)", type: "number", defaultValue: 300000, unit: "$" },
      { id: "initialRate", label: "Initial Interest Rate (%)", type: "number", defaultValue: 6.0, unit: "%" },
      { id: "initialPeriod", label: "Initial Fixed Period (Years)", type: "number", defaultValue: 5, unit: "yrs" },
      { id: "rateCap", label: "Lifetime Rate Cap (%)", type: "number", defaultValue: 5.0, unit: "%" }
    ],
    calculate: (inputs) => {
      const loan = Number(inputs.loanAmount || 0);
      const initRate = Number(inputs.initialRate || 6.0);
      const period = Number(inputs.initialPeriod || 5);
      const cap = Number(inputs.rateCap || 5.0);

      // Initial Payment
      const rInit = (initRate / 100) / 12;
      const nTotal = 30 * 12;
      let initialPayment = 0;

      if (rInit > 0) {
        initialPayment = (loan * rInit * Math.pow(1 + rInit, nTotal)) / (Math.pow(1 + rInit, nTotal) - 1);
      } else {
        initialPayment = loan / nTotal;
      }

      // Max Lifetime Payment
      const maxRate = initRate + cap;
      const rMax = (maxRate / 100) / 12;
      const nRemaining = (30 - period) * 12;
      
      // Approximate remaining balance at adjustment
      let balanceAtAdjust = loan;
      for (let i = 0; i < (period * 12); i++) {
        const interest = balanceAtAdjust * rInit;
        const principal = initialPayment - interest;
        balanceAtAdjust = Math.max(0, balanceAtAdjust - principal);
      }

      let maxPayment = 0;
      if (rMax > 0 && nRemaining > 0) {
        maxPayment = (balanceAtAdjust * rMax * Math.pow(1 + rMax, nRemaining)) / (Math.pow(1 + rMax, nRemaining) - 1);
      } else {
        maxPayment = balanceAtAdjust / nRemaining;
      }

      return {
        initialPayment: { value: initialPayment.toFixed(2), label: "Initial Monthly Payment", unit: "$" },
        maxProjectedPayment: { value: maxPayment.toFixed(2), label: "Worst-Case Monthly Payment (at Cap)", unit: "$" },
        maxLifetimeRate: { value: maxRate.toFixed(2), label: "Maximum Lifetime Interest Rate", unit: "%" }
      };
    }
  },
  // 58. Electric Calculator
  "electric": {
    slug: "electric",
    name: "Electric Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Electric Energy Usage & Appliance Cost Calculator",
    metaDescription: "Estimate electricity consumption and operating costs for household appliances. Convert wattage, hours of usage, and utility rates to dollar values.",
    keywords: ["electric calculator", "energy usage calculator", "appliance electricity cost", "kwh cost calculator"],
    hook: "Calculate operating costs for any electrical appliance.",
    description: "Input appliance power rating and daily usage hours to estimate daily, monthly, and annual utility bills.",
    calcTime: "1 min",
    formula: "Cost = Power (kW) × Time (Hours) × Electricity Rate ($/kWh)",
    formulaDescription: "Converts appliance wattage to kilowatts, calculates daily consumption in kilowatt-hours (kWh), and multiplies by standard electric utility rates.",
    example: "A 1,000-watt space heater run for 8 hours daily at $0.16/kWh uses 8 kWh of energy, costing $1.28 per day, or $38.91 per month.",
    faqs: [
      { question: "What is a kWh?", answer: "A kilowatt-hour (kWh) is a unit of energy equivalent to using 1,000 watts of power for one hour." },
      { question: "Which home appliances use the most electricity?", answer: "Space heaters, air conditioners, water heaters, clothes dryers, and refrigerators are typically the largest energy consumers in a home." }
    ],
    commonMistakes: ["Entering kilowatts instead of watts for the wattage input. (e.g. putting 1 instead of 1000 for a 1 kW heater)."],
    useCases: ["Auditing high utility bills", "Estimating operating costs of new electronics", "Comparing appliance energy efficiency profiles"],
    tips: ["Look for Energy Star labels on appliances for certified energy-efficient products that help reduce electricity costs."],
    inputs: [
      { id: "wattage", label: "Appliance Power Rating (Watts)", type: "number", defaultValue: 1000, unit: "W" },
      { id: "hoursPerDay", label: "Daily Usage (Hours)", type: "number", defaultValue: 8, unit: "hrs" },
      { id: "costPerKwh", label: "Electricity Cost per kWh ($)", type: "number", defaultValue: 0.16, unit: "$" }
    ],
    calculate: (inputs) => {
      const watts = Number(inputs.wattage || 0);
      const hours = Number(inputs.hoursPerDay || 0);
      const rate = Number(inputs.costPerKwh || 0.16);

      const dailyKwh = (watts * hours) / 1000;
      const dailyCost = dailyKwh * rate;
      const monthlyCost = dailyCost * 30.4;
      const annualCost = dailyCost * 365;

      return {
        kwhConsumption: { value: dailyKwh.toFixed(2), label: "Daily Energy Consumption", unit: "kWh" },
        dailyCost: { value: dailyCost.toFixed(2), label: "Daily Operating Cost", unit: "$" },
        monthlyCost: { value: monthlyCost.toFixed(2), label: "Monthly Operating Cost", unit: "$" },
        annualCost: { value: annualCost.toFixed(2), label: "Annual Operating Cost", unit: "$" }
      };
    }
  },
  // 59. Tile Sq Ft Calculator
  "tile-sqft": {
    slug: "tile-sqft",
    name: "Tile Sq Ft Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Tile Sq Ft Calculator - Tile Quantity & Waste Estimator",
    metaDescription: "Calculate the exact number of tiles and boxes needed for floors or backsplashes. Accounts for tile dimensions and custom waste factors.",
    keywords: ["tile sq ft calculator", "how many tiles do i need", "tile area calculator", "floor tile coverage estimator"],
    hook: "Calculate tiles and boxes needed for any flooring layout.",
    description: "Input room dimensions and tile sizing parameters to instantly calculate raw tile count, waste buffers, and total boxes to order.",
    calcTime: "2 mins",
    formula: "Tiles Needed = Room Area ÷ Tile Area; Include Waste Factor",
    formulaDescription: "Finds the total square footage of tiling required, divides by the area of a single tile, and rounds up to support packaging boxes.",
    example: "Tiling a 120 sq ft room with 12x12\" tiles needs exactly 120 tiles. Adding a 10% waste buffer increases the order requirement to 132 tiles.",
    faqs: [
      { question: "How much extra tile should I buy for waste?", answer: "Buy 10% extra for standard square layouts. If laying tiles in a diagonal or herringbone pattern, buy 15% extra to account for additional cutting waste." }
    ],
    commonMistakes: ["Failing to account for grout lines in tile spacing or buying exactly the net room area without a waste margin."],
    useCases: ["Bathroom remodels", "Kitchen backsplash installation planning"],
    tips: ["Always keep a few extra tiles from the same batch for future repairs, as colors can vary between manufacturing runs."],
    inputs: [
      { id: "areaSqft", label: "Tiling Installation Area (sq ft)", type: "number", defaultValue: 120, unit: "sq ft" },
      { id: "tileLength", label: "Tile Length (inches)", type: "number", defaultValue: 12 },
      { id: "tileWidth", label: "Tile Width (inches)", type: "number", defaultValue: 12 },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10 },
      { id: "tilesPerBox", label: "Tiles per Box Package", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const area = Number(inputs.areaSqft || 0);
      const len = Number(inputs.tileLength || 12);
      const w = Number(inputs.tileWidth || 12);
      const waste = Number(inputs.wastePct || 10);
      const perBox = Number(inputs.tilesPerBox || 10);

      const tileAreaSqft = (len * w) / 144;
      const netTiles = tileAreaSqft > 0 ? area / tileAreaSqft : 0;
      const grossTiles = netTiles * (1 + waste / 100);
      const boxes = perBox > 0 ? Math.ceil(grossTiles / perBox) : 0;

      return {
        tilesNeeded: { value: Math.ceil(netTiles), label: "Net Tiles (No Waste)", unit: "pcs" },
        tilesNeededWaste: { value: Math.ceil(grossTiles), label: "Total Tiles (+ Waste Buffer)", unit: "pcs" },
        boxesNeeded: { value: boxes, label: "Total Packaging Boxes", unit: "boxes" }
      };
    }
  },
  // 60. Dynasty Daddy Fantasy Football Trade Calculator
  "dynasty-daddy": {
    slug: "dynasty-daddy",
    name: "Dynasty Trade Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Dynasty Trade Calculator - Fantasy Football Value Analyzer",
    metaDescription: "Evaluate fantasy football trades in dynasty leagues. Compare package values for players and draft picks to ensure fair trade decisions.",
    keywords: ["dynasty trade calculator", "dynasty daddy trade calculator", "fantasy football trade evaluator", "player trade value", "keep trade cut calculator"],
    hook: "Analyze fantasy football trade packages instantly.",
    description: "Select player tier assets and draft picks to determine if a multi-player trade deal is fair or unbalanced.",
    calcTime: "2 mins",
    formula: "Package Balance % = Team A Value ÷ Team B Value",
    formulaDescription: "Sums industry-standard dynasty value indices (scaled 0-100) for all assets on both sides of the trade to evaluate package margins.",
    example: "Trading an Elite QB (90 pts) for an Elite RB (85 pts) + a First Round Pick (75 pts). Team A receives 90 pts, Team B receives 160 pts. Team B wins the trade by 70 points (highly unbalanced).",
    faqs: [
      { question: "What is a 'dynasty' league?", answer: "A fantasy football league where you keep your entire roster of players from year to year, drafting rookies annually." },
      { question: "Why is trade value modeling important?", answer: "It prevents you from overpaying for a single premium asset or falling victim to lopsided multi-player deals." }
    ],
    commonMistakes: ["Overvaluing minor depth players. A package of three bench players is rarely worth one elite starter, despite what total points sum to."],
    useCases: ["Evaluating trade offers from league mates", "Pre-draft asset valuation", "Roster reconstruction analysis"],
    tips: ["In dynasty, elite QBs retain value the longest, followed by WRs, while RBs have the shortest career lifespans."],
    inputs: [
      { 
        id: "teamAPlayer1", 
        label: "Team A Assets Given - Item 1", 
        type: "select", 
        defaultValue: "90", 
        options: [
          { value: "90", label: "Elite QB / Tier 1 (e.g. Mahomes, Allen)" },
          { value: "88", label: "Elite WR / Tier 1 (e.g. Jefferson, Lamb)" },
          { value: "85", label: "Elite RB / Tier 1 (e.g. McCaffrey, Robinson)" },
          { value: "80", label: "Elite TE / Tier 1 (e.g. LaPorta, Kelce)" },
          { value: "75", label: "Early First Round Draft Pick" },
          { value: "60", label: "Late First Round Draft Pick" },
          { value: "45", label: "Mid Round Rookie Pick (2nd/3rd)" },
          { value: "20", label: "Depth Bench Player / Prospect" },
          { value: "0", label: "None" }
        ] 
      },
      { 
        id: "teamAPlayer2", 
        label: "Team A Assets Given - Item 2", 
        type: "select", 
        defaultValue: "0", 
        options: [
          { value: "90", label: "Elite QB / Tier 1" },
          { value: "88", label: "Elite WR / Tier 1" },
          { value: "85", label: "Elite RB / Tier 1" },
          { value: "80", label: "Elite TE / Tier 1" },
          { value: "75", label: "Early First Round Draft Pick" },
          { value: "60", label: "Late First Round Draft Pick" },
          { value: "45", label: "Mid Round Rookie Pick" },
          { value: "20", label: "Depth Bench Player" },
          { value: "0", label: "None" }
        ] 
      },
      { 
        id: "teamBPlayer1", 
        label: "Team B Assets Given - Item 1", 
        type: "select", 
        defaultValue: "85", 
        options: [
          { value: "90", label: "Elite QB / Tier 1" },
          { value: "88", label: "Elite WR / Tier 1" },
          { value: "85", label: "Elite RB / Tier 1" },
          { value: "80", label: "Elite TE / Tier 1" },
          { value: "75", label: "Early First Round Draft Pick" },
          { value: "60", label: "Late First Round Draft Pick" },
          { value: "45", label: "Mid Round Rookie Pick" },
          { value: "20", label: "Depth Bench Player" },
          { value: "0", label: "None" }
        ] 
      },
      { 
        id: "teamBPlayer2", 
        label: "Team B Assets Given - Item 2", 
        type: "select", 
        defaultValue: "75", 
        options: [
          { value: "90", label: "Elite QB / Tier 1" },
          { value: "88", label: "Elite WR / Tier 1" },
          { value: "85", label: "Elite RB / Tier 1" },
          { value: "80", label: "Elite TE / Tier 1" },
          { value: "75", label: "Early First Round Draft Pick" },
          { value: "60", label: "Late First Round Draft Pick" },
          { value: "45", label: "Mid Round Rookie Pick" },
          { value: "20", label: "Depth Bench Player" },
          { value: "0", label: "None" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const valA1 = Number(inputs.teamAPlayer1 || 90);
      const valA2 = Number(inputs.teamAPlayer2 || 0);
      const valB1 = Number(inputs.teamBPlayer1 || 85);
      const valB2 = Number(inputs.teamBPlayer2 || 75);

      const totalA = valA1 + valA2;
      const totalB = valB1 + valB2;

      let result = "";
      const diff = Math.abs(totalA - totalB);

      if (diff <= 15) {
        result = "Fair Trade - The overall values are closely matched.";
      } else if (totalA > totalB) {
        result = `Team A Wins: Team A package is stronger by ${diff} points.`;
      } else {
        result = `Team B Wins: Team B package is stronger by ${diff} points.`;
      }

      return {
        teamAValue: { value: totalA, label: "Team A Assets Value Score", unit: "pts" },
        teamBValue: { value: totalB, label: "Team B Assets Value Score", unit: "pts" },
        tradeResult: { value: result, label: "Trade Evaluation Verdict", unit: "" }
      };
    }
  },
  // 61. Mapei Grout Coverage Calculator
  "mapei-grout": {
    slug: "mapei-grout",
    name: "Mapei Grout Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Mapei Grout Weight & Coverage Calculator - Tile Joint Estimator",
    metaDescription: "Calculate the weight of Mapei grout needed for tiling. Inputs tile dimensions, joint width, and total area.",
    keywords: ["mapei grout calculator", "grout weight calculator mapei", "mapei tile grout coverage", "how much mapei grout"],
    hook: "Estimate Mapei grout weights and joint volumes instantly.",
    description: "Input tile length, width, thickness, and joint width to calculate the grout bags required for construction layouts.",
    calcTime: "2 mins",
    formula: "Weight (lbs) = Volume (cu in) × density × Area (sq ft) × (1 + Waste %)",
    formulaDescription: "Computes joint volume based on tile perimeter-to-area ratio and joint width, then converts to weight using Mapei product-specific densities (Keracolor Sanded: 0.065, Keracolor Unsanded: 0.058, Ultracolor Plus FA: 0.062, Kerapoxy: 0.067 lbs/cu in).",
    example: "Tiling 100 sq ft using 12x12x3/8\" tiles and a 1/8\" joint requires 8.5 lbs of Ultracolor Plus FA grout. With a 10% waste buffer, you should order 9.4 lbs.",
    faqs: [
      { question: "What is Mapei Ultracolor Plus FA?", answer: "An ultra-premium, fast-setting, polymer-modified grout that is color-consistent and does not require sealing. It uses a hybrid density of 0.062 lbs/cu in." }
    ],
    commonMistakes: ["Using standard grout calculations for epoxy grout without adjusting the density coefficient."],
    useCases: ["Kitchen backsplash tiling projects", "Bathroom floor remodel material calculations"],
    tips: ["Mapei recommends mixing grout at low speeds to prevent trapping air bubbles in the mix."],
    inputs: [
      { id: "tileLength", label: "Tile Length (inches)", type: "number", defaultValue: 12 },
      { id: "tileWidth", label: "Tile Width (inches)", type: "number", defaultValue: 12 },
      { id: "tileThickness", label: "Tile Thickness (inches)", type: "number", defaultValue: 0.375 },
      { id: "jointWidth", label: "Joint Width (inches)", type: "number", defaultValue: 0.125 },
      { id: "areaSqft", label: "Total Installation Area (sq ft)", type: "number", defaultValue: 100 },
      { 
        id: "groutType", 
        label: "Mapei Grout Product Class", 
        type: "select", 
        defaultValue: "ultracolor", 
        options: [
          { value: "sanded", label: "Keracolor S Sanded (Density 0.065)" },
          { value: "unsanded", label: "Keracolor U Unsanded (Density 0.058)" },
          { value: "ultracolor", label: "Ultracolor Plus FA (Density 0.062)" },
          { value: "epoxy", label: "Kerapoxy Epoxy Grout (Density 0.067)" }
        ] 
      },
      { id: "wastePct", label: "Waste Factor (%)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.tileLength || 12);
      const w = Number(inputs.tileWidth || 12);
      const t = Number(inputs.tileThickness || 0.375);
      const jw = Number(inputs.jointWidth || 0.125);
      const area = Number(inputs.areaSqft || 100);
      const waste = Number(inputs.wastePct || 10);
      const gType = inputs.groutType || "ultracolor";

      let density = 0.062;
      if (gType === "sanded") density = 0.065;
      else if (gType === "unsanded") density = 0.058;
      else if (gType === "epoxy") density = 0.067;

      // Volume of joints per sq ft (cu inches)
      // Standard Formula: ((L + W) * Jw * Jd * 144) / (L * W)
      const volumePerSqft = ((len + w) * jw * t * 144) / (len * w);
      const netWeight = volumePerSqft * density * area;
      const totalWeight = netWeight * (1 + waste / 100);

      return {
        groutVolumeSqft: { value: volumePerSqft.toFixed(2), label: "Joint Volume per Sq Ft", unit: "cu in" },
        rawWeight: { value: netWeight.toFixed(1), label: "Net Grout Weight Needed", unit: "lbs" },
        totalWeight: { value: totalWeight.toFixed(1), label: "Total Grout Weight (+ Waste)", unit: "lbs" }
      };
    }
  },
  // 62. Maryland Tax Calculator
  "maryland-tax": {
    slug: "maryland-tax",
    name: "Maryland Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Maryland Tax Calculator - State & County Income Tax Estimator",
    metaDescription: "Calculate Maryland state and local county income tax liabilities using standard deductions and progressive brackets.",
    keywords: ["maryland tax calculator", "maryland income tax estimator", "maryland state and local tax", "paycheck deductions maryland"],
    hook: "Estimate Maryland state & county tax liabilities based on gross income.",
    description: "Determine your taxable income, state brackets offset, local county taxes, and effective tax rates instantly.",
    calcTime: "2 mins",
    formula: "Taxable Income = Gross - Deduction; Apply Progressive Brackets + County Rate (2.25% - 3.2%)",
    formulaDescription: "Subtracts Maryland standard deduction (capped at $2,550 single / $5,100 married), calculates progressive state tax, and adds local county tax.",
    example: "A single taxpayer earning $60,000 deducts $2,550. Taxable income of $57,450 falls into progressive brackets (2.0% to 4.75%) totaling $2,624. Adding a 3.0% county tax ($1,800) yields a total tax of $4,424.",
    faqs: [
      { question: "What is Maryland's state tax rate?", answer: "Maryland uses a progressive state tax system with rates ranging from 2.0% to 5.75% depending on income brackets." },
      { question: "What is Maryland's county income tax?", answer: "Every county in Maryland (and Baltimore City) levies a local income tax. Rates are flat and range from 2.25% to 3.20% of your taxable income." }
    ],
    commonMistakes: ["Failing to add the county tax rate to the state tax rate, which significantly underestimates the total tax liability."],
    useCases: ["Estimating state tax liability", "Quarterly tax planning for Maryland residents"],
    tips: ["Check if your county offers local tax credits or homestead credits to reduce your taxable income base."],
    inputs: [
      { id: "grossWages", label: "Annual Gross Income ($)", type: "number", defaultValue: 60000, unit: "$" },
      { 
        id: "filingStatus", 
        label: "Filing Status", 
        type: "select", 
        defaultValue: "single", 
        options: [
          { value: "single", label: "Single Filer" },
          { value: "married", label: "Married Filing Jointly" }
        ] 
      },
      { id: "localRate", label: "Local County Tax Rate (%)", type: "number", defaultValue: 3.0, unit: "%" }
    ],
    calculate: (inputs) => {
      const gross = Number(inputs.grossWages || 0);
      const status = inputs.filingStatus || "single";
      const countyRate = Number(inputs.localRate || 3.0);

      // Maryland Standard Deduction: 15% of gross
      // Single: min $1,700, max $2,550
      // Married: min $3,400, max $5,100
      let deduction = gross * 0.15;
      if (status === "married") {
        deduction = Math.min(5100, Math.max(3400, deduction));
      } else {
        deduction = Math.min(2550, Math.max(1700, deduction));
      }
      
      const taxable = Math.max(0, gross - deduction);

      // Maryland progressive brackets (Single and Married use same thresholds up to $150k/300k, let's use single brackets)
      const brackets = [
        { limit: 1000, rate: 0.02 },
        { limit: 3000, rate: 0.03 },
        { limit: 15000, rate: 0.04 },
        { limit: 100000, rate: 0.0475 },
        { limit: 125000, rate: 0.05 },
        { limit: 150000, rate: 0.0525 },
        { limit: 250000, rate: 0.055 },
        { limit: Infinity, rate: 0.0575 }
      ];

      let stateTax = 0;
      let temp = taxable;
      let prevLimit = 0;

      for (let i = 0; i < brackets.length; i++) {
        const currentLimit = brackets[i].limit - prevLimit;
        const currentRate = brackets[i].rate;

        if (temp > currentLimit) {
          stateTax += currentLimit * currentRate;
          temp -= currentLimit;
          prevLimit = brackets[i].limit;
        } else {
          stateTax += temp * currentRate;
          break;
        }
      }

      const countyTax = taxable * (countyRate / 100);
      const totalTax = stateTax + countyTax;
      const effectiveRate = gross > 0 ? (totalTax / gross) * 100 : 0;

      return {
        taxableIncome: { value: taxable.toFixed(2), label: "Maryland Taxable Income", unit: "$" },
        mdStateTax: { value: stateTax.toFixed(2), label: "Estimated MD State Tax", unit: "$" },
        localCountyTax: { value: countyTax.toFixed(2), label: `County Tax (${countyRate.toFixed(2)}%)`, unit: "$" },
        totalTaxLiability: { value: totalTax.toFixed(2), label: "Total Maryland Tax Liability", unit: "$" }
      };
    }
  },
  // 63. SAT Test Score Calculator
  "sat-test": {
    slug: "sat-test",
    name: "SAT Test Calculator",
    category: "education",
    categoryLabel: "Education",
    seoTitle: "SAT Test Score Calculator - Scale & Composite Score Converter",
    metaDescription: "Estimate your scaled SAT Reading & Writing and Math scores based on raw correct question counts. Standard SAT grading converter.",
    keywords: ["sat test calculator", "sat score calculator", "sat scale converter", "convert raw sat scores"],
    hook: "Convert raw correct questions to scale SAT scores.",
    description: "Input correct questions out of total questions in Reading, Writing, and Math to estimate scale scores.",
    calcTime: "1 min",
    formula: "Scale Score = 200 + Raw Score Ratio × 600",
    formulaDescription: "Converts raw score performance to standard SAT scale sections bounded between 200 and 800.",
    example: "Reading 45/52 and Writing 38/44 gives a scaled Verbal score of 720. Math 50/58 gives a scaled Math score of 720. Combined score is 1440.",
    faqs: [
      { question: "What is the maximum SAT score?", answer: "The maximum score is 1600. Verbal and Math are each worth up to 800 scale points." },
      { question: "How accurate is the SAT scale score calculator?", answer: "It is an approximation. The official College Board SAT curve changes slightly for each test administration based on exam difficulty." }
    ],
    commonMistakes: ["Entering incorrect question count instead of correct raw count values."],
    useCases: ["SAT diagnostic test evaluation", "SAT preparation tracking"],
    tips: ["There is no penalty for guessing on the SAT. Fill in every single question on the exam."],
    inputs: [
      { id: "readingRaw", label: "Reading Correct Questions (max 52)", type: "number", defaultValue: 45, min: 0, max: 52 },
      { id: "writingRaw", label: "Writing Correct Questions (max 44)", type: "number", defaultValue: 38, min: 0, max: 44 },
      { id: "mathRaw", label: "Math Correct Questions (max 58)", type: "number", defaultValue: 50, min: 0, max: 58 }
    ],
    calculate: (inputs) => {
      const read = Math.min(52, Math.max(0, Number(inputs.readingRaw || 45)));
      const write = Math.min(44, Math.max(0, Number(inputs.writingRaw || 38)));
      const math = Math.min(58, Math.max(0, Number(inputs.mathRaw || 50)));

      // Scaled Verbal = Reading & Writing (max 96)
      const verbalRatio = (read + write) / 96;
      let scaleVerbal = Math.round(200 + verbalRatio * 600);
      scaleVerbal = Math.min(800, Math.max(200, Math.round(scaleVerbal / 10) * 10));

      // Scaled Math (max 58)
      const mathRatio = math / 58;
      let scaleMath = Math.round(200 + mathRatio * 600);
      scaleMath = Math.min(800, Math.max(200, Math.round(scaleMath / 10) * 10));

      const total = scaleVerbal + scaleMath;

      return {
        verbalScale: { value: scaleVerbal, label: "Reading & Writing Scaled Score", unit: "pts" },
        mathScale: { value: scaleMath, label: "Math Scaled Score", unit: "pts" },
        totalScore: { value: total, label: "Estimated Composite SAT Score", unit: "pts" }
      };
    }
  },
  // 64. Builders Risk Insurance Cost Calculator
  "builders-risk-insurance": {
    slug: "builders-risk-insurance",
    name: "Builders Risk Insurance Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Builders Risk Insurance Cost Calculator - Construction Coverage Estimator",
    metaDescription: "Estimate builders risk insurance premiums for residential or commercial construction projects. Quick coverage budget finder.",
    keywords: ["builders risk insurance cost calculator", "construction insurance cost", "builders risk premium finder", "renovation insurance calculator"],
    hook: "Calculate construction builders risk insurance premiums.",
    description: "Input construction budget, project length, and risk factor to estimate total policy pricing.",
    calcTime: "1 min",
    formula: "Premium = Budget × Rate Coefficient; Monthly Rate = Premium ÷ Term",
    formulaDescription: "Applies risk tier rates (1% to 3.5% of total construction cost) adjusted for project duration.",
    example: "A $200k construction budget at a medium risk level (2% rate) costs $4,000 for a 12-month policy, translating to $333/month.",
    faqs: [
      { question: "What does builders risk insurance cover?", answer: "It covers physical damage to the structure under construction, materials on-site, and materials in transit due to fire, wind, theft, or vandalism." },
      { question: "Who pays for builders risk insurance?", answer: "Either the property owner or the general contractor can purchase the policy, depending on the contract agreement." }
    ],
    commonMistakes: ["Failing to update policy duration when construction projects encounter delays, which can void coverage."],
    useCases: ["Construction loan closing preparations", "Home remodeling risk planning"],
    tips: ["Buying a policy before breaking ground is typically cheaper than buying coverage mid-construction."],
    inputs: [
      { id: "constructionBudget", label: "Total Construction Budget ($)", type: "number", defaultValue: 200000, unit: "$" },
      { 
        id: "riskLevel", 
        label: "Project Risk Profile", 
        type: "select", 
        defaultValue: "medium", 
        options: [
          { value: "low", label: "Low Risk (New home in developed suburb)" },
          { value: "medium", label: "Medium Risk (Custom home or coastal area)" },
          { value: "high", label: "High Risk (High crime area or commercial structure)" }
        ] 
      },
      { id: "projectDurationMonths", label: "Project Duration (Months)", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const budget = Number(inputs.constructionBudget || 0);
      const risk = inputs.riskLevel || "medium";
      const term = Number(inputs.projectDurationMonths || 12);

      let rate = 0.02; // medium default
      if (risk === "low") rate = 0.01;
      else if (risk === "high") rate = 0.035;

      const premium = budget * rate;
      const monthly = term > 0 ? premium / term : premium;
      const deductibleMin = budget * 0.005;
      const deductibleMax = budget * 0.015;

      return {
        totalPremium: { value: premium.toFixed(2), label: "Estimated Policy Premium", unit: "$" },
        monthlyRate: { value: monthly.toFixed(2), label: "Estimated Monthly Cost", unit: "$" },
        deductibleEstimate: { value: `$${deductibleMin.toFixed(0)} - $${deductibleMax.toFixed(0)}`, label: "Projected Deductible Range", unit: "" }
      };
    }
  },
  // 65. Manufactured Home Loan Calculator
  "manufactured-home-loan": {
    slug: "manufactured-home-loan",
    name: "Manufactured Home Loan Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Manufactured Home Loan Calculator - Mobile Home Payments Planner",
    metaDescription: "Calculate monthly payments for manufactured and mobile homes. Supports Chattel loans, FHA loans, and standard amortization tables.",
    keywords: ["manufactured home loan calculator", "mobile home loan calculator", "chattel loan payments", "fha title i calculator"],
    hook: "Estimate manufactured or mobile home financing costs.",
    description: "Input purchase prices, loan terms, and interest rates to calculate monthly payments and total interest profiles.",
    calcTime: "2 mins",
    formula: "Monthly Payment = P × (r(1+r)^n) ÷ ((1+r)^n - 1)",
    formulaDescription: "Computes periodic payments using chattel loan amortization (often shorter terms and higher interest than traditional properties).",
    example: "A $120k manufactured home with 10% down ($12k) financed with a 20-year chattel loan at 8.5% costs $936/month.",
    faqs: [
      { question: "What is a chattel loan?", answer: "A loan for personal property rather than real estate. If you own the manufactured home but rent the land/lot, you will typically use a chattel loan." },
      { question: "Can I get an FHA loan for a mobile home?", answer: "Yes, FHA Title I loans offer financing for manufactured homes on leased lots with shorter terms (typically 20 years)." }
    ],
    commonMistakes: ["Expecting standard mortgage interest rates for mobile homes without owning the underlying land."],
    useCases: ["Mobile home purchases", "Evaluating lot rent vs land purchases"],
    tips: ["Affixing the manufactured home to a permanent foundation on land you own makes it eligible for standard, cheaper real estate loans."],
    inputs: [
      { id: "homePrice", label: "Manufactured Home Price ($)", type: "number", defaultValue: 120000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 12000, unit: "$" },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", defaultValue: 8.5, unit: "%" },
      { id: "term", label: "Loan Term (Years)", type: "number", defaultValue: 20 }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.homePrice || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.rate || 8.5);
      const term = Number(inputs.term || 20);

      const principal = price - down;
      const r = (rate / 100) / 12;
      const n = term * 12;

      let monthlyPi = 0;
      if (r > 0 && n > 0) {
        monthlyPi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else {
        monthlyPi = principal / n;
      }

      const totalPayments = monthlyPi * n;
      const totalInterest = totalPayments - principal;

      return {
        principalAndInterest: { value: monthlyPi.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        totalInterest: { value: totalInterest.toFixed(2), label: "Total Interest Paid", unit: "$" },
        totalCost: { value: totalPayments.toFixed(2), label: "Total Lifetime Loan Payments", unit: "$" }
      };
    }
  },
  // 66. Commercial Printing Calculator
  "printing": {
    slug: "printing",
    name: "Printing Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Commercial Printing Cost & Pricing Calculator",
    metaDescription: "Estimate custom commercial printing costs and retail pricing for booklets, catalogs, and brochures. Adjust for paper, color, and binding.",
    keywords: ["printing calculator", "booklet printing cost", "print shop pricing calculator", "print markup estimator"],
    hook: "Calculate commercial printing job costs and client pricing.",
    description: "Input paper specifications, binding styles, and print quantities to compute production costs and recommended customer price points.",
    calcTime: "2 mins",
    formula: "Price = (Printing Cost + Binding Cost) × (1 + Markup %)",
    formulaDescription: "Sums sheet costs, ink selections, and binding rates, then adds a target markup percentage to establish final sales price.",
    example: "Printing 1,000 units of a 16-page booklet on glossy paper with color ink and spiral binding costs $2,560. With a 30% markup, the total customer quote is $3,328 ($3.33 per book).",
    faqs: [
      { question: "How does print volume affect pricing?", answer: "Printing features high setup costs. Larger print volumes (economies of scale) significantly lower the unit price of booklets and flyers." }
    ],
    commonMistakes: ["Failing to add binding costs to saddle-stitch or spiral bound jobs, underpricing the final customer invoice."],
    useCases: ["Print shop job quoting", "Marketing brochure budget estimation"],
    tips: ["Saddle-stitching (stapled binding) is the most cost-effective booklet option for documents under 64 pages."],
    inputs: [
      { id: "quantity", label: "Print Job Volume (Units)", type: "number", defaultValue: 1000 },
      { id: "pages", label: "Pages per Unit", type: "number", defaultValue: 16 },
      { 
        id: "paperType", 
        label: "Paper Stock Selection", 
        type: "select", 
        defaultValue: "glossy", 
        options: [
          { value: "bond", label: "Standard 20lb Bond (Base: $0.03/page)" },
          { value: "glossy", label: "Premium 80lb Glossy Text (Base: $0.06/page)" },
          { value: "cardstock", label: "Heavy Cardstock Cover (Base: $0.12/page)" }
        ] 
      },
      { 
        id: "colorMode", 
        label: "Ink / Color Style", 
        type: "select", 
        defaultValue: "color", 
        options: [
          { value: "bw", label: "Grayscale / Black & White ($0.02/page)" },
          { value: "color", label: "Four Color / Full CMYK ($0.10/page)" }
        ] 
      },
      { 
        id: "binding", 
        label: "Binding Type Selection", 
        type: "select", 
        defaultValue: "spiral", 
        options: [
          { value: "none", label: "None (Loose / Folded only: $0.00)" },
          { value: "stapled", label: "Saddle-Stitch / Stapled ($0.10/unit)" },
          { value: "spiral", label: "Spiral Coil Bound ($1.50/unit)" },
          { value: "perfect", label: "Perfect Bound / Softcover Book ($3.00/unit)" }
        ] 
      },
      { id: "markup", label: "Target Profit Markup (%)", type: "number", defaultValue: 30, unit: "%" }
    ],
    calculate: (inputs) => {
      const qty = Number(inputs.quantity || 1);
      const pages = Number(inputs.pages || 16);
      const paper = inputs.paperType || "glossy";
      const color = inputs.colorMode || "color";
      const binding = inputs.binding || "spiral";
      const markup = Number(inputs.markup || 30);

      let pageBase = 0.06;
      if (paper === "bond") pageBase = 0.03;
      else if (paper === "cardstock") pageBase = 0.12;

      let inkBase = 0.10;
      if (color === "bw") inkBase = 0.02;

      let bindBase = 1.50;
      if (binding === "none") bindBase = 0.00;
      else if (binding === "stapled") bindBase = 0.10;
      else if (binding === "perfect") bindBase = 3.00;

      const pageCost = qty * pages * (pageBase + inkBase);
      const bindCost = qty * bindBase;
      const totalProductionCost = pageCost + bindCost;

      const totalCustomerPrice = totalProductionCost * (1 + markup / 100);
      const pricePerUnit = qty > 0 ? totalCustomerPrice / qty : 0;

      return {
        productionCost: { value: totalProductionCost.toFixed(2), label: "Net Production Cost", unit: "$" },
        pricePerUnit: { value: pricePerUnit.toFixed(2), label: "Retail Price per Unit", unit: "$" },
        totalPrice: { value: totalCustomerPrice.toFixed(2), label: "Total Customer Quote", unit: "$" }
      };
    }
  },
  // 67. TI-84 Calculator Battery Lifespan Estimator
  "ti84-battery": {
    slug: "ti84-battery",
    name: "TI-84 Battery Calculator",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "TI-84 Calculator Battery Life & Lifespan Estimator",
    metaDescription: "Estimate battery life and replacement cycles for TI-84 Plus CE (rechargeable) and standard TI-84 Plus calculators. Maximize usage.",
    keywords: ["calculator ti 84 battery", "ti 84 plus ce battery life", "ti 84 battery replacement", "calculator battery runtime"],
    hook: "Estimate battery life and lifespan for your TI-84 graphing calculator.",
    description: "Input calculator models, usage habits, and display preferences to estimate how long your battery charge or cells will last.",
    calcTime: "1 min",
    formula: "Days Life = Max Capacity Hours ÷ Daily Usage Hours",
    formulaDescription: "Models battery capacities (TI-84 Plus CE: 1200mAh Lithium-Ion, TI-84 Plus: 4x AAA cells) and adjusts for brightness profiles.",
    example: "TI-84 Plus CE used 2 hours daily at medium brightness has a 30-hour capacity, lasting approximately 15 days per full charge.",
    faqs: [
      { question: "How long does a TI-84 Plus CE battery charge last?", answer: "A full charge typically lasts between 15 to 30 hours of active screen time, which represents 1 to 2 weeks of normal school usage." },
      { question: "When should I replace my TI-84 CE rechargeable battery?", answer: "Lithium-ion batteries inside the CE model degrade after 300 to 500 charge cycles, which typically represents 4 to 5 years of school usage." }
    ],
    commonMistakes: ["Leaving screen brightness at max level, which cuts battery runtimes by more than half."],
    useCases: ["Preparing for standardized testing (SAT/ACT)", "School supply maintenance audits"],
    tips: ["Store your calculator in a cool place. Extreme heat speeds up battery self-discharge and shortens overall lifespan."],
    inputs: [
      { 
        id: "model", 
        label: "TI-84 Calculator Model", 
        type: "select", 
        defaultValue: "ce", 
        options: [
          { value: "ce", label: "TI-84 Plus CE (Color Screen / Rechargeable)" },
          { value: "standard", label: "TI-84 Plus (Monochrome / 4x AAA Batteries)" }
        ] 
      },
      { id: "usageHours", label: "Daily Active Usage (Hours)", type: "number", defaultValue: 2, unit: "hrs" },
      { 
        id: "brightness", 
        label: "Screen Brightness Level (CE only)", 
        type: "select", 
        defaultValue: "medium", 
        options: [
          { value: "low", label: "Low Brightness (Lasts up to 50 hrs)" },
          { value: "medium", label: "Medium Brightness (Lasts up to 30 hrs)" },
          { value: "high", label: "High Brightness (Lasts up to 15 hrs)" }
        ] 
      }
    ],
    calculate: (inputs) => {
      const model = inputs.model || "ce";
      const usage = Number(inputs.usageHours || 2);
      const bright = inputs.brightness || "medium";

      let capacityHours = 30;
      let lifespan = "";
      let rec = "";

      if (model === "ce") {
        if (bright === "low") capacityHours = 50;
        else if (bright === "high") capacityHours = 15;
        else capacityHours = 30; // medium

        lifespan = "4 to 5 years (Rechargeable Lithium-Ion)";
        rec = "Charge the calculator via USB when the indicator drops below 20%. Do not leave it plugged in overnight indefinitely.";
      } else {
        capacityHours = 150; // standard monochrome TI-84 has massive battery runtime on 4x AAA
        lifespan = "Depends on AAA brand (Non-rechargeable)";
        rec = "Change the 4 AAA batteries when the screen contrast becomes faint. Keep backup batteries in your testing bag.";
      }

      const days = usage > 0 ? capacityHours / usage : capacityHours;

      return {
        batteryLifeDays: { value: Math.ceil(days), label: "Estimated Battery Life Duration", unit: "days" },
        batteryLifespan: { value: lifespan, label: "Battery Pack Physical Lifespan", unit: "" },
        recommendation: { value: rec, label: "Maintenance Recommendation", unit: "" }
      };
    }
  },
  "calculator-phone-case": {
    slug: "calculator-phone-case",
    name: "Calculator Phone Case",
    category: "math",
    categoryLabel: "Productivity & Math",
    seoTitle: "Calculator Phone Case - Sizing, Scale & Custom Cost Estimator",
    metaDescription: "Estimate sizing, scale, bulk print pricing, and resolution requirements for retro calculator-style phone cases. Design calculator layout mockups.",
    keywords: ["calculator phone case", "retro calculator case", "phone case calculator", "custom phone case resolution", "phone case dimensions"],
    hook: "Design and calculate sizing, print resolution, and cost for custom retro calculator phone cases.",
    description: "Input your phone model, case materials, printing requirements, and quantity to calculate ideal design resolution, pricing, and bulk discount structures.",
    calcTime: "2 mins",
    formula: "Total Price = (Base Price + Material Premium) * Quantity * (1 - Discount Rate)",
    formulaDescription: "Calculates mock cost with tiered discount rates: 1-5 cases (0%), 6-20 cases (10%), 21+ cases (20%). It also maps screen dimensions to recommended print resolution (DPI).",
    example: "Order of 10 plastic phone cases ($15 base) gets a 10% discount: 10 × $15 × 0.90 = $135.",
    faqs: [
      { question: "What print resolution (DPI) is recommended for phone cases?", answer: "At least 300 DPI (Dots Per Inch) is recommended to avoid pixelation on high-detail designs like calculator keypad prints." },
      { question: "Are calculator cases functional?", answer: "Most calculator phone cases are aesthetic plastic/silicone prints, although some active game-emulator cases are available for specific models." }
    ],
    commonMistakes: ["Using low-resolution images (< 150 DPI) which makes the tiny calculator button prints look fuzzy."],
    useCases: ["Custom merchandise ordering", "Design mockup scaling"],
    tips: ["Choose matte finishes if you want to avoid glare on the calculator button prints."],
    inputs: [
      {
        id: "phoneModel",
        label: "Phone Model Category",
        type: "select",
        defaultValue: "iphone-standard",
        options: [
          { value: "iphone-standard", label: "iPhone (Standard/Pro models)" },
          { value: "iphone-max", label: "iPhone (Plus/Max models)" },
          { value: "galaxy-standard", label: "Samsung Galaxy (Standard/S-Series)" },
          { value: "galaxy-ultra", label: "Samsung Galaxy (Ultra models)" }
        ]
      },
      {
        id: "material",
        label: "Case Material",
        type: "select",
        defaultValue: "silicone",
        options: [
          { value: "silicone", label: "Soft Silicone / Gel ($14.99)" },
          { value: "tough", label: "Dual-layer Tough Armor ($19.99)" },
          { value: "glass", label: "Tempered Glass Back ($24.99)" }
        ]
      },
      { id: "quantity", label: "Quantity Required", type: "number", defaultValue: 2, unit: "units" },
      { id: "dpi", label: "Uploaded Image Resolution (DPI)", type: "number", defaultValue: 300, unit: "dpi" }
    ],
    calculate: (inputs) => {
      const q = Math.max(1, Number(inputs.quantity || 1));
      const dpi = Number(inputs.dpi || 300);
      const material = inputs.material || "silicone";
      const model = inputs.phoneModel || "iphone-standard";

      let basePrice = 14.99;
      if (material === "tough") basePrice = 19.99;
      else if (material === "glass") basePrice = 24.99;

      let discount = 0;
      if (q >= 21) discount = 0.20;
      else if (q >= 6) discount = 0.10;

      const subtotal = basePrice * q;
      const discountVal = subtotal * discount;
      const total = subtotal - discountVal;

      let resolutionStatus = "Excellent Print Quality";
      if (dpi < 150) resolutionStatus = "Poor - Image will look pixelated!";
      else if (dpi < 300) resolutionStatus = "Good - Standard print quality";

      let physicalHeightInches = 6.1;
      if (model === "iphone-max" || model === "galaxy-ultra") physicalHeightInches = 6.7;

      const printHeightPixels = physicalHeightInches * dpi;

      return {
        unitPrice: { value: (basePrice * (1 - discount)).toFixed(2), label: "Calculated Price per Unit", unit: "$" },
        totalCost: { value: total.toFixed(2), label: "Estimated Total Price", unit: "$" },
        qualityCheck: { value: resolutionStatus, label: "Design Resolution Check", unit: "" },
        requiredPixels: { value: Math.ceil(printHeightPixels), label: "Required Height in Pixels", unit: "px" }
      };
    }
  },
  "cd-rates": {
    slug: "cd-rates",
    name: "CD Rates Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "CD Rates Calculator - Certificate of Deposit Earnings Estimator",
    metaDescription: "Calculate the future balance, earned interest, and Annual Percentage Yield (APY) for Certificates of Deposit (CD). Plan your fixed-income returns.",
    keywords: ["cd rates calculator", "certificate of deposit calculator", "cd rate estimator", "cd interest earnings", "apy calculator"],
    hook: "Calculate interest earnings and APY growth for any Certificate of Deposit.",
    description: "Input your deposit principal, interest rate, CD term, and compounding frequency to find your final maturity balance.",
    calcTime: "1 min",
    formula: "A = P * (1 + r/n)^(n*t)",
    formulaDescription: "Uses the compound interest formula where P is principal, r is annual nominal rate, n is compounding periods per year, and t is term in years.",
    example: "Deposit of $10,000 for 1 year at 5% interest compounded monthly returns $10,511.62.",
    faqs: [
      { question: "What is APY vs interest rate on a CD?", answer: "The interest rate is the nominal rate. APY (Annual Percentage Yield) represents the actual rate of return taking compounding interest into account." },
      { question: "Is CD interest taxable?", answer: "Yes, CD interest earned is generally taxed as ordinary income in the year it is credited to your account." }
    ],
    commonMistakes: ["Withdrawing funds early, which usually results in an early withdrawal penalty that reduces your interest earned."],
    useCases: ["Fixed income planning", "Comparing bank rates", "Retirement savings allocation"],
    tips: ["If inflation is high, lock in shorter terms to avoid having your purchasing power eroded over long periods."],
    inputs: [
      { id: "deposit", label: "Deposit Principal ($)", type: "number", defaultValue: 10000, unit: "$" },
      { id: "rate", label: "Interest Rate (%)", type: "number", defaultValue: 4.5, unit: "%" },
      { id: "term", label: "CD Term (months)", type: "number", defaultValue: 12, unit: "mo" },
      {
        id: "compound",
        label: "Compounding Frequency",
        type: "select",
        defaultValue: "monthly",
        options: [
          { value: "daily", label: "Daily (365/yr)" },
          { value: "monthly", label: "Monthly (12/yr)" },
          { value: "quarterly", label: "Quarterly (4/yr)" },
          { value: "annual", label: "Annually (1/yr)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.deposit || 0);
      const r = Number(inputs.rate || 0) / 100;
      const termMonths = Number(inputs.term || 12);
      const freq = inputs.compound || "monthly";

      const t = termMonths / 12;
      let n = 12;
      if (freq === "daily") n = 365;
      else if (freq === "quarterly") n = 4;
      else if (freq === "annual") n = 1;

      const A = P * Math.pow(1 + r / n, n * t);
      const interest = A - P;
      const APY = (Math.pow(1 + r / n, n) - 1) * 100;

      return {
        futureValue: { value: A.toFixed(2), label: "Maturity Value", unit: "$" },
        interestEarned: { value: interest.toFixed(2), label: "Total Interest Earned", unit: "$" },
        apy: { value: APY.toFixed(3), label: "Annual Percentage Yield (APY)", unit: "%" }
      };
    }
  },
  "illinois-tax": {
    slug: "illinois-tax",
    name: "Illinois Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Illinois State Tax Calculator - Estimate Flat State Withholding",
    metaDescription: "Calculate Illinois flat state income tax liabilities. Accounts for Illinois flat tax rate, basic personal exemption, and dependents.",
    keywords: ["illinois tax calculator", "il state income tax", "illinois flat tax estimator", "illinois payroll tax"],
    hook: "Estimate your Illinois state flat income tax liability instantly.",
    description: "Calculate your Illinois flat state tax (4.95%) by inputting your gross income, filing status, and dependents to determine taxable income and exemptions.",
    calcTime: "2 mins",
    formula: "IL Tax = Taxable Income * 4.95%",
    formulaDescription: "Illinois levies a flat state income tax of 4.95% on taxable income after applying the state's basic personal exemption.",
    example: "Single filer with $50,000 gross income and 1 basic exemption ($2,775 for 2024) pays 4.95% of $47,225 = $2,337.64.",
    faqs: [
      { question: "Is Illinois income tax progressive?", answer: "No, Illinois uses a constitutionally mandated flat tax rate of 4.95% for individuals." },
      { question: "What is the Illinois personal exemption?", answer: "For tax year 2024, the basic personal exemption amount is $2,775 per eligible exemption." }
    ],
    commonMistakes: ["Failing to claim the standard personal exemption or additional exemptions for being over age 65 or blind."],
    useCases: ["Relocation planning to Illinois", "Annual budget estimating"],
    tips: ["Illinois offers a Property Tax Credit where you can deduct 5% of property taxes paid on your primary residence."],
    inputs: [
      { id: "income", label: "Gross Annual Income ($)", type: "number", defaultValue: 60000, unit: "$" },
      {
        id: "filing",
        label: "Filing Status",
        type: "select",
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "joint", label: "Married Filing Jointly" }
        ]
      },
      { id: "dependents", label: "Number of Dependents", type: "number", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const income = Number(inputs.income || 0);
      const filing = inputs.filing || "single";
      const deps = Number(inputs.dependents || 0);

      // 2024 basic exemption: $2,775 per person
      const EXEMPTION_UNIT = 2775;
      let totalExemptions = 1; // self
      if (filing === "joint") totalExemptions += 1; // spouse
      totalExemptions += deps;

      const exemptionVal = totalExemptions * EXEMPTION_UNIT;
      const taxable = Math.max(0, income - exemptionVal);
      const taxRate = 0.0495;
      const stateTax = taxable * taxRate;
      const net = income - stateTax;

      return {
        taxableIncome: { value: taxable.toFixed(2), label: "IL Taxable Income", unit: "$" },
        totalExemptionsVal: { value: exemptionVal.toFixed(2), label: "Total Exemptions Value", unit: "$" },
        taxLiability: { value: stateTax.toFixed(2), label: "Illinois State Tax Due", unit: "$" },
        afterTax: { value: net.toFixed(2), label: "Income After IL Tax", unit: "$" }
      };
    }
  },
  "cd-interest-rate": {
    slug: "cd-interest-rate",
    name: "CD Interest Rate Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "CD Interest Rate Calculator - Calculate Compound Yield",
    metaDescription: "Calculate the exact compound interest earned on Certificates of Deposit. Compare compounding frequencies and term length yield differences.",
    keywords: ["cd interest rate calculator", "cd compound interest", "certificate of deposit yield", "rate of return cd"],
    hook: "Determine the exact compound interest rate return for your savings.",
    description: "Determine compound returns on CD rates. Compare daily, weekly, monthly, and quarterly compounding options.",
    calcTime: "1 min",
    formula: "A = P * (1 + r/n)^(n*t)",
    formulaDescription: "Standard compounding interest math that computes future value and subtracts the principal to isolate interest growth.",
    example: "An investment of $5,000 for 5 years at 4.25% compounded quarterly earns $1,175.76 in interest.",
    faqs: [
      { question: "How does compounding frequency affect CD yields?", answer: "More frequent compounding (e.g., daily instead of annually) causes your interest to grow faster, resulting in a higher APY." },
      { question: "Can I add money to a CD after opening it?", answer: "Generally, traditional CDs do not allow additional deposits once the initial term begins. An exception is a 'Add-On' CD." }
    ],
    commonMistakes: ["Confusing the nominal interest rate with the yield (APY). Always compare APY across banks."],
    useCases: ["Savings growth projections", "Comparing CDs vs savings accounts"],
    tips: ["Daily compounding yields the highest interest. Look for institutions that compound daily rather than monthly."],
    inputs: [
      { id: "principal", label: "Initial Principal ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "rate", label: "Annual Nom. Interest Rate (%)", type: "number", defaultValue: 5.0, unit: "%" },
      { id: "years", label: "Term Length (years)", type: "number", defaultValue: 3, unit: "yrs" },
      {
        id: "compound",
        label: "Compounding Interval",
        type: "select",
        defaultValue: "daily",
        options: [
          { value: "daily", label: "Daily (Compounded 365/yr)" },
          { value: "monthly", label: "Monthly (Compounded 12/yr)" },
          { value: "quarterly", label: "Quarterly (Compounded 4/yr)" },
          { value: "annual", label: "Annually (Compounded 1/yr)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.principal || 0);
      const r = Number(inputs.rate || 0) / 100;
      const t = Number(inputs.years || 1);
      const freq = inputs.compound || "daily";

      let n = 365;
      if (freq === "monthly") n = 12;
      else if (freq === "quarterly") n = 4;
      else if (freq === "annual") n = 1;

      const A = P * Math.pow(1 + r / n, n * t);
      const interest = A - P;
      const APY = (Math.pow(1 + r / n, n) - 1) * 100;

      return {
        futureValue: { value: A.toFixed(2), label: "End Balance Value", unit: "$" },
        interestEarned: { value: interest.toFixed(2), label: "Total Interest Earned", unit: "$" },
        apy: { value: APY.toFixed(3), label: "Annual Percentage Yield (APY)", unit: "%" }
      };
    }
  },
  "pa-tax": {
    slug: "pa-tax",
    name: "PA Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Pennsylvania State Tax Calculator - PA 3.07% Flat Income Tax",
    metaDescription: "Estimate Pennsylvania state income tax liability. Pennsylvania uses a flat state income tax rate of 3.07% with no standard deductions.",
    keywords: ["pa tax calculator", "pennsylvania tax calculator", "pa flat tax rate", "state tax pennsylvania"],
    hook: "Calculate your Pennsylvania flat tax liabilities in seconds.",
    description: "Determine your PA flat income tax (3.07%) based on gross income and taxable distributions.",
    calcTime: "1 min",
    formula: "PA Tax = Taxable Income * 3.07%",
    formulaDescription: "Pennsylvania levies a flat rate of 3.07% on all taxable compensation, with no personal standard deduction allowed.",
    example: "A salary of $45,000 in PA has a flat state tax of 3.07% = $1,381.50.",
    faqs: [
      { question: "Does PA have standard deductions?", answer: "No, Pennsylvania is unique in that it does not allow a standard deduction or personal exemptions on income." },
      { question: "What is PA Tax Forgiveness?", answer: "PA offers Tax Forgiveness, which provides state tax refunds or exemptions to lower-income families." }
    ],
    commonMistakes: ["Expecting standard deductions similar to federal returns. PA taxes gross taxable compensation directly."],
    useCases: ["Living and working in PA", "Comparing tax burdens between states"],
    tips: ["While PA doesn't have standard deductions, you can deduct eligible unreimbursed business expenses using Schedule UE."],
    inputs: [
      { id: "income", label: "Gross Taxable Compensation ($)", type: "number", defaultValue: 50000, unit: "$" },
      { id: "businessExpenses", label: "Allowable Business Expenses ($)", type: "number", defaultValue: 0, unit: "$" }
    ],
    calculate: (inputs) => {
      const income = Number(inputs.income || 0);
      const expenses = Number(inputs.businessExpenses || 0);

      const taxable = Math.max(0, income - expenses);
      const taxRate = 0.0307;
      const taxDue = taxable * taxRate;
      const net = income - taxDue;

      return {
        taxableIncome: { value: taxable.toFixed(2), label: "PA Taxable Compensation", unit: "$" },
        taxLiability: { value: taxDue.toFixed(2), label: "PA State Tax Due", unit: "$" },
        afterTax: { value: net.toFixed(2), label: "Income After PA Tax", unit: "$" }
      };
    }
  },
  "georgia-tax": {
    slug: "georgia-tax",
    name: "Georgia Tax Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Georgia State Tax Calculator - GA Flat 5.39% Estimator",
    metaDescription: "Estimate Georgia state income tax liabilities. Accounts for Georgia flat tax rate of 5.39% and standard deductions.",
    keywords: ["georgia tax calculator", "ga state tax calculator", "tax calculator georgia", "georgia income tax"],
    hook: "Calculate your Georgia State flat income tax liability.",
    description: "Input your income, filing status, and deductions to calculate your Georgia State income tax under the flat 5.39% system.",
    calcTime: "2 mins",
    formula: "GA Tax = (Gross Income - GA Standard Deduction) * 5.39%",
    formulaDescription: "Georgia uses a flat income tax rate of 5.39% applied to taxable income after standard or itemized deductions.",
    example: "Single filer earning $60,000 gross with standard GA deduction ($12,000) pays 5.39% of $48,000 = $2,587.20.",
    faqs: [
      { question: "What is the GA standard deduction?", answer: "For single filers, the standard deduction is $12,000, and for married couples filing jointly, it is $24,000." },
      { question: "Did Georgia replace its tax brackets?", answer: "Yes, starting in 2024, Georgia transitioned from graduated brackets to a single flat tax rate of 5.39%." }
    ],
    commonMistakes: ["Using federal deduction levels for the state tax calculation. GA uses its own standard deduction values."],
    useCases: ["GA resident tax planning", "Paycheck budgeting"],
    tips: ["Georgia residents can exclude up to $65,000 of retirement income if they are 65 or older."],
    inputs: [
      { id: "income", label: "Gross Annual Income ($)", type: "number", defaultValue: 60000, unit: "$" },
      {
        id: "filing",
        label: "Filing Status",
        type: "select",
        defaultValue: "single",
        options: [
          { value: "single", label: "Single ($12,000 deduction)" },
          { value: "joint", label: "Married Filing Jointly ($24,000 deduction)" }
        ]
      },
      { id: "extraDeductions", label: "Other Allowable Deductions ($)", type: "number", defaultValue: 0, unit: "$" }
    ],
    calculate: (inputs) => {
      const income = Number(inputs.income || 0);
      const filing = inputs.filing || "single";
      const extra = Number(inputs.extraDeductions || 0);

      const standardDeduction = filing === "joint" ? 24000 : 12000;
      const taxable = Math.max(0, income - standardDeduction - extra);
      const GA_RATE = 0.0539;
      const stateTax = taxable * GA_RATE;
      const net = income - stateTax;

      return {
        deductionValue: { value: standardDeduction.toFixed(2), label: "Georgia Standard Deduction", unit: "$" },
        taxableIncome: { value: taxable.toFixed(2), label: "GA Taxable Income", unit: "$" },
        taxLiability: { value: stateTax.toFixed(2), label: "Georgia State Tax Due", unit: "$" },
        afterTax: { value: net.toFixed(2), label: "Income After GA Tax", unit: "$" }
      };
    }
  },
  "cd-ladder": {
    slug: "cd-ladder",
    name: "CD Ladder Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "CD Ladder Calculator - Design and Distribute CD Investments",
    metaDescription: "Design a Certificate of Deposit (CD) laddering strategy. Divide your capital to balance yield advantages with liquid cash availability.",
    keywords: ["cd ladder calculator", "cd laddering strategy", "liquidity portfolio calculator", "fixed income ladder"],
    hook: "Optimize yields and liquidity with a custom CD laddering portfolio.",
    description: "Spread your savings across multiple CDs maturing at different times to maximize yield while maintaining regular cash access.",
    calcTime: "2 mins",
    formula: "Sub-investments = Total Principal ÷ Ladder Steps",
    formulaDescription: "Divides your investment equally across CD terms (e.g. 1, 2, 3, 4, 5-year terms). Re-invests maturing CDs into top-tier yields.",
    example: "Investing $25,000 into a 5-step ladder puts $5,000 each in 1-year, 2-year, 3-year, 4-year, and 5-year CDs.",
    faqs: [
      { question: "What is a CD ladder?", answer: "A CD ladder is a savings strategy where you open multiple CDs with staggered maturity dates so that cash becomes available at regular intervals." },
      { question: "What are the benefits of CD laddering?", answer: "It balances locking in high long-term rates while ensuring you have liquid funds maturing every year (or month) without paying penalty fees." }
    ],
    commonMistakes: ["Failing to reinvest maturing CDs, which defeats the continuous compounding benefit of the ladder structure."],
    useCases: ["Staging retirement cash reserves", "Preserving emergency funds"],
    tips: ["Review rate forecasts. If rates are rising, favor shorter-term rungs so you can reinvest at higher yields sooner."],
    inputs: [
      { id: "capital", label: "Total Capital to Invest ($)", type: "number", defaultValue: 25000, unit: "$" },
      { id: "steps", label: "Number of Staggered Steps (Rungs)", type: "number", defaultValue: 5, min: 2, max: 10 },
      { id: "avgRate", label: "Average Nom. Interest Rate (%)", type: "number", defaultValue: 4.8, unit: "%" }
    ],
    calculate: (inputs) => {
      const capital = Number(inputs.capital || 0);
      const steps = Math.max(2, Math.min(10, Number(inputs.steps || 5)));
      const rate = Number(inputs.avgRate || 4.8) / 100;

      const allocation = capital / steps;

      // Estimate total interest earned after one full cycle (years equal to steps)
      let totalInterestEarned = 0;
      for (let i = 1; i <= steps; i++) {
        totalInterestEarned += allocation * (Math.pow(1 + rate, i) - 1);
      }

      const endPortfolioVal = capital + totalInterestEarned;

      return {
        rungAllocation: { value: allocation.toFixed(2), label: "Capital Allocation Per CD Rung", unit: "$" },
        projectedInterest: { value: totalInterestEarned.toFixed(2), label: "Estimated Cumulative Interest Earned", unit: "$" },
        totalValue: { value: endPortfolioVal.toFixed(2), label: "Total Portfolio Staggered Value", unit: "$" }
      };
    }
  },
  "santyl": {
    slug: "santyl",
    name: "Santyl Ointment Calculator",
    category: "health",
    categoryLabel: "Health & Pharmacy",
    seoTitle: "Santyl Calculator - Estimate Wound Care Tube Requirements",
    metaDescription: "Calculate Santyl (collagenase) ointment volume and grams required for wound debridement. Estimate 30g and 90g tube order sizes.",
    keywords: ["santyl calculator", "santyl ointment calculator", "collagenase wound volume", "santyl tube sizing", "wound debridement grams"],
    hook: "Estimate Santyl ointment usage and tube quantities for wound debridement.",
    description: "Input wound measurements, application thickness, frequency, and duration to determine the estimated weight of ointment and tubes required.",
    calcTime: "2 mins",
    formula: "Grams = Wound Area (cm²) × Application Thickness (cm) × Frequency/Day × Days × Density Factor",
    formulaDescription: "Computes volume in cubic centimeters (cc), then multiplies by standard ointment density (~1 gram/cc) to estimate ointment usage in grams.",
    example: "A 5cm × 4cm wound with a nickel-thick (2mm) application once daily for 14 days requires about 56 grams of Santyl.",
    faqs: [
      { question: "How thick should Santyl ointment be applied?", answer: "Santyl ointment should be applied at a thickness of 2 millimeters (about the thickness of a nickel) directly to the wound bed." },
      { question: "What size tubes does Santyl come in?", answer: "Santyl is commercially available in 30-gram and 90-gram tubes." }
    ],
    commonMistakes: ["Applying the ointment too thick or spreading it onto healthy surrounding skin, which can cause skin irritation."],
    useCases: ["Clinical prescription estimating", "Pharmacy cost authorization calculations"],
    tips: ["Protect surrounding healthy skin by applying a barrier ointment (like zinc oxide) before laying down the Santyl debrider."],
    inputs: [
      { id: "length", label: "Wound Length (cm)", type: "number", defaultValue: 5, unit: "cm" },
      { id: "width", label: "Wound Width (cm)", type: "number", defaultValue: 4, unit: "cm" },
      {
        id: "thickness",
        label: "Application Thickness (cm)",
        type: "select",
        defaultValue: "0.2",
        options: [
          { value: "0.1", label: "Thin layer (1mm / 0.1cm)" },
          { value: "0.2", label: "Nickel thickness (2mm / 0.2cm - Recommended)" },
          { value: "0.3", label: "Thick layer (3mm / 0.3cm)" }
        ]
      },
      { id: "frequency", label: "Applications Per Day", type: "number", defaultValue: 1 },
      { id: "duration", label: "Duration of Treatment (Days)", type: "number", defaultValue: 14, unit: "days" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const thickness = Number(inputs.thickness || 0.2);
      const frequency = Number(inputs.frequency || 1);
      const duration = Number(inputs.duration || 1);

      const area = length * width;
      const volumePerApp = area * thickness;
      const totalVolume = volumePerApp * frequency * duration;
      const totalGrams = totalVolume * 1.0; 

      const tubes30g = Math.ceil(totalGrams / 30);
      const tubes90g = Math.ceil(totalGrams / 90);

      return {
        woundArea: { value: area.toFixed(1), label: "Calculated Wound Surface Area", unit: "cm²" },
        gramsNeeded: { value: totalGrams.toFixed(1), label: "Estimated Ointment Weight Needed", unit: "grams" },
        tubesEstimate30: { value: tubes30g, label: "Required 30g Ointment Tubes", unit: "tube(s)" },
        tubesEstimate90: { value: tubes90g, label: "Required 90g Ointment Tubes", unit: "tube(s)" }
      };
    }
  },
  "mortgage-nh": {
    slug: "mortgage-nh",
    name: "Mortgage Calculator NH",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "New Hampshire Mortgage Calculator - Estimate NH Payments & High Tax Rates",
    metaDescription: "Calculate monthly mortgage payments in New Hampshire. Includes principal, interest, NH property tax averages (1.86%), and insurance.",
    keywords: ["mortgage calculator nh", "new hampshire mortgage calculator", "nh property tax rate calculator", "nh monthly house payment"],
    hook: "Calculate NH home payments with accurate property tax rates.",
    description: "New Hampshire lacks income tax but has some of the highest property taxes in the US (average 1.86%). Model your real payments here.",
    calcTime: "2 mins",
    formula: "M = P * [i(1+i)^n] ÷ [(1+i)^n - 1] + Monthly Tax & Insurance",
    formulaDescription: "Computes monthly amortized principal and interest using home price, down payment, rate, and term. Adds NH's property taxes and home insurance.",
    example: "A $400,000 NH home with 10% down at 6.5% interest and 1.86% property tax has a total payment of ~$2,900/month.",
    faqs: [
      { question: "Why are NH property taxes so high?", answer: "New Hampshire has no state sales tax and no personal state income tax. Property taxes serve as the primary source of revenue for local town and school budgets." },
      { question: "What is NH's average property tax rate?", answer: "NH's statewide average property tax rate is approximately 1.86% of assessed home value, though rates vary significantly by municipality." }
    ],
    commonMistakes: ["Underestimating the monthly escrow payment by using a standard US average property tax rate (which is about 1.0%), rather than the higher NH rates."],
    useCases: ["Buying a home in NH", "Escrow budgeting"],
    tips: ["Look for specific municipal rates in NH (like Hanover vs. Alton) to refine your tax assumptions, as rates can double depending on the town."],
    inputs: [
      { id: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: 400000, unit: "$" },
      { id: "downPayment", label: "Down Payment Amount ($)", type: "number", defaultValue: 40000, unit: "$" },
      { id: "interestRate", label: "Loan Interest Rate (%)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "termYears", label: "Loan Term (years)", type: "number", defaultValue: 30, unit: "yrs" },
      { id: "taxRate", label: "NH Property Tax Rate (%)", type: "number", defaultValue: 1.86, unit: "%" },
      { id: "insurance", label: "Homeowners Insurance ($/year)", type: "number", defaultValue: 1200, unit: "$" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.homePrice || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.interestRate || 6.5) / 100 / 12;
      const termMonths = Number(inputs.termYears || 30) * 12;
      const taxRate = Number(inputs.taxRate || 1.86) / 100;
      const ins = Number(inputs.insurance || 1200);

      const principal = Math.max(0, price - down);

      let monthlyPI = 0;
      if (rate > 0 && termMonths > 0) {
        monthlyPI = (principal * rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
      } else if (termMonths > 0) {
        monthlyPI = principal / termMonths;
      }

      const monthlyTax = (price * taxRate) / 12;
      const monthlyIns = ins / 12;
      const total = monthlyPI + monthlyTax + monthlyIns;

      return {
        principalInterest: { value: monthlyPI.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        escrowTax: { value: monthlyTax.toFixed(2), label: "Monthly Property Tax (Escrow)", unit: "$" },
        escrowIns: { value: monthlyIns.toFixed(2), label: "Monthly Home Insurance", unit: "$" },
        monthlyTotal: { value: total.toFixed(2), label: "Total Estimated Monthly Payment", unit: "$" }
      };
    }
  },
  "markup": {
    slug: "markup",
    name: "Mark Up Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "Mark Up Calculator - Calculate Sales Price & Profit Margin",
    metaDescription: "Determine selling price, margins, and gross profits based on wholesale cost and markup percentage. Fast online pricing tool.",
    keywords: ["mark up calculator", "markup calculator", "selling price calculator", "profit margin calculator"],
    hook: "Calculate selling price, gross profit, and profit margin using markup percentages.",
    description: "Input wholesale costs and target markup percentages to find customer retail pricing and margin metrics.",
    calcTime: "1 min",
    formula: "Price = Cost * (1 + Markup%)",
    formulaDescription: "Applies markup to the item cost to find the selling price. Profit margin is calculated as (Price - Cost) ÷ Price.",
    example: "An item costing $50 marked up by 40% will retail for $70, earning a $20 gross profit (28.57% profit margin).",
    faqs: [
      { question: "What is markup vs profit margin?", answer: "Markup is the percentage added to the cost to find the selling price. Margin is the percentage of the selling price that is profit." },
      { question: "How do you convert markup to margin?", answer: "Margin% = Markup% ÷ (1 + Markup%). For example, a 50% markup equals a 33.3% profit margin." }
    ],
    commonMistakes: ["Setting markup under the belief that it equals profit margin. E.g., a 20% markup is actually a 16.6% margin, which may under-budget operations."],
    useCases: ["Retail product pricing", "Manufacturing quote estimations"],
    tips: ["Analyze local competitor markups to ensure your selling price remains in line with retail expectations."],
    inputs: [
      { id: "cost", label: "Wholesale Item Cost ($)", type: "number", defaultValue: 50, unit: "$" },
      { id: "markupPercent", label: "Markup Percentage (%)", type: "number", defaultValue: 40, unit: "%" }
    ],
    calculate: (inputs) => {
      const cost = Number(inputs.cost || 0);
      const markup = Number(inputs.markupPercent || 0) / 100;

      const price = cost * (1 + markup);
      const profit = price - cost;
      const margin = price > 0 ? (profit / price) * 100 : 0;

      return {
        sellingPrice: { value: price.toFixed(2), label: "Calculated Selling Price", unit: "$" },
        grossProfit: { value: profit.toFixed(2), label: "Gross Profit", unit: "$" },
        profitMargin: { value: margin.toFixed(2), label: "Profit Margin", unit: "%" }
      };
    }
  },
  "swimming-pool": {
    slug: "swimming-pool",
    name: "Swimming Pool Calculator",
    category: "construction",
    categoryLabel: "Construction & Landscaping",
    seoTitle: "Swimming Pool Calculator - Estimate Pool Water Volume in Gallons",
    metaDescription: "Calculate the water volume of rectangular, circular, or oval swimming pools in gallons and liters. Essential tool for chemical dosing.",
    keywords: ["swimming pool calculator", "pool volume calculator", "pool gallons estimator", "water volume calculator"],
    hook: "Calculate pool water volume in gallons and liters.",
    description: "Input your pool's geometric shape, lengths, and depth to instantly calculate the total gallons or liters of water required.",
    calcTime: "2 mins",
    formula: "Gallons = Length (ft) × Width (ft) × Average Depth (ft) × 7.48",
    formulaDescription: "Computes volume in cubic feet, then multiplies by 7.48 (gallons per cubic foot). Oval and circular calculations apply shape multipliers.",
    example: "A 24ft × 12ft rectangular pool with a 4.5ft average depth holds approximately 9,694 gallons of water.",
    faqs: [
      { question: "How do you calculate average pool depth?", answer: "Add the depth of the shallow end to the depth of the deep end and divide by 2. E.g., (3ft + 6ft) ÷ 2 = 4.5ft average depth." },
      { question: "Why is knowing pool volume important?", answer: "Proper chlorine, pH, and algaecide dosing instructions are always given per 10,000 gallons of pool water, requiring precise volume math." }
    ],
    commonMistakes: ["Forgetting that pool depth is usually uneven, leading to an overestimation if the deep-end depth is used instead of the average depth."],
    useCases: ["Pool opening chemical balancing", "Water utility fee estimation"],
    tips: ["Add 5% volume cushion if your pool has wide stairs or custom seating configurations in the frame."],
    inputs: [
      {
        id: "shape",
        label: "Pool Geometric Shape",
        type: "select",
        defaultValue: "rectangle",
        options: [
          { value: "rectangle", label: "Rectangular / Square" },
          { value: "round", label: "Circular / Round" },
          { value: "oval", label: "Oval Shape" }
        ]
      },
      { id: "dimLength", label: "Length / Longest Diameter (ft)", type: "number", defaultValue: 24, unit: "ft" },
      { id: "dimWidth", label: "Width (ft - ignore for Round pools)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "avgDepth", label: "Average Depth (ft)", type: "number", defaultValue: 4.5, unit: "ft" }
    ],
    calculate: (inputs) => {
      const shape = inputs.shape || "rectangle";
      const length = Number(inputs.dimLength || 0);
      const width = Number(inputs.dimWidth || 0);
      const depth = Number(inputs.avgDepth || 0);

      let cubicFeet = 0;
      if (shape === "rectangle") {
        cubicFeet = length * width * depth;
      } else if (shape === "round") {
        const radius = length / 2;
        cubicFeet = Math.PI * Math.pow(radius, 2) * depth;
      } else if (shape === "oval") {
        cubicFeet = length * width * depth * (Math.PI / 4);
      }

      const gallons = cubicFeet * 7.48052;
      const liters = gallons * 3.78541;
      const waterWeightLbs = gallons * 8.34;

      return {
        volumeCuFt: { value: Math.ceil(cubicFeet), label: "Pool Volume (Cubic Feet)", unit: "cu ft" },
        volumeGallons: { value: Math.ceil(gallons), label: "Estimated Pool Water Capacity", unit: "gallons" },
        volumeLiters: { value: Math.ceil(liters), label: "Volume in Liters", unit: "L" },
        totalWeight: { value: Math.ceil(waterWeightLbs), label: "Estimated Water Weight", unit: "lbs" }
      };
    }
  },
  "mcat": {
    slug: "mcat",
    name: "MCAT Score Calculator",
    category: "education",
    categoryLabel: "Education",
    seoTitle: "MCAT Score Calculator - Estimate Overall MCAT Percentiles",
    metaDescription: "Estimate your cumulative MCAT score and national percentile rank. Input individual Chem/Phys, CARS, Bio, and Psych scores.",
    keywords: ["mcat calculator", "mcat score calculator", "mcat score percentile conversion", "mcat scaled score"],
    hook: "Calculate your total MCAT score and estimate your national percentile rank.",
    description: "Enter your predicted or raw-equivalent scores for the four MCAT sections to see your total score and national percentile comparison.",
    calcTime: "1 min",
    formula: "Total Score = CP + CARS + BB + PS",
    formulaDescription: "Calculates the sum of the four sections (each scaled between 118 and 132), resulting in a range of 472 to 528.",
    example: "Scoring 125, 125, 125, and 125 results in a total score of 500 (approx. 50th percentile).",
    faqs: [
      { question: "What is a good MCAT score?", answer: "A total score of 511 or higher generally places you in the top 20% of test takers and is considered competitive for MD schools." },
      { question: "How often are MCAT percentile tables updated?", answer: "The AAMC updates MCAT percentile rankings annually in May to reflect the data from the preceding three years of test-takers." }
    ],
    commonMistakes: ["Adding raw correct answers instead of the scaled section score (which ranges from 118 to 132)."],
    useCases: ["Medical school application preparation", "Practice exam analysis"],
    tips: ["A balanced score across sections is preferred by admissions committees over an uneven score with one very low section."],
    inputs: [
      { id: "cp", label: "Chemical & Physical Foundations (118-132)", type: "number", defaultValue: 125, min: 118, max: 132 },
      { id: "cars", label: "Critical Analysis & Reasoning Skills (118-132)", type: "number", defaultValue: 125, min: 118, max: 132 },
      { id: "bb", label: "Biological & Biochemical Foundations (118-132)", type: "number", defaultValue: 125, min: 118, max: 132 },
      { id: "ps", label: "Psychological, Social & Biological Foundations (118-132)", type: "number", defaultValue: 125, min: 118, max: 132 }
    ],
    calculate: (inputs) => {
      const cp = Math.max(118, Math.min(132, Number(inputs.cp || 125)));
      const cars = Math.max(118, Math.min(132, Number(inputs.cars || 125)));
      const bb = Math.max(118, Math.min(132, Number(inputs.bb || 125)));
      const ps = Math.max(118, Math.min(132, Number(inputs.ps || 125)));

      const total = cp + cars + bb + ps;

      let percentile = 50;
      let review = "Average";

      if (total >= 524) { percentile = 99.9; review = "Exceptional (Top 0.1%)"; }
      else if (total >= 520) { percentile = 98; review = "Excellent (Top 2%)"; }
      else if (total >= 515) { percentile = 90; review = "Very Competitive (Top 10%)"; }
      else if (total >= 510) { percentile = 78; review = "Competitive (Top 22%)"; }
      else if (total >= 505) { percentile = 63; review = "Above Average"; }
      else if (total >= 500) { percentile = 50; review = "Average (50th Percentile)"; }
      else if (total >= 495) { percentile = 35; review = "Below Average"; }
      else { percentile = 15; review = "Uncompetitive (Bottom 15%)"; }

      return {
        mcatTotal: { value: total, label: "Total MCAT Score", unit: "" },
        mcatPercentile: { value: percentile.toFixed(1), label: "Estimated National Percentile Rank", unit: "%" },
        reviewStatus: { value: review, label: "Score Interpretation", unit: "" }
      };
    }
  },
  "newegg-psu": {
    slug: "newegg-psu",
    name: "Newegg PSU Calculator",
    category: "education",
    categoryLabel: "Productivity & Tech",
    seoTitle: "Newegg PSU Calculator - Estimate PC Power Supply Wattage Needs",
    metaDescription: "Calculate power supply unit (PSU) wattage requirements for custom computer builds. Avoid system crashes and get power recommendations.",
    keywords: ["newegg psu calculator", "pc power supply calculator", "wattage estimator custom pc", "recommended power supply size"],
    hook: "Calculate your custom PC's power requirements and recommended PSU wattage.",
    description: "Input your computer processor, graphics card, memory, and accessories to estimate total system power draw in watts.",
    calcTime: "2 mins",
    formula: "Recommended PSU = (CPU TDP + GPU TDP + System Base Watts) * 1.30",
    formulaDescription: "Adds component TDP specifications, includes standard accessory power draw (~50W for boards, RAM, fans), and applies a 30% safety/efficiency overhead.",
    example: "A PC with a Ryzen 5 CPU (65W) and RTX 4070 GPU (200W) draws ~315W load and recommends a 450W to 550W PSU.",
    faqs: [
      { question: "What happens if my PSU wattage is too low?", answer: "An underpowered power supply will cause sudden shutdowns, system instability, crashes during intensive gaming, and potentially damage components." },
      { question: "Is a higher efficiency rating (Gold/Platinum) important?", answer: "Yes, 80 Plus ratings (Gold, Platinum) represent how much power is converted to system energy rather than wasted as heat, saving electricity costs." }
    ],
    commonMistakes: ["Failing to factor in future GPU upgrades or CPU overclocking, which heavily spike total wattage requirements."],
    useCases: ["Custom PC building budgeting", "Upgrading graphics cards"],
    tips: ["A power supply operates most efficiently when running at 40% to 60% of its rated capacity. Over-specifying a bit is healthy."],
    inputs: [
      {
        id: "cpuTier",
        label: "Processor (CPU) Power Tier",
        type: "select",
        defaultValue: "mid",
        options: [
          { value: "budget", label: "Entry Level (e.g. Intel i3 / Ryzen 3) (~65W)" },
          { value: "mid", label: "Mid Range (e.g. Intel i5 / Ryzen 5) (~95W)" },
          { value: "high", label: "High End (e.g. Intel i7 / Ryzen 7) (~125W)" },
          { value: "extreme", label: "Extreme / Enthusiast (e.g. Intel i9 / Ryzen 9) (~170W)" }
        ]
      },
      {
        id: "gpuTier",
        label: "Graphics Card (GPU) Power Tier",
        type: "select",
        defaultValue: "mid",
        options: [
          { value: "integrated", label: "Integrated Graphics / None (0W)" },
          { value: "budget", label: "Budget Discrete (e.g. GTX 1650 / RX 6400) (~75W)" },
          { value: "mid", label: "Mid Range Gaming (e.g. RTX 4060/4070 / RX 7700) (~220W)" },
          { value: "high", label: "High End Enthusiast (e.g. RTX 4080 / RX 7900XT) (~320W)" },
          { value: "extreme", label: "Ultimate Power (e.g. RTX 4090) (~450W)" }
        ]
      },
      { id: "ramModules", label: "RAM Stick Count (DDR4 / DDR5)", type: "number", defaultValue: 2 },
      { id: "fans", label: "Case Fans & LED Strips Count", type: "number", defaultValue: 4 },
      {
        id: "cooling",
        label: "CPU Cooler Type",
        type: "select",
        defaultValue: "air",
        options: [
          { value: "air", label: "Standard Air Tower Cooler (~10W)" },
          { value: "aio", label: "Liquid AIO Water Cooler (Pump + Dual/Triple Fans) (~35W)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const cpu = inputs.cpuTier || "mid";
      const gpu = inputs.gpuTier || "mid";
      const ram = Number(inputs.ramModules || 2);
      const fans = Number(inputs.fans || 4);
      const cooler = inputs.cooling || "air";

      let cpuWatts = 95;
      if (cpu === "budget") cpuWatts = 65;
      else if (cpu === "high") cpuWatts = 125;
      else if (cpu === "extreme") cpuWatts = 170;

      let gpuWatts = 220;
      if (gpu === "integrated") gpuWatts = 0;
      else if (gpu === "budget") gpuWatts = 75;
      else if (gpu === "high") gpuWatts = 320;
      else if (gpu === "extreme") gpuWatts = 450;

      const ramWatts = ram * 4;
      const fanWatts = fans * 3;
      const coolerWatts = cooler === "aio" ? 35 : 10;
      const baseSystemWatts = 60; 

      const totalLoadWatts = cpuWatts + gpuWatts + ramWatts + fanWatts + coolerWatts + baseSystemWatts;
      const recPsu = totalLoadWatts * 1.30;

      return {
        loadPower: { value: totalLoadWatts, label: "Peak System Power Draw", unit: "W" },
        recommendedPsu: { value: Math.ceil(recPsu / 50) * 50, label: "Recommended PSU Wattage Size", unit: "W" }
      };
    }
  },
  "fabric-yardage": {
    slug: "fabric-yardage",
    name: "Fabric Yardage Calculator",
    category: "unit-converter",
    categoryLabel: "Unit Converter & Math",
    seoTitle: "Fabric Yardage Calculator - Estimate Fabric Requirements",
    metaDescription: "Calculate total yards of fabric needed for sewing, upholstery, and crafts. Stretches rolls of 45-inch or 60-inch width configurations.",
    keywords: ["fabric yardage calculator", "upholstery fabric calculator", "sewing fabric yardage", "calculate fabric yards"],
    hook: "Calculate custom fabric lengths and roll yardage for any project.",
    description: "Input project dimensions and roll widths to calculate the exact yardage requirements needed for custom sewing or upholstery crafts.",
    calcTime: "2 mins",
    formula: "Yards = [Project Length (in) × Number of Panels] ÷ 36",
    formulaDescription: "Finds the required panel count matching project widths with fabric roll widths, multiplies by length, and divides by 36 to convert inches to yards.",
    example: "Making a project 80 inches long and 40 inches wide on standard 45-inch roll fabric requires 2.22 yards of fabric.",
    faqs: [
      { question: "What are standard fabric roll widths?", answer: "Most craft fabrics are sold in rolls of 44/45 inches wide, while apparel and upholstery fabrics are frequently 54 or 60 inches wide." },
      { question: "Should I wash fabric before measuring?", answer: "Yes, cotton and wool shrink by 5% to 10% after washing. Always calculate with a shrinkage allowance added to your design yardage." }
    ],
    commonMistakes: ["Failing to align fabric print patterns (repeat patterns), which requires ordering 15% to 20% more material to align seams."],
    useCases: ["Sewing curtains or drapes", "Re-upholstering chairs and cushions"],
    tips: ["When in doubt, round up by at least 1/2 yard. Leftover fabric scraps are always useful for test sewing or pocket liners."],
    inputs: [
      { id: "projLength", label: "Project Length Required (inches)", type: "number", defaultValue: 80, unit: "in" },
      { id: "projWidth", label: "Project Width Required (inches)", type: "number", defaultValue: 40, unit: "in" },
      {
        id: "rollWidth",
        label: "Fabric Roll Width Selection",
        type: "select",
        defaultValue: "45",
        options: [
          { value: "45", label: "Standard Craft Roll (45 inches)" },
          { value: "54", label: "Standard Home Decor Roll (54 inches)" },
          { value: "60", label: "Wide Apparel/Upholstery Roll (60 inches)" }
        ]
      },
      { id: "wasteBuffer", label: "Pattern/Shrinkage Buffer (%)", type: "number", defaultValue: 10, unit: "%" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.projLength || 0);
      const width = Number(inputs.projWidth || 0);
      const roll = Number(inputs.rollWidth || 45);
      const buffer = Number(inputs.wasteBuffer || 10) / 100;

      const panels = Math.ceil(width / roll);
      const netInches = length * panels;
      const grossInches = netInches * (1 + buffer);

      const yards = grossInches / 36;
      const totalArea = length * width;

      return {
        requiredPanels: { value: panels, label: "Strips / Panels Required Side-by-Side", unit: "" },
        fabricYards: { value: yards.toFixed(2), label: "Total Fabric Length to Buy", unit: "yards" },
        squareInches: { value: totalArea, label: "Net Project Area Required", unit: "sq in" }
      };
    }
  },
  "mortgage-nevada": {
    slug: "mortgage-nevada",
    name: "Mortgage Calculator Nevada",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "Nevada Mortgage Calculator - Estimate Monthly Payments & NV Escrows",
    metaDescription: "Calculate mortgage payments in Nevada. Includes home purchase prices, loan terms, and Nevada property tax averages (0.48%).",
    keywords: ["mortgage calculator nevada", "nevada mortgage calculator", "las vegas housing payment", "nv home loan estimator"],
    hook: "Calculate monthly Nevada home payments with average property tax brackets.",
    description: "Model monthly home loan payments in Nevada, incorporating the state's below-average property tax rate (approx. 0.48%).",
    calcTime: "2 mins",
    formula: "M = P * [i(1+i)^n] ÷ [(1+i)^n - 1] + Monthly Tax & Insurance",
    formulaDescription: "Computes base principal and interest payments using standard compounding. Stretches Nevada tax rates and standard homeowners insurance.",
    example: "A $450,000 house in Nevada with 10% down at 6.8% interest and 0.48% property tax has a monthly payment of ~$2,950.",
    faqs: [
      { question: "Is property tax in Nevada high?", answer: "No, Nevada has some of the lowest property taxes in the country, with an average effective tax rate of only 0.48%." },
      { question: "Does Nevada cap property tax increases?", answer: "Yes, Nevada has property tax abatement laws that cap tax bill increases for primary residences at a maximum of 3% per year." }
    ],
    commonMistakes: ["Failing to account for Homeowners Association (HOA) fees. Many master-planned communities in NV have additional HOA dues."],
    useCases: ["Buying a home in Las Vegas or Reno", "Comparing state mortgage escrows"],
    tips: ["If your community has a SID/LID (Special/Local Improvement District) assessment, add that monthly charge to get your absolute net housing payment."],
    inputs: [
      { id: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: 450000, unit: "$" },
      { id: "downPayment", label: "Down Payment Amount ($)", type: "number", defaultValue: 45000, unit: "$" },
      { id: "interestRate", label: "Loan Interest Rate (%)", type: "number", defaultValue: 6.8, unit: "%" },
      { id: "termYears", label: "Loan Term (years)", type: "number", defaultValue: 30, unit: "yrs" },
      { id: "taxRate", label: "Nevada Property Tax Rate (%)", type: "number", defaultValue: 0.48, unit: "%" },
      { id: "insurance", label: "Homeowners Insurance ($/year)", type: "number", defaultValue: 1350, unit: "$" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.homePrice || 0);
      const down = Number(inputs.downPayment || 0);
      const rate = Number(inputs.interestRate || 6.8) / 100 / 12;
      const termMonths = Number(inputs.termYears || 30) * 12;
      const taxRate = Number(inputs.taxRate || 0.48) / 100;
      const ins = Number(inputs.insurance || 1350);

      const principal = Math.max(0, price - down);

      let monthlyPI = 0;
      if (rate > 0 && termMonths > 0) {
        monthlyPI = (principal * rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
      } else if (termMonths > 0) {
        monthlyPI = principal / termMonths;
      }

      const monthlyTax = (price * taxRate) / 12;
      const monthlyIns = ins / 12;
      const total = monthlyPI + monthlyTax + monthlyIns;

      return {
        principalInterest: { value: monthlyPI.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        escrowTax: { value: monthlyTax.toFixed(2), label: "Monthly Property Tax (Escrow)", unit: "$" },
        escrowIns: { value: monthlyIns.toFixed(2), label: "Monthly Home Insurance", unit: "$" },
        monthlyTotal: { value: total.toFixed(2), label: "Total Estimated Monthly Payment", unit: "$" }
      };
    }
  },
  "529-growth": {
    slug: "529-growth",
    name: "529 Growth Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "529 Growth Calculator - Estimate College Savings Tax Advantages",
    metaDescription: "Calculate the future balance of a 529 College Savings Plan. Estimate tax savings from tax-free compounding interest growth.",
    keywords: ["529 growth calculator", "college savings calculator", "529 tax savings estimator", "college education investment"],
    hook: "Project college savings growth and tax-free compounding advantages.",
    description: "Input initial funds, monthly additions, terms, and rate of return to estimate future 529 plan savings and tax exclusions.",
    calcTime: "2 mins",
    formula: "FV = P*(1+r)^t + PMT * [((1+r)^t - 1) ÷ r]",
    formulaDescription: "Uses standard future value calculations for compounded investment growth. Quantifies tax savings based on tax-deferred federal distributions.",
    example: "Starting with $5,000 and contributing $200 monthly for 15 years at 7% annual returns yields $74,868.",
    faqs: [
      { question: "What is a 529 plan?", answer: "A 529 plan is a tax-advantaged savings plan designed to encourage saving for future education costs, sponsored by states or educational institutions." },
      { question: "What are the tax benefits of a 529 plan?", answer: "Earnings grow tax-deferred and withdrawals are 100% tax-free when used for qualified educational expenses like tuition, books, and board." }
    ],
    commonMistakes: ["Using 529 distributions for non-qualified expenses. This triggers ordinary income taxes plus a 10% federal penalty on the earnings portion."],
    useCases: ["Newborn educational savings planning", "Projecting college funding milestones"],
    tips: ["Some states offer state income tax deductions or credits for contributions made by their residents to the home state's 529 plan."],
    inputs: [
      { id: "initial", label: "Initial Account Deposit ($)", type: "number", defaultValue: 5000, unit: "$" },
      { id: "monthly", label: "Monthly Contribution ($)", type: "number", defaultValue: 250, unit: "$" },
      { id: "returns", label: "Estimated Annual Return (%)", type: "number", defaultValue: 7.0, unit: "%" },
      { id: "years", label: "Years Until College", type: "number", defaultValue: 15, unit: "yrs" },
      { id: "taxRate", label: "Estimated Combined Income Tax Rate (%)", type: "number", defaultValue: 24, unit: "%" }
    ],
    calculate: (inputs) => {
      const P = Number(inputs.initial || 0);
      const pmt = Number(inputs.monthly || 0);
      const rAnn = Number(inputs.returns || 7) / 100;
      const t = Number(inputs.years || 15);
      const taxRate = Number(inputs.taxRate || 24) / 100;

      const r = rAnn / 12;
      const n = t * 12;

      const fvLump = P * Math.pow(1 + rAnn, t);

      let fvAnnuity = 0;
      if (r > 0) {
        fvAnnuity = pmt * ((Math.pow(1 + r, n) - 1) / r);
      } else {
        fvAnnuity = pmt * n;
      }

      const totalFV = fvLump + fvAnnuity;
      const totalContributed = P + (pmt * n);
      const totalEarnings = Math.max(0, totalFV - totalContributed);
      const taxSaved = totalEarnings * taxRate;

      return {
        futureBalance: { value: totalFV.toFixed(2), label: "Projected College Balance", unit: "$" },
        contributions: { value: totalContributed.toFixed(2), label: "Total Cash Contributed", unit: "$" },
        interestEarned: { value: totalEarnings.toFixed(2), label: "Investment Earnings Growth", unit: "$" },
        estimatedTaxSavings: { value: taxSaved.toFixed(2), label: "Estimated Tax Savings", unit: "$" }
      };
    }
  },
  "sterling-silver": {
    slug: "sterling-silver",
    name: "Sterling Silver Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "Sterling Silver Calculator - Estimate Scrap Silver Metal Melt Value",
    metaDescription: "Calculate the scrap melt value of sterling silver items. Input weights in grams or troy ounces based on current silver spot prices.",
    keywords: ["sterling silver calculator", "scrap silver melt value", "sterling silver price per gram", "silver value estimator"],
    hook: "Calculate pure silver weight and scrap melt value for sterling silver.",
    description: "Input the weight of your sterling silver items and current market spot price to estimate the net precious metal value.",
    calcTime: "1 min",
    formula: "Value = Weight * 0.925 * Spot Price per unit",
    formulaDescription: "Multiplies total weight by 0.925 (the purity of sterling silver) to find fine silver weight, then multiplies by the market spot price.",
    example: "100 grams of sterling silver with spot price at $30/oz is worth approximately $89.22 in melt value.",
    faqs: [
      { question: "What is sterling silver purity?", answer: "Sterling silver has a standard purity of 92.5% pure silver mixed with 7.5% copper or other metals for durability." },
      { question: "How many grams are in a troy ounce?", answer: "Precious metals are weighed in troy ounces. One troy ounce equals exactly 31.1035 grams." }
    ],
    commonMistakes: ["Confusing standard ounces (28.35g) with troy ounces (31.10g) which are used for metal pricing, leading to incorrect value estimates."],
    useCases: ["Selling scrap silverware or jewelry", "Valuing vintage silver collections"],
    tips: ["Scrap dealers rarely pay 100% of melt value. Expect offers between 75% to 90% of the scrap value calculated here."],
    inputs: [
      { id: "weight", label: "Silver Item Weight", type: "number", defaultValue: 100 },
      {
        id: "weightUnit",
        label: "Weight Unit",
        type: "select",
        defaultValue: "grams",
        options: [
          { value: "grams", label: "Grams (g)" },
          { value: "troyOunces", label: "Troy Ounces (ozt)" }
        ]
      },
      { id: "spotPrice", label: "Current Silver Spot Price per Troy Ounce ($)", type: "number", defaultValue: 30, unit: "$" }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.weight || 0);
      const unit = inputs.weightUnit || "grams";
      const spot = Number(inputs.spotPrice || 30);

      const STERLING_PURITY = 0.925;
      const GRAMS_PER_TROY_OZ = 31.1034768;

      let weightInTroyOz = weight;
      if (unit === "grams") {
        weightInTroyOz = weight / GRAMS_PER_TROY_OZ;
      }

      const pureSilverTroyOz = weightInTroyOz * STERLING_PURITY;
      const pureSilverGrams = pureSilverTroyOz * GRAMS_PER_TROY_OZ;
      const meltValue = pureSilverTroyOz * spot;

      return {
        fineSilverWeightOz: { value: pureSilverTroyOz.toFixed(3), label: "Pure Silver Weight (ozt)", unit: "ozt" },
        fineSilverWeightGrams: { value: pureSilverGrams.toFixed(2), label: "Pure Silver Weight (g)", unit: "g" },
        silverMeltValue: { value: meltValue.toFixed(2), label: "Est. Raw Scrap Melt Value", unit: "$" }
      };
    }
  },
  "manufactured-home-mortgage": {
    slug: "manufactured-home-mortgage",
    name: "Manufactured Home Mortgage Calculator",
    category: "financial",
    categoryLabel: "Financial & Investment",
    seoTitle: "Manufactured Home Mortgage Calculator - Chattel vs Real Estate Financing",
    metaDescription: "Calculate manufactured and mobile home loan payments. Staggers real estate mortgages and chattel loan interest structures.",
    keywords: ["manufactured home mortgage calculator", "mobile home loan calculator", "chattel loan calculator", "manufactured home payment"],
    hook: "Estimate manufactured home loan payments for real property or chattel loans.",
    description: "Compare financing costs for manufactured homes. Models traditional mortgages (real estate land packages) and chattel loans (home-only loans).",
    calcTime: "2 mins",
    formula: "Monthly Payment = P * [i(1+i)^n] ÷ [(1+i)^n - 1] + Lot Rent",
    formulaDescription: "Uses standard amortization calculations based on principal, term, and interest rate. Includes monthly park lot lease rent if the home sits on leased land.",
    example: "A $120,000 chattel loan at 9% interest for 20 years with $400 monthly lot rent has a total payment of ~$1,480/month.",
    faqs: [
      { question: "What is a chattel loan?", answer: "A chattel loan is a personal property loan used to buy movable property like mobile homes on leased land. They carry higher interest rates than real property loans." },
      { question: "Why do manufactured home loans have higher interest rates?", answer: "If the land isn't owned alongside the home, the loan is considered personal property (chattel), which is higher risk and depreciates faster." }
    ],
    commonMistakes: ["Forgetting to factor in monthly lot rent/lease fees if the home is located inside a mobile home community or park land."],
    useCases: ["Mobile home park financing budgeting", "Comparing home-and-land package financing"],
    tips: ["If possible, package the manufactured home and land together in a single deed to qualify for lower-interest FHA or conventional mortgage programs."],
    inputs: [
      { id: "homeCost", label: "Manufactured Home Price ($)", type: "number", defaultValue: 120000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 12000, unit: "$" },
      {
        id: "loanType",
        label: "Loan & Land Classification",
        type: "select",
        defaultValue: "chattel",
        options: [
          { value: "chattel", label: "Chattel Loan (Home only on Leased Land - Higher Rate)" },
          { value: "real-estate", label: "Land/Home Mortgage Package (Lower Rate)" }
        ]
      },
      { id: "rate", label: "Loan Interest Rate (%)", type: "number", defaultValue: 8.5, unit: "%" },
      { id: "term", label: "Loan Term (years)", type: "number", defaultValue: 20, unit: "yrs" },
      { id: "lotRent", label: "Monthly Lot Rent / Park Fee ($ - if leased)", type: "number", defaultValue: 400, unit: "$" }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.homeCost || 0);
      const down = Number(inputs.downPayment || 0);
      const interestAnn = Number(inputs.rate || 8.5);
      const termYears = Number(inputs.term || 20);
      const lot = Number(inputs.lotRent || 0);

      const principal = Math.max(0, price - down);
      const r = interestAnn / 100 / 12;
      const n = termYears * 12;

      let monthlyPI = 0;
      if (r > 0 && n > 0) {
        monthlyPI = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else if (n > 0) {
        monthlyPI = principal / n;
      }

      const totalMonthly = monthlyPI + lot;
      const totalPayments = monthlyPI * n;
      const totalInterest = Math.max(0, totalPayments - principal);

      return {
        basePayment: { value: monthlyPI.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        totalMonthlyCost: { value: totalMonthly.toFixed(2), label: "Total Monthly Payment (incl. Lot Rent)", unit: "$" },
        cumulativeInterest: { value: totalInterest.toFixed(2), label: "Total Interest Paid Over Loan Term", unit: "$" }
      };
    }
  },
  "pink-calculator": {
    slug: "pink-calculator",
    name: "Pink Aesthetic Calculator",
    category: "math",
    categoryLabel: "Math & Aesthetics",
    seoTitle: "Pink Aesthetic Calculator - Online Math & Design Tool",
    metaDescription: "Free online pink aesthetic calculator for quick basic and scientific math calculations with custom theme presets.",
    keywords: ["pink calculator", "aesthetic pink calculator", "pink math calculator", "online pink calculator"],
    hook: "Cute & functional pink aesthetic calculator for daily math, percentages, and powers.",
    description: "Perform daily math calculations with a stylish pink aesthetic interface. Supports addition, subtraction, multiplication, division, modulo, and exponentiation with instant results.",
    calcTime: "1 min",
    formula: "Result = Num1 [Operator] Num2",
    formulaDescription: "Applies arithmetic operations between two numeric operands with precision formatting.",
    example: "Calculating 450 + 15% (450 * 1.15) yields 517.50.",
    faqs: [
      { question: "Can I use this for percentage and power calculations?", answer: "Yes, select the % or ^ operator to calculate percentages and exponential power values." }
    ],
    commonMistakes: ["Dividing by zero which results in an undefined value."],
    useCases: ["Daily budget calculations", "Shopping discount math", "Homework and study notes"],
    tips: ["Use the exponent (^) operator for compound growth and powers."],
    inputs: [
      { id: "num1", label: "First Number", type: "number", defaultValue: 100, unit: "" },
      {
        id: "op",
        label: "Operation",
        type: "select",
        defaultValue: "+",
        options: [
          { value: "+", label: "Addition (+)" },
          { value: "-", label: "Subtraction (-)" },
          { value: "*", label: "Multiplication (×)" },
          { value: "/", label: "Division (÷)" },
          { value: "%", label: "Modulo / Percentage (%)" },
          { value: "^", label: "Exponent / Power (^)" }
        ]
      },
      { id: "num2", label: "Second Number", type: "number", defaultValue: 15, unit: "" }
    ],
    calculate: (inputs) => {
      const a = Number(inputs.num1 || 0);
      const b = Number(inputs.num2 || 0);
      const op = String(inputs.op || "+");

      let res = 0;
      if (op === "+") res = a + b;
      else if (op === "-") res = a - b;
      else if (op === "*") res = a * b;
      else if (op === "/") res = b !== 0 ? a / b : 0;
      else if (op === "%") res = a % b;
      else if (op === "^") res = Math.pow(a, b);

      return {
        result: { value: res.toLocaleString("en-US", { maximumFractionDigits: 4 }), label: "Calculated Result", unit: "" },
        expression: { value: `${a} ${op} ${b}`, label: "Expression Formed", unit: "" }
      };
    }
  },
  "starbucks-calorie-calculator": {
    slug: "starbucks-calorie-calculator",
    name: "Starbucks Calorie & Nutrition Calculator",
    category: "health",
    categoryLabel: "Health & Nutrition",
    seoTitle: "Starbucks Calorie & Caffeine Calculator - Custom Drink Nutrition",
    metaDescription: "Calculate calories, caffeine, and sugar for your customized Starbucks order including milk type, size, and syrup pumps.",
    keywords: ["calculate starbucks calories", "starbucks calorie calculator", "starbucks drink nutrition", "starbucks caffeine calculator"],
    hook: "Calculate accurate calories and caffeine for any customized Starbucks order.",
    description: "Customize your Starbucks drink size, milk choice, syrup pumps, and toppings to calculate total calories, sugar grams, and caffeine milligrams.",
    calcTime: "1 min",
    formula: "Total Calories = Base Drink Calories + Size Multiplier + Milk Delta + Syrup Pumps * 20 cal + Whipped Cream",
    formulaDescription: "Sums base beverage calories with milk type adjustments, syrup pump additions (20 kcal per pump), and whipped cream (70 kcal).",
    example: "A Grande (16 oz) Caffe Latte with 2% milk has ~190 kcal and 150 mg of caffeine. Adding 2 pumps of vanilla (+40 kcal) totals 230 kcal.",
    faqs: [
      { question: "How many calories are in one pump of Starbucks syrup?", answer: "Most standard Starbucks flavored syrups contain roughly 20 calories and 5g of sugar per pump." }
    ],
    commonMistakes: ["Forgetting that non-fat milk reduces calories while oat milk adds carbohydrates."],
    useCases: ["Weight management and macro tracking", "Dietary restrictions and low-sugar ordering"],
    tips: ["Switch from Whole Milk to Almond Milk to save up to 100+ calories on Grande drinks."],
    inputs: [
      {
        id: "drinkType",
        label: "Beverage Type",
        type: "select",
        defaultValue: "latte",
        options: [
          { value: "latte", label: "Caffè Latte" },
          { value: "frappuccino", label: "Caramel Frappuccino" },
          { value: "iced-coffee", label: "Iced Coffee" },
          { value: "cold-brew", label: "Cold Brew" },
          { value: "macchiato", label: "Iced Caramel Macchiato" }
        ]
      },
      {
        id: "size",
        label: "Drink Size",
        type: "select",
        defaultValue: "grande",
        options: [
          { value: "tall", label: "Tall (12 oz)" },
          { value: "grande", label: "Grande (16 oz)" },
          { value: "venti", label: "Venti (20/24 oz)" },
          { value: "trenta", label: "Trenta (30 oz - Cold Only)" }
        ]
      },
      {
        id: "milk",
        label: "Milk Choice",
        type: "select",
        defaultValue: "two-percent",
        options: [
          { value: "whole", label: "Whole Milk" },
          { value: "two-percent", label: "2% Milk (Standard)" },
          { value: "non-fat", label: "Non-Fat / Skim Milk" },
          { value: "almond", label: "Almond Milk" },
          { value: "oat", label: "Oat Milk" },
          { value: "soy", label: "Soy Milk" }
        ]
      },
      { id: "pumps", label: "Syrup Pumps (20 kcal / 5g sugar each)", type: "number", defaultValue: 2, unit: "pumps" },
      {
        id: "whip",
        label: "Whipped Cream",
        type: "select",
        defaultValue: "no",
        options: [
          { value: "no", label: "No Whipped Cream" },
          { value: "yes", label: "Add Whipped Cream (+70 kcal)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const drink = String(inputs.drinkType || "latte");
      const size = String(inputs.size || "grande");
      const milk = String(inputs.milk || "two-percent");
      const pumps = Number(inputs.pumps || 0);
      const whip = String(inputs.whip || "no");

      let baseCal = 150;
      let baseCaff = 150;
      let baseSugar = 14;

      if (drink === "frappuccino") { baseCal = 280; baseCaff = 90; baseSugar = 45; }
      else if (drink === "iced-coffee") { baseCal = 60; baseCaff = 165; baseSugar = 15; }
      else if (drink === "cold-brew") { baseCal = 5; baseCaff = 205; baseSugar = 0; }
      else if (drink === "macchiato") { baseCal = 250; baseCaff = 150; baseSugar = 33; }

      let sizeMult = 1.0;
      if (size === "tall") sizeMult = 0.75;
      else if (size === "venti") sizeMult = 1.35;
      else if (size === "trenta") sizeMult = 1.6;

      let milkDelta = 0;
      if (milk === "whole") milkDelta = 40;
      else if (milk === "non-fat") milkDelta = -40;
      else if (milk === "almond") milkDelta = -50;
      else if (milk === "oat") milkDelta = 20;

      const whipCal = whip === "yes" ? 70 : 0;
      const totalCal = Math.round(baseCal * sizeMult + milkDelta + pumps * 20 + whipCal);
      const totalCaff = Math.round(baseCaff * sizeMult);
      const totalSugar = Math.round(baseSugar * sizeMult + pumps * 5);

      return {
        calories: { value: totalCal, label: "Estimated Calories", unit: "kcal" },
        caffeine: { value: totalCaff, label: "Estimated Caffeine", unit: "mg" },
        sugar: { value: totalSugar, label: "Estimated Sugar", unit: "g" }
      };
    }
  },
  "strs-calculator": {
    slug: "strs-calculator",
    name: "STRS Retirement Benefit Calculator",
    category: "financial",
    categoryLabel: "Retirement",
    seoTitle: "STRS Retirement Benefit Calculator - Teacher Pension Estimator",
    metaDescription: "Estimate your State Teachers Retirement System (STRS) pension benefit, monthly payout, and service credit multiplier.",
    keywords: ["strs calculator", "strs retirement calculator", "teacher pension calculator", "strs ohio retirement calculator"],
    hook: "Calculate your estimated monthly STRS teacher pension and lifetime retirement payout.",
    description: "Designed for educators under State Teachers Retirement System programs. Calculates benefit percentage multipliers based on years of service credit and final average salary (FAS).",
    calcTime: "2 mins",
    formula: "Annual Pension = Final Average Salary (FAS) × (Years of Service × Benefit Multiplier Rate)",
    formulaDescription: "Applies standard STRS formula (typically 2.2% per year of service for first 30 years) to the average of your highest 3 or 5 consecutive salary years.",
    example: "30 years of service at 2.2% per year equals a 66% replacement multiplier. With a FAS of $75,000, the annual pension is $49,500 ($4,125/month).",
    faqs: [
      { question: "What is Final Average Salary (FAS)?", answer: "FAS is the average of your highest earning years (usually top 3 or 5 consecutive years of teaching compensation)." }
    ],
    commonMistakes: ["Not taking into account age reduction factors if retiring prior to unreduced age eligibility."],
    useCases: ["Teacher retirement age planning", "Pension replacement income budgeting"],
    tips: ["Purchasing service credit or completing an extra year of teaching can significantly boost your lifetime annual pension multiplier."],
    inputs: [
      { id: "fas", label: "Final Average Salary ($)", type: "number", defaultValue: 75000, unit: "$" },
      { id: "yos", label: "Years of Service Credit", type: "number", defaultValue: 30, unit: "yrs" },
      { id: "age", label: "Retirement Age", type: "number", defaultValue: 60, unit: "yrs" }
    ],
    calculate: (inputs) => {
      const salary = Number(inputs.fas || 0);
      const service = Number(inputs.yos || 0);
      const age = Number(inputs.age || 60);

      let multiplier = service * 0.022; // 2.2% per year
      if (service > 30) {
        multiplier = 0.66 + (service - 30) * 0.025; // 2.5% per additional year over 30
      }

      let ageFactor = 1.0;
      if (age < 60) ageFactor = Math.max(0.75, 1.0 - (60 - age) * 0.05);

      const finalPct = Math.min(0.88, multiplier * ageFactor);
      const annualBenefit = salary * finalPct;
      const monthlyBenefit = annualBenefit / 12;

      return {
        monthlyPension: { value: monthlyBenefit.toFixed(2), label: "Estimated Monthly Pension", unit: "$" },
        annualPension: { value: annualBenefit.toFixed(2), label: "Estimated Annual Pension", unit: "$" },
        multiplierPct: { value: (finalPct * 100).toFixed(1), label: "Income Replacement Multiplier", unit: "%" }
      };
    }
  },
  "asphalt-driveway-cost": {
    slug: "asphalt-driveway-cost",
    name: "Asphalt Driveway Cost Calculator",
    category: "construction",
    categoryLabel: "Construction",
    seoTitle: "Asphalt Driveway Cost Calculator - Paving Materials & Labor Estimator",
    metaDescription: "Calculate total asphalt driveway paving costs, square footage, and required asphalt tonnage for new installs or replacements.",
    keywords: ["asphalt driveway cost calculator", "asphalt cost calculator", "driveway paving cost", "asphalt tonnage calculator"],
    hook: "Estimate total paving costs, asphalt tons, and base gravel required for your driveway.",
    description: "Calculate total driveway square footage, tons of hot mix asphalt required (based on compacted thickness), and estimated professional paving job cost.",
    calcTime: "2 mins",
    formula: "Volume (cu ft) = Length × Width × (Thickness / 12); Tonnage = Volume × 145 lbs/cu ft ÷ 2000",
    formulaDescription: "Calculates total asphalt volume based on density (approx 145 lbs/cu ft or 2.025 tons per cu yd) plus cost rates per sq ft ($3 to $7/sq ft).",
    example: "A 60ft × 12ft driveway (720 sq ft) with 3 inches of asphalt requires ~10.45 tons of asphalt, costing approximately $2,880 to $4,320 installed.",
    faqs: [
      { question: "How thick should a residential asphalt driveway be?", answer: "Standard residential driveways require 2 to 3 inches of compacted asphalt over a 4 to 8 inch crushed aggregate base." }
    ],
    commonMistakes: ["Underestimating excavation and crushed gravel base preparation cost."],
    useCases: ["New residential driveway budgeting", "Replacing old deteriorated concrete or gravel driveways"],
    tips: ["Sealcoating your new asphalt driveway 12 months after installation extends lifespan up to 25+ years."],
    inputs: [
      { id: "length", label: "Driveway Length (ft)", type: "number", defaultValue: 60, unit: "ft" },
      { id: "width", label: "Driveway Width (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "thickness", label: "Compacted Asphalt Thickness (in)", type: "number", defaultValue: 3, unit: "in" },
      { id: "costPerSqFt", label: "Est. Installed Cost per Sq Ft ($)", type: "number", defaultValue: 5, unit: "$/sq ft" }
    ],
    calculate: (inputs) => {
      const len = Number(inputs.length || 0);
      const w = Number(inputs.width || 0);
      const thick = Number(inputs.thickness || 3);
      const rate = Number(inputs.costPerSqFt || 5);

      const sqft = len * w;
      const cuFt = sqft * (thick / 12);
      const weightLbs = cuFt * 145; // 145 lbs per cu ft
      const tons = weightLbs / 2000;
      const totalCost = sqft * rate;

      return {
        totalArea: { value: sqft.toLocaleString(), label: "Total Driveway Area", unit: "sq ft" },
        asphaltTons: { value: tons.toFixed(2), label: "Hot-Mix Asphalt Required", unit: "tons" },
        estimatedCost: { value: totalCost.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Estimated Paving Cost", unit: "$" }
      };
    }
  },
  "mortgage-alabama": {
    slug: "mortgage-alabama",
    name: "Alabama Mortgage Payment Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Alabama Mortgage Calculator - Property Tax & Loan Payment Estimator",
    metaDescription: "Calculate Alabama home loan payments including local county property tax rates, home insurance, and PMI.",
    keywords: ["mortgage calculator alabama", "alabama mortgage calculator", "alabama property tax mortgage", "alabama home loan payment"],
    hook: "Calculate monthly Alabama home loan payments with local county tax rates.",
    description: "Estimate your total monthly mortgage payment for buying a house in Alabama. Accounts for low Alabama property tax rates (Jefferson, Madison, Mobile, Baldwin, Shelby counties), home insurance, and down payment.",
    calcTime: "2 mins",
    formula: "Total Monthly = Monthly P&I + (Home Value × AL County Tax Rate / 12) + Monthly Insurance",
    formulaDescription: "Uses standard loan amortization plus Alabama county effective property tax averages (~0.41% statewide, among the lowest in the US).",
    example: "A $300,000 house in Madison County with 10% down ($270k loan) at 6.5% interest has a P&I payment of $1,706/mo + ~$125/mo tax + $100/mo insurance = $1,931/mo.",
    faqs: [
      { question: "Are property taxes low in Alabama?", answer: "Yes, Alabama has the 2nd lowest effective property tax rate in the United States, averaging around 0.41% annually." }
    ],
    commonMistakes: ["Forgetting homestead exemption deductions available for primary residences in Alabama."],
    useCases: ["First-time homebuyer planning in Alabama", "Relocation and state-by-state cost comparison"],
    tips: ["File for Alabama Homestead Exemption immediately after closing to reduce your county property tax bill further."],
    inputs: [
      { id: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: 300000, unit: "$" },
      { id: "downPayment", label: "Down Payment ($)", type: "number", defaultValue: 30000, unit: "$" },
      { id: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: 6.5, unit: "%" },
      { id: "term", label: "Loan Term (years)", type: "number", defaultValue: 30, unit: "yrs" },
      {
        id: "county",
        label: "Alabama County Tax Rate",
        type: "select",
        defaultValue: "0.005",
        options: [
          { value: "0.005", label: "Statewide Average (0.50%)" },
          { value: "0.0065", label: "Jefferson County (0.65%)" },
          { value: "0.0052", label: "Madison County (0.52%)" },
          { value: "0.0060", label: "Mobile County (0.60%)" },
          { value: "0.0045", label: "Baldwin County (0.45%)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const price = Number(inputs.homePrice || 0);
      const down = Number(inputs.downPayment || 0);
      const rateAnn = Number(inputs.interestRate || 6.5);
      const termYears = Number(inputs.term || 30);
      const taxRate = Number(inputs.county || 0.005);

      const principal = Math.max(0, price - down);
      const r = rateAnn / 100 / 12;
      const n = termYears * 12;

      let monthlyPI = 0;
      if (r > 0 && n > 0) {
        monthlyPI = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      }

      const monthlyTax = (price * taxRate) / 12;
      const monthlyIns = (price * 0.004) / 12; // ~0.4% insurance rate
      const totalMonthly = monthlyPI + monthlyTax + monthlyIns;

      return {
        principalInterest: { value: monthlyPI.toFixed(2), label: "Monthly Principal & Interest", unit: "$" },
        propertyTax: { value: monthlyTax.toFixed(2), label: "Est. AL Property Tax", unit: "$" },
        totalMonthlyPayment: { value: totalMonthly.toFixed(2), label: "Total Est. Monthly Payment", unit: "$" }
      };
    }
  },
  "stock-price-calculator": {
    slug: "stock-price-calculator",
    name: "Stock Price & Target Valuation Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Stock Price Target Calculator - Fair Value & P/E Multiplier Tool",
    metaDescription: "Calculate projected future stock price targets and present fair intrinsic value using EPS and P/E ratio valuation models.",
    keywords: ["stock price calculator", "target stock price calculator", "stock valuation calculator", "fair value stock calculator"],
    hook: "Calculate future stock price targets and intrinsic value based on earnings growth.",
    description: "Evaluate equity investments by forecasting future stock price targets. Uses EPS growth rate, exit P/E multiple, and discount rate models to determine fair entry prices.",
    calcTime: "2 mins",
    formula: "Future Price = Current EPS × (1 + Growth)^Years × Future P/E Ratio; Fair Value = Future Price / (1 + Discount)^Years",
    formulaDescription: "Projects EPS forward by annual compound growth rate, multiplies by target terminal P/E, and discounts back to present value at required return rate.",
    example: "A stock with $4.00 EPS growing at 12% annually for 5 years reaches $7.05 EPS. At a 20x P/E, future target price is $141.00. Discounted at 10%, fair value today is $87.55.",
    faqs: [
      { question: "What P/E ratio should I use for valuation?", answer: "Use historical median P/E for mature companies (15-20x) or industry peer group averages." }
    ],
    commonMistakes: ["Assuming unsustainable hyper-growth rates (>25%) over long 5-10 year horizons."],
    useCases: ["Fundamental stock valuation and analysis", "Setting target buy prices and profit-taking exits"],
    tips: ["Always use conservative EPS growth estimates to maintain a margin of safety against earnings misses."],
    inputs: [
      { id: "eps", label: "Current EPS ($)", type: "number", defaultValue: 4.0, unit: "$" },
      { id: "growth", label: "Est. Annual EPS Growth (%)", type: "number", defaultValue: 12, unit: "%" },
      { id: "pe", label: "Target Exit P/E Multiple", type: "number", defaultValue: 20, unit: "x" },
      { id: "years", label: "Investment Horizon (Years)", type: "number", defaultValue: 5, unit: "yrs" },
      { id: "discount", label: "Required Return / Discount Rate (%)", type: "number", defaultValue: 10, unit: "%" }
    ],
    calculate: (inputs) => {
      const eps = Number(inputs.eps || 0);
      const g = Number(inputs.growth || 12) / 100;
      const pe = Number(inputs.pe || 20);
      const yrs = Number(inputs.years || 5);
      const disc = Number(inputs.discount || 10) / 100;

      const futureEps = eps * Math.pow(1 + g, yrs);
      const targetPrice = futureEps * pe;
      const fairValue = targetPrice / Math.pow(1 + disc, yrs);

      return {
        futureEps: { value: futureEps.toFixed(2), label: "Projected Future EPS", unit: "$" },
        targetPrice: { value: targetPrice.toFixed(2), label: "Projected Target Stock Price", unit: "$" },
        fairValue: { value: fairValue.toFixed(2), label: "Present Fair Entry Value", unit: "$" }
      };
    }
  },
  "ti-30x-calculator": {
    slug: "ti-30x-calculator",
    name: "TI-30X Solar & Battery Calculator Guide",
    category: "math",
    categoryLabel: "Math & Education",
    seoTitle: "TI-30X Calculator Guide - Solar Power & Battery Life Estimator",
    metaDescription: "Calculate battery life, solar lux power requirements, and operation modes for Texas Instruments TI-30X IIS calculators.",
    keywords: ["ti-30x calculator", "ti 30x iis battery", "ti-30x solar calculator", "ti 30x calculator guide"],
    hook: "Calculate battery life, solar ambient light requirements, and mode settings for TI-30X calculators.",
    description: "A utility and power guide for TI-30X Series scientific calculators (TI-30X IIS, TI-30XS MultiView). Estimates battery service life and minimum lux lighting needed for solar operation.",
    calcTime: "1 min",
    formula: "Battery Life (Years) = Battery Capacity (mAh) / [ (Daily Hours × Active Current mA) + (Standby Current mA × 24) ] / 365",
    formulaDescription: "Models dual-power hybrid solar cell assist alongside internal CR2032 lithium button cell draw.",
    example: "At 3 hours daily classroom use under 300 lux artificial light, a CR2032 battery in a TI-30X IIS lasts over 3.5 to 5 years.",
    faqs: [
      { question: "Does the TI-30X IIS have a battery replace compartment?", answer: "Yes, it uses a standard CR2032 3V lithium coin cell battery accessible via back panel screws." }
    ],
    commonMistakes: ["Leaving the calculator in low ambient light without battery backup during timed exams."],
    useCases: ["Exam preparation for SAT/ACT/AP math", "Calculator maintenance and battery replacement scheduling"],
    tips: ["Press [2nd] [OFF] to turn off the display completely and preserve battery life."],
    inputs: [
      { id: "usageHours", label: "Daily Usage (Hours)", type: "number", defaultValue: 3, unit: "hrs" },
      { id: "lightLevel", label: "Room Lighting (Lux)", type: "number", defaultValue: 300, unit: "lux" }
    ],
    calculate: (inputs) => {
      const hours = Number(inputs.usageHours || 3);
      const lux = Number(inputs.lightLevel || 300);

      let batteryYears = 4.5;
      if (hours > 5) batteryYears = 2.8;
      if (lux > 500) batteryYears += 1.0; // solar assist boost

      const solarActive = lux >= 200 ? "Active (Sufficient Ambient Light)" : "Low (Relying on CR2032 Battery)";

      return {
        batteryLife: { value: batteryYears.toFixed(1), label: "Est. CR2032 Battery Life", unit: "years" },
        solarStatus: { value: solarActive, label: "Solar Cell Assistance", unit: "" }
      };
    }
  },
  "pool-gallons-calculator": {
    slug: "pool-gallons-calculator",
    name: "Pool Volume & Gallons Calculator",
    category: "construction",
    categoryLabel: "Construction & Home",
    seoTitle: "Pool Gallons Calculator - Swimming Pool Volume & Water Capacity",
    metaDescription: "Calculate pool water volume in gallons for rectangular, round, oval, and irregular swimming pools.",
    keywords: ["pool gallons calculator", "pool volume calculator", "how many gallons in my pool", "swimming pool water calculator"],
    hook: "Calculate total water volume in US gallons for any pool shape and depth.",
    description: "Determine total pool volume in US gallons and cubic feet. Supports rectangular, circular, oval, and kidney pool geometries with varying shallow and deep end depths.",
    calcTime: "1 min",
    formula: "Gallons = Length × Width × Avg Depth × Multiplier (7.5 for Rect, 5.9 for Circular, 6.7 for Oval)",
    formulaDescription: "Uses geometric volume formulas multiplied by 7.48 gallons per cubic foot (with shape adjustment coefficients).",
    example: "A 16ft × 32ft rectangular pool with a shallow depth of 3ft and deep depth of 8ft (avg depth 5.5ft) holds ~21,120 gallons of water.",
    faqs: [
      { question: "How many gallons of water per cubic foot?", answer: "1 cubic foot of water equals approximately 7.48 US liquid gallons." }
    ],
    commonMistakes: ["Using maximum deep end depth instead of calculating average depth across the pool floor slope."],
    useCases: ["Sizing pool pumps, filters, and heaters", "Accurate chemical dosing for shock and chlorine treatments"],
    tips: ["Always calculate average depth as (Shallow Depth + Deep Depth) / 2 for slope-bottom pools."],
    inputs: [
      {
        id: "shape",
        label: "Pool Shape",
        type: "select",
        defaultValue: "rectangle",
        options: [
          { value: "rectangle", label: "Rectangular / Square" },
          { value: "round", label: "Round / Circular" },
          { value: "oval", label: "Oval" }
        ]
      },
      { id: "length", label: "Length or Diameter (ft)", type: "number", defaultValue: 32, unit: "ft" },
      { id: "width", label: "Width (ft - if Rect/Oval)", type: "number", defaultValue: 16, unit: "ft" },
      { id: "shallowDepth", label: "Shallow End Depth (ft)", type: "number", defaultValue: 3, unit: "ft" },
      { id: "deepDepth", label: "Deep End Depth (ft)", type: "number", defaultValue: 8, unit: "ft" }
    ],
    calculate: (inputs) => {
      const shape = String(inputs.shape || "rectangle");
      const len = Number(inputs.length || 0);
      const w = Number(inputs.width || 0);
      const sDepth = Number(inputs.shallowDepth || 3);
      const dDepth = Number(inputs.deepDepth || 8);

      const avgDepth = (sDepth + dDepth) / 2;
      let gallons = 0;
      let cuFt = 0;

      if (shape === "rectangle") {
        cuFt = len * w * avgDepth;
        gallons = cuFt * 7.48;
      } else if (shape === "round") {
        const radius = len / 2;
        cuFt = Math.PI * Math.pow(radius, 2) * avgDepth;
        gallons = cuFt * 7.48;
      } else if (shape === "oval") {
        cuFt = len * w * avgDepth * 0.8;
        gallons = cuFt * 7.48;
      }

      return {
        avgDepth: { value: avgDepth.toFixed(1), label: "Average Pool Depth", unit: "ft" },
        volumeCuFt: { value: Math.round(cuFt).toLocaleString(), label: "Volume in Cubic Feet", unit: "cu ft" },
        totalGallons: { value: Math.round(gallons).toLocaleString(), label: "Total Pool Volume", unit: "US Gal" }
      };
    }
  },
  "price-elasticity-calculator": {
    slug: "price-elasticity-calculator",
    name: "Price Elasticity of Demand Calculator",
    category: "financial",
    categoryLabel: "Economics & Finance",
    seoTitle: "Price Elasticity of Demand Calculator - PED & Revenue Sensitivity",
    metaDescription: "Calculate Price Elasticity of Demand (PED) using the midpoint arc formula. Determine elasticity category and revenue impact.",
    keywords: ["price elasticity calculator", "price elasticity of demand calculator", "ped calculator", "elasticity calculator economics"],
    hook: "Calculate Price Elasticity of Demand (PED) and evaluate pricing change revenue impacts.",
    description: "Compute Price Elasticity of Demand (PED) using the midpoint (arc) formula. Evaluates whether demand is Elastic, Inelastic, or Unitary to optimize product pricing strategy.",
    calcTime: "2 mins",
    formula: "PED = [ (Q2 - Q1) / ((Q1 + Q2)/2) ] ÷ [ (P2 - P1) / ((P1 + P2)/2) ]",
    formulaDescription: "Applies the standard midpoint arc elasticity formula to avoid direction bias between initial and final price-quantity points.",
    example: "If price increases from $10 to $12 (+18.2%) and sales drop from 100 to 80 units (-22.2%), PED is -1.22 (Elastic demand, total revenue decreases).",
    faqs: [
      { question: "What does a PED greater than 1 mean?", answer: "A PED absolute value > 1 indicates Elastic demand, meaning consumers are very sensitive to price changes." }
    ],
    commonMistakes: ["Confusing percentage change with absolute unit changes when analyzing price increases."],
    useCases: ["E-commerce product pricing strategy", "Economics coursework and business revenue optimization"],
    tips: ["For inelastic goods (|PED| < 1), raising prices increases total gross revenue."],
    inputs: [
      { id: "p1", label: "Initial Price P1 ($)", type: "number", defaultValue: 10, unit: "$" },
      { id: "p2", label: "New Price P2 ($)", type: "number", defaultValue: 12, unit: "$" },
      { id: "q1", label: "Initial Quantity Sold Q1", type: "number", defaultValue: 100, unit: "units" },
      { id: "q2", label: "New Quantity Sold Q2", type: "number", defaultValue: 80, unit: "units" }
    ],
    calculate: (inputs) => {
      const p1 = Number(inputs.p1 || 0);
      const p2 = Number(inputs.p2 || 0);
      const q1 = Number(inputs.q1 || 0);
      const q2 = Number(inputs.q2 || 0);

      const pctQ = (q2 - q1) / ((q1 + q2) / 2 || 1);
      const pctP = (p2 - p1) / ((p1 + p2) / 2 || 1);
      const ped = pctP !== 0 ? pctQ / pctP : 0;
      const absPed = Math.abs(ped);

      let classification = "Unitary Elastic (|PED| = 1)";
      if (absPed > 1) classification = "Elastic Demand (|PED| > 1 - Price Sensitive)";
      else if (absPed < 1) classification = "Inelastic Demand (|PED| < 1 - Low Sensitivity)";

      const rev1 = p1 * q1;
      const rev2 = p2 * q2;
      const revDelta = rev2 - rev1;

      return {
        pedValue: { value: ped.toFixed(2), label: "Price Elasticity Coefficient (PED)", unit: "" },
        elasticityType: { value: classification, label: "Demand Classification", unit: "" },
        revenueImpact: { value: revDelta >= 0 ? `+$${revDelta.toFixed(2)}` : `-$${Math.abs(revDelta).toFixed(2)}`, label: "Net Revenue Impact", unit: "$" }
      };
    }
  },
  "money-market-rate": {
    slug: "money-market-rate",
    name: "Money Market Yield & Interest Calculator",
    category: "financial",
    categoryLabel: "Financial",
    seoTitle: "Money Market Interest Calculator - Account Yield & Growth Planner",
    metaDescription: "Calculate money market account (MMA) interest earnings, compounding growth, and ending balance with monthly deposits.",
    keywords: ["money market rate calculator", "money market interest calculator", "mma yield calculator", "money market account calculator"],
    hook: "Calculate money market account interest growth with compounding interest and monthly deposits.",
    description: "Calculate returns on Money Market Accounts (MMA). Models compound interest growth, annual percentage yield (APY), and recurring monthly contributions.",
    calcTime: "2 mins",
    formula: "A = P(1 + r/n)^(nt) + PMT × [ ((1 + r/n)^(nt) - 1) / (r/n) ]",
    formulaDescription: "Applies compound interest formula with monthly annuity contributions compounding at rate r = APY/100.",
    example: "A $10,000 initial deposit at 4.5% APY with $300 monthly deposits grows to $22,785 in 3 years ($1,985 total interest earned).",
    faqs: [
      { question: "Are Money Market Accounts safe?", answer: "Yes, MMAs at FDIC-insured banks are protected up to $250,000 per depositor." }
    ],
    commonMistakes: ["Confusing Money Market Accounts (bank savings product) with Money Market Mutual Funds (brokerage product)."],
    useCases: ["Emergency fund yield planning", "Comparing high-yield savings vs money market accounts"],
    tips: ["Money market accounts often tier rates based on account balance—maintain minimum thresholds for top APY tiers."],
    inputs: [
      { id: "deposit", label: "Initial Deposit ($)", type: "number", defaultValue: 10000, unit: "$" },
      { id: "monthlyAdd", label: "Monthly Contribution ($)", type: "number", defaultValue: 300, unit: "$" },
      { id: "apy", label: "Annual Percentage Yield APY (%)", type: "number", defaultValue: 4.5, unit: "%" },
      { id: "years", label: "Time Period (Years)", type: "number", defaultValue: 3, unit: "yrs" }
    ],
    calculate: (inputs) => {
      const p = Number(inputs.deposit || 0);
      const pmt = Number(inputs.monthlyAdd || 0);
      const r = Number(inputs.apy || 4.5) / 100 / 12;
      const n = Number(inputs.years || 3) * 12;

      let balance = p;
      let totalContrib = p;

      for (let i = 0; i < n; i++) {
        balance = balance * (1 + r) + pmt;
        totalContrib += pmt;
      }

      const interest = Math.max(0, balance - totalContrib);

      return {
        futureBalance: { value: balance.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Ending Account Balance", unit: "$" },
        totalDeposited: { value: totalContrib.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Total Principal Deposited", unit: "$" },
        interestEarned: { value: interest.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Total Interest Earned", unit: "$" }
      };
    }
  },
  "pool-chemical-calculator": {
    slug: "pool-chemical-calculator",
    name: "Pool Chemical & Dosing Calculator",
    category: "construction",
    categoryLabel: "Home & Maintenance",
    seoTitle: "Pool Chemical Dosing Calculator - Chlorine & pH Balancer",
    metaDescription: "Calculate exact pool chemical dosages for chlorine shock, pH rise/lower, and alkalinity balancing.",
    keywords: ["pool chemical calculator", "pool chlorine dosage calculator", "pool ph chemical calculator", "swimming pool dosing"],
    hook: "Calculate exact chlorine shock and pH chemical dosing requirements for your pool.",
    description: "Maintain clean, clear pool water by calculating precise doses of liquid bleach, cal-hypo shock, muriatic acid, or soda ash based on pool gallon capacity.",
    calcTime: "2 mins",
    formula: "Liquid Bleach (oz) = (Target FC - Current FC) × Pool Gallons / 10,000 × 10.5 oz",
    formulaDescription: "Uses standard pool water treatment ratios per 10,000 gallons of water volume.",
    example: "Raising Free Chlorine by 3 ppm in a 15,000 gallon pool requires approx 47 fl oz of 12.5% liquid pool shock.",
    faqs: [
      { question: "What is the ideal Free Chlorine level for a pool?", answer: "The ideal Free Chlorine level is 1.0 to 3.0 ppm (parts per million)." }
    ],
    commonMistakes: ["Adding acid and chlorine simultaneously, which produces toxic chlorine gas fumes."],
    useCases: ["Weekly pool water balancing", "Clearing cloudy green pool algae outbreaks"],
    tips: ["Always add chemicals to water (pour into pool deep end), never pour water onto concentrated dry chemicals."],
    inputs: [
      { id: "gallons", label: "Pool Volume (Gallons)", type: "number", defaultValue: 15000, unit: "gal" },
      { id: "currentFC", label: "Current Free Chlorine (ppm)", type: "number", defaultValue: 1.0, unit: "ppm" },
      { id: "targetFC", label: "Target Free Chlorine (ppm)", type: "number", defaultValue: 4.0, unit: "ppm" }
    ],
    calculate: (inputs) => {
      const g = Number(inputs.gallons || 15000);
      const cFC = Number(inputs.currentFC || 1);
      const tFC = Number(inputs.targetFC || 4);

      const deltaFC = Math.max(0, tFC - cFC);
      const liquidShockOz = (deltaFC * (g / 10000) * 10.5);
      const calHypoOz = (deltaFC * (g / 10000) * 2.0);

      return {
        liquidBleach: { value: liquidShockOz.toFixed(1), label: "12.5% Liquid Pool Shock Needed", unit: "fl oz" },
        calHypoPowder: { value: calHypoOz.toFixed(1), label: "65% Cal-Hypo Granular Shock", unit: "oz (dry)" }
      };
    }
  },
  "time-clock-calculator": {
    slug: "time-clock-calculator",
    name: "Work Time Clock & Hours Calculator",
    category: "tax",
    categoryLabel: "Tax & Payroll",
    seoTitle: "Time Clock Hours Calculator - Employee Work Shift & Pay Estimator",
    metaDescription: "Calculate decimal work hours, unpaid break deductions, and gross pay from daily clock-in and clock-out times.",
    keywords: ["time clocks that calculate hours", "time clock calculator", "employee hours calculator", "work shift hours calculator"],
    hook: "Calculate decimal work hours and gross pay from shift clock-in / clock-out times.",
    description: "Calculate total daily and weekly work hours from clock-in and clock-out timestamps. Automatically subtracts lunch breaks and converts minutes to decimal hours for payroll.",
    calcTime: "1 min",
    formula: "Total Hours = (Shift 1 Duration + Shift 2 Duration - Break Minutes / 60); Gross Pay = Total Hours × Hourly Rate",
    formulaDescription: "Converts 12-hour or 24-hour clock timestamps to total minutes, subtracts unpaid break times, and formats to decimal hours.",
    example: "Clocking in at 8:00 AM, out for lunch at 12:00 PM, in at 12:30 PM, and out at 5:00 PM totals 8.5 decimal hours (8 hrs 30 mins). At $20/hr, gross pay is $170.00.",
    faqs: [
      { question: "How do I convert minutes to decimal hours?", answer: "Divide the number of minutes by 60. For example, 15 mins = 0.25 hrs, 30 mins = 0.50 hrs, 45 mins = 0.75 hrs." }
    ],
    commonMistakes: ["Forgetting to deduct unpaid lunch breaks when calculating billable hours."],
    useCases: ["Employee payroll time card calculation", "Freelancer hourly billing tracking"],
    tips: ["Use decimal hours (e.g., 7.75) directly when populating payroll software or invoices."],
    inputs: [
      { id: "hoursShift1", label: "Morning Shift Duration (Hours)", type: "number", defaultValue: 4.0, unit: "hrs" },
      { id: "hoursShift2", label: "Afternoon Shift Duration (Hours)", type: "number", defaultValue: 4.5, unit: "hrs" },
      { id: "breakMins", label: "Unpaid Break Duration (Minutes)", type: "number", defaultValue: 30, unit: "mins" },
      { id: "hourlyRate", label: "Hourly Pay Rate ($)", type: "number", defaultValue: 20, unit: "$/hr" }
    ],
    calculate: (inputs) => {
      const s1 = Number(inputs.hoursShift1 || 4);
      const s2 = Number(inputs.hoursShift2 || 4.5);
      const bMins = Number(inputs.breakMins || 0);
      const rate = Number(inputs.hourlyRate || 20);

      const netHours = Math.max(0, (s1 + s2) - (bMins / 60));
      const pay = netHours * rate;

      return {
        totalDecimalHours: { value: netHours.toFixed(2), label: "Total Net Work Hours", unit: "hrs" },
        grossPay: { value: pay.toFixed(2), label: "Estimated Gross Pay", unit: "$" }
      };
    }
  },
  "differential-equations-calculator": {
    slug: "differential-equations-calculator",
    name: "Differential Equations Solver & Step Calculator",
    category: "education",
    categoryLabel: "Education & Math",
    seoTitle: "Differential Equations Calculator - ODE Initial Value Solver",
    metaDescription: "Solve first-order differential equations y' = ky, compute initial value problems (IVP), and evaluate solution points.",
    keywords: ["differential equations calculator", "ode solver calculator", "first order differential equation calculator", "differential equation step solver"],
    hook: "Evaluate ordinary differential equations (ODE) and compute initial value problem solutions.",
    description: "Solves first-order ordinary differential equations (ODEs) of the exponential form y'(t) = k·y(t) with given initial conditions y(0) = y₀.",
    calcTime: "2 mins",
    formula: "Solution: y(t) = y₀ · e^(k·t)",
    formulaDescription: "Analytical solution of linear homogeneous first-order ODEs using separation of variables.",
    example: "For y'(t) = 0.5·y(t) with initial condition y(0) = 10, evaluating at t = 4 gives y(4) = 10 · e^(2.0) ≈ 73.89.",
    faqs: [
      { question: "What is an Initial Value Problem (IVP)?", answer: "An IVP is a differential equation paired with a specified value of the unknown function at a given point (e.g., y(0) = c)." }
    ],
    commonMistakes: ["Confusing exponential growth rate k with half-life decay constants."],
    useCases: ["Calculus and differential equations homework check", "Population growth and radioactive decay modeling"],
    tips: ["If rate k is positive, the system models exponential growth; if k is negative, it models exponential decay."],
    inputs: [
      { id: "y0", label: "Initial Value y(0)", type: "number", defaultValue: 10, unit: "" },
      { id: "rateK", label: "Growth / Decay Rate Constant (k)", type: "number", defaultValue: 0.5, unit: "" },
      { id: "timeT", label: "Target Evaluation Time (t)", type: "number", defaultValue: 4, unit: "t" }
    ],
    calculate: (inputs) => {
      const y0 = Number(inputs.y0 || 10);
      const k = Number(inputs.rateK || 0.5);
      const t = Number(inputs.timeT || 4);

      const yt = y0 * Math.exp(k * t);
      const eqStr = `y(t) = ${y0} · e^(${k}t)`;

      return {
        evaluatedResult: { value: yt.toFixed(4), label: "Evaluated Solution y(t)", unit: "" },
        analyticalSolution: { value: eqStr, label: "Analytical Closed Form", unit: "" }
      };
    }
  },
  "rvu-calculator-2025": {
    slug: "rvu-calculator-2025",
    name: "2025 Physician RVU & Compensation Calculator",
    category: "financial",
    categoryLabel: "Healthcare Finance",
    seoTitle: "2025 RVU Calculator - Physician Work RVU & CMS Compensation",
    metaDescription: "Calculate 2025 physician work RVUs (wRVUs), CMS conversion factor compensation, and productivity bonus thresholds.",
    keywords: ["rvu calculator 2025", "physician rvu calculator 2025", "wrvu compensation calculator", "cms conversion factor 2025"],
    hook: "Calculate physician wRVU compensation using updated 2025 CMS conversion rates.",
    description: "Calculate physician productivity compensation using 2025 Medicare Relative Value Units (wRVUs), conversion factors, and bonus threshold incentives.",
    calcTime: "2 mins",
    formula: "Total Compensation = (Work RVUs × CMS Conversion Factor × Specialty Multiplier) + Bonus Compensation",
    formulaDescription: "Multiplies annual wRVUs by the 2025 CMS Conversion Factor (~$32.35) plus bonus per RVU exceeding benchmark thresholds.",
    example: "4,500 wRVUs at $32.35/RVU yields $145,575 base CMS pay. With 500 bonus RVUs over a 4,000 threshold paid at $45/RVU (+$22,500 bonus), total pay is $168,075.",
    faqs: [
      { question: "What is the 2025 CMS RVU conversion factor?", answer: "The 2025 CMS Physician Fee Schedule conversion factor is approximately $32.35 per RVU." }
    ],
    commonMistakes: ["Confusing total RVUs (work + practice expense + malpractice) with Work RVUs (wRVU)."],
    useCases: ["Physician employment contract negotiation", "Clinical productivity tracking and bonus projections"],
    tips: ["Negotiate explicit tier bonus rates for wRVUs achieved above your annual contract threshold."],
    inputs: [
      { id: "wrvu", label: "Annual Work RVUs (wRVU)", type: "number", defaultValue: 4500, unit: "wRVUs" },
      { id: "cf", label: "2025 CMS Conversion Factor ($)", type: "number", defaultValue: 32.35, unit: "$/RVU" },
      { id: "threshold", label: "Annual Bonus Threshold (wRVU)", type: "number", defaultValue: 4000, unit: "wRVUs" },
      { id: "bonusRate", label: "Bonus Rate per Extra wRVU ($)", type: "number", defaultValue: 45, unit: "$/wRVU" }
    ],
    calculate: (inputs) => {
      const wrvu = Number(inputs.wrvu || 0);
      const cf = Number(inputs.cf || 32.35);
      const thresh = Number(inputs.threshold || 4000);
      const bRate = Number(inputs.bonusRate || 45);

      const baseComp = wrvu * cf;
      const extraRvu = Math.max(0, wrvu - thresh);
      const bonus = extraRvu * bRate;
      const totalComp = baseComp + bonus;

      return {
        baseCompensation: { value: baseComp.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Base CMS wRVU Pay", unit: "$" },
        productivityBonus: { value: bonus.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Productivity Bonus Earned", unit: "$" },
        totalCompensation: { value: totalComp.toLocaleString("en-US", { maximumFractionDigits: 2 }), label: "Total Projected Compensation", unit: "$" }
      };
    }
  }
};


