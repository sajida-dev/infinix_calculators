import type { FAQItem } from "../calculatorsData";

export const novigFaqs: FAQItem[] = [
    {
        question: "What is no-vig (devigged) betting?",
        answer: "No-vig, or \"devigged,\" odds remove the sportsbook's built-in profit margin (the vig, or overround) from a betting line to reveal the true, fair implied probability of each outcome. Calculate fair odds instantly with our free <a href=\"/calculators/novig\">No-Vig Calculator</a>."
    },
    {
        question: "How do you remove the vig from American odds?",
        answer: "Convert each side's American odds to implied probability, sum both probabilities (the total will exceed 100% due to the vig), then divide each individual probability by that total to normalize them back to a true 100% — this gives you the fair, no-vig probability and fair odds for each side."
    },
    {
        question: "What is a typical vig (overround) percentage at sportsbooks?",
        answer: "Standard -110/-110 two-way lines carry roughly a 4.5% to 4.8% vig. More competitive or high-volume markets can have vig as low as 2%, while less liquid markets (props, futures) often carry 8% or more."
    },
    {
        question: "Why do bettors calculate no-vig odds?",
        answer: "Removing the vig lets bettors compare a sportsbook's line to the \"true\" market probability, which is useful for identifying positive expected value (+EV) bets, comparing odds across multiple books, and building more accurate parlay or hedge calculations."
    }
];
