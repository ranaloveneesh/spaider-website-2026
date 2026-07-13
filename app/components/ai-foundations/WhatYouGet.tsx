import Reveal from "@/app/components/ui/reveal";

// Port of source foundations page's "01 - What you get" section (`.frows` rows).
const ROWS: [string, string][] = [
	["Trusted search", "Ask across one or many libraries. Answers arrive with citations, a reasoning trace, and the source file one click away."],
	["Curated libraries", "Create isolated libraries per domain. A Lead Librarian analyses your files and proposes the storage schema before anything is ingested."],
	["Knowledge graph", "Facts and entities are extracted, resolved, and connected into a graph your team can explore visually."],
	["Ingestion pipeline", "Documents are parsed, facts extracted, and entities resolved. Content is prepared for retrieval and reasoning automatically."],
	["Shared projects", "Real-time project workspaces where teams and agents work together on connected libraries."],
	["Rich, reusable outputs", "Answers render as tables, charts, and diagrams, and project results feed back into enterprise memory."],
];

export default function WhatYouGet() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					A platform that turns knowledge into <span className="spx-grad-text">reusable memory.</span>
				</h2>
			</Reveal>

			<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
				<div className="border-t border-spx-rule">
					{ROWS.map(([title, body]) => (
						<div key={title} className="grid grid-cols-1 gap-2 border-b border-spx-rule py-6 sm:py-7 min-[760px]:grid-cols-[280px_1fr] min-[760px]:gap-[1.875rem]">
							<h3 className="text-[1.1rem] font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
							<p className="max-w-[62ch] text-[1.02rem] leading-[1.65] text-spx-mute">{body}</p>
						</div>
					))}
				</div>
			</Reveal>
		</section>
	);
}
