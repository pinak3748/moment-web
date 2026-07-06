import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Recommended for performance (swaps to Inter once loaded)
  variable: "--font-inter", // Define a CSS variable name
});

export const metadata: Metadata = {
  title: "Momentum",
  description:
    "A calm, daily check-in app for tracking whether each day moved you forward — without streaks, badges, or guilt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
