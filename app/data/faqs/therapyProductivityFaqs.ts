import type { FAQItem } from "../calculatorsData";

export const therapyProductivityFaqs: FAQItem[] = [
  {
    question: "What is a therapy productivity calculator and how is it used?",
    answer: "A therapy productivity calculator is a clinical management tool used by Physical Therapists (PT), Occupational Therapists (OT), Physical Therapist Assistants (PTA), and Certified Occupational Therapy Assistants (COTA) to measure the percentage of paid working hours dedicated to direct billable patient treatment vs. non-billable administrative documentation time. Test your daily efficiency using our free <a href=\"/calculators/therapy-productivity\">Therapy Productivity Calculator</a>."
  },
  {
    question: "How do I calculate PT / OT productivity with a 30-minute unpaid lunch break?",
    answer: "To calculate therapy productivity with an unpaid lunch break: 1) Take total scheduled facility time (e.g. 8.5 hours = 510 minutes). 2) Deduct the 30-minute unpaid lunch to find paid working time (480 minutes / 8.0 hours). 3) Divide your total direct billable treatment minutes by 480 minutes, then multiply by 100: <code>Productivity % = (Billable Treatment Minutes ÷ 480) × 100</code>. For an 80% target on an 8-hour paid shift, you must log 384 billable minutes (6.4 hours)."
  },
  {
    question: "What are typical productivity benchmark targets for PT, OT, and PTA in SNF vs. Outpatient clinics?",
    answer: "In Skilled Nursing Facilities (SNF), productivity targets are typically high, ranging between <strong>80% and 85% for supervising PTs/OTs</strong> and <strong>85% to 90% for PTAs and COTAs</strong>. In hospital acute care, targets average <strong>65% to 75%</strong> due to patient transport and nursing coordination. In outpatient orthopedic clinics, standard expectations are <strong>75% to 85%</strong>. Read our complete guide on <a href=\"/blog/therapy-productivity-calculator-guide\">therapy productivity guidelines & SNF benchmarks</a>."
  },
  {
    question: "What activities count as billable minutes for therapists?",
    answer: "Only direct, one-on-one or group patient interventions billed under active CPT codes (e.g. 97110 Therapeutic Exercise, 97112 Neuromuscular Re-education, 97140 Manual Therapy, 97530 Therapeutic Activities, 97161 PT Evaluation) count as billable minutes. Charting, EMR documentation, physician phone calls, family consultations without the patient present, team huddles, and sanitizing equipment are non-billable."
  },
  {
    question: "How does the 8-minute rule apply to therapy productivity calculations?",
    answer: "Under Medicare Part B billing rules, timed CPT codes require a minimum of 8 minutes of direct treatment to bill 1 unit. For example: 8–22 minutes = 1 unit; 23–37 minutes = 2 units; 38–52 minutes = 3 units; 53–67 minutes = 4 units. Understanding the 8-minute rule ensures therapists accurately capture all billable time without leaving units unbilled."
  },
  {
    question: "How can therapists improve their productivity without compromising patient care quality?",
    answer: "Strategies include utilizing point-of-care (POC) documentation during rest intervals, using customizable EMR clinical phrase templates, staging treatment equipment prior to patient arrival, coordinating synchronized hand-offs with nursing staff, and tracking billable units in real-time with our <a href=\"/calculators/therapy-productivity\">Therapy Productivity App</a>."
  }
];
