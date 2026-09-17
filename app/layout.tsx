import "./globals.css";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

import { defaultMetadata, viewport as defaultViewport, themeColor as defaultThemeColor } from "./metadata";
export const viewport = defaultViewport;
export const themeColor = defaultThemeColor;

export const metadata = defaultMetadata;

import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import ThemeScript from "./components/ThemeScript";
import ThirdPartyScripts from "./components/ThirdPartyScripts";
import { ThemeProvider } from "./components/ThemeProvider";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Infinix Calculators",
  "url": "https://infinixcalculator.com",
  "logo": "https://infinixcalculator.com/infinix-calculator-brand-logo.webp",
  "description": "Free, professional online calculators for finance, construction, health, math, and daily productivity.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Infinix Calculators",
  "url": "https://infinixcalculator.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://infinixcalculator.com/calculators?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://ep1.adtrafficquality.google" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://ep1.adtrafficquality.google" />
        <link rel="dns-prefetch" href="https://ep2.adtrafficquality.google" />
        {/* Google AdSense Script: plain native tag (Google's official snippet) avoids the data-nscript attribute next/script adds */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3431842904505869"
          crossOrigin="anonymous"
        />
       
        {/* Monetag Multitag */}
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="279393"
          async data-cfasync="false"
        />
      </head>
      <body className="min-h-full bg-white dark:bg-dark-bg text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200" suppressHydrationWarning>
        <ThemeScript />
        <JsonLd id="org-jsonld" data={organizationSchema} />
        <JsonLd id="website-jsonld" data={websiteSchema} />

        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 left-0 w-full bg-primary text-white text-center py-2">Skip to main content</a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* High-Performance Interaction/Idle Script Loader */}
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
