import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "45270151e7091077",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID =
    process.env.GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
        <Navbar />
        {children}
        <Footer />
        <RegulatoryDisclaimer />
      </body>
    </html>
  );
}
