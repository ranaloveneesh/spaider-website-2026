"use client";

import dynamic from "next/dynamic";
import type { Tab } from "@/app/components/ui/animated-tabs";

const AnimatedTabs = dynamic(() => import("@/app/components/ui/animated-tabs").then((m) => m.AnimatedTabs), {
	ssr: false,
	loading: () => <div className="min-h-[28rem] w-full rounded-md border border-white/20 bg-black/40" role="status" aria-label="Loading product showcase" />,
});

function AgentsTabVideo({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="relative h-[min(14rem,58vw)] w-full overflow-hidden rounded-sm border-2 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] sm:h-[min(18rem,52vw)] md:h-[min(22rem,48vw)] lg:h-[min(25rem,42vw)]">
			<video src={src} aria-label={alt} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" />
		</div>
	);
}

const tabs: Tab[] = [
	{
		id: "ai-foundations",
		label: "AI Foundations",
		content: (
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 md:h-full">
				<AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="AI Foundations" />

				<div className="flex min-w-0 flex-col gap-y-1.5 sm:gap-y-2">
					<h2 className="m-0! mt-0 mb-0 font-manrope text-base font-semibold text-white sm:text-lg lg:text-xl">AI Foundations</h2>
					<p className="mt-0 text-xs leading-6 text-gray-200 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">AI Foundations is a comprehensive platform that provides the necessary tools and resources to build and deploy AI models.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-1 text-xs text-gray-100 sm:space-y-1.5 sm:text-sm lg:text-base">
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
						</ul>
					</div>
				</div>
			</div>
		),
	},
	{
		id: "sagan",
		label: "SAGAN",
		content: (
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 md:h-full">
				<AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="SAGAN" />
				<div className="flex min-w-0 flex-col gap-y-1.5 sm:gap-y-2">
					<h2 className="m-0! mt-0 mb-0 font-manrope text-base font-semibold text-white sm:text-lg lg:text-xl">SAGAN</h2>
					<p className="mt-0 text-xs leading-6 text-gray-200 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">SAGAN is a comprehensive platform that provides the necessary tools and resources to build and deploy AI models.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-1 text-xs text-gray-100 sm:space-y-1.5 sm:text-sm lg:text-base">
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
						</ul>
					</div>
				</div>
			</div>
		),
	},
	{
		id: "kepler",
		label: "KEPLER (Coming Soon)",
		content: (
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 md:h-full">
				<AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="Kepler" />
				<div className="flex min-w-0 flex-col gap-y-1.5 sm:gap-y-2">
					<h2 className="m-0! mt-0 mb-0 font-manrope text-base font-semibold text-white sm:text-lg lg:text-xl">Kepler</h2>
					<p className="mt-0 text-xs leading-6 text-gray-200 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Kepler is a comprehensive platform that provides the necessary tools and resources to build and deploy AI models.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-1 text-xs text-gray-100 sm:space-y-1.5 sm:text-sm lg:text-base">
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
							<li>✓ No-code AI workflow builder</li>
							<li>✓ Model training and fine-tuning</li>
							<li>✓ Real-time analytics dashboard</li>
							<li>✓ Secure API and webhook access</li>
							<li>✓ Team collaboration and versioning</li>
						</ul>
					</div>
				</div>
			</div>
		),
	},
];

export default function Agents() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Explore our Products</h2>

			<div className="relative mx-auto mt-6 w-full min-w-0 overflow-hidden sm:mt-8">
				<AnimatedTabs tabs={tabs} ariaLabel="Explore our products" />
			</div>
		</section>
	);
}
