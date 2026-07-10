"use client";

import Image from "next/image";
import Reveal from "@/app/components/ui/reveal";

type StepItem = {
	title: string;
	desc: string;
	imgSrc: string;
	imgAlt: string;
};

const STEPS: StepItem[] = [
	{
		title: "Assign Oversight",
		desc: "Designate a SAGAN Manager responsible for configuration, approvals, and operational oversight.",
		imgSrc: "/abstract/1.png",
		imgAlt: "Assign Oversight",
	},
	{
		title: "Configure Core Intelligence",
		desc: "Set access, tone, creativity/accuracy balance, and guardrails for safe autonomy.",
		imgSrc: "/abstract/2.png",
		imgAlt: "Configure Core Intelligence",
	},
	{
		title: "Integrate Knowledge Base",
		desc: "Connect repositories and tools so SAGAN can draft with citations and up-to-date context.",
		imgSrc: "/abstract/3.png",
		imgAlt: "Integrate Knowledge Base",
	},
	{
		title: "Orchestrate Proposal Workflow",
		desc: "Standardize intake, drafting, compliance checks, review cycles, and submission-ready exports.",
		imgSrc: "/abstract/4.png",
		imgAlt: "Orchestrate Proposal Workflow",
	},
];

export default function OnboardingTimeline() {
	return (
		<section id="how-we-work" className="how-we-work-section relative mt-[var(--spx-section-gap)] w-full text-foreground">
			<div className="flex flex-col items-start justify-between">
				<Reveal as="h2" variant="fade-up" threshold={0.35} className="spx-heading text-foreground">
					Seamless <span className="spx-grad-text">onboarding.</span>
				</Reveal>

				<Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="spx-lede mt-3">
					Four steps from setup to a fully operational AI proposal engine.
				</Reveal>
			</div>

			<div className="relative mt-10 overflow-hidden px-0 md:px-8 lg:px-16 max-w-5xl mx-auto">
				<div className="timeline-wrapper hidden md:block">
					<div className="timeline-line" />
				</div>

				<div className="space-y-0">
					{STEPS.map((item, index) => {
						const even = index % 2 === 1;
						return (
							<div key={item.title} className="relative flex flex-col items-center justify-between md:flex-row">
								<div className="timeline-dot absolute left-1/2 hidden -translate-x-1/2 md:block" style={{ top: "1.25rem" }} />

								{/* Text block - slides in from its natural side */}
								<Reveal variant={even ? "fade-right" : "fade-left"} threshold={0.2} delayMs={80} className={`${even ? "order-2" : "order-1"} flex w-full flex-col items-start gap-2 md:w-2/5`}>
									<h3 className="mt-4 font-outfit text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl md:text-2xl">{item.title}</h3>
									<p className="max-w-[40ch] text-left text-sm leading-6 text-spx-mute sm:leading-7 lg:text-base">{item.desc}</p>
								</Reveal>

								{/* Mobile image - compact, fades up */}
								<Reveal variant="fade-up" threshold={0.2} delayMs={120} className="mt-3 flex w-full items-center justify-center md:hidden">
									<Image alt={item.imgAlt} src={item.imgSrc} width={160} height={160} loading="lazy" className="drop-shadow-[0_0_16px_color-mix(in_srgb,var(--color-accent)_40%,transparent)] h-28 w-auto object-contain opacity-80" sizes="160px" />
								</Reveal>

								{/* Desktop image - slides in from opposite side */}
								<Reveal variant={even ? "fade-left" : "fade-right"} threshold={0.2} delayMs={0} className={`${even ? "order-1" : "order-2"} relative z-10 hidden h-32 w-full items-center justify-center md:flex md:h-72 md:w-1/2`}>
									<Image alt={item.imgAlt} src={item.imgSrc} width={300} height={300} loading="lazy" className="drop-shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_55%,transparent)] w-auto h-full object-contain" sizes="(min-width:1280px) 380px, 280px" />
								</Reveal>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
