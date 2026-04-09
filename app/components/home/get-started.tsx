"use client";

import Reveal from "../ui/reveal";

type ChangelogItem = {
	title: string;
	description: string;
};

const ITEMS: ChangelogItem[] = [
	{
		title: "Define your use case",
		description: "Identify the workflow you want to agentify.",
	},
	{
		title: "Prepare your data",
		description: "We make your private data ready e.g. Vector DB/ Knowledge Graph.",
	},
	{
		title: "Prototype",
		description: "We create a working prototype with you in the loop actively.",
	},
	{
		title: "Deploy",
		description: "We deploy in your secure cloud or on-prem infra as per your needs.",
	},
];

function Dot() {
	return (
		<span className="relative inline-flex h-4 w-4 items-center justify-center">
			<span className={["absolute inline-block h-4.5 w-4.5 rounded-full border border-border/70 bg-white/15"].join(" ")} />
			<span className={["inline-block h-1.5 w-1.5 rounded-full bg-accent"].join(" ")} />
		</span>
	);
}

export default function GetStarted() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
			<div className="flex items-end justify-between gap-4 sm:gap-6">
				<h2 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Get started with SPAIDER</h2>
			</div>

			<div className="relative mt-6 sm:mt-8 md:mt-10">
				{/* timeline line - vertically centered on the dot (dot is h-4 = 16px, center = 8px) */}
				<div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[7px] h-0.5 bg-border/70" />

				<div className="-mx-2 no-scrollbar overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch]">
					<ul className="flex w-full gap-6 pr-2 sm:gap-10 md:gap-12">
						{ITEMS.map((item, index) => {
							return (
								<Reveal key={`${item.title}`} as="li" variant="fade-right" threshold={0.25} delayMs={index * 120} className="min-w-[200px] flex-1 sm:min-w-[220px]">
									{/* Dot centered on the line */}
									<div className="relative flex h-4 items-center">
										<Dot />
									</div>

									<div className="mt-2 py-2 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)] sm:py-3">
										<h3 className="font-inter text-base font-medium tracking-tight text-foreground sm:text-lg">{item.title}</h3>
										<p className="mt-1.5 line-clamp-2 text-xs leading-6 text-muted-foreground font-inter sm:mt-2 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{item.description}</p>
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
