"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface AdBannerProps {
  adSlot?: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = { display: "block" },
}: AdBannerProps) {
  const pathname = usePathname();
  const clientId = "ca-pub-3431842904505869";

  useEffect(() => {
    // Fill the space with an ad on route changes or component mounts
    const pushAd = () => {
      try {
        if (typeof window !== "undefined") {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        }
      } catch (err) {
        // Retry failsafe for asynchronous script loading latency
        setTimeout(() => {
          try {
            if (typeof window !== "undefined") {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
          } catch (retryErr) {
            console.error("AdSense push failed:", retryErr);
          }
        }, 750);
      }
    };

    pushAd();
  }, [pathname, adSlot]);

  return (
    <div className={`ad-container overflow-hidden text-center my-4 ${className}`}>
      <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        Advertisement
      </span>
      <ins
        key={`${pathname}-${adSlot || "auto"}`}
        className="adsbygoogle"
        style={style}
        data-ad-client={clientId}
        {...(adSlot ? { "data-ad-slot": adSlot } : {})}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
