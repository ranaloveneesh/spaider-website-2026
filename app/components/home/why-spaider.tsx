"use client";

import Reveal from "@/app/components/ui/reveal";

const ITEMS = [
    {
        t: "Aerospace-native intelligent automation",
        d: "Domain-expert AI Models, powering domain-trained AI Agents for deep technical & operational aerospace workflows.",
    },
    {
        t: "Grounded and governed data analysis",
        d: "Outputs stay tied to approved data, sources, and internal knowledge.",
    },
    {
        t: "Deployable in sensitive environments",
        d: "Run on EU cloud, private cloud, or on-prem with controlled access and data handling.",
    },
];

export default function WhySpaider() {
    return (
        <section className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
            <Reveal as="h2" variant="fade-up" threshold={0.35} className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Why choose SPAIDER
            </Reveal>

            <Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Built by aerospace experts for the aerospace industry.
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:gap-9 lg:mt-12 lg:grid-cols-3 lg:gap-12">
                {ITEMS.map((it, i) => (
                    <Reveal key={it.t} variant="fade-left" threshold={0.2} delayMs={i * 90} className="flex min-w-0 items-start gap-2 text-left sm:gap-3">
                        <span aria-hidden className="-mr-1 shrink-0 select-none font-bold leading-[0.75] tracking-[-0.05em] text-accent opacity-90 [clip-path:inset(0_16%_0_0)] [text-shadow:0_0_14px_rgba(17,45,199,0.25)] text-[2.75rem] sm:-mr-2 sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[7rem]">
                            {i + 1}
                        </span>
                        <div className="min-w-0">
                            <h3 className="font-manrope text-base font-semibold leading-snug text-foreground sm:text-lg lg:text-xl">{it.t}</h3>
                            <p className="mt-2 text-xs leading-6 text-muted-foreground font-inter sm:mt-3 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{it.d}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
