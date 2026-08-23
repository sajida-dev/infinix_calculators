import type { FAQItem } from "../calculatorsData";

export const avalaraSalesTaxFaqs: FAQItem[] = [
  {
    question: "What is the sales tax rate for ZIP code 94105 in 2026?",
    answer: "The combined sales tax rate for ZIP code <strong>94105 (San Francisco, California)</strong> is <strong>8.625%</strong>. This rate consists of California state tax (6.00%), San Francisco County tax (0.25%), and special local district taxes (2.375%). For full breakdowns, read our <a href=\"/blog/avalara-94105-sales-tax-rate-and-address-lookup-guide\">Avalara 94105 Sales Tax & Address Lookup Guide</a> or test calculations with our <a href=\"/calculators/avalara-sales-tax\">Avalara Sales Tax Calculator</a>."
  },
  {
    question: "What is the sales tax rate for ZIP code 15204?",
    answer: "The sales tax rate for ZIP code <strong>15204 (Pittsburgh / Allegheny County, Pennsylvania)</strong> is <strong>7.00%</strong>. This includes the Pennsylvania state sales tax of 6.00% plus the Allegheny County local tax of 1.00%."
  },
  {
    question: "How does the Avalara tax calculator determine sales tax by street address?",
    answer: "Sales tax in the US is destination-based and determined by geo-location boundaries (state, county, city, transit district, and special taxing jurisdictions). Our free <a href=\"/calculators/avalara-sales-tax\">Avalara Sales Tax Lookup Tool</a> aggregates current state, county, and local rates for any 5-digit ZIP code or state selection automatically."
  },
  {
    question: "How much does Avalara AvaTax cost for small e-commerce businesses?",
    answer: "Avalara AvaTax plans start around <strong>$50 per year</strong> for basic address lookup tiers, scaling to $200–$500+ monthly for multi-state automated transaction calculation and filing integrations (Shopify, WooCommerce, NetSuite). Using our free online calculator allows unlimited manual sales tax estimates with zero subscription cost. Read our pricing breakdown in <a href=\"/blog/avalara-pricing-hidden-fees-and-tax-calculator-alternatives\">Avalara pricing & free alternatives</a>."
  },
  {
    question: "How do I calculate reverse sales tax to extract the pre-tax price from a total?",
    answer: "To extract the pre-tax item price from a tax-inclusive total, divide the gross receipt total by <code>(1 + Sales Tax Rate)</code>: <code>Pre-Tax Price = Total Amount ÷ (1 + Tax Rate)</code>. For example, at an 8.625% tax rate, a total receipt of $108.63 gives <code>$108.63 ÷ 1.08625 = $100.00</code> pre-tax base cost."
  }
];
