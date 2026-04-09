import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/app/components/seo/JsonLd";
import CeramicButton from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import { getInnoSpaceArticleJsonLd } from "@/app/lib/structured-data";

export const metadata: Metadata = {
	title: "INNOspace Masters 2025 — SPAIDER",
	description: "SPAIDER secured 2nd place at INNOspace Masters 2025 in the OHB Challenge — AI agents for aerospace operations.",
};

const published = "September 2025";

export default function InnoSpaceArticle() {
	return (
		<div className="w-full min-w-0 space-y-6 pb-10 sm:space-y-8 sm:pb-12">
			<JsonLd data={getInnoSpaceArticleJsonLd()} />
			<Reveal variant="zoom" threshold={0.25} className="relative aspect-video w-full min-w-0 overflow-hidden rounded-xl border border-border sm:rounded-2xl md:aspect-21/9">
				<Image src="/blog/innospace.png" alt="SPAIDER Space — INNOspace Masters 2025" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px" />
			</Reveal>

			<Reveal as="header" variant="fade-up" threshold={0.35} className="space-y-3 sm:space-y-4">
				<h1 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">We Secured 2nd Place at INNOspace Masters 2025 (And We’re Just Getting Started)</h1>

				<div className="flex flex-wrap items-center gap-2 text-xs text-muted-tertiary font-inter">
					<span>{published}</span>
					<span className="h-1 w-1 rounded-full bg-border" aria-hidden />
					<span>3 min read</span>
				</div>
			</Reveal>

			<article className="space-y-0">
				<Section title="Overview">
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						This summer, our team headed to Bonn, Germany, to show what AI agents can do in mission-grade environments at INNOspace Masters 2025 — one of Europe’s most competitive space innovation arenas, hosted by the German Space Agency at DLR with partners across the sector.
					</p>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">We presented SPAIDER’s approach to intelligent automation for aerospace operations, joining a highly selective field and demonstrating how agentic workflows accelerate real programs.</p>
				</Section>

				<Section title="The Challenge: Reimagining Space Operations">
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						We entered the OHB Challenge — <em>Design the End-to-End Space Solutions of the Future</em>. The brief called for ideas that transform how systems are built, launched, and operated while improving efficiency and cost sustainability.
					</p>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						That’s our focus at SPAIDER SPACE. From Luxembourg, we’re building AI agents that reduce repetitive workload, cut operational friction, and unlock faster iteration across space and defense programs.
					</p>
				</Section>

				<Section title="Sagan — The AI RFP Manager">
					<SubTitle>Why RFPs bottleneck teams</SubTitle>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						RFP cycles in aerospace are complex: deep technical specs, strict compliance, multi-stakeholder reviews, and aggressive timelines. Weeks of engineering time are lost to document assembly and coordination.
					</p>

					<SubTitle>How Sagan helps</SubTitle>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						<strong className="font-medium text-foreground">Sagan</strong> is an AI agent that acts as an RFP Manager. It drafts and updates proposals by combining public sources with internal knowledge bases, producing accurate, structured documents that evolve with your inputs.
					</p>
					<ul className="list-outside list-disc space-y-2 pl-4 text-xs leading-6 text-muted-foreground font-inter sm:pl-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						<li>
							<strong className="font-medium text-foreground">Automated drafting & revision</strong> with traceability.
						</li>
						<li>
							<strong className="font-medium text-foreground">Instant retrieval</strong> of requirements, constraints, and historical data.
						</li>
						<li>
							<strong className="font-medium text-foreground">Lightweight compliance checks</strong> to reduce review churn.
						</li>
					</ul>

					<SubTitle>Built into existing workflows</SubTitle>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Sagan integrates with enterprise collaboration and document systems so engineers can ask questions, request changes, and reference prior proposals without leaving the tools they already use.</p>
				</Section>

				<Section title="Result: 2nd Place in the OHB Challenge">
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">We were awarded 2nd place — a strong signal that the industry is ready for practical, high-impact AI in operations and that agents which understand real work can meaningfully accelerate it.</p>

					<blockquote className="mt-4 rounded-xl border border-border  p-4 sm:mt-6 sm:p-5">
						<p className="text-sm font-semibold leading-snug text-foreground font-manrope sm:text-base lg:text-lg">
							“Securing 2nd place at INNOspace Masters this early in our journey validates what we’ve believed from day one — the aerospace industry is ready for AI agents that actually understand the work. This recognition fuels our commitment to push boundaries and bring intelligent automation to space operations
							worldwide.”
						</p>
						<footer className="mt-3 text-xs text-muted-tertiary font-inter">— Loveneesh Rana, CEO</footer>
					</blockquote>
				</Section>

				<Section title="What’s Next">
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						This recognition opens doors: funding pathways, market-specialist support, and co-innovation with established players. We’re accelerating SPAIDER AI and expanding what agents like Sagan can do across mission operations.
					</p>
					<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
						The sector is mid-transition. Our aim is simple: let teams focus on creativity and breakthrough engineering while agents take on the repetitive, time-consuming tasks — faster, safer, and with better context.
					</p>
				</Section>

				<div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:pt-8">
					<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
						<CeramicButton href="/request-demo" color="rgba(255, 255, 255, 0.06)" ringColor="rgba(255, 255, 255, 0.22)" textColor="var(--color-white)" borderRadius={9999} padding="8px 16px" centered>
							REQUEST A DEMO
						</CeramicButton>
					</div>

					<Link href="/invest" className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/40 font-inter sm:min-h-10 sm:w-auto sm:px-5 sm:text-sm">
						Invest
					</Link>
				</div>
			</article>
		</div>
	);
}

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<Reveal as="section" variant="fade-up" threshold={0.2} className="mt-8 space-y-3 border-t border-border pt-6 first:mt-0 first:border-t-0 first:pt-0 sm:mt-10 sm:space-y-4 sm:pt-8">
			<h2 className="font-manrope text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl">{title}</h2>
			<div className="space-y-3 sm:space-y-4">{children}</div>
		</Reveal>
	);
}

function SubTitle({ children }: { children: ReactNode }) {
	return <h3 className="mt-5 text-xs font-semibold text-foreground font-manrope first:mt-0 sm:mt-6 sm:text-sm lg:text-base">{children}</h3>;
}
