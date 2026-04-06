"use client";
import Image from "next/image";
import CeramicButton from "../ui/button";
import Link from "next/link";
import Pill from "../Pill";
import Reveal from "@/app/components/ui/reveal";

export default function AgentsHero() {
  return (
    <div className="mt-12 flex min-w-0 flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
      <Reveal
        variant="fade-up"
        threshold={0.35}
        className="w-full min-w-0 flex-1 lg:max-w-[560px]"
      >
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 lg:items-start">
          <Pill variant="outline">RFP Manager</Pill>

          <h2 className="font-manrope text-center text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-left lg:text-3xl">
            Meet SAGAN
          </h2>

          <p className="max-w-lg text-center text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-left lg:text-base lg:leading-7">
            Analyze RFPs, extract requirements, flag risks, map traceability,
            and draft compliant responses with clear sources—so your team
            focuses on strategy, not copy-paste.
          </p>

          <div className="flex w-full max-w-md flex-col items-stretch gap-3 pt-1 sm:max-w-none sm:flex-row sm:items-center justify-center lg:justify-start sm:pt-2 lg:max-w-none">
            <div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
              <CeramicButton
                href="/request-demo"
                color="rgba(255, 255, 255, 0.06)"
                ringColor="rgba(255, 255, 255, 0.22)"
                textColor="var(--color-white)"
                borderRadius={9999}
                padding="8px 16px"
                centered
              >
                REQUEST DEMO
              </CeramicButton>
            </div>

            <Link
              href="/briefs/sagan-onepager.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/5 sm:min-h-10 sm:w-auto sm:px-6 sm:text-sm"
            >
              Download the one-pager
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal
        variant="scale"
        threshold={0.25}
        className="relative w-full min-w-0 flex-1 overflow-hidden rounded-2xl sm:rounded-3xl lg:ml-auto lg:flex lg:justify-end"
      >
        <div className="relative h-[min(52vw,280px)] w-full min-w-0 overflow-hidden border border-border p-2 sm:h-[min(48vw,360px)] sm:rounded-2xl sm:p-3 md:h-[400px] md:rounded-3xl md:p-4 lg:h-[min(520px,55vh)] xl:h-[min(600px,60vh)]">
          <Image
            src="/demo.png"
            alt="Dashboard preview"
            fill
            priority
            className="rounded-lg object-cover object-left sm:rounded-xl md:rounded-2xl"
            sizes="(max-width: 1023px) 100vw, 560px"
          />
        </div>
      </Reveal>
    </div>
  );
}
