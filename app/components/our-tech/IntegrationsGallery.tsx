"use client";
import Image from "next/image";
import { useState } from "react";

/* ============ Types & Data ============ */
type Kind = "icon" | "wordmark";
type Integration = {
	name: string;
	src: string;
	href?: string;
	kind?: Kind;
	iconScale?: number; // optical tweak per logo (1 = base)
};

const LOGOS: Integration[] = [
	{
		name: "Python",
		src: "/integrations/python.svg",
		kind: "wordmark",
		iconScale: 0.8,
	},
	{ name: "STK", src: "/integrations/stk.png", kind: "icon", iconScale: 0.8 },
	{ name: "GMAT", src: "/integrations/gmat.png", kind: "icon", iconScale: 1.2 },
	{
		name: "ANSYS",
		src: "/integrations/ansys.svg",
		kind: "wordmark",
		iconScale: 0.7,
	},
	{
		name: "MATLAB",
		src: "/integrations/matlab.svg",
		kind: "wordmark",
		iconScale: 1.0,
	},
	{
		name: "Microsoft Teams",
		src: "/integrations/team.svg",
		kind: "icon",
		iconScale: 0.9,
	},
	{
		name: "Outlook",
		src: "/integrations/outlook.svg",
		kind: "icon",
		iconScale: 0.8,
	},
	{
		name: "NASA",
		src: "/integrations/nasa.png",
		kind: "icon",
		iconScale: 0.9,
	},
	{ name: "Git", src: "/integrations/git.svg", kind: "icon", iconScale: 1 },
	{
		name: "Google Scholar",
		src: "/integrations/scholar.svg",
		kind: "icon",
		iconScale: 0.8,
	},
	{
		name: "arXiv",
		src: "/integrations/arxiv.svg",
		kind: "wordmark",
		iconScale: 0.8,
	},
	{
		name: "MCP",
		src: "/integrations/mcp.svg",
		kind: "wordmark",
		iconScale: 0.8,
	},
	{
		name: "MongoDB",
		src: "/integrations/mongo.svg",
		kind: "wordmark",
		iconScale: 1,
	},
	{
		name: "Word",
		src: "/integrations/word.svg",
		kind: "icon",
		iconScale: 0.9,
	},
	{ name: "CSV", src: "/integrations/csv.svg", kind: "icon", iconScale: 0.8 },
	{
		name: "JSON",
		src: "/integrations/json.png",
		kind: "icon",
		iconScale: 1,
	},
	{ name: "CAD", src: "/integrations/cad.png", kind: "icon", iconScale: 0.9 },
	{
		name: "Excel",
		src: "/integrations/excel.svg",
		kind: "icon",
		iconScale: 0.8,
	},
	{ name: "PDF", src: "/integrations/pdf.png", kind: "icon", iconScale: 0.8 },
];

const ROW1 = LOGOS.slice(0, 10);
const ROW2 = LOGOS.slice(10);

type MarqueeIntegration = Integration & { dup: 0 | 1 };

function makeRow(logos: Integration[]): MarqueeIntegration[] {
	return [
		...logos.map((item) => ({ ...item, dup: 0 as const })),
		...logos.map((item) => ({ ...item, dup: 1 as const })),
	];
}

const MARQUEE_ROW1 = makeRow(ROW1);
const MARQUEE_ROW2 = makeRow(ROW2);

function LogoItem({ item }: { item: Integration }) {
	const [broken, setBroken] = useState(false);
	const kind = item.kind ?? "wordmark";
	const scale = item.iconScale ?? (kind === "icon" ? 1.08 : 1.0);

	return (
		<div
			className="flex w-[96px] shrink-0 items-center justify-center sm:w-[132px] md:w-[160px] lg:w-[200px]"
			title={item.name}
		>
			{!broken ? (
				<div
					className="flex items-center justify-center"
					style={{
						transform: `scale(${scale})`,
						transformOrigin: "center",
					}}
				>
					<Image
						src={item.src}
						alt={item.name}
						width={360}
						height={120}
						className="h-6 w-auto object-contain sm:h-8 md:h-10 lg:h-12"
						onError={() => setBroken(true)}
					/>
				</div>
			) : (
				<div className="text-xs font-semibold text-muted sm:text-sm">
					{item.name}
				</div>
			)}
		</div>
	);
}

export default function IntegrationsGallery() {
	return (
		<section className="mt-8 w-full min-w-0 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
			<h2 className="mb-6 font-outfit text-3xl font-medium tracking-tight text-foreground sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl lg:mb-12">
				Seamlessly integrate with your workflow
			</h2>

			<section
				className="mx-auto w-full min-w-0 space-y-4 overflow-hidden sm:space-y-16"
				aria-label="Integrations logo carousel"
				style={{
					WebkitMaskImage:
						"linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
					maskImage:
						"linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
				}}
			>
				{/* Row 1 - scrolls left */}
				<div className="integrations-marquee-left flex w-max items-center gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-14 xl:gap-x-20">
					{MARQUEE_ROW1.map((item) => (
						<LogoItem key={`r1-${item.name}-${item.dup}`} item={item} />
					))}
				</div>

				{/* Row 2 - scrolls right (same keyframe, reversed) */}
				<div className="integrations-marquee-right flex w-max items-center gap-x-4 sm:mt-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-14 xl:gap-x-20">
					{MARQUEE_ROW2.map((item) => (
						<LogoItem key={`r2-${item.name}-${item.dup}`} item={item} />
					))}
				</div>

				<style jsx>{`
          @keyframes integrationsMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .integrations-marquee-left {
            animation: integrationsMarquee 60s linear infinite;
            will-change: transform;
          }
          .integrations-marquee-right {
            animation: integrationsMarquee 50s linear infinite reverse;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .integrations-marquee-left,
            .integrations-marquee-right {
              animation: none;
            }
          }
        `}</style>
			</section>
		</section>
	);
}
