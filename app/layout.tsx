import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://didieryvonnou.fr"),
  title: {
    default: "Didier Yvonnou — Bien-être durable & retour à soi",
    template: "%s | Didier Yvonnou",
  },
  description:
    "Réflexions, articles et contenus autour du bien-être durable, du retour à soi, des émotions, de l’ancrage et de la transformation intérieure.",
  keywords: [
    "Didier Yvonnou",
    "bien-être durable",
    "retour à soi",
    "développement personnel",
    "conscience de soi",
    "spiritualité accessible",
    "paix intérieure",
    "ancrage",
    "émotions",
    "transformation intérieure",
    "réflexions",
  ],
  authors: [{ name: "Didier Yvonnou" }],
  creator: "Didier Yvonnou",
  publisher: "Didier Yvonnou",
  alternates: {
    canonical: "https://didieryvonnou.fr",
  },
  openGraph: {
    title: "Didier Yvonnou — Bien-être durable & retour à soi",
    description:
      "Réflexions, articles et contenus autour du bien-être durable, du retour à soi et de la transformation intérieure.",
    url: "https://didieryvonnou.fr",
    siteName: "Didier Yvonnou",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Didier Yvonnou — Bien-être durable & retour à soi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Didier Yvonnou — Bien-être durable & retour à soi",
    description:
      "Réflexions et contenus autour du retour à soi, de l’ancrage et du bien-être durable.",
    images: ["/images/og-image.webp"],
  },
  verification: {
  google: "eRU_oBElbeo2F3qhxYc8GHwUVBLWStL79KsVRUCxcxQ",
},
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Didier Yvonnou",
  url: "https://didieryvonnou.fr",
  image: "https://didieryvonnou.fr/images/og-image.webp",
  description:
    "Auteur et accompagnant autour du bien-être durable, du retour à soi et de la conscience.",
  email: "bonjour@didieryvonnou.fr",
  knowsAbout: [
    "bien-être durable",
    "retour à soi",
    "conscience de soi",
    "ancrage",
    "émotions",
    "paix intérieure",
    "transformation intérieure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}