import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CtaBand from "../../../components/CtaBand";
import GenericCopilot from "../../../components/sagan/GenericCopilot";
import SaganHero from "../../../components/sagan/Hero";
import Metrics from "../../../components/sagan/Metrics";
import OnboardingTimeline from "../../../components/sagan/OnboardingTimeline";
import ProposalWalkthrough from "../../../components/sagan/ProposalWalkthrough";
import RfpChallenge from "../../../components/sagan/RFPChallenge";
import Reveal from "../../../components/ui/reveal";

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
				url: "/logo.png",
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
		// Page-scoped cyan accent, fluid-gutter full-bleed layout (see page-revamp-playbook.md)
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<SaganHero />
				<RfpChallenge />
				<ProposalWalkthrough />
				<OnboardingTimeline />
				<Metrics />
				<GenericCopilot />
				<Reveal variant="fade-up" threshold={0.25}>
					<CtaBand title="Pilot SAGAN on your next tender." copy="Deployed in your infrastructure, grounded in your proposal history." ctaHref="/request-trial" ctaLabel="Book a Demo" />
				</Reveal>
			</div>
		</div>
	);
}
