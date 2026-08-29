"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type TabKey = "your-privacy" | "strictly-necessary" | "performance" | "functional" | "targeting";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("your-privacy");

  // Consent states
  const [performanceConsent, setPerformanceConsent] = useState(true);
  const [functionalConsent, setFunctionalConsent] = useState(true);
  const [targetingConsent, setTargetingConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("infinix_cookie_consent");
    if (!consent) {
      const bannerTimer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(bannerTimer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        updateGoogleConsent(parsed.ad_storage, parsed.analytics_storage);
        setPerformanceConsent(parsed.analytics_storage === "granted");
        setTargetingConsent(parsed.ad_storage === "granted");
      } catch {
        const state = consent === "granted" ? "granted" : "denied";
        updateGoogleConsent(state, state);
      }
    }
  }, []);

  const updateGoogleConsent = (adState: "granted" | "denied", analyticsState: "granted" | "denied") => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: adState,
        ad_user_data: adState,
        ad_personalization: adState,
        analytics_storage: analyticsState,
      });
    }
  };

  const handleAcceptAll = () => {
    const settings = { ad_storage: "granted", analytics_storage: "granted", functional: "granted" };
    localStorage.setItem("infinix_cookie_consent", JSON.stringify(settings));
    setPerformanceConsent(true);
    setFunctionalConsent(true);
    setTargetingConsent(true);
    updateGoogleConsent("granted", "granted");
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptStrictlyNecessary = () => {
    const settings = { ad_storage: "denied", analytics_storage: "denied", functional: "denied" };
    localStorage.setItem("infinix_cookie_consent", JSON.stringify(settings));
    setPerformanceConsent(false);
    setFunctionalConsent(false);
    setTargetingConsent(false);
    updateGoogleConsent("denied", "denied");
    setShowBanner(false);
    setShowModal(false);
  };

  const handleConfirmChoices = () => {
    const adState = targetingConsent ? "granted" : "denied";
    const analyticsState = performanceConsent ? "granted" : "denied";
    const settings = {
      ad_storage: adState,
      analytics_storage: analyticsState,
      functional: functionalConsent ? "granted" : "denied",
    };
    localStorage.setItem("infinix_cookie_consent", JSON.stringify(settings));
    updateGoogleConsent(adState, analyticsState);
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Enterprise Full-Width Bottom Bar */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          style={{ contain: "layout style" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1e2025] border-t border-slate-200 dark:border-[#4D5156] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-5 duration-200 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">

              {/* Left Column: Legal Text & Disclosures (Responsive mobile vs desktop) */}
              <div className="flex-1 text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                {/* Mobile Concise Notice (Minimal vertical height) */}
                <p className="sm:hidden">
                  We use cookies and device identifiers to ensure accurate calculator calculations, analyze site performance, and improve your experience. Choose your preferences or accept all cookies. Discover more in our{" "}
                  <Link href="/privacy" className="font-bold text-primary dark:text-sky-400 hover:underline">
                    Cookies Notice
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-bold text-primary dark:text-sky-400 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>

                {/* Desktop Full Enterprise Notice */}
                <p className="hidden sm:block">
                  We and our partners use cookies and computational storage on this website to optimize calculation engines, enhance navigation, analyze site usage, and deliver relevant information. Accept all cookies allows us to provide the best digital experience, or customize your preferences to choose which categories to enable. Discover more in our{" "}
                  <Link href="/privacy" className="font-bold text-primary dark:text-sky-400 hover:underline">
                    Cookies Notice
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-bold text-primary dark:text-sky-400 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* Right Column: 3-Button Action Stack */}
              <div className="w-full lg:w-80 shrink-0 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-full min-h-[42px] py-2.5 px-4 text-xs sm:text-sm font-bold text-primary dark:text-sky-400 bg-white dark:bg-[#1e2025] hover:bg-slate-50 dark:hover:bg-[#282a30] border-2 border-primary dark:border-sky-400 rounded-lg transition-all duration-150 text-center shadow-xs active:scale-[0.99]"
                >
                  Customize preferences
                </button>

                <button
                  type="button"
                  onClick={handleAcceptStrictlyNecessary}
                  className="w-full min-h-[42px] py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-slate-800 dark:bg-[#32363e] hover:bg-slate-900 dark:hover:bg-[#3d424b] rounded-lg transition-all duration-150 text-center shadow-xs active:scale-[0.99]"
                >
                  Accept strictly necessary only
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full min-h-[42px] py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 rounded-lg transition-all duration-150 text-center shadow-sm active:scale-[0.99]"
                >
                  Accept all cookies
                </button>
              </div>

            </div>
          </div>
        </aside>
      )}

      {/* Responsive OneTrust Style Privacy Preference Center Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl rounded-2xl border border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1e2025] shadow-2xl overflow-hidden flex flex-col max-h-[94vh] sm:max-h-[90vh]">

            {/* 1. Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-[#4D5156] bg-white dark:bg-[#1e2025] shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 dark:bg-amber-400/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 13v.01" />
                  </svg>
                </div>
                <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100 truncate">
                  Privacy Preference Center
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg text-lg leading-none"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* 2. Responsive Tabbed Content Area (Horizontal scroll on mobile, Left sidebar on tablet/desktop) */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-[280px]">

              {/* Tabs Navigation (Responsive scrollable pills on mobile, vertical list on desktop) */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#4D5156] bg-slate-50/90 dark:bg-[#181a1e] shrink-0 overflow-x-auto md:overflow-y-auto">
                <nav className="flex flex-row md:flex-col p-2 md:p-0 gap-1.5 md:gap-0 min-w-max md:min-w-0" aria-label="Privacy tabs">

                  {/* Tab: Your Privacy */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("your-privacy")}
                    className={`text-left px-3.5 py-2 md:px-5 md:py-3.5 text-xs sm:text-sm font-bold transition-all rounded-lg md:rounded-none md:border-b border-slate-200 dark:border-[#4D5156] flex items-center justify-between ${activeTab === "your-privacy"
                        ? "bg-primary text-white md:bg-white md:dark:bg-[#1e2025] md:text-primary md:dark:text-sky-400 md:border-l-4 md:border-l-primary md:dark:border-l-sky-400 shadow-xs md:shadow-none"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#22242a]"
                      }`}
                  >
                    <span>Your Privacy</span>
                  </button>

                  {/* Tab: Strictly Necessary Cookies */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("strictly-necessary")}
                    className={`text-left px-3.5 py-2 md:px-5 md:py-3.5 text-xs sm:text-sm font-bold transition-all rounded-lg md:rounded-none md:border-b border-slate-200 dark:border-[#4D5156] flex items-center justify-between ${activeTab === "strictly-necessary"
                        ? "bg-primary text-white md:bg-white md:dark:bg-[#1e2025] md:text-primary md:dark:text-sky-400 md:border-l-4 md:border-l-primary md:dark:border-l-sky-400 shadow-xs md:shadow-none"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#22242a]"
                      }`}
                  >
                    <span>Strictly Necessary Cookies</span>
                  </button>

                  {/* Tab: Performance Cookies */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("performance")}
                    className={`text-left px-3.5 py-2 md:px-5 md:py-3.5 text-xs sm:text-sm font-bold transition-all rounded-lg md:rounded-none md:border-b border-slate-200 dark:border-[#4D5156] flex items-center justify-between ${activeTab === "performance"
                        ? "bg-primary text-white md:bg-white md:dark:bg-[#1e2025] md:text-primary md:dark:text-sky-400 md:border-l-4 md:border-l-primary md:dark:border-l-sky-400 shadow-xs md:shadow-none"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#22242a]"
                      }`}
                  >
                    <span>Performance Cookies</span>
                  </button>

                  {/* Tab: Functional Cookies */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("functional")}
                    className={`text-left px-3.5 py-2 md:px-5 md:py-3.5 text-xs sm:text-sm font-bold transition-all rounded-lg md:rounded-none md:border-b border-slate-200 dark:border-[#4D5156] flex items-center justify-between ${activeTab === "functional"
                        ? "bg-primary text-white md:bg-white md:dark:bg-[#1e2025] md:text-primary md:dark:text-sky-400 md:border-l-4 md:border-l-primary md:dark:border-l-sky-400 shadow-xs md:shadow-none"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#22242a]"
                      }`}
                  >
                    <span>Functional Cookies</span>
                  </button>

                  {/* Tab: Targeting Cookies */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("targeting")}
                    className={`text-left px-3.5 py-2 md:px-5 md:py-3.5 text-xs sm:text-sm font-bold transition-all rounded-lg md:rounded-none md:border-b border-slate-200 dark:border-[#4D5156] flex items-center justify-between ${activeTab === "targeting"
                        ? "bg-primary text-white md:bg-white md:dark:bg-[#1e2025] md:text-primary md:dark:text-sky-400 md:border-l-4 md:border-l-primary md:dark:border-l-sky-400 shadow-xs md:shadow-none"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-[#22242a]"
                      }`}
                  >
                    <span>Targeting Cookies</span>
                  </button>

                </nav>
              </div>

              {/* Right Panel: Content Details per Tab */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-white dark:bg-[#1e2025] text-slate-700 dark:text-slate-300 space-y-4">

                {/* 1. YOUR PRIVACY */}
                {activeTab === "your-privacy" && (
                  <div className="space-y-3.5 animate-in fade-in duration-150">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                      Your Privacy
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      <strong>Our Use of Cookies and Tracking Technology:</strong> When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies or other tracking technologies. This information might be about you, your preferences, or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings on the left to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the computational services we are able to offer.
                    </p>
                    <p className="text-xs sm:text-sm">
                      <Link href="/privacy" className="text-primary dark:text-sky-400 font-bold hover:underline">
                        More information.
                      </Link>
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-[#4D5156]/50">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-1">
                        Opt-out of Sale or Sharing
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        By disabling our use of cookies on the tabs on the left, you are opting out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information for targeted digital advertising across third-party networks.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. STRICTLY NECESSARY */}
                {activeTab === "strictly-necessary" && (
                  <div className="space-y-3.5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#4D5156] pb-3 gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        Strictly Necessary Cookies
                      </h3>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase px-2.5 py-1 bg-slate-100 dark:bg-[#282a30] rounded-md shrink-0">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or executing client-side mathematical calculations.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                    </p>
                  </div>
                )}

                {/* 3. PERFORMANCE COOKIES */}
                {activeTab === "performance" && (
                  <div className="space-y-3.5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#4D5156] pb-3 gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        Performance Cookies
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input
                          type="checkbox"
                          checked={performanceConsent}
                          onChange={(e) => setPerformanceConsent(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-[#4D5156] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which calculator tools are the most and least popular and see how visitors move around the site.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site.
                    </p>
                  </div>
                )}

                {/* 4. FUNCTIONAL COOKIES */}
                {activeTab === "functional" && (
                  <div className="space-y-3.5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#4D5156] pb-3 gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        Functional Cookies
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input
                          type="checkbox"
                          checked={functionalConsent}
                          onChange={(e) => setFunctionalConsent(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-[#4D5156] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalization, such as remembering your unit preferences (imperial vs metric), currency choices, or dark theme settings. They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      If you do not allow these cookies then some or all of these services may not function properly.
                    </p>
                  </div>
                )}

                {/* 5. TARGETING COOKIES */}
                {activeTab === "targeting" && (
                  <div className="space-y-3.5 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#4D5156] pb-3 gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        Targeting Cookies
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input
                          type="checkbox"
                          checked={targetingConsent}
                          onChange={(e) => setTargetingConsent(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-[#4D5156] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      These cookies may be set through our site by our advertising partners (such as Google AdSense / Google Publisher Network). They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                    </p>
                  </div>
                )}

              </div>

            </div>

            {/* 3. Modal Bottom Action Bar (Responsive Full-Width Stack) */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-200 dark:border-[#4D5156] bg-slate-50 dark:bg-[#181a1e] shrink-0 space-y-2">

              <button
                type="button"
                onClick={handleConfirmChoices}
                className="w-full min-h-[40px] py-2.5 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all text-center shadow-xs active:scale-[0.99]"
              >
                Confirm my choices
              </button>

              <button
                type="button"
                onClick={handleAcceptStrictlyNecessary}
                className="w-full min-h-[40px] py-2.5 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-slate-800 dark:bg-[#32363e] hover:bg-slate-900 dark:hover:bg-[#3d424b] transition-all text-center shadow-xs active:scale-[0.99]"
              >
                Accept strictly necessary only
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full min-h-[40px] py-2.5 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all text-center shadow-xs active:scale-[0.99]"
              >
                Accept all cookies
              </button>

              <div className="flex items-center justify-between pt-1.5 text-[11px] text-slate-400">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
                <div className="flex items-center gap-1">
                  <span>Powered by</span>
                  <span className="font-bold text-slate-600 dark:text-slate-300">Infinix Trust</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
