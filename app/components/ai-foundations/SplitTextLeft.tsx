"use client";

import Reveal from "@/app/components/ui/reveal";

type StepItem = {
	title: string;
	description: string;
};

const STEPS: StepItem[] = [
	{
		title: "Ingest",
		description: "Ingest your local files and cloud data into knowledge graphs and vector databases",
	},
	{
		title: "Set up",
		description: "Set up your agent by defining instructions, selecting trusted web sources, providing credentials and APIs, and choosing your model",
	},
	{
		title: "Start",
		description: "Finally start the conversation to turn your content into governed, searchable context that powers accurate answers and workflows.",
	},
];

function Dot() {
	return (
		<span className="relative inline-flex h-4 w-4 items-center justify-center">
			<span className="absolute inline-block h-4.5 w-4.5 rounded-full border border-border/50 bg-white/10 [box-shadow:0_0_0_6px_color-mix(in_srgb,var(--color-accent)_18%,transparent),0_0_22px_color-mix(in_srgb,var(--color-accent)_55%,transparent)]" />
			<span className="neon-dot-accent inline-block h-1.5 w-1.5 rounded-full" />
		</span>
	);
}

export default function SplitTextLeft({ kicker: _kicker, title }: { kicker?: string; title: string }) {
	return (
		<section className="mx-auto mt-12 w-full min-w-0 max-w-420 sm:mt-16 md:mt-20 lg:mt-24">
			<div className="flex items-end justify-between gap-4 sm:gap-6">
				<Reveal as="h2" variant="fade-up" threshold={0.35} className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
					{title}
				</Reveal>
			</div>
			<div className="relative mt-6 sm:mt-8 md:mt-10">
				<div aria-hidden="true" className="fade-edges-x neon-line-accent pointer-events-none absolute left-0 right-0 top-[7px] h-0.5" />

				<div className="-mx-2 no-scrollbar overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch]">
					<ul className="flex w-full gap-6 pr-2 sm:gap-10 md:gap-12">
						{STEPS.map((step, index) => {
							return (
								<Reveal key={step.title} as="li" variant="fade-right" threshold={0.25} delayMs={index * 120} className="min-w-[200px] flex-1 sm:min-w-[220px]">
									<div className="relative flex h-4 items-center">
										<Dot />
									</div>

									<div className="mt-2 py-2 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)] sm:py-3">
										<h4 className="font-inter text-base font-medium tracking-tight text-foreground sm:text-lg">{step.title}</h4>
										<p className="mt-1.5 text-xs leading-6 text-muted-foreground font-inter sm:mt-2 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{step.description}</p>
									</div>
								</Reveal>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
