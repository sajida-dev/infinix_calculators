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
        // Retry failsafe for lazy script loading latency
        setTimeout(() => {
          try {
            if (typeof window !== "undefined") {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            }
          } catch {
            // Silently ignore if blocked or unavailable
          }
        }, 1000);
      }
    };

    pushAd();
  }, [pathname, adSlot]);

  // Determine reserved minimum height to guarantee zero CLS
  const minHeightClass =
    adFormat === "horizontal"
      ? "min-h-[90px] sm:min-h-[100px]"
      : adFormat === "vertical"
      ? "min-h-[600px]"
      : "min-h-[250px] sm:min-h-[280px]";

  return (
    <div
      style={{ contain: "layout" }}
      className={`ad-container relative overflow-hidden text-center my-6 py-2 rounded-xl bg-slate-50/50 dark:bg-[#1e2025]/50 border border-slate-100/80 dark:border-[#4D5156]/30 flex flex-col justify-center items-center ${minHeightClass} ${className}`}
    >
      <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 select-none">
        Advertisement
      </span>
      <div className="w-full flex-1 flex items-center justify-center">
        <ins
          key={`${pathname}-${adSlot || "auto"}`}
          className="adsbygoogle w-full"
          style={style}
          data-ad-client={clientId}
          {...(adSlot ? { "data-ad-slot": adSlot } : {})}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}

