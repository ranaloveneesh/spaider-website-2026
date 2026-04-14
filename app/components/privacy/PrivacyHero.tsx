"use client";
import { motion } from "motion/react";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const titleVar = {
	hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.85, ease: EASE_EXPO },
	},
};

const labelVar = {
	hidden: { opacity: 0, y: 8 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: EASE_EXPO },
	},
};

const bodyVar = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE_EXPO },
	},
};

export default function PrivacyHero() {
	return (
		<motion.header
			className="space-y-4 sm:space-y-5"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.h2
				variants={titleVar}
				className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
			>
				Privacy Policy
			</motion.h2>
			<motion.p
				variants={labelVar}
				className="font-montserrat text-[11px] font-medium uppercase tracking-[0.08em] text-muted/60"
			>
				Last updated: 2 April 2026
			</motion.p>
			<motion.p
				variants={bodyVar}
				className="max-w-[70ch] text-base leading-7 text-muted/80 sm:leading-8"
			>
				This policy describes how SPAIDER Space S.à r.l. (&quot;we&quot;, &quot;us&quot;) processes
				personal data when you visit{" "}
				<span className="text-foreground">spaiderspace.com</span> or contact us through the website.
			</motion.p>
		</motion.header>
	);
}
