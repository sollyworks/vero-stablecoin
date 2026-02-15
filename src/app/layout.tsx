import type { Metadata } from "next";
import { Agentation } from "agentation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vero Stablecoin",
  description: "Vero Stablecoin web app",
};

const isAgentationEnabled =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_AGENTATION_ENABLED === "true";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        {isAgentationEnabled && <Agentation />}
      </body>
    </html>
  );
}
