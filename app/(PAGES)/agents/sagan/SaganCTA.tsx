// src/app/agents/sagan/SaganCTA.tsx
"use client";

import Link from "next/link";
import CeramicButton from "@/app/components/ui/button";

export default function SaganCTA() {
  return (
    <section className="mx-auto w-full max-w-420 mt-28">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-panel px-6 py-8 text-center shadow-md md:px-10 md:py-12">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 450px at 10% 5%, rgba(78,167,252,0.14), transparent 60%),
              radial-gradient(700px 400px at 90% 15%, rgba(0,112,192,0.12), transparent 60%),
              linear-gradient(180deg, rgba(15,16,17,0.75), rgba(8,9,10,0.9))
            `,
          }}
        />

        <div className="relative">
          <h3 className="text-3xl font-medium leading-tight text-foreground font-manrope">
            Activate Your Strategic Proposal Engine
          </h3>

          <p className="mx-auto mt-5 max-w-4xl text-lg text-foreground">
            See how SAGAN transforms your aerospace bid process. Schedule a
            focused demo tailored to your challenges and opportunities.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CeramicButton
              href="/book-demo"
              color="rgba(255, 255, 255, 0.06)"
              ringColor="rgba(255, 255, 255, 0.22)"
              textColor="var(--color-white)"
              borderRadius={9999}
              padding="8px 16px"
            >
              REQUEST SAGAN DEMO
            </CeramicButton>

            <Link
              href="/briefs/sagan-onepager.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2 font-semibold text-white transition hover:bg-white/5"
            >
              Read the brief
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
