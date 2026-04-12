"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import CeramicButton from "@/app/components/ui/button";

function CheckItem({ children }: { children: React.ReactNode }) {
	return (
		<li className="flex items-start gap-2.5">
			<Check
				className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
				aria-hidden
				strokeWidth={2.5}
			/>
			<span>{children}</span>
		</li>
	);
}

const PRODUCTS = [
	{
		number: "01",
		tag: "Knowledge Platform",
		heading: "AI Foundations",
		description:
			"Supercharge your everyday company knowledge work with AI. Make your internal and approved external knowledge sources AI-ready - securely, on your infrastructure.",
		bullets: [
			"Make your company's internal and approved external knowledge sources AI ready.",
			"Automate daily documentation (reports, minute-of-meeting etc) tasks.",
			"Search, chat, and retrieve with traceable context grounded in your data.",
			"Enterprise co-work powered by domain-expert AI models.",
		],
		image: "/agents/kepler/1.png",
		href: "/ai-foundations",
		comingSoon: false,
	},
	{
		number: "02",
		tag: "Proposal Agent",
		heading: "SAGAN",
		description:
			"Your proposal and RFP co-pilot for faster response time. Draft winning bids using your own past materials, templates, and source-backed institutional knowledge.",
		bullets: [
			"Read RFPs and extract requirements automatically.",
			"Draft responses using your templates and past materials.",
			"Reuse internal knowledge with source-backed outputs.",
			"Support reviews, planning, and submission readiness.",
		],
		image: "/agents/kepler/1.png",
		href: "/agents/sagan",
		comingSoon: false,
	},
	{
		number: "03",
		tag: "Mission Operations",
		heading: "KEPLER",
		description:
			"A mission operations co-pilot for monitored, human-in-the-loop workflows. Query procedures, triage anomalies, and stay in control - with AI as your co-pilot, not your autopilot.",
		bullets: [
			"Query procedures, logs, and mission knowledge faster.",
			"Assist anomaly triage and operational review.",
			"Support teams with context-aware operational guidance.",
			"Keep humans in control for critical decisions.",
		],
		image: "/agents/kepler/1.png",
		href: null,
		comingSoon: true,
	},
] as const;

function ProductSection({
	number,
	tag,
	heading,
	description,
	bullets,
	image,
	href,
	comingSoon,
	flip,
}: (typeof PRODUCTS)[number] & { flip: boolean }) {
	return (
		<div className="border-t border-white/[0.07] py-14 sm:py-18 md:py-20 lg:py-24">
			<div className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20`}>
				{/* ── Text column ── */}
				<div className={`flex flex-col ${flip ? "md:order-2" : ""}`}>
					{/* Eyebrow */}
					<div className="mb-5 flex flex-wrap items-center gap-3">
						<span className="font-montserrat text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
							{tag}
						</span>
						{comingSoon && (
							<span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 font-montserrat text-[10px] font-medium tracking-wide text-muted">
								Coming Soon
							</span>
						)}
					</div>

					{/* Heading */}
					<h2 className="font-outfit text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
						{heading}
					</h2>

					{/* Description */}
					<p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
						{description}
					</p>

					{/* Feature list */}
					<ul className="mt-6 space-y-3 text-sm text-foreground/80 sm:text-[0.9375rem]">
						{bullets.map((b) => (
							<CheckItem key={b}>{b}</CheckItem>
						))}
					</ul>

					{/* CTA */}
					{href && !comingSoon && (
						<div className="mt-8">
							<CeramicButton
								href={href}
								color="rgba(255,255,255,0.05)"
								textColor="#ffffff"
								ringColor="rgba(255,255,255,0.14)"
								borderRadius={8}
								padding="10px 22px"
								fontSize={12}
							>
								Explore {heading}
							</CeramicButton>
						</div>
					)}
				</div>

				{/* ── Media column ── */}
				<div className={flip ? "md:order-1" : ""}>
					<div className="relative overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.02] shadow-[0_0_60px_rgba(0,0,0,0.5)]">
						{/* Subtle inner top glow */}
						<div
							aria-hidden
							className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
							style={{
								background:
									"linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)",
							}}
						/>
						<div className="relative aspect-video w-full">
							<Image
								src={image}
								alt={`${heading} product preview`}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Agents() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			{/* Section header */}
			<div className="mb-6 sm:mb-8">
				<h2 className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
					Explore our Products
				</h2>
				<p className="mt-3 text-sm leading-7 text-muted sm:text-base">
					Three products. One sovereign AI platform built for aerospace.
				</p>
			</div>

			{/* Product sections */}
			{PRODUCTS.map((product, i) => (
				<ProductSection key={product.heading} {...product} flip={i % 2 === 1} />
			))}
		</section>
	);
}
