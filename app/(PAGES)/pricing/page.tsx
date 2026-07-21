import { Crown, Rocket, Zap } from "lucide-react";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { type PricingPlan, PricingPlans } from "@/app/components/pricing/PricingPlans";

export const metadata: Metadata = {
	title: "Pricing",
	description: "Enterprise pricing for SPAIDER's sovereign AI platform. Built for aerospace teams. Contact us for a tailored quote.",
	alternates: { canonical: "https://www.spaiderspace.com/pricing" },
	openGraph: {
		title: "Pricing | SPAIDER Space",
		description: "Enterprise pricing for SPAIDER's sovereign AI platform. Built for aerospace teams. Contact us for a tailored quote.",
		url: "https://www.spaiderspace.com/pricing",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og.png",
				width: 1731,
				height: 909,
				alt: "SPAIDER Space - Pricing",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const plans: PricingPlan[] = [
	{
		id: "essential",
		name: "Essential",
		description: "For small teams",
		icon: <Zap className="h-8 w-8 text-spx-cyan" strokeWidth={1.5} />,
		priceMonthly: 999,
		priceYearly: 12000,
		features: ["1-Seat Expert Agent", "3-Seats AI Foundations", "Continuous upgrades", "Standard support"],
	},
	{
		id: "pro",
		name: "Pro",
		description: "SMEs",
		icon: <Rocket className="h-8 w-8 text-spx-cyan" strokeWidth={1.5} />,
		priceMonthly: 1999,
		priceYearly: 24000,
		features: ["3-Seats Expert Agent", "5-Seats AI Foundations", "Continuous upgrades", "Priority support"],
	},
	{
		id: "premium",
		name: "Premium",
		description: "Large organizations",
		icon: <Crown className="h-8 w-8 text-spx-cyan" strokeWidth={1.5} />,
		priceMonthly: 2899,
		priceYearly: 35000,
		features: ["5-Seats Expert Agent", "7-Seats AI Foundations", "SLA and dedicated support"],
	},
];

export default function PricingPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Plans ── */}
				<section className="pt-6 sm:pt-10">
					<PricingPlans plans={plans} buttonLabel="Request a trial" buttonHref="/request-trial" defaultAnnual />
				</section>
			</div>
		</div>
	);
}
