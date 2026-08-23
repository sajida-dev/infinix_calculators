import { FAQItem } from "../calculatorsData";

export const tanInverseFaqs: FAQItem[] = [
  {
    question: "What is the formula for calculating tan inverse (arctan)?",
    answer: "The tan inverse function, written as <code>arctan(x)</code> or <code>tan⁻¹(x)</code>, computes the angle θ whose tangent equals x: <code>θ = arctan(x)</code> where <code>tan(θ) = Opposite ÷ Adjacent = x</code>. The standard principal value range is <code>-π/2 < θ < π/2</code> (or <code>-90° < θ < 90°</code>). Calculate angles in radians and degrees using our free <a href=\"/calculators/tan-inverse\">Tan Inverse Calculator</a>."
  },
  {
    question: "What is tan inverse of 1 in radians and degrees?",
    answer: "The tan inverse of 1 is exactly <strong>π/4 radians</strong> (approximately <strong>0.785398 rad</strong>) or <strong>45 degrees</strong>. Because tan(45°) = 1 / 1 = 1, arctan(1) = π/4 = 45°."
  },
  {
    question: "What is tan inverse of -3 in radians and degrees?",
    answer: "The tan inverse of -3 is approximately <strong>-1.249046 radians</strong> or <strong>-71.565 degrees</strong>. Because arctan is an odd function (<code>arctan(-x) = -arctan(x)</code>), arctan(-3) = -arctan(3) = -1.2490 rad."
  },
  {
    question: "What is tan inverse of 2 in radians and degrees?",
    answer: "The tan inverse of 2 is approximately <strong>1.107149 radians</strong> or <strong>63.435 degrees</strong>. In degrees and minutes, it equals 63° 26′ 6″."
  },
  {
    question: "What is tan inverse of -1 in radians and degrees?",
    answer: "The tan inverse of -1 is exactly <strong>-π/4 radians</strong> (approximately <strong>-0.785398 rad</strong>) or <strong>-45 degrees</strong> (or 315° in positive standard circle orientation)."
  },
  {
    question: "How do you convert tan inverse results from radians to degrees?",
    answer: "To convert any radian angle to degrees, multiply the radian value by <code>(180 / π)</code>: <code>Degrees = Radians × (180 ÷ 3.14159265)</code>. Conversely, to convert degrees to radians, multiply by <code>(π ÷ 180)</code>."
  },
  {
    question: "What is the difference between atan and atan2?",
    answer: "The standard <code>atan(x)</code> function accepts a single ratio (y/x) and returns angles restricted to Quadrants I and IV (-90° to +90°). The <code>atan2(y, x)</code> function accepts separate Y and X Cartesian coordinates and returns the complete 360° angle (-180° to +180°), correctly distinguishing Quadrants II and III."
  }
];
