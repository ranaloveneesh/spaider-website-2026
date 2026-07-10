"use client";

import { motion, useReducedMotion } from "motion/react";
import type React from "react";

export type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "zoom";

type BaseRevealProps = {
	variant?: RevealVariant;
	/** Adds an animation delay (ms) */
	delayMs?: number;
	/** IntersectionObserver threshold */
	threshold?: number;
	/** Viewport root margin (CSS margin shorthand) */
	rootMargin?: string;
	/** If true, re-animates when re-entering */
	replay?: boolean;
};

export type RevealProps<T extends React.ElementType = "div"> = BaseRevealProps & {
	as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseRevealProps | "as">;

// ─── Pre-built motion element map - avoids runtime component creation ─────────
const MOTION_ELEMENTS = {
	div: motion.div,
	section: motion.section,
	article: motion.article,
	header: motion.header,
	main: motion.main,
	footer: motion.footer,
	aside: motion.aside,
	nav: motion.nav,
	h1: motion.h1,
	h2: motion.h2,
	h3: motion.h3,
	h4: motion.h4,
	h5: motion.h5,
	h6: motion.h6,
	p: motion.p,
	span: motion.span,
	li: motion.li,
	ul: motion.ul,
	ol: motion.ol,
	figure: motion.figure,
};

// ─── Variant definitions ──────────────────────────────────────────────────────
const EASE = [0.25, 1, 0.5, 1] as const;

const INITIAL = {
	"fade-up": { opacity: 0, y: 16 },
	"fade-down": { opacity: 0, y: -16 },
	"fade-left": { opacity: 0, x: -18 },
	"fade-right": { opacity: 0, x: 18 },
	scale: { opacity: 0, scale: 0.96 },
	zoom: { opacity: 0, y: 10, scale: 0.92, filter: "blur(8px)" },
} as const;

const VISIBLE = {
	"fade-up": { opacity: 1, y: 0 },
	"fade-down": { opacity: 1, y: 0 },
	"fade-left": { opacity: 1, x: 0 },
	"fade-right": { opacity: 1, x: 0 },
	scale: { opacity: 1, scale: 1 },
	zoom: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
} as const;

const DURATIONS = {
	"fade-up": 0.5,
	"fade-down": 0.5,
	"fade-left": 0.55,
	"fade-right": 0.55,
	scale: 0.5,
	zoom: 0.65,
} as const;
// ─────────────────────────────────────────────────────────────────────────────

export default function Reveal<T extends React.ElementType = "div">({ children, className, variant = "fade-up", delayMs, threshold = 0.2, rootMargin = "0px 0px -10% 0px", replay = false, as, style, ...rest }: RevealProps<T>) {
	const shouldReduceMotion = useReducedMotion();

	// Respect prefers-reduced-motion - render immediately, no animation
	if (shouldReduceMotion) {
		const Tag = (as ?? "div") as React.ElementType;
		return (
			<Tag className={className} style={style} {...(rest as any)}>
				{children}
			</Tag>
		);
	}

	const MotionTag = (MOTION_ELEMENTS as Record<string, React.ComponentType<any>>)[as as string] ?? motion.div;

	return (
		<MotionTag
			initial={INITIAL[variant] as any}
			whileInView={VISIBLE[variant] as any}
			viewport={{ once: !replay, amount: threshold, margin: rootMargin }}
			transition={{
				duration: DURATIONS[variant],
				ease: EASE,
				delay: typeof delayMs === "number" ? delayMs / 1000 : 0,
			}}
			className={className}
			style={style}
			{...(rest as any)}
		>
			{children}
		</MotionTag>
	);
}
