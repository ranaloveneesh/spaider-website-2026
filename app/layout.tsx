import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

// Keep Inter available as an optional secondary font (not currently used by default).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spaiderspace.com"),

  title: "SPAIDER — The Sovereign AI Layer for Aerospace",
  description:
    "SPAIDER provides European-sovereign AI infrastructure for aerospace. Deploy domain-expert AI agents that collaborate with your team on your data — securely, compliantly, and at scale.",

  keywords: [
    "SPAIDER",
    "AI for aerospace",
    "sovereign AI",
    "EU data sovereignty AI",
    "aerospace AI platform",
    "AI agents aerospace",
    "proposal automation aerospace",
    "SAGAN AI",
  ],

  openGraph: {
    title: "SPAIDER — The Sovereign AI Layer for Aerospace",
    description:
      "Secure, European-sovereign AI infrastructure for aerospace. AI agents that work as domain-expert coworkers — on your data, inside your ecosystem.",
    url: "https://www.spaiderspace.com",
    siteName: "SPAIDER",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPAIDER — Sovereign AI Layer for Aerospace",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SPAIDER — The Sovereign AI Layer for Aerospace",
    description:
      "AI agents for aerospace teams. Secure, sovereign, mission-ready.",
    images: ["/og-image.png"],
    creator: "@spaider_ai", // optional
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  icons: {
    icon: "/favicon.svg",
  },

  alternates: {
    canonical: "https://www.spaiderspace.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground type-body">
        {children}
      </body>
    </html>
  );
}
