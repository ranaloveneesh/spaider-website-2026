"use client";

import Reveal from "@/app/components/ui/reveal";

const ITEMS = [
  {
    t: "More than just a RAG",
    d: "We don't make a simple RAG pipeline, we develop an Agentic RAG Platform with knowledge graph, vectorDB and websearch",
  },
  {
    t: "Interactive & Agentic",
    d: "You can send commands and query your Agentic RAG via chat or email like you would do with a co-worker",
  },
  {
    t: "Auto Database Management",
    d: "Agentic RAG help you maintain and grow your database with trusted sources and instructions that you provide",
  },
  {
    t: "Local Deployment Option",
    d: "Upon request we provide a local deployment option for sensitive data and high compliance needs",
  },
  {
    t: "Proprietary Models",
    d: "Your RAG Platform will gives you access to our propriety models fine-tuned on domain-specific data",
  },
  {
    t: "High Accuracy and Awareness",
    d: "Your Platform will be aware of your data and context, providing accurate and compliant answers with sources",
  },
];

export default function LLMLimitations() {
  return (
    <section className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
      <Reveal as="h2" variant="fade-up" threshold={0.35} className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
        What you get with SPAIDER&apos;s Foundations
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:gap-9 lg:mt-12 lg:grid-cols-3 lg:gap-10">
        {ITEMS.map((it, i) => (
          <Reveal
            key={i}
            variant="fade-left"
            threshold={0.2}
            delayMs={i * 90}
            className="flex min-w-0 items-start gap-2 text-left sm:gap-3"
          >
            <span
              aria-hidden
              className="-mr-1 shrink-0 select-none font-bold leading-[0.75] tracking-[-0.05em] text-[var(--color-accent)] opacity-90 [clip-path:inset(0_16%_0_0)] [text-shadow:0_0_14px_rgba(17,45,199,0.25)] text-[2.75rem] sm:-mr-2 sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7rem]"
            >
              {i + 1}
            </span>
            <div className="min-w-0 pt-1 sm:pt-2">
              <h3 className="font-manrope text-base font-semibold leading-snug text-foreground sm:text-lg lg:text-xl">
                {it.t}
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground font-inter sm:mt-3 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                {it.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
