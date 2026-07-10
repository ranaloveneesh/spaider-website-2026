import Reveal from "@/app/components/ui/reveal";

// Port of source Technology page's "02 — Knowledge flow" (`.flow` pill chain).
const STEPS = ["Enterprise documents", "Parsing & fact extraction", "Libraries & knowledge graph", "Grounded retrieval", "Agent workflows"] as const;

export default function KnowledgeFlow() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					From documents to <span className="spx-grad-text">decisions.</span>
				</h2>
			</Reveal>

			<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
				<div className="flex flex-wrap items-center gap-3.5">
					{STEPS.map((step) => (
						<span key={step} className="contents">
							<span className="rounded-xs border border-spx-rule-2 bg-spx-void-2 px-5 py-[0.9375rem] font-geist-mono text-[0.76rem] uppercase tracking-[0.12em] text-spx-ink-2">{step}</span>
							<i aria-hidden="true" className="not-italic text-spx-faint">
								→
							</i>
						</span>
					))}
					<span className="rounded-xs border border-[rgba(110,231,168,0.45)] bg-spx-void-2 px-5 py-[0.9375rem] font-geist-mono text-[0.76rem] uppercase tracking-[0.12em] text-spx-green">Human review</span>
				</div>
				<p className="spx-lede mt-[2.125rem]">Every step keeps its sources. Every output can be traced back to the document, the extracted fact, or the recorded human input behind it.</p>
			</Reveal>
		</section>
	);
}
