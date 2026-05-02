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
  metadataBase: new URL('https://tattoohouseara.vercel.app'),
  title: {
    default: "Tattoo House Ara — Best Tattoo Studio in Ara, Bihar",
    template: "%s | Tattoo House Ara"
  },
  description:
    "Tattoo House Ara is the premier tattoo studio in Bihar. Specializing in Realism, Portraits, Religious tattoos, and Mandala art. Visit the best tattoo artist in Ara for custom designs and professional piercings.",
  keywords: [
    "Tattoo House",
    "Tattoo House Ara",
    "Tattoo House Bihar",
    "Best tattoo studio in Ara",
    "Best tattoo artist in Bihar",
    "Tattoo shop in Ara",
    "Custom tattoos Ara",
    "Portrait tattoo artist Bihar",
    "Religious tattoos Ara",
    "Mandala tattoo Ara",
    "Professional piercing Ara",
    "Tattoo House international",
  ],
  authors: [{ name: "Satish K. Keshri" }],
  creator: "Satish K. Keshri",
  publisher: "Tattoo House Ara",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Tattoo House Ara — Premium Tattoo Studio in Bihar',
    description: 'The most trusted name for custom tattoos in Ara. Experience world-class artistry and hygiene.',
    url: 'https://tattoohouseara.vercel.app',
    siteName: 'Tattoo House Ara',
    images: [
      {
        url: 'https://tattoohouseara.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Tattoo House Ara Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: 'https://tattoohouseara.vercel.app/logo.png', sizes: 'any' },
      { url: 'https://tattoohouseara.vercel.app/logo.png', type: 'image/png' },
    ],
    apple: 'https://tattoohouseara.vercel.app/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooShop",
  "name": "Tattoo House Ara",
  "image": "https://tattoohouseara.com/tattoos/hero-banner.jpeg",
  "@id": "https://tattoohouseara.com",
  "url": "https://tattoohouseara.com",
  "telephone": "+919304328528",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Babu bajar mod, Mahadeva Road",
    "addressLocality": "Arrah",
    "addressRegion": "Bihar",
    "postalCode": "802301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.5609,
    "longitude": 84.6699
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.instagram.com/tattoohouseara"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${poppins.variable} ${manrope.variable} ${nunito.variable} ${openSans.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="https://tattoohouseara.vercel.app/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
