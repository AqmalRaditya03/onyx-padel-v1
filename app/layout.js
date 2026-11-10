import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaPixel from "../components/MetaPixel";
import { SITE } from "../lib/site";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Onyx Padel | Private Padel Court di Karawaci, Tangerang", template: "%s | Onyx Padel" },
  description: "Sewa lapangan padel private di Karawaci, Kelapa Dua, Tangerang. 2 court premium, sauna, dan cold plunge. Booking online.",
  openGraph: { siteName: "Onyx Padel", locale: "id_ID", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  priceRange: "Rp150.000 - Rp225.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Rorojonggrang No.1, Bencongan Indah",
    addressLocality: "Kelapa Dua, Kabupaten Tangerang",
    addressRegion: "Banten",
    postalCode: "15810",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  sameAs: [SITE.ayo, SITE.reclub],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={interTight.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MetaPixel />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
