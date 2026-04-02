"use client";

import Image from "next/image";
import { Chip } from "./SpaiderChips";
import { RocketTrackMini } from "./RocketTrackMini";
import { SPAIDER_SECTION_ICONS, STRENGTH_LABELS } from "./constants";

export function SpaiderSectionMobile() {
  return (
    <div className="md:hidden">
      <div className="mx-[calc(50%-50vw)] w-screen rounded-[22px] bg-panel/30 border border-border/50 p-2">
        <div className="grid grid-cols-2 gap-2">
          <article className="relative col-span-2 overflow-hidden rounded-[18px] p-3 bg-background/10 border border-border/40">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 35%, rgba(0,0,0,0) 75%)",
              }}
            />
            <h3 className="font-medium leading-tight text-foreground">
              <span className="font-manrope">Why SPAIDER?</span>
              <span className="font-manrope">
                Engineered for Aerospace Excellence.
              </span>
            </h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-muted opacity-90">
              Here&apos;s why leading aerospace organizations choose SPAIDER for
              their most critical AI initiatives, turning complex challenges
              into mission success.
            </p>
          </article>

          <article className="rounded-[18px] bg-panel/40 p-3 shadow-sm border border-border/40">
            <h5 className="text-[1.05rem] font-semibold text-foreground">
              Fully Private
            </h5>

            <div className="mt-3 rounded-2xl bg-background/20 p-4 border border-border/40">
              <div className="flex items-center justify-center">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-panel/40 shadow-sm border border-border/40 overflow-hidden">
                  <Image
                    src={SPAIDER_SECTION_ICONS.lock}
                    alt="Private"
                    width={200}
                    height={200}
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </div>

            <h6 className="mt-3 text-[1rem] font-semibold text-foreground">
              Own your data &amp; IP
            </h6>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
              Your data stays where it belongs, with you — on-prem or secure
              private cloud.
            </p>
          </article>

          <article className="rounded-[18px] bg-panel/40 p-3 shadow-sm border border-border/40">
            <h5 className="text-[1rem] font-semibold text-foreground">
              Our Strength
            </h5>

            <ul className="mt-3 space-y-2.5">
              {STRENGTH_LABELS.map((label, i) => (
                <li
                  key={label}
                  className={`rounded-lg px-3 py-2.5 font-semibold text-foreground shadow-sm border ${
                    i % 2 === 0
                      ? "bg-background/20 border-border/60"
                      : "bg-background/10 border-border/40"
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </article>

          <article className="col-span-2 rounded-[18px] bg-panel/40 p-3 shadow-sm border border-border/40">
            <h5 className="text-[1.05rem] font-semibold text-foreground">
              Flexible deployment
            </h5>
            <div className="mt-2 rounded-2xl bg-background/20 p-2 border border-border/40">
              <RocketTrackMini />
            </div>
            <div className="text-muted">Choose</div>
          </article>

          <article className="col-span-2 rounded-[18px] bg-panel/40 p-3 shadow-sm border border-border/40">
            <div className="space-y-2 rounded-2xl bg-background/20 p-2 shadow-inner border border-border/40">
              <Chip>Foundation (RAG)</Chip>
              <Chip>Pre-Built Agents</Chip>
              <Chip>Custom Agents</Chip>
            </div>
            <h4 className="mt-3 ml-4 text-[1.1rem] font-semibold text-foreground">
              Making your enterprise AI-ready, one step at a time.
            </h4>
          </article>
        </div>
      </div>
    </div>
  );
}
