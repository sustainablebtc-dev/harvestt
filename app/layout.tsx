import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harvestt — Energy Verification for Bitcoin Infrastructure",
  description:
    "Harvestt provides institutional-grade clean energy verification and attestation for Bitcoin mining operations, enabling institutional capital to access Bitcoin with energy transparency.",
  openGraph: {
    title: "Harvestt — Energy Verification for Bitcoin Infrastructure",
    description:
      "Institutional-grade clean energy verification for Bitcoin mining infrastructure.",
    url: "https://harvestt.com",
    siteName: "Harvestt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvestt — Energy Verification for Bitcoin Infrastructure",
    description:
      "Institutional-grade clean energy verification for Bitcoin mining infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-primary font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
