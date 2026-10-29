import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://suffolkcountyappliancerepair.com"),
  title: {
    default: "Appliance Repair Suffolk County, NY | Fast Local Service (631) 505-5046",
    template: "%s | Appliance Repair in Suffolk County New York"
  },
  description: "Fast, reliable appliance repair across Suffolk County, NY. Refrigerators, washers, dryers, ovens, dishwashers and more. Upfront quotes. Call (631) 505-5046.",
  keywords: [
    "Appliance Repair Suffolk County NY",
    "Suffolk County appliance repair",
    "refrigerator repair Suffolk County",
    "washing machine repair Suffolk County",
    "dryer repair Suffolk County",
    "oven repair Suffolk County",
    "dishwasher repair Suffolk County",
    "appliance repair Huntington NY",
    "appliance repair Smithtown NY",
    "appliance repair Islip NY",
    "appliance repair Babylon NY",
    "appliance repair Patchogue NY"
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Appliance Repair Suffolk County, NY | Licensed Local Technicians",
    description: "Fast, reliable appliance repair across Suffolk County, Long Island. Upfront quotes and 90-day warranty. Call (631) 505-5046.",
    url: "https://suffolkcountyappliancerepair.com",
    siteName: "Appliance Repair in Suffolk County New York",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Appliance Repair in Suffolk County New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliance Repair Suffolk County, NY",
    description: "Emergency same-day appliance repair across Suffolk County. Call (631) 505-5046.",
    images: ["https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global LocalBusiness & HomeAndConstructionBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": BUSINESS_INFO.name,
    "alternateName": BUSINESS_INFO.shortName,
    "image": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "url": "https://suffolkcountyappliancerepair.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Suffolk County",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8292,
      "longitude": -73.3512
    },
    "areaServed": [
      { "@type": "City", "name": "Huntington" },
      { "@type": "City", "name": "Smithtown" },
      { "@type": "City", "name": "Islip" },
      { "@type": "City", "name": "Babylon" },
      { "@type": "City", "name": "Patchogue" },
      { "@type": "AdministrativeArea", "name": "Suffolk County" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "hasMap": BUSINESS_INFO.mapUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "387"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
