"use client";

import LLMLimitations from "./sections/LLMLimitations";
import Visual from "./sections/Visual";
import SplitTextLeft from "./sections/SplitTextLeft";
import UseCases from "./sections/UseCases";
import FinalCTA from "./sections/FinalCTA";
import CeramicButton from "@/app/components/ui/button";
import IntegrationsGallery from "@/app/components/IntegrationsGallery";
import Image from "next/image";

export default function FoundationsPage() {
  return (
    <div className="space-y-8 pb-12 md:space-y-10">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8 lg:justify-between lg:items-center">
        <div className="w-full flex-1 lg:max-w-[560px] ">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-3xl lg:text-4xl font-manrope">
              AI Foundations
            </h2>

            <p className="max-w-lg text-base leading-normal text-muted-tertiary font-inter">
              Turn unstructured knowledge into an interactive, compliant
              knowledge base.
              <br />
              All your enterprise data, one query away.
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

      <LLMLimitations />

      <Visual
        title="Onboarding in 3 steps"
        src="/foundations/inforag1.png"
        alt="Onboarding in three steps"
      />

      <SplitTextLeft kicker="PIPELINE" title="Steps to chat with your data" />

      <UseCases />

      <div className="mt-12">
        <FinalCTA />
      </div>
    </div>
  );
}
