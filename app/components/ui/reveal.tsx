"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

export type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "zoom";

type BaseRevealProps = {
	variant?: RevealVariant;
	/** Adds an animation delay when visible (ms) */
	delayMs?: number;
	/** IntersectionObserver threshold */
	threshold?: number;
	/** Start animation before the element fully enters */
	rootMargin?: string;
	/** If true, re-animates when re-entering */
	replay?: boolean;
};

export type RevealProps<T extends React.ElementType = "div"> = BaseRevealProps & {
	as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseRevealProps | "as">;

export default function Reveal<T extends React.ElementType = "div">({ children, className, variant = "fade-up", delayMs, threshold = 0.2, rootMargin = "0px 0px -10% 0px", replay = false, as, style, ...rest }: RevealProps<T>) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	const observerOptions = useMemo(() => ({ threshold, rootMargin }), [threshold, rootMargin]);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const obs = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!entry) return;

			if (entry.isIntersecting) {
				setVisible(true);
				if (!replay) obs.disconnect();
			} else if (replay) {
				setVisible(false);
			}
		}, observerOptions);

		obs.observe(el);
		return () => obs.disconnect();
	}, [observerOptions, replay]);

	const Tag = (as ?? "div") as React.ElementType;

	return (
		<Tag
			ref={ref as unknown as React.RefObject<any>}
			className={cn("reveal", `reveal--${variant}`, visible && "is-visible", className)}
			style={{
				...(style ?? {}),
				...(visible && typeof delayMs === "number" ? ({ animationDelay: `${delayMs}ms` } as React.CSSProperties) : null),
			}}
			{...rest}
		>
			{children}
		</Tag>
	);
}
