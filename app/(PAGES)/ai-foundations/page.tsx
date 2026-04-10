"use client";

import Image from "next/image";
import FinalCTA from "../../components/ai-foundations/FinalCTA";
import UseCases from "../../components/ai-foundations/UseCases";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Onboarding from "../../components/ai-foundations/Onboarding";
import AIFoundationsHero from "../../components/ai-foundations/Hero";

const stickyScrollContent = [
  {
    title: "Grounded knowledge retrieval",
    description:
      "Turn scattered documents and data into answers grounded in approved internal and external sources.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/foundations/inforag1.png"
          alt="real time changes demo"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Interactive AI workspace",
    description:
      "Query knowledge, issue commands, and work with your data through a chat-based interface built for real workflows.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/foundations/inforag2.png"
          alt="real time changes demo"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Continuous knowledge management",
    description:
      "Keep your knowledge layer current by organizing trusted sources, ingestion rules, and update workflows.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/foundations/inforag3.png"
          alt="real time changes demo"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Controlled deployment",
    description:
      "Deploy on EU cloud, private cloud, or on-prem to match security, governance, and infrastructure needs.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/foundations/inforag1.png"
          alt="real time changes demo"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
];

export default function FoundationsPage() {
  return (
    <div className="mt-4 w-full min-w-0 space-y-8 pb-10 sm:mt-6 sm:space-y-10 sm:pb-12 md:space-y-12">
      <AIFoundationsHero />
      <StickyScroll title="What you get with SPAIDER Foundations" subtitle="Capabilities for turning enterprise knowledge into usable, governed AI context." content={stickyScrollContent} />
      <Onboarding />
      <UseCases />
      <FinalCTA />
    </div>
  );
}
