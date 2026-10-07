import type { FAQItem } from "../calculatorsData";

export const balanceTransferFaqs: FAQItem[] = [
    {
        question: "Is a credit card balance transfer worth it?",
        answer: "Yes, if the interest saved during the 0% intro APR promotional window exceeds the upfront transfer fee (typically 3% to 5%). For example, transferring a $5,000 balance from a 22% APR card to an 18-month 0% card with a 3% fee ($150) saves over $1,200 in interest charges if paid off during the intro period. Calculate your exact net savings with our <a href=\"/calculators/balance-transfer\">Balance Transfer Calculator</a>."
    },
    {
        question: "How do you calculate the balance transfer fee?",
        answer: "Multiply the transferred debt balance by the fee percentage (usually 3% or 5%): <code>Fee = Transferred Amount × (Fee Rate ÷ 100)</code>. On a $10,000 balance with a 3% fee, the fee is $300, bringing your starting transferred loan balance to $10,300."
    },
    {
        question: "How do I work out how much I need to pay each month to clear a 0% balance transfer before the promo ends?",
        answer: "Divide the transferred balance (including the upfront fee, if financed) by the number of promotional months: <code>Monthly Payment = (Balance + Fee) ÷ Promo Months</code>. A $6,000 balance with a 3% fee ($180) over 15 months requires roughly $412/month to reach zero before the standard APR resumes."
    },
    {
        question: "What happens if I don't pay off the balance before the 0% promotional period ends?",
        answer: "Any remaining balance starts accruing interest at the card's standard purchase or balance transfer APR (often 18% to 29.99%), and some issuers apply that rate to the entire original transferred amount rather than just the leftover balance, so check your card's terms carefully."
    },
    {
        question: "Does a balance transfer hurt my credit score?",
        answer: "Opening a new card triggers a hard inquiry and slightly lowers your average account age, which can cause a small, temporary score dip. However, transferring debt to a card with a higher limit typically lowers your overall credit utilization ratio, which often improves your score within a few months."
    },
    {
        question: "Can I transfer a balance between two cards from the same bank?",
        answer: "Most issuers do not allow balance transfers between two cards you hold with them — the transfer must go to a card from a different issuer than the one holding the original debt."
    }
];
