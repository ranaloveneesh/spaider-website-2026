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
					<h2 className="m-0! mt-0 mb-0 font-montserrat text-base font-semibold text-foreground sm:text-xl lg:text-3xl">AI Foundations</h2>
					<p className="mt-0 text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Supercharge your everyday company knowledge work with AI.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-1 text-xs text-foreground sm:space-y-4 sm:text-sm lg:text-base">
							<li><span className="mr-1">✓</span>  Make your company’s internal and approved external knowledge sources AI ready.</li>
							<li><span className="mr-1">✓</span> Automate daily documentation (reports, minute-of-meeting etc) tasks.</li>
							<li><span className="mr-1">✓</span> Search, chat, and retrieve with traceable context grounded in your data.</li>
							<li><span className="mr-1">✓</span> Enterprise co-work powered by domain-expert AI models.</li>
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
					<h2 className="m-0! mt-0 mb-0 font-montserrat text-base font-semibold text-foreground sm:text-xl lg:text-3xl">SAGAN</h2>
					<p className="mt-0 text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Your proposal and RFP co-pilot for faster response time.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-2 text-xs text-foreground sm:space-y-4 sm:text-sm lg:text-base">
							<li><span className="mr-1">✓</span> Read RFPs and extract requirements automatically.</li>
							<li><span className="mr-1">✓</span> Draft responses using your templates and past materials.</li>
							<li><span className="mr-1">✓</span> Reuse internal knowledge with source-backed outputs.</li>
							<li><span className="mr-1">✓</span> Support reviews, planning, and submission readiness.</li>
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
				<AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="KEPLER (Coming Soon)" />
				<div className="flex min-w-0 flex-col gap-y-1.5 sm:gap-y-2">
					<h2 className="m-0! mt-0 mb-0 font-montserrat text-base font-semibold text-foreground sm:text-xl lg:text-3xl">KEPLER (Coming Soon)</h2>
					<p className="mt-0 text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">A mission operations co-pilot for monitored, human-in-the-loop workflows.</p>
					<div className="mt-1 sm:mt-2">
						<ul className="space-y-2 text-xs text-foreground sm:space-y-4 sm:text-sm lg:text-base">
							<li><span className="mr-1">✓</span> Query procedures, logs, and mission knowledge faster.</li>
							<li><span className="mr-1">✓</span> Assist anomaly triage and operational review.</li>
							<li><span className="mr-1">✓</span> Support teams with context-aware operational guidance.</li>
							<li><span className="mr-1">✓</span> Keep humans in control for critical decisions.</li>
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
			<h2 className="font-montserrat text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Explore our Products</h2>

			<div className="relative mx-auto mt-6 w-full min-w-0 overflow-hidden sm:mt-8">
				<AnimatedTabs tabs={tabs} ariaLabel="Explore our products" />
			</div>
		</section>
	);
}
