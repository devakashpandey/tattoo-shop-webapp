import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ink & Soul — Premium Tattoo Studio",
  description:
    "World-class tattoo artistry in a luxury studio environment. Custom designs, expert artists, and an unmatched experience. Book your appointment today.",
  keywords: [
    "tattoo studio",
    "custom tattoos",
    "tattoo artist",
    "realism tattoo",
    "fine line tattoo",
    "luxury tattoo",
  ],
  openGraph: {
    title: "Ink & Soul — Premium Tattoo Studio",
    description:
      "Where art meets skin. World-class tattoo artists crafting bespoke pieces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
