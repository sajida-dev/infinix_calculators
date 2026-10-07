import type { FAQItem } from "../calculatorsData";

export const moneyMarketRateFaqs: FAQItem[] = [
    {
        question: "How do I calculate money market account interest?",
        answer: "Money market accounts compound interest, usually daily or monthly. Use <code>A = P(1 + r/n)^(nt)</code> for a lump sum, adding monthly deposits as an annuity if you contribute regularly. A $10,000 deposit at 4.5% APY compounded monthly with $300/month added grows to roughly $22,785 after 3 years. Model your own numbers with our free <a href=\"/calculators/money-market-rate\">Money Market Interest Calculator</a>."
    },
    {
        question: "What is the difference between a Money Market Account (MMA) and a Money Market Mutual Fund?",
        answer: "A Money Market Account is an FDIC-insured bank deposit product with a variable interest rate, check-writing privileges, and limited monthly withdrawals. A Money Market Mutual Fund is a brokerage investment product that holds short-term debt instruments and is not FDIC-insured, though it is generally considered low-risk."
    },
    {
        question: "How is APY different from the stated interest rate on a money market account?",
        answer: "The stated (nominal) interest rate does not account for compounding within the year, while APY (Annual Percentage Yield) reflects the actual annual return including compounding frequency. A 4.4% rate compounded daily yields a slightly higher APY, around 4.5%, than the nominal rate alone would suggest."
    },
    {
        question: "Do money market accounts have minimum balance requirements?",
        answer: "Many banks tier their money market APY by balance — you often need to maintain a minimum balance (commonly $1,000 to $25,000+) to earn the top advertised rate, and falling below that threshold can drop your account into a lower rate tier or trigger a monthly fee."
    },
    {
        question: "Are money market accounts a good place for an emergency fund?",
        answer: "Yes, for many savers — money market accounts combine FDIC insurance (up to $250,000 per depositor, per bank), competitive interest rates, and liquidity (check-writing or debit card access in many cases), making them a common choice for emergency funds compared to a standard low-yield savings account."
    }
];
