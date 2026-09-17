import type { FAQItem } from "../calculatorsData";

export const cbmFaqs: FAQItem[] = [
  {
    question: "What is CBM in shipping and how is it calculated?",
    answer: "CBM stands for <strong>Cubic Meter (m³)</strong>, the universal volumetric measurement unit used in ocean and air freight logistics to calculate cargo volume, container capacity, and chargeable dimensional weight. The core formula is: <code>Length (m) × Width (m) × Height (m) × Carton Quantity</code>. Easily convert any unit using our free <a href=\"/calculators/cbm\">CBM Shipping Calculator</a>."
  },
  {
    question: "How do I calculate CBM from dimensions in centimeters (cm)?",
    answer: "To calculate CBM from centimeter measurements, multiply Length (cm) × Width (cm) × Height (cm), then divide the result by <strong>1,000,000</strong>: <code>CBM = (L × W × H) ÷ 1,000,000</code>. For example, a box measuring 60 cm × 40 cm × 50 cm equals 120,000 ÷ 1,000,000 = <strong>0.12 CBM</strong>."
  },
  {
    question: "How do I calculate CBM from dimensions in inches?",
    answer: "To calculate CBM from inches directly, multiply Length (in) × Width (in) × Height (in), then divide by <strong>61,023.74</strong> (cubic inches in 1 cubic meter): <code>CBM = (L × W × H) ÷ 61,023.74</code>. For example, a standard 24″ × 18″ × 16″ carton equals 6,912 ÷ 61,023.74 = <strong>0.113 CBM</strong>."
  },
  {
    question: "How do I calculate CBM from millimeters (mm)?",
    answer: "Multiply Length (mm) × Width (mm) × Height (mm), then divide by <strong>1,000,000,000</strong>: <code>CBM = (L × W × H) ÷ 1,000,000,000</code>. For example, 500 mm × 400 mm × 300 mm equals 0.06 CBM. You can also convert each measurement to meters by dividing by 1,000 before multiplying."
  },
  {
    question: "How many kilograms (kg) is 1 CBM in sea freight vs. air freight?",
    answer: "In ocean freight (LCL shipping), the standard rule is <strong>1 CBM = 1,000 kg (1 metric ton)</strong> of volumetric chargeable weight. In standard air cargo, the IATA volumetric ratio is <strong>1 CBM = 167 kg</strong> (calculated as cubic cm ÷ 6,000 or cubic inches ÷ 366). For express couriers (DHL, FedEx, UPS), the ratio is <strong>1 CBM = 200 kg</strong> (cubic cm ÷ 5,000)."
  },
  {
    question: "What does 0.4 CBM or 0.6 CBM mean and how much weight does it represent?",
    answer: "A <strong>0.4 CBM</strong> shipment represents 0.4 cubic meters (approx 14.12 cubic feet). In sea freight, 0.4 CBM equals a maximum volumetric chargeable threshold of <strong>400 kg</strong>; in air cargo, it equals <strong>66.8 kg</strong>. A <strong>0.6 CBM</strong> shipment represents 21.19 cubic feet (600 kg sea freight / 100.2 kg air freight). Calculate your exact carton fits with our <a href=\"/calculators/cbm\">CBM Shipping Calculator</a>."
  },
  {
    question: "How many CBM fit into standard 20ft, 40ft, and 40ft High Cube ocean containers?",
    answer: "A standard 20ft container (20GP) has a maximum capacity of 33.2 CBM, with a <strong>practical usable volume of 28 to 30 CBM</strong>. A 40ft container (40GP) has a total of 67.6 CBM (usable <strong>58 to 62 CBM</strong>), and a 40ft High Cube container (40HQ) holds 76.2 CBM (usable <strong>68 to 70 CBM</strong>)."
  },
  {
    question: "What is the formula for converting CBM to cubic feet (cu ft) and cubic inches (cu in)?",
    answer: "1 CBM = <strong>35.3147 cubic feet</strong> = <strong>61,023.74 cubic inches</strong> = <strong>1.30795 cubic yards</strong>. To convert CBM to cubic feet, multiply CBM by 35.3147. To convert cubic feet to CBM, divide cubic feet by 35.3147."
  },
  {
    question: "Is CBM the same as m³ (cubic meters)?",
    answer: "Yes. CBM and m³ are identical measurements. 'CBM' is the standard freight forwarding commercial acronym, while 'm³' is the international SI metric symbol for cubic meters."
  },
  {
    question: "Does CBM include the weight of my shipment?",
    answer: "No. CBM measures the physical space occupied by cargo, not its actual weight. Freight providers may compare actual weight with a dimensional-weight rule to set the chargeable weight, and their divisor, minimum charges, and rounding rules vary. Use the <a href=\"/calculators/cbm\">CBM Shipping Calculator</a> for volume, then confirm the billing method with your carrier or forwarder."
  }
];
