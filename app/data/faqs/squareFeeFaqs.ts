import type { FAQItem } from "../calculatorsData";

export const squareFeeFaqs: FAQItem[] = [
  {
    "question": "Are Square processing fees worth it for small business owners?",
    "answer": "For new, mobile, or low-to-medium volume businesses ($0 to $10,000/month), Square's no-monthly-fee, flat-rate model is highly cost-effective and convenient. However, for high-volume merchants processing over $15,000 to $20,000 monthly, switching to traditional Interchange-Plus merchant accounts often yields lower effective processing rates."
  },
  {
    "question": "What is Square's standard processing fee rate?",
    "answer": "Square charges 2.6% + $0.10 for in-person tapped, swiped, or chip payments, 2.9% + $0.30 for online store checkouts, 3.3% + $0.30 for Square Invoices, and 3.5% + $0.15 for manually keyed transactions."
  },
  {
    "question": "How do I calculate how much to invoice so I get my exact desired net amount?",
    "answer": "Use the reverse gross-up formula: Invoice Total = (Desired Net + Fixed Fee) ÷ (1 - Percentage Rate). For example, to net $1,000 on an online invoice (2.9% + $0.30), calculate ($1,000 + $0.30) ÷ (1 - 0.029) = $1,030.18."
  },
  {
    "question": "Is it legal to pass Square credit card processing fees to customers?",
    "answer": "In most US states, surcharging credit card transactions is legal provided you do not surcharge debit cards, cap the surcharge at your actual processing cost (or a max of 3%), and provide clear advance signage. Note that state laws in Massachusetts, Connecticut, and Puerto Rico restrict or ban surcharging."
  },
  {
    "question": "What is the difference between a surcharge and a cash discount?",
    "answer": "A surcharge adds an extra percentage to credit card transactions at checkout. A cash discount sets regular prices for credit card users and offers a discount for cash or check payments. Cash discounts are legal in all 50 US states and generally encounter less customer resistance."
  },
  {
    "question": "Are Square credit card processing fees tax-deductible?",
    "answer": "Yes! Processing fees paid to Square (and other payment processors) are considered ordinary and necessary business expenses and are 100% tax-deductible on IRS Schedule C or corporate tax returns."
  },
  {
    "question": "Does Square calculate fees on sales tax and tips?",
    "answer": "Yes. Square calculates transaction fees on the total authorized charge amount, which includes base item price, state/local sales tax, and customer gratuity/tips."
  },
  {
    "question": "How do I calculate Square processing fees from my 1099-K tax form?",
    "answer": "Form 1099-K reports gross sales volume before any processor fees are subtracted. To find your net income for tax filing, deduct total annual Square transaction fees as a business expense on IRS Schedule C."
  },
  {
    "question": "Are there zero-fee payment processor alternatives to Square?",
    "answer": "Zero-fee processing models rely on automatic cash discounting or compliant dual-pricing POS hardware that adds customer-facing technology fees at checkout, offsetting processing costs entirely for the merchant."
  }
];
