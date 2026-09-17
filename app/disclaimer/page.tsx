import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Disclaimer – Infinix Calculators",
  description:
    "Read the legal disclaimer governing calculations, financial estimates, tax metrics, health indicators, and material estimators provided on Infinix Calculators.",
  robots: "index, follow",
  alternates: {
    canonical: "https://infinixcalculator.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Legal &amp; YMYL Disclaimer
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Important notices regarding calculation accuracy, financial estimates, tax metrics, medical baseline indicators, and third-party trademarks.
          </p>
        </header>

        <div className="space-y-8 bg-white dark:bg-dark-card p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-dark-border shadow-xs leading-relaxed text-sm sm:text-base text-slate-600 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              1. General Estimation Purpose
            </h2>
            <p>
              All tools, calculators, models, and informational articles published on <strong>Infinix Calculators</strong> (accessible via <Link href="/" className="text-primary underline">infinixcalculator.com</Link>) are provided strictly for educational, informational, and personal convenience purposes.
            </p>
            <p>
              While we strive to ensure formulas, conversion factors, and mathematical constants are accurate and updated against standard published benchmarks, calculation outputs represent approximate mathematical estimates only.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              2. Financial, Loan &amp; Mortgage Disclaimer
            </h2>
            <p>
              Calculations involving loan payments, APR simple interest (such as Affirm financing estimators), interest savings, pro rata splits, HELOC payment schedules, or card processing gross-ups are theoretical mathematical models.
            </p>
            <p>
              These calculations do not constitute formal credit offers, underwriting decisions, loan commitments, or professional financial, investment, legal, or accounting advice. Actual interest rates, payment terms, merchant processing fees, taxes, and lender fees depend on individual credit profiles, merchant agreements, and contract terms. Always consult a certified financial planner or accountant before entering into credit contracts.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              3. Tax &amp; Payroll Disclaimer
            </h2>
            <p>
              Tax rate calculations (including Avalara sales tax estimations and payroll gross-up tools) utilize general federal, state, county, and municipal rate structures. Tax codes change frequently and vary by local jurisdiction, product taxability exemptions, and nexus rules.
            </p>
            <p>
              Calculations on this website do not constitute certified tax advice or legal tax filing determinations. Consult a licensed Certified Public Accountant (CPA) or tax attorney for professional tax guidance.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              4. Health &amp; Fitness (BMI) Disclaimer
            </h2>
            <p>
              Health metrics such as Body Mass Index (BMI) are population-level screening parameters derived from World Health Organization standard formulas. BMI scores do not diagnose health conditions, measure body fat distribution, or substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              Always seek advice from a qualified healthcare provider regarding medical conditions or health goals.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              5. Construction &amp; Material Estimating Disclaimer
            </h2>
            <p>
              Landscaping and material estimators (such as topsoil volume, concrete slab yardage, and roof shingle coverage) compute mathematical volume based on clean geometric user inputs. Actual project material requirements may vary based on soil compaction, terrain pitch, site slope, waste factors, and contractor installation technique. Always consult licensed contractors before placing commercial bulk material orders.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              6. Third-Party Trademarks &amp; Independence Notice
            </h2>
            <p>
              All product names, brand logos, trademarks, and registered trademarks referenced across this site (including but not limited to <em>Affirm, Avalara, Square, Google, LSAT, TI, Casio</em>) are the property of their respective trademark holders.
            </p>
            <p>
              Reference to any specific commercial product, process, or service by trade name or trademark does not constitute or imply endorsement, sponsorship, or recommendation by the trademark owner. Infinix Calculators is an independent tool developer with no direct commercial affiliation with these trademark owners unless explicitly declared.
            </p>
          </section>

          <hr className="border-slate-200 dark:border-dark-border" />

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              7. Contact Information
            </h2>
            <p>
              If you have questions regarding this Disclaimer or notice any mathematical discrepancies, please reach out to our team at{" "}
              <a href="mailto:support@infinixcalculator.com" className="text-primary font-bold hover:underline">
                support@infinixcalculator.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
