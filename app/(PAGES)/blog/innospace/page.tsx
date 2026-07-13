import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { Button } from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import { getInnoSpaceArticleJsonLd } from "@/app/lib/structured-data";

export const metadata: Metadata = {
	title: "INNOspace Masters 2025",
	description: "SPAIDER secured 2nd place at INNOspace Masters 2025 in the OHB Challenge: AI agents for aerospace operations.",
	alternates: { canonical: "https://www.spaiderspace.com/blog/innospace" },
};

const published = "September 2025";

function ArticleRow({ index, title, children }: { index: string; title: string; children: ReactNode }) {
	return (
		<Reveal variant="fade-up" threshold={0.1} className="grid grid-cols-1 gap-3 border-b border-spx-rule py-7 sm:py-8 min-[760px]:grid-cols-[280px_1fr] min-[760px]:gap-[1.875rem]">
			<div>
				<span className="spx-index block">{index}</span>
				<h2 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.01em] text-foreground">{title}</h2>
			</div>
			<div className="max-w-[62ch] space-y-4 text-[1.02rem] leading-[1.65] text-spx-mute">{children}</div>
		</Reveal>
	);
}

function SubTitle({ children }: { children: ReactNode }) {
	return <h3 className="pt-2 text-[1rem] font-medium text-foreground first:pt-0">{children}</h3>;
}

export default function InnoSpaceArticle() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<JsonLd data={getInnoSpaceArticleJsonLd()} />

				{/* ── Header ── */}
				<Reveal as="header" variant="fade-up" threshold={0.1} className="pt-6 sm:pt-10">
					<h1 className="max-w-[24ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
						We secured 2nd place at INNOspace Masters 2025. <span className="spx-grad-text">And we&apos;re just getting started.</span>
					</h1>
					<p className="spx-label mt-7">{published} · 3 min read</p>
				</Reveal>

				{/* ── Hero image ── */}
				<Reveal variant="zoom" threshold={0.25} className="relative mt-10 aspect-video w-full min-w-0 overflow-hidden rounded-xs border border-spx-rule-2 shadow-2xl sm:mt-12 md:aspect-21/9">
					<Image src="/blog/innospace.png" alt="SPAIDER Space - INNOspace Masters 2025" fill priority className="object-cover" sizes="100vw" />
				</Reveal>

				{/* ── Article ── */}
				<article className="mt-[calc(var(--spx-section-gap)*0.5)]">
					<ArticleRow index="01" title="Overview">
						<p>This summer, our team headed to Bonn, Germany, to show what AI agents can do in mission-grade environments at INNOspace Masters 2025, one of Europe&apos;s most competitive space innovation arenas, hosted by the German Space Agency at DLR with partners across the sector.</p>
						<p>We presented SPAIDER&apos;s approach to intelligent automation for aerospace operations, joining a highly selective field and demonstrating how agentic workflows accelerate real programs.</p>
					</ArticleRow>

					<ArticleRow index="02" title="The challenge: reimagining space operations">
						<p>
							We entered the OHB Challenge: <em>Design the End-to-End Space Solutions of the Future</em>. The brief called for ideas that transform how systems are built, launched, and operated while improving efficiency and cost sustainability.
						</p>
						<p>That&apos;s our focus at SPAIDER SPACE. From Luxembourg, we&apos;re building AI agents that reduce repetitive workload, cut operational friction, and unlock faster iteration across space and defense programs.</p>
					</ArticleRow>

					<ArticleRow index="03" title="Sagan, the AI RFP Manager">
						<SubTitle>Why RFPs bottleneck teams</SubTitle>
						<p>RFP cycles in aerospace are complex: deep technical specs, strict compliance, multi-stakeholder reviews, and aggressive timelines. Weeks of engineering time are lost to document assembly and coordination.</p>

						<SubTitle>How Sagan helps</SubTitle>
						<p>
							<strong className="font-medium text-spx-ink-2">Sagan</strong> is an AI agent that acts as an RFP Manager. It drafts and updates proposals by combining public sources with internal knowledge bases, producing accurate, structured documents that evolve with your inputs.
						</p>
						<ul className="space-y-3">
							<li>
								<span className="font-medium text-spx-ink-2">Automated drafting and revision</span> with traceability.
							</li>
							<li>
								<span className="font-medium text-spx-ink-2">Instant retrieval</span> of requirements, constraints, and historical data.
							</li>
							<li>
								<span className="font-medium text-spx-ink-2">Lightweight compliance checks</span> to reduce review churn.
							</li>
						</ul>

						<SubTitle>Built into existing workflows</SubTitle>
						<p>Sagan integrates with enterprise collaboration and document systems so engineers can ask questions, request changes, and reference prior proposals without leaving the tools they already use.</p>
					</ArticleRow>

					<ArticleRow index="04" title="Result: 2nd place in the OHB Challenge">
						<p>We were awarded 2nd place. It is a strong signal that the industry is ready for practical, high-impact AI in operations, and that agents which understand real work can meaningfully accelerate it.</p>

						<blockquote className="rounded-xs border border-spx-rule bg-spx-void-2 p-6 sm:p-8">
							<p className="font-outfit text-[clamp(1.05rem,1.6vw,1.3rem)] font-medium leading-[1.5] text-spx-ink-2">
								&ldquo;Securing 2nd place at INNOspace Masters this early in our journey validates what we&apos;ve believed from day one: the aerospace industry is ready for AI agents that actually understand the work. This recognition fuels our commitment to push boundaries and bring intelligent automation to space
								operations worldwide.&rdquo;
							</p>
							<footer className="spx-label mt-5">Loveneesh Rana, CEO</footer>
						</blockquote>
					</ArticleRow>

					<ArticleRow index="05" title="What's next">
						<p>This recognition opens doors: funding pathways, market-specialist support, and co-innovation with established players. We&apos;re accelerating SPAIDER AI and expanding what agents like Sagan can do across mission operations.</p>
						<p>The sector is mid-transition. Our aim is simple: let teams focus on creativity and breakthrough engineering while agents take on the repetitive, time-consuming tasks. Faster, safer, and with better context.</p>
					</ArticleRow>

					{/* ── CTA row ── */}
					<Reveal variant="fade-up" threshold={0.25} className="mt-12 flex flex-wrap items-center gap-3 sm:mt-14">
						<Button asChild variant="solid">
							<Link href="/request-demo">Request a Demo</Link>
						</Button>
						<Button asChild variant="line">
							<Link href="/invest">Invest</Link>
						</Button>
					</Reveal>
				</article>
			</div>
		</div>
	);
}
