"use client";
import { BarChart3, ChevronDown, Clock3, FolderKanban, Users } from "lucide-react";
import { useState } from "react";
import Reveal from "@/app/components/ui/reveal";

const CHALLENGES = [
	{
		k: "Time Constraints",
		v: "Engineering teams spending 40+ hours per RFP response.",
	},
	{
		k: "Resource Allocation",
		v: "Critical engineers diverted from core product development.",
	},
	{
		k: "Opportunity Cost",
		v: "Missing RFPs that could drive significant revenue.",
	},
	{
		k: "Knowledge Management",
		v: "Hard to leverage previous responses across teams.",
	},
];

export default function RfpChallenge() {
	const [expanded, setExpanded] = useState(false);
	const items = CHALLENGES;
	const icons = [Clock3, Users, BarChart3, FolderKanban] as const;

	return (
		<section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="mb-6 font-montserrat text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl lg:text-3xl">
				The RFP Challenge
			</h2>
			<div className="flex flex-row justify-between gap-20">
				<Reveal variant="fade-left" threshold={0.25} className="max-w-md">
					<p className="mt-3 w-full text-xs leading-6 text-muted font-inter sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Every year, space organizations handle hundreds of RFPs, each requiring significant time from specialized engineering teams.</p>

					<p className="mt-3 w-full text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7 md:mt-4 lg:text-base lg:leading-7">With limited resources and growing competition, teams face tough choices on where to invest effort—risking delays and missed opportunities.</p>

					{/* Toggle (mobile only) */}
					<button type="button" onClick={() => setExpanded((v) => !v)} className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/20 px-3 py-2 text-xs text-foreground/70 transition hover:bg-background/30 sm:px-4 sm:text-sm md:hidden" aria-expanded={expanded} aria-controls="rfp-more">
						{expanded ? "Read less" : "Read more"}
						<ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden />
					</button>
				</Reveal>

				{/* RIGHT: Aside / bullets */}
				<Reveal as="aside" variant="fade-right" threshold={0.25} delayMs={120} className="min-w-0 md:col-span-5" id="rfp-more">
					<div>
						<div className="mt-4 grid grid-cols-1 gap-6 sm:mt-5 sm:grid-cols-2 md:mt-6 lg:grid-cols-4">
							{items.map((c, i) => {
								const Icon = icons[i] ?? Clock3;
								return (
									<div key={c.k} className="min-w-0 lg:border-l lg:border-[#ff595a]/15 lg:pl-6">
										<div className="flex items-center gap-3">
											<span className="relative inline-flex h-8 w-8 items-center justify-center text-[#ff595a]">
												<span aria-hidden className="absolute inset-0 rounded-full bg-[#ff595a]/10 blur-[6px]" />
												<Icon className="relative h-4 w-4" aria-hidden />
											</span>
										</div>
										<h4 className="mt-3 font-montserrat text-sm font-semibold text-foreground sm:text-base">{c.k}</h4>
										<p className="mt-1.5 text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7">{c.v}</p>
									</div>
								);
							})}
						</div>
					</div>
				</Reveal>
			</div>

		</section>
	);
}
