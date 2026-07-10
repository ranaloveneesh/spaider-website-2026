"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

	return (
		<section className="mx-auto mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="spx-heading text-foreground">
				RFPs are complex, <span className="spx-grad-text">deadlines are not.</span>
			</Reveal>
			<div className="mt-10 flex flex-col gap-10 md:flex-row md:justify-between md:gap-16 lg:gap-20">
				<Reveal variant="fade-left" threshold={0.25} className="max-w-md">
					<p className="spx-body">Every year, space organizations handle hundreds of RFPs, each requiring significant time from specialized engineering teams.</p>

					<p className="spx-body mt-3 md:mt-4">With limited resources and growing competition, teams face tough choices on where to invest effort, risking delays and missed opportunities.</p>

					{/* Toggle (mobile only) */}
					<button
						type="button"
						onClick={() => setExpanded((v) => !v)}
						className="mt-5 inline-flex items-center gap-2 rounded-xs border border-spx-rule-2 px-4 py-2.5 font-geist-mono text-[0.7rem] uppercase tracking-[0.16em] text-spx-ink-2 transition-colors hover:border-spx-cyan hover:text-white md:hidden"
						aria-expanded={expanded}
						aria-controls="rfp-more"
					>
						{expanded ? "Read less" : "Read more"}
						<ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden />
					</button>
				</Reveal>

				{/* RIGHT: challenge items - hairline tenet cells, stagger in on scroll */}
				<Reveal as="aside" variant="fade-right" threshold={0.25} delayMs={120} className={`min-w-0 md:col-span-5 ${expanded ? "block" : "hidden"} md:block`} id="rfp-more">
					<div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
						{CHALLENGES.map((c, i) => (
							<motion.div key={c.k} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease: EXPO, delay: i * 0.07 }} className="min-w-0 border-t border-spx-rule py-6 sm:py-7">
								<span className="spx-index text-[#ff595a]">/ 0{i + 1}</span>
								<h3 className="mt-4 font-outfit text-base font-semibold tracking-tight text-foreground sm:text-lg">{c.k}</h3>
								<p className="mt-2 max-w-[34ch] text-sm leading-6 text-spx-mute sm:text-[0.95rem]">{c.v}</p>
							</motion.div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
