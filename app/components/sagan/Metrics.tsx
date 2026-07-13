import { ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/reveal";

// Source's SAGAN `stats`, rendered in its `.num-grid` style: big mono value,
// small uppercase mono label underneath, hairline-divided columns.
const METRICS = [
	{
		value: (
			<>
				weeks <ArrowRight aria-hidden="true" className="inline size-[0.7em] align-baseline" /> hours
			</>
		),
		label: "first structured, costed draft",
	},
	{ value: "100%", label: "requirements traced to source" },
	{ value: "PSS-ready", label: "official agency cost forms populated" },
] as const;

export default function Metrics() {
	return (
		<section className="mx-auto mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="spx-heading text-foreground">
				Less grunt work, <span className="spx-grad-text">stronger bids.</span>
			</Reveal>
			<div className="mt-10 grid grid-cols-1 border-t border-spx-rule sm:grid-cols-3 sm:gap-x-8">
				{METRICS.map((m, index) => (
					<Reveal key={m.label} variant="fade-up" threshold={0.25} delayMs={index * 90} className="border-b border-spx-rule py-8 sm:border-b-0 sm:border-r sm:py-11 sm:pr-8 sm:last:border-r-0 sm:last:pr-0">
						<b className="block font-geist-mono text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-spx-ink">{m.value}</b>
						<span className="mt-3 block max-w-[22ch] font-geist-mono text-[0.74rem] uppercase tracking-[0.14em] text-spx-mute">{m.label}</span>
					</Reveal>
				))}
			</div>
		</section>
	);
}
