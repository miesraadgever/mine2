import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primeflex/primeflex.min.css"
import Header from "@/components/Header";

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
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
