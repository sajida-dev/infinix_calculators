// app/metadata.ts
// Centralized default metadata and helper to merge page-specific metadata.

import type { Metadata } from "next";

// Base URL for canonical links – set via environment variable or fallback.
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const defaultMetadata: Metadata = {
  title: {
    default: "Infinix Calculators",
    template: "%s",
  },
  description: "Professional calculators for finance, construction, health, and more.",
  keywords: [
    "infinix calculator",
    "infinix calculators",
    "calculators",
    "topsoil calculator",
    "finance calculator",
    "construction calculator",
    "health calculator",
    "unit converter",
    "online estimator",
    "online calculators",
    "free calculators",
    "calculator directory",
    "business calculators",
    "finance calculators",
    "construction calculators",
    "health calculators",
    "math calculators",
    "unit converters",
    "percentage calculator",
    "loan calculator",
    "mortgage calculator",
    "topsoil calculator",
    "top soil calculator",
    "concrete calculator",
    "cbm calculator",
    "affirm calculator",
    "productivity calculator",
    "cost calculators",
    "estimators",
    "calculation tools",
    "lsat score calculator",
    "lsat score converter",
    "therapy productivity calculator",
    "how to calculate productivity",
    "law school predictor",
    "good lsat score",
    "lsat demon scholarship estimator",
    "lsat raw score conversion",
    "lsat top score",
    "how long is lsat",
    "how many questions are on the lsat",
    "what's a good lsat score",
    "lsat average score",
    "normal lsat score",
    "fill dirt calculator",
    "how much fill dirt do i need"
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Infinix Development Team" }],
  creator: "Infinix",
  publisher: "Infinix",
  category: "Tools",
  applicationName: "Infinix Calculators",
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/infinix-calculator-icon-blue.png",
    shortcut: "/infinix-calculator-icon-blue.png",
    apple: "/infinix-calculator-icon-blue.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
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
    languages: {
      en: "/",
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
