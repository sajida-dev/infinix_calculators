import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

import { defaultMetadata, viewport as defaultViewport, themeColor as defaultThemeColor } from "./metadata";
export const viewport = defaultViewport;
export const themeColor = defaultThemeColor;

export const metadata = defaultMetadata;

import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Infinix Calculators",
  "url": "https://infinixcalculator.com",
  "logo": "https://infinixcalculator.com/infinix-calculator-brand-logo.png",
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {/* Native script for Google AdSense to prevent data-nscript warning */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3431842904505869"
          crossOrigin="anonymous"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7NSE8Q4RBL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7NSE8Q4RBL');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-white flex flex-col pb-20" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 left-0 w-full bg-primary text-white text-center py-2">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
