import { Crown, Rocket, Zap } from "lucide-react";
import type { Metadata } from "next";
import { PricingModule } from "@/app/components/ui/pricing-module";

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
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "SPAIDER Space - Pricing",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const plans = [
	{
		id: "essential",
		name: "Essential",
		description: "For small teams",
		icon: <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />,
		priceMonthly: 999,
		priceYearly: 12000,
		features: ["1-Seat Expert Agent", "3-Seats AI Foundations", "Continuous upgrades", "Standard support"],
	},
	{
		id: "pro",
		name: "Pro",
		description: "SMEs",
		icon: <Rocket className="w-8 h-8 text-primary" strokeWidth={1.5} />,
		priceMonthly: 1999,
		priceYearly: 24000,
		features: ["3-Seats Expert Agent", "5-Seats AI Foundations", "Continuous upgrades", "Priority support"],
	},
	{
		id: "premium",
		name: "Premium",
		description: "Large organizations",
		icon: <Crown className="w-8 h-8 text-primary" strokeWidth={1.5} />,
		priceMonthly: 2899,
		priceYearly: 35000,
		features: ["5-Seats Expert Agent", "7-Seats AI Foundations", "SLA and dedicated support"],
	},
];

export default function PricingPage() {
	return <PricingModule annualBillingLabel="Annual billing" buttonLabel="Request a demo" plans={plans} defaultAnnual={true} />;
}
