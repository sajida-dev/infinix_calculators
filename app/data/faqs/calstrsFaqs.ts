import type { FAQItem } from "../calculatorsData";

export const calstrsFaqs: FAQItem[] = [
    {
        question: "How is a CalSTRS pension benefit calculated?",
        answer: "CalSTRS uses the formula <code>Monthly Benefit = Service Credit Years × Age Factor × Final Compensation ÷ 12</code>. The age factor depends on your membership tier and retirement age — for example, a 2% at 60 member retiring at 60 with 25 service years and $80,000 final compensation gets an annual benefit of 25 × 2.0% × $80,000 = $40,000. Estimate your own benefit with our free <a href=\"/calculators/calstrs\">CalSTRS Retirement Calculator</a>."
    },
    {
        question: "What is the difference between the CalSTRS 2% at 60 and 2% at 62 tiers?",
        answer: "Members hired before January 1, 2013 fall under the \"2% at 60\" formula, which reaches its maximum 2.4% age factor at age 63. Members hired on or after that date fall under the \"2% at 62\" formula (part of California's PEPRA reforms), which requires working to age 65 to reach the maximum age factor, and uses a different final compensation averaging period."
    },
    {
        question: "What counts as \"final compensation\" for a CalSTRS pension?",
        answer: "Final compensation is generally your highest average annual earnable salary over a specific period — 12 consecutive months for most 2% at 60 members with 25+ years of service, or a 36-month average for many 2% at 62 members, though specific rules depend on your contract and district."
    },
    {
        question: "Can unused sick leave increase my CalSTRS pension?",
        answer: "Yes, in many cases unused sick leave balances can be converted into additional service credit at retirement, which can slightly increase your final benefit calculation. Confirm the conversion rate and eligibility rules with your school district's HR office before retiring."
    }
];
