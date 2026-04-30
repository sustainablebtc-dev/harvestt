import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.scss";
import siteConfigRaw from "@/data/site/config.json";
import type { SiteConfig } from "@/data/types";
import Navbar from "@/components/Navbar/Navbar";

const siteConfig = siteConfigRaw as SiteConfig;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

// Inter is loaded for italic passages only — do not use for upright text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  style: ["italic"],
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
      </body>
    </html>
  );
}
