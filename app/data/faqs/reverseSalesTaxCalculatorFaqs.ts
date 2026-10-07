import type { FAQItem } from "../calculatorsData";

export const reverseSalesTaxCalculatorFaqs: FAQItem[] = [
    {
        question: "What is a reverse sales tax calculator used for?",
        answer: "It extracts the original pre-tax price and the tax dollar amount from a receipt or invoice total that already includes sales tax — useful for bookkeeping, expense reports, and verifying that a charged total matches the expected tax rate. Try our free <a href=\"/calculators/reverse-sales-tax-calculator\">Reverse Sales Tax Calculator</a>."
    },
    {
        question: "What is the formula to remove tax from a total price?",
        answer: "<code>Base Price = Total ÷ (1 + Tax Rate)</code>, then <code>Tax Amount = Total − Base Price</code>. For example, a $108 receipt total at an 8% tax rate has a base price of $100.00 and $8.00 in tax."
    },
    {
        question: "How is reverse sales tax different from a normal sales tax calculation?",
        answer: "A normal sales tax calculation starts from a known pre-tax price and adds tax to find the total. Reverse sales tax works backward — you only know the final total and need to solve for the pre-tax price and tax portion, which requires dividing (not multiplying) by the tax rate factor."
    },
    {
        question: "Can I use this to double-check a receipt or invoice tax rate?",
        answer: "Yes. Enter the receipt's gross total and divide out the tax to see the implied base price, then compare the resulting tax amount to your expected local combined state and local rate to confirm the merchant charged the correct rate."
    }
];
