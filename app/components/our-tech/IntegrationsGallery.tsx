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
		iconScale: 1,
	},
	{ name: "STK", src: "/integrations/stk.png", kind: "icon", iconScale: 1 },
	{ name: "GMAT", src: "/integrations/gmat.png", kind: "icon", iconScale: 1.1 },
	{
		name: "ANSYS",
		src: "/integrations/ansys.svg",
		kind: "wordmark",
		iconScale: 0.95,
	},
	{
		name: "MATLAB",
		src: "/integrations/matlab.svg",
		kind: "wordmark",
		iconScale: 1.1,
	},
	{
		name: "Microsoft Teams",
		src: "/integrations/team.svg",
		kind: "icon",
		iconScale: 1,
	},
	{
		name: "Outlook",
		src: "/integrations/outlook.svg",
		kind: "icon",
		iconScale: 1.1,
	},
	{
		name: "NASA",
		src: "/integrations/nasa.png",
		kind: "icon",
		iconScale: 1.05,
	},
	{ name: "Git", src: "/integrations/git.svg", kind: "icon", iconScale: 1 },
	{
		name: "Google Scholar",
		src: "/integrations/scholar.svg",
		kind: "icon",
		iconScale: 1,
	},
	{
		name: "arXiv",
		src: "/integrations/arxiv.svg",
		kind: "wordmark",
		iconScale: 1.0,
	},
	{
		name: "MCP",
		src: "/integrations/mcp.svg",
		kind: "wordmark",
		iconScale: 1.0,
	},
	{
		name: "MongoDB",
		src: "/integrations/mongo.svg",
		kind: "wordmark",
		iconScale: 1.06,
	},
	{
		name: "Word",
		src: "/integrations/word.svg",
		kind: "icon",
		iconScale: 1.05,
	},
	{ name: "CSV", src: "/integrations/csv.svg", kind: "icon", iconScale: 1.05 },
	{
		name: "JSON",
		src: "/integrations/json.png",
		kind: "icon",
		iconScale: 1.05,
	},
	{ name: "CAD", src: "/integrations/cad.png", kind: "icon", iconScale: 1.05 },
	{
		name: "Excel",
		src: "/integrations/excel.svg",
		kind: "icon",
		iconScale: 1.05,
	},
	{ name: "PDF", src: "/integrations/pdf.png", kind: "icon", iconScale: 1.05 },
];

type MarqueeIntegration = Integration & { dup: 0 | 1 };

const MARQUEE_LOGOS: MarqueeIntegration[] = [
	...LOGOS.map((item) => ({ ...item, dup: 0 as const })),
	...LOGOS.map((item) => ({ ...item, dup: 1 as const })),
];

function LogoItem({ item }: { item: Integration }) {
	const [broken, setBroken] = useState(false);
	const kind = item.kind ?? "wordmark";
	const scale = item.iconScale ?? (kind === "icon" ? 1.08 : 1.0);

	return (
		<div className="flex w-[132px] shrink-0 items-center justify-center sm:w-[160px] md:w-[180px] lg:w-[200px]" title={item.name}>
			{!broken ? (
				<div
					className="flex items-center justify-center"
					style={{
						transform: `scale(${scale})`,
						transformOrigin: "center",
					}}
				>
					<Image src={item.src} alt={item.name} width={360} height={120} className="h-9 w-auto object-contain sm:h-10 md:h-12 lg:h-14 xl:h-16" onError={() => setBroken(true)} />
				</div>
			) : (
				<div className="text-xs font-semibold text-muted sm:text-sm">{item.name}</div>
			)}
		</div>
	);
}

export default function IntegrationsGallery() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
			<h2 className="mb-6 font-montserrat text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">Seamlessly integrate with your workflow</h2>

			<section className="relative mx-auto w-full min-w-0 overflow-hidden" aria-label="Integrations logo carousel">
				<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background to-transparent sm:w-16 lg:w-20" />
				<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background to-transparent sm:w-16 lg:w-20" />
				<div className="integrations-marquee-track flex w-max items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
					{MARQUEE_LOGOS.map((item) => (
						<LogoItem key={`${item.name}-${item.dup}`} item={item} />
					))}
				</div>

				<style jsx>{`
          @keyframes integrationsMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .integrations-marquee-track {
            animation: integrationsMarquee 75s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .integrations-marquee-track {
              animation: none;
            }
          }
        `}</style>
			</section>
		</section>
	);
}
