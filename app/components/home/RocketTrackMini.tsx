"use client";

import { useEffect, useRef, useState } from "react";

export function RocketTrackMini() {
	const wrap = useRef<HTMLDivElement | null>(null);
	const pathRef = useRef<SVGPathElement | null>(null);
	const [t, setT] = useState(0);

	useEffect(() => {
		const el = wrap.current;
		if (!el) return;
		let ticking = false;
		const calc = () => {
			if (!el) return;
			const r = el.getBoundingClientRect();
			const vh = window.innerHeight || 1;
			const start = vh * 0.8,
				end = vh * 0.3;
			const k = Math.min(1, Math.max(0, (start - r.top) / Math.max(1, start - end)));
			setT(k);
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				calc();
				ticking = false;
			});
		};
		calc();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	const ANG = 50;
	const size = 44;
	const [rocket, setRocket] = useState({ x: 0, y: 0, r: ANG, s: size });

	useEffect(() => {
		const p = pathRef.current;
		if (!p) return;

		const L = p.getTotalLength();
		const d = L * t;
		const pt = p.getPointAtLength(d);
		const a = p.getPointAtLength(Math.min(L, d + 6));
		const rot = (Math.atan2(a.y - pt.y, a.x - pt.x) * 180) / Math.PI + ANG;

		setRocket({ x: pt.x - size / 2, y: pt.y - size / 2, r: rot, s: size });
	}, [t]);

	return (
		<div ref={wrap} className="relative h-[130px] w-full text-muted-tertiary">
			<svg viewBox="0 0 560 160" className="absolute inset-0 h-full w-full" role="img" aria-label="Deployment path illustration">
				<title>Deployment path illustration</title>
				<path ref={pathRef} d="M60,80 C200,70 360,70 500,80" fill="none" stroke="currentColor" strokeWidth={6} strokeDasharray="12 16" strokeLinecap="round" opacity={0.95} />
				<g transform={`translate(${rocket.x},${rocket.y}) rotate(${rocket.r},${rocket.s / 2},${rocket.s / 2})`}>
					<path
						d={`M${rocket.s / 2} 5 
               C ${rocket.s * 0.74} ${rocket.s * 0.22}, ${rocket.s * 0.88} ${rocket.s * 0.56}, ${rocket.s / 2} ${rocket.s - 5}
               C ${rocket.s * 0.12} ${rocket.s * 0.56}, ${rocket.s * 0.26} ${rocket.s * 0.22}, ${rocket.s / 2} 5 Z`}
						fill="currentColor"
						stroke="currentColor"
						strokeWidth={1.6}
					/>
					<circle cx={rocket.s / 2} cy={rocket.s * 0.4} r={rocket.s * 0.09} fill="currentColor" stroke="currentColor" strokeWidth={1.3} />
					<path d={`M${rocket.s * 0.22} ${rocket.s * 0.6} L${rocket.s * 0.34} ${rocket.s * 0.54} L${rocket.s * 0.34} ${rocket.s * 0.78} L${rocket.s * 0.22} ${rocket.s * 0.84} Z`} fill="currentColor" stroke="currentColor" strokeWidth={1.1} />
					<path d={`M${rocket.s * 0.78} ${rocket.s * 0.6} L${rocket.s * 0.66} ${rocket.s * 0.54} L${rocket.s * 0.66} ${rocket.s * 0.78} L${rocket.s * 0.78} ${rocket.s * 0.84} Z`} fill="currentColor" stroke="currentColor" strokeWidth={1.1} />
					<path
						d={`M${rocket.s * 0.36} ${rocket.s * 0.84}
               C${rocket.s * 0.5} ${rocket.s * 0.8}, ${rocket.s * 0.5} ${rocket.s * 0.8}, ${rocket.s * 0.64} ${rocket.s * 0.84}
               C${rocket.s * 0.56} ${rocket.s * 0.92}, ${rocket.s * 0.44} ${rocket.s * 0.92}, ${rocket.s * 0.36} ${rocket.s * 0.84} Z`}
						fill="#ff9d00"
						opacity={0.9}
					/>
				</g>
			</svg>

			<div className="absolute left-1 top-1/2 -translate-y-1/2 text-center">
				<div className="grid h-14 w-16 place-items-center rounded-xl bg-background/20 shadow-sm border border-border/40">
					<span aria-hidden className="text-lg leading-none">
						☁️
					</span>
				</div>
				<div className="mt-1 text-[12px] font-semibold text-muted-tertiary">On-cloud</div>
			</div>
			<div className="absolute right-1 top-1/2 -translate-y-1/2 text-center">
				<div className="grid h-14 w-16 place-items-center rounded-xl bg-background/20 shadow-sm border border-border/40">
					<span aria-hidden className="text-lg leading-none">
						🏢
					</span>
				</div>
				<div className="mt-1 text-[12px] font-semibold text-muted-tertiary">On-Premise</div>
			</div>
		</div>
	);
}
