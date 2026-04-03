"use client";

import dynamic from "next/dynamic";
import type { Tab } from "@/app/components/ui/animated-tabs";

const AnimatedTabs = dynamic(
  () => import("@/app/components/ui/animated-tabs").then((m) => m.AnimatedTabs),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-[28rem] w-full rounded-md border border-white/20 bg-black/40"
        role="status"
        aria-label="Loading product showcase"
      />
    ),
  },
);

function AgentsTabVideo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[min(25rem,70vw)] w-full overflow-hidden rounded-sm border-2 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
      <video
        src={src}
        aria-label={alt}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

const tabs: Tab[] = [
  {
    id: "ai-foundations",
    label: "AI Foundations",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="AI Foundations" />

        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold mb-0 text-white mt-0 m-0! font-manrope">
            AI Foundations
          </h2>
          <p className="text-sm text-gray-200 mt-0">
            AI Foundations is a comprehensive platform that provides the
            necessary tools and resources to build and deploy AI models.
          </p>
          <div className="mt-2">
            <ul className="space-y-1.5 text-sm text-gray-100">
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sagan",
    label: "SAGAN",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="SAGAN" />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold mb-0 text-white mt-0 m-0! font-manrope">
            SAGAN
          </h2>
          <p className="text-sm text-gray-200 mt-0">
            SAGAN is a comprehensive platform that provides the necessary tools
            and resources to build and deploy AI models.
          </p>
          <div className="mt-2">
            <ul className="space-y-1.5 text-sm text-gray-100">
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "kepler",
    label: "KEPLER (Coming Soon)",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <AgentsTabVideo src="/platform-videos/SCIXO.mp4" alt="Kepler" />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-semibold mb-0 text-white mt-0 m-0! font-manrope">
            Kepler
          </h2>
          <p className="text-sm text-gray-200 mt-0">
            Kepler is a comprehensive platform that provides the necessary tools
            and resources to build and deploy AI models.
          </p>
          <div className="mt-2">
            <ul className="space-y-1.5 text-sm text-gray-100">
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
              <li>✓ No-code AI workflow builder</li>
              <li>✓ Model training and fine-tuning</li>
              <li>✓ Real-time analytics dashboard</li>
              <li>✓ Secure API and webhook access</li>
              <li>✓ Team collaboration and versioning</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Agents() {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope">
        Explore our Products
      </h2>

      <div className="mx-auto w-full overflow-hidden relative mt-8">
        <AnimatedTabs tabs={tabs} ariaLabel="Explore our products" />
      </div>
    </section>
  );
}
