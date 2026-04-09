"use client";

import { useEffect, useState } from "react";
import Reveal from "@/app/components/ui/reveal";
import { PatternCard } from "@/app/components/ui/grid-feature-cards";

type Metric = {
	prefix?: string;
	value: number;
	suffix: string;
	title: string;
	copy: string;
};

const METRICS: Metric[] = [
	{
		prefix: "Up to ",
		value: 2,
		suffix: "×",
		title: "Increase in Proposal Throughput",
		copy: "Submit significantly more high-quality, compliant proposals with the same team by automating ~65% of manual effort.",
	},
	{
		prefix: "Up to ",
		value: 50,
		suffix: "%",
		title: "Reduction in Proposal Cycle Time",
		copy: "Compress timelines from RFP release to submission by accelerating research, drafting, and compliance checks.",
	},
	{
		value: 70,
		suffix: "%+",
		title: "Expert Time Reclaimed",
		copy: "Free your experts from tedious tasks to focus on solution design and strategy.",
	},
];

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
		<div className="font-manrope text-4xl font-bold">
			{prefix}
			{display}
			{suffix}
		</div>
	);
};

export default function Metrics() {
	return (
		<section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="mb-6 max-w-4xl font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:text-3xl">
				Measurable Advantage: Accelerate Wins, Scale Ambition
			</Reveal>
			<div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
				{METRICS.map((m, index) => (
					<Reveal
						key={m.title}
						variant="fade-up"
						threshold={0.25}
						delayMs={index * 90}
						className={["rounded-xl border border-white/10 text-center shadow-sm sm:rounded-2xl", "bg-linear-to-b from-black/70 via-black/35 to-black/70", "transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md"].join(" ")}
					>
						<PatternCard className="h-full p-4 sm:p-6 md:p-8">
							<div className="relative">
								<Big prefix={m.prefix} value={m.value} suffix={m.suffix} active />
								<div className="mt-2 font-manrope text-base font-semibold tracking-tight text-foreground sm:mt-3 sm:text-lg lg:text-xl">{m.title}</div>
								<p className="mt-2 text-xs leading-6 text-muted-tertiary font-inter sm:mt-3 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
									{m.copy}
								</p>
							</div>
						</PatternCard>
					</Reveal>
				))}
			</div>
		</section>
	);
}
