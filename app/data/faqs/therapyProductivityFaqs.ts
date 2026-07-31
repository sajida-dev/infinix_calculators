import type { FAQItem } from "../calculatorsData";

export const therapyProductivityFaqs: FAQItem[] = [
  {
    "question": "What is a therapy productivity calculator?",
    "answer": "A tool used by physical therapists (PT), occupational therapists (OT), and speech-language pathologists (SLP) to calculate their billable clinical treatment time against their total paid shift duration."
  },
  {
    "question": "How do I calculate PT productivity with a 30-minute unpaid lunch break?",
    "answer": "Input your paid shift hours (e.g. 8 hours) and unpaid lunch break (e.g. 30 minutes). The calculator will compute your total scheduled work window (8.5 hours) and let you know the target billable minutes needed based on your clinic's productivity target."
  },
  {
    "question": "What is a typical productivity target for therapists?",
    "answer": "Most skilled nursing facilities (SNFs) and outpatient clinics enforce a therapy productivity target between 80% and 85%. Outpatient pediatric clinics may have lower targets (around 70-75%) due to administrative overhead."
  },
  {
    "question": "What counts as billable minutes for therapists?",
    "answer": "Only direct patient care (evaluations, therapeutic exercises, manual therapy) under active CPT codes is billable. Administrative tasks like chart documentation, scheduling, meetings, and sanitizing equipment are unbillable."
  },
  {
    "question": "How does the 30 minute lunch break calculator work?",
    "answer": "It adds your unpaid break minutes to your total paid minutes to show the exact duration of your overall shift. For an 8-hour shift with a 30-minute lunch, you will be at the facility for 8 hours and 30 minutes."
  }
];
