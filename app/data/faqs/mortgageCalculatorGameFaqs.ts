import type { FAQItem } from "../calculatorsData";

export const mortgageCalculatorGameFaqs: FAQItem[] = [
  {
    "question": "What is the Mortgage Calculator Game and how do you play?",
    "answer": "The <a href=\"/calculators/mortgage-calculator-game\">Mortgage Calculator Game</a> has three educational modes: an extra-payment payoff visualizer, a fictional rental portfolio, and a 15- versus 30-year loan comparison. The payoff mode estimates how extra monthly principal changes interest and repayment time. The portfolio starts with $60,000 in fictional cash; it is not a real investment forecast."
  },
  {
    "question": "What can the Mortgage Calculator Game help me understand?",
    "answer": "The payoff and term-comparison modes show principal-and-interest estimates based on the loan balance, fixed APR, and term. They exclude property taxes, insurance, HOA charges, closing costs, and prepayment penalties. Extra payments are assumed to reach principal each month. Results do not predict approval or provide an affordability assessment."
  },
  {
    "question": "What does the 15- versus 30-year comparison keep constant?",
    "answer": "Both terms use the home price, down payment percentage, and APR selected in Debt Acceleration. The comparison excludes extra payments for both terms. Holding the loan balance and rate constant separates the effect of the term; actual lenders may offer different rates or fees for each term."
  },
  {
    "question": "How does the Savings Score work?",
    "answer": "The score is the estimated interest saved divided by scheduled interest without extra payments, multiplied by 1,000 and rounded. It is capped at 1,000. At 0% APR the score is zero because neither scenario has interest, even if extra payments shorten repayment. It is not a credit score, lender decision, or financial recommendation."
  },
  {
    "question": "How much faster can you pay off a 30-year mortgage by making 1 extra payment per year?",
    "answer": "An extra payment can shorten the payoff period and reduce interest, but the effect depends on the balance, rate, term, payment timing, and lender treatment of extra payments. Enter your own assumptions in the simulator instead of relying on a general example."
  },
  {
    "question": "Does the simulator support a 0% APR mortgage?",
    "answer": "Yes. For example, a $360,000 loan over 360 months at 0% APR has a $1,000 monthly principal payment. Adding another $1,000 each month pays it off in 180 months. Both scenarios have zero interest. This is a mathematical scenario, not a claim that a lender offers this rate."
  },
  {
    "question": "How does a 7.5% interest rate compare to a 3.5% rate in total interest paid?",
    "answer": "A higher rate generally increases the scheduled payment and total interest for the same balance and term. The exact difference depends on principal, term, payment timing, fees, and assumptions, so compare both scenarios with the same inputs in our <a href=\"/calculators/mortgage-calculator-game\">Mortgage Calculator Simulator</a>."
  },
  {
    "question": "Can you play the Mortgage Calculator Game online unblocked for classroom education?",
    "answer": "The Infinix <a href=\"/calculators/mortgage-calculator-game\">Mortgage Calculator Game</a> is a free browser-based educational simulation that does not require an account or download. Network access can vary by school or workplace, so confirm that the site is permitted on the network you use."
  },
  {
    "question": "Does this page include F1, Formula Racers, or driving games?",
    "answer": "No. This page provides educational mortgage and rental-portfolio simulations, not F1 racing, Formula Racers, car driving, or sports games. The payoff marker represents a repayment timeline rather than a playable vehicle."
  },
  {
    "question": "What assumptions does the portfolio simulation use?",
    "answer": "The portfolio uses preset property prices, down payments, rents, and mortgage payments. Each year adds fictional 3% appreciation and an equity credit equal to 2.5% of the property's current price, plus a random cash event. This is not a loan amortization calculation, a complete expense budget, or a forecast. The game clamps cash at zero rather than modeling insolvency."
  }
];
