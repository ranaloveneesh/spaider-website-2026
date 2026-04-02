"use client";

type StepItem = {
  title: string;
  description: string;
};

const STEPS: StepItem[] = [
  {
    title: "Assign Oversight",
    description:
      "Designate a SAGAN Manager responsible for configuration and operational oversight.",
  },
  {
    title: "Configure Core Intelligence",
    description:
      "Set access, tone, creativity/accuracy balance, autonomy and guardrails.",
  },
  {
    title: "Integrate Knowledge Base",
    description:
      "Connect internal repositories, tools, and external databases with citations.",
  },
  {
    title: "Orchestrate Proposal Workflow",
    description:
      "Requirements intake, section drafting, format checks, review cycles and submission.",
  },
];

function Dot() {
  return (
    <span className="relative inline-flex h-4 w-4 items-center justify-center">
      <span className="absolute inline-block h-4.5 w-4.5 rounded-full border border-border/70 bg-white/15" />
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-tertiary/70" />
    </span>
  );
}

export default function OnboardingTimeline() {
  return (
    <section className="mx-auto w-[98%] max-w-420 py-14 md:py-18">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope">
          Seamless Onboarding
        </h2>
      </div>

      <div className="relative mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[7px] h-0.5 bg-border/70"
        />

        <div className="-mx-2 overflow-x-auto px-2 pb-2">
          <ul className="flex w-full gap-10 pr-2 sm:gap-14">
            {STEPS.map((step) => {
              return (
                <li key={step.title} className="min-w-[220px] flex-1">
                  <div className="relative flex h-4 items-center">
                    <Dot />
                  </div>

                  <div className="mt-4 py-3 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)]">
                    <h4 className="text-sm font-medium tracking-tight text-foreground font-inter">
                      {step.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-muted-tertiary font-inter">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
