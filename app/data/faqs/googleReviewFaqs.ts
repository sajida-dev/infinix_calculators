import type { FAQItem } from "../calculatorsData";

export const googleReviewFaqs: FAQItem[] = [
  {
    question: "How many 5-star Google reviews do I need to increase my rating?",
    answer: "The number of 5-star reviews needed depends on your current rating, current review count, and target goal. You can calculate the exact number of consecutive 5-star reviews using the formula: <code>N = (Target Rating × Current Count - Total Star Sum) ÷ (5 - Target Rating)</code>. For example, if you have a 4.0 rating across 20 reviews (Total Sum = 80) and want to reach 4.5: <code>(4.5 × 20 - 80) ÷ (5 - 4.5) = 10 ÷ 0.5 = 20 five-star reviews needed</code>. Test your exact numbers with our free <a href=\"/calculators/google-review\">Google Review Calculator</a>."
  },
  {
    question: "How many 5-star reviews are needed to raise a 4.2 rating to 4.8 with 50 reviews?",
    answer: "With 50 reviews at a 4.2 average (Total Star Sum = 210), reaching a 4.8 rating requires: <code>(4.8 × 50 - 210) ÷ (5 - 4.8) = (240 - 210) ÷ 0.2 = 150 consecutive five-star reviews</code>. Diluting lower ratings becomes mathematically harder the more reviews you have. Read our guide on <a href=\"/blog/google-review-math-rating-boost\">Google Review Boost Math & Strategies</a>."
  },
  {
    question: "How does Google calculate your overall business star rating?",
    answer: "Google calculates business star ratings using a standard arithmetic weighted average: <code>Overall Rating = Total Sum of All Star Ratings ÷ Total Number of Reviews</code>. Google displays this score rounded to one decimal place (e.g. 4.7) on Google Maps and Search Knowledge Panels."
  },
  {
    question: "Why can't a Google business rating reach 5.0 after receiving a 1-star review?",
    answer: "Mathematically, once a 1-star, 2-star, or 3-star review is logged, the true arithmetic average of your scores will always be strictly less than 5.000 (e.g. 4.992). However, because Google rounds ratings to one decimal place, getting enough 5-star reviews will allow your public display badge to round up to a 4.9 or display a full 5-star visual icon."
  },
  {
    question: "Can fake or negative Google reviews be removed or deleted?",
    answer: "Business owners cannot delete negative reviews directly. However, you can flag and report reviews that violate Google's Prohibited and Restricted Content policies (such as spam, competitor defamation, harassment, employee conflicts, or reviews left for the wrong business). For legitimate customer complaints, responding professionally and collecting fresh 5-star reviews is the most effective way to restore your score."
  }
];
