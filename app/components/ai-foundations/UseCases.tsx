"use client";

import { Braces, Briefcase, CalendarCheck, Network, Truck } from "lucide-react";
import Reveal from "@/app/components/ui/reveal";

/* ========== Aerospace-context use cases (EN) ========== */
const USE_CASES = [
	{
		t: "Business Development",
		d: "Track proposals, renewals, and blockers by syncing your CRM and contracts",
		prompt: "Which ESA/CD contracts renew in the next 30 days, who's blocking them, and what's the next action?",
		Icon: Briefcase,
	},
	{
		t: "Engineering",
		d: "Search Git repos, codebases, and logs with context across payload, GNC, and avionics work.",
		prompt: "List open issues tagged 'telemetry' in `gnc/imu` and show the last 3 related commits.",
		Icon: Braces,
	},
	{
		t: "Logistics",
		d: "Watch long-lead and rad-hard parts, POs, and lead times. Flag risks and suggest qualified alternates.",
		prompt: "Show POs delayed >7 days for rad-hard MCUs and suggest alternates to avoid stockouts.",
		Icon: Truck,
	},
	{
		t: "Project Management",
		d: "Sync Asana to align milestones and risks. Auto-draft SRR/PDR/CDR reports from real data.",
		prompt: "Draft this week's PDR update for Project Atlas with risks, mitigations, and timeline changes.",
		Icon: CalendarCheck,
	},
	{
		t: "Systems Engineering",
		d: "Manage requirements, ICDs, and V&V matrices with traceability. Run impact checks before approvals.",
		prompt: "For REQ-214, list linked tests, current status, and impacted ICD interfaces.",
		Icon: Network,
	},
] as const;

/* ========== Layout tuning (3 top cards, 2 bottom cards) ========== */
const spanByIndex = (i: number) => (i < 3 ? "lg:col-span-4" : "lg:col-span-6");

export default function UseCases() {
	return (
		<section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="mb-6 font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">
				Use Cases
			</Reveal>

			<div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-12 lg:gap-7">
				{USE_CASES.map(({ t, d, prompt, Icon }, i) => (
					<Reveal
						key={t}
						as="article"
						variant={i % 2 === 0 ? "fade-right" : "fade-left"}
						threshold={0.2}
						delayMs={i * 90}
						className={[
							"group relative min-w-0 overflow-hidden rounded-xl border border-border bg-panel/40 sm:rounded-2xl",
							"h-full p-4 shadow-md transition-all duration-200 ease-out sm:p-5 md:p-6 lg:p-7",
							"hover:border-[rgba(78,167,252,0.6)] hover:bg-panel/55 hover:shadow-lg hover:-translate-y-[2px]",
							"before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:content-['']",
							"before:z-0 before:bg-[radial-gradient(650px_260px_at_10%_0%,rgba(78,167,252,0.32),transparent_60%)]",
							"before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
							"after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:content-[''] after:z-0",
							"after:bg-[linear-gradient(120deg,transparent_0%,rgba(78,167,252,0.26)_40%,transparent_70%)]",
							"after:opacity-0 after:-translate-x-10 group-hover:after:opacity-100 group-hover:after:translate-x-10 after:transition-all after:duration-400",
							spanByIndex(i),
						].join(" ")}
					>
						<div className="relative z-10 flex h-full flex-col pb-28 sm:pb-24 md:pb-16">
							<div className="mb-3 flex min-w-0 items-center gap-2 sm:mb-4 sm:gap-3">
								<div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/20 backdrop-blur sm:h-10 sm:w-10 sm:rounded-xl">
									<Icon className="h-5 w-5 text-foreground/70 transition-colors duration-200 group-hover:text-(--color-blue) sm:h-6 sm:w-6" />
								</div>
								<h3 className="min-w-0 font-manrope text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl">{t}</h3>
							</div>

							<p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{d}</p>
						</div>

						<div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-1 rounded-md border border-border bg-background/20 p-2 text-foreground/70 sm:left-auto sm:right-0 sm:inline-flex sm:flex-row sm:items-center sm:gap-2 sm:px-3 sm:py-1.5">
							<span className="w-fit rounded-sm bg-[rgba(78,167,252,0.15)] px-2 py-[2px] text-[0.65rem] font-semibold text-(--color-blue) sm:text-[0.72rem]">Prompt</span>
							<span className="text-xs italic leading-snug text-foreground/90 sm:text-sm">“{prompt}”</span>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
