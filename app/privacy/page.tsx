import React from "react";
import type { Metadata } from "next";


// Page metadata
export const metadata: Metadata = {
  title: "Privacy Policy – Infinix Calculators",
  description:
    "Learn what information Infinix Calculators and its analytics and advertising providers may process, how calculator inputs are handled, and how to contact us about privacy.",
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
            This policy describes how calculator inputs, website analytics, advertising services, and messages to us are handled.
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
              You can use the calculators without creating an account. The information involved depends on how you use the site and on which third-party services load in your browser.
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
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Calculator inputs</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Values you enter, such as dimensions or amounts</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Browser-based tools use these values to calculate a result. We do not intentionally send them to a calculation server.</td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Technical and usage information</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Information such as pages viewed, browser or device details, and interactions</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Google Analytics and advertising providers may process it to measure site use and deliver or measure ads.</td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-dark-card/60">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">Messages you choose to send</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Name, email address, topic, and message content</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">If you use the contact form, these details are placed in an email for you to send to us.</td>
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
              Website and third-party services process information to deliver pages, measure site use, serve or measure advertisements, and respond to messages you send. The analytics and advertising providers operate under their own privacy policies.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>To calculate results from the values you enter in browser-based tools</li>
              <li>To measure page visits and site interactions through Google Analytics</li>
              <li>To display and measure advertisements through Google AdSense and other ad providers</li>
              <li>To reply when you contact us</li>
            </ul>
          </div>

          {/* CALCULATOR DATA HANDLING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Calculator Data Handling
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Calculator tools use browser code to process their inputs and display results. We do not intentionally transmit those values to a calculation server. Advertising, analytics, and other page services are separate from the calculation itself and may receive technical information about your browser or visit. Avoid entering information that identifies you or that you would not want processed in your browser.
            </p>

            <div className="mt-5 p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              Browser-based calculations do not require an account. This does not prevent analytics or advertising services from processing information about the page visit.
            </div>
          </div>

          {/* Cookies and similar technologies */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Cookies and Similar Technologies
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              The site uses browser local storage to remember your theme preference. Google Analytics, Google AdSense, and advertising scripts from nap5k.com and n6wxm.com are included on the site. These services and their partners may use cookies or similar technologies and process identifiers or browsing information to measure visits or deliver and measure ads. Their practices depend on their own settings and policies.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:shadow-sm transition">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Third-Party Services</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Analytics and advertising services can receive technical information when they load or are used. Review the providers&apos; own privacy notices and controls for details about their practices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:shadow-sm transition">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Local Browser Computation</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Calculator inputs are used by browser-based tools to produce results. This is separate from analytics and advertising requests made by the page.
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
              Google Analytics is loaded on the site to measure page views and site interactions. Google may process technical and usage information under its own policies.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Page views and page paths</li>
              <li>Browser and device information</li>
              <li>Interactions with pages and tools</li>
            </ul>

            <div className="mt-5 p-5 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border text-sm text-slate-600 dark:text-slate-300">
              Analytics data is handled by Google. See Google&apos;s privacy information for details about how it processes data.
            </div>
          </div>

          {/* ADSENSE / ADVERTISING */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Advertising & Google AdSense
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Google AdSense and advertising scripts from nap5k.com and n6wxm.com are included on this site. These providers and their partners may use cookies or similar technologies and process information such as IP address, browser identifiers, and pages visited to deliver, limit, or measure ads. We do not control their independent data practices.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Third-Party Advertising</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Ad content and personalization may depend on provider settings, your location, and your available privacy choices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Opt-Out &amp; Privacy Controls</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  You can manage some Google ad personalization through Google Ads Settings. Browser settings and regional advertising choice tools may also offer controls; these controls may not apply to every provider or every type of ad.
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
              We take reasonable steps to protect information handled by the site. No website or electronic transmission can be guaranteed completely secure.
            </p>

            <div className="mt-6 p-5 rounded-xl bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/50 text-green-800 dark:text-emerald-200 text-sm leading-relaxed">
              Do not include sensitive information in a message unless it is necessary for your request.
            </div>
          </div>

          {/* USER RIGHTS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Your Rights
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Depending on where you live, applicable privacy laws may give you rights to request access to, correction of, or deletion of personal information. You can contact us to make a request. Some information may be held or processed by third-party providers, and requests concerning that information may need to be made directly to them.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Contact us at <a href="mailto:privacy@infinixcalculator.com" className="text-primary underline dark:text-sky-400">privacy@infinixcalculator.com</a> about a privacy request</li>
              <li>Clear the saved theme preference by clearing this site&apos;s local storage in your browser</li>
              <li>Use provider controls to manage analytics or advertising choices where available</li>
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
              Last updated: September 30, 2026.
            </div>
          </div>


          {/* FINAL NOTE */}
          <div className="text-center pt-6 border-t border-slate-200 dark:border-dark-border">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              For the terms that apply to use of this site, see our <a href="/terms" className="font-medium text-primary underline dark:text-sky-400">Terms and Conditions</a>. For questions, visit the <a href="/contact" className="font-medium text-primary underline dark:text-sky-400">Contact page</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}