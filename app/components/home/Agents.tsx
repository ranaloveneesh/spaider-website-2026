"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

// ─── Animation constants ──────────────────────────────────────────────────────
const EASE = [0.25, 1, 0.5, 1] as const;

/** Section header: h2 then p stagger in */
const headerContainer = {
	hidden: {},
	show: { transition: { staggerChildren: 0.09 } },
};
const headerItem = {
	hidden: { opacity: 0, y: 18 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Each product row: text and image columns stagger in from opposite sides */
const productRow = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};
/** custom = the x offset direction; each column receives its own custom value */
const columnSlide = {
	hidden: (x: number) => ({ opacity: 0, x }),
	show: () => ({
		opacity: 1,
		x: 0,
		transition: { duration: 0.55, ease: EASE },
	}),
};
// ─────────────────────────────────────────────────────────────────────────────

function FeatureRow({ index, children }: { index: number; children: React.ReactNode }) {
	return (
		<li className="flex items-baseline gap-4 border-b border-spx-rule py-3">
			<span aria-hidden="true" className="spx-index">
				{String(index + 1).padStart(2, "0")}
			</span>
			<span className="text-sm leading-6 text-spx-ink-2 sm:text-[0.9375rem]">{children}</span>
		</li>
	);
}

const PRODUCTS = [
	{
		number: "01",
		tag: "Knowledge Platform",
		heading: "AI Foundations",
		description: "Supercharge your everyday company knowledge work with AI. Make your internal and approved external knowledge sources AI-ready - securely, on your infrastructure.",
		bullets: ["Make your company's internal and approved external knowledge sources AI ready.", "Automate daily documentation (reports, minute-of-meeting etc) tasks.", "Search, chat, and retrieve with traceable context grounded in your data.", "Enterprise co-work powered by domain-expert AI models."],
		image: "/agents/ai-foundations/12.png",
		href: "/ai-foundations",
		comingSoon: false,
	},
	{
		number: "02",
		tag: "Proposal Agent",
		heading: "SAGAN",
		description: "Your proposal and RFP co-pilot for faster response time. Draft winning bids using your own past materials, templates, and source-backed institutional knowledge.",
		bullets: ["Read RFPs and extract requirements automatically.", "Draft responses using your templates and past materials.", "Reuse internal knowledge with source-backed outputs.", "Support reviews, planning, and submission readiness."],
		image: "/agents/ai-foundations/12.png",
		href: "/agents/sagan",
		comingSoon: false,
	},
] as const;

function ProductSection({ tag, heading, description, bullets, image, href, comingSoon, flip }: (typeof PRODUCTS)[number] & { flip: boolean }) {
	return (
		<motion.div className="border-t border-white/[0.07] py-14 sm:py-18 md:py-20 lg:py-24" variants={productRow} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
			<div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20`}>
				{/* ── Text column - slides in from its natural side ── */}
				<motion.div className={`flex flex-col ${flip ? "md:order-2" : ""}`} variants={columnSlide} custom={flip ? 20 : -20}>
					{/* Eyebrow */}
					<div className="mb-5 flex flex-wrap items-center gap-3">
						<span className="font-geist-mono text-[0.7rem] uppercase tracking-[0.18em] text-spx-cyan">{tag}</span>
						{comingSoon && <span className="rounded-xs border border-spx-rule-2 px-2 py-0.5 font-geist-mono text-[0.5625rem] uppercase tracking-[0.06em] text-spx-mute">Coming Soon</span>}
					</div>

					{/* Heading */}
					<h2 className="max-w-[20ch] font-outfit text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground">{heading}</h2>

					{/* Description */}
					<p className="mt-4 max-w-[44ch] text-base leading-[1.65] text-spx-ink-2">{description}</p>

					{/* Feature list */}
					<ul className="mt-7 border-t border-spx-rule">
						{bullets.map((b, i) => (
							<FeatureRow key={b} index={i}>
								{b}
							</FeatureRow>
						))}
					</ul>

					{/* CTA */}
					{href && !comingSoon && (
						<div className="mt-8">
							<Button asChild variant="solid">
								<Link href={href}>Explore {heading}</Link>
							</Button>
						</div>
					)}
				</motion.div>

				{/* ── Media column - slides in from the opposite side ── */}
				<motion.div className={flip ? "md:order-1" : ""} variants={columnSlide} custom={flip ? -20 : 20}>
					{/*
					  Resend-style gradient border:
					  - 1px padding on the outer wrapper exposes the gradient background as a border
					  - Gradient runs top-left → bottom-right: bright at top, fades to near-invisible at bottom
					  - box-shadow layers a depth shadow + faint accent glow
					  - On hover the accent glow brightens, reinforcing the "lit" feel
					*/}
					<motion.div
						className="relative rounded-[14px] p-px"
						style={{
							background: "linear-gradient(155deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.015) 100%)",
							boxShadow: "0 4px 40px rgba(0,0,0,0.55), 0 0 80px rgba(89,232,245,0.05)",
						}}
						whileHover={{
							scale: 1.015,
							boxShadow: "0 6px 56px rgba(0,0,0,0.72), 0 0 120px rgba(89,232,245,0.13)",
							transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
						}}
					>
						{/* Inner: overflow-hidden clips the Image corners cleanly to the inner radius */}
						<div className="relative overflow-hidden rounded-[13px] bg-[#0c0c0d]">
							{/* Top-edge highlight - the bright terminus of the gradient border */}
							<div
								aria-hidden
								className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
								style={{
									background: "linear-gradient(90deg, transparent 8%, rgba(255,255,255,0.22) 50%, transparent 92%)",
								}}
							/>
							<div className="relative aspect-video w-full">
								<Image src={image} alt={`${heading} product preview`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default function Agents() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			{/* Section header - h2 then subtext stagger in on first pixel */}
			<motion.div className="mb-6 sm:mb-8" variants={headerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
				<motion.span variants={headerItem} className="spx-eyebrow mb-8">
					The product suite
				</motion.span>
				<motion.h2 variants={headerItem} className="spx-heading text-foreground">
					Explore our <span className="spx-grad-text">products</span>
				</motion.h2>
				<motion.p variants={headerItem} className="spx-lede mt-3">
					Domain-specific assistants for the workflows aerospace teams actually run.
				</motion.p>
			</motion.div>

			{/* Product sections */}
			{PRODUCTS.map((product, i) => (
				<ProductSection key={product.heading} {...product} flip={i % 2 === 1} />
			))}
		</section>
	);
}
