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
    <div className="space-y-8 pb-12 md:space-y-10 mt-6">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8 lg:justify-between lg:items-center">
        <div className="w-full flex-1 lg:max-w-[560px] ">
          <div className="space-y-6">
            <Pill variant="outline">Talk to your data</Pill>
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
