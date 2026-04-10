import type { Metadata } from "next";
import { InvestFormLazy } from "@/app/components/invest/InvestFormLazy";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Invest - SPAIDER",
	description: "Investor information for SPAIDER - European sovereign AI for aerospace.",
};

export default function InvestPage() {
	return (
		<div className="grid w-full min-w-0 grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-3 lg:gap-10">
			<Reveal variant="fade-left" threshold={0.35} className="min-w-0 space-y-4 sm:space-y-5 md:pt-0 lg:pr-8">
				<h2 className="font-montserrat text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Invest</h2>

				<p className="text-xs leading-6 text-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Become an early shareholder and help launch SPAIDER&apos;s AI in Space.</p>
				<p className="text-xs leading-6 text-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Register to receive the investor brief, timeline, and terms for our private raise. For qualified investors; this is a non-binding expression of interest.</p>
			</Reveal>

			<InvestFormLazy />
		</div>
	);
}
