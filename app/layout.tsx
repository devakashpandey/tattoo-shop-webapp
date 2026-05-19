import type { Metadata } from "next";
import { Poppins, Manrope, Nunito, Open_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://tattoohouseara.com'),
  title: {
    default: "Tattoo House Ara — Best Tattoo Shop in Ara, Bihar | Top Tattoo Artist",
    template: "%s | Tattoo House Ara"
  },
  description:
    "Looking for the best tattoo shop in Ara or Bihar? Tattoo House Ara offers premium custom tattoos, realism, religious art, and professional piercings. Visit the most trusted tattoo studio in Arrah for world-class artistry.",
  keywords: [
    "Tattoo House",
    "Tattoo House Ara",
    "Tattoo House Arrah",
    "Tattoo House Bihar",
    "Best tattoo shop in Ara",
    "Best tattoo studio in Ara",
    "Best tattoo artist in Bihar",
    "Tattoo shop in Arrah",
    "Tattoo studio in Bihar",
    "Best tattoo shop in Bihar",
    "International Tattoo House Ara",
    "Taho House Ara",
    "Tattoo House International",
    "Custom tattoos Ara",
    "Portrait tattoo artist Bihar",
    "Religious tattoos Ara",
    "Mandala tattoo Ara",
    "Professional piercing Ara",
    "Top rated tattoo shop Bihar",
    "Tattoo artist near me Ara",
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
    title: 'Tattoo House Ara — Best Tattoo Studio in Ara, Bihar',
    description: 'The most trusted name for custom tattoos in Ara. Experience world-class artistry, hygiene, and premium designs.',
    url: 'https://tattoohouseara.com',
    siteName: 'Tattoo House Ara',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Tattoo House Ara - Best Tattoo Shop in Ara',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tattoo House Ara — Premium Tattoo Studio in Bihar',
    description: 'World-class tattoo artistry in the heart of Ara, Bihar.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
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
  verification: {
    google: '93DEMv66E89kANkxwOpYaClox3Y9m903bN78acvUkas',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Tattoo House Ara",
  "alternateName": ["Taho House Ara", "International Tattoo House"],
  "image": "https://tattoohouseara.com/tattoos/hero-banner.jpeg",
  "@id": "https://tattoohouseara.com",
  "url": "https://tattoohouseara.com",
  "telephone": "+919304328528",
  "priceRange": "$$",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/tattoohouseara",
    "https://www.facebook.com/tattoohouseara"
  ],
  "hasMap": "https://maps.app.goo.gl/your-map-link",
  "areaServed": ["Ara", "Arrah", "Bihar", "Bhojpur", "Patna"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${poppins.variable} ${manrope.variable} ${nunito.variable} ${openSans.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="https://tattoohouseara.com/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8YHG4W6VXK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8YHG4W6VXK');
          `}
        </Script>
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
