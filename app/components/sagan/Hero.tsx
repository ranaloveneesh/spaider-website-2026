"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

// Emil Kowalski–style expo-out: fast start, hard stop
const EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Variant map - container stagger drives sequencing,
 * each child owns its own duration.
 */
const V = {
	container: {
		hidden: {},
		show: { transition: { staggerChildren: 0.09 } },
	},
	chip: {
		hidden: { opacity: 0, y: 10, scale: 0.95 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.38, ease: EXPO },
		},
	},
	heading: {
		hidden: { opacity: 0, y: 18 },
		show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: EXPO } },
	},
	body: {
		hidden: { opacity: 0, y: 12 },
		show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EXPO } },
	},
	cta: {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EXPO } },
	},
	/** Cinematic: blur + scale collapse as dashboard lands */
	dashboard: {
		hidden: { opacity: 0, y: 44, scale: 0.96, filter: "blur(14px)" },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			filter: "blur(0px)",
			transition: { duration: 1.0, ease: EXPO },
		},
	},
} as const;

export default function SaganHero() {
	const reduced = useReducedMotion();

	return (
		<motion.section className="relative flex flex-col items-center justify-start pt-12 pb-12 sm:pt-16 sm:pb-16 lg:min-h-screen lg:pt-24 lg:pb-0" variants={V.container} initial={reduced ? false : "hidden"} animate="show">
			<motion.span variants={V.chip} className="rounded-xs border border-spx-rule-2 px-3.5 py-2 font-geist-mono text-[0.7rem] uppercase tracking-[0.16em] text-spx-cyan">
				RFP Manager
			</motion.span>

			<motion.h1 variants={V.heading} className="mt-4 mb-4 max-w-3xl px-4 text-center font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground sm:mb-6">
				Meet <span className="spx-grad-text">SAGAN</span>
			</motion.h1>

			<motion.p variants={V.body} className="spx-lede px-4 text-center">
				Your proposal and RFP co-pilot for faster response time. Draft winning bids using your own past materials, templates, and source-backed institutional knowledge.
			</motion.p>

			<motion.div variants={V.cta} className="flex flex-col items-stretch gap-3 mt-4 sm:flex-row sm:items-center sm:pt-2">
				<Button asChild variant="solid">
					<Link href="/request-demo">
						Request a Demo
						<span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
							→
						</span>
					</Link>
				</Button>
			</motion.div>

			{/* Dashboard - cinematic entrance, glow breathes on loop */}
			<motion.div variants={V.dashboard} className="relative w-full max-w-5xl mt-10 sm:mt-16">
				<motion.div className="absolute left-1/2 w-[90%] pointer-events-none z-0" style={{ top: "-23%", transform: "translateX(-50%)" }} animate={reduced ? {} : { opacity: [0.75, 1, 0.75] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true">
					<Image src="/sagan/hero-glows.png" alt="" width={1078} height={800} className="w-full h-auto filter-[hue-rotate(205deg)_saturate(220%)]" priority />
				</motion.div>
				<div className="relative z-10">
					<Image src="/sagan/hero-dashboard.png" alt="Dashboard preview showing analytics and metrics interface" width={1106} height={800} className="w-full h-auto rounded-xs border border-spx-rule-2 shadow-2xl" priority />
				</div>
			</motion.div>
		</motion.section>
	);
}
