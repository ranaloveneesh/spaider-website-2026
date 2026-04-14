import type { Metadata } from "next";
import { InvestFormLazy } from "@/app/components/invest/InvestFormLazy";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Invest - SPAIDER",
	description: "Investor information for SPAIDER - European sovereign AI for aerospace.",
};

export default function InvestPage() {
	return (
		<div className="grid w-full min-w-0 grid-cols-1 gap-10 pt-10 pb-16 sm:gap-12 sm:pt-16 sm:pb-20 md:grid-cols-[5fr_7fr] md:items-start md:gap-12 md:pt-20 md:pb-24 lg:grid-cols-3 lg:gap-16 mx-auto max-w-7xl">
			<div className="min-w-0 space-y-5 lg:pr-6 lg:pt-2">
				<Reveal variant="fade-up" threshold={0.2}>
					<h2 className="font-outfit text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
						Invest
					</h2>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.2} delayMs={80}>
					<p className="text-sm leading-7 text-muted sm:text-base">
						Become an early shareholder and help launch SPAIDER&apos;s AI in Space.
					</p>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.2} delayMs={150}>
					<p className="text-sm leading-7 text-muted sm:text-base">
						Register to receive the investor brief, timeline, and terms for our private raise. For qualified investors; this is a non-binding expression of interest.
					</p>
				</Reveal>
			</div>

			<InvestFormLazy />
		</div>
	);
}
