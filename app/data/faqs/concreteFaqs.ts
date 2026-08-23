import type { FAQItem } from "../calculatorsData";

export const concreteFaqs: FAQItem[] = [
  {
    question: "How do I calculate how much concrete I need for a slab, patio, or driveway?",
    answer: "To calculate concrete yardage for a rectangular slab, multiply Length (feet) × Width (feet) × Thickness (depth in inches ÷ 12) to find total cubic feet, then divide by 27 to convert into cubic yards. Always add a 10% safety margin for ground irregularities and spillage: <code>Cubic Yards = (Length × Width × (Depth / 12)) ÷ 27 × 1.10</code>. Use our free <a href=\"/calculators/concrete\">Concrete Yard Calculator</a> for instant calculations."
  },
  {
    question: "How many bags of concrete do I need for 1 cubic yard?",
    answer: "One cubic yard equals 27 cubic feet. If using standard 80 lb bags (0.60 cu. ft. yield per bag), you need exactly <strong>45 bags of 80lb concrete</strong>. If using 60 lb bags (0.45 cu. ft. yield), you need <strong>60 bags</strong>. If using 40 lb bags (0.30 cu. ft. yield), you need <strong>90 bags</strong> per cubic yard. Read our step-by-step tutorial in <a href=\"/blog/how-many-bags-of-concrete-do-i-need\">how many bags of concrete do I need</a>."
  },
  {
    question: "How much concrete is needed for a 10x10 or 12x12 slab?",
    answer: "For a standard 4-inch thick 10x10 ft patio slab, you need <strong>1.23 cubic yards</strong> (approx 56 bags of 80lb concrete). For a 12x12 ft slab at 4 inches thick, you need <strong>1.78 cubic yards</strong> (approx 80 bags of 80lb concrete). For a 6-inch thick heavy driveway slab, a 10x10 ft area requires <strong>1.85 cubic yards</strong>."
  },
  {
    question: "How much does ready-mix concrete cost per cubic yard delivered?",
    answer: "Ready-mix concrete delivered by a mixer truck typically costs between <strong>$125 and $175 per cubic yard</strong> nationwide. For small delivery orders under 4 to 5 cubic yards, suppliers usually charge a short-load delivery fee of $50 to $150. Including grading, framing, rebar, and finishing labor, total installed slab costs range from $6 to $12 per square foot. Review detailed pricing in our <a href=\"/blog/concrete-price-per-yard-cost-guide\">concrete price per yard guide</a>."
  },
  {
    question: "What is the recommended concrete slab thickness for patios, sidewalks, and driveways?",
    answer: "A 4-inch (10 cm) slab thickness is standard and recommended for residential patios, walkways, shed pads, and hot tub bases. For passenger car driveways, RV pads, and heavy truck parking, a minimum thickness of 5 to 6 inches with steel rebar or wire mesh reinforcement is required to prevent cracking."
  },
  {
    question: "How do I calculate concrete for round post holes and cylindrical footings?",
    answer: "For cylindrical sonotubes or fence post holes, use the cylinder volume formula: <code>Volume (cu. ft.) = π × (Radius in feet)² × Depth in feet</code>. Then divide by 27 to find cubic yards. For example, a 12-inch diameter hole (0.5 ft radius) that is 3 feet deep requires 3.1416 × 0.25 × 3 = 2.36 cubic feet, which equals 4 bags of 80 lb concrete."
  },
  {
    question: "Is it cheaper to mix bags of concrete or order ready-mix delivery?",
    answer: "For small projects under 1 cubic yard (approx 45 bags), buying bagged concrete at Home Depot or Lowe's ($5 to $7 per 80lb bag, totaling $225 to $315/yd) is cheaper than paying mixer truck minimums and short-load fees. For projects over 2 to 3 cubic yards, ready-mix delivery ($125-$165/yd) is both significantly cheaper and saves hours of manual labor."
  }
];
