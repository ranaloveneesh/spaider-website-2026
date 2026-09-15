import type { Metadata } from "next";
import type { CSSProperties } from "react";
import AgentDetail from "@/app/components/agents/AgentDetail";
import { SpockVisual } from "@/app/components/agents/AgentVisuals";

export const metadata: Metadata = {
	title: "SPOCK - Systems Engineering Agent",
	description: "SPOCK is SPAIDER's systems engineering agent for requirements, architecture, technical evidence, traceability, and reviews.",
	alternates: { canonical: "https://www.spaiderspace.com/agents/spock" },
};

export default function SpockPage() {
	return <div style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}><AgentDetail
		name="SPOCK"
		role="Systems Engineering Agent"
		headline="Requirements, architecture, traceability, and technical reviews in one engineering workspace."
		description="SPOCK helps systems-engineering teams structure technical baselines, connect evidence, identify gaps, and prepare human-led reviews."
		visual={<SpockVisual />}
		capabilities={[
			{ title: "Requirements engineering", body: "Extract, classify, decompose, and organize stakeholder, system, subsystem, interface, and verification requirements." },
			{ title: "Traceability and evidence", body: "Link requirements to source documents, architecture elements, design decisions, verification methods, and technical evidence." },
			{ title: "Architecture analysis", body: "Represent system elements, interfaces, constraints, assumptions, and open decisions in a shared technical context." },
			{ title: "Review preparation", body: "Assemble review inputs, unresolved items, evidence status, and change impact for engineer approval." },
		]}
		workflow={[
			{ title: "Ingest", body: "Read requirements, standards, specifications, and program records." },
			{ title: "Structure", body: "Map content into the aerospace ontology and system hierarchy." },
			{ title: "Trace", body: "Connect requirements, design elements, interfaces, and evidence." },
			{ title: "Analyze", body: "Flag gaps, conflicts, weak evidence, and affected dependencies." },
			{ title: "Review", body: "Present findings and proposed updates for engineering approval." },
		]}
		inputs={["Requirements and specifications", "Applicable standards", "System architecture and interfaces", "Design decisions and assumptions", "Verification plans and evidence"]}
		outputs={["Structured requirements baseline", "Traceability links and matrices", "Gap and conflict register", "Change-impact context", "Technical review package"]}
		trustSignals={["Source provenance for each extracted requirement and technical assertion.", "Contradiction screening across requirements, assumptions, interfaces, and memory.", "Confidence signals for extracted links and proposed classifications.", "Explicit engineer approval for baseline and review-state changes."]}
		boundary="SPOCK is an engineering decision-support system. The responsible engineering team retains authority over requirements, architecture, verification, and program baselines."
	/></div>;
}
