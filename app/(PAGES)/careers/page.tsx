import type { Metadata } from "next";
import Reveal from "@/app/components/ui/reveal";
import CareersHero from "@/app/components/careers/CareersHero";
import JobListings from "@/app/components/careers/JobListings";

export const metadata: Metadata = {
	title: "Careers — SPAIDER",
	description: "Join SPAIDER Space and help build the sovereign AI layer for aerospace.",
};

const VALUES = [
	{
		number: "01",
		title: "Precision over speed",
		body: "We build for aerospace — where accuracy and reliability are non-negotiable. We move deliberately, verify rigorously, and never trade correctness for velocity.",
	},
	{
		number: "02",
		title: "Sovereign by design",
		body: "Organisations have the right to control their own data and AI. Every architectural decision we make reinforces sovereignty, compliance, and trust.",
	},
	{
		number: "03",
		title: "Deep domain respect",
		body: "Aerospace is a discipline earned over decades. We approach domain experts with humility, building AI that amplifies their judgment — never replacing it.",
	},
	{
		number: "04",
		title: "Radical ownership",
		body: "Every team member owns their work end-to-end — from scoping to shipping to supporting. We don't hand off problems; we solve them.",
	},
	{
		number: "05",
		title: "Transparent and accountable",
		body: "We build AI that explains itself. Internally, we operate the same way: open communication, clear decisions, and accountability at every level.",
	},
];

export default function CareersPage() {
	return (
		<div className="w-full min-w-0 space-y-16 sm:space-y-24 md:space-y-32 max-w-7xl mx-auto">

			{/* ── Hero ── */}
			<CareersHero />

			{/* ── Open roles ── */}
			<section id="open-roles" className="scroll-mt-28">
				<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-12">
					<h2 className="max-w-[10ch] font-outfit text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
						Open roles
					</h2>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.05} delayMs={80}>
					<JobListings />
				</Reveal>
			</section>

			{/* ── Values ── */}
			<section>
				<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
					<h2 className="max-w-[10ch] font-outfit text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
						What we value
					</h2>
				</Reveal>

				<div className="grid gap-x-16 md:grid-cols-2 lg:gap-x-24">
					{VALUES.map((v, i) => (
						<Reveal key={v.number} variant="fade-up" threshold={0.1} delayMs={i * 55}>
							<div className="border-t border-white/10 py-8 sm:py-10">
								<span className="font-montserrat text-[11px] font-medium tracking-[0.08em] text-white/55">
									{v.number}
								</span>
								<h3 className="mt-2 font-outfit text-xl font-medium tracking-tight text-foreground sm:text-2xl">
									{v.title}
								</h3>
								<p className="mt-4 max-w-[52ch] text-sm leading-7 text-muted/90">
									{v.body}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>
		</div>
	);
}
