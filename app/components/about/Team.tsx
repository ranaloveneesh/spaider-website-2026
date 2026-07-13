"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/app/components/ui/reveal";
import { cn } from "@/app/lib/utils";

export interface TeamMember {
	id: string;
	name: string;
	role: string;
	image: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
	{
		id: "1",
		name: "Loveneesh Rana",
		role: "FOUNDER, CEO",
		image: "/team/Loveneesh.jpg",
	},
	{
		id: "2",
		name: "Nitish Kumar",
		role: "CTO",
		image: "/team/Nitish.jpeg",
	},
	{
		id: "3",
		name: "Ernest Skrzypczyk",
		role: "LEAD DEPLOYMENT TECHNOLOGIES",
		image: "/team/Ernest.jpg",
	},
	{
		id: "4",
		name: "Sumit Goski",
		role: "LEAD SPACE APPLICATIONS",
		image: "/team/Sumit.jpeg",
	},
	{
		id: "5",
		name: "Md Sohail Ansari",
		role: "SOFTWARE ENGINEER",
		image: "/team/Sohail.jpeg",
	},
];

interface TeamShowcaseProps {
	members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	const col1 = members.filter((_, i) => i % 3 === 0);
	const col2 = members.filter((_, i) => i % 3 === 1);
	const col3 = members.filter((_, i) => i % 3 === 2);

	return (
		<div className="mx-auto flex w-full select-none flex-col items-start gap-8 md:flex-row md:justify-between md:gap-10 lg:gap-14">
			{/* ── Left: photo grid ── */}
			<Reveal variant="fade-right" threshold={0.25} className="no-scrollbar flex w-full gap-3 overflow-x-auto pb-2 sm:gap-4 md:w-auto md:shrink-0 md:gap-5 md:pb-0">
				{/* Column 1 */}
				<div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
					{col1.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[112px] w-[104px] sm:h-[148px] sm:w-[138px] md:h-[190px] md:w-[178px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>

				{/* Column 2 */}
				<div className="mt-[40px] flex flex-col gap-3 sm:mt-[56px] sm:gap-4 md:mt-[80px] md:gap-5">
					{col2.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[124px] w-[116px] sm:h-[164px] sm:w-[155px] md:h-[208px] md:w-[198px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>

				{/* Column 3 */}
				<div className="mt-[19px] flex flex-col gap-3 sm:mt-[26px] sm:gap-4 md:mt-[38px] md:gap-5">
					{col3.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[116px] w-[108px] sm:h-[156px] sm:w-[148px] md:h-[198px] md:w-[186px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>
			</Reveal>

			<Reveal variant="fade-left" threshold={0.25} delayMs={120} className="grid w-full grid-cols-1 gap-4 pt-1 sm:grid-cols-2 md:pt-2 lg:grid-cols-1 lg:max-w-lg">
				{members.map((member, i) => (
					<MemberRow key={member.id} member={member} hoveredId={hoveredId} onHover={setHoveredId} align={i % 2 === 1 ? "end" : "start"} />
				))}
			</Reveal>
		</div>
	);
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({ member, className, hoveredId, onHover }: { member: TeamMember; className: string; hoveredId: string | null; onHover: (id: string | null) => void }) {
	const isActive = hoveredId === member.id;
	const isDimmed = hoveredId !== null && !isActive;

	return (
		<button
			type="button"
			aria-label={`Highlight ${member.name}`}
			className={cn("relative cursor-pointer shrink-0 overflow-hidden rounded-xs transition-opacity duration-400", className, isDimmed ? "opacity-60" : "opacity-100")}
			onMouseEnter={() => onHover(member.id)}
			onMouseLeave={() => onHover(null)}
			onFocus={() => onHover(member.id)}
			onBlur={() => onHover(null)}
			onClick={() => onHover(isActive ? null : member.id)}
		>
			<Image
				src={member.image}
				alt={member.name}
				fill
				sizes="(max-width: 640px) 130px, (max-width: 768px) 150px, 180px"
				className="object-cover transition-[filter] duration-500"
				style={{
					filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
				}}
			/>
		</button>
	);
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({ member, hoveredId, onHover, align = "start" }: { member: TeamMember; hoveredId: string | null; onHover: (id: string | null) => void; align?: "start" | "end" }) {
	const isActive = hoveredId === member.id;
	const isDimmed = hoveredId !== null && !isActive;

	return (
		<button
			type="button"
			aria-label={`Highlight ${member.name}`}
			className={cn("w-fit max-w-full cursor-pointer rounded-xs p-1 text-left transition-opacity duration-300 justify-self-start", align === "end" && "ml-[45%] sm:ml-0 lg:ml-[45%]", isDimmed ? "opacity-50" : "opacity-100")}
			onMouseEnter={() => onHover(member.id)}
			onMouseLeave={() => onHover(null)}
			onFocus={() => onHover(member.id)}
			onBlur={() => onHover(null)}
			onClick={() => onHover(isActive ? null : member.id)}
		>
			{/* Name */}
			<div className="flex items-center gap-2.5">
				<span className={cn("h-3 w-4 shrink-0 rounded-[5px] transition-all duration-300", isActive ? "bg-foreground w-5" : "bg-foreground/25")} />
				<span className={cn("text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]", isActive ? "text-foreground" : "text-spx-mute")}>{member.name}</span>
			</div>

			{/* Role */}
			<p className="mt-1.5 pl-[27px] font-geist-mono text-[0.6rem] uppercase tracking-[0.2em] text-spx-mute md:text-[0.65rem]">{member.role}</p>
		</button>
	);
}
