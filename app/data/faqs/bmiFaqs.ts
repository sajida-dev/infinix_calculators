import type { FAQItem } from "../calculatorsData";

export const bmiFaqs: FAQItem[] = [
    {
        question: "What is a normal BMI score?",
        answer: "For most adults, a BMI between <strong>18.5 and 24.9</strong> falls in the \"normal weight\" range. Below 18.5 is classified as underweight, 25 to 29.9 as overweight, and 30 or above as obese. These ranges are general population screening categories, not a diagnosis."
    },
    {
        question: "How is BMI calculated?",
        answer: "BMI uses the formula <code>BMI = [Weight (lbs) ÷ Height (in)²] × 703</code>, or in metric units <code>BMI = Weight (kg) ÷ Height (m)²</code>. For example, a person who is 5'8\" (68 inches) and weighs 160 lbs has a BMI of (160 ÷ 68²) × 703 = <strong>24.3</strong>."
    },
    {
        question: "Is BMI an accurate measure of health for everyone?",
        answer: "No. BMI does not distinguish between muscle and fat mass, so athletes and highly muscular individuals can show a high BMI without excess body fat. It also does not account for age, sex, bone density, or fat distribution. BMI is a quick population-level screening tool, not a diagnostic measurement of individual health."
    },
    {
        question: "What other measurements should I consider alongside BMI?",
        answer: "Waist circumference, waist-to-hip ratio, and body fat percentage give a more complete picture of body composition than BMI alone. If you have concerns about your weight or health risk, discuss these measurements with a doctor or registered dietitian rather than relying on BMI in isolation."
    }
];
