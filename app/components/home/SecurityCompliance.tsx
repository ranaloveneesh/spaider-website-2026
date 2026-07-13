"use client";

const DEPLOYMENT_ENVS = ["EU cloud", "Private Cloud", "On Prem"] as const;

export default function SecurityCompliance() {
	return (
		// Full-bleed hairline band (like the homepage GetStarted band), left-aligned per source.
		<section className="relative left-1/2 right-1/2 -mx-[50vw] mt-[var(--spx-section-gap)] w-screen border-b border-t border-spx-rule bg-spx-void-2" style={{ paddingInline: "var(--spx-gutter)" }}>
			<div className="py-14 sm:py-16 md:py-20">
				<h2 className="spx-heading text-foreground">
					Your data, <span className="spx-grad-text">your control.</span>
				</h2>

				<p className="spx-lede mt-4">SPAIDER supports enterprise deployment models designed around private data, access control, and secure organizational knowledge.</p>

				{/* Deployment environment pills - source `.flow` pill spec */}
				<div className="mt-8 flex flex-wrap gap-2.5">
					{DEPLOYMENT_ENVS.map((env) => (
						<span key={env} className="inline-flex items-center gap-2.5 rounded-xs border border-spx-rule-2 bg-spx-void px-5 py-[0.9375rem] font-geist-mono text-[0.76rem] uppercase tracking-[0.12em] text-spx-ink-2">
							<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-spx-cyan" aria-hidden />
							{env}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
