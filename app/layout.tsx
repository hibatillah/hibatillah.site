import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hibatillah.site"),
  title: "Hibatillah • Frontend Dev • UI Designer",
  description: "M. Hibatillah Hasanin Portfolio",
  authors: {
    name: "M. Hibatillah Hasanin",
    url: "https://hibatillah.site",
  },
  icons: "./favicon.ico",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hibatillah.site",
    siteName: "Hibatillah",
    title: "Hibatillah • Frontend Dev • UI Designer",
    description: "M. Hibatillah Hasanin Portfolio",
    images: [
      {
        url: "./favicon.ico",
        alt: "Hibatillah",
      },
    ],
  },
  other: {
    "google-site-verification": "Lcm4vQuRXy2S0tVb6ZEp_p2BvIMCcuaBMB1WgbY0uOE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={sourceSans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <span className="overlay" />
        <Cursor />
      </body>
    </html>
  );
}
