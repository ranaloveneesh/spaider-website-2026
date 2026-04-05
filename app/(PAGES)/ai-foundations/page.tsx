"use client";

import LLMLimitations from "../../components/ai-foundations/LLMLimitations";
import Visual from "../../components/ai-foundations/Visual";
import SplitTextLeft from "../../components/ai-foundations/SplitTextLeft";
import UseCases from "../../components/ai-foundations/UseCases";
import FinalCTA from "../../components/ai-foundations/FinalCTA";
import CeramicButton from "@/app/components/ui/button";
import Image from "next/image";
import Pill from "@/app/components/Pill";
// import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

// const stickyScrollContent = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="relative flex h-full w-full items-center justify-center text-white">
//         <Image
//           src="/demo.png"
//           alt="real time changes demo"
//           fill
//           className="object-cover"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="relative flex h-full w-full items-center justify-center text-white">
//         <Image
//           src="/demo.png"
//           alt="real time changes demo"
//           fill
//           className="object-cover"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="relative flex h-full w-full items-center justify-center text-white">
//         <Image
//           src="/demo.png"
//           alt="real time changes demo"
//           fill
//           className="object-cover"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="relative flex h-full w-full items-center justify-center text-white">
//         <Image
//           src="/demo.png"
//           alt="real time changes demo"
//           fill
//           className="object-cover"
//         />
//       </div>
//     ),
//   },
// ];

export default function FoundationsPage() {
  return (
    <div className="mt-4 w-full min-w-0 space-y-8 pb-10 sm:mt-6 sm:space-y-10 sm:pb-12 md:space-y-12">
      <div className="flex min-w-0 flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-8 lg:justify-between">
        <div className="w-full min-w-0 flex-1 lg:max-w-[560px]">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-center lg:items-start">
            <Pill variant="outline">Talk to your data</Pill>
            <h2 className="font-manrope text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              AI Foundations
            </h2>

            <p className="max-w-lg text-center text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7 lg:text-left">
              Turn unstructured knowledge into an interactive, compliant
              knowledge base.
              <br />
              All your enterprise data, one query away.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:pt-2">
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
            </div>
          </div>
        </div>

        <div className="relative w-full min-w-0 flex-1 overflow-hidden rounded-2xl sm:rounded-3xl lg:ml-auto lg:flex lg:justify-end">
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
        </div>
      </div>
      {/* <StickyScroll content={stickyScrollContent} /> */}
      <LLMLimitations />
      <Visual
        title="Onboarding in 3 steps"
        src="/foundations/inforag1.png"
        alt="Onboarding in three steps"
      />
      <SplitTextLeft kicker="PIPELINE" title="Steps to chat with your data" />
      <UseCases />
      <FinalCTA />
    </div>
  );
}
