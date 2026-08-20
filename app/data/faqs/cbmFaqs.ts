import type { FAQItem } from "../calculatorsData";

export const cbmFaqs: FAQItem[] = [
  {
    "question": "What is CBM in shipping and how is it calculated?",
    "answer": "CBM stands for Cubic Meter (m³), the international metric volume unit used to measure freight cargo for ocean and air shipping. It is calculated using the formula: <code>Length (m) × Width (m) × Height (m) × Quantity</code>. Estimate container volume easily with our <a href=\"/calculators/cbm\">CBM Shipping Calculator</a>."
  },
  {
    "question": "How to calculate CBM from dimensions in centimeters (cm)?",
    "answer": "To calculate CBM from centimeters, multiply Length (cm) × Width (cm) × Height (cm), then divide the total result by 1,000,000. For example, a box measuring 50 cm × 40 cm × 30 cm yields 60,000 ÷ 1,000,000 = 0.06 CBM."
  },
  {
    "question": "How to calculate CBM from dimensions in inches?",
    "answer": "To convert dimensions in inches directly to CBM, multiply Length (in) × Width (in) × Height (in), then divide the result by 61,023.74 (cubic inches per cubic meter). For example, a 20 in × 15 in × 12 in box equals 3,600 ÷ 61,023.74 = 0.059 CBM."
  },
  {
    "question": "How many CBM fit into standard 20ft and 40ft ocean shipping containers?",
    "answer": "A standard 20ft ocean container has a usable capacity of ~28 to 30 CBM. A 40ft container holds ~56 to 58 CBM, while a 40ft High Cube (HC) container fits up to ~65 to 68 CBM."
  },
  {
    "question": "What is volumetric weight (chargeable weight) in CBM shipping?",
    "answer": "For air cargo, 1 CBM equals 167 kg of volumetric weight. For ocean freight (LCL), 1 CBM equals 1,000 kg. Freight carriers bill based on whichever is higher between actual gross weight and volumetric weight."
  },
  {
    "question": "What does 0.4 CBM or 0.6 CBM mean for small freight shipments?",
    "answer": "A 0.4 CBM shipment represents 0.4 cubic meters (approx 14.1 cubic feet, or about 8 to 10 medium courier boxes). For air shipping, 0.4 CBM equals roughly 66.8 kg of volumetric weight. A 0.6 CBM package represents ~21.2 cubic feet (or 100 kg volumetric weight). Calculate exact carton fits with our <a href=\"/calculators/cbm\">CBM Shipping Calculator</a>."
  },
  {
    "question": "Is CBM the same as m³ (cubic meters)?",
    "answer": "Yes. CBM is the global logistics abbreviation for cubic meters (m³). 1 CBM = 1 m³ = 35.3147 cubic feet = 61,024 cubic inches."
  }
];
