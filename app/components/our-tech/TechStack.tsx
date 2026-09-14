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
		name: "Knowledge Layer",
		desc: "Private technical and operational knowledge.",
		body: "Documents, standards, project history, operational records, and approved external sources are ingested, parsed, indexed, and retained with source metadata.",
		chips: ["Ingestion", "Document parsing", "Fact extraction", "Libraries", "Vector retrieval", "Source records"],
	},
	{
		name: "Ontology Layer",
		desc: "Aerospace concepts and technical relationships.",
		body: "The ontology layer represents requirements, systems, interfaces, evidence, assets, procedures, events, and mission context so data can be interpreted consistently across tools and workflows.",
		chips: ["Aerospace taxonomy", "Domain ontology", "Entities", "Relationships", "Knowledge graphs", "Semantic retrieval"],
	},
	{
		name: "Model Layer",
		desc: "Domain processing for aerospace workflows.",
		body: "Domain-adapted components and routed foundation models perform technical extraction, classification, retrieval, synthesis, and workflow-specific reasoning.",
		chips: ["Domain adaptation", "Model routing", "Technical extraction", "Classification", "Retrieval", "Private deployment"],
	},
	{
		name: "Agent Layer",
		desc: "Expert workflows connected to data and tools.",
		body: "SAGAN, SPOCK, and KEPLER use the lower layers to execute bounded workflows across proposals, systems engineering, and mission operations.",
		chips: ["SAGAN", "SPOCK", "KEPLER", "Task planning", "Tool use", "Workflow state", "Approval gates"],
	},
	{
		name: "Trust Layer",
		desc: "Verification and explainability across the system.",
		body: "Independent mechanisms attach provenance, consistency checks, confidence signals, and review state to agent inputs and outputs. These signals support users, policies, and downstream systems.",
		chips: ["Evidence provenance", "Contradiction screening", "Confidence estimation", "Memory consistency", "Escalation", "Audit records"],
	},
];

export default function TechStack() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					Five layers. <span className="spx-grad-text">One system.</span>
				</h2>
				<p className="spx-lede mt-3">Select a layer to review its technical role and current development scope.</p>
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
