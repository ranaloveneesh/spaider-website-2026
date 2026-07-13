import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

type FleetStatus = "live" | "dev";

type FleetRow = {
	idx: string;
	name: string;
	role: string;
	desc: string;
	tag: string;
	status: FleetStatus;
	href: string;
	/** Rows with a real product page get an Explore button instead of the arrow */
	explore: boolean;
};

// Port of source's home "fleet roster" (`.roster`/`.crew`). Spock/Kepler/Amelia
// have no dedicated pages in target yet - they link to the /agents hub.
const ROWS: FleetRow[] = [
	{ idx: "01", name: "AI Foundations", role: "Enterprise platform", desc: "Secure enterprise knowledge layer for aerospace teams.", tag: "Platform", status: "live", href: "/ai-foundations", explore: true },
	{ idx: "02", name: "Sagan", role: "RFP & Proposal Assistant", desc: "Qualify, structure, and draft complex RFP/ITT responses.", tag: "In production", status: "live", href: "/agents/sagan", explore: true },
	{ idx: "03", name: "Spock", role: "Systems Engineering Assistant", desc: "Requirements, assurance evidence, and review preparation.", tag: "In development", status: "dev", href: "/agents", explore: false },
	{ idx: "04", name: "Kepler", role: "Space Asset Operations Intelligence", desc: "Asset monitoring, orbital data, and operational insight.", tag: "In development", status: "dev", href: "/agents", explore: false },
	{ idx: "05", name: "Amelia", role: "Business Intelligence Assistant", desc: "Markets, ecosystem signals, grants, and business cases.", tag: "In development", status: "dev", href: "/agents", explore: false },
];

const TAG_STYLES: Record<FleetStatus, { text: string; border: string; dot: React.CSSProperties }> = {
	live: { text: "text-spx-green", border: "border-[rgba(110,231,168,0.4)]", dot: { background: "var(--spx-green)", boxShadow: "0 0 8px var(--spx-green)" } },
	dev: { text: "text-spx-amber", border: "border-[rgba(238,185,92,0.4)]", dot: { background: "var(--spx-amber)" } },
};

export default function Fleet() {
	return (
		// Half section gap: continues the Agents "product suite" narrative, and the
		// Agents section's last product row already carries large internal bottom padding.
		<section className="mt-[calc(var(--spx-section-gap)*0.5)] w-full min-w-0">
			{/* Section head */}
			<Reveal variant="fade-up" threshold={0.1} className="mb-12 sm:mb-16 md:mb-20">
				<span className="spx-eyebrow mb-8">The product suite</span>
				<h2 className="spx-heading text-foreground">
					Explore our <span className="spx-grad-text">products</span>
				</h2>
				<p className="spx-lede mt-7">Domain-specific assistants for the workflows aerospace teams actually run.</p>
			</Reveal>

			{/* Roster */}
			<div className="border-t border-spx-rule">
				{ROWS.map((row, i) => {
					const tag = TAG_STYLES[row.status];
					return (
						<Reveal key={row.idx} variant="fade-up" threshold={0.1} delayMs={i * 55}>
							<Link href={row.href} className="group relative grid grid-cols-[44px_1fr_auto] items-center gap-x-5 gap-y-3 border-b border-spx-rule py-8 transition-[padding] duration-400 hover:pl-3.5 min-[1000px]:grid-cols-[70px_1.1fr_0.7fr_1.4fr_11rem] min-[1000px]:gap-[1.625rem] min-[1000px]:py-[2.125rem]">
								{/* Hover wash, cyan -> transparent */}
								<span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-350 group-hover:opacity-100" style={{ background: "linear-gradient(90deg, rgba(89,232,245,0.05), transparent 60%)" }} />
								<span className="spx-index">{row.idx}</span>
								<span className="font-outfit text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold leading-[1] tracking-[-0.02em] text-foreground">{row.name}</span>
								<span className="spx-label hidden min-[1000px]:block">{row.role}</span>
								<span className="hidden max-w-[38ch] text-base leading-[1.55] text-spx-ink-2 min-[1000px]:block">{row.desc}</span>
								{!row.explore && (
									<span className={`col-start-2 row-start-2 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-xs border px-3.5 py-2 font-geist-mono text-[0.7rem] uppercase tracking-[0.16em] min-[1000px]:col-auto min-[1000px]:row-auto min-[1000px]:justify-self-end ${tag.text} ${tag.border}`}>
										<i aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={tag.dot} />
										{row.tag}
									</span>
								)}
								{row.explore && (
									/* Visually the solid Button variant (small nav-cta size) but rendered as a
									   span - the whole row is already a Link, and nested anchors are invalid HTML.
									   Classes inlined because buttonVariants() lives in a "use client" module and
									   Fleet is a server component. Row hover drives it via group-hover. */
									<span className="inline-flex items-center justify-center gap-3 justify-self-end whitespace-nowrap rounded-xs bg-spx-ink px-5 py-3 font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.12em] text-spx-void transition-colors duration-300 group-hover:bg-spx-cyan">Explore</span>
								)}
							</Link>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
