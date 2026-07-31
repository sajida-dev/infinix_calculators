import type { FAQItem } from "../calculatorsData";

export const avalaraSalesTaxFaqs: FAQItem[] = [
  {
    "question": "What is the sales tax rate for ZIP code 94105?",
    "answer": "The combined sales tax rate for ZIP code 94105 (San Francisco, California) is 8.625%. This comprises the California state tax of 6.00%, San Francisco County tax of 0.25%, and local district taxes of 2.375%."
  },
  {
    "question": "How does the Avalara tax calculator determine sales tax?",
    "answer": "It calculates sales tax based on the transaction's destination (the buyer's ZIP code). By checking the state, county, and local district rates, it aggregates them into a single combined sales tax rate applied to the purchase price."
  },
  {
    "question": "Is the tax calculation accurate for all US locations?",
    "answer": "Yes. The calculator supports custom percentage entries for any jurisdiction and includes a lookup database for popular ZIP codes (such as New York 10001, San Francisco 94105, Seattle 98101, and Chicago 60601) to automate the calculation."
  }
];
