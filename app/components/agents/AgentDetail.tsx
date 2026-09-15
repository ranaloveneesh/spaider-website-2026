import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import CtaBand from "@/app/components/CtaBand";
import Reveal from "@/app/components/ui/reveal";
import { Button } from "@/app/components/ui/button";

type Capability = { title: string; body: string };
type Workflow = { title: string; body: string };

type AgentDetailProps = {
	name: string;
	role: string;
	headline: string;
	description: string;
	visual: ReactNode;
	capabilities: Capability[];
	workflow: Workflow[];
	inputs: string[];
	outputs: string[];
	trustSignals: string[];
	boundary: string;
};

export default function AgentDetail({ name, role, headline, description, visual, capabilities, workflow, inputs, outputs, trustSignals, boundary }: AgentDetailProps) {
	return (
		<div className="w-full min-w-0 overflow-x-clip">
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<header className="pt-7 text-center sm:pt-12">
					<Reveal variant="fade-up"><span className="spx-eyebrow">{role}</span></Reveal>
					<Reveal variant="fade-up" delayMs={60}><h1 className="mx-auto mt-5 max-w-[15ch] font-outfit text-[clamp(2.6rem,6.8vw,5.6rem)] font-medium leading-[1.03] tracking-tight text-foreground">Meet <span className="spx-grad-text">{name}</span></h1></Reveal>
					<Reveal variant="fade-up" delayMs={120}><p className="mx-auto mt-5 max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-8 text-spx-ink-2">{headline}</p></Reveal>
					<Reveal variant="fade-up" delayMs={170}><p className="mx-auto mt-4 max-w-[64ch] text-base leading-7 text-spx-mute">{description}</p></Reveal>
					<Reveal variant="fade-up" delayMs={210} className="mt-7 flex flex-wrap items-center justify-center gap-3">
						<Button asChild variant="solid"><Link href="/request-trial">Discuss a pilot <ArrowRight className="size-4" /></Link></Button>
					</Reveal>
				</header>

				<Reveal variant="scale" threshold={0.05} className="mx-auto mt-12 max-w-6xl rounded-[14px] p-px sm:mt-16" style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.16), rgba(89,232,245,0.1), rgba(255,255,255,0.02))" }}>
					<div className="overflow-hidden rounded-[13px]">{visual}</div>
				</Reveal>

				<section className="mt-[var(--spx-section-gap)]">
					<Reveal variant="fade-up"><span className="spx-eyebrow mb-8">Core functions</span><h2 className="spx-heading text-foreground">What {name} <span className="spx-grad-text">does.</span></h2></Reveal>
					<div className="mt-10 grid border-l border-t border-spx-rule md:grid-cols-2">
						{capabilities.map((capability, index) => <Reveal key={capability.title} variant="fade-up" delayMs={index * 60} className="border-b border-r border-spx-rule p-7 sm:p-9"><span className="spx-index">/ 0{index + 1}</span><h3 className="spx-h3 mt-8 text-foreground">{capability.title}</h3><p className="spx-body mt-4">{capability.body}</p></Reveal>)}
					</div>
				</section>

				<section className="mt-[var(--spx-section-gap)]">
					<Reveal variant="fade-up"><h2 className="spx-heading text-foreground">Technical <span className="spx-grad-text">workflow.</span></h2></Reveal>
					<div className="mt-10 grid gap-px border border-spx-rule bg-spx-rule lg:grid-cols-5">
						{workflow.map((step, index) => <Reveal key={step.title} variant="fade-up" delayMs={index * 55} className="bg-spx-void-2 p-6"><span className="spx-index">0{index + 1}</span><h3 className="mt-7 font-outfit text-lg font-semibold text-foreground">{step.title}</h3><p className="mt-3 text-sm leading-6 text-spx-mute">{step.body}</p></Reveal>)}
					</div>
				</section>

				<section className="mt-[var(--spx-section-gap)] grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
					<Reveal variant="fade-right"><span className="spx-eyebrow mb-8">Inputs and outputs</span><h2 className="spx-heading text-foreground">Connected to the <span className="spx-grad-text">technical record.</span></h2><p className="spx-lede mt-5">{boundary}</p></Reveal>
					<Reveal variant="fade-left" className="grid gap-px border border-spx-rule bg-spx-rule sm:grid-cols-2">
						<div className="bg-spx-void-2 p-7"><span className="spx-label text-spx-cyan">Inputs</span><ul className="mt-5">{inputs.map((input) => <li key={input} className="border-t border-spx-rule py-3 text-sm text-spx-ink-2">{input}</li>)}</ul></div>
						<div className="bg-spx-void-2 p-7"><span className="spx-label text-spx-green">Outputs</span><ul className="mt-5">{outputs.map((output) => <li key={output} className="border-t border-spx-rule py-3 text-sm text-spx-ink-2">{output}</li>)}</ul></div>
					</Reveal>
				</section>

				<section className="mt-[var(--spx-section-gap)] border-y border-spx-rule py-14 sm:py-18">
					<Reveal variant="fade-up" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><span className="spx-eyebrow mb-8">Trust Layer integration</span><h2 className="spx-heading text-foreground">Verification attached to the <span className="spx-grad-text">workflow.</span></h2><Link href="/trust-layer" className="mt-7 inline-flex items-center gap-2 font-geist-mono text-[0.72rem] uppercase tracking-[0.12em] text-spx-cyan">Review the Trust Layer <ArrowRight className="size-4" /></Link></div><div className="grid gap-px border border-spx-rule bg-spx-rule sm:grid-cols-2">{trustSignals.map((signal, index) => <div key={signal} className="bg-spx-void-2 p-6"><span className="spx-index">T{index + 1}</span><p className="mt-5 text-base leading-7 text-spx-ink-2">{signal}</p></div>)}</div></Reveal>
				</section>

				<Reveal variant="fade-up"><CtaBand title={`Discuss a ${name} pilot.`} copy="Review your workflow, data, and integration requirements with the SPAIDER team." ctaHref="/request-trial" ctaLabel="Discuss a pilot" /></Reveal>
			</div>
		</div>
	);
}
