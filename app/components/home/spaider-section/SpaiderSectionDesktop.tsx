"use client";

import Image from "next/image";
import { Chip, MiniPill } from "./SpaiderChips";
import { RocketTrackMini } from "./RocketTrackMini";
import { SPAIDER_SECTION_ICONS } from "./constants";

export function SpaiderSectionDesktop() {
  return (
    <div className="hidden md:block">
      <div
        className="rounded-[22px] p-2 lg:p-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0))",
          boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[20px] bg-panel/40 p-5 lg:p-6 xl:p-7 lg:col-span-8 border border-border/40 [isolation:isolate]">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 35%, rgba(0,0,0,0) 75%)",
              }}
            />
            <div className="relative z-10 text-foreground">
              <h3 className="font-semibold leading-tight text-[clamp(1.8rem,2.6vw,2.4rem)]">
                <span className="font-manrope">Why SPAIDER?</span>
                <div className="font-manrope">
                  Engineered for Aerospace Excellence.
                </div>
              </h3>
              <p className="mt-4 max-w-4xl text-[clamp(1.05rem,1.15vw,1.2rem)] leading-relaxed opacity-90 text-muted">
                Here&apos;s why leading aerospace organizations choose SPAIDER for
                their most critical AI initiatives, turning complex challenges
                into mission success.
              </p>
            </div>
          </article>

          <article className="rounded-[20px] bg-panel/40 p-3 shadow-sm border border-border/40 lg:col-span-4">
            <div className="space-y-2 rounded-2xl bg-background/20 p-2 shadow-inner border border-border/40">
              <Chip>Foundation (RAG)</Chip>
              <Chip>Pre-Built Agents</Chip>
              <Chip>Custom Agents</Chip>
            </div>
            <h4 className="mt-3 ml-4 text-[1rem] font-semibold text-foreground">
              Making your enterprise AI-ready, one step at a time.
            </h4>
          </article>

          <article className="rounded-[20px] bg-panel/40 p-3 shadow-sm border border-border/40 lg:col-span-4">
            <h5 className="text-[1.1rem] font-semibold text-center text-foreground">
              Fully Private
            </h5>

            <div className="mt-4 rounded-2xl bg-background/20 p-4 border border-border/40">
              <div className="flex items-start justify-between gap-4 px-2">
                {[
                  { src: SPAIDER_SECTION_ICONS.agent, label: "Agents" },
                  { src: SPAIDER_SECTION_ICONS.brain, label: "AI" },
                  { src: SPAIDER_SECTION_ICONS.disk, label: "Data & IP" },
                ].map((i) => (
                  <div
                    key={i.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-panel/40 shadow-sm border border-border/40">
                      <Image
                        src={i.src}
                        alt={i.label}
                        width={200}
                        height={200}
                        className="h-12 w-12"
                      />
                    </div>
                    <span className="text-[0.95rem] font-semibold text-foreground">
                      {i.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <h6 className="mt-5 ml-1 text-[1.1rem] font-semibold text-foreground">
              Own your data &amp; IP
            </h6>
            <p className="mt-2 ml-1 text-[15px] leading-relaxed text-muted">
              Your data stays where it belongs, with you — on-prem or secure
              private cloud.
            </p>
          </article>

          <article className="rounded-[20px] bg-panel/40 p-3 shadow-sm border border-border/40 lg:col-span-4">
            <h5 className="text-[1.1rem] font-semibold text-foreground">
              Our Strength
            </h5>
            <div className="mt-3 rounded-2xl bg-background/20 p-2 border border-border/40">
              <div className="space-y-2">
                <MiniPill
                  right={
                    <Image
                      src={SPAIDER_SECTION_ICONS.dna}
                      alt="DNA"
                      width={180}
                      height={180}
                      className="h-[2.6rem] w-[2.6rem] md:h-[2.6rem] md:w-[2.6rem]"
                    />
                  }
                >
                  Deep Aerospace DNA
                </MiniPill>
                <MiniPill
                  right={
                    <Image
                      src={SPAIDER_SECTION_ICONS.bot}
                      alt="Bot"
                      width={160}
                      height={160}
                      className="h-[2.1rem] w-[2.1rem] md:h-[2.6rem] md:w-[2.6rem]"
                    />
                  }
                >
                  Autonomous &amp; Adaptive AI
                </MiniPill>
                <MiniPill
                  right={
                    <Image
                      src={SPAIDER_SECTION_ICONS.lock}
                      alt="Lock"
                      width={160}
                      height={160}
                      className="h-[2.1rem] w-[2.1rem] md:h-[2.6rem] md:w-[2.6rem]"
                    />
                  }
                >
                  Industry grade security
                </MiniPill>
                <MiniPill
                  right={
                    <Image
                      src={SPAIDER_SECTION_ICONS.link}
                      alt="Link"
                      width={160}
                      height={160}
                      className="h-[2.1rem] w-[2.1rem] md:h-[2.6rem] md:w-[2.6rem]"
                    />
                  }
                >
                  Comprehensive Integration
                </MiniPill>
              </div>
            </div>
          </article>

          <article className="rounded-[20px] bg-panel/40 p-3 shadow-sm border border-border/40 lg:col-span-4">
            <div className="mt-3 rounded-2xl bg-background/20 p-3 border border-border/40">
              <RocketTrackMini />
            </div>
            <h6 className="mt-6 ml-1 text-[1.05rem] font-semibold text-foreground">
              Flexible deployment{" "}
            </h6>
            <p className="mt-2 ml-1 text-[15px] leading-relaxed text-muted">
              Choose how to deploy based on your company&apos;s needs.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
