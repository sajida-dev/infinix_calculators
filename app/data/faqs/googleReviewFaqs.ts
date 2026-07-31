import type { FAQItem } from "../calculatorsData";

export const googleReviewFaqs: FAQItem[] = [
  {
    "question": "How many 5-star Google reviews do I need to raise my rating?",
    "answer": "This depends on your current review count and rating. Because Google uses a weighted arithmetic average, the more existing reviews you have, the more 5-star reviews you need to budge the score. For example, raising a 4.0 rating with 10 reviews to a 4.5 requires 10 five-star reviews. With 100 reviews, it requires 100 five-star reviews."
  },
  {
    "question": "How is the Google star rating calculated?",
    "answer": "Google calculates ratings as a weighted average: (Sum of all star values) ÷ (Total number of reviews). It then truncates or rounds the result to one decimal place for public display."
  },
  {
    "question": "How can I increase my Google star rating?",
    "answer": "To increase your rating, you must gather new 5-star reviews to dilute the statistical weight of low ratings. Sending direct review link requests to satisfied customers right after transactions is the most effective approach."
  },
  {
    "question": "Why is a perfect 5.0 Google rating mathematically impossible after a bad review?",
    "answer": "Once you have even one 1-star, 2-star, or 3-star review, the mathematical average of your score can never reach exactly 5.0, regardless of how many 5-star reviews you receive (since any value less than 5 in the average pulls it below 5.0). However, you can easily reach a rounded 4.9."
  },
  {
    "question": "Can a bad Google review be deleted or removed?",
    "answer": "You cannot delete a Google review simply because it is negative. However, you can flag and report reviews that violate Google's terms of service (such as fake accounts, harassment, or conflicts of interest). If the review is valid, the only solution is to get more 5-star reviews to out-average it."
  }
];
