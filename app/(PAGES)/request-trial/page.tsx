import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { RequestDemoFormLazy } from "@/app/components/request-demo/RequestDemoFormLazy";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Request a Trial",
	description: "Book a trial of SPAIDER: sovereign AI agents for your aerospace team.",
	alternates: { canonical: "https://www.spaiderspace.com/request-trial" },
};

const SESSION_POINTS = ["Walk through your specific use case", "Discuss security, deployment, and integrations", "Get pricing and next steps"];

export default function RequestDemoPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Split hero: statement + session points left, form right (invest pattern) ── */}
				<header className="border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
						<Reveal variant="fade-up" threshold={0.1} className="min-w-0">
							<h1 className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
								Request a <span className="spx-grad-text">trial.</span>
							</h1>
							<p className="spx-lede mt-7">See how SPAIDER can enhance your way of working and connect to your data. In a short live session, we&apos;ll show what&apos;s possible, listen to your goals, and outline the simplest path forward.</p>

							<div className="mt-10 border-t border-spx-rule">
								{SESSION_POINTS.map((point, i) => (
									<div key={point} className="flex items-baseline gap-5 border-b border-spx-rule py-4">
										<span className="spx-index shrink-0">{`0${i + 1}`}</span>
										<span className="text-[1.02rem] leading-[1.65] text-spx-ink-2">{point}</span>
									</div>
								))}
							</div>
						</Reveal>
						<div className="w-full min-w-0 lg:pt-2">
							<RequestDemoFormLazy />
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
