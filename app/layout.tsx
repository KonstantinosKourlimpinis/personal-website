import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konstantinos Kourlimpinis — Analyst & AI Engineer",
  description:
    "Personal portfolio of Konstantinos Kourlimpinis — Analyst, Software & AI Engineer, and passionate freediver based in Lausanne, Switzerland.",
  keywords: ["Data Analyst", "AI Engineer", "Software Developer", "Portfolio", "Lausanne", "Causal Inference", "Machine Learning"],
  authors: [{ name: "Konstantinos Kourlimpinis" }],
  openGraph: {
    type: "website",
    title: "Konstantinos Kourlimpinis — Analyst & AI Engineer",
    description:
      "Analyst, Software & AI Engineer, and curious adventurer based in Lausanne, Switzerland. Turning data into decisions that matter.",
    siteName: "Konstantinos Kourlimpinis",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konstantinos Kourlimpinis — Analyst & AI Engineer",
    description:
      "Analyst, Software & AI Engineer, and curious adventurer based in Lausanne, Switzerland.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-ocean-black text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
