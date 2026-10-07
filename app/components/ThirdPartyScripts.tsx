"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT_ID = "ca-pub-3431842904505869";
type IdleCallback = (callback: () => void, options?: { timeout?: number }) => number;
type BrowserWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  adsbygoogle?: unknown[];
  requestIdleCallback?: IdleCallback;
  cancelIdleCallback?: (handle: number) => void;
};

export default function ThirdPartyScripts() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Re-fire page_view on every client-side route change — gtag.js only auto-tracks
  // the hard initial load, so App Router navigations were never being recorded.
  // Skip the first render: gtag('config', ...) below already sends that page_view.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const browserWindow = window as BrowserWindow;
    if (typeof browserWindow.gtag !== "function") return;
    browserWindow.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);

  // Load AdSense as soon as the browser is idle after first paint, independent of user
  // interaction (ads must render for users who never interact), moved out of <head> to
  // avoid blocking the critical rendering path.
  useEffect(() => {
    if (!document.querySelector(".adsbygoogle")) return;
    if (document.querySelector('script[src*="adsbygoogle.js"]')) return;

    let idleId: number | null = null;
    const loadAdsense = () => {
      if (document.querySelector('script[src*="adsbygoogle.js"]')) return;
      const adScript = document.createElement("script");
      adScript.async = true;
      adScript.crossOrigin = "anonymous";
      adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
      document.head.appendChild(adScript);
    };

    const browserWindow = window as BrowserWindow;
    if (typeof browserWindow.requestIdleCallback === "function") {
      idleId = browserWindow.requestIdleCallback(loadAdsense, { timeout: 2000 });
    } else {
      const t = setTimeout(loadAdsense, 300);
      return () => clearTimeout(t);
    }

    return () => {
      if (idleId !== null && typeof browserWindow.cancelIdleCallback === "function") {
        browserWindow.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return null;
}
