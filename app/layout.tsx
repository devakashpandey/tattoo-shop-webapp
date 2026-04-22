import type { Metadata } from "next";
import { Poppins, Manrope, Nunito, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "International Tattoo House — Premium Tattoo Studio",
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
    title: "International Tattoo House — Premium Tattoo Studio",
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
    <html lang="en" className={`${poppins.variable} ${manrope.variable} ${nunito.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
