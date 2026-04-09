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
		imgSrc: "/foundations/inforag1.png",
		imgAlt: "Assign Oversight",
	},
	{
		title: "Configure Core Intelligence",
		desc: "Set access, tone, creativity/accuracy balance, and guardrails for safe autonomy.",
		imgSrc: "/foundations/inforag2.png",
		imgAlt: "Configure Core Intelligence",
	},
	{
		title: "Integrate Knowledge Base",
		desc: "Connect repositories and tools so SAGAN can draft with citations and up-to-date context.",
		imgSrc: "/foundations/inforag3.png",
		imgAlt: "Integrate Knowledge Base",
	},
	{
		title: "Orchestrate Proposal Workflow",
		desc: "Standardize intake, drafting, compliance checks, review cycles, and submission-ready exports.",
		imgSrc: "/foundations/inforag3.png",
		imgAlt: "Orchestrate Proposal Workflow",
	},
];

export default function OnboardingTimeline() {
	return (
		<section id="how-we-work" className="how-we-work-section relative w-full text-foreground">
			<div className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20">
				<div className="flex items-end justify-between gap-4 sm:gap-6">
					<Reveal as="h2" variant="fade-up" threshold={0.35} className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
						Seamless Onboarding
					</Reveal>
				</div>

				<div className="relative mt-10 overflow-hidden px-40 sm:mt-12 md:mt-14">
					<div className="timeline-wrapper hidden md:block">
						<div className="timeline-line" />
					</div>

					<div className="space-y-0">
						{STEPS.map((item, index) => {
							const even = index % 2 === 1;
							return (
								<div key={item.title} className="relative flex flex-col items-center justify-between md:flex-row">
									<div className="timeline-dot absolute left-1/2 hidden -translate-x-1/2 md:block" style={{ top: "1.25rem" }} />

									<div className={`${even ? "order-2" : "order-1"} flex w-full flex-col items-start gap-2 md:w-2/5`}>
										<h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
											{item.title}
										</h3>
										<p className="text-left text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
											{item.desc}
										</p>
									</div>

									<div className={`${even ? "order-1" : "order-2"} relative z-10 hidden h-32 w-full items-center justify-center md:flex md:h-72 md:w-1/2`}>
										<Image
											alt={item.imgAlt}
											src={item.imgSrc}
											width={300}
											height={300}
											loading="lazy"
											className="drop-shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_55%,transparent)] h-full w-auto object-contain"
											sizes="(min-width:1280px) 380px, 280px"
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
