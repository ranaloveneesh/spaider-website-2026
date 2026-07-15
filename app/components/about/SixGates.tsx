"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/app/components/ui/reveal";

type GateStatus = "live" | "dev" | "plan";

type Gate = {
	gate: string;
	title: string;
	body: string;
	agent: string;
	status: GateStatus;
};

const GATES: Gate[] = [
	{ gate: "Bid & Qualification", title: "Win the contract.", body: "Reading the tender, tracing every requirement, drafting the compliant, costed bid.", agent: "SAGAN - in production", status: "live" },
	{ gate: "Concept & Feasibility", title: "Requirements into architecture.", body: "Requirements traced, structured, and held to a verification thread that starts on day one.", agent: "SPOCK - in development", status: "dev" },
	{ gate: "Manufacturing & Production", title: "Build to spec, on the record.", body: "Supplier and works documentation captured, searchable, and traced back to the design baseline.", agent: "AI Foundations - in production", status: "live" },
	{ gate: "Integration & Test", title: "Integrate. Test. Prove it.", body: "Requirements and standards checked off against AIT evidence at every quality gate.", agent: "SPOCK - in development", status: "dev" },
	{ gate: "Launch Readiness", title: "Go / no-go, with evidence.", body: "PDR/CDR-style readiness reviews - open points, risks, and documentation status on the record.", agent: "SPOCK - in development", status: "dev" },
	{ gate: "Operations & Sustainment", title: "Telemetry into decisions.", body: "Asset monitoring, operational history, and anomaly review - operators in control.", agent: "KEPLER - in development", status: "dev" },
];

// Fractions along the path length where each gate's node sits.
const NODE_FRACTIONS = [0.02, 0.21, 0.4, 0.59, 0.78, 0.97];
const PATH_D = "M60 468 C 250 462 340 372 480 322 C 620 272 720 294 850 232 C 960 180 1080 108 1150 54";

const STATUS_DOT: Record<GateStatus, React.CSSProperties> = {
	live: { background: "var(--spx-green)", boxShadow: "0 0 10px var(--spx-green)" },
	dev: { background: "var(--spx-amber)" },
	plan: { background: "var(--spx-faint)" },
};

function padGate(i: number) {
	return String(i + 1).padStart(2, "0");
}

/** Static fallback for prefers-reduced-motion: no pin, no scroll-scrub. */
function StaticGates() {
	return (
		<div>
			<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
				<h2 className="max-w-[20ch] font-outfit text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
					One mission. <span className="text-spx-cyan">Six gates.</span> Four agents in the loop.
				</h2>
			</Reveal>
			<ol className="relative border-l border-spx-rule-2 pl-8 sm:pl-10">
				{GATES.map((g, i) => (
					<Reveal as="li" key={g.gate} variant="fade-up" threshold={0.2} delayMs={i * 60} className="relative pb-10 last:pb-0">
						<span aria-hidden="true" className="absolute -left-8 top-1 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-spx-rule-2 bg-spx-void-2 font-geist-mono text-[0.625rem] text-spx-mute sm:-left-10">
							{padGate(i)}
						</span>
						<span className="font-geist-mono text-[0.6875rem] uppercase tracking-[0.14em] text-spx-cyan">
							Phase {padGate(i)} - {g.gate}
						</span>
						<h3 className="mt-2 font-outfit text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{g.title}</h3>
						<p className="mt-2 max-w-[52ch] text-sm leading-6 text-spx-mute sm:text-base sm:leading-7">{g.body}</p>
						<div className="mt-3 flex items-center gap-2 font-geist-mono text-[0.6875rem] uppercase tracking-[0.1em] text-spx-mute">
							<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={STATUS_DOT[g.status]} />
							{g.agent}
						</div>
					</Reveal>
				))}
			</ol>
		</div>
	);
}

/** Pinned, scroll-scrubbed orbital path - a Framer Motion port of source's GSAP ScrollTrigger version. */
function OrbitGates() {
	const containerRef = useRef<HTMLDivElement>(null);
	const basePathRef = useRef<SVGPathElement>(null);
	const litPathRef = useRef<SVGPathElement>(null);
	const craftRef = useRef<SVGCircleElement>(null);
	const barRef = useRef<HTMLSpanElement>(null);

	const [pathLen, setPathLen] = useState(0);
	const [nodePoints, setNodePoints] = useState<{ x: number; y: number }[]>([]);
	const [phase, setPhase] = useState(0);

	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

	// SVG geometry (getTotalLength/getPointAtLength) only exists client-side, after paint.
	useEffect(() => {
		const base = basePathRef.current;
		if (!base) return;
		const len = base.getTotalLength();
		setPathLen(len);
		setNodePoints(NODE_FRACTIONS.map((f) => base.getPointAtLength(len * f)));
		if (litPathRef.current) {
			litPathRef.current.style.strokeDasharray = String(len);
			litPathRef.current.style.strokeDashoffset = String(len);
		}
		const p0 = base.getPointAtLength(len * NODE_FRACTIONS[0]);
		craftRef.current?.setAttribute("cx", String(p0.x));
		craftRef.current?.setAttribute("cy", String(p0.y));
	}, []);

	// Continuous, imperative updates on every scroll tick (path draw, craft position, progress bar) -
	// mirrors source's onUpdate. React state (phase) only changes on the 6 discrete thresholds.
	useMotionValueEvent(scrollYProgress, "change", (raw) => {
		const base = basePathRef.current;
		if (!base || pathLen === 0) return;
		const p = Math.max(0, Math.min(1, raw));

		if (litPathRef.current) litPathRef.current.style.strokeDashoffset = String(pathLen * (1 - p));
		const pt = base.getPointAtLength(pathLen * p);
		craftRef.current?.setAttribute("cx", String(pt.x));
		craftRef.current?.setAttribute("cy", String(pt.y));
		if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(1)}%`;

		let i = 0;
		for (let k = 0; k < NODE_FRACTIONS.length; k++) {
			if (p >= NODE_FRACTIONS[k] - 0.045) i = k;
		}
		setPhase((prev) => (prev === i ? prev : i));
	});

	const active = GATES[phase];

	return (
		<section ref={containerRef} className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-b border-spx-rule bg-spx-void-2" style={{ height: "440vh" }}>
			<div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden" style={{ paddingInline: "var(--spx-gutter)" }}>
				{/* head */}
				<div className="flex flex-wrap items-end justify-between gap-10" style={{ paddingTop: "calc(64px + 3vh)" }}>
					<div>
						<h2 className="max-w-[20ch] font-outfit text-[clamp(1.7rem,3.8vw,3.2rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
							One mission. <span className="spx-grad-text">Six gates.</span> Four agents in the loop.
						</h2>
					</div>
					<div className="flex items-center gap-4 font-geist-mono text-[0.72rem] tracking-[0.2em] text-spx-mute">
						<span>{padGate(phase)}</span>
						<span className="relative block h-px bg-spx-rule-2" style={{ width: "clamp(120px,18vw,300px)" }}>
							<i ref={barRef} className="absolute inset-y-0 left-0 block bg-spx-cyan" style={{ width: "0%" }} />
						</span>
						<span>06</span>
					</div>
				</div>

				{/* stage */}
				<div className="relative mt-[1vh] flex min-h-0 flex-1 flex-col min-[880px]:block">
					<svg className="relative h-[32vh] w-full flex-none min-[880px]:absolute min-[880px]:inset-0 min-[880px]:h-full" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
						<defs>
							<linearGradient id="sixGatesPathGrad" x1="0" y1="1" x2="1" y2="0">
								<stop offset="0" stopColor="#8ff7cf" />
								<stop offset=".5" stopColor="#59e8f5" />
								<stop offset="1" stopColor="#7d95ff" />
							</linearGradient>
						</defs>
						<circle cx="20" cy="1080" r="640" fill="none" stroke="rgba(185,192,205,.15)" strokeWidth="1.2" />
						<circle cx="20" cy="1080" r="600" fill="none" stroke="rgba(185,192,205,.06)" strokeWidth="1" />
						<path ref={basePathRef} d={PATH_D} fill="none" stroke="rgba(185,192,205,.2)" strokeWidth="1.5" strokeDasharray="3 7" strokeLinecap="round" />
						<path ref={litPathRef} d={PATH_D} fill="none" stroke="url(#sixGatesPathGrad)" strokeWidth="2.2" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 7px rgba(89,232,245,.6))" }} />
						{nodePoints.map((p, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: nodePoints is a static, fixed-length list; index is the gate number
							<g key={i}>
								<circle cx={p.x} cy={p.y} r="11" fill="var(--spx-void-2)" style={{ stroke: i <= phase ? "var(--spx-cyan)" : "rgba(185,192,205,.3)", strokeWidth: 1.5, transition: "stroke .4s" }} />
								<circle cx={p.x} cy={p.y} r="3.6" style={{ fill: i <= phase ? "var(--spx-cyan)" : "#454c5a", transition: "fill .4s" }} />
								<text x={p.x} y={p.y - 22} textAnchor="middle" style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, letterSpacing: "0.18em", fill: i <= phase ? "var(--spx-ink-2)" : "var(--spx-faint)", transition: "fill .4s" }}>
									{padGate(i)}
								</text>
							</g>
						))}
						<circle ref={craftRef} r="6" fill="#fff" style={{ filter: "drop-shadow(0 0 9px #59e8f5)" }} />
					</svg>

					{/* giant faint gate number - target's own display font, not source's Bricolage */}
					<div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-[1] hidden select-none font-outfit font-bold leading-[0.78] text-transparent min-[880px]:block" style={{ fontSize: "clamp(7rem,22vh,16rem)", WebkitTextStroke: "1px rgba(185,192,205,.15)" }}>
						{padGate(phase)}
					</div>

					<div className="relative z-[2] mt-2.5 min-[880px]:absolute min-[880px]:bottom-[5vh] min-[880px]:right-0 min-[880px]:mt-0 min-[880px]:max-w-[min(470px,44vw)]">
						<AnimatePresence mode="wait">
							<motion.div key={phase} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}>
								<span className="block font-geist-mono text-[0.68rem] uppercase tracking-[0.26em] text-spx-cyan">
									Phase {padGate(phase)} - {active.gate}
								</span>
								<h3 className="mt-4 text-[clamp(1.5rem,2.9vw,2.6rem)] font-outfit font-semibold leading-[1.02] tracking-tight text-foreground">{active.title}</h3>
								<p className="mt-3.5 text-[1.05rem] text-spx-mute">{active.body}</p>
								<div className="mt-5 inline-flex items-center gap-2.5 rounded-[2px] border border-spx-rule-2 px-4 py-2.5 font-geist-mono text-[0.68rem] uppercase tracking-[0.16em] text-spx-ink-2">
									<span aria-hidden="true" className="h-[7px] w-[7px] rounded-full" style={STATUS_DOT[active.status]} />
									{active.agent}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function SixGates() {
	const shouldReduceMotion = useReducedMotion();
	return shouldReduceMotion ? <StaticGates /> : <OrbitGates />;
}
