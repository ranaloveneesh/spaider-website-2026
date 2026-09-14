import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";

// Port of source's closing CTA section (`.cta` / `.cta-title` / `.cta-row`):
// two-line statement, then two hairline-gapped CTA cards. The cards are divs
// (not links) - the Button inside each is the interactive element.
const CARDS = [
	{
		eyebrow: "For aerospace teams",
		title: "Define a technical pilot",
		body: "Review AI Foundations, SAGAN, and the SPAIDER technology architecture against a bounded workflow and relevant data.",
		href: "/request-trial",
		label: "Request a Trial",
		variant: "solid",
	},
	{
		eyebrow: "For investors",
		title: "Review the company and roadmap",
		body: "SPAIDER is developing space-technology and AI infrastructure for engineering and mission operations.",
		href: "/invest",
		label: "Invest",
		variant: "line",
	},
] as const;

export default function NextStep() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1}>
				<h2 className="spx-heading text-foreground">
					Work with <span className="spx-grad-text">SPAIDER.</span>
				</h2>
				<p className="spx-lede mt-3">Discuss a technical pilot, partnership, or investment.</p>
			</Reveal>

			<Reveal variant="fade-up" threshold={0.1} delayMs={100}>
				<div className="mt-[clamp(2.75rem,6vw,5rem)] grid grid-cols-1 gap-px border border-spx-rule bg-spx-rule min-[800px]:grid-cols-2">
					{CARDS.map((card) => (
						<div key={card.title} className="group relative bg-spx-void p-10 transition-colors duration-350 hover:bg-spx-void-2 sm:px-10 sm:py-11">
							<span className="font-geist-mono text-[0.68rem] uppercase tracking-[0.24em] text-spx-cyan">{card.eyebrow}</span>
							<h3 className="spx-h3 mt-5 text-foreground">{card.title}</h3>
							<p className="spx-body mt-3.5 max-w-[38ch]">{card.body}</p>
							<div className="mt-8">
								<Button asChild variant={card.variant}>
									<Link href={card.href}>{card.label}</Link>
								</Button>
							</div>
							<ArrowRight aria-hidden="true" className="absolute right-10 top-10 size-[1.4rem] text-spx-faint transition-[color,transform] duration-350 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-spx-cyan" />
						</div>
					))}
				</div>
			</Reveal>
		</section>
	);
}
