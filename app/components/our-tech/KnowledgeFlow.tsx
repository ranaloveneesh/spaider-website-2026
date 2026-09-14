import { ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/reveal";

// Port of source Technology page's "02 - Knowledge flow" (`.flow` pill chain).
const STEPS = ["Technical sources", "Parsing & fact extraction", "Ontology & knowledge graph", "Domain models", "Agent workflow", "Trust signals"] as const;

export default function KnowledgeFlow() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					From source data to <span className="spx-grad-text">reviewed outputs.</span>
				</h2>
			</Reveal>

			<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
				<div className="flex flex-wrap items-center gap-3.5">
					{STEPS.map((step) => (
						<span key={step} className="contents">
							<span className="rounded-xs border border-spx-rule-2 bg-spx-void-2 px-5 py-[0.9375rem] font-geist-mono text-[0.76rem] uppercase tracking-[0.12em] text-spx-ink-2">{step}</span>
							<ArrowRight aria-hidden="true" className="size-4 text-spx-faint" />
						</span>
					))}
					<span className="rounded-xs border border-[rgba(110,231,168,0.45)] bg-spx-void-2 px-5 py-[0.9375rem] font-geist-mono text-[0.76rem] uppercase tracking-[0.12em] text-spx-green">Human review</span>
				</div>
				<p className="spx-lede mt-[2.125rem]">Source and verification metadata remain associated with the workflow so reviewers can inspect the evidence, method, and approval state behind an output.</p>
			</Reveal>
		</section>
	);
}
