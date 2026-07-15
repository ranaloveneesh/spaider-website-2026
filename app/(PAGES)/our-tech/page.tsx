import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CtaBand from "@/app/components/CtaBand";
import SecurityCompliance from "@/app/components/home/SecurityCompliance";
import AnimatedHeader from "@/app/components/our-tech/AnimatedHeader";
import IntegrationsGallery from "@/app/components/our-tech/IntegrationsGallery";
import KnowledgeFlow from "@/app/components/our-tech/KnowledgeFlow";
import TechStack from "@/app/components/our-tech/TechStack";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Tech Stack",
	description: "European-sovereign AI infrastructure for aerospace - platform architecture, security, and deployment.",
	alternates: { canonical: "https://www.spaiderspace.com/our-tech" },
	openGraph: {
		title: "Tech Stack | SPAIDER Space",
		description: "European-sovereign AI infrastructure for aerospace - platform architecture, security, and deployment.",
		url: "https://www.spaiderspace.com/our-tech",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "SPAIDER Space - Tech Stack",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function OurTechPage() {
	return (
		// Page-scoped cyan accent, same as the homepage (see page-revamp-playbook.md)
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Hero: "Proprietary aerospace AI, built as a stack." ── */}
				<AnimatedHeader />

				<main className="relative min-w-0 text-foreground">
					{/* ── The moat: interactive stack layers ── */}
					<TechStack />

					{/* ── Knowledge flow: documents -> decisions pill chain ── */}
					<KnowledgeFlow />

					{/* ── Platform capabilities - tenets-style hairline grid ── */}
					{/* <section className="mt-[var(--spx-section-gap)] w-full min-w-0">
						<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
							<h2 className="spx-heading text-foreground">
								Built for <span className="spx-grad-text">how aerospace works.</span>
							</h2>
						</Reveal>
						<div className="grid gap-x-12 border-t border-spx-rule md:grid-cols-2">
							{SECTIONS.map((s, i) => (
								<Reveal key={s.title} variant="fade-up" threshold={0.1} delayMs={i * 55} className="border-b border-spx-rule md:odd:border-r md:odd:pr-12">
									<div className="py-9 md:py-11">
										<span className="spx-index">/ 0{i + 1}</span>
										<h3 className="spx-h3 mt-10 text-foreground">{s.title}</h3>
										<p className="spx-label mt-2 text-spx-cyan">{s.subtitle}</p>
										<p className="spx-body mt-4 max-w-[38ch]">{s.body}</p>
									</div>
								</Reveal>
							))}
						</div>
					</section> */}

					<Reveal variant="fade-up" threshold={0.2}>
						<IntegrationsGallery />
					</Reveal>

					<Reveal variant="zoom" threshold={0.25}>
						<SecurityCompliance />
					</Reveal>

					{/* CTA band (before footer) - source's mini `.cta-band` */}
					<Reveal variant="fade-up" threshold={0.25}>
						<CtaBand className="mt-[calc(var(--spx-section-gap)*0.5)]" title="Bring your documents. We'll bring the stack." copy="A technical briefing with your documents, your standards, your workflows." ctaHref="/request-trial" ctaLabel="Book a Demo" />
					</Reveal>
				</main>
			</div>
		</div>
	);
}
