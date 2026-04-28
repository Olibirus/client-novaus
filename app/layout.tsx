import type { Metadata } from "next";
import { Syne, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

/**
 * Title / heading font: Syne — geometric grotesque, bold editorial feel.
 * Closest freely available substitute for Cy Grotesk Key (premium paid font).
 * Use font-display + font-bold (700) for titles, font-medium (500) for subtitles.
 */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Body font: Bricolage Grotesque — as requested by client.
 * Humanist grotesque, excellent readability, available on Google Fonts.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novaus.fr"),
  title: {
    default: "Novaus, Agence de design d'espaces événementiels & stands sur-mesure",
    template: "%s | Novaus",
  },
  description:
    "Novaus conçoit et produit des stands d'exposition, showrooms, pop-up et roadshows en France et à l'international. Le design comme trajectoire, l'expérience comme destination.",
  keywords: [
    "agence stand",
    "design stand",
    "stand sur mesure",
    "stand modulaire",
    "salon professionnel",
    "exposition",
    "showroom",
    "pop-up store",
    "roadshow",
    "scénographie",
    "Paris",
    "Lyon",
    "Marseille",
    "Lille",
    "Rennes",
  ],
  authors: [{ name: "Novaus" }],
  openGraph: {
    title: "Novaus, Le design comme trajectoire",
    description:
      "Agence de design d'espaces événementiels. Stands, showrooms, pop-up et roadshows en France et à l'international.",
    url: "https://novaus.fr",
    siteName: "Novaus",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${bricolage.variable}`}>
      <body className="bg-ink text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
