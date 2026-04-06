import type { Metadata } from "next";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Kepler - SPAIDER",
	description: "Kepler is coming soon. A dedicated SPAIDER agent page for upcoming capabilities.",
};

export default function KeplerPage() {
	return (
		<section className="relative w-full min-w-0 overflow-hidden sm:p-6 md:p-8">
			<Reveal className="relative mx-auto w-full min-w-0 max-w-3xl text-center" variant="fade-up" threshold={0.4}>
				<h2 className="mt-1 font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">Kepler</h2>
				<p className="mt-2 text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">Coming soon</p>

				<div className="mx-auto mt-5 h-px w-32 bg-border sm:mt-6 sm:w-40 md:w-64" />

				<p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-muted-foreground font-inter sm:mt-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">We are building Kepler to help teams. This page will be updated soon with full details.</p>
			</Reveal>
		</section>
	);
}
