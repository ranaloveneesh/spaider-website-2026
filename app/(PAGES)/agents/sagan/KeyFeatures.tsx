"use client";

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

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
    />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const spanByIndex = (_i: number) => "lg:col-span-6";

export default function KeyFeatures() {
  return (
    <section className="mx-auto mt-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-manrope md:mb-10 lg:mb-12">
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
        {FEATURES.map((f, i) => (
          <article
            key={f.title}
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
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex items-start">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold tracking-tight font-manrope">
                  {f.title}
                </h3>
              </div>

              <ul className="space-y-3 text-muted-foreground leading-relaxed font-inter">
                {f.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-3">
                    <IconCheck className="mt-[2px] h-5 w-5 text-[#4ea7fc]" />
                    <span>{b}</span>
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
