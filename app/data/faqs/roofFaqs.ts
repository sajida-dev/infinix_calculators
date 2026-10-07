import type { FAQItem } from "../calculatorsData";

export const roofFaqs: FAQItem[] = [
  {
    question: "How many shingle bundles are in a roofing square?",
    answer: "A roofing square is <strong>100 square feet</strong> of roof surface. Many standard asphalt shingles are estimated at about three bundles per square, but coverage varies by product. Check the exact package label or manufacturer data before ordering. Our <a href=\"/calculators/roof\">Roof Shingle Calculator</a> uses a three-bundle-per-square assumption for its estimate."
  },
  {
    question: "What is a roofing square and how do I calculate total squares?",
    answer: "A roofing square is the standard unit of measurement in roofing, equal to 100 sq. ft. of roof surface. To calculate total roofing squares: 1) Measure roof area in square feet (Length × Width × Pitch Multiplier). 2) Add 10% to 15% for waste. 3) Divide total square feet by 100: <code>Total Squares = (Roof Area in Sq Ft × Waste Factor) ÷ 100</code>."
  },
  {
    question: "What roof pitch multiplier should I use for calculating sloped roof area?",
    answer: "Roof pitch is the vertical rise per 12 inches of horizontal run. Standard pitch multiplier factors are: <strong>3/12 pitch = 1.031</strong>, <strong>4/12 pitch = 1.054</strong>, <strong>5/12 pitch = 1.083</strong>, <strong>6/12 pitch = 1.118</strong>, <strong>8/12 pitch = 1.202</strong>, <strong>10/12 pitch = 1.302</strong>, and <strong>12/12 pitch (45° angle) = 1.414</strong>. Multiply your building's footprint area by this pitch factor to determine actual sloped roof area."
  },
  {
    question: "What waste factor should I select for gable vs. hip vs. complex roofs?",
    answer: "For simple rectangular gable roofs with no dormers, use a <strong>10% waste factor</strong>. For hip roofs, intersecting valleys, or skylights, use a <strong>15% waste factor</strong>. For complex multi-tier roofs featuring multiple dormers, turrets, and steep pitches (8/12 or higher), select a <strong>20% waste factor</strong> to account for diagonal valley cuts and ridge caps."
  },
  {
    question: "How much does a new roof replacement cost per square installed?",
    answer: "In 2026, standard architectural asphalt shingles cost <strong>$100 to $180 per square in materials</strong> alone. Total installed cost (materials, synthetic underlayment, drip edge, ridge vent, tear-off, and professional labor) ranges from <strong>$350 to $600 per square</strong> (roughly $3.50 to $6.00 per square foot), or $7,000 to $12,000 for an average 2,000 sq ft home."
  },
  {
    question: "How many bundles of shingles are needed for a 2,000 sq ft roof?",
    answer: "A 2,000 sq ft roof equals 20 roofing squares. Adding a 10% waste factor requires 22 squares (2,200 sq ft). Because there are 3 bundles per square, you will need <strong>66 bundles of shingles</strong> (22 × 3 = 66 bundles)."
  },
  {
    question: "How do I compare asphalt shingle brands and product lines?",
    answer: "Compare the exact product models, not just brand names. Check published coverage, roof-slope compatibility, wind and impact information, installation instructions, warranty conditions, and the contractor's full scope of work. There is no single shingle that is best for every roof."
  },
  {
    question: "Do shingles advertised with a 25-year or longer life last that long?",
    answer: "A stated service life or warranty period is not a guarantee for every roof. Performance depends on the product, installation, ventilation, roof design, weather exposure, maintenance, and warranty terms. Read the current warranty for the exact product and ask what conditions and exclusions apply."
  },
  {
    question: "Why might roof shingles blow off in strong wind?",
    answer: "Possible factors include wind exposure, roof-edge details, fastening, deck condition, installation temperature, and whether the shingles were installed according to the product instructions. A photo or isolated loose shingle usually cannot identify the cause; ask a qualified roofing professional to inspect the roof safely."
  },
  {
    question: "Can a roofer install new shingles over an existing layer?",
    answer: "It depends on local code, the number and condition of existing layers, roof structure, and product instructions. An overlay can conceal damaged decking or flashing and adds weight. Ask the contractor to document the existing layers and proposed tear-off scope, and confirm permit requirements with your local building department."
  }
];
