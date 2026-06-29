"use client";

import {
	BarChart3,
	ChevronDown,
	Clock3,
	FolderKanban,
	Users,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "@/app/components/ui/reveal";

const EXPO = [0.16, 1, 0.3, 1] as const;

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
			<Reveal
				as="h2"
				variant="fade-up"
				threshold={0.35}
				className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
			>
				The RFP Challenge
			</Reveal>
			<div className="mt-10 flex flex-col gap-10 md:flex-row md:justify-between md:gap-16 lg:gap-20">
				<Reveal variant="fade-left" threshold={0.25} className="max-w-md">
					<p className="w-full text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						Every year, space organizations handle hundreds of RFPs, each
						requiring significant time from specialized engineering teams.
					</p>

					<p className="mt-3 w-full text-xs leading-6 text-muted sm:text-sm sm:leading-7 md:mt-4 lg:text-base lg:leading-7">
						With limited resources and growing competition, teams face tough
						choices on where to invest effort-risking delays and missed
						opportunities.
					</p>

					{/* Toggle (mobile only) */}
					<button
						type="button"
						onClick={() => setExpanded((v) => !v)}
						className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/20 px-3 py-2 text-xs text-foreground/70 transition hover:bg-background/30 sm:px-4 sm:text-sm md:hidden"
						aria-expanded={expanded}
						aria-controls="rfp-more"
					>
						{expanded ? "Read less" : "Read more"}
						<ChevronDown
							className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
							aria-hidden
						/>
					</button>
				</Reveal>

				{/* RIGHT: challenge items - stagger in on scroll */}
				<Reveal
					as="aside"
					variant="fade-right"
					threshold={0.25}
					delayMs={120}
					className={`min-w-0 md:col-span-5 ${expanded ? "block" : "hidden"} md:block`}
					id="rfp-more"
				>
					<div className="mt-4 grid grid-cols-1 gap-6 sm:mt-5 sm:grid-cols-2 md:mt-6 lg:grid-cols-2">
						{items.map((c, i) => {
							const Icon = icons[i] ?? Clock3;
							return (
								<motion.div
									key={c.k}
									initial={{ opacity: 0, y: 14 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.4, ease: EXPO, delay: i * 0.07 }}
									className="min-w-0 lg:border-l lg:border-[#ff595a]/15 lg:pl-6"
								>
									<div className="flex items-center gap-3">
										<span className="relative inline-flex h-8 w-8 items-center justify-center text-[#ff595a]">
											<span
												aria-hidden
												className="absolute inset-0 rounded-full bg-[#ff595a]/10 blur-[6px]"
											/>
											<Icon className="relative h-4 w-4" aria-hidden />
										</span>
									</div>
									<h4 className="mt-3 font-montserrat text-sm font-medium text-foreground sm:text-base">
										{c.k}
									</h4>
									<p className="mt-1.5 text-xs leading-6 text-muted sm:text-sm sm:leading-7">
										{c.v}
									</p>
								</motion.div>
							);
						})}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
