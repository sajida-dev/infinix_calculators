import type { FAQItem } from "../calculatorsData";

export const globalSurgeryFaqs: FAQItem[] = [
  {
    "question": "What is a CPT Global Surgery Period?",
    "answer": "A CPT Global Surgery Period (established by CMS and the AMA) is the designated timeframe during which all routine preoperative, intraoperative, and postoperative medical care related to a surgical procedure is bundled into the single surgical fee. Separate billing for routine post-op visits is prohibited during this window."
  },
  {
    "question": "What are the three standard CMS global surgery period classifications?",
    "answer": "CMS classifies surgical procedures into three global periods: <strong>000 Days</strong> (minor endoscopies and diagnostic tests; billing resumes post-op Day 1), <strong>010 Days</strong> (minor surgical procedures; day of surgery + 10 post-op days; billing resumes Day 11), and <strong>090 Days</strong> (major surgical operations; 1 day pre-op + surgery date + 90 post-op days; billing resumes Day 91). Check exact dates with our <a href=\"/calculators/global-surgery\">Global Surgery Calculator</a>."
  },
  {
    "question": "What is the global period for minor skin lesion excision (CPT 11402)?",
    "answer": "CPT 11402 (Excision of benign lesion, trunk/arms/legs, 1.1 to 2.0 cm) carries a <strong>10-day global surgery period (010 Days)</strong>. All routine suture removals, wound checks, and normal post-op visits within 10 days of the procedure date are bundled into the primary code payment."
  },
  {
    "question": "What is the global period for major hernia repair (CPT 49591 and CPT 49650)?",
    "answer": "Laparoscopic and open abdominal/inguinal hernia repair procedures (including CPT 49591, CPT 49650, and related laparoscopic hernioplasty codes) are classified as major surgical procedures with a <strong>90-day global surgery period (090 Days)</strong>."
  },
  {
    "question": "Can CPT 46600 (Anoscopy) be performed and billed during a 90-day global period?",
    "answer": "CPT 46600 (Diagnostic anoscopy) has a <strong>000-day global period</strong>. If performed during an unrelated 90-day surgical global period by the same surgeon, it can be billed separately by appending <strong>Modifier 79</strong> (Unrelated procedure by the same physician during post-op period) or <strong>Modifier 24</strong> for unrelated E/M services."
  },
  {
    "question": "What is the global period for percutaneous nephrolithotomy (CPT 50080)?",
    "answer": "CPT 50080 (Percutaneous nephrostolithotomy or pyelostolithotomy) is a major surgical procedure carrying a full <strong>90-day global surgery period (090 Days)</strong> under CMS National Physician Fee Schedule guidelines."
  },
  {
    "question": "Which medical billing modifiers allow reimbursement during a global post-op window?",
    "answer": "Standard billing modifiers used to bypass global surgery restrictions include: <strong>Modifier 24</strong> (Unrelated E/M service during post-op period), <strong>Modifier 25</strong> (Significant, separately identifiable E/M on day of minor procedure), <strong>Modifier 58</strong> (Staged/related procedure during post-op), <strong>Modifier 78</strong> (Unplanned return to OR for surgical complication), and <strong>Modifier 79</strong> (Unrelated procedure by the same physician)."
  }
];
