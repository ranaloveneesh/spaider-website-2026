"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CHALLENGES = [
  {
    k: "Time Constraints",
    v: "Engineering teams spending 40+ hours per RFP response.",
  },
  {
    k: "Resource Allocation",
    v: "Critical engineers diverted from core product development.",
  },
  {
    k: "Opportunity Cost",
    v: "Missing RFPs that could drive significant revenue.",
  },
  {
    k: "Knowledge Management",
    v: "Hard to leverage previous responses across teams.",
  },
];

export default function RfpChallenge() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        {/* LEFT: Copy */}
        <div className="min-w-0 md:col-span-7">
          <h2 className="mb-6 font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">
            The RFP Challenge
          </h2>

          {/* P1 always visible */}
          <p className="mt-4 max-w-2xl text-xs leading-6 text-muted-foreground font-inter sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
            Every year, space organizations handle hundreds of RFPs, each
            requiring significant time from specialized engineering teams.
          </p>

          {/* P2 collapsible on mobile, always visible on md+ */}
          <div className={`md:block ${expanded ? "block" : "hidden"}`}>
            <p className="mt-3 max-w-2xl text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 md:mt-4 lg:text-base lg:leading-7">
              With limited resources and growing competition, teams face tough
              choices on where to invest effort—risking delays and missed
              opportunities.
            </p>
          </div>

          {/* Toggle (mobile only) */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/20 px-3 py-2 text-xs text-foreground/70 transition hover:bg-background/30 sm:px-4 sm:text-sm md:hidden"
            aria-expanded={expanded}
            aria-controls="rfp-more"
          >
            {expanded ? "Read less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>

        {/* RIGHT: Aside / bullets */}
        <aside className="min-w-0 md:col-span-5" id="rfp-more">
          <div
            className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:rounded-2xl sm:p-5 md:p-8"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
              background:
                "linear-gradient(135deg, rgba(255,89,90,0.14), rgba(255,255,255,0.03))",
            }}
          >
            <h3 className="font-manrope text-base font-semibold text-foreground sm:text-lg lg:text-xl">
              Common RFP Challenges
            </h3>

            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3 md:mt-6 md:space-y-5">
              {CHALLENGES.map((c, i) => (
                <li
                  key={c.k}
                  className={`${i >= 2 && !expanded ? "hidden md:flex" : "flex"} gap-2 text-xs leading-6 text-muted-foreground font-inter sm:gap-3 sm:text-sm sm:leading-7 md:gap-4 lg:text-base lg:leading-7`}
                >
                  <span className="mt-[6px] inline-block h-2.5 w-2.5 md:h-2 md:w-3 rounded-full bg-[#ff595a] shadow-[0_0_0_5px_rgba(255,89,90,0.15)] md:shadow-[0_0_0_6px_rgba(255,89,90,0.15)]" />
                  <p>
                    <span className="font-semibold text-white">{c.k}:</span>{" "}
                    {c.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
