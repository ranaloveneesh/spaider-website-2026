import type { Metadata } from "next";
import Reveal from "@/app/components/ui/reveal";
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
		<div className="mt-4 w-full min-w-0 space-y-8 pb-10 sm:mt-6 sm:space-y-10 sm:pb-12 md:space-y-12">
			{/* Audience Benefits */}
			<Reveal variant="scale" threshold={0.35}>
			</Reveal>
			<Reveal variant="scale" threshold={0.35}>
				<SaganHero />
			</Reveal>
			<Reveal variant="fade-up">
				<RfpChallenge />
			</Reveal>
			<Reveal variant="fade-up">
				<KeyFeatures />
			</Reveal>
			<Reveal variant="fade-up">
				<OnboardingTimeline />
			</Reveal>
			<Reveal variant="fade-up">
				<Metrics />
			</Reveal>
			<Reveal variant="scale" threshold={0.25}>
				<SaganCTA />
			</Reveal>
		</div>
	);
}
