"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/app/components/ui/reveal";

// Port of source's SAGAN "03 — Key workflows" walkthrough (`.walk`): tall
// scroll-through steps on the left, a sticky app-screenshot frame on the right
// that crossfades to the active step. Source drives it with GSAP ScrollTrigger
// (active while a step crosses the 55% line); here an IntersectionObserver with
// a center-band rootMargin does the same job.
type WalkStep = {
	img: string;
	title: string;
	body: string;
};

const STEPS: WalkStep[] = [
	{
		img: "/sagan/walk/real_grounding.webp",
		title: "Ground the call",
		body: "The Decision Brief, built from the tender corpus: objective, budget, key requirements and risks. Every section carries a confidence score and its sources. You review and confirm before ideation begins.",
	},
	{
		img: "/sagan/walk/real_capability.webp",
		title: "Map skills to requirements",
		body: "The requirement coverage matrix shows which partner and which person covers each requirement, with eligibility carried over from grounding and gaps surfaced before you commit. A grounded assistant answers questions beside the matrix.",
	},
	{
		img: "/sagan/walk/real_wp.webp",
		title: "Build the work plan",
		body: "The work breakdown structure: packages, owning companies, WP managers, timing and objectives. Generated from ideation and editable by your team.",
	},
	{
		img: "/sagan/walk/real_gantt.webp",
		title: "Schedule the programme",
		body: "The programme schedule with milestone gates (KOM, PDR, CDR, QR, FR) laid over the work packages. Drafting and finalization then compile the submission from the same baseline.",
	},
];

export default function ProposalWalkthrough() {
	const [active, setActive] = useState(0);
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// A step is "active" while it crosses the vertical center band of the
		// viewport (source: ScrollTrigger start "top 55%" / end "bottom 55%").
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const i = stepRefs.current.indexOf(entry.target as HTMLDivElement);
					if (i !== -1) setActive(i);
				}
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		);
		for (const el of stepRefs.current) if (el) io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					Watch a proposal <span className="spx-grad-text">come together.</span>
				</h2>
				<p className="spx-lede mt-3">Captured from the SPAIDER application: the actual workspace, stage by stage, running on demonstration data.</p>
			</Reveal>

			<div className="grid grid-cols-1 items-start gap-[clamp(30px,4vw,64px)] min-[960px]:grid-cols-[0.85fr_1.15fr]">
				{/* Steps */}
				<div>
					{STEPS.map((step, i) => (
						<div
							key={step.title}
							ref={(el) => {
								stepRefs.current[i] = el;
							}}
							className={`flex min-h-[46vh] flex-col justify-center border-t border-spx-rule py-10 transition-opacity duration-400 last:border-b min-[960px]:min-h-[58vh] ${active === i ? "opacity-100" : "opacity-25"}`}
						>
							<span className="mb-5 block font-geist-mono text-[0.74rem] uppercase tracking-[0.24em] text-spx-cyan">0{i + 1}</span>
							<h3 className="font-outfit text-[clamp(1.35rem,2.2vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-foreground">{step.title}</h3>
							<p className="mt-3.5 max-w-[40ch] text-[1.04rem] leading-[1.68] text-spx-mute">{step.body}</p>
						</div>
					))}
				</div>

				{/* Sticky media frame - screenshots crossfade to the active step */}
				{/* Source's offset (page is full-bleed now), clamped so it never goes offscreen on ultrawides */}
				<div className="order-first min-[960px]:order-none min-[960px]:sticky" style={{ top: "max(70px, calc(50vh - 21vw + 40px))" }}>
					<div className="relative aspect-[1512/900] overflow-hidden rounded-xs border border-spx-rule-2 bg-spx-void-2">
						{STEPS.map((step, i) => (
							<Image key={step.img} src={step.img} alt={step.title} fill sizes="(max-width: 960px) 100vw, 60vw" className={`object-cover transition-opacity duration-450 ${active === i ? "opacity-100" : "opacity-0"}`} priority={i === 0} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
