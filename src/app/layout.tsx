import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "Xu ning Liang",
  description: "Porfolio website created by Xu ning Liang using Nextjs",
};

const Amulya = localFont({
  src: [
    { path: "../assets/fonts/Amulya/Amulya-Variable.woff2", style: "normal" },
    {
      path: "../assets/fonts/Amulya/Amulya-VariableItalic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-amulya",
});

const Synonym = localFont({
  src: "../assets/fonts/Synonym/Synonym-Variable.woff2",
  display: "swap",
  variable: "--font-synonym",
});

const Calligraphy = localFont({
  src: [
    {
      path: "../assets/fonts/Calligraphy/hanyiqingzhouxing.ttf",
    },
  ],
  display: "swap",
  variable: "--font-calligraphy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex antialiased ${Amulya.variable} ${Synonym.variable} ${Calligraphy.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
