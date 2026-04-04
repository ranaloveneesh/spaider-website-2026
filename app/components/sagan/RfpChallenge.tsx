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
    <section className="mx-auto mt-24">
      <div className="grid gap-10 md:grid-cols-12">
        {/* LEFT: Copy */}
        <div className="md:col-span-7">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-manrope md:mb-10 lg:mb-12">
            The RFP Challenge
          </h2>

          {/* P1 always visible */}
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed font-inter md:text-lg">
            Every year, space organizations handle hundreds of RFPs, each
            requiring significant time from specialized engineering teams.
          </p>

          {/* P2 collapsible on mobile, always visible on md+ */}
          <div className={`md:block ${expanded ? "block" : "hidden"}`}>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed font-inter md:text-lg md:mt-4">
              With limited resources and growing competition, teams face tough
              choices on where to invest effort—risking delays and missed
              opportunities.
            </p>
          </div>

          {/* Toggle (mobile only) */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/20 px-4 py-2 text-sm text-foreground/70 hover:bg-background/30 transition md:hidden"
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
        <aside className="md:col-span-5" id="rfp-more">
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-8"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
              background:
                "linear-gradient(135deg, rgba(255,89,90,0.14), rgba(255,255,255,0.03))",
            }}
          >
            <h3 className="text-xl font-semibold md:text-2xl text-foreground font-manrope">
              Common RFP Challenges
            </h3>

            <ul className="mt-5 space-y-3 md:mt-6 md:space-y-5">
              {CHALLENGES.map((c, i) => (
                <li
                  key={c.k}
                  className={`${i >= 2 && !expanded ? "hidden md:flex" : "flex"} gap-3 md:gap-4 text-muted-foreground text-[0.96rem] md:text-base`}
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
