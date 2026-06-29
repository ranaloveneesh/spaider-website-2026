"use client";

import Image from "next/image";
import FinalCTA from "../../components/ai-foundations/FinalCTA";
import UseCases from "../../components/ai-foundations/UseCases";
import Onboarding from "../../components/ai-foundations/Onboarding";
import AIFoundationsHero from "../../components/ai-foundations/Hero";
import WhySpaider from "../../components/home/WhySpaider";

const foundationsItems = [
  {
    t: "Grounded knowledge retrieval",
    d: "Turn scattered documents and data into answers grounded in approved internal and external sources.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src="/agents/ai-foundations/12.png" alt="Grounded knowledge retrieval" fill className="object-cover" />
      </div>
    ),
  },
  {
    t: "Interactive AI workspace",
    d: "Query knowledge, issue commands, and work with your data through a chat-based interface built for real workflows.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src="/agents/ai-foundations/12.png" alt="Interactive AI workspace" fill className="object-cover" />
      </div>
    ),
  },
  {
    t: "Continuous knowledge management",
    d: "Keep your knowledge layer current by organizing trusted sources, ingestion rules, and update workflows.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src="/agents/ai-foundations/12.png" alt="Continuous knowledge management" fill className="object-cover" />
      </div>
    ),
  },
  {
    t: "Controlled deployment",
    d: "Deploy on EU cloud, private cloud, or on-prem to match security, governance, and infrastructure needs.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src="/agents/ai-foundations/12.png" alt="Controlled deployment" fill className="object-cover" />
      </div>
    ),
  },
];

export default function FoundationsPageClient() {
  return (
    <div className="w-full min-w-0 mx-auto max-w-7xl">
      <AIFoundationsHero />
      <WhySpaider
        title={<span className="text-foreground">What you get</span>}
        subtitle="Capabilities for turning enterprise knowledge into usable, governed AI context."
        items={foundationsItems}
      />
      <Onboarding />
      <UseCases />
      <FinalCTA />
    </div>
  );
}
