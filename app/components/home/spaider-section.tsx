"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { RocketTrackMini } from "./RocketTrackMini";

const SPAIDER_SECTION_ICONS = {
	agent: "/icons/agent.svg",
	brain: "/icons/brain.svg",
	disk: "/icons/disk.svg",
	dna: "/icons/dna.svg",
	bot: "/icons/bot.svg",
	lock: "/icons/lock.svg",
	link: "/icons/link.svg",
} as const;

function Chip({ children }: { children: ReactNode }) {
	return (
		<div className="flex items-center justify-between rounded-lg border border-border/40 bg-panel/40 px-2.5 py-1.5 shadow-sm">
			<span className="text-[13px] font-semibold text-foreground">{children}</span>
			<span className="grid h-5 w-5 place-items-center rounded-full border border-border/40">✓</span>
		</div>
	);
}

function MiniPill({ children, right }: { children: ReactNode; right?: ReactNode }) {
	return (
		<div className="flex items-center justify-between rounded-lg border border-border/40 bg-panel/40 px-3 py-2.5 shadow-sm">
			<span className="min-w-0 text-[14px] font-semibold text-foreground">{children}</span>
			{right ? <span className="ml-3 flex shrink-0 items-center">{right}</span> : null}
		</div>
	);
}

export function SpaiderSectionUnified() {
	return (
		<div
			className="rounded-xl border border-border/50 bg-panel/30 p-2 sm:rounded-2xl sm:p-2.5 lg:rounded-[22px] lg:p-3"
			style={{
				background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0))",
				boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
			}}
		>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-4 lg:grid-cols-12 lg:gap-4">
				<article className="relative isolate col-span-1 overflow-hidden rounded-2xl border border-border/40 bg-panel/40 p-4 md:col-span-6 md:p-5 lg:col-span-8 lg:rounded-[20px] lg:p-6 xl:p-7">
					<div
						className="absolute inset-0 -z-10"
						style={{
							background: "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 35%, rgba(0,0,0,0) 75%)",
						}}
					/>
					<div className="relative z-10 text-foreground">
						<h3 className="font-manrope text-base font-semibold leading-tight sm:text-lg lg:text-xl">
							<span className="block">Why SPAIDER?</span>
							<span className="mt-1 block">Engineered for Aerospace Excellence.</span>
						</h3>
						<p className="mt-3 max-w-4xl text-xs leading-6 text-muted opacity-90 sm:mt-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Here&apos;s why leading aerospace organizations choose SPAIDER for their most critical AI initiatives, turning complex challenges into mission success.</p>
					</div>
				</article>

				<article className="col-span-1 rounded-2xl border border-border/40 bg-panel/40 p-3 shadow-sm md:col-span-3 lg:col-span-4 lg:rounded-[20px]">
					<div className="space-y-2 rounded-2xl border border-border/40 bg-background/20 p-2 shadow-inner">
						<Chip>Foundation (RAG)</Chip>
						<Chip>Pre-Built Agents</Chip>
						<Chip>Custom Agents</Chip>
					</div>
					<h4 className="mt-3 ml-1 text-sm font-semibold text-foreground sm:ml-2 sm:text-base lg:ml-4 lg:text-lg">Making your enterprise AI-ready, one step at a time.</h4>
				</article>

				<article className="col-span-1 rounded-2xl border border-border/40 bg-panel/40 p-3 shadow-sm md:col-span-3 lg:col-span-4 lg:rounded-[20px]">
					<h5 className="text-center text-sm font-semibold text-foreground sm:text-base lg:text-lg">Fully Private</h5>
					<div className="mt-3 rounded-2xl border border-border/40 bg-background/20 p-3 sm:mt-4 sm:p-4">
						<div className="flex items-start justify-between gap-2 px-1 sm:gap-4 sm:px-2">
							{[
								{ src: SPAIDER_SECTION_ICONS.agent, label: "Agents" },
								{ src: SPAIDER_SECTION_ICONS.brain, label: "AI" },
								{ src: SPAIDER_SECTION_ICONS.disk, label: "Data & IP" },
							].map((i) => (
								<div key={i.label} className="flex min-w-0 flex-1 flex-col items-center gap-1.5 sm:gap-2">
									<div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-border/40 bg-panel/40 shadow-sm sm:h-14 sm:w-14 md:h-16 md:w-16 md:rounded-2xl">
										<Image src={i.src} alt={i.label} width={200} height={200} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
									</div>
									<span className="text-center text-[0.65rem] font-semibold leading-tight text-foreground sm:text-xs md:text-sm">{i.label}</span>
								</div>
							))}
						</div>
					</div>
					<h6 className="mt-4 ml-0.5 text-sm font-semibold text-foreground sm:mt-5 sm:ml-1 sm:text-base lg:text-lg">Own your data &amp; IP</h6>
					<p className="mt-2 ml-0.5 text-xs leading-6 text-muted sm:ml-1 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Your data stays where it belongs, with you — on-prem or secure private cloud.</p>
				</article>

				<article className="col-span-1 rounded-2xl border border-border/40 bg-panel/40 p-3 shadow-sm md:col-span-6 lg:col-span-4 lg:rounded-[20px]">
					<h5 className="text-sm font-semibold text-foreground sm:text-base lg:text-lg">Our Strength</h5>
					<div className="mt-3 rounded-2xl border border-border/40 bg-background/20 p-2">
						<div className="space-y-2">
							<MiniPill right={<Image src={SPAIDER_SECTION_ICONS.dna} alt="DNA" width={180} height={180} className="h-8 w-8 sm:h-[2.2rem] sm:w-[2.2rem] md:h-[2.6rem] md:w-[2.6rem]" />}>Deep Aerospace DNA</MiniPill>
							<MiniPill right={<Image src={SPAIDER_SECTION_ICONS.bot} alt="Bot" width={160} height={160} className="h-7 w-7 sm:h-8 sm:w-8 md:h-[2.6rem] md:w-[2.6rem]" />}>Autonomous &amp; Adaptive AI</MiniPill>
							<MiniPill right={<Image src={SPAIDER_SECTION_ICONS.lock} alt="Lock" width={160} height={160} className="h-7 w-7 sm:h-8 sm:w-8 md:h-[2.6rem] md:w-[2.6rem]" />}>Industry grade security</MiniPill>
							<MiniPill right={<Image src={SPAIDER_SECTION_ICONS.link} alt="Link" width={160} height={160} className="h-7 w-7 sm:h-8 sm:w-8 md:h-[2.6rem] md:w-[2.6rem]" />}>Comprehensive Integration</MiniPill>
						</div>
					</div>
				</article>

				<article className="col-span-1 rounded-2xl border border-border/40 bg-panel/40 p-3 shadow-sm md:col-span-6 lg:col-span-4 lg:rounded-[20px]">
					<div className="rounded-2xl border border-border/40 bg-background/20 p-2 sm:p-3">
						<RocketTrackMini />
					</div>
					<h6 className="mt-4 ml-0.5 text-sm font-semibold text-foreground sm:mt-6 sm:ml-1 sm:text-base lg:text-lg">Flexible deployment</h6>
					<p className="mt-2 ml-0.5 text-xs leading-6 text-muted sm:ml-1 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Choose how to deploy based on your company&apos;s needs.</p>
				</article>
			</div>
		</div>
	);
}
