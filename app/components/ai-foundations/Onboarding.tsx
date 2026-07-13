"use client";

import Image from "next/image";
import Reveal from "../ui/reveal";

const steps = [
	{
		title: "Connect your sources",
		desc: "Add the documents, tools, and approved data sources your team already uses.",
		imgSrc: "/abstract/1.png",
		imgAlt: "Connect your sources",
	},
	{
		title: "Configure the workspace",
		desc: "Set permissions, source rules, instructions, and the workflows you want the system to support.",
		imgSrc: "/abstract/2.png",
		imgAlt: "Configure the workspace",
	},
	{
		title: "Start working with your knowledge",
		desc: "Search, query, and interact with your data through a governed AI interface.",
		imgSrc: "/abstract/3.png",
		imgAlt: "Start working with your knowledge",
	},
] as const;

export default function Onboarding() {
	return (
		<section id="how-we-work" className="how-we-work-section relative mt-[var(--spx-section-gap)] w-full text-foreground">
			<div>
				<div className="flex flex-col items-start justify-between">
					<Reveal as="h2" variant="fade-up" threshold={0.35} className="spx-heading text-foreground">
						Get started in <span className="spx-grad-text">3 steps.</span>
					</Reveal>

					<Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="spx-lede mt-3">
						A simple path from source setup to a working knowledge workspace.
					</Reveal>
				</div>

				<div className="relative mt-10 overflow-hidden px-0 md:px-8 lg:px-16 max-w-5xl mx-auto">
					<div className="timeline-wrapper hidden md:block">
						<div className="timeline-line" />
					</div>

					<div className="space-y-0">
						{steps.map((item, index) => {
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
			</div>
		</section>
	);
}
