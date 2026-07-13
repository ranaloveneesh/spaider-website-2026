import Reveal from "@/app/components/ui/reveal";

// Port of source SAGAN's "05 - The difference" section: the `.vs` comparison
// table (generic AI chat vs SAGAN).
const VS_ROWS: [string, string, string][] = [
	["Knows your call", "You paste fragments into a context window.", "The full tender, annexes, and your libraries, parsed and structured."],
	["Compliance", "You keep the matrix by hand and hope.", "Every requirement traced to its response; gaps flagged."],
	["Cost forms", "Copy-paste into PSS spreadsheets.", "Official PSS workbooks populated from the cost model."],
	["Teamwork", "Personal chats, scattered versions.", "One shared workspace across the whole bid team."],
	["Trust", "Answers you can't verify.", "Citations, reasoning traces, and human sign-off at every gate."],
	["Where it runs", "A public cloud you don't control.", "Your infrastructure, on-premise or secure cloud."],
];

export default function GenericCopilot() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-14">
				<h2 className="spx-heading text-foreground">
					Why not just <span className="spx-grad-text">a generic copilot?</span>
				</h2>
				<p className="spx-lede mt-3">A chat window can write sentences. A bid needs structure, compliance, cost forms, and a team. That is the difference.</p>
			</Reveal>

			{/* vs table */}
			<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
				<div className="border border-spx-rule bg-spx-void">
					{/* Head row (desktop only) */}
					<div className="hidden grid-cols-[170px_1fr_1fr] gap-[1.375rem] border-b border-spx-rule bg-spx-void-2 px-[1.375rem] py-3.5 font-geist-mono text-[0.7rem] uppercase tracking-[0.18em] text-spx-mute min-[820px]:grid">
						<span />
						<span>Generic AI chat</span>
						<span className="text-spx-cyan">SAGAN</span>
					</div>
					{VS_ROWS.map(([label, no, yes], i) => (
						<div key={label} className={`grid grid-cols-1 items-start gap-2 px-[1.375rem] py-[1.125rem] min-[820px]:grid-cols-[170px_1fr_1fr] min-[820px]:gap-[1.375rem] ${i < VS_ROWS.length - 1 ? "border-b border-spx-rule" : ""}`}>
							<span className="text-[0.98rem] font-semibold text-spx-cyan min-[820px]:text-foreground">{label}</span>
							<span className="text-[0.97rem] leading-[1.6] text-spx-faint">
								<span aria-hidden="true">✕&ensp;</span>
								{no}
							</span>
							<span className="text-[0.97rem] leading-[1.6] text-spx-ink-2">
								<span aria-hidden="true" className="text-spx-green">
									✓&ensp;
								</span>
								{yes}
							</span>
						</div>
					))}
				</div>
			</Reveal>
		</section>
	);
}
