import type { FAQItem } from "../calculatorsData";

export const georgiaPayrollFaqs: FAQItem[] = [
    {
        question: "What is the Georgia state income tax rate for payroll withholding?",
        answer: "Georgia uses a flat personal income tax rate of <strong>5.39%</strong> as of the 2024 tax year (reduced from the prior graduated bracket system). Estimate your net paycheck with our free <a href=\"/calculators/georgia-payroll\">Georgia Payroll Calculator</a>."
    },
    {
        question: "How do I calculate my Georgia paycheck from gross pay?",
        answer: "Subtract federal withholding, FICA taxes (6.2% Social Security + 1.45% Medicare = 7.65% combined), and Georgia's flat 5.39% state tax from your gross pay: <code>Net Pay = Gross Pay − Federal Withholding − FICA − GA State Tax</code>. Pre-tax deductions like 401(k) contributions or health premiums reduce your taxable gross before these calculations."
    },
    {
        question: "What is the Georgia G-4 form and how does it affect my paycheck?",
        answer: "Form G-4 is Georgia's state withholding allowance certificate, similar to the federal W-4. The number of allowances you claim on it directly changes how much Georgia state tax is withheld from each paycheck — more allowances mean less withheld per paycheck (but potentially a larger tax bill or smaller refund at filing time)."
    },
    {
        question: "Are Georgia payroll taxes different for hourly vs. salaried employees?",
        answer: "No — the same flat 5.39% state rate and FICA percentages apply regardless of whether pay is hourly or salaried. The only difference is how gross pay is calculated: hourly employees multiply rate × hours (including any overtime premium), while salaried employees divide annual salary by the number of pay periods."
    }
];
