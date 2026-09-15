import type { Metadata, Viewport } from "next";
import "@carrot-kpi/switzer-font/latin.css";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { Toaster } from "@/app/components/Toaster";
import { getSiteJsonLd } from "@/app/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.spaiderspace.com"),

	title: {
		default: "SPAIDER Space - Intelligence Systems for Space Engineering and Operations",
		template: "%s | SPAIDER Space",
	},
	description: "SPAIDER develops aerospace ontologies, domain models, expert agents, and explainability systems for space engineering and mission operations.",

	keywords: ["SPAIDER", "AI for aerospace", "sovereign AI", "EU data sovereignty AI", "aerospace AI platform", "AI agents aerospace", "proposal automation aerospace", "SAGAN AI"],

	openGraph: {
		title: "SPAIDER Space - Intelligence Systems for Space Engineering and Operations",
		description: "Aerospace knowledge, domain models, expert agents, and explainability systems for the space mission lifecycle.",
		url: "https://www.spaiderspace.com",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og.png",
				width: 1731,
				height: 909,
				alt: "SPAIDER Space - Intelligence Systems for Space Engineering and Operations",
			},
		],
		locale: "en_US",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "SPAIDER Space - Intelligence Systems for Space Engineering and Operations",
		description: "Space technology, aerospace intelligence, and explainable AI.",
		images: ["/og.png"],
		creator: "@spaider_ai",
	},

	robots: {
		index: true,
		follow: true,
		nocache: false,
	},

	icons: {
		icon: "/favicon.ico",
	},

	alternates: {
		canonical: "https://www.spaiderspace.com",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#07080c",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="min-h-full flex flex-col bg-spx-void text-foreground">
				<JsonLd data={getSiteJsonLd()} />
				<Toaster />
				<div className="relative z-10">{children}</div>
			</body>
		</html>
	);
}
