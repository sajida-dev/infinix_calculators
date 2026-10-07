import type { FAQItem } from "../calculatorsData";

export const armMortgageFaqs: FAQItem[] = [
    {
        question: "What does 5/1 mean in a 5/1 ARM mortgage?",
        answer: "The first number (5) is the number of years the interest rate stays fixed at the initial \"teaser\" rate. The second number (1) is how often the rate can adjust afterward — every 1 year. Model your own ARM with our free <a href=\"/calculators/arm-mortgage\">ARM Mortgage Calculator</a>."
    },
    {
        question: "How is the initial ARM payment calculated?",
        answer: "The initial payment uses the standard amortization formula with the teaser rate: <code>Payment = Loan × [r(1+r)^n] ÷ [(1+r)^n − 1]</code>, where r is the monthly teaser rate and n is the total number of payments (typically 360 for a 30-year term)."
    },
    {
        question: "What is a lifetime rate cap and how does it affect my worst-case payment?",
        answer: "A lifetime cap limits how much the interest rate can increase over the entire life of the loan, regardless of market rates. For example, a 6.0% initial rate with a 5.0% lifetime cap means the rate can never exceed 11.0%, which sets the absolute ceiling on your future monthly payment."
    },
    {
        question: "Is an ARM cheaper than a fixed-rate mortgage?",
        answer: "ARMs typically offer a lower initial rate than a comparable fixed-rate mortgage, which can save money if you sell or refinance before the fixed period ends. However, if rates rise and you keep the loan past the initial period, an ARM can become more expensive than a fixed-rate mortgage over the loan's full lifetime."
    },
    {
        question: "Who should consider an adjustable-rate mortgage?",
        answer: "ARMs can make sense for buyers who plan to sell, relocate, or refinance before the initial fixed-rate period ends, or who expect their income to rise enough to absorb a potential payment increase. Buyers planning to stay in a home long-term generally have more payment certainty with a fixed-rate mortgage."
    }
];
