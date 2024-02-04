import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Hibatillah • Frontend Dev • UI Designer",
  description: "M. Hibatillah Hasanin Portfolio",
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
          "h-dvh bg-black overflow-hidden before:absolute before:top-0 before:left-[10%] before:w-2/3 before:h-20 before:rotate-[25deg] before:rounded-full before:bg-primary before:opacity-70 before:blur-[80px] after:absolute after:-bottom-10 after:left-[20%] after:w-[500px] after:h-20 after:rotate-12 after:rounded-full after:bg-primary after:opacity-70 after:blur-[80px]")
        }>
        {children}
        <span className="absolute inset-0 -z-10 h-screen w-screen bg-black bg-[linear-gradient(to_right,#070707_1px,transparent_1px),linear-gradient(to_bottom,#070707_1px,transparent_1px)] bg-[size:4rem_4rem] [mask:linear-gradient(90deg,transparent,white_7%,white_94%,transparent)]" />
      </body>
    </html>
  );
}
