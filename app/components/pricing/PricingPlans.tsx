"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";
import { Switch } from "@/app/components/ui/switch";
import { cn } from "@/app/lib/utils";

export type PricingPlan = {
	id: string;
	name: string;
	description: string;
	icon: ReactNode;
	priceMonthly: number;
	priceYearly: number;
	features: string[];
};

type Props = {
	plans: PricingPlan[];
	buttonLabel: string;
	buttonHref: string;
	defaultAnnual?: boolean;
};

// Port of source pricing's `.plans`/`.plan` cards: hairline-gapped grid, void
// cells, "hot" (recommended) cell on void-2 with an inset cyan top bar, cyan
// `+` feature markers. Prices are target-only content (source has none).
export function PricingPlans({ plans, buttonLabel, buttonHref, defaultAnnual = true }: Props) {
	const [isAnnual, setIsAnnual] = useState(defaultAnnual);

	return (
		<div className="w-full min-w-0">
			{/* Billing period toggle (the pre-revamp Switch; --color-primary scoped
			    to cyan so the selected track matches the page accent) */}
			<Reveal variant="fade-up" threshold={0.1}>
				<div className="flex items-center justify-center gap-3" style={{ "--color-primary": "var(--spx-cyan)" } as CSSProperties}>
					<button type="button" onClick={() => setIsAnnual(false)} className={cn("cursor-pointer text-sm transition-colors duration-300", isAnnual ? "text-spx-faint hover:text-spx-ink-2" : "text-spx-ink")}>
						Monthly billing
					</button>
					<Switch isSelected={isAnnual} onChange={(val) => setIsAnnual(val)} aria-label="Annual billing" className="cursor-pointer" />
					<button type="button" onClick={() => setIsAnnual(true)} className={cn("cursor-pointer text-sm transition-colors duration-300", isAnnual ? "text-spx-ink" : "text-spx-faint hover:text-spx-ink-2")}>
						Annual billing
					</button>
				</div>
			</Reveal>

			{/* Plan cards */}
			<div className="mt-8 grid grid-cols-1 gap-px border border-spx-rule bg-spx-rule min-[960px]:grid-cols-3">
				{plans.map((plan, i) => (
					<Reveal key={plan.id} variant="fade-up" threshold={0.1} delayMs={i * 55} className="flex flex-col gap-[18px] bg-spx-void p-8 sm:p-9">
						{plan.icon}
						<h3 className="font-outfit text-[clamp(1.3rem,1.8vw,1.7rem)] font-semibold leading-[1.15] text-foreground">{plan.name}</h3>
						<p className="min-h-[3em] text-[0.98rem] leading-[1.6] text-spx-mute">{plan.description}</p>

						<div>
							<div className="font-geist-mono text-[clamp(1.9rem,2.6vw,2.6rem)] leading-none text-foreground">€{(isAnnual ? plan.priceYearly : plan.priceMonthly).toLocaleString("en-US")}</div>
							<div className="spx-label mt-2.5">per {isAnnual ? "year" : "month"}</div>
						</div>

						<Button asChild variant="solid" className="h-auto w-full">
							<Link href={buttonHref}>{buttonLabel}</Link>
						</Button>

						<ul className="my-1.5 flex flex-col gap-2.5">
							{plan.features.map((feature) => (
								<li key={feature} className="relative pl-[18px] text-[0.84rem] leading-[1.5] tracking-[0.04em] text-spx-ink-2">
									<span aria-hidden="true" className="absolute left-0 text-spx-cyan">
										+
									</span>
									{feature}
								</li>
							))}
						</ul>
					</Reveal>
				))}
			</div>
		</div>
	);
}
