import type { Metadata } from "next";
import { Inter, Manrope, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spaiderspace.com"),

  title: "SPAIDER - The Sovereign AI Layer for Aerospace",
  description:
    "SPAIDER provides European-sovereign AI infrastructure for aerospace. Deploy domain-expert AI agents that collaborate with your team on your data - securely, compliantly, and at scale.",

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
    title: "SPAIDER - The Sovereign AI Layer for Aerospace",
    description:
      "Secure, European-sovereign AI infrastructure for aerospace. AI agents that work as domain-expert coworkers - on your data, inside your ecosystem.",
    url: "https://www.spaiderspace.com",
    siteName: "SPAIDER",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPAIDER - Sovereign AI Layer for Aerospace",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SPAIDER - The Sovereign AI Layer for Aerospace",
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
      className={`${manrope.variable} ${inter.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <div className="min-h-screen relative bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.06),transparent_40%),linear-gradient(to_bottom,#0b0b0c,#000000)]">
        <body className="min-h-full flex flex-col bg-background text-foreground">
          {/* <SmoothScrollProvider>{children}</SmoothScrollProvider> */}
          {children}
        </body>
      </div>
    </html>
  );
}
