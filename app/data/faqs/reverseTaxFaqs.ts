import type { FAQItem } from "../calculatorsData";

export const reverseTaxFaqs: FAQItem[] = [
    {
        question: "What is reverse sales tax and when do I need it?",
        answer: "Reverse tax calculation extracts the pre-tax base price and the tax amount from a total that already includes tax — useful for expense reports, bookkeeping, and checking receipts where only the final charged total is listed. Use our free <a href=\"/calculators/reverse-tax\">Reverse Tax Calculator</a>."
    },
    {
        question: "What is the formula to reverse-calculate tax from a total?",
        answer: "Divide the gross total by 1 plus the tax rate (as a decimal): <code>Base Price = Total ÷ (1 + Tax Rate)</code>, then <code>Tax Paid = Total − Base Price</code>. For a $106 total at a 6% tax rate: $106 ÷ 1.06 = $100 base price, and $6.00 was tax."
    },
    {
        question: "Why can't I just multiply the total by the tax rate to find the tax amount?",
        answer: "Multiplying the tax-inclusive total by the tax rate overstates the tax, because the rate applies to the pre-tax base price, not the total. For example, at 8% tax, multiplying a $108 total by 8% gives $8.64 (wrong), while the correct reverse calculation gives $8.00."
    },
    {
        question: "How do I reverse-calculate service tax under a reverse charge basis?",
        answer: "Reverse charge mechanisms shift the tax remittance obligation to the buyer instead of the seller, but the math to extract the tax-exclusive value from a gross figure is the same division formula: divide the gross amount by (1 + tax rate). Confirm which party is responsible for remitting the tax with your accountant, since that depends on jurisdiction-specific rules, not the arithmetic."
    },
    {
        question: "Does the reverse tax calculator work for VAT as well as US sales tax?",
        answer: "Yes. The math is identical for VAT-inclusive pricing common outside the US — divide the VAT-inclusive total by (1 + VAT rate) to recover the pre-VAT price and VAT amount."
    }
];
