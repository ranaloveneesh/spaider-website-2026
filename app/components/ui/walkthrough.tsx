"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/app/components/ui/reveal";

// Port of source's `.walk` scrollytelling (SAGAN "Key workflows"): tall
// scroll-through steps on the left, a sticky app-screenshot frame on the right
// that crossfades to the active step. Source drives it with GSAP ScrollTrigger
// (active while a step crosses the 55% line); here an IntersectionObserver with
// a center-band rootMargin does the same job. Below the 960px breakpoint the
// frame can't stay pinned (steps stack in a single column), so each step
// carries its own inline screenshot instead of relying on the shared frame.
export type WalkStep = {
	img: string;
	title: string;
	body: string;
};

type Props = {
	title: React.ReactNode;
	lede?: string;
	steps: WalkStep[];
};

export default function Walkthrough({ title, lede, steps }: Props) {
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
				<h2 className="spx-heading text-foreground">{title}</h2>
				{lede && <p className="spx-lede mt-3">{lede}</p>}
			</Reveal>

			<div className="grid grid-cols-1 items-start gap-[clamp(30px,4vw,64px)] min-[960px]:grid-cols-[0.85fr_1.15fr]">
				{/* Steps */}
				<div>
					{steps.map((step, i) => (
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

							{/* Inline screenshot - stands in for the sticky frame below 960px, where it can't stay pinned */}
							<div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xs border border-spx-rule-2 bg-spx-void-2 min-[960px]:hidden">
								<Image src={step.img} alt={step.title} fill sizes="100vw" quality={95} className="object-contain" priority={i === 0} />
							</div>
						</div>
					))}
				</div>

				{/* Sticky media frame (960px+ only) - screenshots crossfade to the active step */}
				{/* Source's offset for full-bleed layouts, clamped so it never goes offscreen on ultrawides */}
				<div className="hidden min-[960px]:sticky min-[960px]:block" style={{ top: "max(70px, calc(50vh - 21vw + 40px))" }}>
					<div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-spx-rule-2 bg-spx-void-2">
						{steps.map((step, i) => (
							/* sizes overstates the ~55vw frame on purpose: dense app screenshots need ~2x
							   oversampling to survive the optimizer's lossy resize on low-DPR screens */
							<Image key={step.title} src={step.img} alt={step.title} fill sizes="(max-width: 960px) 100vw, 75vw" quality={95} className={`object-contain transition-opacity duration-450 ${active === i ? "opacity-100" : "opacity-0"}`} priority={i === 0} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
