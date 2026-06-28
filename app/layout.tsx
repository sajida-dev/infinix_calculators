import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { defaultMetadata, viewport as defaultViewport, themeColor as defaultThemeColor } from "./metadata";
export const viewport = defaultViewport;
export const themeColor = defaultThemeColor;


export const metadata = defaultMetadata;

import Header from "./components/Header";
import Footer from "./components/Footer";
import AdFooter from "./components/AdFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col pb-20">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 left-0 w-full bg-primary text-white text-center py-2">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        {/* <AdFooter /> */}
      </body>
    </html>
  );
}
