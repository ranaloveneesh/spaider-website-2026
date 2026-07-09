import type { Metadata } from "next";
import SaganHero from "../../../components/sagan/Hero";
import KeyFeatures from "../../../components/sagan/KeyFeatures";
import Metrics from "../../../components/sagan/Metrics";
import OnboardingTimeline from "../../../components/sagan/OnboardingTimeline";
import RfpChallenge from "../../../components/sagan/RFPChallenge";
import SaganCTA from "../../../components/sagan/SaganCTA";

export const metadata: Metadata = {
	title: "SAGAN",
	description: "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
	alternates: { canonical: "https://www.spaiderspace.com/agents/sagan" },
	openGraph: {
		title: "SAGAN | SPAIDER Space",
		description: "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
		url: "https://www.spaiderspace.com/agents/sagan",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "SPAIDER Space - SAGAN",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function SaganPage() {
	return (
		<div className="w-full min-w-0 mx-auto max-w-7xl">
			<SaganHero />
			<RfpChallenge />
			<KeyFeatures />
			<OnboardingTimeline />
			<Metrics />
			<SaganCTA />
		</div>
	);
}
