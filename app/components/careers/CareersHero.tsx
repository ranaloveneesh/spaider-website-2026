"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
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

export default function CareersHero() {
	return (
		<motion.header className="w-full border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10" variants={container} initial="hidden" animate="show">
			<motion.h1 variants={headingVar} className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
				We&apos;re solving AI for aerospace teams,
				<br />
				<span className="spx-grad-text">once and for all.</span>
			</motion.h1>

			<motion.div variants={subVar} className="mt-7">
				<Button asChild variant="line">
					<Link href="#open-roles">JOIN US</Link>
				</Button>
			</motion.div>
		</motion.header>
	);
}
