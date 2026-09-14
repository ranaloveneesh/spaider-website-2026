import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

const SIGNALS = ["Tender and annex provenance", "Requirement-to-response traceability", "Contradiction and gap flags", "Human approval at review gates"] as const;

export default function TrustIntegration() {
	return (
		<section className="mt-[var(--spx-section-gap)] border-y border-spx-rule py-14 sm:py-18">
			<Reveal variant="fade-up" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
				<div>
					<span className="spx-eyebrow mb-8">Trust Layer integration</span>
					<h2 className="spx-heading text-foreground">Proposal outputs remain connected to <span className="spx-grad-text">sources and review state.</span></h2>
					<Link href="/trust-layer" className="mt-7 inline-flex items-center gap-2 font-geist-mono text-[0.72rem] uppercase tracking-[0.12em] text-spx-cyan">Review the Trust Layer <ArrowRight className="size-4" /></Link>
				</div>
				<div className="grid gap-px border border-spx-rule bg-spx-rule sm:grid-cols-2">{SIGNALS.map((signal, index) => <div key={signal} className="bg-spx-void-2 p-6"><span className="spx-index">T{index + 1}</span><p className="mt-5 text-base leading-7 text-spx-ink-2">{signal}</p></div>)}</div>
			</Reveal>
		</section>
	);
}
