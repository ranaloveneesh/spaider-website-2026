"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

const IntelligenceLayers = dynamic(() => import("@/app/components/visuals/IntelligenceLayers"), { ssr: false });

const LAYERS = [
	{ index: "01", name: "Knowledge", note: "Program data, documents, telemetry, standards" },
	{ index: "02", name: "Ontologies", note: "Aerospace concepts and technical relationships" },
	{ index: "03", name: "Models", note: "Domain reasoning, extraction, classification" },
	{ index: "04", name: "Agents", note: "SAGAN, SPOCK, and KEPLER workflows" },
	{ index: "05", name: "Trust", note: "Evidence, confidence, consistency, review" },
] as const;

export default function ArchitecturePreview() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
				<div>
					<span className="spx-eyebrow mb-8">Technology architecture</span>
					<h2 className="spx-heading text-foreground">
						Five connected <span className="spx-grad-text">intelligence layers.</span>
					</h2>
				</div>
				<div className="max-w-[52ch]">
					<p className="spx-lede">Knowledge is structured by aerospace ontologies, processed by domain models, used by expert agents, and evaluated through the Trust Layer.</p>
					<Link href="/our-tech" className="mt-5 inline-flex items-center gap-2 font-geist-mono text-[0.74rem] uppercase tracking-[0.14em] text-spx-cyan hover:text-white">
						Open the technology page <ArrowRight className="size-4" aria-hidden="true" />
					</Link>
				</div>
			</Reveal>

			<Reveal variant="scale" threshold={0.08}>
				<div className="relative min-h-[34rem] overflow-hidden border border-spx-rule bg-spx-void-2 sm:min-h-[42rem]">
					<div className="absolute inset-0">
						<IntelligenceLayers compact />
					</div>
					<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(7,8,12,0.22)_66%,rgba(7,8,12,0.8)_100%)]" />
					<div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-5 border-t border-spx-rule bg-spx-void/82 backdrop-blur-md">
						{LAYERS.map((layer, index) => (
							<motion.div key={layer.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="border-b border-spx-rule p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-5">
								<div className="flex items-baseline gap-3">
									<span className="spx-index">{layer.index}</span>
									<h3 className="font-outfit text-base font-semibold text-foreground">{layer.name}</h3>
								</div>
								<p className="mt-2 hidden text-xs leading-5 text-spx-mute lg:block">{layer.note}</p>
							</motion.div>
						))}
					</div>
				</div>
			</Reveal>
		</section>
	);
}
