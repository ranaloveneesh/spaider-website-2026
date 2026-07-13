import Walkthrough, { type WalkStep } from "@/app/components/ui/walkthrough";

// Plan §4 block headings/subtext (docs/plan.md), one step per block.
// Block 2 leads (matches the curation screenshot), then Block 1.
// Steps 3-4 reuse the two existing screenshots until dedicated visuals exist
// (shared-projects mockup and integrations flow, per the plan's asset table).
const STEPS: WalkStep[] = [
	{
		img: "/ai-foundations/walk/real_library_edit.webp",
		title: "Curate your knowledge base.",
		body: "Build structured libraries from trusted sources and keep them ready for future projects, proposals, and reviews.",
	},
	{
		img: "/ai-foundations/walk/real_knowledge.webp",
		title: "Search your enterprise knowledge.",
		body: "Give your teams instant access to technical reports, proposals, standards, project files, and internal knowledge with traceable answers.",
	},
	{
		img: "/ai-foundations/walk/real_library_edit.webp",
		title: "Turn project work into reusable enterprise memory.",
		body: "SPAIDER captures project outputs, decisions, documents, and AI-generated work so future teams do not repeat the same work from scratch.",
	},
	{
		img: "/ai-foundations/walk/real_knowledge.webp",
		title: "Access knowledge where your teams already work.",
		body: "Connect SPAIDER to existing communication and collaboration workflows so teams can interact with enterprise knowledge without switching context.",
	},
];

export default function PlatformWalkthrough() {
	return (
		<Walkthrough
			title={
				<>
					The platform, <span className="spx-grad-text">as it runs today.</span>
				</>
			}
			lede="Captured from the SPAIDER application, running on demonstration data."
			steps={STEPS}
		/>
	);
}
