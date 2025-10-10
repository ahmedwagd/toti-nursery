import type React from "react";
import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toti Froti Nursery - Where Little Dreams Grow",
  description:
    "A joyful, nurturing space for your child to explore, learn, and grow. Join our family at Toti Froti Nursery.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunito.variable} font-[family-name:var(--font-nunito)] antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          {/* <Analytics /> */}
        </Suspense>
      </body>
    </html>
  );
}
