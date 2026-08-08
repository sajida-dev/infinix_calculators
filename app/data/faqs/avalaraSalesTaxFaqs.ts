import type { FAQItem } from "../calculatorsData";

export const avalaraSalesTaxFaqs: FAQItem[] = [
  {
    "question": "What is the sales tax rate for ZIP code 94105?",
    "answer": "The combined sales tax rate for ZIP code 94105 (San Francisco, California) is 8.625%. This comprises the California state tax of 6.00%, San Francisco County tax of 0.25%, and local district taxes of 2.375%."
  },
  {
    "question": "How does the Avalara tax calculator determine sales tax?",
    "answer": "It calculates sales tax based on the transaction's destination (the buyer's ZIP code or street address). By checking the state, county, and local district rates, it aggregates them into a single combined sales tax rate applied to the purchase price. Try our free <a href=\"/calculators/avalara-sales-tax\">Avalara Sales Tax Calculator</a>."
  },
  {
    "question": "How do I look up Avalara sales tax rates by state or address?",
    "answer": "You can select your state or input a 5-digit ZIP code (such as San Francisco 94105 or Pittsburgh 15204) directly in our <a href=\"/calculators/avalara-sales-tax\">Avalara Sales Tax Lookup Tool</a> to fetch current state, county, and municipal tax rates automatically."
  },
  {
    "question": "What is Avalara AvaTax pricing for small businesses?",
    "answer": "Avalara AvaTax plans typically start around $50 per year for basic sales tax rate lookup tiers, scaling up to enterprise pricing based on transaction volume and multi-state filing integration. Using our free <a href=\"/calculators/avalara-sales-tax\">Online Avalara Calculator</a> allows unlimited manual sales tax calculations with zero subscription fee."
  },
  {
    "question": "How do I calculate reverse sales tax to find the pre-tax item price?",
    "answer": "To calculate pre-tax price from a total receipt amount including tax, divide the total amount by (1 + Sales Tax Rate). For example, at an 8.625% tax rate, divide $108.63 by 1.08625 to get the $100 pre-tax base cost."
  }
];
