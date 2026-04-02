"use client";

import React from "react";

type StepItem = {
  title: string;
  description: string;
};

const STEPS: StepItem[] = [
  {
    title: "Ingest",
    description:
      "Ingest your local files and cloud data into knowledge graphs and vector databases",
  },
  {
    title: "Set up",
    description:
      "Set up your agent by defining instructions, selecting trusted web sources, providing credentials and APIs, and choosing your model",
  },
  {
    title: "Start",
    description:
      "Finally start the conversation to turn your content into governed, searchable context that powers accurate answers and workflows.",
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

export default function SplitTextLeft({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <section className="mx-auto w-[98%] max-w-420 py-14 md:py-18">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope">
          {title}
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
