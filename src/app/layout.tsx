import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xu ning Liang",
  description: "Porfolio website created by Xu ning Liang using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex`}>{children}</body>
    </html>
  );
}

