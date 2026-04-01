"use client";

import React from "react";

type ChangelogItem = {
  title: string;
  description: string;
};

const ITEMS: ChangelogItem[] = [
  {
    title: "Define your use case",
    description: "Identify the workflow you want to agentify.",
  },
  {
    title: "Prepare your data",
    description:
      "We make your private data ready e.g. Vector DB/ Knowledge Graph.",
  },
  {
    title: "Prototype",
    description: "We create a working prototype with you in the loop actively.",
  },
  {
    title: "Deploy",
    description:
      "We deploy in your secure cloud or on-prem infra as per your needs.",
  },
];

function Dot() {
  return (
    <span className="relative inline-flex h-4 w-4 items-center justify-center">
      <span
        className={[
          "absolute inline-block h-4.5 w-4.5 rounded-full border border-border/70 bg-white/15",
        ].join(" ")}
      />
      <span
        className={[
          "inline-block h-1.5 w-1.5 rounded-full",
          "bg-muted-tertiary/70",
        ].join(" ")}
      />
    </span>
  );
}

export default function GetStarted() {
  return (
    <section className="mt-24">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope">
          Get started with SPAIDER
        </h2>
      </div>

      <div className="relative mt-12">
        {/* timeline line - vertically centered on the dot (dot is h-4 = 16px, center = 8px) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[7px] h-0.5 bg-border/70"
        />

        <div className="-mx-2 overflow-x-auto px-2 pb-2">
          <ul className="flex w-full pr-2 gap-10 sm:gap-14">
            {ITEMS.map((item) => {
              return (
                <li key={`${item.title}`} className="flex-1 min-w-[200px]">
                  {/* Dot centered on the line */}
                  <div className="relative h-4 flex items-center">
                    <Dot />
                  </div>

                  <div className="mt-4 py-3 shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)]">
                    <h3 className="text-sm font-medium tracking-tight text-foreground font-inter">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-tertiary font-inter line-clamp-2">
                      {item.description}
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
