import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { InvestFormLazy } from "@/app/components/invest/InvestFormLazy";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Invest",
	description: "Investor information for SPAIDER, European sovereign AI for aerospace.",
	alternates: { canonical: "https://www.spaiderspace.com/invest" },
};

export default function InvestPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Split hero: statement left, investor form right ── */}
				<header className="border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
						<Reveal variant="fade-up" threshold={0.1} className="min-w-0">
							<h1 className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
								Own a piece of
								<br />
								<span className="spx-grad-text">the operating layer.</span>
							</h1>
							<p className="spx-lede mt-7">SPAIDER is engaging with strategic investors interested in aerospace AI, enterprise knowledge infrastructure, and domain-specific agentic systems.</p>
						</Reveal>
						<div className="w-full min-w-0 lg:pt-2">
							<InvestFormLazy />
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
