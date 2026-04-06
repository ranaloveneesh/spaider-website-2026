"use client";

import Reveal from "@/app/components/ui/reveal";

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
    <section className="mx-auto mt-12 w-full min-w-0 max-w-420 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="flex items-end justify-between gap-4 sm:gap-6">
        <Reveal
          as="h2"
          variant="fade-up"
          threshold={0.35}
          className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl"
        >
          Seamless Onboarding
        </Reveal>
      </div>

      <div className="relative mt-6 sm:mt-8 md:mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[7px] h-0.5 bg-border/70"
        />

        <div className="-mx-2 no-scrollbar overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch]">
          <ul className="flex w-full gap-6 pr-2 sm:gap-10 md:gap-12">
            {STEPS.map((step, index) => {
              return (
                <Reveal
                  key={step.title}
                  as="li"
                  variant="fade-right"
                  threshold={0.25}
                  delayMs={index * 120}
                  className="min-w-[200px] flex-1 sm:min-w-[220px]"
                >
                  <div className="relative flex h-4 items-center">
                    <Dot />
                  </div>

                  <div className="mt-2 py-2 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)] sm:py-3">
                    <h4 className="font-inter text-base font-medium tracking-tight text-foreground sm:text-lg">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-6 text-muted-foreground font-inter sm:mt-2 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
