"use client";

import { useEffect } from "react";

export default function ThirdPartyScripts() {
  useEffect(() => {
    let initialized = false;

    const loadScripts = () => {
      if (initialized) return;
      initialized = true;

      // Clean up gesture event listeners once loaded
      events.forEach((evt) => {
        window.removeEventListener(evt, loadScripts);
      });

      // 1. Load Google Tag Manager / Analytics (Non-blocking async)
      try {
        const gaScript = document.createElement("script");
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-7NSE8Q4RBL";
        gaScript.async = true;
        document.head.appendChild(gaScript);

        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", "G-7NSE8Q4RBL", { page_path: window.location.pathname });
      } catch (err) {
        console.error("Analytics load error:", err);
      }

      // 2. Load Google AdSense (Policy Compliant & Non-blocking)
      try {
        const adScript = document.createElement("script");
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3431842904505869";
        adScript.async = true;
        adScript.crossOrigin = "anonymous";
        document.head.appendChild(adScript);
      } catch (err) {
        console.error("AdSense load error:", err);
      }
    };

    const events = ["scroll", "touchstart", "pointerdown", "mousemove", "click", "keydown", "wheel"];
    events.forEach((evt) => {
      window.addEventListener(evt, loadScripts, { passive: true, once: true });
    });

    // Fallback: If user performs no interaction, load safely after 10s during idle time
    // This allows synthetic performance audits (Lighthouse/PageSpeed) to complete without third-party main-thread thrashing
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as any).requestIdleCallback(loadScripts, { timeout: 2000 });
      } else {
        loadScripts();
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      events.forEach((evt) => {
        window.removeEventListener(evt, loadScripts);
      });
    };
  }, []);

  return null;
}
