"use client";

import { useState } from "react";
import Reveal from "@/app/components/ui/reveal";
import Image from "next/image";

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">

                {/* ── Left: heading + accordion + CTA ── */}
                <div>
                    <Reveal
                        as="h2"
                        variant="fade-up"
                        threshold={0.35}
                        className="font-outfit text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
                    >
                        <span className="text-foreground">Why choose</span>{" "}
                        <span className="text-accent">SPAIDER</span>
                    </Reveal>

                    {/* Accordion list */}
                    <div className="mt-10 sm:mt-12">
                        {ITEMS.map((item, i) => (
                            <Reveal key={item.t} variant="fade-up" threshold={0.2} delayMs={i * 60}>
                                <div className="border-t border-border/60">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="group flex w-full items-center justify-between py-[1.1rem] text-left"
                                        aria-expanded={openIndex === i}
                                    >
                                        <span
                                            className={`font-outfit text-base font-medium transition-colors duration-200 sm:text-lg ${openIndex === i ? "text-foreground" : "text-foreground/70"
                                                } group-hover:text-foreground`}
                                        >
                                            {item.t}
                                        </span>
                                        <span
                                            aria-hidden
                                            className={`ml-5 shrink-0 text-xl font-light leading-none transition-all duration-300 ${openIndex === i
                                                ? "rotate-45 text-accent"
                                                : "text-muted/50 group-hover:text-muted"
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    {/* Collapsible body */}
                                    <div
                                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${openIndex === i
                                            ? "max-h-48 pb-5 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-sm leading-7 text-muted sm:text-base">
                                            {item.d}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                        {/* closing rule */}
                        <div className="border-t border-border" />
                    </div>


                </div>

                {/* ── Right: 3-D slab stack (desktop only) ── */}
                <Reveal
                    variant="fade-up"
                    threshold={0.2}
                    delayMs={80}
                    className="hidden items-center justify-center md:flex"
                >
                    <Image src="/logo.png" alt="SPAIDER 3D Slab" width={500} height={500} className="logo-3d" />
                </Reveal>
            </div>
        </section>
    );
}


