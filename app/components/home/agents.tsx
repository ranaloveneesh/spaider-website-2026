"use client";

import { Tab } from "@/app/components/ui/animated-tabs";
import { AnimatedTabs } from "@/app/components/ui/animated-tabs";

const tabs: Tab[] = [
  {
    id: "ai-foundations",
    label: "AI Foundations",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Foundations"
          className="rounded-sm w-full h-100 object-cover mt-0 m-0! shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />

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
        <img
          src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="SAGAN"
          className="rounded-sm w-full h-100 object-cover mt-0 m-0! shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
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
        <img
          src="https://images.unsplash.com/photo-1522428938647-2baa7c899f2f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kepler"
          className="rounded-sm w-full h-100 object-cover mt-0 m-0!  shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
        />
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
        <AnimatedTabs tabs={tabs} />
      </div>
    </section>
  );
}
