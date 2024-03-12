import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "primeflex/primeflex.min.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mi-ne movement",
  description: "mies raadgever en neeltje de jong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
