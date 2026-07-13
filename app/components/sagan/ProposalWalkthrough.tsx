import Walkthrough, { type WalkStep } from "@/app/components/ui/walkthrough";

// Plan §5 section headings/content (docs/plan.md), one step per section.
const STEPS: WalkStep[] = [
	{
		img: "/sagan/walk/real_grounding.webp",
		title: "Understand the opportunity before you bid.",
		body: "SAGAN reviews the RFP/ITT, extracts key requirements, identifies constraints, and helps teams decide whether the opportunity is worth pursuing.",
	},
	{
		img: "/sagan/walk/real_capability.webp",
		title: "Map requirements without losing traceability.",
		body: "Extract requirements, group them by workstream, and track how each requirement is addressed across the proposal.",
	},
	{
		img: "/sagan/walk/real_wp.webp",
		title: "Move from blank page to structured proposal.",
		body: "Generate outlines, section plans, work packages, responsibilities, and initial proposal drafts using your organization's previous knowledge.",
	},
	{
		img: "/sagan/walk/real_gantt.webp",
		title: "Build the financial logic behind the proposal.",
		body: "Create cost assumptions, budget lines, work-package allocations, and financial scenarios connected to the proposal plan.",
	},
	{
		img: "/sagan/walk/real_gantt.webp",
		title: "Keep proposal teams aligned.",
		body: "Track section-level versions, input context, revisions, and generated outputs so teams can work together without losing proposal history.",
	},
];

export default function ProposalWalkthrough() {
	return (
		<Walkthrough
			title={
				<>
					Watch a proposal <span className="spx-grad-text">come together.</span>
				</>
			}
			lede="Captured from the SPAIDER application: the actual workspace, stage by stage, running on demonstration data."
			steps={STEPS}
		/>
	);
}
