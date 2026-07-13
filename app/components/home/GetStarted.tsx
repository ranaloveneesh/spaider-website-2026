"use client";

import { Database, FlaskConical, Rocket, Target } from "lucide-react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";
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
		description: "We make your private data AI-ready - structured, searchable, and traceable.",
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

const GRADIENT = "linear-gradient(90deg, #8ff7cf 0%, #59e8f5 48%, #7d95ff 100%)";

function Heading() {
	return (
		<div>
			<h2 className="spx-heading text-foreground">
				From pilot to <span className="spx-grad-text">production</span>
			</h2>
			<p className="spx-lede mt-3">A clear path from first pilot to agents running in your daily workflows.</p>
		</div>
	);
}

/** Mobile: vertical timeline, always static - no pin/scroll-scrub on small screens. */
function MobileTimeline() {
	return (
		<div className="mt-[var(--spx-section-gap)] sm:hidden">
			<Heading />
			<div className="mt-8 flex flex-col">
				{STEPS.map((step, index) => {
					const Icon = step.icon;
					const isLast = index === STEPS.length - 1;
					return (
						<Reveal key={step.label} variant="fade-up" threshold={0.2} delayMs={index * 80}>
							<div className="flex gap-4">
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
									{!isLast && <div className="mt-2 w-px flex-1" style={{ background: "var(--color-border-secondary)", minHeight: "2.5rem" }} />}
								</div>
								<div className={`min-w-0 ${isLast ? "pb-0" : "pb-8"}`}>
									<p className="spx-label text-spx-cyan">{step.label}</p>
									<h3 className="mt-1.5 font-outfit text-base font-medium tracking-tight text-foreground">{step.title}</h3>
									<p className="mt-1.5 text-sm leading-6 text-spx-mute">{step.description}</p>
								</div>
							</div>
						</Reveal>
					);
				})}
			</div>
		</div>
	);
}

function ProgressBar({ fillPct, dotLeftPct }: { fillPct: number; dotLeftPct: number }) {
	return (
		<div className="relative h-[3px] w-full overflow-visible">
			<div className="absolute inset-0 rounded-full" style={{ background: "var(--color-border-secondary)" }} />
			<div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${fillPct}%`, background: GRADIENT, transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }} />
			<div
				aria-hidden
				className="absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full"
				style={{
					left: `${dotLeftPct}%`,
					background: "#60c8ff",
					boxShadow: "0 0 0 3px rgba(96,200,255,0.22), 0 0 12px rgba(96,200,255,0.75), 0 0 28px rgba(96,200,255,0.38)",
					transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
				}}
			/>
		</div>
	);
}

function StepCard({ step, isActive }: { step: Step; isActive: boolean }) {
	const Icon = step.icon;
	return (
		<>
			<Icon size={17} strokeWidth={1.75} style={{ color: "var(--color-accent)", marginBottom: "1rem", opacity: isActive ? 1 : 0.35, transition: "opacity 0.25s ease" }} />
			<p className="spx-label text-spx-cyan" style={{ opacity: isActive ? 1 : 0.35, transition: "opacity 0.25s ease" }}>
				{step.label}
			</p>
			<h3 className="mt-4 font-outfit text-base font-medium tracking-tight text-foreground sm:text-lg" style={{ opacity: isActive ? 1 : 0.35, transition: "opacity 0.25s ease" }}>
				{step.title}
			</h3>
			<p className="mt-2 text-sm leading-6 text-spx-mute sm:leading-7" style={{ opacity: isActive ? 1 : 0.35, transition: "opacity 0.25s ease" }}>
				{step.description}
			</p>
		</>
	);
}

/** Desktop fallback for prefers-reduced-motion: all steps shown active, no pin/scroll-scrub. */
function StaticSteps() {
	return (
		<section className="mt-[var(--spx-section-gap)] hidden w-full min-w-0 sm:block">
			<Heading />
			<div className="mt-10">
				<ProgressBar fillPct={100} dotLeftPct={100} />
				<div className="-mx-2 mt-8 no-scrollbar overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch] sm:mt-10">
					<ul className="flex w-full min-w-[600px]">
						{STEPS.map((step, index) => (
							<Reveal key={step.label} as="li" variant="fade-up" threshold={0.2} delayMs={index * 90} className="relative flex-1 pr-8 pb-2 last:pr-0" style={{ paddingLeft: index === 0 ? 0 : "2rem" }}>
								{index > 0 && <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-px" style={{ background: "var(--color-border-secondary)" }} />}
								<StepCard step={step} isActive />
							</Reveal>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

/** Desktop: pinned + scroll-scrubbed, same mechanic as the About page's Six Gates section. */
function PinnedSteps() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);

	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

	useMotionValueEvent(scrollYProgress, "change", (raw) => {
		const p = Math.max(0, Math.min(1, raw));
		const i = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
		setActive((prev) => (prev === i ? prev : i));
	});

	const fillPct = ((active + 1) / STEPS.length) * 100;

	return (
		<section ref={containerRef} className="relative left-1/2 right-1/2 -mx-[50vw] mt-[var(--spx-section-gap)] hidden w-screen border-t border-b border-spx-rule bg-spx-void-2 sm:block" style={{ height: "320vh" }}>
			<div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden" style={{ paddingInline: "var(--spx-gutter)" }}>
				<Heading />
				<div className="mt-10">
					<ProgressBar fillPct={fillPct} dotLeftPct={fillPct} />
					<ul className="mt-8 flex w-full sm:mt-10">
						{STEPS.map((step, index) => (
							<li key={step.label} className="relative flex-1 pr-8 pb-2 last:pr-0" style={{ paddingLeft: index === 0 ? 0 : "2rem" }}>
								{index > 0 && <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-px" style={{ background: "var(--color-border-secondary)" }} />}
								<StepCard step={step} isActive={index <= active} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default function GetStarted() {
	const shouldReduceMotion = useReducedMotion();
	return (
		<>
			<MobileTimeline />
			{shouldReduceMotion ? <StaticSteps /> : <PinnedSteps />}
		</>
	);
}
