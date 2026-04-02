"use client";
import Image from "next/image";
import CeramicButton from "./ui/button";
import Link from "next/link";

export default function AgentsHero() {
  return (
    <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8 lg:justify-between lg:items-center">
      <div className="w-full flex-1 lg:max-w-[560px] ">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-3xl lg:text-4xl font-manrope">
            Meet SAGAN
          </h2>

          <p className="max-w-lg text-base leading-normal text-muted-tertiary font-inter">
            Analyze RFPs, extract requirements, flag risks, map traceability,
            and draft compliant responses with clear sources—so your team
            focuses on strategy, not copy-paste.
          </p>

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
            <CeramicButton
              href="/request-demo"
              color="rgba(255, 255, 255, 0.06)"
              ringColor="rgba(255, 255, 255, 0.22)"
              textColor="var(--color-white)"
              borderRadius={9999}
              padding="8px 16px"
            >
              REQUEST DEMO
            </CeramicButton>

            <Link
              href="/briefs/sagan-onepager.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-2 font-semibold text-white transition hover:bg-white/5"
            >
              Download the one-pager
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-1  lg:ml-auto overflow-visible lg:flex lg:justify-end rounded-3xl">
        <div
          className="relative w-full overflow-visible border border-border rounded-3xl"
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <Image
            src="/demo.png"
            alt="Dashboard preview"
            fill
            priority
            className="object-cover object-left p-4 rounded-3xl w-fit"
          />
        </div>
      </div>
    </div>
  );
}
