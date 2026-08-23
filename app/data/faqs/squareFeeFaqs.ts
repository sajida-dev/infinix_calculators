import type { FAQItem } from "../calculatorsData";

export const squareFeeFaqs: FAQItem[] = [
  {
    question: "How much does Square charge per transaction in 2026?",
    answer: "Square charges different standard rates based on payment method: <strong>2.6% + $0.10</strong> for in-person tapped, swiped, or chip-inserted payments; <strong>2.9% + $0.30</strong> for Square Online store purchases; <strong>3.3% + $0.30</strong> for Square Invoices paid online; and <strong>3.5% + $0.15</strong> for manually keyed card numbers or virtual terminal transactions. Calculate exact fees instantly using our free <a href=\"/calculators/square-fee\">Square Fee Calculator</a>."
  },
  {
    question: "What percentage does Square charge on a $100 sale?",
    answer: "On a $100 in-person contactless card payment (2.6% + $0.10), Square deducts a fee of <strong>$2.70</strong>, leaving you with <strong>$97.30 net payout</strong>. For an online invoice (3.3% + $0.30), Square takes <strong>$3.60</strong> ($96.40 net). For a manually keyed sale (3.5% + $0.15), Square takes <strong>$3.65</strong> ($96.35 net)."
  },
  {
    question: "How do I calculate how much to invoice a customer so Square fees don't reduce my payout?",
    answer: "Use the reverse fee surcharge formula: <code>Total to Charge = (Desired Net Payout + Fixed Fee) ÷ (1 - Percentage Rate)</code>. For example, to receive exactly $1,000 via a Square Invoice (3.3% + $0.30): <code>($1,000 + 0.30) ÷ (1 - 0.033) = $1,034.44</code>. Charging $1,034.44 covers the $34.44 processing fee and yields exactly $1,000 net in your bank account."
  },
  {
    question: "Is it legal to pass Square credit card processing fees to customers?",
    answer: "In most US states, surcharging credit card transactions is legal provided you follow major card network rules: do not surcharge debit cards (even if run as credit), cap the surcharge at your actual processing cost (or maximum 3%), and display clear advance signage before checkout. Note that surcharging is restricted or banned in Connecticut, Massachusetts, and Puerto Rico. Read our legal guide on <a href=\"/blog/how-to-pass-square-fees-to-customers-legally\">how to legally pass processing fees to customers</a>."
  },
  {
    question: "What is the difference between a surcharge and a cash discount?",
    answer: "A surcharge adds an additional percentage fee onto credit card transactions at the register. A cash discount advertises standard prices for card payments and offers a discount for cash or check payments. Cash discounts are legal in all 50 US states without state surcharge restrictions and generally create a more positive customer experience."
  },
  {
    question: "Are Square processing fees tax-deductible for small business owners?",
    answer: "Yes. Payment processing fees paid to Square, Stripe, or merchant banks are 100% ordinary and necessary business expenses and are fully tax-deductible on IRS Schedule C (Line 10/Line 27a) or Form 1120/1065 corporate returns."
  },
  {
    question: "Does Square charge fees on sales tax and customer tips?",
    answer: "Yes. Square assesses processing fees on the total authorized charge amount, which includes base item prices, state/local sales taxes, and customer tips or gratuities."
  },
  {
    question: "Are Square processing fees worth it compared to traditional merchant accounts?",
    answer: "Square is highly cost-effective for businesses processing under $10,000 to $15,000 per month because it has $0 monthly account fees, $0 PCI compliance fees, and no long-term contracts. For high-volume merchants processing over $20,000 monthly, an Interchange-Plus merchant processor may offer lower effective rates (often 1.8% to 2.2% effective). Read our cost analysis in <a href=\"/blog/are-square-processing-fees-worth-it-for-small-business\">are Square fees worth it for small businesses</a>."
  }
];
