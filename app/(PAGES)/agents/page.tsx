import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { KeplerVisual, SaganVisual, SpockVisual } from "@/app/components/agents/AgentVisuals";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Expert Agents",
	description: "SAGAN, SPOCK, and KEPLER are SPAIDER's expert agents for proposals, systems engineering, and mission operations.",
	alternates: { canonical: "https://www.spaiderspace.com/agents" },
};

const AGENTS: Array<{ index: string; name: string; role: string; status?: string; body: string; href: string; visual: ReactNode }> = [
	{ index: "01", name: "SAGAN", role: "Proposals and tenders", status: "Product", body: "Supports opportunity assessment, requirements analysis, proposal planning, work packages, costing, and compliance review.", href: "/agents/sagan", visual: <SaganVisual compact /> },
	{ index: "02", name: "SPOCK", role: "Systems engineering", body: "Structures requirements, links technical evidence, supports architecture analysis, and prepares system reviews.", href: "/agents/spock", visual: <SpockVisual compact /> },
	{ index: "03", name: "KEPLER", role: "Mission operations", body: "Builds operational context from mission data, procedures, logs, constraints, and operator input.", href: "/agents/kepler", visual: <KeplerVisual compact /> },
];

export default function AgentsPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<header className="border-b border-spx-rule pb-12 pt-7 sm:pb-16 sm:pt-12">
					<Reveal variant="fade-up"><span className="spx-eyebrow">Expert agents</span></Reveal>
					<Reveal variant="fade-up" delayMs={70}><h1 className="mt-7 max-w-[15ch] font-outfit text-[clamp(2.6rem,6.8vw,5.6rem)] font-medium leading-[1.03] tracking-tight text-foreground">Three agents for the <span className="spx-grad-text">space mission lifecycle.</span></h1></Reveal>
					<Reveal variant="fade-up" delayMs={130}><p className="spx-lede mt-7">SAGAN, SPOCK, and KEPLER address distinct work across business acquisition, systems engineering, and mission operations. Each uses the same SPAIDER knowledge, ontology, model, and Trust infrastructure.</p></Reveal>
				</header>

				<div className="mt-[calc(var(--spx-section-gap)*0.55)] grid gap-10 xl:grid-cols-3">
					{AGENTS.map((agent, index) => (
						<Reveal key={agent.name} variant="fade-up" threshold={0.06} delayMs={index * 70}>
							<article className="group flex h-full flex-col border border-spx-rule bg-spx-void-2 transition-colors hover:border-spx-rule-2">
								<div className="relative min-h-[22rem] overflow-hidden border-b border-spx-rule">{agent.visual}</div>
								<div className="flex flex-1 flex-col p-7">
									<div className="flex items-center justify-between gap-4"><span className="spx-index">/ {agent.index}</span>{agent.status && <span className="rounded-xs border border-spx-rule-2 px-3 py-2 font-geist-mono text-[0.6rem] uppercase tracking-[0.1em] text-spx-amber">{agent.status}</span>}</div>
									<p className="spx-label mt-8 text-spx-cyan">{agent.role}</p>
									<h2 className="mt-3 font-outfit text-4xl font-semibold text-foreground">{agent.name}</h2>
									<p className="spx-body mt-4 flex-1">{agent.body}</p>
									<Link href={agent.href} className="mt-8 inline-flex items-center gap-2 font-geist-mono text-[0.72rem] uppercase tracking-[0.12em] text-spx-cyan">Explore {agent.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
								</div>
							</article>
						</Reveal>
					))}
				</div>

				<Reveal variant="fade-up" className="mt-[var(--spx-section-gap)] border-y border-spx-rule py-14 sm:py-18">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><span className="spx-eyebrow mb-8">Common architecture</span><h2 className="spx-heading text-foreground">Different workflows. <span className="spx-grad-text">Shared technical infrastructure.</span></h2></div><div className="grid grid-cols-2 gap-px border border-spx-rule bg-spx-rule sm:grid-cols-4">{["Aerospace ontology", "Domain models", "Private knowledge", "Trust Layer"].map((item, index) => <div key={item} className="bg-spx-void-2 p-5"><span className="spx-index">0{index + 1}</span><p className="mt-5 text-sm leading-6 text-spx-ink-2">{item}</p></div>)}</div></div>
				</Reveal>
			</div>
		</div>
	);
}
