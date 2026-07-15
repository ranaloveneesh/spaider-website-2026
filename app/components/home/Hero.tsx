"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "../ui/button";

// three.js bundle stays out of the critical path; the globe fades in when ready
const HeroGlobe = dynamic(() => import("./HeroGlobe"), { ssr: false });

// ─── Animation constants ──────────────────────────────────────────────────────
// Expo-out easing - Emil Kowalski's preferred curve for cinematic UI
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/** Outer content container: staggers eyebrow -> h1 block -> foot -> stats */
const heroContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.1,
		},
	},
};

/** h1 wrapper: staggers the three headline lines */
const headlineContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.09 },
	},
};

/** Each headline line: blur + fade + lift - feels like a sensor acquiring lock */
const headlineLine = {
	hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.85, ease: EASE_EXPO },
	},
};

/** Eyebrow, foot row, stats: clean fade + lift, no blur */
const heroItem = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: EASE_EXPO },
	},
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
	return (
		<section
			className="relative flex min-h-screen flex-col overflow-hidden bg-spx-void"
			style={{
				marginTop: "-7rem",
				marginLeft: "-1rem",
				marginRight: "-1rem",
				width: "calc(100% + 2rem)",
			}}
		>
			{/* Particle globe + dust field (source's #gl three.js scene) */}
			<HeroGlobe />

			{/* Source's .hero-rules: 5 faint vertical hairlines across the hero */}
			<div className="pointer-events-none absolute inset-0 z-[1] grid grid-cols-5" aria-hidden>
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: fixed-length static decoration, never reordered
					<i key={i} className={i === 0 ? "" : "border-l border-[rgba(185,192,205,0.055)]"} />
				))}
			</div>

			{/* ── Hero content - bottom-anchored, left-aligned like source ── */}
			<motion.div className="relative z-10 flex flex-1 flex-col justify-end pb-[10vh] pt-44 text-left" style={{ paddingInline: "var(--spx-gutter)" }} variants={heroContainer} initial="hidden" animate="show">
				{/* Headline - three lines stagger in with blur-to-sharp. Source's
				    .hero-title, scaled down a touch. */}
				<motion.h1 variants={headlineContainer} className="font-outfit text-[clamp(2.6rem,8.5vw,8rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white">
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						Sovereign AI
					</motion.span>
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						operating layer
					</motion.span>
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						for <span className="spx-grad-text">aerospace</span>
					</motion.span>
				</motion.h1>

				{/* Foot row: sub-headline left, CTAs right */}
				<motion.div variants={heroItem} className="mt-[5vh] flex flex-wrap items-end justify-between gap-10">
					<p className="spx-hero-sub">SPAIDER helps aerospace teams search internal knowledge, manage long-horizon projects, and work with domain-specific AI assistants across proposal, engineering, and operations workflows.</p>
					<div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
						<Button asChild variant="solid" className="w-full justify-center sm:w-auto">
							<Link href="/request-trial">
								Request a Trial
								<ArrowRight aria-hidden="true" className="inline-block size-[1em] transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</Button>
						<Button asChild variant="line" className="w-full justify-center sm:w-auto">
							<Link href="/ai-foundations">Explore AI Foundations</Link>
						</Button>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
