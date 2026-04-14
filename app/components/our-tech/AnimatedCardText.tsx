"use client";
import { motion } from "motion/react";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// Outer panel: fades in, then triggers stagger on children
const panelVar = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: 0.35, ease: "easeOut" },
	},
};

// Inner content wrapper: owns the stagger timing
const contentVar = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08, delayChildren: 0.12 },
	},
};

const itemVar = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
};

const dividerVar = {
	hidden: { scaleX: 0 },
	show: { scaleX: 1, transition: { duration: 0.5, ease: EASE_EXPO } },
};

type Props = {
	title: string;
	subtitle: string;
	body: string;
};

export default function AnimatedCardText({ title, subtitle, body }: Props) {
	return (
		<motion.div
			className="relative min-w-0 overflow-hidden rounded-lg border border-border/70 bg-panel sm:rounded-xl"
			variants={panelVar}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="absolute inset-0 bg-linear-to-br from-background/55 via-panel to-background/70" />
			<motion.div className="relative p-4 sm:p-5 md:p-6" variants={contentVar}>
				<motion.h3
					variants={itemVar}
					className="font-outfit text-xl font-medium tracking-tight text-foreground sm:text-2xl md:text-3xl"
				>
					{title}
				</motion.h3>
				<motion.p
					variants={itemVar}
					className="mt-2 font-montserrat text-[11px] leading-5 tracking-[0.12em] text-muted sm:text-xs"
				>
					{subtitle.toUpperCase()}
				</motion.p>
				<motion.div
					variants={dividerVar}
					className="mt-3 h-px w-20 origin-left bg-border-card sm:w-32 md:w-48"
				/>
				<motion.p
					variants={itemVar}
					className="mt-3 text-sm leading-7 text-foreground sm:leading-7 lg:text-base lg:leading-7"
				>
					{body}
				</motion.p>
			</motion.div>
		</motion.div>
	);
}
