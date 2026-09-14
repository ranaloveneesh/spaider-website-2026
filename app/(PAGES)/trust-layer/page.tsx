import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import CtaBand from "@/app/components/CtaBand";
import TrustSystemVisual from "@/app/components/trust/TrustSystemVisual";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Trust Layer and Explainable AI",
	description: "SPAIDER's Trust Layer provides evidence provenance, contradiction screening, confidence estimation, memory consistency, and review signals for aerospace AI.",
	alternates: { canonical: "https://www.spaiderspace.com/trust-layer" },
};

const MODULES = [
	{ index: "M1", title: "Contradiction screening", status: "Developed and measured internally", body: "Compares new facts, memory writes, and retrieved passages with existing knowledge. It returns agree, unrelated, or contradict signals with confidence." },
	{ index: "M2", title: "Confidence estimation", status: "Active R&D", body: "Estimates uncertainty from semantic variation in model outputs. Low-confidence results can be labelled, routed to stronger verification, or escalated for review." },
	{ index: "M3", title: "Evidence and provenance", status: "Implemented foundation", body: "Records the libraries, files, paths, passages, and retrieval operations used by an answer in a machine-readable response graph." },
	{ index: "M4", title: "Memory consistency", status: "Implemented in foundation components", body: "Screens proposed memory updates, preserves operation history, and attaches conflict information so long-term context remains inspectable." },
	{ index: "M5", title: "Epistemic work measurement", status: "Experimental", body: "Measures how much a workflow stage reduces uncertainty, providing an alternative to treating answer length or token count as progress." },
	{ index: "M6", title: "Review and escalation", status: "Product development", body: "Presents flagged evidence, conflicts, uncertainty, and approval state to the responsible engineer or operator and records the resolution." },
] as const;

const DESIGN_RULES = [
	{ title: "Independent checks", body: "Verification mechanisms are separate from the model or agent producing the answer." },
	{ title: "Machine-readable output", body: "Trust results are structured signals that interfaces, policies, reviewers, and downstream systems can use." },
	{ title: "Continuous operation", body: "Fast local checks are designed to run throughout a workflow rather than only during a final review." },
	{ title: "Explicit human authority", body: "Verification supports engineering and operational decisions; it does not remove accountable human approval." },
] as const;

export default function TrustLayerPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<header className="border-b border-spx-rule pb-12 pt-7 sm:pb-16 sm:pt-12">
					<Reveal variant="fade-up"><span className="spx-eyebrow">Core R&amp;D · Trust and explainability</span></Reveal>
					<Reveal variant="fade-up" delayMs={70}><h1 className="mt-7 max-w-[16ch] font-outfit text-[clamp(2.6rem,6.8vw,5.6rem)] font-medium leading-[1.03] tracking-tight text-foreground">Independent verification for <span className="spx-grad-text">aerospace AI.</span></h1></Reveal>
					<Reveal variant="fade-up" delayMs={130}><p className="spx-lede mt-7">The SPAIDER Trust Layer attaches evidence provenance, consistency checks, confidence estimates, and review state to agent inputs and outputs. It is a technical layer shared by AI Foundations, SAGAN, SPOCK, and KEPLER.</p></Reveal>
				</header>

				<Reveal variant="scale" threshold={0.05} className="mt-[calc(var(--spx-section-gap)*0.55)]"><TrustSystemVisual /></Reveal>

				<section className="mt-[var(--spx-section-gap)]">
					<Reveal variant="fade-up"><span className="spx-eyebrow mb-8">Technical function</span><h2 className="spx-heading text-foreground">Signals about an answer and <span className="spx-grad-text">the evidence behind it.</span></h2><p className="spx-lede mt-5">Agents generate outputs. The Trust Layer independently evaluates the information used, the consistency of the result, its uncertainty, and the required review state.</p></Reveal>
					<div className="mt-10 grid border-l border-t border-spx-rule sm:grid-cols-2 xl:grid-cols-4">{DESIGN_RULES.map((rule, index) => <Reveal key={rule.title} variant="fade-up" delayMs={index * 55} className="border-b border-r border-spx-rule p-7"><span className="spx-index">/ 0{index + 1}</span><h3 className="mt-8 font-outfit text-xl font-semibold text-foreground">{rule.title}</h3><p className="spx-body mt-3">{rule.body}</p></Reveal>)}</div>
				</section>

				<section className="mt-[var(--spx-section-gap)]">
					<Reveal variant="fade-up"><span className="spx-eyebrow mb-8">Module architecture</span><h2 className="spx-heading text-foreground">Six connected <span className="spx-grad-text">verification mechanisms.</span></h2><p className="spx-lede mt-5">The modules have different maturity levels. The status labels below distinguish implemented foundations, active research, and product-development work.</p></Reveal>
					<div className="mt-10 grid gap-px border border-spx-rule bg-spx-rule lg:grid-cols-2">
						{MODULES.map((module, index) => <Reveal key={module.index} variant="fade-up" delayMs={(index % 2) * 60} className="bg-spx-void-2 p-7 sm:p-9"><div className="flex flex-wrap items-center justify-between gap-3"><span className="spx-index">{module.index}</span><span className="rounded-xs border border-spx-rule-2 px-3 py-2 font-geist-mono text-[0.6rem] uppercase tracking-[0.1em] text-spx-cyan">{module.status}</span></div><h3 className="spx-h3 mt-9 text-foreground">{module.title}</h3><p className="spx-body mt-4">{module.body}</p></Reveal>)}
					</div>
				</section>

				<section className="mt-[var(--spx-section-gap)] grid gap-12 border-y border-spx-rule py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start sm:py-18">
					<Reveal variant="fade-right"><span className="spx-eyebrow mb-8">Research basis</span><h2 className="spx-heading text-foreground">Methods selected for <span className="spx-grad-text">continuous verification.</span></h2></Reveal>
					<Reveal variant="fade-left"><div className="border-t border-spx-rule">{[
						["Sparse-signal contradiction detection", "Read selected internal representation signals and classify agreement or contradiction without generating a second answer."],
						["Semantic-entropy confidence", "Sample outputs, cluster them by meaning, and calculate residual uncertainty without requiring hosted-model log probabilities."],
						["Per-response provenance graphs", "Record the exact evidence set behind each response as structured data rather than only displaying formatted citations."],
						["Screening-funnel economics", "Apply fast local checks broadly and reserve more expensive model or human review for flagged results."],
					].map(([title, body], index) => <div key={title} className="grid gap-3 border-b border-spx-rule py-7 sm:grid-cols-[3rem_0.7fr_1.3fr]"><span className="spx-index">0{index + 1}</span><h3 className="font-outfit text-lg font-semibold text-foreground">{title}</h3><p className="text-sm leading-7 text-spx-mute">{body}</p></div>)}</div><p className="mt-5 text-xs leading-6 text-spx-faint">The confidence research includes semantic-entropy methods described by Farquhar et al., Nature 2024. SPAIDER's contradiction and provenance architectures are developed as internal technical programs.</p></Reveal>
				</section>

				<Reveal variant="fade-up" className="mt-[calc(var(--spx-section-gap)*0.6)]"><Link href="/our-tech" className="inline-flex items-center gap-2 font-geist-mono text-[0.72rem] uppercase tracking-[0.12em] text-spx-cyan">See the complete five-layer architecture <ArrowRight className="size-4" /></Link></Reveal>
				<Reveal variant="fade-up"><CtaBand title="Review the Trust Layer for your workflow." copy="Discuss evidence requirements, verification signals, review gates, and deployment constraints with the SPAIDER team." ctaHref="/request-trial" ctaLabel="Book a Technical Briefing" /></Reveal>
			</div>
		</div>
	);
}
