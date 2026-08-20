import { FAQItem } from "../calculatorsData";

export const tanInverseFaqs: FAQItem[] = [
  {
    question: "What is the formula for calculating tan inverse (arctan)?",
    answer: "The tan inverse function, denoted as arctan(x) or tan⁻¹(x), calculates the angle θ whose tangent is x: θ = arctan(x) where tan(θ) = opposite / adjacent = x. In calculus and programming, arctan is defined across all real numbers (-∞, ∞) with standard principal range (-π/2, π/2) or (-90°, 90°)."
  },
  {
    question: "What is tan inverse of 1 in radians and degrees?",
    answer: "The tan inverse of 1 is exactly π/4 radians (approximately 0.785398 rad) or 45 degrees. Since tan(45°) = 1 / 1 = 1, arctan(1) = 45°."
  },
  {
    question: "What is tan inverse of -1 and -3?",
    answer: "Because the arctan function is an odd function (arctan(-x) = -arctan(x)), the tan inverse of -1 is -π/4 radians (-45°). For -3, arctan(-3) = -arctan(3) ≈ -1.2490 radians or -71.565°."
  },
  {
    question: "How do you convert tan inverse results from radians to degrees?",
    answer: "To convert radians to degrees, multiply the radian value by (180 / π). For example, if arctan(x) = 0.7854 radians, degrees = 0.7854 × (180 / 3.14159) = 45°."
  },
  {
    question: "What is the difference between atan and atan2?",
    answer: "The standard atan(x) function takes a single ratio (y/x) and returns angles strictly between -90° and +90° (Quadrants I and IV). The atan2(y, x) function takes separate y and x coordinates and returns the full 360° (-180° to +180°) angle, correctly identifying Quadrants II and III based on the signs of x and y."
  },
  {
    question: "How is the inverse tangent used in real-world engineering and construction?",
    answer: "Inverse tangent is used to calculate roof pitch slopes, wheelchair ramp inclines, solar panel tilt angles, navigation bearings, and electrical alternating current (AC) phase angles between resistance and reactance."
  }
];
