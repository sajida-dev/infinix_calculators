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

export const metadata: Metadata = {
  title: "Infinix Calculators",
  description: "Calculators for every need",
  icons: {
    icon: "/infinix-calculator-icon-blue.png",
  },
  keywords: [
    "affirm calculator",
    "cbm calculator",
    "avalara sales tax calculator",
    "pro rata calculator",
    "square fee calculator",
    "hecm calculator",
    "gross up calculator",
    "reverse tax calculator",
    "productivity calculator",
    "novig calculator",
    "therapy productivity calculator",
    "fdic calculator",
    "laticrete grout calculator",
    "cash back calculator",
    "roof calculator",
    "grout calculator",
    "mapei grout calculator",
    "builders risk insurance cost calculator"
  ],
};

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <AdFooter /> */}
      </body>
    </html>
  );
}
