"use client";
import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/app/lib/utils";
import Reveal from "@/app/components/ui/reveal";

export const StickyScroll = ({
	content,
	contentClassName,
	title = "What you get with SPAIDER Foundations",
	subtitle = "Capabilities for turning enterprise knowledge into usable, governed AI context.",
}: {
	content: {
		title: string;
		description: React.ReactNode;
		content?: React.ReactNode;
	}[];
	contentClassName?: string;
	title?: string;
	subtitle?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		// Use this component as the scroll container
		container: ref,
		offset: ["start start", "end start"],
	});
	const cardLength = Math.max(content.length, 1);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		// Match breakpoint math from the reference implementation so the
		// sticky preview swaps in sync with the visible section.
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);
		setActiveCard(Math.min(Math.max(closestBreakpointIndex, 0), cardLength - 1));
	});

	return (
		<section className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="font-montserrat text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
				{title}
			</Reveal>

			<Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="mt-3 text-sm leading-7 text-muted sm:text-base">
				{subtitle}
			</Reveal>

			<motion.div
				className="no-scrollbar relative mt-8 flex h-120 w-full flex-col gap-6 overflow-y-auto rounded-md lg:flex-row lg:justify-between lg:gap-8 md:py-8"
				ref={ref}
			>
				<div className="relative flex items-start px-0 sm:px-2">
					<div className="w-full lg:max-w-3xl">
						{content.map((item, index) => (
							<div key={item.title + index} className="mb-20">
								<motion.h2
									initial={{ opacity: 0 }}
									animate={{ opacity: activeCard === index ? 1 : 0.3 }}
									className="text-2xl font-bold text-foreground font-montserrat"
								>
									{item.title}
								</motion.h2>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: activeCard === index ? 1 : 0.3 }}
									className="mt-10 max-w-sm text-lg text-muted"
								>
									{item.description}
								</motion.div>
							</div>
						))}
					</div>
				</div>
				<div
					className={cn(
						"sticky top-0 z-10 h-80 w-full shrink-0 overflow-hidden lg:top-10 lg:h-96 lg:w-md mr-16",
						contentClassName,
					)}
				>
					{content[activeCard]?.content ?? null}
				</div>
			</motion.div>
		</section>
	);
};
