// app/metadata.ts
// Centralized default metadata and helper to merge page-specific metadata.

import type { Metadata } from "next";
import { globalKeywords } from "./data/keywords";

// Base URL for canonical links – set via environment variable or fallback to production domain.
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://infinixcalculator.com";

export const defaultMetadata: Metadata = {
  title: {
    default: "Infinix Calculators",
    template: "%s",
  },
  description: "Professional calculators for finance, construction, health, and more.",
  keywords: globalKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Infinix Development Team" }],
  creator: "Infinix",
  publisher: "Infinix",
  category: "Tools",
  applicationName: "Infinix Calculators",
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/infinix-calculator-icon-blue.webp",
    shortcut: "/infinix-calculator-icon-blue.webp",
    apple: "/infinix-calculator-icon-blue.webp",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_SITE_VERIFICATION_CODE",
    },
  },
  other: {
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Infinix Calculators",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infinix Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinix Calculators",
    description: "Professional calculators for finance, construction, health, and more.",
    images: ["/infinix-calculator-brand-logo.png"],
    creator: "@Infinix",
  },
  alternates: {
    canonical: "https://infinixcalculator.com",
    languages: {
      en: "https://infinixcalculator.com",
    },
  },
};

// Export viewport and themeColor separately for Next.js compatibility
export const viewport = "width=device-width,initial-scale=1";
export const themeColor = "#0ea5e9";


/**
 * Helper to merge custom page metadata with the defaults.
 */
export function mergeMetadata(custom: Metadata): Metadata {
  const merged: Metadata = { ...defaultMetadata, ...custom } as Metadata;
  if (defaultMetadata.openGraph && custom.openGraph) {
    merged.openGraph = { ...defaultMetadata.openGraph, ...custom.openGraph } as any;
  }
  if (defaultMetadata.twitter && custom.twitter) {
    merged.twitter = { ...defaultMetadata.twitter, ...custom.twitter } as any;
  }
  if (defaultMetadata.verification && custom.verification) {
    merged.verification = { ...defaultMetadata.verification, ...custom.verification } as any;
  }
  if (typeof merged.metadataBase === "string") {
    merged.metadataBase = new URL(merged.metadataBase);
  }
  return merged;
}
