"use client";

import { Check, ChevronRight, FileText, SearchCheck, TriangleAlert } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const stages = [
	{ label: "SOURCE", detail: "SYS-SPEC-04", icon: FileText },
	{ label: "AGENT", detail: "SPOCK / TRACE", icon: SearchCheck },
	{ label: "VERIFY", detail: "4 SIGNALS", icon: TriangleAlert },
	{ label: "REVIEW", detail: "ENGINEER", icon: Check },
] as const;

const signals = [
	["Provenance", "14 sources", "pass"],
	["Consistency", "1 conflict", "flag"],
	["Confidence", "0.82", "pass"],
	["Approval", "Pending", "pending"],
] as const;

export default function TrustSystemVisual() {
	const reduced = useReducedMotion();
	return (
		<div className="relative min-h-[31rem] overflow-hidden border border-spx-rule bg-[#080b11] p-5 sm:p-8">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(89,232,245,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(89,232,245,0.045)_1px,transparent_1px)] [background-size:36px_36px]" />
			<div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-spx-rule pb-4 font-geist-mono text-[0.62rem] uppercase tracking-[0.13em] text-spx-mute">
				<span>TRUST LAYER / RESPONSE TRACE</span><span className="text-spx-cyan">TURN 04F2-19</span>
			</div>

			<div className="relative mt-10 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
				{stages.map((stage, index) => {
					const Icon = stage.icon;
					return <div key={stage.label} className="contents">
						<motion.div initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }} className={`relative flex-1 border p-5 ${stage.label === "VERIFY" ? "border-spx-cyan/55 bg-spx-cyan/[0.055]" : "border-spx-rule bg-spx-void/72"}`}>
							<Icon className={`size-4 ${stage.label === "VERIFY" ? "text-spx-cyan" : "text-spx-mute"}`} strokeWidth={1.5} />
							<span className="mt-8 block font-geist-mono text-[0.6rem] tracking-[0.12em] text-spx-faint">{stage.label}</span>
							<strong className="mt-1 block font-geist-mono text-xs font-medium text-foreground">{stage.detail}</strong>
						</motion.div>
						{index < stages.length - 1 && <ChevronRight className="mx-auto size-4 rotate-90 text-spx-faint md:rotate-0" aria-hidden="true" />}
					</div>;
				})}
			</div>

			<div className="relative mt-8 grid gap-px border border-spx-rule bg-spx-rule sm:grid-cols-2 lg:grid-cols-4">
				{signals.map(([label, value, status], index) => (
					<motion.div key={label} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.09 }} className="bg-spx-void-2 p-4">
						<div className="flex items-center justify-between"><span className="font-geist-mono text-[0.58rem] uppercase tracking-[0.1em] text-spx-mute">{label}</span><span className={`h-1.5 w-1.5 rounded-full ${status === "pass" ? "bg-spx-green" : status === "flag" ? "bg-spx-amber" : "bg-spx-faint"}`} /></div>
						<strong className={`mt-2 block font-geist-mono text-sm font-medium ${status === "flag" ? "text-spx-amber" : "text-foreground"}`}>{value}</strong>
					</motion.div>
				))}
			</div>

			<div className="relative mt-5 border-l-2 border-spx-amber bg-spx-amber/[0.045] p-4">
				<span className="font-geist-mono text-[0.6rem] uppercase tracking-[0.12em] text-spx-amber">Flagged for review</span>
				<p className="mt-2 text-sm leading-6 text-spx-ink-2">Requirement SYS-021 conflicts with the stored safe-mode power constraint. Both source passages are attached to the review record.</p>
			</div>
		</div>
	);
}
