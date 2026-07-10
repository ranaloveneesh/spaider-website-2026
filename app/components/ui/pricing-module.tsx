"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";
import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { cn } from "@/app/lib/utils";

export interface PricingPlan {
	id: string;
	name: string;
	description: string;
	icon: ReactNode;
	priceMonthly: number;
	priceYearly: number;
	features: string[];
	recommended?: boolean;
}

export interface PricingModuleProps {
	title?: string;
	subtitle?: string;
	annualBillingLabel?: string;
	buttonLabel?: string;
	plans: PricingPlan[];
	defaultAnnual?: boolean;
	className?: string;
}

export function PricingModule({ title = "Pricing Plans", subtitle = "Choose a plan that fits your needs.", annualBillingLabel = "Annual billing", buttonLabel = "Get started", plans, defaultAnnual = true, className }: PricingModuleProps) {
	const [isAnnual, setIsAnnual] = React.useState(defaultAnnual);

	return (
		<section className={cn("w-full bg-background text-foreground py-20 px-4 md:px-8", className)}>
			<div className="max-w-5xl mx-auto text-center">
				{/* Heading */}
				<h2 className="font-outfit text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">{title}</h2>
				<p className="mt-4 font-switzer text-sm leading-7 text-muted sm:text-base">{subtitle}</p>

				{/* Billing toggle */}
				<div className="flex items-center justify-center gap-2 mt-8 mb-12">
					<Switch isSelected={isAnnual} onChange={(val) => setIsAnnual(val)} className="font-switzer text-sm text-muted cursor-pointer">
						{annualBillingLabel}
					</Switch>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{plans.map((plan) => (
						<Card key={plan.id} className={cn("relative border border-white/10 rounded-xs transition-all hover:border-white/20", plan.recommended && "border-white/25 ring-1 ring-white/20 scale-[1.03]")}>
							{plan.recommended && <div className="absolute -top-3 left-0 right-0 mx-auto w-fit bg-foreground text-background font-montserrat text-[10px] font-medium uppercase tracking-[0.08em] px-3 py-1 rounded-full">Recommended</div>}

							<CardHeader className="text-center pt-8">
								<div className="flex justify-center mb-4">{plan.icon}</div>
								<CardTitle className="font-outfit text-xl font-medium tracking-tight text-foreground">{plan.name}</CardTitle>
								<CardDescription className="font-switzer text-sm text-muted mt-1">{plan.description}</CardDescription>
							</CardHeader>

							<CardContent className="text-center">
								<div className="font-outfit text-4xl font-medium tracking-tight text-foreground mb-1 transition-all duration-300">€{(isAnnual ? plan.priceYearly : plan.priceMonthly).toLocaleString()}</div>
								<p className="font-switzer text-xs text-muted mb-6">/ {isAnnual ? "year" : "month"}</p>

								<Button variant="solid" className="w-full mb-8 font-switzer justify-center">
									{buttonLabel}
								</Button>

								<div className="text-left">
									<ul className="space-y-2.5">
										{plan.features.map((feature) => (
											<li key={feature} className="flex items-center gap-2">
												<Check className="w-4 h-4 shrink-0 text-foreground/70" />
												<span className="font-switzer text-sm text-muted">{feature}</span>
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
