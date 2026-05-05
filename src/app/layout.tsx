import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "EstatePrime — Premium Real Estate Platform",
    template: "%s | EstatePrime",
  },
  description:
    "Find your dream property with EstatePrime. Premium real estate listings, expert agents, and personalized service for buyers, sellers, and investors.",
  keywords: [
    "real estate",
    "property for sale",
    "luxury homes",
    "property listings",
    "buy home",
    "rent apartment",
  ],
  authors: [{ name: "EstatePrime" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "EstatePrime — Premium Real Estate Platform",
    description:
      "Find your dream property with EstatePrime. Premium real estate listings and expert agents.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
