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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO SECTION */}
        <section className="text-center mb-12">
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We value transparency. This page explains how Infinix Calculators
            collects, uses, and protects your information when you use our tools.
          </p>
        </section>

        {/* CONTENT WRAPPER START */}
        <section className=" p-6 md:p-10 space-y-10">

          {/* INFORMATION WE COLLECT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Information We Collect
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We collect minimal and necessary information to provide accurate calculator results and improve user experience.
              Most tools can be used without creating an account.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-xl overflow-hidden text-sm md:text-base">
                <thead className="bg-gray-50 text-left text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">What We Collect</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Calculator Inputs</td>
                    <td className="px-4 py-3">Values entered in tools (e.g., area, soil depth)</td>
                    <td className="px-4 py-3">To generate accurate results in real-time</td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Device Information</td>
                    <td className="px-4 py-3">Browser type, device type, screen size</td>
                    <td className="px-4 py-3">To improve UI responsiveness and performance</td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Usage Data</td>
                    <td className="px-4 py-3">Pages visited, tool usage frequency</td>
                    <td className="px-4 py-3">To improve features and user experience</td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Cookies</td>
                    <td className="px-4 py-3">Session and preference cookies</td>
                    <td className="px-4 py-3">To remember settings and enhance usability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* HOW WE USE INFORMATION */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              How We Use Information
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We use collected data strictly to operate, improve, and maintain our calculator services. We do not sell personal data to third parties.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 list-disc pl-5">
              <li>To provide accurate calculator outputs in real time</li>
              <li>To improve performance, speed, and UI responsiveness</li>
              <li>To analyze usage patterns and fix technical issues</li>
              <li>To enhance user experience across devices</li>
            </ul>
          </div>

          {/* CALCULATOR DATA HANDLING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Calculator Data Handling
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              All calculator inputs are processed locally in your browser whenever possible. We do not permanently store sensitive calculation inputs on our servers.
            </p>

            <div className="mt-5 p-5 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-sm leading-relaxed">
              In most cases, calculations are performed instantly in your browser without being sent to a backend server.
            </div>
          </div>

          {/* COOKIES POLICY */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Cookies Policy
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We use cookies to improve functionality and personalize your experience.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-gray-200 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Required for basic site functionality such as navigation and tool usage.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Help us understand how users interact with calculators to improve performance.
                </p>
              </div>
            </div>
          </div>
          {/* ANALYTICS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Analytics & Performance Tracking
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We may use third-party analytics tools to understand how users interact with our calculators and improve performance.
              These tools collect anonymized and aggregated data only.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 list-disc pl-5">
              <li>Page views and session duration</li>
              <li>Tool usage frequency and interaction patterns</li>
              <li>Device and browser performance metrics</li>
            </ul>

            <div className="mt-5 p-5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-600">
              We do not use analytics to personally identify users.
            </div>
          </div>

          {/* ADSENSE / ADVERTISING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Advertising & Google AdSense
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Our website may display advertisements provided by third-party ad networks such as Google AdSense.
              These services may use cookies to show relevant ads based on your browsing behavior.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900">Third-Party Ads</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Ads are served by external providers and are not controlled directly by us.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900">Personalized Ads</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Some ads may be personalized using cookies and usage data.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              You can disable personalized ads by adjusting your browser settings or visiting ad preference controls provided by the ad network.
            </p>
          </div>

          {/* SECURITY */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Data Security
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We implement reasonable technical and organizational measures to protect user data from unauthorized access, misuse, or disclosure.
            </p>

            <div className="mt-6 p-5 rounded-xl bg-green-50 border border-green-100 text-green-800 text-sm leading-relaxed">
              Our calculators are designed with privacy-first principles, minimizing data collection wherever possible.
            </div>
          </div>

          {/* USER RIGHTS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Your Rights
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Depending on your location, you may have rights regarding your personal data, including access, correction, or deletion requests.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 list-disc pl-5">
              <li>Request access to the data we collect about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of certain data (where applicable)</li>
              <li>Opt out of cookies via browser settings</li>
            </ul>
          </div>

          {/* EXTERNAL LINKS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              External Links
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites.
            </p>

            <div className="mt-5 p-5 rounded-xl bg-yellow-50 border border-yellow-100 text-yellow-800 text-sm leading-relaxed">
              ⚠ Always review the privacy policies of external websites before providing any personal information.
            </div>
          </div>

          {/* POLICY UPDATES */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Changes to This Policy
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.
              Updates will be posted on this page with a revised date.
            </p>

            <div className="mt-5 text-sm text-gray-500">
              We encourage users to review this page periodically.
            </div>
          </div>


          {/* FINAL NOTE */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              By using Infinix Calculators, you agree to this Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main >
  );
}