import { Building2, Layers, Users } from "lucide-react";
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
		id: "starter",
		name: "Starter",
		description: "For small teams exploring sovereign AI",
		icon: <Layers className="w-8 h-8 text-primary" />,
		priceMonthly: 299,
		priceYearly: 2990,
		users: "Up to 5 users",
		features: [
			{ label: "Sovereign data processing", included: true },
			{ label: "Standard model access", included: true },
			{ label: "Priority support", included: false },
			{ label: "Custom fine-tuning", included: false },
		],
	},
	{
		id: "team",
		name: "Team",
		description: "For mission-critical deployments",
		icon: <Users className="w-8 h-8 text-primary" />,
		priceMonthly: 1999,
		priceYearly: 19990,
		users: "Up to 100 users",
		features: [
			{ label: "Sovereign data processing", included: true },
			{ label: "Full model suite", included: true },
			{ label: "Dedicated success manager", included: true },
			{ label: "Custom fine-tuning", included: true },
		],
		recommended: true,
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "For large organisations with custom needs",
		icon: <Building2 className="w-8 h-8 text-primary" />,
		priceMonthly: 4999,
		priceYearly: 49990,
		users: "Unlimited users",
		features: [
			{ label: "On-premise deployment", included: true },
			{ label: "Custom SLAs & audit logs", included: true },
			{ label: "24/7 priority support", included: true },
			{ label: "Private cloud hosting", included: true },
		],
	},
];

export default function PricingPage() {
	return <PricingModule annualBillingLabel="Pay annually and save 10%" buttonLabel="Request a demo" plans={plans} defaultAnnual={false} />;
}
