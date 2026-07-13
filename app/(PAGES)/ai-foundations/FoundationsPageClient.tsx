"use client";

import AIFoundationsHero from "../../components/ai-foundations/Hero";
import Onboarding from "../../components/ai-foundations/Onboarding";
import PlatformWalkthrough from "../../components/ai-foundations/PlatformWalkthrough";
import UseCases from "../../components/ai-foundations/UseCases";
import WhatYouGet from "../../components/ai-foundations/WhatYouGet";
import CtaBand from "../../components/CtaBand";

export default function FoundationsPageClient() {
	return (
		// Page-scoped cyan accent, fluid-gutter full-bleed layout (see page-revamp-playbook.md)
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as React.CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<AIFoundationsHero />
				<PlatformWalkthrough />
				<WhatYouGet />
				<Onboarding />
				<UseCases />
				<CtaBand title="Make your organization AI-ready." copy="Start with a secure knowledge foundation on your own documents." ctaHref="/request-demo" ctaLabel="Start a pilot" />
			</div>
		</div>
	);
}
