import type { Metadata } from "next";
import KeyFeatures from "../../../components/sagan/KeyFeatures";
import Metrics from "../../../components/sagan/Metrics";
import OnboardingTimeline from "../../../components/sagan/OnboardingTimeline";
import RfpChallenge from "../../../components/sagan/RFPChallenge";
import SaganCTA from "../../../components/sagan/SaganCTA";
import SaganHero from "../../../components/sagan/Hero";

export const metadata: Metadata = {
	title: "Sagan - SPAIDER",
	description: "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
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
