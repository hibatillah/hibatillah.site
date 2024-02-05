import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hibatillah • Frontend Dev • UI Designer",
  description: "M. Hibatillah Hasanin Portfolio",
  authors: {
    name: "M. Hibatillah Hasanin",
    url: "https://hibatillah.site",
  },
  colorScheme: "dark",
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
      <body
        className={
          (sourceSans.className,
          " before:fixed before:top-0 before:left-[20%] before:w-1/2 before:h-20 before:rotate-[25deg] before:rounded-full before:bg-primary before:opacity-70 before:blur-[80px] after:fixed after:-bottom-10 after:left-[20%] after:w-[500px] after:h-20 after:rotate-12 after:rounded-full after:bg-primary after:opacity-70 after:blur-[80px]")
        }>
        <AnimatedCursor
          showSystemCursor={true}
          innerSize={0}
          outerSize={15}
          innerScale={1}
          outerScale={4}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "transparent",
          }}
          outerStyle={{
            border: "2px solid #4f46e5",
          }}
        />
        {children}
        <span className="fixed inset-0 -z-10 h-screen w-screen bg-black bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask:linear-gradient(90deg,transparent,white_3%,white_97%,transparent)]" />
      </body>
    </html>
  );
}
