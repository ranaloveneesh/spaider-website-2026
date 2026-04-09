import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Montserrat, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { Toaster } from "@/app/components/Toaster";
import { StarsBackground } from "@/app/components/ui/stars-background";
import { getSiteJsonLd } from "@/app/lib/structured-data";
import "./globals.css";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	preload: false,
	display: "swap",
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	style: "italic",
	preload: false,
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.spaiderspace.com"),

	title: "SPAIDER - The Sovereign AI Layer for Aerospace",
	description: "SPAIDER provides European-sovereign AI infrastructure for aerospace. Deploy domain-expert AI agents that collaborate with your team on your data - securely, compliantly, and at scale.",

	keywords: ["SPAIDER", "AI for aerospace", "sovereign AI", "EU data sovereignty AI", "aerospace AI platform", "AI agents aerospace", "proposal automation aerospace", "SAGAN AI"],

	openGraph: {
		title: "SPAIDER - The Sovereign AI Layer for Aerospace",
		description: "Secure, European-sovereign AI infrastructure for aerospace. AI agents that work as domain-expert coworkers - on your data, inside your ecosystem.",
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
		description: "AI agents for aerospace teams. Secure, sovereign, mission-ready.",
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

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#08090a",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${manrope.variable} ${inter.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<JsonLd data={getSiteJsonLd()} />
				<Toaster />
				<div className="min-h-screen relative bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.06),transparent_40%),linear-gradient(to_bottom,#0b0b0c,#000000)]">
					<StarsBackground />
					{/* <SmoothScrollProvider>{children}</SmoothScrollProvider> */}
					<div className="relative z-10">{children}</div>
				</div>
			</body>
		</html>
	);
}
