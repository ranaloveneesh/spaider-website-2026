"use client";

import { CircleCheck } from "lucide-react";
import Image from "next/image";
import WhySpaider from "@/app/components/home/WhySpaider";

const IMAGE_BY_INDEX = ["/agents/ai-foundations/1.png", "/agents/ai-foundations/2.png", "/agents/ai-foundations/3.png", "/agents/ai-foundations/4.png"] as const;

const FEATURES = [
	{
		title: "Direct RFP/ITT Integration & Formatting",
		bullets: ["In-document writing (EU Horizon, ESA ITT, FNR, LSA, SBIR, etc.)", "Instant population of boilerplate / reusable content", "Requirement mapping & traceability", "Real-time format validation"],
	},
	{
		title: "Targeted Research & Synthesis",
		bullets: ["Accelerated lit review & SOTA summaries", "Query internal repositories and vaults", "Connect AIAA / IEEE / arXiv / Patent DBs", "Extract key findings with citations"],
	},
	{
		title: "Strategic Planning Assistance",
		bullets: ["Structure proposals effectively", "Draft Work Breakdown Structures (WBS)", "Create Work Packages (WPs) & budget outlines"],
	},
	{
		title: "Collaboration & Meeting Facilitation",
		bullets: ["Calendar & comms integration (Teams/Meet)", "Automated scheduling & participant coordination", "Targeted agendas & expert questions", "Live transcription & action items"],
	},
];

const items = FEATURES.map((feature, index) => ({
	t: feature.title,
	d: (
		<ul className="space-y-2 sm:space-y-2.5">
			{feature.bullets.map((b) => (
				<li key={b} className="flex items-start gap-2 sm:gap-3">
					<CircleCheck className="mt-px h-4 w-4 shrink-0 text-accent sm:mt-[2px] sm:h-5 sm:w-5" aria-hidden />
					<span className="text-xs leading-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{b}</span>
				</li>
			))}
		</ul>
	),
	content: (
		<div className="relative flex h-full w-full items-center justify-center">
			<Image src={IMAGE_BY_INDEX[index % IMAGE_BY_INDEX.length]} alt={feature.title} fill className="object-cover" />
		</div>
	),
}));

export default function KeyFeatures() {
	return <WhySpaider title={<span className="text-foreground">Key Features</span>} subtitle="Core capabilities that accelerate proposal writing, research, and coordination with SAGAN." items={items} />;
}
