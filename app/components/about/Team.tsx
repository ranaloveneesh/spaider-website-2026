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
	social?: {
		twitter?: string;
		linkedin?: string;
		instagram?: string;
		behance?: string;
	};
}

const DEFAULT_MEMBERS: TeamMember[] = [
	{
		id: "1",
		name: "Chadrack",
		role: "director of photography",
		image: "https://media.licdn.com/dms/image/v2/D4D03AQFnmLdpZW78yA/profile-displayphoto-scale_200_200/B4DZvM8NB2JMAY-/0/1768669895649?e=2147483647&v=beta&t=5VGAB-2gYupLNaHvJHECollR25THd-3oR5wngGlQiY4",
		social: { twitter: "#", linkedin: "#", behance: "#" },
	},
	{
		id: "2",
		name: "Mak VieSAinte",
		role: "FOUNDER",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vnSxNNVGZV2MXRjlGELl-NgLl5kXdpDR6A&s",
		social: { twitter: "#", linkedin: "#" },
	},
	{
		id: "3",
		name: "Osiris Balonga",
		role: "LEAD FRONT-END",
		image: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
		social: { twitter: "#", linkedin: "#" },
	},
	{
		id: "4",
		name: "Jacques",
		role: "PRODUCT OWNER",
		image: "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
		social: { linkedin: "#" },
	},
	{
		id: "5",
		name: "Riche Makso",
		role: "CTO - PRODUCT DESIGNER",
		image: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
		social: { twitter: "#", linkedin: "#" },
	},
	{
		id: "6",
		name: "Jemima",
		role: "MAKE-UP ARTISTE",
		image: "https://i.pravatar.cc/400?img=16",
		social: { instagram: "#" } as TeamMember["social"],
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
			<Reveal variant="fade-right" threshold={0.25} className="no-scrollbar flex w-full gap-2 overflow-x-auto pb-2 sm:gap-3 md:w-auto md:shrink-0 md:pb-0">
				{/* Column 1 */}
				<div className="flex flex-col gap-2 sm:gap-3">
					{col1.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[96px] w-[90px] sm:h-[128px] sm:w-[120px] md:h-[165px] md:w-[155px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>

				{/* Column 2 */}
				<div className="mt-[34px] flex flex-col gap-2 sm:mt-[48px] sm:gap-3 md:mt-[68px]">
					{col2.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[108px] w-[102px] sm:h-[143px] sm:w-[135px] md:h-[182px] md:w-[172px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>

				{/* Column 3 */}
				<div className="mt-[16px] flex flex-col gap-2 sm:mt-[22px] sm:gap-3 md:mt-[32px]">
					{col3.map((member) => (
						<PhotoCard key={member.id} member={member} className="h-[100px] w-[94px] sm:h-[136px] sm:w-[128px] md:h-[172px] md:w-[162px]" hoveredId={hoveredId} onHover={setHoveredId} />
					))}
				</div>
			</Reveal>

			<Reveal variant="fade-left" threshold={0.25} delayMs={120} className="grid w-full grid-cols-1 gap-4 pt-1 sm:grid-cols-2 md:pt-2 lg:grid-cols-1 lg:max-w-sm">
				{members.map((member) => (
					<MemberRow key={member.id} member={member} hoveredId={hoveredId} onHover={setHoveredId} />
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
			className={cn("relative cursor-pointer shrink-0 overflow-hidden rounded-xl transition-opacity duration-400", className, isDimmed ? "opacity-60" : "opacity-100")}
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

function MemberRow({ member, hoveredId, onHover }: { member: TeamMember; hoveredId: string | null; onHover: (id: string | null) => void }) {
	const isActive = hoveredId === member.id;
	const isDimmed = hoveredId !== null && !isActive;

	return (
		<button
			type="button"
			aria-label={`Highlight ${member.name}`}
			className={cn("cursor-pointer rounded-lg p-1 transition-opacity duration-300 text-left", isDimmed ? "opacity-50" : "opacity-100")}
			onMouseEnter={() => onHover(member.id)}
			onMouseLeave={() => onHover(null)}
			onFocus={() => onHover(member.id)}
			onBlur={() => onHover(null)}
			onClick={() => onHover(isActive ? null : member.id)}
		>
			{/* Name */}
			<div className="flex items-center gap-2.5">
				<span className={cn("h-3 w-4 shrink-0 rounded-[5px] transition-all duration-300", isActive ? "bg-foreground w-5" : "bg-foreground/25")} />
				<span className={cn("text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]", isActive ? "text-foreground" : "text-muted")}>{member.name}</span>
			</div>

			{/* Role */}
			<p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{member.role}</p>
		</button>
	);
}
