"use client";

import { useEffect, useState } from "react";
import Reveal from "@/app/components/ui/reveal";

type Metric = {
	prefix?: string;
	value: number;
	suffix: string;
	title: string;
	description: string;
};

const METRICS: Metric[] = [
	{
		prefix: "Up to ",
		value: 2,
		suffix: "×",
		title: "Increase in Proposal Throughput",
		description:
			"Submit significantly more high-quality, compliant proposals with the same team by automating ~65% of manual effort.",
	},
	{
		prefix: "Up to ",
		value: 50,
		suffix: "%",
		title: "Reduction in Proposal Cycle Time",
		description: "Compress timelines from RFP release to submission by accelerating research, drafting, and compliance checks.",
	},
	{
		value: 70,
		suffix: "%+",
		title: "Expert Time Reclaimed",
		description: "Free your experts from tedious tasks to focus on solution design and strategy.",
	},
];

const spanByIndex = (_i: number) => "lg:col-span-4";

function usePrefersReducedMotion() {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
		if (!mq) return;
		const update = () => setReduced(!!mq.matches);
		update();

		// Safari fallback
		if (mq.addEventListener) mq.addEventListener("change", update);
		else mq.addListener(update);

		return () => {
			if (mq.removeEventListener) mq.removeEventListener("change", update);
			else mq.removeListener(update);
		};
	}, []);

	return reduced;
}

const Big: React.FC<{
	prefix?: string;
	value: number;
	suffix: string;
	active?: boolean;
}> = ({ prefix, value, suffix, active = false }) => {
	const reducedMotion = usePrefersReducedMotion();
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!active) return;
		if (reducedMotion) {
			setDisplay(value);
			return;
		}

		const durationMs = 950;
		const start = performance.now();

		let raf = 0;
		const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

		const tick = (now: number) => {
			const elapsed = now - start;
			const t = Math.min(1, elapsed / durationMs);
			const eased = easeOutCubic(t);
			const current = Math.round(value * eased);
			setDisplay(current);

			if (t < 1) raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [active, reducedMotion, value]);

	return (
		<div className="font-montserrat text-4xl font-semibold">
			{prefix}
			{display}
			{suffix}
		</div>
	);
};

export default function Metrics() {
	return (
		<section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="mb-6 max-w-4xl font-montserrat text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:text-3xl">
				Measurable Advantage: Accelerate Wins, Scale Ambition
			</Reveal>
			<div className="mt-6 grid grid-cols-1 items-stretch gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 md:mt-10 md:gap-6 lg:grid-cols-12 lg:gap-7">
				{METRICS.map((m, index) => (
					<Reveal
						key={m.title}
						variant="fade-up"
						threshold={0.25}
						delayMs={index * 90}
						className={[
							"group relative min-w-0 overflow-hidden rounded-xl border border-border bg-panel/40 sm:rounded-2xl",
							"h-full p-4 shadow-md transition-all duration-200 ease-out sm:p-5 md:p-6 lg:p-7",
							"hover:border-[rgba(78,167,252,0.6)] hover:bg-panel/55 hover:shadow-lg hover:-translate-y-[2px]",
							"before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:content-['']",
							"before:z-0 before:bg-[radial-gradient(650px_260px_at_10%_0%,rgba(78,167,252,0.32),transparent_60%)]",
							"before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
							"after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:content-[''] after:z-0",
							"after:bg-[linear-gradient(120deg,transparent_0%,rgba(78,167,252,0.26)_40%,transparent_70%)]",
							"after:opacity-0 after:-translate-x-10 group-hover:after:opacity-100 group-hover:after:translate-x-10 after:transition-all after:duration-400",
							spanByIndex(index),
						].join(" ")}
					>
						<div className="relative z-10 flex h-full flex-col items-center justify-center">
							<Big prefix={m.prefix} value={m.value} suffix={m.suffix} active />
							<div className="mt-2 font-montserrat text-base font-semibold tracking-tight text-foreground sm:mt-3 sm:text-lg lg:text-xl">{m.title}</div>
							<span className="mt-3 text-xs text-center leading-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-7 text-muted">{m.description}</span>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
