import { ArrowRight, Braces, CircleGauge, GitCompareArrows, ScanSearch } from "lucide-react";
import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

const MODULES = [
	{
		icon: ScanSearch,
		title: "Evidence and provenance",
		body: "Record the documents, passages, and retrieval path used to produce an answer.",
	},
	{
		icon: GitCompareArrows,
		title: "Contradiction screening",
		body: "Check new facts and retrieved context against established program knowledge and memory.",
	},
	{
		icon: CircleGauge,
		title: "Confidence estimation",
		body: "Identify uncertain outputs and route them for stronger verification or expert review.",
	},
	{
		icon: Braces,
		title: "Machine-readable signals",
		body: "Attach verification results to each output so downstream tools and reviewers can use them.",
	},
] as const;

export default function TrustPreview() {
	return (
		<section className="relative mt-[var(--spx-section-gap)] w-full min-w-0 border-y border-spx-rule py-[clamp(4rem,8vw,7rem)]">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(89,232,245,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(89,232,245,0.035)_1px,transparent_1px)] [background-size:48px_48px]" />
			<div className="relative grid gap-12 xl:grid-cols-[0.75fr_1.25fr] xl:gap-20">
				<Reveal variant="fade-right" threshold={0.12}>
					<span className="spx-eyebrow mb-8">Core R&amp;D · Trust Layer</span>
					<h2 className="spx-heading text-foreground">
						Explainable AI for <span className="spx-grad-text">technical decisions.</span>
					</h2>
					<p className="spx-lede mt-6">The Trust Layer adds independent verification at the input and output boundaries of SPAIDER agents. It produces evidence about an answer, including its sources, consistency, and confidence.</p>
					<Link href="/trust-layer" className="mt-8 inline-flex items-center gap-2 rounded-xs border border-spx-rule-2 px-5 py-3 font-geist-mono text-[0.74rem] uppercase tracking-[0.12em] text-foreground transition-colors hover:border-spx-cyan hover:text-spx-cyan">
						Explore Trust and explainability <ArrowRight className="size-4" aria-hidden="true" />
					</Link>
				</Reveal>

				<div className="grid border-l border-t border-spx-rule sm:grid-cols-2">
					{MODULES.map((module, index) => {
						const Icon = module.icon;
						return (
							<Reveal key={module.title} variant="fade-up" threshold={0.1} delayMs={index * 60} className="border-b border-r border-spx-rule bg-spx-void/55 p-7 sm:p-8">
								<Icon className="size-5 text-spx-cyan" strokeWidth={1.4} aria-hidden="true" />
								<h3 className="mt-8 font-outfit text-xl font-semibold text-foreground">{module.title}</h3>
								<p className="spx-body mt-3">{module.body}</p>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
