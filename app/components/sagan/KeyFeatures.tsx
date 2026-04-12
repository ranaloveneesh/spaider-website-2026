"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";

type Feature = { title: string; bullets: string[] };

const FEATURES: Feature[] = [
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

const IMAGE_BY_INDEX = ["/foundations/inforag1.png", "/foundations/inforag2.png", "/foundations/inforag3.png"] as const;

export default function KeyFeatures() {
	const content = FEATURES.map((feature, index) => ({
		title: feature.title,
		description: (
			<ul className="space-y-2 text-slate-300 sm:space-y-2.5 md:space-y-3">
				{feature.bullets.map((b) => (
					<li key={`${feature.title}-${b}`} className="flex items-start gap-2 sm:gap-3">
						<CircleCheck className="mt-px h-4 w-4 shrink-0 text-[#4ea7fc] sm:mt-[2px] sm:h-5 sm:w-5" aria-hidden />
						<span className="text-xs leading-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{b}</span>
					</li>
				))}
			</ul>
		),
		content: (
			<div className="relative flex h-full w-full items-center justify-center text-white">
				<Image src={IMAGE_BY_INDEX[index % IMAGE_BY_INDEX.length]} alt="Key feature preview" fill className="object-cover" />
			</div>
		),
	}));

	return (
		<StickyScroll
			title="Key Features"
			subtitle="Core capabilities that accelerate proposal writing, research, and coordination with SAGAN."
			content={content}
			contentClassName="bg-transparent"
		/>
	);
}
