"use client";

import { CircleCheck } from "lucide-react";

type Feature = { title: string; bullets: string[] };

const FEATURES: Feature[] = [
  {
    title: "Direct RFP/ITT Integration & Formatting",
    bullets: [
      "In-document writing (EU Horizon, ESA ITT, FNR, LSA, SBIR, etc.)",
      "Instant population of boilerplate / reusable content",
      "Requirement mapping & traceability",
      "Real-time format validation",
    ],
  },
  {
    title: "Targeted Research & Synthesis",
    bullets: [
      "Accelerated lit review & SOTA summaries",
      "Query internal repositories and vaults",
      "Connect AIAA / IEEE / arXiv / Patent DBs",
      "Extract key findings with citations",
    ],
  },
  {
    title: "Strategic Planning Assistance",
    bullets: [
      "Structure proposals effectively",
      "Draft Work Breakdown Structures (WBS)",
      "Create Work Packages (WPs) & budget outlines",
    ],
  },
  {
    title: "Collaboration & Meeting Facilitation",
    bullets: [
      "Calendar & comms integration (Teams/Meet)",
      "Automated scheduling & participant coordination",
      "Targeted agendas & expert questions",
      "Live transcription & action items",
    ],
  },
];

const spanByIndex = (_i: number) => "lg:col-span-6";

export default function KeyFeatures() {
  return (
    <section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
      <h2 className="mb-6 font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">
        Key Features
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-12 lg:gap-7">
        {FEATURES.map((f, i) => (
          <article
            key={f.title}
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
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-3 flex items-start sm:mb-4">
                <h3 className="font-manrope text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl">
                  {f.title}
                </h3>
              </div>

              <ul className="space-y-2 text-muted-foreground font-inter sm:space-y-2.5 md:space-y-3">
                {f.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2 sm:gap-3">
                    <CircleCheck
                      className="mt-px h-4 w-4 shrink-0 text-[#4ea7fc] sm:mt-[2px] sm:h-5 sm:w-5"
                      aria-hidden
                    />
                    <span className="text-xs leading-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
