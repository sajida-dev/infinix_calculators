import type { FAQItem } from "../calculatorsData";

export const helocPayoffFaqs: FAQItem[] = [
    {
        question: "What is the draw period on a HELOC and how does it affect my payment?",
        answer: "The draw period is typically the first <strong>5 to 10 years</strong> of a Home Equity Line of Credit, during which you can borrow against your available limit and pay <strong>interest-only</strong> on the outstanding balance. Once the draw period ends, the loan enters the repayment period, and payments jump to include both principal and interest. Model both phases with our free <a href=\"/calculators/heloc-payoff\">HELOC Payoff Calculator</a>."
    },
    {
        question: "How can I use a HELOC to pay off my mortgage faster?",
        answer: "Some homeowners use HELOC funds to make a lump-sum principal payment on their primary mortgage, then repay the HELOC balance over time. This can lower total interest only if the HELOC rate is favorable and you have the discipline to pay down the HELOC aggressively; otherwise you are simply trading one loan balance for another. Compare the math for your numbers before committing to this strategy."
    },
    {
        question: "What is a HELOC payment shock and how do I avoid it?",
        answer: "Payment shock happens when a HELOC transitions from interest-only draw payments to a fully amortizing principal-and-interest payment at the end of the draw period, often more than doubling the monthly payment. To avoid it, make voluntary principal payments during the draw period, refinance into a fixed-rate home equity loan before the transition, or budget for the higher repayment-period payment in advance."
    },
    {
        question: "Can I refinance a HELOC into a fixed-rate loan?",
        answer: "Yes. Many lenders allow you to convert all or part of a variable-rate HELOC balance into a fixed-rate home equity loan, locking in a predictable payment before the repayment period begins. This removes exposure to future rate increases but may involve new closing costs, so compare total interest cost against staying on the existing HELOC terms."
    },
    {
        question: "How is the HELOC repayment period payment calculated?",
        answer: "Once the draw period ends, the remaining balance is amortized like a standard loan using <code>Payment = Balance × [r(1+r)^n] ÷ [(1+r)^n - 1]</code>, where r is the monthly interest rate and n is the number of remaining months. For example, a $50,000 balance at 8.5% APR over a 15-year repayment term requires roughly $492/month, compared to about $354/month interest-only during the draw period."
    }
];
