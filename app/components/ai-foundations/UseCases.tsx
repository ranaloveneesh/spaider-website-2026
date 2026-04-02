"use client";

import {
  Briefcase,
  Braces,
  Truck,
  CalendarCheck,
  Network,
} from "lucide-react";

/* ========== Aerospace-context use cases (EN) ========== */
const USE_CASES = [
  {
    t: "Business Development",
    d: "Track proposals, renewals, and blockers by syncing your CRM and contracts",
    prompt:
      "Which ESA/CD contracts renew in the next 30 days, who's blocking them, and what's the next action?",
    Icon: Briefcase,
  },
  {
    t: "Engineering",
    d: "Search Git repos, codebases, and logs with context across payload, GNC, and avionics work.",
    prompt:
      "List open issues tagged 'telemetry' in `gnc/imu` and show the last 3 related commits.",
    Icon: Braces,
  },
  {
    t: "Logistics",
    d: "Watch long-lead and rad-hard parts, POs, and lead times. Flag risks and suggest qualified alternates.",
    prompt:
      "Show POs delayed >7 days for rad-hard MCUs and suggest alternates to avoid stockouts.",
    Icon: Truck,
  },
  {
    t: "Project Management",
    d: "Sync Asana to align milestones and risks. Auto-draft SRR/PDR/CDR reports from real data.",
    prompt:
      "Draft this week's PDR update for Project Atlas with risks, mitigations, and timeline changes.",
    Icon: CalendarCheck,
  },
  {
    t: "Systems Engineering",
    d: "Manage requirements, ICDs, and V&V matrices with traceability. Run impact checks before approvals.",
    prompt:
      "For REQ-214, list linked tests, current status, and impacted ICD interfaces.",
    Icon: Network,
  },
] as const;

/* ========== Layout tuning (3 top cards, 2 bottom cards) ========== */
const spanByIndex = (i: number) => (i < 3 ? "lg:col-span-4" : "lg:col-span-6");

export default function UseCases() {
  return (
    <section className="mx-auto mt-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-manrope md:mb-10 lg:mb-12">
        Use Cases
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
        {USE_CASES.map(({ t, d, prompt, Icon }, i) => (
          <article
            key={t}
            className={[
              "group relative overflow-hidden rounded-2xl border border-border bg-panel/40",
              "h-full p-6 md:p-7 shadow-md transition-all duration-200 ease-out",
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
            <div className="relative z-10 flex h-full flex-col pb-16 md:pb-16">
              <div className="mb-4 flex items-center">
                <div className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/20 backdrop-blur">
                  <Icon className="h-6 w-6 text-foreground/70 transition-colors duration-200 group-hover:text-(--color-blue)" />
                </div>
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold tracking-tight font-manrope">
                  {t}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed font-inter">
                {d}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 md:bottom-0 md:left-0 z-10 inline-flex items-center gap-2 rounded-md border border-border bg-background/20 px-3 py-1.5 text-sm text-foreground/70">
              <span className="rounded-sm bg-[rgba(78,167,252,0.15)] text-(--color-blue) px-2 py-[2px] text-[0.72rem] font-semibold">
                Prompt
              </span>
              <span className="italic text-foreground/90">“{prompt}”</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
