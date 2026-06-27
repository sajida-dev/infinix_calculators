export interface CalculatorInput {
  id: string;
  label: string;
  type: "number" | "select";
  defaultValue: number | string;
  options?: { value: string; label: string }[];
  unit?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CalculatorInfo {
  slug: string;
  name: string;
  category: "financial" | "construction" | "health" | "math" | "unit-converter";
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
  // Standard execution function mapping
  calculate: (inputs: Record<string, any>) => Record<string, { value: string | number; label: string; unit?: string }>;
}

export const calculatorsData: Record<string, CalculatorInfo> = {
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
        answer: "Measure the length and width of the area in feet and the desired soil depth in inches. Multiply length by width, multiply by depth (in inches), and divide the total by 12 to find cubic feet. Divide by 27 to convert to cubic yards."
      },
      {
        question: "How much does a 40 lb bag of topsoil cover?",
        answer: "A standard 40 lb bag of topsoil contains approximately 0.75 cubic feet of soil. Spread at a 2-inch depth, one 40 lb bag will cover about 4.5 square feet."
      },
      {
        question: "How many 40 lb bags make a cubic yard?",
        answer: "It takes 36 bags (each containing 0.75 cubic feet) to equal 1 cubic yard (which is 27 cubic feet)."
      }
    ],
    commonMistakes: [
      "Forgetting to divide the depth in inches by 12, leading to massive overestimates.",
      "Not accounting for settling; soil compacts by 10% to 20% after watering or tamping."
    ],
    useCases: [
      "Reseeding lawns to add a rich top dressing.",
      "Filling newly constructed raised garden beds.",
      "Leveling out low spots or holes in a backyard."
    ],
    tips: [
      "Always order 10% extra topsoil to cover compression and ground unevenness.",
      "For grass roots, aim for a minimum of 4 inches of premium topsoil."
    ],
    inputs: [], // Topsoil uses its own custom Client Component
    calculate: () => ({})
  },
  cbm: {
    slug: "cbm",
    name: "CBM Calculator",
    category: "unit-converter",
    categoryLabel: "Logistics & Converters",
    seoTitle: "CBM Calculator - Cargo Cubic Meter Volume Finder",
    metaDescription: "Calculate Cubic Meters (CBM) for shipping cargo, cartons, or boxes. Convert dimensions in inches, feet, or cm to shipping volume easily.",
    keywords: ["cbm calculator", "cubic meters calculator", "shipping volume calculator", "cargo volume calculator"],
    hook: "Calculate Shipping Volume & Cargo Space in CBM Instantly.",
    description: "Enter box dimensions in inches, cm, or feet to estimate total volume, weight, and fit in ocean containers.",
    calcTime: "1 min",
    formula: "CBM = [Length (m) × Width (m) × Height (m)] × Quantity",
    formulaDescription: "Convert all box dimensions to meters, multiply them to get the volume of a single box, and then multiply by the total number of boxes to get the total CBM.",
    example: "If you have 10 boxes, each measuring 50 cm × 40 cm × 30 cm: Convert to meters: 0.5m × 0.4m × 0.3m = 0.06 CBM per box. Total CBM = 0.06 × 10 = 0.6 CBM.",
    faqs: [
      {
        question: "What is CBM in shipping?",
        answer: "CBM stands for Cubic Meter. It is the standard unit of measurement used to calculate the volume of cargo for air freight, ocean freight, and courier shipping."
      },
      {
        question: "How do I calculate CBM for boxes with different sizes?",
        answer: "Calculate the CBM of each individual box size separately using the formula (Length × Width × Height × Quantity), then sum the CBM values of all the boxes together."
      },
      {
        question: "How many CBM fit inside a 20ft container?",
        answer: "A standard 20-foot shipping container has a maximum volume of about 33 CBM, but realistically, only about 26 to 28 CBM of usable cargo will fit due to packing gaps."
      }
    ],
    commonMistakes: [
      "Mixing units (e.g. multiplying centimeters by inches) without converting them first.",
      "Assuming a container's full inner volume is usable; carton stacking gaps always reduce usable CBM."
    ],
    useCases: [
      "Calculating freight costs for Less than Container Load (LCL) ocean shipping.",
      "Estimating storage space requirements in warehouses.",
      "Planning stackable layouts for logistics packages."
    ],
    tips: [
      "For air cargo, dimensional weight is calculated based on CBM (typically 1 CBM = 167 kg). Check if volumetric weight exceeds actual weight.",
      "Leave a 5% margin when planning container packing layouts."
    ],
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
      const weightPerBox = Number(inputs.weight || 0);
      const unit = inputs.unit || "cm";

      // Convert to meters
      let lM = length, wM = width, hM = height;
      if (unit === "cm") {
        lM = length / 100;
        wM = width / 100;
        hM = height / 100;
      } else if (unit === "in") {
        lM = length * 0.0254;
        wM = width * 0.0254;
        hM = height * 0.0254;
      } else if (unit === "ft") {
        lM = length * 0.3048;
        wM = width * 0.3048;
        hM = height * 0.3048;
      }

      const singleCBM = lM * wM * hM;
      const totalCBM = singleCBM * qty;
      const totalCFT = totalCBM * 35.3147; // Cubic feet
      const totalWeight = weightPerBox * qty;

      // Volumetric weight factors: Air (1:6000 or 167kg/m3), Courier (1:5000 or 200kg/m3)
      const airVolWeight = totalCBM * 167;
      const courierVolWeight = totalCBM * 200;

      return {
        totalCbm: { value: totalCBM.toFixed(4), label: "Total Volume", unit: "m³ (CBM)" },
        totalCft: { value: totalCFT.toFixed(2), label: "Total Volume", unit: "ft³ (CFT)" },
        singleCbm: { value: singleCBM.toFixed(4), label: "Single Box Volume", unit: "m³" },
        grossWeight: { value: totalWeight > 0 ? totalWeight.toFixed(1) : "N/A", label: "Gross Weight", unit: "kg" },
        airVolWeight: { value: airVolWeight.toFixed(1), label: "Air Volumetric Weight", unit: "kg" },
        courierVolWeight: { value: courierVolWeight.toFixed(1), label: "Courier Volumetric Weight", unit: "kg" }
      };
    }
  },
  affirm: {
    slug: "affirm",
    name: "Affirm Calculator",
    category: "financial",
    categoryLabel: "Financial & Loans",
    seoTitle: "Affirm Loan Calculator - Monthly Payments & Interest Estimator",
    metaDescription: "Estimate your monthly Affirm payments, total interest costs, and true APR. Input product price and term to make smart financing decisions.",
    keywords: ["affirm calculator", "affirm payment calculator", "buy now pay later calculator", "loan apr calculator"],
    hook: "Calculate the True Cost of Affirm Financing Before Checkout.",
    description: "Determine your monthly payment, interest rate consequences, and the total cost of borrowing instantly.",
    calcTime: "1 min",
    formula: "Monthly Payment = [P × r × (1 + r)^n] ÷ [(1 + r)^n - 1]",
    formulaDescription: "Where P is the purchase price (principal), r is the monthly interest rate (APR divided by 12 months), and n is the total number of monthly payments (term).",
    example: "For a $1,200 purchase financed at 15% APR over 12 months: Principal = $1200, Monthly r = 0.15 / 12 = 0.0125, Payments = 12. Monthly payment = $108.29. Total paid = $1,299.48, Total interest = $99.48.",
    faqs: [
      {
        question: "Does Affirm charge interest?",
        answer: "Yes, Affirm charges interest depending on your credit profile and checkout store. Rates typically range from 0% to 30% APR. Unlike traditional credit cards, Affirm charges simple interest rather than compound interest."
      },
      {
        question: "Does using Affirm hurt your credit score?",
        answer: "Checking your eligibility with Affirm uses a soft credit check, which does not affect your score. However, opening a loan and missing payments can impact your credit score, especially if reported to credit bureaus."
      },
      {
        question: "What is simple interest?",
        answer: "Simple interest is calculated solely on the principal loan amount. It does not compile over time like credit card debt, meaning you only pay interest on what you initially borrowed."
      }
    ],
    commonMistakes: [
      "Assuming all checkout transactions are interest-free (0% APR is often a limited promotion).",
      "Stretching the payment term too long, which increases the total interest dollar cost even if the monthly payment is lower."
    ],
    useCases: [
      "Planning high-ticket item checkouts (electronics, furniture, mattresses).",
      "Comparing Affirm interest costs against credit card APRs.",
      "Determining if a 3-month, 6-month, or 12-month term fits your monthly budget."
    ],
    tips: [
      "If offered a 0% APR option, always review if auto-pay is set to avoid missed payment penalties.",
      "Try to pay a larger down payment at checkout to reduce the principal balance and save on interest."
    ],
    inputs: [
      { id: "price", label: "Purchase Price / Principal ($)", type: "number", defaultValue: 1000, unit: "$" },
      { id: "apr", label: "Interest Rate (APR %)", type: "number", defaultValue: 15, unit: "%" },
      { id: "term", label: "Payment Term (Months)", type: "select", defaultValue: "12", options: [{ value: "3", label: "3 Months" }, { value: "6", label: "6 Months" }, { value: "12", label: "12 Months" }, { value: "18", label: "18 Months" }, { value: "24", label: "24 Months" }] }
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.price || 0);
      const apr = Number(inputs.apr || 0);
      const termMonths = Number(inputs.term || 12);

      if (apr === 0) {
        const monthly = principal / termMonths;
        return {
          monthlyPayment: { value: monthly.toFixed(2), label: "Monthly Payment", unit: "$" },
          totalPaid: { value: principal.toFixed(2), label: "Total Cost", unit: "$" },
          totalInterest: { value: "0.00", label: "Total Interest", unit: "$" },
          effectiveApr: { value: "0.00", label: "Effective APR", unit: "%" }
        };
      }

      // Simple interest formula for BNPL or amortized installment loan
      const monthlyRate = (apr / 100) / 12;
      const x = Math.pow(1 + monthlyRate, termMonths);
      const monthlyPayment = (principal * x * monthlyRate) / (x - 1);
      const totalPaid = monthlyPayment * termMonths;
      const totalInterest = totalPaid - principal;

      return {
        monthlyPayment: { value: monthlyPayment.toFixed(2), label: "Monthly Payment", unit: "$" },
        totalPaid: { value: totalPaid.toFixed(2), label: "Total Cost", unit: "$" },
        totalInterest: { value: totalInterest.toFixed(2), label: "Total Interest", unit: "$" },
        effectiveApr: { value: apr.toFixed(2), label: "Stated APR", unit: "%" }
      };
    }
  },
  "pro-rata": {
    slug: "pro-rata",
    name: "Pro Rata Calculator",
    category: "financial",
    categoryLabel: "Financial & Payroll",
    seoTitle: "Pro Rata Rental & Salary Calculator - Precision Splits",
    metaDescription: "Calculate prorated rent or salary instantly. Get exact figures based on active days, calendar days, or daily rates.",
    keywords: ["pro rata calculator", "prorated rent calculator", "prorate salary", "prorated utility fee"],
    hook: "Splits Rent, Invoices & Salaries to the Cent.",
    description: "Determine exact partial payments for moving in mid-month or joining a job mid-cycle.",
    calcTime: "1 min",
    formula: "Prorated Amount = (Base Monthly Rate ÷ Total Days in Period) × Days Active",
    formulaDescription: "Divide your standard monthly rent or salary by the number of days in that specific billing month. Multiply by the number of days you actually live in or work to get the prorated total.",
    example: "Rent is $1,500/month. You move in on June 11. June has 30 days. Daily rate = $1,500 ÷ 30 = $50. Active days = 30 - 11 + 1 = 20 days. Prorated rent = $50 × 20 = $1,000.",
    faqs: [
      {
        question: "How do you calculate prorated rent?",
        answer: "Identify the monthly rent and the exact month you are proration for. Divide monthly rent by the total days in the month (e.g. 30 in June, 31 in July). Multiply that daily rate by the number of days you will occupy the property."
      },
      {
        question: "Does proration include the move-in day?",
        answer: "Yes, typically landlord leases count the move-in day as the first full day of tenancy, meaning it is included in the active days count."
      }
    ],
    commonMistakes: [
      "Assuming every month has 30 days, which leads to discrepancies in 31-day months or February.",
      "Miscounting active days (forgetting to include both start and end days inclusive)."
    ],
    useCases: [
      "Tenants moving into a flat mid-month.",
      "HR managers calculating salaries for new employees starting mid-pay period.",
      "Prorating subscription fees or retainer agreements."
    ],
    tips: [
      "Double-check if your landlord calculates proration based on a flat 30-day month or a standard 365-day year. Confirm in your lease agreement.",
      "Keep invoice records detailed by documenting the exact days active."
    ],
    inputs: [
      { id: "amount", label: "Monthly Base Rate ($)", type: "number", defaultValue: 1200, unit: "$" },
      { id: "totalDays", label: "Total Days in Month/Period", type: "number", defaultValue: 30 },
      { id: "activeDays", label: "Days Used / Active", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount || 0);
      const totalDays = Number(inputs.totalDays || 30);
      const activeDays = Number(inputs.activeDays || 0);

      const dailyRate = totalDays > 0 ? amount / totalDays : 0;
      const prorated = dailyRate * activeDays;

      return {
        proratedAmount: { value: prorated.toFixed(2), label: "Prorated Amount", unit: "$" },
        dailyRate: { value: dailyRate.toFixed(2), label: "Daily Rate Equivalent", unit: "$/day" },
        daysUnused: { value: (totalDays - activeDays).toString(), label: "Unused Days", unit: "days" }
      };
    }
  },
  roof: {
    slug: "roof",
    name: "Roof Calculator",
    category: "construction",
    categoryLabel: "Construction & Roofing",
    seoTitle: "Roof Area & Shingle Calculator - Pitch and Slope Estimator",
    metaDescription: "Estimate roof surface area, shingle bundle counts, and pitch multipliers. Input building footprint and roof pitch for accurate contractor layouts.",
    keywords: ["roof calculator", "roof area calculator", "shingles calculator", "roof pitch multiplier"],
    hook: "Estimate Roof Area & Shingle Bundles in Seconds.",
    description: "Input house length, width, overhangs, and pitch slope to estimate roof area and material requirements.",
    calcTime: "2 mins",
    formula: "Roof Area = Ground Area × Pitch Multiplier",
    formulaDescription: "Ground Area includes the house footprint plus overhangs. Multiply the total ground area by the pitch slope factor (secant of slope angle) to find the sloped roof area.",
    example: "A building is 30 ft by 40 ft with a 1 ft overhang all around (total ground footprint = 32 × 42 = 1,344 sq ft). Pitch is 6/12 (factor = 1.118). Roof Area = 1,344 × 1.118 = 1,502 sq ft.",
    faqs: [
      {
        question: "How many shingle bundles do I need per square?",
        answer: "A 'square' in roofing equals 100 square feet. It generally takes exactly 3 bundles of standard architectural shingles to cover 1 square."
      },
      {
        question: "What is a roof pitch?",
        answer: "Roof pitch is the steepness of a roof expressed as rise over run. A 6/12 pitch means the roof rises 6 inches vertically for every 12 inches of horizontal run."
      }
    ],
    commonMistakes: [
      "Forgetting to include roof overhangs (eaves) in the length and width dimensions.",
      "Underestimating waste factors (contractors recommend adding 10% for basic roofs, 15% for complex hips/valleys)."
    ],
    useCases: [
      "Estimating shingles, underlayment, and drip edges for DIY roofs.",
      "Validating contractor quotes for roofing replacements.",
      "Determining roof pitch angles for solar panel installations."
    ],
    tips: [
      "For complex roofs with valleys, dormers, and ridges, add a minimum 15% waste allowance to cover shingles cut-offs.",
      "Confirm local building codes regarding maximum layers of shingles allowed before a complete tear-off is mandatory."
    ],
    inputs: [
      { id: "length", label: "House Footprint Length (ft)", type: "number", defaultValue: 40, unit: "ft" },
      { id: "width", label: "House Footprint Width (ft)", type: "number", defaultValue: 30, unit: "ft" },
      { id: "overhang", label: "Eave / Overhang (ft)", type: "number", defaultValue: 1, unit: "ft" },
      { id: "pitch", label: "Roof Pitch (Rise / 12)", type: "select", defaultValue: "6", options: [
        { value: "3", label: "3/12 (Low Slope - 1.031)" },
        { value: "4", label: "4/12 (1.054)" },
        { value: "5", label: "5/12 (1.083)" },
        { value: "6", label: "6/12 (Medium - 1.118)" },
        { value: "7", label: "7/12 (1.158)" },
        { value: "8", label: "8/12 (1.202)" },
        { value: "9", label: "9/12 (Steep - 1.250)" },
        { value: "10", label: "10/12 (1.302)" },
        { value: "12", label: "12/12 (Stiff - 1.414)" }
      ]}
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const overhang = Number(inputs.overhang || 0);
      const pitchValue = Number(inputs.pitch || 6);

      // Pitch factors (hypotenuse of 12 and rise)
      const pitchFactors: Record<number, number> = {
        3: 1.0308,
        4: 1.0541,
        5: 1.0833,
        6: 1.1180,
        7: 1.1577,
        8: 1.2019,
        9: 1.2500,
        10: 1.3017,
        12: 1.4142
      };

      const factor = pitchFactors[pitchValue] || 1.118;
      
      // Calculate footprint including overhangs
      const totalLength = length + (overhang * 2);
      const totalWidth = width + (overhang * 2);
      const groundArea = totalLength * totalWidth;
      
      const roofArea = groundArea * factor;
      const squares = roofArea / 100;
      
      // Material estimation
      const shingleBundles = Math.ceil(squares * 3); // 3 bundles per square
      const wasteFactor = 1.10; // 10% standard waste
      const shingleBundlesWithWaste = Math.ceil(squares * 3 * wasteFactor);

      return {
        roofArea: { value: roofArea.toFixed(0), label: "Estimated Roof Area", unit: "sq ft" },
        squaresCount: { value: squares.toFixed(2), label: "Roofing Squares", unit: "sqs (100 sq ft)" },
        bundlesBase: { value: shingleBundles, label: "Net Shingle Bundles", unit: "bundles" },
        bundlesWithWaste: { value: shingleBundlesWithWaste, label: "Total Bundles (incl. 10% waste)", unit: "bundles" }
      };
    }
  },
  concrete: {
    slug: "concrete",
    name: "Concrete Calculator",
    category: "construction",
    categoryLabel: "Construction & Masonry",
    seoTitle: "Concrete Slab & Volume Calculator - Cubic Yards Finder",
    metaDescription: "Calculate concrete volume in cubic yards or bags for slabs, walkways, columns, and foundations. Add waste buffer for precise masonry orders.",
    keywords: ["concrete calculator", "concrete slab calculator", "concrete bags calculator", "cubic yard concrete", "masonry calculator"],
    hook: "Calculate Concrete Yards & Bag Counts Instantly.",
    description: "Enter flat rectangular slabs or circular piers to find the volume of concrete mix needed for construction.",
    calcTime: "2 mins",
    formula: "Volume (cu yd) = [Length (ft) × Width (ft) × (Thickness (in) ÷ 12)] ÷ 27",
    formulaDescription: "Compute the volume of your slab in cubic feet by multiplying length by width by thickness (in feet). Divide by 27 to convert the volume to cubic yards.",
    example: "For a slab 10 feet long, 10 feet wide, and 4 inches thick: volume is 10 × 10 × 0.333 = 33.33 cubic feet. In cubic yards: 33.33 ÷ 27 = 1.23 cubic yards.",
    faqs: [
      {
        question: "How thick should a concrete patio slab be?",
        answer: "A standard residential walkway or patio concrete slab is typically 4 inches thick. A driveway slab should be a minimum of 5 to 6 inches thick to support heavy vehicle weights."
      },
      {
        question: "How many cubic yards are in a standard concrete truck?",
        answer: "A full-sized concrete delivery truck (ready-mix truck) typically carries between 9 and 11 cubic yards of wet concrete mix."
      }
    ],
    commonMistakes: [
      "Ordering the exact theoretical calculation; ground slopes, form flexing, and spills always require a 10% safety margin.",
      "Mixing up units (e.g. thickness in inches vs length/width in feet)."
    ],
    useCases: [
      "Pouring driveways, sidewalks, and patios.",
      "Setting fence post anchors using dry pre-mixed bags.",
      "Estimating foundation foundations for garden sheds."
    ],
    tips: [
      "Always round up concrete orders; if you run short, ordering a secondary short-load delivery is extremely expensive.",
      "Sprinkle the subgrade with water before pouring so the soil doesn't sap moisture from the wet concrete mixture."
    ],
    inputs: [
      { id: "length", label: "Length of Slab (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "width", label: "Width of Slab (ft)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "thickness", label: "Thickness of Concrete (in)", type: "number", defaultValue: 4, unit: "in" }
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length || 0);
      const width = Number(inputs.width || 0);
      const thickness = Number(inputs.thickness || 4);

      const thicknessFt = thickness / 12;
      const volumeFt3 = length * width * thicknessFt;
      const volumeYd3 = volumeFt3 / 27;

      // Bags calculation (standard 80 lb bag yields 0.6 cu ft, 60 lb yields 0.45 cu ft)
      const bags80 = volumeFt3 / 0.6;
      const bags60 = volumeFt3 / 0.45;

      // 10% waste buffer
      const volumeYd3WithWaste = volumeYd3 * 1.10;

      return {
        cubicYards: { value: volumeYd3.toFixed(2), label: "Cubic Yards Needed", unit: "yd³" },
        cubicYardsWaste: { value: volumeYd3WithWaste.toFixed(2), label: "Cubic Yards (+10% waste buffer)", unit: "yd³" },
        cubicFeet: { value: volumeFt3.toFixed(1), label: "Cubic Feet Needed", unit: "ft³" },
        bags80lb: { value: Math.ceil(bags80), label: "80 lb pre-mix bags", unit: "bags" },
        bags60lb: { value: Math.ceil(bags60), label: "60 lb pre-mix bags", unit: "bags" }
      };
    }
  },
  bmi: {
    slug: "bmi",
    name: "BMI Calculator",
    category: "health",
    categoryLabel: "Health & Fitness",
    seoTitle: "BMI Calculator - Body Mass Index Health Score",
    metaDescription: "Calculate your Body Mass Index (BMI) instantly. Find your weight status category (underweight, normal weight, overweight, or obese) with official ranges.",
    keywords: ["bmi calculator", "body mass index calculator", "healthy weight calculator", "bmi score"],
    hook: "Calculate Your Body Mass Index & Health Category Instantly.",
    description: "Enter your height and weight to assess your body composition based on World Health Organization standards.",
    calcTime: "1 min",
    formula: "BMI = Weight (kg) ÷ [Height (m)]²  OR  [Weight (lbs) ÷ Height (in)²] × 703",
    formulaDescription: "Divide your weight in kilograms by your height in meters squared. For imperial measurements, divide weight in pounds by height in inches squared, and multiply by 703.",
    example: "A person weighing 160 lbs who is 5 ft 10 in (70 inches) tall: [160 ÷ (70)²] × 703 = [160 ÷ 4900] × 703 = 0.03265 × 703 = 22.95 (Normal weight).",
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer: "For adults, a healthy BMI score falls between 18.5 and 24.9. A score below 18.5 indicates underweight, 25 to 29.9 is overweight, and 30 or above indicates obesity."
      },
      {
        question: "Is BMI accurate for athletes?",
        answer: "BMI does not distinguish between body fat and lean muscle mass. Muscle is denser than fat, so highly muscular athletes can have an 'overweight' or 'obese' BMI despite having low body fat levels."
      }
    ],
    commonMistakes: [
      "Relying solely on BMI to determine overall cardiovascular or physical health (which ignores fat distribution, waist circumference, and muscle density).",
      "Using standard adult BMI scales for children, who require specialized percentiles matching age and biological sex."
    ],
    useCases: [
      "Monitoring overall fitness and composition progress.",
      "General health screens for weight-related risks.",
      "Establishing weight loss or gain baseline targets."
    ],
    tips: [
      "Combine BMI calculations with waist circumference measurements to get a better indication of visceral abdominal fat.",
      "Focus on healthy eating and activity habits rather than obsessing over a single BMI value."
    ],
    inputs: [
      { id: "weight", label: "Weight (lbs)", type: "number", defaultValue: 160, unit: "lbs" },
      { id: "heightFt", label: "Height (Feet)", type: "number", defaultValue: 5, unit: "ft" },
      { id: "heightIn", label: "Height (Inches)", type: "number", defaultValue: 8, unit: "in" }
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.weight || 0);
      const heightFt = Number(inputs.heightFt || 5);
      const heightIn = Number(inputs.heightIn || 8);

      const totalHeightInches = (heightFt * 12) + heightIn;

      if (totalHeightInches === 0) {
        return {
          bmi: { value: "0.0", label: "BMI Score", unit: "" },
          category: { value: "N/A", label: "Weight Category", unit: "" }
        };
      }

      const bmi = (weight / Math.pow(totalHeightInches, 2)) * 703;
      let category = "";

      if (bmi < 18.5) {
        category = "Underweight (< 18.5)";
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight (18.5 - 24.9)";
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight (25 - 29.9)";
      } else {
        category = "Obese (≥ 30)";
      }

      return {
        bmi: { value: bmi.toFixed(2), label: "BMI Score", unit: "" },
        category: { value: category, label: "Weight Category", unit: "" }
      };
    }
  }
};
