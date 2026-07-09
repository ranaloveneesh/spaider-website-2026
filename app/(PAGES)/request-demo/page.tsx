import type { Metadata } from "next";
import { RequestDemoFormLazy } from "@/app/components/request-demo/RequestDemoFormLazy";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Request a Demo",
	description: "Book a demo of SPAIDER - sovereign AI agents for your aerospace team.",
	alternates: { canonical: "https://www.spaiderspace.com/request-demo" },
};

export default function RequestDemoPage() {
	return (
		<div className="grid w-full min-w-0 grid-cols-1 gap-10 pt-10 pb-16 sm:gap-12 sm:pt-16 sm:pb-20 md:grid-cols-[5fr_7fr] md:items-start md:gap-12 md:pt-20 md:pb-24 lg:grid-cols-3 lg:gap-16 mx-auto max-w-7xl">
			<div className="min-w-0 space-y-5 lg:pr-6 lg:pt-2">
				<Reveal variant="fade-up" threshold={0.2}>
					<h2 className="font-outfit text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">Request a demo</h2>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.2} delayMs={80}>
					<p className="text-sm leading-7 text-muted sm:text-base">See how SPAIDER can enhance your way of working and connect to your data. In a short live session, we&apos;ll show what&apos;s possible, listen to your goals, and outline the simplest path forward.</p>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.2} delayMs={150}>
					<ul className="space-y-2.5 sm:space-y-3">
						<li className="flex items-start gap-2.5 text-sm leading-7 text-muted sm:text-base">
							<span className="shrink-0 font-medium leading-7 text-accent" aria-hidden>
								✓
							</span>
							<span>Walk through your specific use case</span>
						</li>
						<li className="flex items-start gap-2.5 text-sm leading-7 text-muted sm:text-base">
							<span className="shrink-0 font-medium leading-7 text-accent" aria-hidden>
								✓
							</span>
							<span>Discuss security, deployment, and integrations</span>
						</li>
						<li className="flex items-start gap-2.5 text-sm leading-7 text-muted sm:text-base">
							<span className="shrink-0 font-medium leading-7 text-accent" aria-hidden>
								✓
							</span>
							<span>Get pricing and next steps</span>
						</li>
					</ul>
				</Reveal>
			</div>

			<RequestDemoFormLazy />
		</div>
	);
}
