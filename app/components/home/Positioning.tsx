import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

const CAPABILITIES = [
	{
		index: "01",
		title: "Domain expert",
		body: "Aerospace ontologies, structured program knowledge, and domain-adapted models provide the context required for space workflows.",
		enabledBy: "Ontology · Knowledge · Models",
	},
	{
		index: "02",
		title: "Autonomous",
		body: "Workflow agents plan and execute bounded tasks across proposals, systems engineering, and mission operations using approved tools and data.",
		enabledBy: "Agents · Tools · Workflow memory",
	},
	{
		index: "03",
		title: "Trustworthy",
		body: "Evidence provenance, contradiction checks, and confidence signals make AI-generated outputs easier to verify before they enter technical work.",
		enabledBy: "Grounding · Verification · Explainability",
	},
	{
		index: "04",
		title: "Governed",
		body: "Access controls, approval gates, audit records, and deployment controls keep people responsible for consequential decisions.",
		enabledBy: "Policy · Review · Audit",
	},
] as const;

export default function Positioning() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1}>
				<span className="spx-eyebrow mb-8">SPAIDER intelligence systems</span>
				<div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
					<h2 className="spx-heading text-foreground">
						Technical intelligence for the <span className="spx-grad-text">space mission lifecycle.</span>
					</h2>
					<div>
						<p className="spx-lede">SPAIDER develops the intelligence layer for space programs, engineering teams, and mission operations. The system combines aerospace knowledge, models, expert agents, and verification mechanisms in one architecture.</p>
						<Link href="/our-tech" className="mt-6 inline-flex items-center gap-2 font-geist-mono text-[0.75rem] uppercase tracking-[0.14em] text-spx-cyan transition-colors hover:text-white">
							Review the architecture <ArrowUpRight className="size-4" aria-hidden="true" />
						</Link>
					</div>
				</div>
			</Reveal>

			<div className="mt-12 grid border-l border-t border-spx-rule sm:grid-cols-2 xl:grid-cols-4">
				{CAPABILITIES.map((item, index) => (
					<Reveal key={item.title} variant="fade-up" threshold={0.1} delayMs={index * 60} className="border-b border-r border-spx-rule p-7 sm:p-8">
						<span className="spx-index">/ {item.index}</span>
						<h3 className="spx-h3 mt-10 text-foreground">{item.title}</h3>
						<p className="spx-body mt-4">{item.body}</p>
						<p className="mt-8 border-t border-spx-rule pt-4 font-geist-mono text-[0.66rem] uppercase tracking-[0.12em] text-spx-cyan">{item.enabledBy}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
}
