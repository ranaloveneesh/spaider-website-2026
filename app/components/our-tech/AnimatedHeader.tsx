"use client";
import { motion } from "motion/react";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const headingVar = {
	hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.85, ease: EASE_EXPO },
	},
};

const subVar = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_EXPO } },
};

/** Page hero - port of source's Technology `pageHero` (same treatment as the about page hero). */
export default function AnimatedHeader() {
	return (
		<motion.header className="w-full border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10" variants={container} initial="hidden" animate="show">
			<motion.span variants={subVar} className="spx-eyebrow mb-7">Technology</motion.span>
			<motion.h1 variants={headingVar} className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
				The intelligence architecture
				<br />
				<span className="spx-grad-text">for space systems.</span>
			</motion.h1>
			<motion.p variants={subVar} className="spx-lede mt-7">
				SPAIDER connects aerospace knowledge, ontologies, domain models, expert agents, and independent verification mechanisms in one technical architecture.
			</motion.p>
		</motion.header>
	);
}
