import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Afsar — Senior Product Designer",
  description:
    "Self-taught Senior Product Designer with close to 5 years of experience across startups and B2B. Strong in research, visual design, and scalable design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-bg text-text-body font-serif">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
