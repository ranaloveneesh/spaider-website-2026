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
		<motion.section className="relative flex flex-col items-center justify-start pt-8 pb-12 sm:pt-10 sm:pb-16 lg:min-h-screen lg:pt-12 lg:pb-0" variants={V.container} initial={reduced ? false : "hidden"} animate="show">
			<motion.span variants={V.chip} className="spx-eyebrow">
				RFP & Proposal Assistant
			</motion.span>

			<motion.h1 variants={V.heading} className="mt-4 mb-4 max-w-3xl px-4 text-center font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground sm:mb-6">
				Meet <span className="spx-grad-text">SAGAN</span>
			</motion.h1>

			<motion.p variants={V.body} className="spx-lede px-4 text-center">
				SAGAN helps aerospace teams qualify opportunities, understand requirements, structure proposals, create work packages, and accelerate compliant RFP responses.
			</motion.p>

			<motion.div variants={V.cta} className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
				<Button asChild variant="solid">
					<Link href="/request-trial">Request a Trial</Link>
				</Button>
			</motion.div>

			{/* Dashboard - cinematic entrance, glow breathes on loop */}
			<motion.div variants={V.dashboard} className="relative w-full max-w-5xl mt-10 sm:mt-16">
				<motion.div className="pointer-events-none absolute left-1/2 z-0 w-[104%]" style={{ top: "-26%", transform: "translateX(-50%)" }} animate={reduced ? {} : { opacity: [0.85, 1, 0.85] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true">
					<Image src="/sagan/hero-glows.png" alt="" width={1078} height={800} className="h-auto w-full filter-[hue-rotate(205deg)_saturate(260%)_brightness(1.25)]" priority />
				</motion.div>
				<div className="relative z-10">
					{/* Autoplay is muted+inline (required for mobile autoplay); paused under reduced motion */}
					<video src="/sagan/sagan_session.mp4" poster="/sagan/hero-dashboard.png" autoPlay={!reduced} muted loop playsInline aria-label="SAGAN session recording showing a proposal being assembled" className="h-auto w-full rounded-xs border border-spx-rule-2 shadow-2xl" />
				</div>
			</motion.div>
		</motion.section>
	);
}
