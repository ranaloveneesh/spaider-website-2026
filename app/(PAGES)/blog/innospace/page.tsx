import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { JsonLd } from "@/app/components/seo/JsonLd";
import CeramicButton from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import { getInnoSpaceArticleJsonLd } from "@/app/lib/structured-data";

export const metadata: Metadata = {
	title: "INNOspace Masters 2025",
	description: "SPAIDER secured 2nd place at INNOspace Masters 2025 in the OHB Challenge - AI agents for aerospace operations.",
	alternates: { canonical: "https://www.spaiderspace.com/blog/innospace" },
};

const published = "September 2025";

export default function InnoSpaceArticle() {
	return (
		<div className="w-screen min-w-0 pb-16 space-y-6 sm:pb-20 sm:space-y-8 md:pb-24 md:space-y-10 max-w-7xl mx-auto">
			<JsonLd data={getInnoSpaceArticleJsonLd()} />

			{/* Hero image - full width, cinematic ratio on desktop */}
			<Reveal variant="zoom" threshold={0.25} className="relative aspect-video w-full min-w-0 overflow-hidden rounded-xl border border-border-card sm:rounded-2xl md:aspect-21/9">
				<Image src="/blog/innospace.png" alt="SPAIDER Space - INNOspace Masters 2025" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px" />
			</Reveal>

			{/* Constrain reading content to optimal line length on wide screens */}
			<div className="w-full">
				{/* Title + meta */}
				<Reveal as="header" variant="fade-up" threshold={0.35} className="space-y-3 sm:space-y-4">
					<h1 className="font-outfit text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">We Secured 2nd Place at INNOspace Masters 2025 (And We&apos;re Just Getting Started)</h1>
					<div className="flex flex-wrap items-center gap-2 text-sm text-muted">
						<span>{published}</span>
						<span className="h-1 w-1 rounded-full bg-border" aria-hidden />
						<span>3 min read</span>
					</div>
				</Reveal>

				<article className="mt-6 space-y-0 sm:mt-8">
					<Section title="Overview">
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
							This summer, our team headed to Bonn, Germany, to show what AI agents can do in mission-grade environments at INNOspace Masters 2025 - one of Europe's most competitive space innovation arenas, hosted by the German Space Agency at DLR with partners across the sector.
						</p>
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">We presented SPAIDER's approach to intelligent automation for aerospace operations, joining a highly selective field and demonstrating how agentic workflows accelerate real programs.</p>
					</Section>

					<Section title="The Challenge: Reimagining Space Operations">
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
							We entered the OHB Challenge - <em>Design the End-to-End Space Solutions of the Future</em>. The brief called for ideas that transform how systems are built, launched, and operated while improving efficiency and cost sustainability.
						</p>
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">That's our focus at SPAIDER SPACE. From Luxembourg, we're building AI agents that reduce repetitive workload, cut operational friction, and unlock faster iteration across space and defense programs.</p>
					</Section>

					<Section title="Sagan - The AI RFP Manager">
						<SubTitle>Why RFPs bottleneck teams</SubTitle>
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">RFP cycles in aerospace are complex: deep technical specs, strict compliance, multi-stakeholder reviews, and aggressive timelines. Weeks of engineering time are lost to document assembly and coordination.</p>

						<SubTitle>How Sagan helps</SubTitle>
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
							<strong className="font-medium text-foreground">Sagan</strong> is an AI agent that acts as an RFP Manager. It drafts and updates proposals by combining public sources with internal knowledge bases, producing accurate, structured documents that evolve with your inputs.
						</p>
						<ul className="list-outside list-disc space-y-2 pl-4 text-sm leading-7 text-muted sm:pl-5 sm:text-base sm:leading-8">
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
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">Sagan integrates with enterprise collaboration and document systems so engineers can ask questions, request changes, and reference prior proposals without leaving the tools they already use.</p>
					</Section>

					<Section title="Result: 2nd Place in the OHB Challenge">
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">We were awarded 2nd place - a strong signal that the industry is ready for practical, high-impact AI in operations and that agents which understand real work can meaningfully accelerate it.</p>

						<blockquote className="mt-4 rounded-xl border border-border-card bg-card p-4 sm:mt-6 sm:p-5 lg:p-6">
							<p className="font-outfit text-base font-medium leading-snug text-foreground sm:text-lg">
								&ldquo;Securing 2nd place at INNOspace Masters this early in our journey validates what we&apos;ve believed from day one - the aerospace industry is ready for AI agents that actually understand the work. This recognition fuels our commitment to push boundaries and bring intelligent automation to space
								operations worldwide.&rdquo;
							</p>
							<footer className="mt-3 text-sm text-muted">- Loveneesh Rana, CEO</footer>
						</blockquote>
					</Section>

					<Section title="What's Next">
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">This recognition opens doors: funding pathways, market-specialist support, and co-innovation with established players. We're accelerating SPAIDER AI and expanding what agents like Sagan can do across mission operations.</p>
						<p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">The sector is mid-transition. Our aim is simple: let teams focus on creativity and breakthrough engineering while agents take on the repetitive, time-consuming tasks - faster, safer, and with better context.</p>
					</Section>

					{/* CTA row */}
					<div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:pt-8">
						<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
							<CeramicButton href="/request-demo" color="#ffffff" textColor="#0a0a0b" ringColor="rgba(255,255,255,0.22)" borderRadius={8} padding="11px 24px" fontSize={13} centered>
								Request a Demo
							</CeramicButton>
						</div>
						<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
							<CeramicButton href="/invest" color="rgba(255,255,255,0.05)" textColor="#ffffff" ringColor="rgba(255,255,255,0.14)" borderRadius={8} padding="11px 24px" fontSize={13} centered>
								Invest
							</CeramicButton>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<Reveal as="section" variant="fade-up" threshold={0.2} className="mt-8 space-y-3 border-t border-border pt-6 first:mt-0 first:border-t-0 first:pt-0 sm:mt-10 sm:space-y-4 sm:pt-8 md:mt-12 md:pt-10">
			<h2 className="font-outfit text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-2xl">{title}</h2>
			<div className="space-y-3 sm:space-y-4">{children}</div>
		</Reveal>
	);
}

function SubTitle({ children }: { children: ReactNode }) {
	return <h3 className="mt-4 text-sm font-medium text-foreground first:mt-0 sm:mt-5 sm:text-base">{children}</h3>;
}
