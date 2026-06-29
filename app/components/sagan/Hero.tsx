"use client";

import { motion, useReducedMotion } from "motion/react";
import CeramicButton from "../ui/button";

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
		<motion.section
			className="relative flex flex-col items-center justify-start pt-12 pb-12 sm:pt-16 sm:pb-16 lg:min-h-screen lg:pt-24 lg:pb-0"
			variants={V.container}
			initial={reduced ? false : "hidden"}
			animate="show"
		>
			<motion.span variants={V.chip} className="glass-btn text-left">
				RFP Manager
			</motion.span>

			<motion.h1
				variants={V.heading}
				className="mt-2 mb-4 sm:mb-6 font-outfit text-4xl font-medium text-center max-w-3xl px-4 leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl"
				style={{
					background:
						"linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					backgroundClip: "text",
				}}
			>
				Meet SAGAN
			</motion.h1>

			<motion.p
				variants={V.body}
				className="max-w-lg text-center text-xs leading-6 text-muted px-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-7"
			>
				Your proposal and RFP co-pilot for faster response time. Draft winning
				bids using your own past materials, templates, and source-backed
				institutional knowledge.
			</motion.p>

			<motion.div
				variants={V.cta}
				className="flex flex-col items-stretch gap-3 mt-4 sm:flex-row sm:items-center sm:pt-2"
			>
				<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
					<CeramicButton
						href="/request-demo"
						color="rgba(255, 255, 255, 0.06)"
						ringColor="rgba(255, 255, 255, 0.22)"
						textColor="var(--color-white)"
						borderRadius={9999}
						padding="8px 16px"
						centered
					>
						REQUEST A DEMO
					</CeramicButton>
				</div>
			</motion.div>

			{/* Dashboard - cinematic entrance, glow breathes on loop */}
			<motion.div
				variants={V.dashboard}
				className="relative w-full max-w-5xl mt-10 sm:mt-16"
			>
				<motion.div
					className="absolute left-1/2 w-[90%] pointer-events-none z-0"
					style={{ top: "-23%", transform: "translateX(-50%)" }}
					animate={reduced ? {} : { opacity: [0.75, 1, 0.75] }}
					transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
					aria-hidden="true"
				>
					<img
						src="https://i.postimg.cc/Ss6yShGy/glows.png"
						alt=""
						className="w-full h-auto filter-[hue-rotate(205deg)_saturate(220%)]"
						loading="eager"
					/>
				</motion.div>
				<div className="relative z-10">
					<img
						src="https://i.postimg.cc/SKcdVTr1/Dashboard2.png"
						alt="Dashboard preview showing analytics and metrics interface"
						className="w-full h-auto rounded-lg shadow-2xl"
						loading="eager"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
}
