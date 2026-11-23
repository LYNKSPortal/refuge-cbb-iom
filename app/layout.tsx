import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Refuge — Bistro, Bar & Coffee, Douglas, Isle of Man",
    template: "%s | Refuge, Douglas",
  },
  description:
    "Refuge is an independent bistro and bar at 52 Athol Street, Douglas, Isle of Man. Seasonal local produce, signature cocktails and the island's famous espresso martini. Book a table: 01624 616584.",
  keywords: [
    "restaurant Douglas Isle of Man",
    "Refuge bistro bar",
    "Douglas restaurant",
    "Isle of Man dining",
    "espresso martini Isle of Man",
    "Athol Street restaurant",
    "lunch Douglas IOM",
    "cocktail bar Douglas",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: "Refuge — Bistro & Bar",
    title: "Refuge — Bistro, Bar & Coffee, Douglas, Isle of Man",
    description:
      "Exceptional food. Thoughtful drinks. Good company. Seasonal, locally sourced dishes and signature cocktails at 52 Athol Street, Douglas.",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1920,
        height: 1080,
        alt: "Dishes and drinks on a table at Refuge, Douglas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refuge — Bistro, Bar & Coffee, Douglas",
    description:
      "Seasonal local produce, signature cocktails and the island's famous espresso martini. 52 Athol Street, Douglas, Isle of Man.",
    images: ["/hero-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: "Refuge — Coffee · Bar · Bistro",
  alternateName: "Refuge Bistro & Bar",
  description:
    "Independent bistro and bar in the heart of Douglas, Isle of Man, serving seasonal local produce, signature cocktails and speciality coffee.",
  url: site.url,
  logo: `${site.url}/white-logo.png`,
  image: `${site.url}/hero-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "IM",
  },
  geo: { "@type": "GeoCoordinates", latitude: 54.14884, longitude: -4.48351 },
  telephone: "+44 1624 616584",
  email: site.email,
  servesCuisine: ["Modern European", "Bistro", "British"],
  priceRange: "££",
  acceptsReservations: "True",
  hasMenu: `${site.url}/menus/lunch`,
  menu: [
    `${site.url}/menus/lunch`,
    `${site.url}/menus/evening`,
    `${site.url}/menus/winter-lunch`,
    `${site.url}/menus/winter-evening`,
    `${site.url}/menus/drinks`,
  ],
  sameAs: [
    "https://www.facebook.com/refugeiom",
    "https://www.tripadvisor.co.uk/Restaurant_Review-g190928-d24123335-Reviews-Refuge_Bistro_Bar-Douglas_Isle_of_Man.html",
    "https://www.instagram.com/refugeiom",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: site.bookingUrl,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "FoodEstablishmentReservation", name: "Book a table" },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday"],
      opens: "12:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "17:30",
      closes: "23:00",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: "Refuge — Bistro & Bar, Douglas",
  publisher: { "@id": `${site.url}/#restaurant` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
