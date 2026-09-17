import React from "react";
import type { Metadata } from "next";


// Page metadata
export const metadata: Metadata = {
  title: "Privacy Policy – Infinix Calculators",
  description:
    "Learn how Infinix Calculators collects, uses, and protects your data across all calculator tools and services.",
  robots: "index, follow",

  alternates: {
    canonical: "https://infinixcalculator.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO SECTION */}
        <section className="text-center mb-12">
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We value transparency. This page explains how Infinix Calculators
            collects, uses, and protects your information when you use our tools.
          </p>
        </section>

        {/* CONTENT WRAPPER START */}
        <section className="p-6 md:p-10 space-y-10">

          {/* INFORMATION WE COLLECT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Information We Collect
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We collect minimal and necessary information to provide accurate calculator results and improve user experience.
              Most tools can be used without creating an account.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border border-slate-300 dark:border-dark-border rounded-xl overflow-hidden text-sm md:text-base">
                <thead className="bg-slate-50 dark:bg-dark-card text-left text-slate-700 dark:text-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">What We Collect</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-300 dark:divide-dark-border">
                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Calculator Inputs</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Values entered in tools (e.g., area, soil depth)</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">To generate accurate results in real-time</td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Device Information</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Browser type, device type, screen size</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">To improve UI responsiveness and performance</td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Usage Data</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Pages visited, tool usage frequency</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">To improve features and user experience</td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Local Storage</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Client-side theme preference</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">To remember light/dark mode choices locally on your device</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* HOW WE USE INFORMATION */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              How We Use Information
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We use collected data strictly to operate, improve, and maintain our calculator services. We do not sell personal data to third parties.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>To provide accurate calculator outputs in real time</li>
              <li>To improve performance, speed, and UI responsiveness</li>
              <li>To analyze usage patterns and fix technical issues</li>
              <li>To enhance user experience across devices</li>
            </ul>
          </div>

          {/* CALCULATOR DATA HANDLING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Calculator Data Handling
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              All calculator inputs are processed locally in your browser whenever possible. We do not permanently store sensitive calculation inputs on our servers.
            </p>

            <div className="mt-5 p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              In most cases, calculations are performed instantly in your browser without being sent to a backend server.
            </div>
          </div>

          {/* Cookies and similar technologies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Cookies and Similar Technologies
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We use local storage to remember your theme preference. Google AdSense and Google Analytics, when enabled, and their partners may use cookies, web beacons, IP addresses, and similar identifiers to serve, measure, limit, and personalize ads or to measure site use, subject to your privacy choices and applicable law.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:shadow-sm transition">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Third-Party Services</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Third-party providers may collect and process identifiers as described in their own privacy notices when their services load on this site.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:shadow-sm transition">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Local Browser Computation</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  All calculator mathematical computations and unit conversions execute securely and immediately within your client browser.
                </p>
              </div>
            </div>
          </div>
          {/* ANALYTICS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Analytics & Performance Tracking
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We may use third-party analytics tools to understand how users interact with our calculators and improve performance.
              Analytics providers may process technical and usage information in accordance with their own policies.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Page views and session duration</li>
              <li>Tool usage frequency and interaction patterns</li>
              <li>Device and browser performance metrics</li>
            </ul>

            <div className="mt-5 p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-sm text-slate-600 dark:text-slate-300">
              We do not use analytics to personally identify users.
            </div>
          </div>

          {/* ADSENSE / ADVERTISING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Advertising & Google AdSense
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We use third-party advertising companies, including Google AdSense, to serve ads when you visit our website. These third parties may serve ads based on non-identifying contextual signals and browsing activity.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Third-Party Advertising</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Google and its certified partners serve relevant ads to our visitors based on contextual page information and user privacy settings.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Opt-Out &amp; Privacy Controls</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Users may opt out of personalized advertising at any time by managing their ad preferences in their Google account or through industry-standard consumer choice portals.
                </p>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p className="font-medium text-slate-900 dark:text-slate-100">Managing Your Ad Preferences:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                <li>
                  Learn how Google uses information from sites and apps that use its services by visiting{" "}
                  <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 font-medium underline">
                    How Google uses data when you use our partners&apos; sites or apps
                  </a>.
                </li>
                <li>
                  Opt out of Google personalized advertising by visiting{" "}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 font-medium underline">
                    Google Ads Settings
                  </a>.
                </li>
                <li>
                  Opt out of third-party personalized advertising by visiting{" "}
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 font-medium underline">
                    www.aboutads.info
                  </a>{" "}
                  or{" "}
                  <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-sky-400 font-medium underline">
                    Network Advertising Initiative
                  </a>.
                </li>
              </ul>
            </div>
          </div>

          {/* SECURITY */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Data Security
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We implement reasonable technical and organizational measures to protect user data from unauthorized access, misuse, or disclosure.
            </p>

            <div className="mt-6 p-5 rounded-xl bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/50 text-green-800 dark:text-emerald-200 text-sm leading-relaxed">
              Our calculators are designed with privacy-first principles, minimizing data collection wherever possible.
            </div>
          </div>

          {/* USER RIGHTS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Your Rights
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Depending on your location, you may have rights regarding your personal data, including access, correction, or deletion requests.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Request access to the data we collect about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of certain data (where applicable)</li>
              <li>Clear local preferences via browser settings</li>
            </ul>
          </div>

          {/* EXTERNAL LINKS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              External Links
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites.
            </p>

            <div className="mt-5 p-5 rounded-xl bg-yellow-50 dark:bg-amber-950/40 border border-yellow-100 dark:border-amber-800/50 text-yellow-800 dark:text-amber-200 text-sm leading-relaxed">
              Always review the privacy policies of external websites before providing any personal information.
            </div>
          </div>

          {/* POLICY UPDATES */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Changes to This Policy
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.
              Updates will be posted on this page with a revised date.
            </p>

            <div className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              Effective date: September 17, 2026. We encourage users to review this page periodically.
            </div>
          </div>


          {/* FINAL NOTE */}
          <div className="text-center pt-6 border-t border-slate-200 dark:border-dark-border">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              By using Infinix Calculators, you agree to this Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}