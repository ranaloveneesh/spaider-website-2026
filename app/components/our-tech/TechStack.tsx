"use client";

import { useState } from "react";
import Reveal from "@/app/components/ui/reveal";

// Port of source Technology page's `.stack`/`.layer` section ("01 - The moat").
// Exclusive-open accordion: clicking an open layer closes it.
type Layer = {
	name: string;
	desc: string;
	body: string;
	chips: string[];
};

const LAYERS: Layer[] = [
	{
		name: "Trust Layer",
		desc: "Traceable, reviewable AI for expert teams.",
		body: "Source grounding, confidence checks, explainability, and human review keep AI outputs controlled and auditable. Assistance, not blind automation.",
		chips: ["Source grounding", "Confidence checks", "Hallucination checks", "Explainability", "Human review", "Auditability", "Citations"],
	},
	{
		name: "Agentic Layer",
		desc: "Workflow agents that work with your data and tools.",
		body: "Workflow-specific assistants plan tasks, use tools, maintain context, and support experts across proposals, engineering, operations, and business workflows.",
		chips: ["SAGAN · SPOCK · KEPLER · AMELIA", "Task planning", "Tool use", "Workflow memory", "SOP-guided execution", "Persistent context"],
	},
	{
		name: "Model Layer",
		desc: "Domain intelligence for aerospace workflows.",
		body: "Frontier models combined with SPAIDER's aerospace-specific intelligence and model routing. Reasoning over technical documents, engineering workflows, and mission context.",
		chips: ["Domain-adapted models", "Model routing", "Aerospace reasoning", "Retrieval · extraction · validation", "Private deployment"],
	},
	{
		name: "Knowledge Layer",
		desc: "Turn enterprise data into structured aerospace knowledge.",
		body: "Documents, standards, project history, and technical data are ingested and structured into searchable libraries, retrieval indexes, and knowledge graphs built on an aerospace ontology and taxonomy.",
		chips: ["Ingestion pipeline", "Document parsing", "Fact extraction", "Aerospace ontology", "Taxonomy", "Knowledge graph", "Vector retrieval", "Libraries", "Source cards"],
	},
];

export default function TechStack() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					Four layers. <span className="spx-grad-text">One system.</span>
				</h2>
				<p className="spx-lede mt-3">Four proprietary layers. Select a layer to see what lives inside it.</p>
			</Reveal>

			<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
				<div className="flex flex-col gap-px border border-spx-rule bg-spx-rule">
					{LAYERS.map((layer, i) => {
						const open = openIndex === i;
						return (
							<button key={layer.name} type="button" aria-expanded={open} aria-label={layer.name} onClick={() => setOpenIndex(open ? null : i)} className={`block w-full cursor-pointer text-left transition-colors duration-300 ${open ? "bg-spx-void-2" : "bg-spx-void hover:bg-spx-void-2"}`}>
								{/* Head row */}
								<div className="grid grid-cols-[40px_1fr_30px] items-center gap-[1.625rem] px-5 py-6 min-[880px]:grid-cols-[60px_240px_1fr_40px] min-[880px]:px-[1.875rem] min-[880px]:py-[1.875rem]">
									<span className="spx-index">0{i + 1}</span>
									<span className={`font-outfit text-[clamp(1.2rem,2vw,1.7rem)] font-semibold tracking-[-0.015em] transition-colors duration-300 ${open ? "text-spx-cyan" : "text-foreground"}`}>{layer.name}</span>
									<span className="hidden text-[0.98rem] text-spx-mute min-[880px]:block">{layer.desc}</span>
									<span aria-hidden="true" className={`text-right text-[1.1rem] transition-transform duration-300 ${open ? "rotate-45 text-spx-cyan" : "text-spx-faint"}`}>
										+
									</span>
								</div>

								{/* Detail - grid-rows transition for smooth expand/collapse */}
								<div className={`grid transition-[grid-template-rows] duration-400 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
									<div className="min-h-0 overflow-hidden">
										<div className="px-5 pb-6 min-[880px]:pb-[1.875rem] min-[880px]:pl-[7rem] min-[880px]:pr-[1.875rem]">
											<p className="max-w-[62ch] text-[1.03rem] leading-[1.65] text-spx-ink-2">{layer.body}</p>
											<div className="mt-[1.125rem] flex flex-wrap gap-2">
												{layer.chips.map((chip) => (
													<span key={chip} className="rounded-xs border border-spx-rule-2 px-3.5 py-2.5 font-geist-mono text-[0.72rem] uppercase tracking-[0.1em] text-spx-ink-2">
														{chip}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</button>
						);
					})}
				</div>
			</Reveal>
		</section>
	);
}
