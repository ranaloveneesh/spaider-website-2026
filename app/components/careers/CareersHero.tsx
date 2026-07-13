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

const fadeVar = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE_EXPO },
	},
};

export default function CareersHero() {
	return (
		<motion.header className="relative isolate flex min-h-[46vh] flex-col items-center justify-center py-16 text-center md:min-h-[54vh]" variants={container} initial="hidden" animate="show">
			{/* ── Content ── */}
			<div className="relative z-10 flex flex-col items-center gap-6">
				<motion.h1 variants={headingVar} className="mx-auto max-w-[18ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
					We&apos;re solving <span className="spx-grad-text">AI solution</span> for <span className="spx-grad-text">Aerospace Teams</span>
					<br />
					once and for all.
				</motion.h1>

				<motion.div variants={fadeVar} className="pt-1">
					<Button asChild variant="line">
						<Link href="#open-roles">JOIN US</Link>
					</Button>
				</motion.div>
			</div>
		</motion.header>
	);
}
