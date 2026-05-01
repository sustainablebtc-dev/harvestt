import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import RegulatoryDisclaimer from "@/components/RegulatoryDisclaimer/RegulatoryDisclaimer";
import Footer from "@/components/Footer/Footer";
import siteConfigRaw from "@/data/site/config.json";
import type { SiteConfig } from "@/data/types";

const siteConfig = siteConfigRaw as SiteConfig;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: siteConfig.defaultMetadata.title,
  description: siteConfig.defaultMetadata.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    images: [siteConfig.defaultMetadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <RegulatoryDisclaimer />
      </body>
    </html>
  );
}
