import Reveal from "@/app/components/ui/reveal";

const PROGRAMS = [
	{
		index: "01",
		title: "Aerospace ontology",
		focus: "Semantic infrastructure",
		body: "Represent requirements, system elements, interfaces, evidence, procedures, assets, events, and mission context in a machine-usable technical structure.",
		work: ["Domain schema", "Entity and relationship extraction", "Knowledge graph construction", "Cross-program reuse"],
	},
	{
		index: "02",
		title: "Domain models",
		focus: "Aerospace intelligence",
		body: "Develop and evaluate model components for technical extraction, retrieval, reasoning, classification, and workflow-specific decision support.",
		work: ["Domain adaptation", "Model routing", "Technical evaluation", "Private model deployment"],
	},
	{
		index: "03",
		title: "Trust and explainability",
		focus: "Independent verification",
		body: "Build verification mechanisms that expose sources, contradictions, uncertainty, memory state, and escalation paths to users and connected systems.",
		work: ["Provenance graphs", "Contradiction screening", "Confidence estimation", "Review and escalation"],
	},
] as const;

const HORIZONS = [
	{ label: "Current focus", value: "Ground-based engineering, proposals, knowledge, and mission-operations support" },
	{ label: "Development path", value: "Integrated program intelligence across engineering and operational systems" },
	{ label: "Future applications", value: "Edge and autonomous intelligence for distributed and on-orbit workflows" },
] as const;

export default function ResearchProgram() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-12">
				<span className="spx-eyebrow mb-8">Research and development</span>
				<h2 className="spx-heading text-foreground">Technical programs that build the <span className="spx-grad-text">SPAIDER moat.</span></h2>
				<p className="spx-lede mt-5">The product roadmap is supported by three connected R&amp;D programs. Their outputs are used across AI Foundations and the agent suite.</p>
			</Reveal>

			<div className="grid border-l border-t border-spx-rule lg:grid-cols-3">
				{PROGRAMS.map((program, index) => (
					<Reveal key={program.title} variant="fade-up" threshold={0.1} delayMs={index * 70} className="border-b border-r border-spx-rule p-7 sm:p-9">
						<div className="flex items-center justify-between gap-5"><span className="spx-index">/ {program.index}</span><span className="font-geist-mono text-[0.64rem] uppercase tracking-[0.12em] text-spx-cyan">{program.focus}</span></div>
						<h3 className="spx-h3 mt-10 text-foreground">{program.title}</h3>
						<p className="spx-body mt-4">{program.body}</p>
						<ul className="mt-7 border-t border-spx-rule pt-4">
							{program.work.map((item) => <li key={item} className="border-b border-spx-rule py-2.5 text-sm text-spx-ink-2 last:border-0">{item}</li>)}
						</ul>
					</Reveal>
				))}
			</div>

			<Reveal variant="fade-up" threshold={0.1} className="mt-16">
				<h3 className="font-outfit text-2xl font-semibold text-foreground sm:text-3xl">Application roadmap</h3>
				<div className="mt-7 grid gap-px border border-spx-rule bg-spx-rule md:grid-cols-3">
					{HORIZONS.map((horizon) => <div key={horizon.label} className="bg-spx-void-2 p-7"><span className="spx-label text-spx-cyan">{horizon.label}</span><p className="mt-4 text-base leading-7 text-spx-ink-2">{horizon.value}</p></div>)}
				</div>
			</Reveal>
		</section>
	);
}
