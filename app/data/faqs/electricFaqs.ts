import type { FAQItem } from "../calculatorsData";

export const electricFaqs: FAQItem[] = [
  {
    "question": "How do I calculate the kilowatt-hour (kWh) consumption of an appliance?",
    "answer": "To calculate kWh, multiply the appliance wattage (W) by the number of hours used per day, and divide by 1,000. Formula: <code>kWh = (Watts × Hours) ÷ 1,000</code>. For example, running a 1,500-watt space heater for 6 hours consumes <code>(1,500 × 6) ÷ 1,000 = 9 kWh</code> per day. Use our <a href=\"/calculators/electric\">Electric Calculator</a> to compute instant daily, monthly, and annual utility costs."
  },
  {
    "question": "What is the difference between running wattage and starting (surge) wattage?",
    "answer": "Running wattage (rated power) is the continuous electricity an appliance draws while operating normally. Starting (surge) wattage is the momentary power spike (lasting 2 to 3 seconds) required by motorized appliances (refrigerators, AC compressors, well pumps) to start their motors—often 2x to 3x higher than running watts. For utility bills, calculate costs using continuous running wattage and duty cycles, not momentary surge wattage."
  },
  {
    "question": "How do compressor duty cycles affect refrigerator and air conditioner costs?",
    "answer": "Refrigerators and air conditioners do not run continuously at full wattage. A modern Energy Star refrigerator rated at 150W operates on an average 33% to 40% duty cycle (running 8 to 10 hours total per 24-hour day). When estimating electricity costs, multiply the rated power draw by the active duty cycle rather than assuming 24-hour continuous consumption."
  },
  {
    "question": "What is phantom load (vampire power) and how much does it cost?",
    "answer": "Phantom load (standby power) is electricity consumed by electronics while switched off or in standby mode (smart TVs, gaming consoles, microwave clocks, phone chargers). According to the U.S. Department of Energy, standby power accounts for 5% to 10% of residential electricity use, adding $100 to $200 annually to the average household electric bill. Using smart power strips eliminates idle draw."
  },
  {
    "question": "How do I convert BTU/hr or Tons of AC into electrical Watts?",
    "answer": "One ton of residential cooling equals 12,000 BTU/hr. To determine electrical wattage, divide BTU/hr by the unit's Seasonal Energy Efficiency Ratio (SEER or EER). For example, a 3-ton (36,000 BTU) central AC with a 14 SEER rating draws approximately <code>36,000 ÷ 14 ≈ 2,570 Watts</code> of continuous electrical power while the compressor is actively engaged."
  },
  {
    "question": "How much does it cost to charge an Electric Vehicle (EV) at home?",
    "answer": "Home EV charging costs depend on battery capacity (kWh) and your electric utility rate ($/kWh). Charging an 80 kWh EV battery from 10% to 90% requires 64 kWh. At the national average utility rate of $0.1688 per kWh, a full 64 kWh charge costs approximately <code>64 × $0.1688 = $10.80</code>, providing roughly 240 to 280 miles of driving range."
  },
  {
    "question": "Why is my utility bill higher than my calculated appliance electricity cost?",
    "answer": "Electric utility bills include both electricity supply charges (cost per kWh generated) and fixed delivery/transmission charges, grid maintenance fees, local municipal taxes, and fuel adjustments. In many jurisdictions, delivery fees add 4¢ to 10¢ per kWh on top of the base generation rate. Always input the 'Total Effective Rate' from your bill (Total Bill Amount ÷ Total kWh Used)."
  },
  {
    "question": "How do Time-of-Use (TOU) rates affect electricity costs?",
    "answer": "Under Time-of-Use (TOU) billing plans, utilities charge higher rates during peak demand hours (typically 4 PM to 9 PM on weekdays) and discounted rates during off-peak hours (overnight and early morning). Shifting high-draw appliances (EV chargers, dishwashers, clothes dryers) to off-peak periods can reduce appliance operating costs by 30% to 50%."
  }
];
