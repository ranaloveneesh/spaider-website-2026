import type { Metadata } from "next";
import TeamShowcase from "@/app/components/about/team";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "About - SPAIDER",
	description: "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
};

export default function AboutPage() {
	return (
		<div className="w-full min-w-0 space-y-8 pb-10 sm:space-y-10 sm:pb-12">
			<Reveal as="header" variant="fade-up" threshold={0.35} className="space-y-3 sm:space-y-4">
				<h1 className="font-montserrat text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
					About <span className="uppercase">Spaider</span> Space
				</h1>
				<p className="text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We are building the sovereign AI layer for aerospace—so your team can work with domain-expert agents on your own data, with deployment and compliance choices that fit European missions and enterprises.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 sm:space-y-4">
				<h2 className="font-montserrat text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-3xl">Our vision</h2>
				<p className="text-xs leading-6 text-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					We see a future where aerospace organisations run on AI that is as dependable as their hardware and as accountable as their processes—built in Europe, for European missions, with data and decisions firmly under their control.
				</p>
				<p className="text-xs leading-6 text-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
					Our vision is to make sovereign, domain-expert AI the default layer for design, test, and operations: technology that speeds up work without cutting corners on safety, export discipline, or trust. Human experts stay authoritative; agents handle retrieval, synthesis, and repetition so teams focus on judgment,
					creativity, and delivery.
				</p>
			</Reveal>

			<Reveal as="section" variant="fade-up" threshold={0.2} className="space-y-3 text-xs leading-6 text-foreground font-inter sm:space-y-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
				<p>SPAIDER Space S.à r.l. is headquartered in Luxembourg. We focus on reliability, security, and auditability: AI that fits how aerospace organisations already operate, not the other way around.</p>
				<p>Our platform combines retrieval and tooling with specialised agents for high-value workflows—from documentation and standards to analysis and decision support—so engineers and programme teams spend less time searching and more time on design, safety, and delivery.</p>
			</Reveal>

			<Reveal as="h2" variant="fade-up" threshold={0.25} className="font-montserrat text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-3xl">
				Our Team
			</Reveal>
			<Reveal variant="fade-up" threshold={0.2}>
				<TeamShowcase />
			</Reveal>
		</div>
	);
}
