import type { Metadata } from "next";
import SixGates from "@/app/components/about/SixGates";
import TeamShowcase from "@/app/components/about/Team";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "About",
	description: "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
	alternates: { canonical: "https://www.spaiderspace.com/about" },
	openGraph: {
		title: "About | SPAIDER Space",
		description: "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
		url: "https://www.spaiderspace.com/about",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "SPAIDER Space - About",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function AboutPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip">
			<div className="w-full space-y-16 pb-10 text-left sm:space-y-24 sm:pb-16 md:space-y-32" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Hero ── */}
				<Reveal as="header" variant="fade-up" threshold={0.1} className="py-12 sm:py-16">
					<h1 className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
						Built by aerospace
						<br />
						<span style={{ background: "var(--spx-grad)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>and AI specialists.</span>
					</h1>
					<p className="mt-8 max-w-[56ch] text-[clamp(1.08rem,1.4vw,1.22rem)] leading-[1.7] text-spx-ink-2">SPAIDER exists to make enterprise knowledge, expert workflows, and domain-specific AI assistants operational across aerospace organizations.</p>

					{/* Mission / Vision */}
					<div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-spx-rule bg-spx-rule sm:mt-16 md:grid-cols-2">
						<div className="bg-spx-void p-9">
							<span className="block font-geist-mono text-[0.7rem] uppercase tracking-[0.2em] text-spx-cyan">Our mission</span>
							<h3 className="mt-6 max-w-[44ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.5] text-spx-ink-2">Help aerospace teams accelerate innovation by making enterprise knowledge, workflows, and domain-specific AI assistants operational across the organization.</h3>
						</div>
						<div className="bg-spx-void p-9">
							<span className="block font-geist-mono text-[0.7rem] uppercase tracking-[0.2em] text-spx-cyan">Our vision</span>
							<h3 className="mt-6 max-w-[44ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.5] text-spx-ink-2">Every aerospace professional works with trusted AI assistants that understand their organization, their workflows, and the technical context of space systems.</h3>
						</div>
					</div>
				</Reveal>

				{/* ── One mission, six gates ── */}
				<SixGates />

				{/* ── Team ── */}
				<section>
					<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
						<div className="flex justify-start md:justify-end">
							<h2 className="max-w-[20ch] font-outfit text-4xl font-semibold tracking-tight text-foreground md:text-right sm:text-5xl">
								<span style={{ background: "var(--spx-grad)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Minds</span> behind the mission
							</h2>
						</div>
					</Reveal>
					<Reveal variant="fade-up" threshold={0.2}>
						<TeamShowcase />
					</Reveal>
				</section>
			</div>
		</div>
	);
}
