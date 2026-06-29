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

export default function AnimatedHeader() {
	return (
		<motion.header
			className="mb-8 w-full max-w-7xl space-y-3 sm:mb-12 md:mb-16 lg:mb-20"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.h2
				variants={headingVar}
				className="font-outfit text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
			>
				Tech that we follow
			</motion.h2>
			<motion.p
				variants={subVar}
				className="max-w-2xl text-sm leading-7 text-muted lg:text-base lg:leading-7"
			>
				A sovereign, modular AI stack built for aerospace teams that need reliability, security, and full deployment control.
			</motion.p>
		</motion.header>
	);
}
