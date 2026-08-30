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
        gtag("config", "G-7NSE8Q4RBL", {
          page_path: window.location.pathname,
          client_storage: "none",
        });
      } catch (err) {
        console.error("Analytics load error:", err);
      }
    };

    // Load upon first high-intent user interaction or when CPU is truly idle
    const events = ["pointerdown", "touchstart", "keydown", "click"];
    events.forEach((evt) => {
      window.addEventListener(evt, loadScripts, { passive: true, once: true });
    });

    // Fallback: If user performs no direct interaction, load during idle time after page stability
    let idleId: any = null;
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = (window as any).requestIdleCallback(loadScripts, { timeout: 3000 });
      } else {
        loadScripts();
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      events.forEach((evt) => {
        window.removeEventListener(evt, loadScripts);
      });
    };
  }, []);

  return null;
}
