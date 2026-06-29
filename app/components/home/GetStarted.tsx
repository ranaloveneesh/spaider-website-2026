"use client";

import { useState } from "react";
import { Target, Database, FlaskConical, Rocket } from "lucide-react";
import Reveal from "../ui/reveal";

type Step = {
	label: string;
	title: string;
	description: string;
	icon: React.ElementType;
};

const STEPS: Step[] = [
	{
		label: "Step 01",
		title: "Define your use case",
		description: "Identify the workflow you want to agentify.",
		icon: Target,
	},
	{
		label: "Step 02",
		title: "Prepare your data",
		description: "We make your private data ready - Vector DB or Knowledge Graph.",
		icon: Database,
	},
	{
		label: "Step 03",
		title: "Prototype",
		description: "We create a working prototype with you actively in the loop.",
		icon: FlaskConical,
	},
	{
		label: "Step 04",
		title: "Deploy",
		description: "We deploy in your secure cloud or on-prem infra as per your needs.",
		icon: Rocket,
	},
];

const GRADIENT = "linear-gradient(90deg, #1d3ce8 0%, #1d63e8 30%, #3b9eff 65%, #60c8ff 100%)";

export default function GetStarted() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const fillPct =
		hoveredIndex === null ? 100 : ((hoveredIndex + 1) / STEPS.length) * 100;

	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
				Get started with SPAIDER
			</h2>

			{/* ── Mobile: vertical timeline (hidden sm+) ── */}
			<div className="mt-8 flex flex-col sm:hidden">
				{STEPS.map((step, index) => {
					const Icon = step.icon;
					const isLast = index === STEPS.length - 1;
					return (
						<Reveal
							key={step.label}
							variant="fade-up"
							threshold={0.2}
							delayMs={index * 80}
						>
							<div className="flex gap-4">
								{/* Icon + connector line */}
								<div className="flex flex-col items-center">
									<div
										className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
										style={{
											background: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
											border: "1px solid color-mix(in srgb, var(--color-accent) 28%, transparent)",
										}}
									>
										<Icon size={14} strokeWidth={1.75} style={{ color: "var(--color-accent)" }} />
									</div>
									{!isLast && (
										<div
											className="mt-2 w-px flex-1"
											style={{
												background: "var(--color-border-secondary)",
												minHeight: "2.5rem",
											}}
										/>
									)}
								</div>

								{/* Content */}
								<div className={`min-w-0 ${isLast ? "pb-0" : "pb-8"}`}>
									<p
										className="text-sm font-medium font-switzer"
										style={{ color: "var(--color-accent)" }}
									>
										{step.label}
									</p>
									<h3 className="mt-1.5 font-outfit text-base font-medium tracking-tight text-foreground">
										{step.title}
									</h3>
									<p className="mt-1.5 text-sm leading-6 text-muted font-switzer">
										{step.description}
									</p>
								</div>
							</div>
						</Reveal>
					);
				})}
			</div>

			{/* ── sm+: horizontal progress + steps ── */}
			<div className="hidden sm:block mt-10">
				{/* Progress line */}
				<div className="relative h-[3px] w-full overflow-visible">
					<div
						className="absolute inset-0 rounded-full"
						style={{ background: "var(--color-border-secondary)" }}
					/>
					<div
						className="absolute inset-y-0 left-0 rounded-full"
						style={{
							width: `${fillPct}%`,
							background: GRADIENT,
							transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
						}}
					/>
					<div
						aria-hidden
						className="absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full"
						style={{
							left: `${fillPct}%`,
							background: "#60c8ff",
							boxShadow:
								"0 0 0 3px rgba(96,200,255,0.22), 0 0 12px rgba(96,200,255,0.75), 0 0 28px rgba(96,200,255,0.38)",
							transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
						}}
					/>
				</div>

				{/* Steps */}
				<div className="-mx-2 mt-8 no-scrollbar overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch] sm:mt-10">
					<ul
						className="flex w-full min-w-[600px]"
						onMouseLeave={() => setHoveredIndex(null)}
					>
						{STEPS.map((step, index) => {
							const Icon = step.icon;
							const isActive = hoveredIndex === null || index <= hoveredIndex;
							return (
								<Reveal
									key={step.label}
									as="li"
									variant="fade-up"
									threshold={0.2}
									delayMs={index * 90}
									className="relative flex-1 cursor-default pr-8 pb-2 last:pr-0"
									style={{ paddingLeft: index === 0 ? 0 : "2rem" }}
									onMouseEnter={() => setHoveredIndex(index)}
								>
									{index > 0 && (
										<div
											aria-hidden
											className="pointer-events-none absolute inset-y-0 left-0 w-px"
											style={{ background: "var(--color-border-secondary)" }}
										/>
									)}
									<Icon
										size={17}
										strokeWidth={1.75}
										style={{
											color: "var(--color-accent)",
											marginBottom: "1rem",
											opacity: isActive ? 1 : 0.35,
											transition: "opacity 0.25s ease",
										}}
									/>
									<p
										className="font-switzer text-sm font-medium"
										style={{
											color: "var(--color-accent)",
											opacity: isActive ? 1 : 0.35,
											transition: "opacity 0.25s ease",
										}}
									>
										{step.label}
									</p>
									<h3
										className="mt-4 font-outfit text-base font-medium tracking-tight text-foreground sm:text-lg"
										style={{
											opacity: isActive ? 1 : 0.35,
											transition: "opacity 0.25s ease",
										}}
									>
										{step.title}
									</h3>
									<p
										className="mt-2 text-sm leading-6 text-muted font-switzer sm:leading-7"
										style={{
											opacity: isActive ? 1 : 0.35,
											transition: "opacity 0.25s ease",
										}}
									>
										{step.description}
									</p>
								</Reveal>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
